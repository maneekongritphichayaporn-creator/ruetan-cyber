import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import Component4 from "./Component4";

export type Component12Type = {
  className?: string;
};

const Component12: FunctionComponent<Component12Type> = ({
  className = "",
}) => {
  const [component4Items] = useState([
    {
      prop: "01",
      phoneCall: "/share/phone-call.svg",
      prop1: "โทรอายัดบัญชี",
      prop2:
        "ติดต่อธนาคารที่คุณใช้ทันที เพื่อขอระงับธุรกรรม\nและโทร AOC 1441 ขอคำแนะนำเพิ่มเติม",
      divWidth: "6.688rem" as const,
      prop3: "โทร AOC 1441",
    },
    {
      prop: "02",
      phoneCall: "/share/folder-open-svgrepo-com.svg",
      prop1: "เก็บหลักฐาน",
      prop2:
        "เก็บสลิปโอนเงิน แชต เบอร์โทร และลิงก์\nรวมถึงชื่อและเลขบัญชีปลายทาง อย่าลบแชต",
      divWidth: "10rem" as const,
      prop3: "ดูรายการหลักฐานที่ต้องใช้",
    },
    {
      prop: "03",
      phoneCall: "/share/file-check-2.svg",
      prop1: "แจ้งความออนไลน์",
      prop2:
        "เข้าเว็บไซต์ Thai Police Online ด้วยตนเอง\nตรวจสอบโดเมน thaipoliceonline.go.th ก่อนใช้",
      divWidth: "8.188rem" as const,
      prop3: "ไปแจ้งความออนไลน์",
    },
  ]);
  return (
    <section
      className={`self-stretch bg-[#191919] overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] box-border gap-[2rem] max-w-full text-left text-[0.75rem] text-[#ffd43b] font-['Noto_Sans_Thai'] mq750:gap-[1rem] mq750:py-[2.25rem] mq750:px-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-center justify-between flex-wrap content-center gap-[0rem] max-w-full [row-gap:20px]">
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-[44.063rem] max-w-full mq1050:min-w-full">
          <b className="relative">ตั้งสติ แล้วทำตามนี้</b>
          <h2 className="m-0 relative text-[2.125rem] font-bold font-[inherit] text-[#fff] inline-block max-w-full mq450:text-[1.25rem] mq1050:text-[1.688rem]">
            โดนหลอกแล้ว? เริ่มที่ 3 ขั้นตอนนี้
          </h2>
        </div>
        <Link to="/reporting-guide" className="cursor-pointer [border:none] py-[0rem] px-[1.437rem] bg-[#ffd43b] h-[3.25rem] rounded-[10px] overflow-hidden flex items-center justify-center box-border gap-[0.75rem] text-[#191919] [text-decoration:none] hover:bg-[#e6ba21]">
          <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#191919] text-left">
            คู่มือรับมือฉุกเฉิน
          </div>
          <img
            className="h-[1.375rem] w-[1.375rem] relative"
            alt=""
            src="/share/arrow-up-right.svg"
          />
        </Link>
      </div>
      <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-x-[1.75rem] gap-y-[0.625rem] max-w-full text-left text-[2.75rem] text-[#ffd43b] font-['Noto_Sans_Thai']">
        {component4Items.map((item, index) => (
          <Component4
            key={index}
            prop={item.prop}
            phoneCall={item.phoneCall}
            prop1={item.prop1}
            prop2={item.prop2}
            divWidth={item.divWidth}
            prop3={item.prop3}
          />
        ))}
      </section>
      <div className="self-stretch rounded-[10px] bg-[#2a2a25] overflow-hidden flex items-center py-[0.75rem] px-[1rem] gap-[0.625rem] text-[0.813rem] text-[#fff]">
        <img
          className="h-[1.125rem] w-[1.125rem] relative"
          alt=""
          src="/share/info.svg"
        />
        <div className="relative">
          อย่าโอนเงินเพิ่มเพื่อ “ปลดล็อกบัญชี” หรือ “รับเงินคืน” และอย่าให้รหัส
          OTP กับใคร
        </div>
      </div>
    </section>
  );
};

export default Component12;
