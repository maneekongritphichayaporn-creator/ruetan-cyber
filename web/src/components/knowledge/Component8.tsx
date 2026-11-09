import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type Component8Type = {
  className?: string;
};

const Component8: FunctionComponent<Component8Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex items-start pt-[0rem] px-[5rem] pb-[4rem] text-left text-[2rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 rounded-[28px] bg-[#ffd43b] overflow-hidden flex items-center flex-wrap content-center p-[2.5rem] gap-[2.5rem] mq750:gap-[1.25rem]">
        <div className="h-[10.25rem] w-[10.25rem] overflow-hidden shrink-0 flex items-center justify-center relative isolate">
          <div className="h-full w-full absolute !!m-[0 important] top-[0rem] left-[0rem] rounded-[50%] bg-[#fff3be] z-[0]" />
          <div className="w-[7rem] overflow-hidden shrink-0 flex items-start py-[1.25rem] px-[0rem] box-border relative isolate z-[1]">
            <img
              className="h-[7rem] w-[7rem] relative z-[0]"
              alt=""
              src="/share/logo.svg"
            />
            <div className="h-[1.05rem] w-[0.244rem] absolute !!m-[0 important] top-[4.438rem] left-[2.1rem] rounded-[50%] bg-[#191919] z-[2]" />
            <div className="h-[1.05rem] w-[0.244rem] absolute !!m-[0 important] top-[4.438rem] left-[4.794rem] rounded-[50%] bg-[#191919] z-[3]" />
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.75rem] min-w-[28.063rem] mq750:min-w-full">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[140%] font-bold font-[inherit] mq1050:text-[1.625rem] mq1050:leading-[2.25rem] mq450:text-[1.188rem] mq450:leading-[1.688rem]">
            เรื่องของคุณ ช่วยให้คนอื่นไม่โดนหลอก
          </h2>
          <div className="self-stretch relative text-[1rem] leading-[165%]">
            พบกลโกงใหม่ หรืออยากแบ่งปันสิ่งที่เจอ?
            <br />
            ส่งเรื่องเพื่อเป็นเบาะแสและช่วยเตือนภัยให้ชุมชน
          </div>
          <div className="self-stretch overflow-hidden flex items-center gap-[0.5rem] text-[0.75rem]">
            <img
              className="h-[1rem] w-[1rem] relative"
              loading="lazy"
              alt=""
              src="/share/lock-keyhole.svg"
            />
            <div className="flex-1 relative leading-[165%]">
              ปิดข้อมูลส่วนตัวและเลขบัญชีก่อนแชร์ทุกครั้ง
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center gap-[0.75rem] text-[0.75rem]">
          <Link to="/report-form" className="cursor-pointer [border:none] py-[0rem] px-[1.5rem] bg-[#191919] h-[3.25rem] rounded-[10px] overflow-hidden shrink-0 flex items-center justify-center box-border gap-[0.75rem] text-white [text-decoration:none] hover:bg-[#4d4d4d]">
            <div className="relative text-[1rem] leading-[165%] font-semibold font-['Noto_Sans_Thai'] text-[#fff] text-left">
              แจ้งเรื่อง / แชร์ประสบการณ์
            </div>
            <img
              className="h-[1.375rem] w-[1.375rem] relative"
              alt=""
              src="/share/arrow-up-right-svgrepo-com.svg"
            />
          </Link>
          <div className="relative leading-[165%]">
            การส่งเรื่องไม่ใช่การแจ้งความ
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component8;
