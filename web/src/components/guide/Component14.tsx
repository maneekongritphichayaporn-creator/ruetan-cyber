import { FunctionComponent, useState } from "react";
import Component4 from "./Component4";
import Component3 from "./Component3";

export type Component14Type = {
  className?: string;
};

const Component14: FunctionComponent<Component14Type> = ({
  className = "",
}) => {
  const [component4Items] = useState([
    {
      prop: "การหลอกเอาทรัพย์",
      scale: "/share/scale.svg",
      prop1: "ฉ้อโกง / ฉ้อโกงประชาชน",
      bMargin: undefined,
      prop2: "ป.อ. มาตรา 341, 343",
      prop3:
        "โดยสรุป คือการหลอกด้วยข้อความเท็จ หรือปกปิดความจริงที่ควรบอก จนได้ทรัพย์สินจากผู้ถูกหลอก ส่วนการฉ้อโกงประชาชนเกี่ยวข้องกับการหลอกลวงต่อประชาชน",
      prop4:
        "ต้องดูวิธีหลอก ผู้ที่ถูกหลอก และองค์ประกอบความผิด ไม่ใช่ทุกข้อพิพาทซื้อขายหรือผิดสัญญาจะเป็นฉ้อโกง",
    },
    {
      prop: "ข้อมูลในระบบคอมพิวเตอร์",
      scale: "/share/monitor-check.svg",
      prop1: "พ.ร.บ.คอมพิวเตอร์ฯ",
      bMargin: "0" as const,
      prop2: "มาตรา 14",
      prop3:
        "อาจเกี่ยวข้องเมื่อมีการนำเข้าข้อมูลคอมพิวเตอร์ที่เข้าองค์ประกอบตามกฎหมาย เช่น ข้อมูลเท็จหรือบิดเบือนโดยทุจริตหรือหลอกลวง ในลักษณะที่อาจเกิดความเสียหายแก่ประชาชน",
      prop4:
        "การหลอกผ่านออนไลน์ไม่ได้เป็นความผิดมาตรา 14 โดยอัตโนมัติ ต้องพิจารณาข้อมูล พฤติการณ์ และองค์ประกอบเป็นรายกรณี",
    },
    {
      prop: "บัญชีม้า / ซิมม้า",
      scale: "/share/credit-card.svg",
      prop1: "พ.ร.ก.มาตรการป้องกันและปราบปรามอาชญากรรมทางเทคโนโลยีฯ",
      bMargin: undefined,
      prop2: "ความผิดเกี่ยวกับบัญชีม้าและซิมม้า",
      prop3:
        "มีมาตรการและความผิดเกี่ยวกับการเปิดหรือยอมให้ใช้บัญชีหรือหมายเลขโทรศัพท์เพื่ออาชญากรรมทางเทคโนโลยี รวมถึงการจัดหาหรือซื้อขายตามเงื่อนไขที่กฎหมายกำหนด",
      prop4:
        "ชื่อบัญชีปลายทางเป็นข้อมูลให้สอบสวน ไม่ใช่ข้อสรุปว่าเจ้าของบัญชีมีความผิด ต้องตรวจสอบข้อเท็จจริงและการรู้เห็น",
    },
  ]);
  return (
    <section
      className={`self-stretch bg-[#191919] overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] gap-[1.75rem] mq1050:pt-[2.25rem] mq1050:pb-[2.25rem] mq1050:box-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border mq450:pt-[1.438rem] mq450:pb-[1.438rem] mq450:box-border ${className}`}
    >
      <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.375rem] text-[#191919] font-['Noto_Sans_Thai']">
        <div className="h-[3.5rem] w-[3.5rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
          <h3 className="m-0 relative text-[length:inherit] font-extrabold font-[inherit] mq450:text-[1.125rem]">
            03
          </h3>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-[48.938rem] text-[2.125rem] text-[#fff] mq1050:min-w-full">
          <b className="self-stretch relative leading-[135%] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
            รู้ข้อกฎหมาย โดยไม่ต้องท่องมาตรา
          </b>
          <div className="self-stretch relative text-[1rem] leading-[170%] text-[#c7c7be]">
            เข้าใจภาพรวมเพื่อเล่าเหตุการณ์ได้ตรงประเด็น
            คุณไม่จำเป็นต้องกำหนดฐานความผิดเองก่อนแจ้งความ
          </div>
        </div>
      </section>
      <div className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem]">
        {component4Items.map((item, index) => (
          <Component4
            key={index}
            prop={item.prop}
            scale={item.scale}
            prop1={item.prop1}
            bMargin={item.bMargin}
            prop2={item.prop2}
            prop3={item.prop3}
            prop4={item.prop4}
          />
        ))}
      </div>
      <Component3
        sectionBackgroundColor="#2a2a25"
        prop="ฐานความผิดสุดท้ายขึ้นอยู่กับข้อเท็จจริง"
        bColor="#ffd43b"
        prop1="การจัดประเภทความผิดและข้อกฎหมายที่ใช้ ต้องพิจารณาจากพฤติการณ์ หลักฐาน และการประเมินของพนักงานสอบสวน / ผู้ให้คำปรึกษากฎหมาย สรุปนี้ไม่ใช่คำวินิจฉัยคดี และไม่รับประกันว่าจะได้เงินคืน"
        divColor="#fff"
      />
    </section>
  );
};

export default Component14;
