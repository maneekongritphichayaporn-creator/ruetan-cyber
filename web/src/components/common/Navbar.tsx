import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

export type NavbarProps = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-24 bg-white overflow-hidden shrink-0 flex items-center justify-between flex-nowrap content-center py-0 px-20 box-border gap-0 sticky top-0 z-[99] max-w-full text-left text-[1.75rem] text-[#191919] font-['Noto_Sans_Thai'] mq1050:px-6 mq1050:gap-3 mq750:gap-2 mq750:px-4 mq450:h-16 mq450:gap-1 mq450:px-2 mq450:text-[1.25rem] ${className}`}
    >
      {/* โลโก้และชื่อเว็บไซต์ (คลิกแล้วกลับหน้าแรก) */}
      <Link
        to="/"
        className="h-11 shrink-0 overflow-hidden flex items-center gap-3 [text-decoration:none] text-[#191919] mq750:gap-2 mq450:gap-1 mq450:h-10"
      >
        <img className="h-11 w-11 relative mq1050:h-9 mq1050:w-9 mq450:h-8 mq450:w-8" alt="Logo" src="/share/logo.svg" />
        <h2 className="m-0 relative text-[length:inherit] font-extrabold font-[inherit] mq1050:text-[1.25rem] mq450:text-[1rem]">
          รู้ทัน
        </h2>
        <div className="relative text-[0.75rem] leading-[140%] text-[#65645e] mq1050:text-[0.625rem] mq450:hidden">
          ไม่ตกเป็นเหยื่อ
          <br />
          ภัยไซเบอร์
        </div>
      </Link>

      {/* เมนูนำทาง */}
      <div className="min-w-0 flex-1 overflow-hidden flex items-center justify-end gap-7 max-w-full text-[0.938rem] mq1050:gap-4 mq1050:text-[0.75rem] mq750:gap-2 mq450:gap-1 mq450:text-[0.625rem]">
        {/* 1. หน้าแรก */}
        <NavLink
          to="/"
          end
          className="[text-decoration:none] text-[#191919] mq450:hidden"
        >
          {({ isActive }) => (
            <div className="h-10 overflow-hidden flex flex-col items-start pt-2 px-0 pb-0 box-border gap-1.5 cursor-pointer mq450:h-8 mq450:pt-1.5 mq450:gap-1">
              <span className={`relative whitespace-nowrap ${isActive ? "font-bold" : "font-medium text-[#65645e] hover:text-[#191919]"}`}>
                หน้าแรก
              </span>
              <div
                className={`w-[3.313rem] h-[0.188rem] relative transition-colors duration-200 ${
                  isActive ? "bg-[#ffd43b]" : "bg-[rgba(0,0,0,0)]"
                }`}
              />
            </div>
          )}
        </NavLink>

        {/* 2. รู้ทันกลโกง */}
        <NavLink
          to="/scam-types"
          className="[text-decoration:none] text-[#191919]"
        >
          {({ isActive }) => (
            <div className="h-10 overflow-hidden flex flex-col items-start pt-2 px-0 pb-0 box-border gap-1.5 cursor-pointer mq450:h-8 mq450:pt-1.5 mq450:gap-1">
              <span className={`relative whitespace-nowrap ${isActive ? "font-bold" : "font-medium text-[#65645e] hover:text-[#191919]"}`}>
                <span className="mq450:hidden">รู้ทันกลโกง</span>
                <span className="hidden mq450:inline">กลโกง</span>
              </span>
              <div
                className={`w-[4.188rem] mq1050:w-[3rem] mq450:w-[2.5rem] h-[0.188rem] relative transition-colors duration-200 ${
                  isActive ? "bg-[#ffd43b]" : "bg-[rgba(0,0,0,0)]"
                }`}
              />
            </div>
          )}
        </NavLink>

        {/* 3. รับมือเมื่อโดนหลอก */}
        <NavLink
          to="/reporting-guide"
          className="[text-decoration:none] text-[#191919]"
        >
          {({ isActive }) => (
            <div className="h-10 overflow-hidden flex flex-col items-start pt-2 px-0 pb-0 box-border gap-1.5 cursor-pointer mq450:h-8 mq450:pt-1.5 mq450:gap-1">
              <span className={`relative whitespace-nowrap ${isActive ? "font-bold" : "font-medium text-[#65645e] hover:text-[#191919]"}`}>
                <span className="mq450:hidden">รับมือเมื่อโดนหลอก</span>
                <span className="hidden mq450:inline">รับมือ</span>
              </span>
              <div
                className={`w-[7.313rem] mq1050:w-[4rem] mq450:w-[2.25rem] h-[0.188rem] relative transition-colors duration-200 ${
                  isActive ? "bg-[#ffd43b]" : "bg-[rgba(0,0,0,0)]"
                }`}
              />
            </div>
          )}
        </NavLink>

        {/* 4. ข่าวเตือนภัย / คลังความรู้ */}
        <NavLink
          to="/knowledge-base"
          className="[text-decoration:none] text-[#191919]"
        >
          {({ isActive }) => (
            <div className="h-10 overflow-hidden flex flex-col items-start pt-2 px-0 pb-0 box-border gap-1.5 cursor-pointer mq450:h-8 mq450:pt-1.5 mq450:gap-1">
              <span className={`relative whitespace-nowrap ${isActive ? "font-bold" : "font-medium text-[#65645e] hover:text-[#191919]"}`}>
                <span className="mq450:hidden">ข่าวเตือนภัย</span>
                <span className="hidden mq450:inline">ข่าว</span>
              </span>
              <div
                className={`w-[4.563rem] mq1050:w-[3.5rem] mq450:w-[1.75rem] h-[0.188rem] relative transition-colors duration-200 ${
                  isActive ? "bg-[#ffd43b]" : "bg-[rgba(0,0,0,0)]"
                }`}
              />
            </div>
          )}
        </NavLink>

        {/* 5. ปุ่ม แจ้งเรื่อง / แชร์ประสบการณ์ */}
        <Link
          to="/report-form"
          className="[text-decoration:none]"
        >
          <button aria-label="แจ้งเรื่อง / แชร์ประสบการณ์" className="cursor-pointer shrink-0 border-0 py-0 px-[1.437rem] bg-[#ffd43b] h-13 rounded-[10px] overflow-hidden flex items-center justify-center box-border gap-3 hover:bg-[#e6ba21] transition-colors duration-200 mq1050:px-4 mq750:gap-1 mq750:px-2 mq450:h-9 mq450:w-9 mq450:p-0">
            <div className="relative whitespace-nowrap text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#191919] text-left mq1050:text-[0.75rem] mq450:hidden">
              แจ้งเรื่อง / แชร์ประสบการณ์
            </div>
            <img
              className="h-5.5 w-5.5 relative"
              alt=""
              src="/share/arrow-up-right.svg"
            />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;