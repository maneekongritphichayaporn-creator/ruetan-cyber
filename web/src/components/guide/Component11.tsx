import { FunctionComponent } from "react";

export type Component11Type = {
  className?: string;
};

const Component11: FunctionComponent<Component11Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] overflow-hidden flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[1rem] text-left text-[1rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <b className="relative">ในหน้านี้ — เลือกอ่านเรื่องที่ต้องการ</b>
      <div className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem] text-[0.875rem] text-[#65645e]">
        <button type="button" onClick={() => document.getElementById("guide-step-01")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="flex-1 cursor-pointer overflow-hidden flex items-center gap-[0.625rem] min-w-[10.625rem] max-w-[18.313rem] border-0 bg-transparent p-0 text-left text-inherit hover:text-[#b58b00] hover:underline mq450:flex-wrap">
          <div className="relative font-extrabold mq450:w-full mq450:h-[1.063rem]">
            01
          </div>
          <div className="relative text-[0.938rem] font-semibold text-[#191919]">
            ขั้นตอนแจ้งความ
          </div>
          <img
            className="h-[1rem] w-[1rem] relative"
            alt=""
            src="/share/arrow-down.svg"
          />
        </button>
        <button type="button" onClick={() => document.getElementById("guide-evidence-02")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="flex-1 cursor-pointer overflow-hidden flex items-center gap-[0.625rem] min-w-[10.625rem] max-w-[18.313rem] border-0 bg-transparent p-0 text-left text-inherit hover:text-[#b58b00] hover:underline mq450:flex-wrap">
          <div className="relative font-extrabold mq450:w-full mq450:h-[1.063rem]">
            02
          </div>
          <div className="relative text-[0.938rem] font-semibold text-[#191919]">
            เช็กลิสต์หลักฐาน
          </div>
          <img
            className="h-[1rem] w-[1rem] relative"
            alt=""
            src="/share/arrow-down.svg"
          />
        </button>
        <div className="flex-1 overflow-hidden flex items-center gap-[0.625rem] min-w-[10.625rem] max-w-[18.313rem] mq450:flex-wrap">
          <div className="relative font-extrabold mq450:w-full mq450:h-[1.063rem]">
            03
          </div>
          <div className="relative text-[0.938rem] font-semibold text-[#191919]">
            ข้อกฎหมายที่เกี่ยวข้อง
          </div>
          <img
            className="h-[1rem] w-[1rem] relative"
            alt=""
            src="/share/arrow-down.svg"
          />
        </div>
        <div className="flex-1 overflow-hidden flex items-center gap-[0.625rem] min-w-[10.625rem] max-w-[18.313rem] mq450:flex-wrap">
          <div className="relative font-extrabold mq450:w-full mq450:h-[1.063rem]">
            04
          </div>
          <div className="relative text-[0.938rem] font-semibold text-[#191919]">
            เมื่อไม่รับแจ้งความ
          </div>
          <img
            className="h-[1rem] w-[1rem] relative"
            alt=""
            src="/share/arrow-down.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Component11;
