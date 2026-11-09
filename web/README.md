# รู้ทัน-ไม่ตกเป็นเหยื่อภัยไซเบอร์ — Web Application

เว็บไซต์ "รู้ทัน-ไม่ตกเป็นเหยื่อภัยไซเบอร์"
เป็นเว็บแอปพลิเคชันที่มุ่งให้ความรู้และเผยแพร่ข้อมูลเตือนภัยออนไลน์ เพื่อช่วยให้ประชาชนรู้เท่าทันกลโกงและมิจฉาชีพในโลกดิจิทัล พร้อมเปิดช่องทางให้ผู้ใช้งานส่งข้อมูลเบาะแสเกี่ยวกับเหตุการณ์หรือช่องทางที่อาจเกี่ยวข้องกับมิจฉาชีพ

## Features

- เผยแพร่ข่าวสารและข้อมูลเตือนภัยออนไลน์
- ให้ความรู้เกี่ยวกับกลโกงออนไลน์และแนวทางป้องกันตนเอง
- เปิดช่องทางให้ผู้ใช้งานส่งข้อมูลเบาะแสที่เกี่ยวข้องกับภัยออนไลน์
- รองรับการส่งสรุปจาก LIFF เข้าแชต LINE ในหน้าคู่มือและหน้าส่งเรื่อง
- แสดงข้อมูลเกี่ยวกับเว็บไซต์ นโยบายความเป็นส่วนตัว และเงื่อนไขการใช้งาน

## Technologies

- **React** — สร้างส่วนติดต่อผู้ใช้งาน (UI)
- **TypeScript** — เพิ่มความปลอดภัยด้านชนิดข้อมูล
- **Vite** — เครื่องมือสำหรับพัฒนาและ build เว็บไซต์
- **CSS** — จัดรูปแบบและออกแบบหน้าตาเว็บไซต์
- **npm** — จัดการ dependencies และ scripts

## Prerequisites

ก่อนเริ่มใช้งาน ควรติดตั้งโปรแกรมต่อไปนี้

