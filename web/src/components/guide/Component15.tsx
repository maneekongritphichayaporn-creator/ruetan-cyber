import { FunctionComponent, useState } from "react";
import Component5 from "./Component5";
import Component3 from "./Component3";

export type Component15Type = {
  className?: string;
};

const Component15: FunctionComponent<Component15Type> = ({
  className = "",
}) => {
  const [component5Items] = useState([
    {
      landmark: "/share/landmark.svg",
      prop: "ขอพบผู้บังคับบัญชาของสถานี",
      bMargin: undefined,
      prop1:
        "ขอให้ผู้บังคับบัญชาตรวจสอบเหตุผลที่ไม่รับเรื่อง ยื่นรายละเอียดเหตุการณ์ หลักฐาน และบันทึกการติดต่อ พร้อมขอทราบวิธีดำเนินการที่ถูกต้อง",
    },
    {
      landmark: "/share/file-search.svg",
      prop: "ร้องเรียนผ่านจเรตำรวจ",
      bMargin: "0" as const,
      prop1:
        "ใช้ช่องทางร้องเรียนทางการของจเรตำรวจ ตรวจสอบช่องทางจากเว็บไซต์หน่วยงานก่อนส่งข้อมูล ระบุสถานี วันเวลา ผู้ที่ติดต่อ และเหตุผลที่ได้รับแจ้ง",
    },
    {
      landmark: "/share/scale-svgrepo-com.svg",
      prop: "ปรึกษาสภาทนายความ",
      bMargin: "0" as const,
      prop1:
        "ขอคำแนะนำเรื่องสิทธิ การร้องทุกข์ กำหนดเวลาที่เกี่ยวข้อง และแนวทางขอความเป็นธรรม เตรียมเอกสารให้พร้อมเพื่อให้ประเมินตามข้อเท็จจริงของคดี",
    },
  ]);
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] box-border gap-[1.75rem] max-w-full text-left text-[1.5rem] text-[#191919] font-['Noto_Sans_Thai'] mq1050:pt-[2.25rem] mq1050:pb-[2.25rem] mq1050:box-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border mq450:pt-[1.438rem] mq450:pb-[1.438rem] mq450:box-border ${className}`}
    >
      <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.375rem] text-[#191919] font-['Noto_Sans_Thai']">
        <div className="h-[3.5rem] w-[3.5rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
          <h3 className="m-0 relative text-[length:inherit] font-extrabold font-[inherit] mq450:text-[1.125rem]">
            04
          </h3>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-[48.938rem] text-[2.125rem] mq1050:min-w-full">
          <b className="self-stretch relative leading-[135%] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
            ถูกปฏิเสธรับแจ้งความ ต้องทำอย่างไร?
          </b>
          <div className="self-stretch relative text-[1rem] leading-[170%] text-[#65645e]">
            ขอคำอธิบาย เก็บข้อมูลการติดต่อ
            และใช้ช่องทางขอความเป็นธรรมอย่างเป็นขั้นตอน
            ไม่ต้องโต้เถียงหรือเสี่ยงอันตราย
          </div>
        </div>
      </section>
      <div className="self-stretch overflow-hidden flex flex-wrap items-start gap-[1.5rem] max-w-full">
        <div className="self-stretch w-[25.625rem] rounded-[20px] bg-[#fff3be] overflow-hidden shrink-0 flex flex-col items-start p-[1.75rem] box-border gap-[1.125rem] max-w-full mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border mq750:min-w-full">
          <img
            className="w-[2rem] h-[2rem] relative"
            alt=""
            src="/share/shield-check.svg"
          />
          <b className="self-stretch relative leading-[140%] mq450:text-[1.188rem] mq450:leading-[1.688rem]">
            คุณมีสิทธิร้องทุกข์
          </b>
          <div className="self-stretch relative text-[0.938rem] leading-[170%]">
            ตามกระบวนการใน ป.วิ.อ.
            ผู้เสียหายสามารถร้องทุกข์ต่อพนักงานสอบสวนเพื่อให้ดำเนินคดีกับผู้กระทำความผิด
            การใช้สิทธิและเงื่อนไขของแต่ละคดีควรปรึกษาผู้รู้กฎหมาย
          </div>
          <div className="self-stretch h-[0.063rem] relative bg-[#e5d895]" />
          <b className="self-stretch relative text-[1.125rem] leading-[165%]">
            “ต้องการร้องทุกข์ให้ดำเนินคดี หากยังรับไม่ได้
            ขอทราบเหตุผลและขั้นตอนที่ต้องทำต่อค่ะ / ครับ”
          </b>
          <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#65645e]">
            หากได้รับเพียงบันทึกประจำวัน
            ให้ถามอีกครั้งว่ารับคำร้องทุกข์เพื่อดำเนินคดีแล้วหรือไม่
            และขอเก็บสำเนาเอกสารที่เกี่ยวข้อง
          </div>
        </div>
        <section className="flex-1 overflow-hidden flex flex-col items-start gap-[1rem] min-w-[34.375rem] text-left text-[1.25rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:min-w-full">
          {component5Items.map((item, index) => (
            <Component5
              key={index}
              landmark={item.landmark}
              prop={item.prop}
              bMargin={item.bMargin}
              prop1={item.prop1}
            />
          ))}
        </section>
      </div>
      <Component3
        sectionBackgroundColor="#fff3be"
        prop="ก่อนร้องเรียน เตรียมข้อมูลนี้ไว้"
        bColor="#191919"
        prop1="วันและเวลาที่ไปสถานี • ชื่อสถานี / ชื่อหรือหน้าที่ของผู้ที่ติดต่อ • เหตุผลที่ไม่รับเรื่อง • สำเนาเอกสารและหลักฐานการติดต่อ • สิ่งที่ต้องการให้ตรวจสอบ เขียนข้อเท็จจริงอย่างสุภาพ เก็บเลขรับเรื่อง และติดตามผ่านช่องทางทางการ"
        divColor="#191919"
      />
    </section>
  );
};

export default Component15;
