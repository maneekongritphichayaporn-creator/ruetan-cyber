import { FunctionComponent } from "react";

export type Component6Type = {
  className?: string;
};

const Component6: FunctionComponent<Component6Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start gap-4 min-w-[35.125rem] text-left text-[0.813rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:min-w-full ${className}`}
    >
      <div className="rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-3">
        <div className="relative font-semibold">
          ตั้งสติ • เก็บหลักฐาน • รักษาสิทธิ
        </div>
      </div>
      <div className="self-stretch relative text-[3.25rem] leading-[130%] font-extrabold mq1050:text-[2.625rem] mq1050:leading-[3.375rem] mq450:text-[1.938rem] mq450:leading-[2.563rem]">
        คู่มือทางกฎหมาย
        <br />
        และวิธีแจ้งความ
      </div>
      <div className="self-stretch relative text-[1.125rem] leading-[170%] text-[#65645e]">
        โดนหลอกแล้ว ไม่ต้องรับมือเพียงลำพัง
        <br />
        รู้ขั้นตอนที่ควรทำ เตรียมหลักฐานให้ครบ และแจ้งความให้ถูกต้อง
      </div>
      <div className="overflow-hidden flex items-start gap-3 mq750:flex-wrap">
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("guide-step-01")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="cursor-pointer border-0 py-0 px-6 bg-[#191919] h-13 rounded-[10px] overflow-hidden flex items-center justify-center box-border gap-[0.687rem] hover:bg-[#4d4d4d]"
        >
          <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#fff] text-left">
            เริ่มขั้นตอนแจ้งความ
          </div>
          <img
            className="h-5.5 w-5.5 relative"
            alt=""
            src="/share/arrow-down.svg"
          />
        </button>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("guide-evidence-02")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="cursor-pointer border-[#191919] border-solid border py-0 px-[1.437rem] bg-transparent h-13 rounded-[10px] box-border overflow-hidden flex items-center justify-center gap-3 hover:bg-[rgba(77,77,77,0.09)] hover:border-[#4d4d4d] hover:border-solid hover:box-border"
        >
          <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#191919] text-left">
            เช็กหลักฐานที่ต้องเตรียม
          </div>
          <img
            className="h-5.5 w-5.5 relative"
            alt=""
            src="/share/clipboard-check.svg"
          />
        </button>
      </div>
      <div className="overflow-hidden flex items-center gap-2 text-[#65645e]">
        <img
          className="h-5.5 w-5.5 relative"
          alt=""
          src="/share/heart-handshake.svg"
        />
        <div className="relative">
          โดนหลอกไม่ใช่ความผิดของคุณ เริ่มจากสิ่งที่ทำได้ทีละขั้น
        </div>
      </div>
    </div>
  );
};

export default Component6;
