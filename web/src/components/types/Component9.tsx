import { FunctionComponent } from "react";

export type Component9Type = {
  className?: string;
};

const Component9: FunctionComponent<Component9Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start gap-[1rem] max-w-full shrink-0 text-left text-[0.813rem] text-[#000] font-['Noto_Sans_Thai'] ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-start gap-[0.75rem] max-w-full">
        <div className="h-[3.5rem] flex-1 rounded-[10px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex items-center py-[0rem] px-[1.125rem] gap-[0.75rem] max-w-full mq1050:min-w-full">
          <img className="h-[1.375rem] w-[1.375rem] relative" alt="" />
          <input
            className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-['Noto_Sans_Thai'] text-[0.938rem] bg-[transparent] h-[1.438rem] flex-1 relative text-[#65645e] text-left inline-block min-w-[15.625rem] p-0 max-w-[calc(100%_-_34px)]"
            placeholder="ค้นหาชื่อกลโกง คำพูดที่เจอ หรือวิธีป้องกัน เช่น “โอนเงินตรวจสอบ”"
            type="text"
          />
        </div>
        <button className="cursor-pointer [border:none] py-[0rem] px-[1.5rem] bg-[#ffd43b] h-[3.25rem] rounded-[10px] overflow-hidden flex items-center justify-center box-border gap-[0.75rem] hover:bg-[#e6ba21]">
          <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#191919] text-left">
            ค้นหากลโกง
          </div>
          <img className="h-[1.375rem] w-[1.375rem] relative" alt="" />
        </button>
      </div>
      <div className="self-stretch overflow-hidden flex items-center gap-[0.625rem] mq750:flex-wrap">
        <div className="relative text-[#65645e]">ลองค้นหา</div>
        <div className="h-[1.875rem] rounded-[100px] bg-[#faf8f2] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border">
          <div className="relative">อ้างตำรวจ</div>
        </div>
        <div className="h-[1.875rem] rounded-[100px] bg-[#faf8f2] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border">
          <div className="relative">พัสดุตกค้าง</div>
        </div>
        <div className="h-[1.875rem] rounded-[100px] bg-[#faf8f2] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border">
          <div className="relative">แอปดูดเงิน</div>
        </div>
        <div className="h-[1.875rem] rounded-[100px] bg-[#faf8f2] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border">
          <div className="relative">งานกดไลก์</div>
        </div>
        <div className="h-[1.875rem] rounded-[100px] bg-[#faf8f2] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border">
          <div className="relative">กู้เงินออนไลน์</div>
        </div>
      </div>
    </section>
  );
};

export default Component9;