- [Node.js](https://nodejs.org/) เวอร์ชันที่รองรับโดยโปรเจกต์
- npm ซึ่งติดตั้งมาพร้อมกับ Node.js

ตรวจสอบเวอร์ชันด้วยคำสั่ง

```bash
node -v
npm -v
```

## Installation

1. เปิด Terminal หรือ Command Prompt
2. เข้าไปยังโฟลเดอร์ `web`

```bash
cd web
```

3. ติดตั้ง dependencies

```bash
npm install
```

## Development

ฟังก์ชัน LIFF ต้องกำหนด LIFF ID ใน environment ก่อนใช้งาน สร้างไฟล์ `.env.local`
ภายในโฟลเดอร์ `web` โดยกำหนดค่า:

```env
VITE_LIFF_ID=your-liff-id
```

กำหนด URL ของเว็บเป็น Endpoint URL ใน LIFF Console และตั้งค่า `VITE_LIFF_ID`
ใน environment ของระบบ deploy ด้วย ห้าม commit ไฟล์ `.env.local` ลง repository
หากไม่ได้ตั้งค่า LIFF ID เว็บไซต์ยังใช้งานได้ตามปกติ แต่ปุ่มส่งข้อความเข้า LINE จะไม่พร้อมใช้งาน

เริ่มต้น development server ด้วยคำสั่ง

```bash
npm run dev
```

เปิด URL ที่แสดงใน Terminal เพื่อเข้าใช้งานเว็บไซต์ โดยทั่วไป Vite จะใช้ `http://localhost:5173`

เมื่อแก้ไข source code ระบบจะแสดงการเปลี่ยนแปลงระหว่างพัฒนาโดยอัตโนมัติ

## การเชื่อมต่อ LINE: LIFF และ Messaging API

### LIFF และการส่งข้อความจากเว็บไซต์

เว็บไซต์ใช้ LIFF SDK เพื่อเปิดหน้าเว็บภายในแอป LINE และส่งข้อความเข้าแชตของผู้ใช้ผ่าน `liff.sendMessages()` ฟังก์ชันนี้ใช้งานได้เมื่อเปิดหน้าเว็บจากแอป LINE เท่านั้น:

- หน้าคู่มือการแจ้งเหตุส่งสรุปขั้นตอนรับมือเบื้องต้นเข้าแชต เพื่อเก็บไว้อ่านภายหลัง
- หลังส่งแบบฟอร์มรายงาน ผู้ใช้เลือกส่งข้อความยืนยันทั่วไปเข้าแชตได้ โดย **ไม่มีการส่งรายละเอียดหรือข้อมูลในแบบฟอร์มผ่าน LIFF**
- หลังส่งข้อความสำเร็จ LIFF จะปิดหน้าต่างให้ ส่วนการเปิดเว็บจากเบราว์เซอร์ทั่วไปจะไม่สามารถใช้ปุ่มส่งข้อความนี้ได้
- `useLiff` เริ่มต้น LIFF ด้วย `VITE_LIFF_ID` และอ่านโปรไฟล์เมื่อผู้ใช้เข้าสู่ระบบ แต่การส่งข้อความดังกล่าวไม่ได้แนบโปรไฟล์ไปกับข้อความ

### LINE OA Messaging API Webhook

Vercel Function ที่ `api/line-webhook.js` รับ event แบบ `POST /api/line-webhook` จาก LINE Official Account ผ่าน Messaging API จากนั้น:

1. ตรวจสอบ `X-Line-Signature` ด้วย Channel Secret กับ raw request body เพื่อยืนยันว่า request มาจาก LINE
2. ประมวลผลเฉพาะข้อความตัวอักษร และตรวจหาคำที่เกี่ยวกับเหตุเร่งด่วน เช่น `โดนโกง`, `ดูดเงิน`, `โอนเงินผิด`, `ถูกหลอก`, `โอนไปแล้ว` หรือ `สลิป`
3. ตอบกลับข้อความแนะนำเบื้องต้นผ่าน LINE Reply API โดยใช้ reply token ของ event หากไม่พบคำเหล่านี้จะส่งข้อความแนะนำวิธีขอความช่วยเหลือทั่วไป

Webhook นี้เป็นการตอบข้อความที่ผู้ใช้ส่งเข้า LINE OA ไม่ใช่การส่งข้อมูลรายงานจากแบบฟอร์มบนเว็บไซต์ และไม่ใช่ช่องทางแจ้งความหรือระบบอายัดบัญชี

ตั้งค่า environment variables ต่อไปนี้ใน Vercel Project Settings > Environment Variables
ห้ามใส่ค่าเหล่านี้ในตัวแปรที่ขึ้นต้นด้วย `VITE_` หรือ commit ลง repository:

```env
LINE_CHANNEL_SECRET=your-channel-secret
LINE_CHANNEL_ACCESS_TOKEN=your-channel-access-token
```

หลัง deploy ให้ตั้ง Webhook URL ใน LINE Developers Console เป็น
`https://<โดเมนของเว็บ>/api/line-webhook` กด Verify และเปิด Use webhook
ใน LINE OA Manager ให้ตั้ง Response mode เป็น Bot และปิด Auto-response
ขณะพัฒนา `npm run dev` ของ Vite ไม่ได้ให้บริการ API route นี้ ต้องทดสอบผ่าน Vercel
deployment หรือ Vercel CLI

สำหรับ LIFF ให้ตั้ง LIFF Endpoint URL เป็น URL ของเว็บไซต์ และกำหนด `VITE_LIFF_ID`
ทั้งใน `.env.local` สำหรับพัฒนาและ environment ของระบบ deploy โดยค่า `VITE_LIFF_ID`
ไม่ใช่ความลับ แต่ Channel Secret และ Channel Access Token ต้องเก็บเป็น environment variables
ฝั่ง server เท่านั้น หากเกิดเหตุถูกหลอกหรือโอนเงิน ให้ติดต่อธนาคารและ AOC 1441 ทันที

## Build

สร้างไฟล์สำหรับ production ด้วยคำสั่ง

```bash
npm run build
```

ไฟล์ผลลัพธ์จะอยู่ในโฟลเดอร์ที่กำหนดไว้ใน Vite configuration ซึ่งโดยปกติคือ `dist/` หากไม่ได้ปรับเปลี่ยนการตั้งค่า

## Preview Production Build

หลังจาก build สำเร็จ สามารถทดลองเปิดเว็บไซต์เวอร์ชัน production ได้ด้วยคำสั่ง

```bash
npm run preview
```

จากนั้นเปิด URL ที่แสดงใน Terminal

## Project Structure

```text
web/
├── public/             # Static assets
├── src/                # Application source code
├── api/                # Vercel serverless functions
├── index.html          # HTML entry point
├── package.json        # Project metadata and scripts
├── package-lock.json   # Locked dependency versions
├── vite.config.mts     # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

โครงสร้างนี้แสดงไฟล์หลักของโปรเจกต์เท่านั้น โดยอาจมีไฟล์และโฟลเดอร์อื่นเพิ่มเติมตามการตั้งค่าจริง

## Development Notes

- ควรเก็บ `package.json` และ `package-lock.json` ไว้ใน repository
- ไม่จำเป็นต้องเก็บ `node_modules/` ใน Git เพราะสามารถติดตั้งใหม่ด้วย `npm install`
- ไฟล์ build สามารถสร้างใหม่ได้ด้วย `npm run build`
- หลีกเลี่ยงการ commit API keys, passwords, access tokens หรือข้อมูลลับลงใน repository
- ก่อน deploy ควรตรวจสอบ environment variables, routing, API endpoints และการตั้งค่าที่เกี่ยวข้องกับ production

## ติดต่อผู้พัฒนา

- **ชื่อ:** พิชญาภร มณีคงฤทธิ์ (Phichayaporn Maneekongrit)
- **อีเมลโครงการ:** [ma.catspeare.itna@gmail.com](mailto:ma.catspeare.itna@gmail.com)
- **LINE โครงการ:** [MA_CatSpeare_ITNA (`@905lmvfo`)](https://line.me/R/ti/p/%40905lmvfo)
- **อีเมลส่วนตัว:** [maneekongrit.phichayaporn@gmail.com](mailto:maneekongrit.phichayaporn@gmail.com)

## Disclaimer

เว็บไซต์รู้ทันมีวัตถุประสงค์เพื่อให้ความรู้และเผยแพร่ข้อมูลเตือนภัยออนไลน์ รวมถึงเปิดช่องทางรับข้อมูลเบาะแสเท่านั้น เว็บไซต์ไม่ใช่หน่วยงานรับแจ้งความ ไม่ใช่ผู้ให้บริการอายัดบัญชี และไม่ใช่ช่องทางฉุกเฉิน หากเกิดเหตุควรติดต่อหน่วยงานที่เกี่ยวข้องโดยตรง

## License

โปรเจกต์นี้เผยแพร่ภายใต้ MIT License ซึ่งอนุญาตให้นำไป ใช้งาน ดัดแปลง แก้ไข หรือแจกจ่ายต่อได้ฟรี ทั้งในเชิงพาณิชย์และส่วนตัว โดยต้องคงประกาศลิขสิทธิ์เดิมไว้
