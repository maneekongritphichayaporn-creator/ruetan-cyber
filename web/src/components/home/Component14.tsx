import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type Component14Type = {
  className?: string;
};

const Component14: FunctionComponent<Component14Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex items-start pt-[0rem] px-[5rem] pb-[4rem] box-border max-w-full text-left text-[2rem] text-[#000] font-['Noto_Sans_Thai'] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 rounded-[28px] bg-[#ffd43b] overflow-hidden flex items-center flex-wrap content-center p-[2.5rem] box-border gap-x-[2.5rem] gap-y-[0.625rem] max-w-full mq750:gap-[1.25rem]">
        <img
          className="h-[10.25rem] w-[10.25rem] relative object-cover"
          alt=""
          src="/home/15@2x.png"
        />
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.75rem] min-w-[28.063rem] max-w-full mq750:min-w-full">
          <h2 className="m-0 w-full relative text-[length:inherit] leading-[140%] font-bold font-[inherit] inline-block max-w-[43.188rem] mq450:text-[1.188rem] mq450:leading-[1.688rem] mq750:max-w-full mq1050:text-[1.625rem] mq1050:leading-[2.25rem]">
            เรื่องของคุณ ช่วยให้คนอื่นไม่โดนหลอก
          </h2>
          <div className="w-full relative text-[1rem] leading-[170%] inline-block max-w-[43.188rem] mq750:max-w-full">
            พบกลโกงใหม่ หรืออยากแบ่งปันสิ่งที่เจอ?
            <br />
            ส่งเรื่องเพื่อเป็นเบาะแสและช่วยเตือนภัยให้ชุมชน
          </div>
          <div className="w-[15.5rem] h-[1.125rem] overflow-hidden shrink-0 flex items-center gap-[0.5rem] text-[0.75rem]">
            <img
              className="h-[1rem] w-[1rem] relative"
              loading="lazy"
              alt=""
              src="/share/lock-keyhole.svg"
            />
            <div className="relative">
              ปิดบังข้อมูลส่วนตัวและเลขบัญชีก่อนแชร์ทุกครั้ง
            </div>
          </div>
        </div>
        <div className="h-[5.125rem] overflow-hidden flex flex-col items-center gap-[0.75rem] text-[0.75rem]">
          <Link to="/report-form" className="cursor-pointer [border:none] py-[0rem] px-[1.437rem] bg-[#191919] w-[16.563rem] h-[3.25rem] rounded-[10px] overflow-hidden shrink-0 flex items-center justify-center box-border gap-[0.75rem] text-white [text-decoration:none] hover:bg-[#4d4d4d]">
            <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#fff] text-left">
              แจ้งเรื่อง / แชร์ประสบการณ์
            </div>
            <img
              className="h-[1.375rem] w-[1.375rem] relative"
              alt=""
              src="/share/arrow-up-right-svgrepo-com.svg"
            />
          </Link>
          <div className="relative">การส่งเรื่องไม่ใช่การแจ้งความ</div>
        </div>
      </div>
    </section>
  );
};

export default Component14;
