import { FunctionComponent } from "react";

export type Component12Type = {
  className?: string;
};

const Component12: FunctionComponent<Component12Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex items-center gap-[3rem] max-w-full text-left text-[0.75rem] text-[#191919] font-['Noto_Sans_Thai'] lg:flex-wrap mq750:gap-[1.5rem] ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-start gap-[1rem] min-w-[35.438rem] mq1050:min-w-full">
        <div className="rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem]">
          <div className="relative leading-[165%] font-semibold">
            อ่านข่าวให้เป็น เห็นกลโกงให้ทัน
          </div>
        </div>
        <h1 className="m-0 self-stretch relative text-[3.25rem] leading-[130%] font-extrabold font-[inherit] mq1050:text-[2.625rem] mq1050:leading-[3.375rem] mq450:text-[1.938rem] mq450:leading-[2.563rem]">
          ข่าวสารและเคสเตือนภัย
        </h1>
        <div className="self-stretch relative text-[1.125rem] leading-[165%] text-[#65645e]">
          ถอดบทเรียนจากเคสในไทย เช็กข้อมูลจากหน่วยงานทางการ
          <br />
          และรู้ทันเทคนิคใหม่ ก่อนเผลอเชื่อหรือโอนเงิน
        </div>
        <div className="overflow-hidden flex items-start text-[0.875rem]">
          <div className="relative leading-[165%] font-semibold">
            เคสจริง • แหล่งข้อมูลทางการ • กลโกงยุคเอไอ
          </div>
        </div>
      </div>
      <div className="h-[16.25rem] w-[22.5rem] overflow-hidden shrink-0 flex items-start relative isolate max-w-full text-[0.875rem] text-[#ffd43b] lg:flex-1 mq750:min-w-full">
        <div className="h-[calc(100%_-_15px)] w-[15.313rem] absolute !!m-[0 important] top-[0.5rem] bottom-[0.438rem] left-[3.75rem] rounded-[50%] bg-[#ffd43b] z-[0]" />
        <img
          className="h-[14.7rem] w-[12.656rem] !!m-[0 important] absolute top-[1.5rem] left-[9.113rem] rounded-2xl object-contain z-[1]"
          alt=""
          src="/knowledge-base/4@2x.png"
        />
        <div className="h-[10.75rem] w-[10.75rem] !!m-[0 important] absolute top-[2.375rem] left-[0rem] overflow-hidden shrink-0 flex items-start z-[2]">
          <div className="h-[10.75rem] w-[10.75rem] overflow-hidden shrink-0 flex items-start relative isolate">
            <img
              className="h-[10.75rem] w-[10.75rem] relative z-[0]"
              alt=""
              src="/share/logo.svg"
            />
            <div className="h-[1.613rem] w-[0.375rem] absolute !!m-[0 important] top-[4.894rem] left-[3.225rem] rounded-[50%] bg-[#191919] z-[2]" />
            <div className="h-[1.613rem] w-[0.375rem] absolute !!m-[0 important] top-[4.894rem] left-[7.363rem] rounded-[50%] bg-[#191919] z-[3]" />
          </div>
        </div>
        <div className="!!m-[0 important] absolute top-[13.188rem] left-[0rem] rounded-[100px] bg-[#191919] overflow-hidden flex items-start py-[0.5rem] px-[1rem] whitespace-nowrap z-[3]">
          <div className="relative leading-[165%] font-semibold">
            ข่าวมีที่มา ความเชื่อมีที่เช็ก
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component12;
