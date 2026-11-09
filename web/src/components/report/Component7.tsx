import { FunctionComponent } from "react";

export type Component7Type = {
  className?: string;
};

const Component7: FunctionComponent<Component7Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch w-full overflow-hidden flex flex-col items-start pt-[1.75rem] px-[5rem] pb-[2rem] box-border gap-[1.5rem] max-w-full text-left text-[0.813rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-center gap-[3rem] max-w-full text-[0.75rem] text-[#191919] lg:flex-wrap mq750:gap-[1.5rem]">
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.75rem] min-w-[36.625rem] max-w-full mq1050:min-w-full">
          <div className="w-[13.188rem] h-[1.75rem] rounded-[100px] bg-[#fff3be] overflow-hidden shrink-0 flex items-start py-[0.312rem] px-[0.75rem] box-border">
            <div className="relative font-semibold">
              เรื่องของคุณ ช่วยให้คนอื่นไม่โดนหลอก
            </div>
          </div>
          <h1 className="m-0 w-full relative text-[3rem] leading-[130%] font-extrabold font-[inherit] inline-block max-w-[56.375rem] mq1050:text-[2.375rem] mq1050:leading-[3.125rem] mq1050:max-w-full mq450:text-[1.813rem] mq450:leading-[2.313rem]">
            แชร์ภัยที่เจอ ให้คนอื่นรู้ทัน
          </h1>
          <div className="w-full relative text-[1.125rem] leading-[165%] text-[#65645e] inline-block max-w-[56.375rem] mq1050:max-w-full">
            แบบฟอร์มส่งเรื่องร้องเรียน / แชร์ประสบการณ์กลโกง
            <br />
            เล่าเฉพาะสิ่งที่พบ ไม่ต้องระบุตัวตน
            เพื่อเป็นอุทาหรณ์เตือนภัยให้ชุมชน
          </div>
        </div>
        <div className="h-[13.125rem] relative overflow-hidden min-w-[20.625rem] max-w-full text-[0.813rem] text-[#ffd43b] lg:flex-1">
          <div className="absolute top-[calc(50%_-_105px)] left-[calc(50%_-_6.375rem)] rounded-[50%] bg-[#ffd43b] w-[12.75rem] h-[12.75rem]" />
          <img
            className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_0.25rem)] rounded-2xl w-[9.806rem] h-[10.375rem] object-contain"
            loading="lazy"
            alt=""
            src="/report-form/4@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_85px)] left-[calc(50%_-_10rem)] w-[10rem] h-[10rem] object-cover"
            alt=""
            src="/report-form/7@2x.png"
          />
          <div className="absolute bottom-[0.125rem] left-1/2 -translate-x-1/2 rounded-[100px] bg-[#191919] overflow-hidden flex items-start py-[0.5rem] px-[1rem]">
            <div className="relative font-semibold">
              ขอบคุณที่ช่วยกันเตือนภัย
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component7;
