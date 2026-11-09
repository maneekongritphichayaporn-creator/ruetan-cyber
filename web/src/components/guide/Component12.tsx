import { FunctionComponent, useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

export type Component12Type = {
  className?: string;
};

const Component12: FunctionComponent<Component12Type> = ({
  className = "",
}) => {
  const [component2Items] = useState([
    {
      prop: "01",
      phoneCall: "/share/phone-svgrepo-com.svg",
      prop1: "ทำทันที • อย่ารอให้หลักฐานครบ",
      prop2: "ติดต่อธนาคาร / AOC 1441",
      prop3:
        "โทรธนาคารที่คุณใช้โอนเงินทันที แจ้งเหตุถูกหลอกและขอระงับธุรกรรมที่เกี่ยวข้อง โทร AOC 1441 เพื่อขอความช่วยเหลือและประสานงาน พร้อมขอเลข Bank Case ID จากธนาคาร",
      prop4:
        "เตรียมชื่อผู้โอน บัญชีต้นทาง–ปลายทาง จำนวนเงิน วันเวลา และสลิป บันทึกเวลาที่แจ้งเหตุและยืนยันกำหนดเวลาที่ต้องแจ้งความกับธนาคาร / AOC",
      prop5: "Bank Case ID คืออะไร?",
      prop6:
        "เลขอ้างอิงการรับแจ้งเหตุของธนาคาร ไม่ใช่เลขคดีของตำรวจ\n\nเก็บเลขนี้ไว้ และใช้ประกอบการแจ้งความออนไลน์",
    },
    {
      prop: "02",
      phoneCall: "/share/laptop.svg",
      prop1: "แจ้งโดยเร็ว • ภายในเวลาที่ธนาคาร / AOC ยืนยัน",
      prop2: "แจ้งความออนไลน์ที่เว็บไซต์ทางการ",
      prop3:
        "พิมพ์ thaipoliceonline.go.th ด้วยตนเอง ตรวจสอบโดเมนก่อนกรอกข้อมูล เล่าเหตุการณ์ตามลำดับ แนบหลักฐาน และระบุ Bank Case ID หากได้รับแล้ว",
      prop4:
        "บันทึกเลขอ้างอิงการแจ้งความและข้อความยืนยัน ติดตามการติดต่อจากเจ้าหน้าที่ผ่านช่องทางที่ตรวจสอบได้ หากใช้งานระบบไม่ได้ ให้ติดต่อสถานีตำรวจ / AOC เพื่อดำเนินการต่อทันที",
      prop5: "ตรวจโดเมนก่อนทุกครั้ง",
      prop6:
        "thaipoliceonline.go.th\n\nอย่าเข้าจากลิงก์ที่คนแปลกหน้าส่งมา อย่าให้ OTP หรือโอนเงินให้ผู้ที่อ้างว่าช่วยรับแจ้งความหรือกู้เงินคืน",
    },
    {
      prop: "03",
      phoneCall: "/share/landmark.svg",
      prop1: "ไปตามนัด • เตรียมข้อมูลให้พร้อม",
      prop2: "เข้าพบพนักงานสอบสวนที่สถานีตำรวจ",
      prop3:
        "ไปยังสถานีที่เจ้าหน้าที่ประสานหรือนัดหมาย นำบัตรประจำตัว หลักฐานต้นฉบับและสำเนา ลำดับเหตุการณ์ Bank Case ID และเลขอ้างอิงการแจ้งความไปด้วย",
      prop4:
        "ให้ข้อเท็จจริงตามที่เกิดขึ้น ตรวจอ่านบันทึกก่อนลงชื่อ หากข้อมูลไม่ตรงให้ขอแก้ไข ขอสำเนาเอกสารที่เกี่ยวข้อง ชื่อและช่องทางติดต่อพนักงานสอบสวน พร้อมสอบถามขั้นตอนติดตามเรื่อง",
      prop5: "บอกเจตนาให้ชัดเจน",
      prop6:
        "“ขอร้องทุกข์ให้ดำเนินคดีกับผู้กระทำความผิด”\n\nสอบถามว่ารับเป็นคำร้องทุกข์เพื่อดำเนินคดีแล้วหรือไม่ และใช้เลขใดในการติดตามเรื่อง",
    },
  ]);
  return (
    <main
      id="guide-step-01"
      className={`self-stretch scroll-mt-28 bg-[#fff] overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] box-border gap-[1.5rem] max-w-full lg:pt-[2.25rem] lg:pb-[2.25rem] lg:box-border mq750:py-[1.438rem] mq750:px-[2.5rem] mq750:box-border ${className}`}
    >
      <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.375rem] text-[#191919] font-['Noto_Sans_Thai']">
        <div className="h-[3.5rem] w-[3.5rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
          <h3 className="m-0 relative text-[length:inherit] font-extrabold font-[inherit] mq450:text-[1.125rem]">
            01
          </h3>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-[48.938rem] text-[2.125rem] mq1050:min-w-full">
          <b className="self-stretch relative leading-[135%] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
            แจ้งความให้ถูกต้อง เริ่มจาก 3 ขั้นตอน
          </b>
          <div className="self-stretch relative text-[1rem] leading-[170%] text-[#65645e]">
            ติดต่อธนาคารทันที แล้วดำเนินการแจ้งความและเข้าพบพนักงานสอบสวน
            อย่ารอจนเสียโอกาสระงับธุรกรรม
          </div>
        </div>
      </section>
      {component2Items.map((item, index) => (
        <Component2
          key={index}
          prop={item.prop}
          phoneCall={item.phoneCall}
          prop1={item.prop1}
          prop2={item.prop2}
          prop3={item.prop3}
          prop4={item.prop4}
          prop5={item.prop5}
          prop6={item.prop6}
        />
      ))}
      <Component3
        prop="เรื่องเวลา: รีบแจ้ง และยืนยันกำหนดของกรณีคุณ"
        prop1="แนวทาง ธปท. ปี 2566 อธิบายการระงับธุรกรรมชั่วคราวได้ถึง 72 ชั่วโมง ควรแจ้งความโดยเร็วในช่วงนั้น และยืนยันเวลาที่แน่นอนกับธนาคาร / AOC นี่ไม่ใช่อายุความร้องทุกข์ทั่วไป หากพ้นช่วงระงับชั่วคราว ไม่ได้แปลว่าสิทธิแจ้งความทั้งหมดสิ้นสุดลง"
      />
      <section className="self-stretch rounded-[20px] bg-[#191919] overflow-hidden flex items-start flex-wrap content-start p-[1.5rem] box-border gap-[1.5rem] max-w-full text-left text-[1.375rem] text-[#ffd43b] font-['Noto_Sans_Thai']">
        <div className="w-[21rem] overflow-hidden shrink-0 flex flex-col items-start max-w-full">
          <b className="self-stretch relative leading-[145%] mq450:text-[1.125rem] mq450:leading-[1.625rem]">
            ร้องทุกข์เพื่อดำเนินคดี
            <br />≠ ลงบันทึกไว้เป็นหลักฐาน
          </b>
        </div>
        <div className="h-[5.625rem] w-[0.063rem] relative bg-[#45453f] mq1050:w-full mq1050:h-[0.063rem]" />
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-[34.438rem] text-[1rem] text-[#fff] mq1050:min-w-full">
          <div className="self-stretch relative leading-[170%]">
            การร้องทุกข์ต้องสื่อว่าต้องการให้ดำเนินคดีกับผู้กระทำความผิด
            ไม่ใช่เพียงบันทึกเหตุการณ์ไว้
            การลงบันทึกประจำวันไว้เป็นหลักฐานอย่างเดียวอาจไม่ใช่การร้องทุกข์เพื่อดำเนินคดี
          </div>
          <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#c7c7be]">
            อย่าดูแค่ชื่อเอกสาร
            ให้ตรวจเนื้อหาและถามพนักงานสอบสวนว่าบันทึกเจตนาร้องทุกข์ไว้แล้วหรือยัง
          </div>
        </div>
      </section>
    </main>
  );
};

export default Component12;
