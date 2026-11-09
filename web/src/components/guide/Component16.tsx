import { FunctionComponent } from "react";

export type Component16Type = {
  className?: string;
};

const Component16: FunctionComponent<Component16Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start pt-[0rem] px-[5rem] pb-[3.5rem] box-border gap-[1.5rem] max-w-full mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border mq450:pb-[2.25rem] mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
      <section className="self-stretch overflow-hidden flex items-start gap-[2rem] max-w-full text-left text-[0.875rem] text-[#191919] font-['Noto_Sans_Thai'] lg:flex-wrap mq750:gap-[1rem]">
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[1rem] min-w-[34.438rem] mq750:min-w-full">
          <b className="relative text-[1.375rem] mq450:text-[1.125rem]">
            แหล่งข้อมูลสำหรับอ่านต่อ
          </b>
          <div className="self-stretch relative leading-[170%] text-[#65645e]">
            เรื่องช่วงเวลาระงับธุรกรรมอ้างอิงแนวทางธนาคารแห่งประเทศไทย ปี 2566
            ไม่ใช่การยืนยันกฎหมายหรือขั้นตอนล่าสุด
            โปรดยืนยันรายละเอียดของคุณกับธนาคาร / AOC และพนักงานสอบสวน
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.875rem]">
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.25rem]">
              <div className="self-stretch relative font-semibold">
                ธปท. • คู่มือรับมือภัยทุจริตทางการเงิน — พระสยาม ฉบับ 3/2566
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[170%] text-[#65645e]">
                https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/Phrasiam-66-3/theknowledge_manualforfinancialfraud.html
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.25rem]">
              <div className="self-stretch relative font-semibold">
                ธปท. • ข่าววันที่ 13 กรกฎาคม 2566 —
                มาตรการรับมือภัยทุจริตทางการเงิน
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[170%] text-[#65645e]">
                https://www.bot.or.th/th/news-and-media/news/news-20230713.html
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.25rem]">
              <div className="relative font-semibold">
                ช่องทางแจ้งความออนไลน์ของตำรวจ
              </div>
              <div className="relative text-[#65645e]">
                thaipoliceonline.go.th
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25rem] rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start py-[1.375rem] pl-[1.5rem] pr-[1.25rem] gap-[0.875rem] max-w-full text-[#65645e] mq750:min-w-full">
          <img
            className="w-[1.625rem] h-[1.625rem] relative"
            alt=""
            src="/share/book-open.svg"
          />
          <b className="self-stretch relative text-[1.25rem] text-[#191919] mq450:text-[1rem]">
            ข้อมูลทั่วไป ไม่ใช่คำปรึกษาเฉพาะคดี
          </b>
          <div className="self-stretch relative leading-[170%]">
            คู่มือนี้ใช้เพื่อการเรียนรู้ ไม่แทนคำแนะนำจากทนายความหรือเจ้าหน้าที่
            ควรตรวจสอบกฎหมายและขั้นตอนที่ใช้ในวันดำเนินการจริง
            โดยเฉพาะกำหนดเวลาของคดีคุณ
          </div>
          <div className="self-stretch relative leading-[170%]">
            รู้ทันไม่ใช่หน่วยงานรัฐ ไม่รับแจ้งความ ไม่ระงับธุรกรรม
            และไม่มีความเกี่ยวข้องอย่างเป็นทางการกับหน่วยงานที่อ้างถึง
          </div>
        </div>
      </section>
    </section>
  );
};

export default Component16;
