import { FunctionComponent } from "react";
import Component2 from "./Component2";

export type Component8Type = {
  className?: string;
};

const Component8: FunctionComponent<Component8Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.125rem] shrink-0 text-left text-[0.875rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-[1.25rem] font-bold font-[inherit] mq450:text-[1rem]">
        ก่อนแชร์ ขอให้เช็กอีกนิด
      </h3>
      <Component2
        prop="/share/8.svg"
        prop1="เล่าจากสิ่งที่พบจริง"
        prop2="บอกวิธีที่เขาติดต่อและชักชวน โดยไม่ใส่ข้อมูลส่วนตัวของผู้เสียหาย"
      />
      <div className="self-stretch overflow-hidden flex items-start gap-[0.75rem] shrink-0">
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-[2.25rem] w-[2.25rem] relative rounded-[10px]"
          alt=""
          src="/share/9.svg"
        />
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.25rem]">
          <b className="self-stretch relative leading-[160%]">
            ปิดข้อมูลส่วนบุคคลให้ครบ
          </b>
          <div className="self-stretch relative text-[0.813rem] leading-[170%] text-[#65645e]">
            ตรวจทั้งภาพและข้อความ ก่อนแนบหรือส่งเรื่อง
          </div>
        </div>
      </div>
      <Component2
        prop="/share/10.svg"
        prop1="เก็บต้นฉบับไว้เสมอ"
        prop2="รักษาแชต สลิป และภาพต้นฉบับที่ไม่เบลอไว้สำหรับแจ้งความ"
      />
    </div>
  );
};

export default Component8;
