import { FunctionComponent } from "react";
import Navbar from "../components/common/Navbar";
import BannerAOC from "../components/common/BannerAOC";
import Component12 from "../components/knowledge/Component12";
import Component15 from "../components/knowledge/Component15";
import Component16 from "../components/knowledge/Component16";
import Component17 from "../components/knowledge/Component17";
import Component18 from "../components/knowledge/Component18";
import Component19 from "../components/knowledge/Component19";
import Component7 from "../components/knowledge/Component7";
import Component9 from "../components/knowledge/Component9";
import Component8 from "../components/knowledge/Component8";
import Footer from "../components/common/Footer";

const KnowledgeBase: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-[#faf8f2] flex flex-col items-start leading-[normal] tracking-[normal]">
      <Navbar />
      <section className="self-stretch flex flex-col items-start">
        <BannerAOC />
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-start pt-7 px-20 pb-10 box-border gap-7 max-w-full text-left text-[0.813rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:pt-[1.25rem] mq750:px-[2.5rem] mq750:pb-[1.625rem] mq750:box-border">
        <Component12 />
        <Component15 />
      </section>
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
      <main className="self-stretch overflow-hidden flex flex-col items-start py-14 px-20 box-border gap-12 max-w-full lg:pt-9 lg:pb-9 lg:box-border mq750:gap-[1.5rem] mq750:py-[1.438rem] mq750:px-[2.5rem] mq750:box-border">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-6 text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai']">
          <div className="self-stretch overflow-hidden flex flex-col items-start gap-2">
            <b className="self-stretch relative leading-[165%]">
              หยุดนิดเดียว ปลอดภัยขึ้นอีกนิด
            </b>
            <h2 className="m-0 self-stretch relative text-[2.125rem] leading-[135%] font-bold font-[inherit] text-[#191919] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
              ก่อนเชื่อ ก่อนโอน ก่อนแชร์ — เช็ก 4 ข้อนี้
            </h2>
            <div className="self-stretch relative text-[1rem] leading-[165%]">
              ใช้ได้กับทั้งข่าวเตือนภัย คลิปคนดัง และข้อความที่คนรู้จักส่งมา
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex items-start justify-center flex-wrap content-start gap-5 text-[2rem] text-[#191919]">
            <div className="self-stretch flex-1 rounded-[20px] bg-[#fff3be] overflow-hidden flex flex-col items-start py-6 pl-6 pr-5 box-border gap-3 min-w-[14.313rem] max-w-[19.063rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-extrabold font-[inherit] mq1050:text-[1.625rem] mq1050:leading-[2.625rem] mq450:text-[1.188rem] mq450:leading-[2rem]">
                01
              </h2>
              <h3 className="m-0 self-stretch relative text-[1.313rem] leading-[165%] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.75rem]">
                เช็กต้นทาง
              </h3>
              <div className="self-stretch relative text-[0.875rem] leading-[165%]">
                เปิดเว็บหน่วยงานเอง ดูโดเมน และหาเอกสารต้นฉบับ
                ไม่เชื่อแค่ภาพแคปหน้าจอ
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-[20px] bg-[#fff3be] overflow-hidden flex flex-col items-start py-6 pl-6 pr-5 box-border gap-3 min-w-[14.313rem] max-w-[19.063rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-extrabold font-[inherit] mq1050:text-[1.625rem] mq1050:leading-[2.625rem] mq450:text-[1.188rem] mq450:leading-[2rem]">
                02
              </h2>
              <h3 className="m-0 self-stretch relative text-[1.313rem] leading-[165%] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.75rem]">
                เช็กบริบท
              </h3>
              <div className="self-stretch relative text-[0.875rem] leading-[165%]">
                อ่านวันที่และเนื้อหาให้ครบ ข่าวเก่าไม่ใช่ข่าวใหม่
                แยกข้อเท็จจริงออกจากคำชวนเชื่อ
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-[20px] bg-[#fff3be] overflow-hidden flex flex-col items-start py-6 pl-6 pr-5 box-border gap-3 min-w-[14.313rem] max-w-[19.063rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-extrabold font-[inherit] mq1050:text-[1.625rem] mq1050:leading-[2.625rem] mq450:text-[1.188rem] mq450:leading-[2rem]">
                03
              </h2>
              <h3 className="m-0 self-stretch relative text-[1.313rem] leading-[165%] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.75rem]">
                เช็กคนและเงิน
              </h3>
              <div className="self-stretch relative text-[0.875rem] leading-[165%]">
                ยืนยันตัวตนผ่านอีกช่องทาง ตรวจชื่อบริษัท ผู้ให้บริการ
                และบัญชีปลายทาง
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-[20px] bg-[#fff3be] overflow-hidden flex flex-col items-start py-6 pl-6 pr-5 box-border gap-3 min-w-[14.313rem] max-w-[19.063rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-extrabold font-[inherit] mq1050:text-[1.625rem] mq1050:leading-[2.625rem] mq450:text-[1.188rem] mq450:leading-[2rem]">
                04
              </h2>
              <h3 className="m-0 self-stretch relative text-[1.313rem] leading-[165%] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.75rem]">
                แชร์อย่างปลอดภัย
              </h3>
              <div className="self-stretch relative text-[0.875rem] leading-[165%]">
                แนบแหล่งที่มา ปิดข้อมูลส่วนตัว
                ไม่ส่งต่อลิงก์หลอกหรือข้อมูลผู้เสียหาย
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
        <div className="self-stretch overflow-hidden flex items-start gap-8 max-w-full lg:flex-wrap mq750:gap-[1rem]">
          <Component7 />
          <Component9 />
        </div>
      </main>
      <section className="self-stretch overflow-hidden flex flex-col items-start max-w-full">
        <Component8 />
        <Footer />
      </section>
    </div>
  );
};

export default KnowledgeBase;
