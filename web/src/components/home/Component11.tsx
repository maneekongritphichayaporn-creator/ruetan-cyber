import { FunctionComponent, useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

export type Component11Type = {
  className?: string;
};

const Component11: FunctionComponent<Component11Type> = ({
  className = "",
}) => {
  const [component3Items] = useState([
    {
      prop: "/home/9@2x.png",
      prop1: "โทรมาขู่",
      prop2: "แก๊งคอลเซ็นเตอร์",
      prop3: "อ้างเป็นเจ้าหน้าที่ ขู่ให้กลัว\nแล้วเร่งให้โอนเงินตรวจสอบ",
      prop4: "วางสาย แล้วโทรเช็กหน่วยงานเอง",
      divDisplay: undefined,
    },
    {
      prop: "/home/10@2x.png",
      prop1: "ลิงก์น่าสงสัย",
      prop2: "SMS ปลอม",
      prop3: "ส่งลิงก์รับสิทธิ์หรือแจ้งพัสดุ\nหลอกให้กรอกข้อมูลส่วนตัว",
      prop4: "ไม่กดลิงก์จากผู้ส่งที่ไม่รู้จัก",
      divDisplay: "inline-block" as const,
    },
    {
      prop: "/home/11@2x.png",
      prop1: "ผลตอบแทนเกินจริง",
      prop2: "หลอกลงทุน",
      prop3: "ชวนลงทุน กำไรสูงแน่นอน\nแต่ถอนเงินไม่ได้ ต้องจ่ายเพิ่ม",
      prop4: "เช็กใบอนุญาตก่อนลงทุนเสมอ",
      divDisplay: undefined,
    },
    {
      prop: "/home/12@2x.png",
      prop1: "แอปอันตราย",
      prop2: "แอปดูดเงิน",
      prop3: "หลอกให้ติดตั้งแอปนอกสโตร์\nหรือเปิดสิทธิ์ควบคุมเครื่อง",
      prop4: "ไม่ติดตั้งแอปจากลิงก์แปลกหน้า",
      divDisplay: undefined,
    },
  ]);
  return (
    <section
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-col items-start pt-[3.5rem] px-[5rem] pb-[4rem] box-border gap-[1.75rem] max-w-full mq750:pt-[2.25rem] mq750:px-[2.5rem] mq750:pb-[2.625rem] mq750:box-border ${className}`}
    >
      <Component2
        prop="รู้ทันไว้ก่อน"
        prop1="กลโกงยอดฮิต ที่ต้องรู้ทัน"
        prop2="หน้าตาอาจเปลี่ยนไป แต่สัญญาณอันตรายมักเหมือนเดิม"
        prop3="ดูภัยไซเบอร์ทั้งหมด"
      />
      <section className="self-stretch overflow-hidden flex items-start justify-center flex-wrap content-start gap-x-[1.25rem] gap-y-[0.625rem] text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai']">
        {component3Items.map((item, index) => (
          <Component3
            key={index}
            prop={item.prop}
            prop1={item.prop1}
            prop2={item.prop2}
            prop3={item.prop3}
            prop4={item.prop4}
            divDisplay={item.divDisplay}
          />
        ))}
      </section>
    </section>
  );
};

export default Component11;
