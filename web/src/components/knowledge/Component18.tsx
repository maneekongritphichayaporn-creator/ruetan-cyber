import { FunctionComponent, useState } from "react";
import Component3 from "./Component3";

export type Component18Type = {
  className?: string;
};

const Component18: FunctionComponent<Component18Type> = ({
  className = "",
}) => {
  const [component3Items] = useState([
    {
      prop: "ตำรวจ",
      prop1: "บช.สอท. • ตำรวจไซเบอร์",
      bMinWidth: "8.125rem" as const,
      prop2: "ช่องทางและคู่มือ",
      prop3: "แจ้งความให้ถูกเว็บ\nเก็บหลักฐานให้ครบ",
      prop4:
        "ใช้ช่องทางรับแจ้งความออนไลน์ของตำรวจ ตรวจสอบโดเมนด้วยตนเอง และอ่านพฤติการณ์จากคู่มือสอบสวนคดีเทคโนโลยี",
      prop5: "thaipoliceonline.go.th ↗",
      href: "https://thaipoliceonline.go.th/",
      prop6: "[6] เว็บไซต์รับแจ้งความ / คู่มือสอบสวน",
      href1: "https://thaipoliceonline.go.th/",
    },
    {
      prop: "ธปท.",
      prop1: "ธนาคารแห่งประเทศไทย",
      bMinWidth: "7.75rem" as const,
      prop2: "บทความให้ความรู้",
      prop3: "หน้าและเสียงที่คุ้นเคย\nอาจถูกเอไอปลอมได้",
      prop4:
        "บทความ ธปท. อธิบายการปลอมใบหน้าและเสียงของคนที่ไว้ใจ เพื่อกดดันให้โอนเงิน ควรตรวจสอบผ่านอีกช่องทางก่อนตัดสินใจ",
      prop5: "อ่านคำแนะนำเรื่องภัยเอไอ ↗",
      href: "https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/phrasiam-69-1/Financial-fraud-in-the-age-of-AI.html",
      prop6: "[2] ธปท. • ภัยทุจริตทางการเงินยุค AI",
      href1:
        "https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/phrasiam-69-1/Financial-fraud-in-the-age-of-AI.html",
    },
    {
      prop: "ก.ล.ต.",
      prop1: "สำนักงาน ก.ล.ต.",
      bMinWidth: "5.5rem" as const,
      prop2: "คำเตือนและเครื่องมือตรวจสอบ",
      prop3: "ทักส่วนตัวชวนลงทุน?\nตรวจคน บริษัท และบัญชี",
      prop4:
        "ก.ล.ต. เตือนเรื่องการชวนลงทุนผ่านข้อความส่วนตัว ใช้ SEC Check First และ Investor Alert ตรวจสอบผู้ให้บริการและคำเตือน",
      prop5: "ไปศูนย์ป้องกันกลโกง ก.ล.ต. ↗",
      href: "https://www.sec.or.th/TH/Pages/SECAnti-ScamCenter.aspx",
      prop6: "[4–5] ก.ล.ต. • คำเตือน / ศูนย์ป้องกันกลโกง",
      href1: "https://www.sec.or.th/TH/Pages/SECAnti-ScamCenter.aspx",
    },
  ]);
  return (
    <section
      id="knowledge-official"
      className={`self-stretch scroll-mt-28 bg-[#fff] overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] gap-[1.75rem] text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:py-[2.25rem] mq750:px-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem]">
        <b className="self-stretch relative leading-[165%]">
          เช็กกับต้นทาง ไม่เช็กจากคนส่ง
        </b>
        <h2 className="m-0 self-stretch relative text-[2.125rem] leading-[135%] font-bold font-[inherit] text-[#191919] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
          คำเตือนและข้อมูลจากหน่วยงานทางการ
        </h2>
        <div className="self-stretch relative text-[1rem] leading-[165%]">
          สรุปให้อ่านง่าย พร้อมทางไปตรวจสอบกับตำรวจไซเบอร์ ธปท. และ ก.ล.ต.
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem]">
        {component3Items.map((item, index) => (
          <Component3
            key={index}
            prop={item.prop}
            prop1={item.prop1}
            bMinWidth={item.bMinWidth}
            prop2={item.prop2}
            prop3={item.prop3}
            prop4={item.prop4}
            prop5={item.prop5}
            href={item.href}
            prop6={item.prop6}
            href1={item.href1}
          />
        ))}
      </div>
      <div className="self-stretch rounded-xl bg-[#faf8f2] overflow-hidden flex items-center p-[1rem] gap-[0.625rem] text-[0.813rem]">
        <img
          className="h-[1.125rem] w-[1.125rem] relative"
          alt=""
          src="/share/info.svg"
        />
        <div className="flex-1 relative leading-[165%]">
          เป็นการสรุปจากเอกสารและช่องทางที่อ้างอิง
          ไม่ใช่ถ้อยแถลงของหน่วยงานหรือประกาศล่าสุด
          โดยส่วนตำรวจเป็นช่องทางและคู่มือ
        </div>
      </div>
    </section>
  );
};

export default Component18;
