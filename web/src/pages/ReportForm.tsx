import { FunctionComponent, useState } from "react";
import Navbar from "../components/common/Navbar";
import BannerAOC from "../components/common/BannerAOC";
import Component7 from "../components/report/Component7";
import Component3 from "../components/report/Component3";
import Component5 from "../components/report/Component5";
import Component8 from "../components/report/Component8";
import Footer from "../components/common/Footer";
import { useLiff } from "../hooks/useLiff";

const ReportForm: FunctionComponent = () => {
  const { initialized, isInClient, error, sendMessage, closeWindow } = useLiff();
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [liffMessage, setLiffMessage] = useState("");

  const handleSendReportConfirmation = async () => {
    setLiffMessage("");
    try {
      await sendMessage(
        "ส่งเรื่องเตือนภัยผ่านรู้ทันเรียบร้อยแล้ว ขอบคุณที่ร่วมปกป้องสังคมจากภัยไซเบอร์",
      );
      closeWindow();
    } catch (sendError) {
      console.error("LIFF Send Message Error:", sendError);
      setLiffMessage(
        sendError instanceof Error
          ? sendError.message
          : "ส่งข้อความเข้า LINE ไม่สำเร็จ กรุณาลองอีกครั้ง",
      );
    }
  };

  return (
    <div className="w-full relative bg-[#faf8f2] flex flex-col items-start leading-[normal] tracking-[normal]">
      <Navbar />
      <section className="self-stretch flex flex-col items-start max-w-full">
        <BannerAOC />
      </section>
      <Component7 />
      <main className="relative w-full overflow-hidden flex items-start justify-center flex-wrap content-start pt-0 px-20 pb-15 box-border gap-8 max-w-full mq750:gap-[1rem] mq750:px-[2.5rem]">
        <div className="w-full min-w-0 max-w-[55.5rem] flex-1">
          <Component3 onSubmitSuccess={() => setReportSubmitted(true)} />
          {reportSubmitted && (
            <div className="mt-4 rounded-2xl border border-[#e3e0d6] bg-white p-5">
              <h2 className="m-0 text-base font-bold text-[#191919]">
                ส่งเรื่องเข้า LINE ด้วย
              </h2>
              <p className="mb-4 mt-2 text-sm leading-6 text-[#65645e]">
                ส่งเฉพาะข้อความยืนยันทั่วไป ไม่มีการส่งรายละเอียดหรือข้อมูลในแบบฟอร์มเข้าแชต
              </p>
              <button
                type="button"
                onClick={handleSendReportConfirmation}
                disabled={!initialized || !isInClient}
                className="cursor-pointer rounded-[10px] bg-[#ffd43b] px-5 py-3 text-sm font-bold text-[#191919] transition-colors hover:bg-[#e6ba21] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {initialized && isInClient
                  ? "ส่งข้อความยืนยันเข้าแชต LINE"
                  : "เปิดหน้านี้ผ่านแอป LINE เพื่อส่งข้อความ"}
              </button>
              {(error || liffMessage) && (
                <p className="mb-0 mt-3 text-sm text-[#9a2929]" role="alert">
                  {liffMessage || error}
                </p>
              )}
            </div>
          )}
        </div>
        <section className="flex-[1.0803] overflow-hidden flex flex-col items-start gap-5 min-w-77.5 max-w-90 text-left text-[1.313rem] text-white font-['Noto_Sans_Thai'] mq750:max-w-full">
          <Component5 />
          <Component8 />
          <div className="self-stretch rounded-[20px] bg-[#191919] overflow-hidden flex flex-col items-start p-6 gap-3.5">
            <img
              className="cursor-pointer [border:none] p-0 bg-transparent w-7 h-7 relative"
              alt=""
              src="/share/file-check-2.svg"
            />
            <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[145%] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.5rem]">
              ต้องการแจ้งความ?
            </h3>
            <div className="w-full relative text-[0.875rem] leading-[170%] text-[#c7c7be] inline-block max-w-78">
              เข้าเว็บไซต์ Thai Police Online ด้วยตนเอง
              ตรวจสอบโดเมนให้ถูกต้องก่อนใช้
            </div>
            <a
              className="self-stretch relative text-[0.938rem] font-bold text-[#ffd43b] [text-decoration:none]"
              href="https://thaipoliceonline.go.th/"
              target="_blank"
            >
              thaipoliceonline.go.th ↗
            </a>
            <div className="self-stretch h-[0.063rem] relative bg-[#45453f]" />
            <div className="w-full relative text-[0.813rem] leading-[170%] inline-block max-w-78">
              หากเพิ่งโอนเงิน ติดต่อธนาคารทันที และโทร AOC 1441
              ก่อนส่งเรื่องที่นี่
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReportForm;
