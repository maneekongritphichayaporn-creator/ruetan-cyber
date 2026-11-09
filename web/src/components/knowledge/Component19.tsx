import { FunctionComponent, useState } from "react";
import Component4 from "./Component4";
import Component5 from "./Component5";

export type Component19Type = {
  className?: string;
};

const Component19: FunctionComponent<Component19Type> = ({
  className = "",
}) => {
  const [component5Items] = useState([
    {
      divBackgroundColor: "#ffd43b" as const,
      heart: "/share/heart.svg",
      prop: "ผูกใจ",
    },
    {
      divBackgroundColor: "#ffd43b" as const,
      heart: "/share/trending-up.svg",
      prop: "ชวนลงทุน",
    },
    {
      divBackgroundColor: "#ffd43b" as const,
      heart: "/share/lock-keyhole.svg",
      prop: "ถอนติดล็อก",
    },
  ]);
  return (
    <section
      id="knowledge-ai"
      className={`self-stretch scroll-mt-28 bg-[#191919] overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] gap-[1.75rem] text-left text-[0.75rem] text-[#ffd43b] font-['Noto_Sans_Thai'] lg:pt-[2.25rem] lg:pb-[2.25rem] lg:box-border mq750:py-[1.438rem] mq750:px-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem]">
        <b className="self-stretch relative leading-[165%]">
          มุกเปลี่ยนได้ แต่เรารู้ทันได้
        </b>
        <h2 className="m-0 self-stretch relative text-[2.125rem] leading-[135%] font-bold font-[inherit] text-[#fff] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
          กลโกงยุคเอไอ และกลลวงที่ผสมหลายมุก
        </h2>
        <div className="self-stretch relative text-[1rem] leading-[165%] text-[#c7c7be]">
          ไม่ต้องจับผิดภาพหรือเสียงให้เก่งที่สุด
          แค่หยุดและตรวจสอบนอกช่องทางที่เขาส่งมา
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.5rem]">
        <section className="self-stretch flex-1 rounded-[20px] bg-[#fff] overflow-hidden flex flex-col items-start min-w-[29.438rem] text-left text-[0.813rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:min-w-full">
          <img
            className="self-stretch h-[13.125rem] max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/knowledge-base/6@2x.png"
          />
          <Component4
            prop="รู้ทันดีปเฟกและเสียงโคลน"
            prop1="ปลอมหน้า ปลอมเสียงด้วยเอไอ"
            prop2="ภาพเหมือน เสียงใช่ ก็ยังต้องยืนยันตัวตน"
            prop3="ใช้ดีปเฟกหรือโคลนเสียงเลียนแบบคนที่ไว้ใจ หรือทำคลิปคนดังชวนลงทุน แล้วพาไปแอดไลน์ โหลดแอป หรือโอนเงิน"
            prop4="เร่งให้โอนทันที • ขอให้เก็บเป็นความลับ • ใช้คลิปคนดังรับรองกำไรสูง • ให้เติมเงินก่อนถอน"
            prop5="วางสายแล้วโทรกลับเบอร์เดิมที่บันทึกไว้ ตรวจข่าวจากช่องทางจริงของบุคคลนั้น และตรวจผู้ให้บริการก่อนลงทุน"
            prop6="[2–3] ธปท. / ก.ล.ต. • ภัยเอไอและคลิปลงทุนปลอม"
            href="https://www.sec.or.th/TH/Template3/Articles/2567/280567.pdf"
          />
        </section>
        <section className="self-stretch flex-1 rounded-[20px] bg-[#fff] overflow-hidden flex flex-col items-start min-w-[29.438rem] text-left text-[1rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:min-w-full">
          <div className="self-stretch h-[13.125rem] bg-[#fff3be] overflow-hidden shrink-0 flex flex-col items-start mq750:h-auto">
            <div className="self-stretch h-[13.125rem] overflow-hidden shrink-0 flex items-center justify-center p-[2rem] box-border gap-[1rem] mq750:h-auto mq750:flex-wrap">
              {component5Items.map((item, index) => (
                <Component5
                  key={index}
                  divBackgroundColor={item.divBackgroundColor}
                  heart={item.heart}
                  prop={item.prop}
                />
              ))}
            </div>
          </div>
          <Component4
            prop="รู้ทันกลลวงแบบไฮบริด"
            prop1="กลลวงแบบผสม: ผูกใจแล้วชวนลงทุน"
            prop2="จากความสัมพันธ์ สู่แพลตฟอร์มที่ไม่มีอยู่จริง"
            prop3="โปรไฟล์ปลอมเข้ามาสร้างความสนิท ก่อนชวนลงทุนบนระบบปลอม ช่วงแรกอาจถอนได้เพื่อสร้างความเชื่อใจ พอโอนเพิ่มกลับถอนไม่ได้"
            prop4="คนเพิ่งรู้จักชวนลงทุน • พาออกไปคุยส่วนตัว • กำไรดูดีผิดปกติ • อ้างภาษีหรือค่าปลดล็อกเพื่อถอน"
            prop5="อย่าใช้ความสนิทแทนการตรวจสอบ หยุดโอนเพิ่ม เช็กชื่อผู้ให้บริการกับ ก.ล.ต. เก็บแชตและสลิป หากโอนแล้วติดต่อธนาคารทันที"
            prop6="[1, 4–5] ธปท. / ก.ล.ต. • กลลวงและการตรวจสอบ"
            href="https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/Phrasiam-66-3/thoughtleader_cyberpolice.html"
          />
        </section>
      </div>
      <div className="self-stretch rounded-xl bg-[#2a2a25] overflow-hidden flex items-center p-[1rem] gap-[0.75rem] text-[0.875rem] text-[#fff]">
        <img
          className="h-[1.375rem] w-[1.375rem] relative"
          alt=""
          src="/share/shield-check.svg"
        />
        <div className="flex-1 relative leading-[165%] font-semibold">
          อย่าตัดสินจากใบหน้า เสียง หรือกำไรบนหน้าจอเพียงอย่างเดียว —
          ยืนยันตัวตนและตรวจสอบผู้ให้บริการเสมอ
        </div>
      </div>
    </section>
  );
};

export default Component19;
