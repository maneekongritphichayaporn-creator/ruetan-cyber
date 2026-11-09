import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type Component9Type = {
  className?: string;
};

const Component9: FunctionComponent<Component9Type> = ({ className = "" }) => {
  return (
    <section
      className={`flex-1 overflow-hidden flex flex-col items-start gap-[1.375rem] min-w-[19.375rem] max-w-[43.125rem] text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:max-w-full ${className}`}
    >
      <div className="w-[13.563rem] h-[1.75rem] rounded-[100px] bg-[#fff3be] overflow-hidden shrink-0 flex items-start py-[0.312rem] px-[0.75rem] box-border text-[#191919]">
        <div className="relative font-semibold">
          พื้นที่เรียนรู้และช่วยเหลือเรื่องภัยไซเบอร์
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start text-[3.75rem] text-[#000]">
        <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[130%] font-extrabold font-[inherit] mq450:text-[2.25rem] mq450:leading-[2.938rem] mq1050:text-[3rem] mq1050:leading-[3.875rem]">
          รู้ทันกลโกง
        </h1>
        <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[130%] font-extrabold font-[inherit] mq450:text-[2.25rem] mq450:leading-[2.938rem] mq1050:text-[3rem] mq1050:leading-[3.875rem]">
          ไม่หลงเป็นเหยื่อ
        </h2>
      </div>
      <div className="w-full relative text-[1.125rem] leading-[170%] inline-block max-w-[43.125rem] mq750:max-w-full">
        มิจฉาชีพเปลี่ยนมุกทุกวัน แต่เรารับมือได้
        <br />
        เช็กกลโกงยอดฮิต รู้วิธีป้องกัน และหาทางออกเมื่อโดนหลอก
      </div>
      <div className="self-stretch overflow-hidden flex items-start gap-[0.75rem] mq450:flex-wrap">
        <Link to="/scam-types" className="cursor-pointer [border:none] py-[0rem] px-[1.437rem] bg-[#191919] h-[3.25rem] rounded-[10px] overflow-hidden flex items-center justify-center box-border gap-[0.75rem] text-[inherit] [text-decoration:none] hover:bg-[#4d4d4d]">
          <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#fff] text-left">
            รู้ทันกลโกงยอดฮิต
          </div>
          <img
            className="h-[1.375rem] w-[1.375rem] relative"
            alt=""
            src="/share/arrow-up-right-svgrepo-com.svg"
          />
        </Link>
        <Link to="/reporting-guide" className="cursor-pointer border-[#191919] border-solid border py-0 px-[1.437rem] bg-transparent h-13 rounded-[10px] box-border overflow-hidden flex items-center justify-center gap-3 hover:bg-[rgba(77,77,77,0.09)] hover:border-[#4d4d4d] hover:border-solid hover:box-border"
        >
          <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#191919] text-left">
            ฉันกำลังถูกหลอก?
          </div>
          <img
            className="h-5.5 w-5.5 relative"
            alt=""
            src="/share/arrow-right.svg"
          />
        </Link>
      </div>
      <div className="overflow-hidden flex items-center gap-2 text-[#65645e]">
        <img
          className="h-5.5 w-5.5 relative"
          alt=""
          src="/share/heart-handshake.svg"
        />
        <div className="relative">
          โดนหลอกไม่ใช่ความผิดของคุณ เราช่วยกันหาทางออกได้
        </div>
      </div>
    </section>
  );
};

export default Component9;
