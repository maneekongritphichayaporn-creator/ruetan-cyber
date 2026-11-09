const { createHmac, timingSafeEqual } = require("node:crypto");

const MAX_BODY_SIZE = 1024 * 1024;
const EMERGENCY_KEYWORDS = [
  "โดนโกง",
  "ดูดเงิน",
  "โอนเงินผิด",
  "ถูกหลอก",
  "โอนไปแล้ว",
  "สลิป",
];

const EMERGENCY_REPLY = [
  "🚨 หากสงสัยว่าถูกหลอกโอนเงิน ให้รีบทำตามนี้",
  "",
  "1. โทร AOC 1441 โดยเร็ว เพื่อขอคำแนะนำและประสานการระงับบัญชี",
  "2. ติดต่อธนาคารของคุณทันทีผ่านช่องทางทางการ เพื่อแจ้งเหตุและขอระงับธุรกรรมหรือบัญชีที่เกี่ยวข้อง",
  "3. เก็บหลักฐานไว้ให้ครบ เช่น สลิปที่มีเลขรายการ วันเวลา แชต เบอร์โทร และบัญชีปลายทาง อย่าลบต้นฉบับ",
  "4. แจ้งความผ่านช่องทางทางการของตำรวจที่ thaipoliceonline.go.th หรือสถานีตำรวจ",
  "",
  "อย่าโอนเงินเพิ่ม อย่าเปิดเผยรหัสผ่านหรือ OTP และอย่าติดตั้งแอปตามคำแนะนำของผู้ติดต่อที่ไม่รู้จัก",
  "ข้อมูลนี้เป็นคำแนะนำเบื้องต้น หากกำลังเกิดเหตุให้ติดต่อธนาคารและ AOC 1441 ทันที",
].join("\n");

const GENERAL_REPLY =
  'สวัสดีค่ะ หากต้องการความช่วยเหลือกรณีถูกหลอกหรือโอนเงินไปแล้ว พิมพ์ "โดนโกง" หรือ "ดูดเงิน" เพื่อรับขั้นตอนเบื้องต้น หากกำลังเกิดเหตุให้โทร AOC 1441 และติดต่อธนาคารทันที';

function respond(res, status, message) {
  res.status(status).json({ message });
}

async function readRawBody(req) {
  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_SIZE) {
      const error = new Error("Webhook request body is too large");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

function hasValidSignature(rawBody, signature, channelSecret) {
  if (!signature || !/^[A-Za-z0-9+/]+={0,2}$/.test(signature)) {
    return false;
  }

  const received = Buffer.from(signature, "base64");
  if (received.toString("base64") !== signature) {
    return false;
  }

  const expected = createHmac("sha256", channelSecret)
    .update(rawBody)
    .digest();

  return (
    received.length === expected.length &&
    timingSafeEqual(received, expected)
  );
}

async function replyToEvent(event, channelAccessToken) {
  if (
    event?.type !== "message" ||
    event.mode === "standby" ||
    event.message?.type !== "text" ||
    typeof event.message.text !== "string" ||
    typeof event.replyToken !== "string" ||
    event.replyToken.length === 0
  ) {
    return;
  }

  const text = event.message.text.normalize("NFC").toLocaleLowerCase("th-TH");
  const isEmergency = EMERGENCY_KEYWORDS.some((keyword) =>
    text.includes(keyword)
  );

  const response = await fetch(
    "https://api.line.me/v2/bot/message/reply",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${channelAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        replyToken: event.replyToken,
        messages: [
          { type: "text", text: isEmergency ? EMERGENCY_REPLY : GENERAL_REPLY },
        ],
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`LINE reply API returned status ${response.status}`);
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, 405, "Method not allowed");
  }

  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!channelSecret || !channelAccessToken) {
    console.error("LINE webhook is missing required environment variables");
    return respond(res, 500, "Webhook is not configured");
  }

  let rawBody;
  try {
    rawBody = await readRawBody(req);
  } catch (error) {
    if (error.statusCode === 413) {
      return respond(res, 413, "Request body is too large");
    }
    console.error("Unable to read LINE webhook request body:", error.message);
    return respond(res, 400, "Invalid request body");
  }

  const signature = req.headers["x-line-signature"];
  if (!hasValidSignature(rawBody, signature, channelSecret)) {
    return respond(res, 401, "Invalid signature");
  }

  let body;
  try {
    body = JSON.parse(rawBody.toString("utf8"));
  } catch {
    return respond(res, 400, "Invalid JSON");
  }

  if (!body || !Array.isArray(body.events)) {
    return respond(res, 400, "Invalid webhook event");
  }

  try {
    await Promise.all(
      body.events.map((event) => replyToEvent(event, channelAccessToken))
    );
    return respond(res, 200, "OK");
  } catch (error) {
    console.error("Failed to process LINE webhook event:", error.message);
    return respond(res, 500, "Failed to process webhook event");
  }
};

module.exports.config = {
  api: {
    bodyParser: false,
  },
};
