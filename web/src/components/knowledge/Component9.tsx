import { FunctionComponent } from "react";

export type Component9Type = {
  className?: string;
};

const Component9: FunctionComponent<Component9Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[22.5rem] rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[1rem] max-w-full text-left text-[0.875rem] text-[#65645e] font-['Noto_Sans_Thai'] lg:flex-1 mq750:min-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border ${className}`}
    >
      <img
        className="w-[1.875rem] h-[1.875rem] relative"
        alt=""
        src="/share/book-open.svg"
      />
      <b className="self-stretch relative text-[1.375rem] leading-[165%] text-[#191919] mq450:text-[1.125rem] mq450:leading-[1.813rem]">
        อ่านเพื่อรู้ทัน
        <br />
        ไม่ใช่ข่าวสดหรือคำวินิจฉัยคดี
      </b>
      <div className="self-stretch relative leading-[165%]">
        เนื้อหานี้สรุปจากรายงาน บทความ คำเตือน และคู่มือที่ระบุ
        ไม่อ้างว่าเป็นประกาศใหม่ล่าสุด และไม่เติมชื่อผู้เสียหาย
        ตัวเลขความเสียหาย หรือสถิติที่ไม่มีหลักฐาน
      </div>
      <div className="self-stretch relative leading-[165%]">
        ส่วนเทคนิคเอไอและคำเตือนลงทุนเป็นความรู้เกี่ยวกับรูปแบบกลโกง
        ไม่ได้ยืนยันว่าเป็นคดีเฉพาะที่เกิดขึ้นกับบุคคลใด
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
      <div className="self-stretch relative text-[0.813rem] leading-[165%]">
        รู้ทันไม่ใช่หน่วยงานรัฐ
        และไม่มีความเกี่ยวข้องอย่างเป็นทางการกับหน่วยงานที่อ้างถึง
        ตรวจข้อมูลกับต้นทางก่อนดำเนินการจริง
      </div>
      <a
        className="self-stretch relative text-[0.813rem] leading-[165%] font-semibold text-[#191919] [text-decoration:none]"
        href="https://thaipoliceonline.go.th/"
        target="_blank"
      >
        ช่องทางตำรวจ: thaipoliceonline.go.th ↗
      </a>
    </div>
  );
};

export default Component9;
