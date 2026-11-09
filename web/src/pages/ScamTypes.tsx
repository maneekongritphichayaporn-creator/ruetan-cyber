import { FunctionComponent, useState } from "react";
import Navbar from "../components/common/Navbar";
import BannerAOC from "../components/common/BannerAOC";
import Component2 from "../components/types/Component2";
import Component8 from "../components/types/Component8";
import Component7 from "../components/types/Component7";
import Component11 from "../components/types/Component11";
import Component5 from "../components/types/Component5";
import Footer from "../components/common/Footer";

const ScamTypes: FunctionComponent = () => {
  const [component5Items] = useState([
    {
      prop: "อ้างหน่วยงานรัฐ / ข่มขู่",
      bMargin: undefined,
      bDisplay: undefined,
      prop1:
        "มิจฉาชีพอ้างเป็นเจ้าหน้าที่เพื่อสร้างความกลัวและเร่งให้ทำตามคำสั่ง",
      divAlignSelf: "stretch" as const,
      divDisplay: undefined,
      prop2: "อ้างหน่วยงานรัฐ / ข่มขู่",
      prop3: "อ้างหน่วยงานรัฐ / ข่มขู่",
      prop11: "แก๊งคอลเซ็นเตอร์ อ้างตำรวจ / อ้างธนาคาร",
      prop12: "โทรขู่ปลดล็อกบัญชี / ปลดล็อกเงิน",
      prop21:
        "โทรขู่ว่ามีหมายจับหรือบัญชีถูกแฮก แล้วเร่งให้โอนเงินตรวจสอบหรือซื้อของแทนเงิน",
      prop22:
        "โทรขู่ว่าบัญชีถูกแฮกหรือเงินถูกอายัด แล้วขอให้โอนเงินเพื่อปลดล็อกหรือรับเงินคืน",
      prop31:
        "“คุณมีหมายจับแล้ว” / “บัญชีของคุณถูกแฮก” / “ต้องโอนเงินเข้าบัญชีเพื่อตรวจสอบ”",
      prop32:
        "“บัญชีของคุณถูกอายัด” / “ต้องโอนเงินเพื่อปลดล็อก” / “ส่ง OTP เพื่อเปิดใช้งาน”",
      prop4:
        "เร่งให้ทำทันที • ขู่ว่าจะถูกจับ • ขอโอนเงินเข้าบัญชีคนอื่น • ไม่มีเอกสารเป็นทางการ",
      prop41:
        "ขอ OTP • ขอโอนเงินเพื่อปลดล็อก • ขู่ว่าเงินจะหาย • ไม่มีเอกสารเป็นทางการ",
      prop5:
        "วางสายแล้วโทรเช็กหน่วยงานด้วยตนเอง • ไม่โอนเงินเข้าบัญชีคนอื่น • ตรวจสอบชื่อผู้ติดต่อและเบอร์โทรอย่างเป็นทางการ",
      prop51:
        "ไม่ส่ง OTP ให้ใคร • ไม่โอนเงินเพื่อปลดล็อก • ตรวจสอบสถานะบัญชีด้วยแอปธนาคารหรือโทรเช็กธนาคารโดยตรง",
      sectionMinWidth: "29.5rem" as const,
      sectionMinWidth1: undefined,
      h3AlignSelf: "stretch" as const,
      h3AlignSelf1: undefined,
      h3Display: undefined,
      h3Display1: undefined,
      divDisplay1: "inline-block" as const,
      divDisplay2: undefined,
      divAlignSelf1: undefined,
      divAlignSelf2: undefined,
      divDisplay12: undefined,
      divAlignSelf12: undefined,
      divDisplay21: "inline-block" as const,
      divAlignSelf21: undefined,
    },
    {
      prop: "ฟิชชิ่งลิงก์ & มัลแวร์ดูดเงิน",
      bMargin: "0" as const,
      bDisplay: undefined,
      prop1: "หลอกให้กดลิงก์ปลอมหรือติดตั้งแอปเพื่อขโมยข้อมูลหรือควบคุมเครื่อง",
      divAlignSelf: "unset" as const,
      divDisplay: "inline-block" as const,
      prop2: "ฟิชชิ่งลิงก์ & มัลแวร์ดูดเงิน",
      prop3: "ฟิชชิ่งลิงก์ & มัลแวร์ดูดเงิน",
      prop11: "SMS ปลอม / ลิงก์รับสิทธิปลอม",
      prop12: "แอปดูดเงิน / แอปควบคุมเครื่อง",
      prop21:
        "ส่งลิงก์ปลอมอ้างว่าเป็นแจ้งเตือนจากธนาคาร บริษัทขนส่ง หรือรางวัลพิเศษ",
      prop22:
        "หลอกให้ติดตั้งแอปนอกสโตร์หรือเปิดสิทธิ์ควบคุมเครื่องเพื่อดูดเงินหรือขโมยข้อมูล",
      prop31: "“พัสดุตกค้าง” / “รับสิทธิ์พิเศษ” / “กรอกข้อมูลเพื่อเปิดใช้งาน”",
      prop32:
        "“ติดตั้งแอปเพื่อแก้ปัญหา” / “เปิดสิทธิ์เพื่อตรวจสอบ” / “ต้องให้เข้าเครื่องเพื่อช่วย”",
      prop4:
        "ลิงก์ไม่ตรงกับชื่อหน่วยงาน • เร่งให้กดทันที • ขอ OTP หรือข้อมูลบัตร • ไม่มีเอกสารเป็นทางการ",
      prop41:
        "ติดตั้งแอปนอกสโตร์ • ขอสิทธิ์ควบคุมเครื่อง • ขอเข้าเครื่อง • ไม่มีเอกสารเป็นทางการ",
      prop5:
        "ไม่กดลิงก์จากผู้ส่งที่ไม่รู้จัก • ตรวจสอบโดเมนอย่างเป็นทางการก่อนกรอกข้อมูล • ไม่ส่ง OTP ให้ใคร",
      prop51:
        "ไม่ติดตั้งแอปจากลิงก์แปลกหน้า • ตรวจสอบสิทธิ์แอปก่อนอนุญาต • ไม่ให้เข้าเครื่องหรือ OTP แก่ผู้ติดต่อ",
      sectionMinWidth: "25.563rem" as const,
      sectionMinWidth1: "25.563rem" as const,
      h3AlignSelf: "stretch" as const,
      h3AlignSelf1: "unset" as const,
      h3Display: undefined,
      h3Display1: "inline-block" as const,
      divDisplay1: "unset" as const,
      divDisplay2: undefined,
      divAlignSelf1: "stretch" as const,
      divAlignSelf2: undefined,
      divDisplay12: "unset" as const,
      divAlignSelf12: "stretch" as const,
      divDisplay21: "inline-block" as const,
      divAlignSelf21: undefined,
    },
    {
      prop: "หลอกลงทุน & งานออนไลน์",
      bMargin: "0" as const,
      bDisplay: undefined,
      prop1:
        "ชวนลงทุนหรือทำงานออนไลน์แล้วขอให้โอนเงินเพิ่มเพื่อปลดล็อกหรือรับเงิน",
      divAlignSelf: "unset" as const,
      divDisplay: "inline-block" as const,
      prop2: "หลอกลงทุน & งานออนไลน์",
      prop3: "หลอกลงทุน & งานออนไลน์",
      prop11: "หลอกลงทุน / โกงการลงทุน",
      prop12: "งานกดไลก์ / งานออนไลน์ปลอม",
      prop21:
        "ชวนลงทุนด้วยกำไรสูงและรับผลตอบแทนแน่นอน แต่ไม่สามารถถอนเงินได้จนกว่าจะโอนเงินเพิ่ม",
      prop22: "ชวนงานออนไลน์แล้วขอให้โอนเงินเพื่อเปิดงานหรือปลดล็อกเงินรางวัล",
      prop31: "“กำไรแน่นอน” / “ถอนง่าย” / “ต้องเติมเงินเพื่อปลดล็อก”",
      prop32:
        "“งานง่ายได้เงินไว” / “ต้องโอนเงินเพื่อเปิดงาน” / “รับเงินหลังจากทำครบ”",
      prop4:
        "กำไรสูงเกินจริง • ขอโอนเงินเพิ่มเพื่อถอน • ไม่มีใบอนุญาต • ไม่สามารถตรวจสอบผู้ให้บริการได้",
      prop41:
        "ขอโอนเงินเพื่อเปิดงาน • ไม่มีเอกสารเป็นทางการ • ไม่มีหน่วยงานที่ชัดเจน • ขอ OTP หรือ OTP เพื่อปลดล็อกเงิน",
      prop5:
        "เช็กใบอนุญาตผู้ให้บริการก่อนลงทุน • ตรวจสอบผ่านช่องทางของ ก.ล.ต. • ไม่โอนเงินเพิ่มเพียงเพราะมีคนรับรองในกลุ่ม",
      prop51:
        "ไม่โอนเงินเพื่อเปิดงาน • ตรวจสอบหน่วยงานผ่านช่องทางทางการ • ไม่ส่ง OTP ให้ผู้จ้าง",
      sectionMinWidth: "29.5rem" as const,
      sectionMinWidth1: undefined,
      h3AlignSelf: "stretch" as const,
      h3AlignSelf1: undefined,
      h3Display: undefined,
      h3Display1: undefined,
      divDisplay1: "inline-block" as const,
      divDisplay2: "unset" as const,
      divAlignSelf1: undefined,
      divAlignSelf2: "stretch" as const,
      divDisplay12: "unset" as const,
      divAlignSelf12: "stretch" as const,
      divDisplay21: "inline-block" as const,
      divAlignSelf21: undefined,
    },
    {
      prop: "ซื้อขายสินค้าออนไลน์ & ปล่อยกู้ทิพย์",
      bMargin: "0" as const,
      bDisplay: "inline-block" as const,
      prop1:
        "หลอกซื้อสินค้าปลอมหรือปล่อยกู้ดอกเบี้ยสูงโดยไม่มีเอกสารหรือหน่วยงานชัดเจน",
      divAlignSelf: "unset" as const,
      divDisplay: "inline-block" as const,
      prop2: "ซื้อขายสินค้าออนไลน์ & ปล่อยกู้ทิพย์",
      prop3: "ซื้อขายสินค้าออนไลน์ & ปล่อยกู้ทิพย์",
      prop11: "ซื้อขายสินค้าปลอม / โกงสินค้าออนไลน์",
      prop12: "ปล่อยกู้ทิพย์ / กู้เงินปลอม",
      prop21:
        "โฆษณาสินค้าราคาถูกเกินจริงหรือสินค้าปลอม แล้วขอให้โอนเงินล่วงหน้า",
      prop22:
        "โฆษณากู้เงินง่ายดอกเบี้ยต่ำ แต่ขอโอนเงินล่วงหน้าหรือให้รหัส OTP เพื่อปลดล็อกเงินกู้",
      prop31: "“สินค้าราคาถูกมาก” / “ส่งของทันที” / “ต้องโอนเงินล่วงหน้า”",
      prop32:
        "“กู้ง่ายดอกเบี้ยต่ำ” / “ต้องโอนค่าธรรมเนียม” / “ส่ง OTP เพื่อปลดล็อกเงินกู้”",
      prop4:
        "ราคาถูกเกินจริง • ขอโอนเงินล่วงหน้า • ไม่มีหน่วยงานชัดเจน • ไม่มีเอกสารการรับประกัน",
      prop41:
        "ขอโอนเงินล่วงหน้า • ขอ OTP • ไม่มีเอกสารเป็นทางการ • ไม่มีหน่วยงานที่ชัดเจน",
      prop5:
        "ตรวจสอบหน่วยงานผู้ขาย • ไม่โอนเงินล่วงหน้า • ใช้ช่องทางชำระเงินที่มีการคุ้มครอง • ตรวจสอบรีวิวจากหลายแหล่ง",
      prop51:
        "ตรวจสอบหน่วยงานผู้ให้กู้ • ไม่โอนเงินล่วงหน้า • ไม่ส่ง OTP • ตรวจสอบอัตราดอกเบี้ยและเงื่อนไขผ่านช่องทางทางการ",
      sectionMinWidth: "29.5rem" as const,
      sectionMinWidth1: undefined,
      h3AlignSelf: "stretch" as const,
      h3AlignSelf1: undefined,
      h3Display: undefined,
      h3Display1: undefined,
      divDisplay1: "unset" as const,
      divDisplay2: undefined,
      divAlignSelf1: "stretch" as const,
      divAlignSelf2: undefined,
      divDisplay12: undefined,
      divAlignSelf12: undefined,
      divDisplay21: "unset" as const,
      divAlignSelf21: "stretch" as const,
    },
  ]);
  return (
    <div className="w-full relative bg-[#faf8f2] flex flex-col items-start leading-[normal] tracking-[normal] text-left text-[0.813rem] text-[#65645e] font-['Noto_Sans_Thai']">
      <Navbar />
      <section className="self-stretch flex flex-col items-start max-w-full">
        <BannerAOC />
      </section>
      <div className="self-stretch overflow-hidden flex flex-col items-start pt-7 px-20 pb-10 box-border gap-7 max-w-full mq750:pt-[1.25rem] mq750:px-[2.5rem] mq750:pb-[1.625rem] mq750:box-border">
        <section className="self-stretch overflow-hidden flex items-center gap-16 max-w-full lg:flex-wrap mq750:gap-[2rem] mq450:gap-[1rem]">
          <Component8 />
          <Component7 />
        </section>
        <Component2 />
      </div>
      <main className="self-stretch flex flex-col items-start bg-[#f7f7f8] max-w-full">
        <section className="self-stretch overflow-hidden flex flex-col items-start pt-8 px-20 pb-12 box-border gap-8 max-w-full mq750:gap-[1rem] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
          <Component11 />
          {component5Items.map((item, index) => (
            <Component5
              key={index}
              id={`scam-category-${index + 1}`}
              prop={item.prop}
              bMargin={item.bMargin}
              bDisplay={item.bDisplay}
              prop1={item.prop1}
              divAlignSelf={item.divAlignSelf}
              divDisplay={item.divDisplay}
              prop2={item.prop2}
              prop3={item.prop3}
              prop11={item.prop11}
              prop12={item.prop12}
              prop21={item.prop21}
              prop22={item.prop22}
              prop31={item.prop31}
              prop32={item.prop32}
              prop4={item.prop4}
              prop41={item.prop41}
              prop5={item.prop5}
              prop51={item.prop51}
              sectionMinWidth={item.sectionMinWidth}
              sectionMinWidth1={item.sectionMinWidth1}
              h3AlignSelf={item.h3AlignSelf}
              h3AlignSelf1={item.h3AlignSelf1}
              h3Display={item.h3Display}
              h3Display1={item.h3Display1}
              divDisplay1={item.divDisplay1}
              divDisplay2={item.divDisplay2}
              divAlignSelf1={item.divAlignSelf1}
              divAlignSelf2={item.divAlignSelf2}
              divDisplay12={item.divDisplay12}
              divAlignSelf12={item.divAlignSelf12}
              divDisplay21={item.divDisplay21}
              divAlignSelf21={item.divAlignSelf21}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScamTypes;
