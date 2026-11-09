import { FunctionComponent, useState } from "react";
import Component6 from "./Component6";

export type Component7Type = {
  className?: string;
};

const Component7: FunctionComponent<Component7Type> = ({ className = "" }) => {
  const [component6Items] = useState([
    {
      prop: "[1]",
      prop1:
        "ธปท. • พล.ต.ต.นิเวศน์ อาภาวศิน กับภารกิจป้องกันและปราบปรามปัญหาภัยการเงินออนไลน์",
      href: "https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/Phrasiam-66-3/thoughtleader_cyberpolice.html",
      prop2: "bot.or.th • พระสยาม ฉบับ 3/2566 ↗",
      href1:
        "https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/Phrasiam-66-3/thoughtleader_cyberpolice.html",
    },
    {
      prop: "[2]",
      prop1: "ธปท. • ภัยทุจริตทางการเงินยุค AI รับมืออย่างไรไม่ให้ตกเป็นเหยื่อ",
      href: "https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/phrasiam-69-1/Financial-fraud-in-the-age-of-AI.html",
      prop2: "bot.or.th • พระสยาม ฉบับ 1/2569 ↗",
      href1:
        "https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/phrasiam-69-1/Financial-fraud-in-the-age-of-AI.html",
    },
    {
      prop: "[3]",
      prop1: "ก.ล.ต. • ระวัง AI ทำเนียน! ปลอมหน้าเหมือนคนดัง ทำคลิปชวนลงทุน",
      href: "https://www.sec.or.th/TH/Template3/Articles/2567/280567.pdf",
      prop2: "sec.or.th • เอกสาร 280567.pdf ↗",
      href1: "https://www.sec.or.th/TH/Template3/Articles/2567/280567.pdf",
    },
    {
      prop: "[4]",
      prop1: "ก.ล.ต. • เตือนระวังทักส่วนตัวชวนลงทุน",
      href: "https://www.sec.or.th/TH/Pages/News_Detail.aspx?SECID=11251",
      prop2: "sec.or.th • ข่าวอ้างอิง SECID=11251 ↗",
      href1: "https://www.sec.or.th/TH/Pages/News_Detail.aspx?SECID=11251",
    },
    {
      prop: "[5]",
      prop1: "ก.ล.ต. • ศูนย์ป้องกันกลโกง ตรวจผู้ให้บริการและคำเตือน",
      href: "https://www.sec.or.th/TH/Pages/SECAnti-ScamCenter.aspx",
      prop2: "sec.or.th • SEC Check First / Investor Alert ↗",
      href1: "https://www.sec.or.th/TH/Pages/SECAnti-ScamCenter.aspx",
    },
    {
      prop: "[6]",
      prop1:
        "ตำรวจ • เว็บไซต์รับแจ้งความและคู่มือสอบสวนคดีอาชญากรรมทางเทคโนโลยี",
      href: "https://officer.thaipoliceonline.go.th/resource/manual-officer.pdf",
      prop2: "thaipoliceonline.go.th • คู่มือ manual-officer.pdf ↗",
      href1:
        "https://officer.thaipoliceonline.go.th/resource/manual-officer.pdf",
    },
  ]);
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start gap-[0.75rem] min-w-[36.063rem] text-left text-[1.5rem] text-[#191919] font-['Noto_Sans_Thai'] mq1050:min-w-full ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[2rem]">
        แหล่งข้อมูลสำหรับอ่านต่อ
      </h3>
      <div className="self-stretch relative text-[0.875rem] leading-[165%] text-[#65645e]">
        เลขอ้างอิงบนการ์ดเชื่อมกับเอกสารต้นทางด้านล่าง
        เปิดอ่านเพื่อดูบริบทและรายละเอียด
      </div>
      {component6Items.map((item, index) => (
        <Component6
          key={index}
          prop={item.prop}
          prop1={item.prop1}
          href={item.href}
          prop2={item.prop2}
          href1={item.href1}
        />
      ))}
    </div>
  );
};

export default Component7;
