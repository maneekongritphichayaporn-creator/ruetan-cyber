import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type Component10Type = {
  className?: string;
};

const BannerAOC: FunctionComponent<Component10Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-[#ffd43b] overflow-hidden flex items-center flex-wrap content-center py-5.5 px-20 box-border gap-x-6 gap-y-2.5 max-w-full text-left text-[1.5rem] text-black font-['Noto_Sans_Thai'] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border ${className}`}
    >
      <img
        className="h-14 w-14 relative rounded-[28px] object-cover"
        alt=""
        src="/home/1@2x.png"
      />
      <div className="flex-1 overflow-hidden flex flex-col items-start gap-0.75 min-w-140 max-w-full mq750:min-w-full">
        <h3 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-[1.188rem]">
          เพิ่งโอนเงินไปทำยังไง?
        </h3>
        <div className="relative text-[0.938rem] inline-block max-w-full">
          หยุดโอนเพิ่ม • ติดต่อธนาคารทันที • โทร AOC 1441 เพื่อขอความช่วยเหลือ
        </div>
      </div>
      <a
        href="tel:1441"
        className="cursor-pointer [text-decoration:none] py-0 px-[1.437rem] bg-[#191919] h-13 rounded-[10px] overflow-hidden flex items-center justify-center box-border gap-3 hover:bg-[#4d4d4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919]"
        aria-label="โทร AOC 1441"
      >
        <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-white text-left">
          โทร AOC 1441
        </div>
        <img
          className="h-5.5 w-5.5 relative"
          alt=""
          src="/share/phone.svg"
        />
      </a>
      <Link
        to="/reporting-guide#guide-step-01"
        className="relative text-[0.875rem] [text-decoration:underline] font-semibold text-inherit hover:text-[#4d4d4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919]"
      >
        ดู 3 ขั้นตอนฉุกเฉิน
      </Link>
    </section>
  );
};

export default BannerAOC;
