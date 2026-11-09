import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type Component15Type = {
  className?: string;
};

const Footer: FunctionComponent<Component15Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start pt-10 px-20 pb-7 box-border gap-7 max-w-full text-left text-[0.813rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch h-[6.938rem] overflow-hidden shrink-0 flex items-start flex-wrap content-start gap-x-43 gap-y-7.5 max-w-full lg:gap-21.5 mq450:gap-[1.313rem] mq750:gap-[2.688rem]">
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-3 min-w-77.5 max-w-full text-[1.625rem] text-black">
          <div className="w-24.5 h-[2.438rem] overflow-hidden shrink-0 flex items-center gap-3">
            <img
              className="h-9.5 w-9.5 relative"
              alt=""
              src="/share/18.svg"
            />
            <h2 className="m-0 relative text-[length:inherit] font-extrabold font-[inherit] mq450:text-[1.313rem]">
              รู้ทัน
            </h2>
          </div>
          <div className="w-full relative text-[0.813rem] leading-[170%] text-[#65645e] inline-block max-w-90">
            พื้นที่เรียนรู้ภัยไซเบอร์ที่เข้าใจง่าย
            <br />
            เพื่อให้ทุกคนใช้ออนไลน์ได้อย่างปลอดภัยกว่าเดิม
          </div>
        </div>
        <div className="h-[6.938rem] overflow-hidden flex flex-col items-start gap-2.5">
          <b className="relative text-[0.875rem] text-black">
            เรียนรู้และรับมือ
          </b>
          <Link className="relative text-inherit no-underline hover:underline" to="/scam-types">
            รู้ทันกลโกง
          </Link>
          <Link className="relative text-inherit no-underline hover:underline" to="/reporting-guide">
            คู่มือเมื่อโดนหลอก
          </Link>
          <Link className="relative text-inherit no-underline hover:underline" to="/knowledge-base">
            ข่าวเตือนภัย
          </Link>
        </div>
        <div className="h-[6.938rem] overflow-hidden flex flex-col items-start gap-2.5">
          <b className="relative text-[0.875rem] text-black">
            ร่วมสร้างพื้นที่ปลอดภัย
          </b>
          <Link className="relative text-inherit no-underline hover:underline" to="/report-form">
            แจ้งเรื่อง / แชร์ประสบการณ์
          </Link>
          <a
            className="relative text-inherit no-underline hover:underline"
            href="https://drive.google.com/file/d/1b9An8gS7Ks6Rtqb8cVE-9v4DD3Zulway/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            เกี่ยวกับเรา
          </a>
          <a
            className="relative text-inherit no-underline hover:underline"
            href="mailto:ma.catspeare.itna@gmail.com"
          >
            ติดต่อเรา
          </a>
        </div>
        <div className="h-24 overflow-hidden flex flex-col items-start gap-2">
          <div className="relative">ต้องการความช่วยเหลือเร่งด่วน</div>
          <div className="w-42 h-10.5 overflow-hidden shrink-0 flex items-center gap-2.5 text-[1.75rem] text-black">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/share/phone.svg"
            />
            <h2 className="m-0 relative text-[length:inherit] font-extrabold font-[inherit] mq450:text-[1.375rem]">
              AOC 1441
            </h2>
          </div>
          <div className="relative text-[0.75rem]">
            กรณีโอนเงิน ติดต่อธนาคารทันที
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
      <div className="self-stretch overflow-hidden flex items-center justify-between gap-0 gap-y-5 max-w-full text-[0.75rem] mq750:flex-wrap mq750:gap-0">
        <div className="relative inline-block max-w-full">
          รู้ทัน • ข้อมูลเพื่อการเรียนรู้
          ไม่ใช่หน่วยรับแจ้งความหรือบริการอายัดบัญชี
        </div>
        <div className="h-4.5 overflow-hidden flex items-start gap-6">
          <a
            className="relative text-inherit no-underline hover:underline"
            href="https://drive.google.com/file/d/1oGYQLBNz_lxi88u6QGgruV1W8veYQaOR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            นโยบายความเป็นส่วนตัว
          </a>
          <a
            className="relative text-inherit no-underline hover:underline"
            href="https://drive.google.com/file/d/1q8ereuEsFqlz8jEGvn8T86T33yLRy6WI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            เงื่อนไขการใช้งาน
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
