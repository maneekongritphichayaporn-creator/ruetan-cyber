import { FunctionComponent, useState } from "react";
import Navbar from "../components/common/Navbar";
import BannerAOC from "../components/common/BannerAOC";
import Component6 from "../components/guide/Component6";
import Component9 from "../components/guide/Component9";
import Component11 from "../components/guide/Component11";
import Component12 from "../components/guide/Component12";
import Component13 from "../components/guide/Component13";
import Component14 from "../components/guide/Component14";
import Component15 from "../components/guide/Component15";
import Component16 from "../components/guide/Component16";
import Footer from "../components/common/Footer";
import { useLiff } from "../hooks/useLiff";

const ReportingGuide: FunctionComponent = () => {
  const { initialized, isInClient, error, sendMessage, closeWindow } = useLiff();
  const [liffMessage, setLiffMessage] = useState("");

  const handleSendGuideSummary = async () => {
    setLiffMessage("");
    try {
      await sendMessage(
        "สรุปวิธีรับมือเมื่อถูกหลอก: 1) หยุดโอนเงินและหยุดติดต่อ 2) ติดต่อธนาคารทันที 3) โทร AOC 1441 4) เก็บหลักฐานและแจ้งความผ่านช่องทางทางการ",
      );
      closeWindow();
    } catch (sendError) {
      console.error("LIFF Send Message Error:", sendError);
      setLiffMessage(
        sendError instanceof Error
          ? sendError.message
          : "ส่งสรุปเข้า LINE ไม่สำเร็จ กรุณาลองอีกครั้ง",
      );
    }
  };

  return (
    <div className="w-full relative bg-[#faf8f2] flex flex-col items-start leading-[normal] tracking-[normal]">
      <Navbar />
      <section className="self-stretch flex flex-col items-start">
        <BannerAOC />
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-start pt-7 px-20 pb-10 box-border gap-7 max-w-full text-left text-[0.813rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:pt-[1.25rem] mq750:px-[2.5rem] mq750:pb-[1.625rem] mq750:box-border">
        <section className="self-stretch overflow-hidden flex items-center gap-14 max-w-full lg:flex-wrap mq750:gap-[1.75rem]">
          <Component6 />
          <Component9 />
        </section>
        <Component11 />
      </section>
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
      <Component16 />
      <section className="self-stretch px-20 pb-12 mq750:px-10 mq450:px-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 rounded-3xl border border-[#e3e0d6] bg-white p-6 mq450:p-4">
          <div className="max-w-2xl">
            <h2 className="m-0 text-lg font-bold text-[#191919]">
              เก็บขั้นตอนรับมือไว้ในแชต LINE
            </h2>
            <p className="mb-0 mt-2 text-sm leading-6 text-[#65645e]">
              ส่งสรุปวิธีรับมือฉุกเฉินเข้าแชต โดยไม่ส่งข้อมูลส่วนตัว
            </p>
          </div>
          <button
            type="button"
            onClick={handleSendGuideSummary}
            disabled={!initialized || !isInClient}
            className="cursor-pointer rounded-[10px] bg-[#ffd43b] px-5 py-3 text-sm font-bold text-[#191919] transition-colors hover:bg-[#e6ba21] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {initialized && isInClient
              ? "ส่งสรุปเข้าแชต LINE"
              : "เปิดหน้านี้ผ่านแอป LINE เพื่อส่งสรุป"}
          </button>
          {(error || liffMessage) && (
            <p className="m-0 w-full text-sm text-[#9a2929]" role="alert">
              {liffMessage || error}
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ReportingGuide;
