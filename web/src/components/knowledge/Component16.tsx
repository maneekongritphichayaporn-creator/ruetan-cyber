import { FunctionComponent } from "react";

export type Component16Type = {
  className?: string;
};

const Component16: FunctionComponent<Component16Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] box-border gap-[1.75rem] max-w-full text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai'] mq750:py-[2.25rem] mq750:px-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem]">
        <b className="self-stretch relative leading-[165%]">
          เคสเด่นที่อยากให้รู้
        </b>
        <h2 className="m-0 self-stretch relative text-[2.125rem] leading-[135%] font-bold font-[inherit] text-[#191919] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
          เริ่มจากความไว้ใจ จบที่เงินถอนไม่ได้
        </h2>
        <div className="self-stretch relative text-[1rem] leading-[165%]">
          ถอดกลไกหลอกลงทุนจากรายงาน เพื่อเห็นจุดที่ควรหยุดก่อนเสียเงินเพิ่ม
        </div>
      </div>
      <div className="self-stretch rounded-[20px] bg-[#faf8f2] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex items-start [row-gap:20px] max-w-full lg:flex-wrap">
        <section className="self-stretch w-[30rem] bg-[#fff3be] overflow-hidden shrink-0 flex flex-col items-start max-w-full text-left text-[1.438rem] text-[#191919] font-['Noto_Sans_Thai'] lg:flex-1 mq750:min-w-full">
          <img
            className="self-stretch h-[16.5rem] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/knowledge-base/5@2x.png"
          />
          <div className="self-stretch overflow-hidden flex flex-col items-start py-[1.75rem] pl-[1.75rem] pr-[1.25rem] gap-[0.625rem]">
            <img
              className="w-[1.875rem] h-[1.875rem] relative"
              alt=""
              src="/share/shield-alert.svg"
            />
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[140%] font-bold font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.625rem]">
              ถอนเงินได้ครั้งแรก
              <br />
              ไม่ได้แปลว่าลงทุนจริง
            </h2>
            <div className="self-stretch relative text-[0.875rem] leading-[165%]">
              มิจฉาชีพอาจยอมให้ถอนช่วงแรก เพื่อให้คุณเชื่อใจและโอนเงินก้อนต่อไป
            </div>
          </div>
        </section>
        <section className="flex-1 overflow-hidden flex flex-col items-start p-[2rem] box-border gap-[1.125rem] min-w-[32.5rem] text-left text-[0.75rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:pt-[1.313rem] mq750:pb-[1.313rem] mq750:box-border mq750:min-w-full">
          <div className="overflow-hidden flex items-center gap-[0.75rem] mq450:flex-wrap">
            <div className="rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem]">
              <div className="relative leading-[165%] font-semibold">
                บทวิเคราะห์ • กลลวงแบบผสม
              </div>
            </div>
            <div className="relative leading-[165%] text-[#65645e]">
              สรุปจากรายงาน ธปท.
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-[1.875rem] leading-[140%] font-bold font-[inherit] mq1050:text-[1.5rem] mq1050:leading-[2.125rem] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
            จากคนคุย สู่คนชวนลงทุน:
            <br />
            กับดักที่ใช้ความสัมพันธ์นำทาง
          </h1>
          <div className="self-stretch relative text-[1rem] leading-[165%] text-[#65645e]">
            บทสัมภาษณ์ตำรวจไซเบอร์ของ ธปท.
            อธิบายการใช้โปรไฟล์ปลอมสร้างความสัมพันธ์
            ก่อนพาไปลงทุนบนแพลตฟอร์มปลอม และกล่าวถึงการสืบสวนเครือข่ายในไทย
          </div>
          <div className="self-stretch overflow-hidden flex flex-wrap items-start gap-[0.75rem] text-[1.25rem]">
            <div className="flex-1 rounded-xl bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[0.75rem] px-[0.812rem] gap-[0.5rem] min-w-[11.125rem]">
              <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-extrabold font-[inherit] mq450:text-[1rem] mq450:leading-[1.625rem]">
                01
              </h3>
              <div className="self-stretch relative text-[0.813rem] leading-[165%] font-semibold">
                สร้างความสนิท
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[0.75rem] px-[0.812rem] gap-[0.5rem] min-w-[11.125rem]">
              <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-extrabold font-[inherit] mq450:text-[1rem] mq450:leading-[1.625rem]">
                02
              </h3>
              <div className="self-stretch relative text-[0.813rem] leading-[165%] font-semibold">
                ชวนลงทุนปลอม
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[0.75rem] px-[0.812rem] gap-[0.5rem] min-w-[11.125rem]">
              <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[165%] font-extrabold font-[inherit] mq450:text-[1rem] mq450:leading-[1.625rem]">
                03
              </h3>
              <div className="self-stretch relative text-[0.813rem] leading-[165%] font-semibold">
                ถอนแล้วติดเงื่อนไข
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-[#fff3be] overflow-hidden flex items-start p-[1rem] gap-[0.75rem] text-[0.875rem] mq750:flex-wrap">
            <img
              className="h-[1.375rem] w-[1.375rem] relative"
              alt=""
              src="/share/circle-pause.svg"
            />
            <div className="flex-1 relative leading-[165%] font-semibold inline-block min-w-[14.125rem]">
              เมื่อถูกขอให้เติมเงินเพื่อถอน อย่าโอนเพิ่ม
              <br />
              ตรวจผู้ให้บริการและบัญชีปลายทางกับ ก.ล.ต. ก่อน
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex items-center gap-[0.5rem] text-[#65645e]">
            <img
              className="h-[0.938rem] w-[0.938rem] relative"
              alt=""
              src="/share/external-link.svg"
            />
            <a
              className="flex-1 relative leading-[165%] text-[inherit] [text-decoration:none]"
              href="https://www.bot.or.th/th/research-and-publications/articles-and-publications/bot-magazine-issues/Phrasiam-66-3/thoughtleader_cyberpolice.html"
              target="_blank"
            >
              [1] ธปท. • ภารกิจป้องกันและปราบปรามภัยการเงินออนไลน์
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Component16;
