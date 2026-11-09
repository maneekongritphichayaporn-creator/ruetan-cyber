import { FunctionComponent } from "react";

export type Component5Type = {
  className?: string;
};

const Component5: FunctionComponent<Component5Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-[20px] bg-[#fff3be] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem] text-left text-[0.875rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <img
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[2rem] h-[2rem] relative"
        alt=""
        src="/share/heart-handshake.svg"
      />
      <b className="w-full relative text-[1.438rem] leading-[145%] inline-block max-w-[19.5rem] mq450:text-[1.125rem] mq450:leading-[1.688rem]">
        โดนหลอกไม่ใช่ความผิดของคุณ
        <br />
        เราเรียนรู้ไปด้วยกันได้
      </b>
      <div className="w-full relative leading-[175%] inline-block max-w-[19.5rem]">
        เรื่องเล็ก ๆ ที่คุณสังเกตเห็น
        อาจช่วยให้คนอื่นหยุดคิดก่อนเชื่อหรือโอนเงิน
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-[#e5d895]" />
      <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem]">
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.25rem] w-[1.25rem] relative"
          alt=""
          src="/share/lock-keyhole.svg"
        />
        <div className="flex-1 relative leading-[165%] font-semibold inline-block max-w-[17.625rem]">
          ไม่ต้องกรอกชื่อ เบอร์โทร หรือข้อมูลส่วนตัวของคุณ
        </div>
      </div>
    </div>
  );
};

export default Component5;
