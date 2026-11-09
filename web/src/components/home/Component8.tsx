import { FunctionComponent } from "react";

export type Component8Type = {
  className?: string;
};

const Component8: FunctionComponent<Component8Type> = ({ className = "" }) => {
  return (
    <section
      className={`h-[26.625rem] flex-1 relative overflow-hidden min-w-[20.938rem] max-w-[36.375rem] text-left text-[0.813rem] text-[#000] font-['Noto_Sans_Thai'] mq750:max-w-full ${className}`}
    >
      <div className="absolute top-[calc(50%_-_198px)] left-[calc(50%_-_191px)] rounded-[50%] bg-[#ffd43b] w-[25rem] h-[25rem]" />
      <div className="absolute bottom-[1.688rem] left-[7.125rem] rounded-[50%] bg-[#d0af2d] w-[20.938rem] h-[1.25rem]" />
      <img
        className="absolute bottom-[3.813rem] left-[3.25rem] w-[8.438rem] h-[10rem]"
        alt=""
        src="/share/2.svg"
      />
      <div className="absolute bottom-[2.375rem] left-[8.75rem] rounded-[50%] bg-[#191919] w-[12.5rem] h-[13.125rem]" />
      <img
        className="absolute top-[3.438rem] left-[5.75rem] w-[15.313rem] h-[15.313rem] object-cover"
        alt=""
        src="/home/5@2x.png"
      />
      <img
        className="absolute bottom-[11.5rem] left-[11.938rem] w-[2.813rem] h-[0.938rem]"
        alt=""
        src="/share/6.svg"
      />
      <div className="absolute top-[3.625rem] right-[4.313rem] rounded-3xl bg-[#fff] border-[#191919] border-solid border-[5px] box-border w-[11.125rem] h-[18rem] overflow-hidden flex flex-col items-start py-[0.818rem] px-[0.812rem] gap-[1.125rem]">
        <div className="w-[3.375rem] h-[0.375rem] relative rounded bg-[#191919] shrink-0" />
        <div className="w-[5.813rem] h-[1.375rem] overflow-hidden shrink-0 flex items-center gap-[0.5rem]">
          <img
            className="h-[1.375rem] w-[1.375rem] relative"
            alt=""
            src="/share/message-square-warning.svg"
          />
          <b className="relative">SMS ปลอม</b>
        </div>
        <div className="w-[8.875rem] rounded-[10px] bg-[#faf8f2] overflow-hidden flex flex-col items-start p-[0.75rem] box-border gap-[0.625rem] shrink-0">
          <div className="w-full relative leading-[150%] inline-block max-w-[7.375rem]">
            คุณได้รับรางวัล!
            <br />
            กดลิงก์เพื่อรับเงิน
          </div>
          <div className="w-[5.875rem] h-[0.313rem] relative rounded-[3px] bg-[#ffd43b]" />
        </div>
        <div className="w-[8.875rem] rounded-lg bg-[#191919] overflow-hidden flex items-start justify-center p-[0.5rem] box-border shrink-0 text-[0.875rem] text-[#ffd43b]">
          <b className="relative">อย่าเพิ่งคลิก!</b>
        </div>
      </div>
      <div className="absolute right-[13.125rem] bottom-[7.188rem] rounded-[50%] bg-[#191919] w-[3.625rem] h-[2.5rem]" />
      <img
        className="absolute right-[3.688rem] bottom-[1.75rem] rounded-[49px] w-[6.125rem] h-[6.125rem] object-cover"
        alt=""
        src="/home/7@2x.png"
      />
      <img
        className="absolute top-[3rem] right-[1.438rem] w-[2.25rem] h-[2.625rem]"
        alt=""
        src="/share/8.svg"
      />
      <div className="absolute bottom-[2.688rem] left-[3.188rem] rounded-[100px] bg-[#fff] border-[#191919] border-solid border-[2px] overflow-hidden flex items-start py-[0.437rem] px-[1rem] whitespace-nowrap text-[1rem]">
        <b className="relative shrink-0">รู้ทันไว้ ปลอดภัยกว่า</b>
      </div>
    </section>
  );
};

export default Component8;
