import { FunctionComponent } from "react";
import Component2 from "./Component2";

export type Component17Type = {
  className?: string;
};

const Component17: FunctionComponent<Component17Type> = ({
  className = "",
}) => {
  return (
    <section
      id="knowledge-cases"
      className={`self-stretch scroll-mt-28 overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] gap-[1.75rem] text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:py-[2.25rem] mq750:px-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem]">
        <b className="self-stretch relative leading-[165%]">
          อ่านเคส ไม่ซ้ำรอย
        </b>
        <h2 className="m-0 self-stretch relative text-[2.125rem] leading-[135%] font-bold font-[inherit] text-[#191919] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
          บทเรียนจากรายงานคดีในไทย
        </h2>
        <div className="self-stretch relative text-[1rem] leading-[165%]">
          สรุปพฤติการณ์จากแหล่งอ้างอิง ไม่เปิดเผยผู้เสียหาย
          ไม่เติมตัวเลขความเสียหายหรือรายละเอียดคดีที่ไม่มีหลักฐาน
        </div>
      </div>
      <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.5rem] text-left text-[0.75rem] text-[#191919] font-['Noto_Sans_Thai']">
        <Component2
          prop="ความสัมพันธ์ → หลอกลงทุน"
          heartHandshake="/share/heart-handshake.svg"
          prop1="เครือข่ายหลอกลงทุนในไทย: ความสนิทไม่ใช่หลักประกัน"
          prop2="รายงานบทสัมภาษณ์ตำรวจไซเบอร์กล่าวถึงการสืบสวนเครือข่ายในไทย และอธิบายการลวงผ่านความสัมพันธ์ ก่อนชวนโอนเข้าระบบลงทุนปลอม"
          prop3="แยกความสัมพันธ์ออกจากการตัดสินใจเรื่องเงิน ตรวจสอบแพลตฟอร์มเอง ไม่ใช้ลิงก์จากคนชวน"
          prop4="[1] ธปท. • บทสัมภาษณ์ตำรวจไซเบอร์"
          href="https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/Phrasiam-66-3/thoughtleader_cyberpolice.html"
        />
        <Component2
          prop="กลุ่มออนไลน์ → ชวนลงเงิน"
          heartHandshake="/share/messages-square.svg"
          prop1="หลอกลงทุนกลุ่มแชร์ออนไลน์: คำชวนในกลุ่มที่ต้องเช็ก"
          prop2="คู่มือสอบสวนคดีอาชญากรรมทางเทคโนโลยีมีกรณีหลอกลงทุนกลุ่มแชร์ออนไลน์ ใช้เป็นบทเรียนเรื่องการตรวจสอบคำชวนและเก็บหลักฐานการติดต่อ"
          prop3="คำรับรองในกลุ่มไม่ใช่หลักฐานความน่าเชื่อถือ เก็บแชต สลิป และบัญชีปลายทางเมื่อพบเหตุผิดปกติ"
          prop4="[6] ตำรวจ • คู่มือสอบสวนคดีอาชญากรรมทางเทคโนโลยี"
          href="https://officer.thaipoliceonline.go.th/resource/manual-officer.pdf"
        />
      </section>
      <div className="self-stretch overflow-hidden flex items-center gap-[0.625rem] text-[0.813rem]">
        <img
          className="h-[1.125rem] w-[1.125rem] relative"
          alt=""
          src="/share/info.svg"
        />
        <div className="flex-1 relative leading-[165%]">
          เนื้อหานี้เป็นบทเรียนจากรายงานและคู่มือ
          ไม่ใช่ข่าวจับกุมล่าสุดหรือการยืนยันผลคดี
        </div>
      </div>
    </section>
  );
};

export default Component17;
