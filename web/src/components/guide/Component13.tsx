import { FunctionComponent } from "react";
import Component3 from "./Component3";

export type Component13Type = {
  className?: string;
};

const Component13: FunctionComponent<Component13Type> = ({
  className = "",
}) => {
  return (
    <section
      id="guide-evidence-02"
      className={`self-stretch scroll-mt-28 overflow-hidden flex flex-col items-start py-[3.5rem] px-[5rem] gap-[1.5rem] text-left text-[0.875rem] text-[#65645e] font-['Noto_Sans_Thai'] mq1050:pt-[2.25rem] mq1050:pb-[2.25rem] mq1050:box-border mq750:py-[1.438rem] mq750:px-[2.5rem] mq750:box-border ${className}`}
    >
      <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.375rem] text-[#191919] font-['Noto_Sans_Thai']">
        <div className="h-[3.5rem] w-[3.5rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
          <h3 className="m-0 relative text-[length:inherit] font-extrabold font-[inherit] mq450:text-[1.125rem]">
            02
          </h3>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-[48.938rem] text-[2.125rem] mq1050:min-w-full">
          <b className="self-stretch relative leading-[135%] mq1050:text-[1.688rem] mq1050:leading-[2.313rem] mq450:text-[1.25rem] mq450:leading-[1.75rem]">
            หลักฐานยิ่งครบ ยิ่งเล่าเรื่องได้ชัด
          </b>
          <div className="self-stretch relative text-[1rem] leading-[170%] text-[#65645e]">
            เช็กทีละรายการ เก็บต้นฉบับโดยไม่แก้ไข และสำรองอีกชุดในที่ปลอดภัย
            ไม่ต้องรอครบทุกข้อจึงค่อยแจ้งเหตุ
          </div>
        </div>
      </section>
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.25rem]">
        <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.375rem] text-[#191919] font-['Noto_Sans_Thai']">
          <div className="self-stretch flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[0.875rem] min-w-[29.5rem] mq750:min-w-full">
            <div className="self-stretch overflow-hidden flex items-center gap-[0.875rem] mq750:flex-wrap">
              <div className="h-[3rem] w-[3rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  className="h-[1.375rem] w-[1.375rem] relative"
                  alt=""
                  src="/share/receipt-text.svg"
                />
              </div>
              <b className="flex-1 relative leading-[140%] inline-block min-w-[14.25rem] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                สลิปโอนเงินและรายการธุรกรรม
              </b>
            </div>
            <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#65645e]">
              เก็บสลิปเต็มใบจากแอปธนาคาร ไม่ครอปส่วนสำคัญ และรักษาไฟล์ต้นฉบับ
            </div>
            <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.625rem] text-[0.938rem]">
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[12.938rem]">
                  เห็น QR Code และ Transaction ID ชัดเจน
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[15.938rem]">
                  ชื่อ / เลขบัญชีต้นทาง–ปลายทาง จำนวนเงิน วันและเวลา
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[14.813rem]">
                  เก็บทุกครั้งที่โอน พร้อมรายการเดินบัญชีที่เกี่ยวข้อง
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[0.875rem] min-w-[29.5rem] mq750:min-w-full">
            <div className="self-stretch overflow-hidden flex items-center gap-[0.875rem] mq750:flex-wrap">
              <div className="h-[3rem] w-[3rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  className="h-[1.375rem] w-[1.375rem] relative"
                  alt=""
                  src="/share/messages-square.svg"
                />
              </div>
              <b className="flex-1 relative leading-[140%] inline-block min-w-[8.25rem] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                ประวัติแชตทั้งหมด
              </b>
            </div>
            <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#65645e]">
              อย่าลบแชต และยังไม่บล็อกก่อนเก็บหลักฐานหากปลอดภัย
              หยุดตอบและหยุดโอนเพิ่มทันที
            </div>
            <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.625rem] text-[0.938rem]">
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[16.063rem]">
                  Export Chat หรือแคปหน้าจอต่อเนื่อง ตั้งแต่เริ่มติดต่อ
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[15.125rem]">
                  ให้เห็น User ID ชื่อโปรไฟล์ วันเวลา และข้อความครบ
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[14.063rem]">
                  เก็บรูป เสียง ไฟล์แนบ และหน้าโปรไฟล์ที่เกี่ยวข้อง
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.375rem] text-[#191919] font-['Noto_Sans_Thai']">
          <div className="self-stretch flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[0.875rem] min-w-[29.5rem] mq750:min-w-full">
            <div className="self-stretch overflow-hidden flex items-center gap-[0.875rem] mq750:flex-wrap">
              <div className="h-[3rem] w-[3rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  className="h-[1.375rem] w-[1.375rem] relative"
                  alt=""
                  src="/share/contact-round.svg"
                />
              </div>
              <b className="flex-1 relative leading-[140%] inline-block min-w-[13.25rem] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                ข้อมูลบัญชีและช่องทางติดต่อ
              </b>
            </div>
            <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#65645e]">
              รวบรวมข้อมูลที่ใช้รับเงินหรือติดต่อคุณ
              โดยไม่สรุปว่าเจ้าของบัญชีมีความผิดก่อนสอบสวน
            </div>
            <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.625rem] text-[0.938rem]">
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[13.25rem]">
                  เลขที่บัญชี / ชื่อบัญชีปลายทาง และชื่อธนาคาร
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[13.5rem]">
                  หมายเลขโทรศัพท์ ประวัติการโทร และ User ID
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[17.375rem]">
                  ลิงก์ URL เต็มของเว็บ / โปรไฟล์ / โฆษณา พร้อมภาพหน้าจอ
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[0.875rem] min-w-[29.5rem] mq750:min-w-full">
            <div className="self-stretch overflow-hidden flex items-center gap-[0.875rem] mq750:flex-wrap">
              <div className="h-[3rem] w-[3rem] rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  className="h-[1.375rem] w-[1.375rem] relative"
                  alt=""
                  src="/share/notebook-pen.svg"
                />
              </div>
              <b className="flex-1 relative leading-[140%] inline-block min-w-[15.813rem] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                ลำดับเหตุการณ์และเอกสารของคุณ
              </b>
            </div>
            <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#65645e]">
              สรุปเรื่องให้เจ้าหน้าที่ตามได้ง่าย
              แยกข้อเท็จจริงออกจากข้อสันนิษฐาน
            </div>
            <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.625rem] text-[0.938rem]">
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[16.438rem]">
                  วันเวลาเริ่มติดต่อ วิธีหลอก และยอดเสียหายแต่ละรายการ
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[15.25rem]">
                  Bank Case ID และเลขอ้างอิงการแจ้งความออนไลน์
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex items-start gap-[0.625rem] mq750:flex-wrap">
                <input
                  className="m-0 h-[1.125rem] w-[1.125rem] relative rounded border-[#191919] border-solid border-[1.4px] box-border"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[165%] inline-block min-w-[15.5rem]">
                  บัตรประจำตัว เอกสารต้นฉบับและสำเนาที่จะนำไปสถานี
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Component3
        sectionBackgroundColor="#fff3be"
        prop="เก็บหลักฐาน แต่ความปลอดภัยของคุณต้องมาก่อน"
        bColor="#191919"
        prop1="ไม่ต้องคุยต่อเพื่อหาหลักฐานเพิ่ม หากถูกคุกคามหรือไม่ปลอดภัย ให้หยุดติดต่อและบล็อกได้ การบล็อกไม่ได้ทำให้หลักฐานหายเสมอไป เก็บและสำรองสิ่งที่มีไว้ก่อนเมื่อทำได้ อย่าโพสต์สลิปเต็ม บัตรประชาชน หรือข้อมูลส่วนตัวต่อสาธารณะ ส่งผ่านช่องทางเจ้าหน้าที่ที่ตรวจสอบแล้วเท่านั้น"
        divColor="#191919"
      />
      <div className="self-stretch rounded-xl bg-[#fff] border-[#e3e0d6] border-solid border-[1px] overflow-hidden flex items-center py-[0.875rem] px-[1.187rem] gap-[0.875rem]">
        <img
          className="h-[1.375rem] w-[1.375rem] relative"
          alt=""
          src="/share/folder-open.svg"
        />
        <div className="flex-1 relative leading-[160%]">
          จัดแฟ้มง่าย ๆ: สรุปเหตุการณ์ → สลิปตามเวลา → แชต → ข้อมูลปลายทาง •
          ตั้งชื่อไฟล์ด้วยวันเวลา และเก็บไฟล์ต้นฉบับแยกไว้
        </div>
      </div>
    </section>
  );
};

export default Component13;
