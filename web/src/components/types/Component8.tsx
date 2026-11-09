import { FunctionComponent } from "react";

export type Component8Type = {
  className?: string;
};

const Component8: FunctionComponent<Component8Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start gap-[0.875rem] min-w-[34.75rem] max-w-full text-left text-[0.75rem] text-[#000] font-['Noto_Sans_Thai'] mq750:min-w-full ${className}`}
    >
      <div className="w-fit min-h-[1.75rem] h-auto max-w-full rounded-[100px] bg-[#fff3be] overflow-hidden shrink-0 flex items-start py-[0.312rem] px-[0.75rem] box-border text-[#191919]">
        <div className="relative font-semibold">
          รู้ทันไว้ก่อน • คลังความรู้ภัยไซเบอร์
        </div>
      </div>
      <div className="self-stretch relative text-[3.25rem] leading-[130%] font-extrabold mq1050:text-[2.625rem] mq1050:leading-[3.375rem] mq450:text-[1.938rem] mq450:leading-[2.563rem]">
        คลังรูปแบบกลโกง
      </div>
      <div className="w-full relative text-[1.125rem] leading-[170%] text-[#65645e] inline-block max-w-[53.5rem] mq1050:max-w-full">
        จำมุกหลอกให้ออก ก่อนเผลอเชื่อหรือโอนเงิน
        <br />
        ค้นจากสิ่งที่เจอ แล้วเช็กบทสนทนา จุดสังเกต และวิธีป้องกัน
      </div>
      <div className="w-[18.313rem] h-[1.313rem] overflow-hidden shrink-0 flex items-center gap-[1.25rem] text-[0.875rem]">
        <div className="relative font-semibold">4 หมวดพฤติการณ์</div>
        <div className="h-[0.25rem] w-[0.25rem] relative rounded-[50%] bg-[#65645e]" />
        <div className="relative font-semibold">8 บทความเพื่อการเรียนรู้</div>
      </div>
    </div>
  );
};

export default Component8;
