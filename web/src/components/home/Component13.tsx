import { FunctionComponent, useEffect, useState } from "react";
import Component2 from "./Component2";
import Component5 from "./Component5";
import Component6 from "./Component6";

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzGD2oh_lLt3HntLZz_4j_2n2eGR9m4_-JkhUtjacp64nPqXwtCQs0ILr873Dg4JHII/exec";

type ReportStats = {
  totalReports: number;
  smsScamReports: number;
  error?: string;
};

type StatsState = {
  totalReports: number | null;
  smsScamReports: number | null;
  error: string;
};

export type Component13Type = {
  className?: string;
};

const Component13: FunctionComponent<Component13Type> = ({
  className = "",
}) => {
  const [stats, setStats] = useState<StatsState>({
    totalReports: null,
    smsScamReports: null,
    error: "",
  });

  useEffect(() => {
    const callbackName = `receiveReportStats_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2)}`;
    const script = document.createElement("script");
    let isComplete = false;
    const timeoutId = window.setTimeout(() => {
      finishWithError("หมดเวลารอข้อมูลสถิติจาก Google Sheets");
    }, 15000);

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      Reflect.deleteProperty(window, callbackName);
      script.onerror = null;
      script.remove();
    };

    const finishWithError = (message: string) => {
      if (isComplete) return;
      isComplete = true;
      cleanup();
      setStats({ totalReports: null, smsScamReports: null, error: message });
    };

    Reflect.set(window, callbackName, (response: ReportStats) => {
      if (response?.error) {
        finishWithError(response.error);
        return;
      }
      if (
        !response ||
        !Number.isFinite(response.totalReports) ||
        !Number.isFinite(response.smsScamReports)
      ) {
        finishWithError("ได้รับข้อมูลสถิติไม่ถูกต้อง");
        return;
      }
      if (isComplete) return;
      isComplete = true;
      cleanup();
      setStats({
        totalReports: response.totalReports,
        smsScamReports: response.smsScamReports,
        error: "",
      });
    });

    script.onerror = () => {
      finishWithError("โหลดสถิติไม่สำเร็จ กรุณาตรวจสอบการตั้งค่า Apps Script");
    };
    script.src = `${GOOGLE_APPS_SCRIPT_URL}?action=stats&callback=${callbackName}`;
    document.body.appendChild(script);

    return () => {
      isComplete = true;
      cleanup();
    };
  }, []);

  const component6Items = [
    {
      divWidth: "6.063rem" as const,
      prop: stats.totalReports?.toLocaleString("th-TH") ?? "—",
      h2Display: "unset" as const,
      h2MinWidth: "unset" as const,
      prop1: "เรื่อง",
      prop2: "เรื่องที่ส่งเข้ามา",
    },
    {
      divWidth: "4.75rem" as const,
      prop: stats.smsScamReports?.toLocaleString("th-TH") ?? "—",
      h2Display: "unset" as const,
      h2MinWidth: "unset" as const,
      prop1: "เรื่อง",
      prop2: "เรื่องเกี่ยวกับ SMS ปลอม",
    },
    {
      divWidth: "5.563rem" as const,
      prop: "8",
      h2Display: "unset" as const,
      h2MinWidth: "unset" as const,
      prop1: "รูปแบบ",
      prop2: "รูปแบบกลโกงที่พบ",
    },
  ];
  return (
    <main
      className={`self-stretch overflow-hidden flex flex-col items-start py-[4rem] px-[5rem] box-border gap-[1.75rem] max-w-full mq450:pt-[1.688rem] mq450:pb-[1.688rem] mq450:box-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border mq1050:pt-[2.625rem] mq1050:pb-[2.625rem] mq1050:box-border ${className}`}
    >
      <Component2
        divMinWidth="46rem"
        prop="อัปเดตไว้ ไม่พลาดกลโกง"
        prop1="จับตาภัยไซเบอร์"
        h2Display="unset"
        h2AlignSelf="stretch"
        prop2="ตัวอย่างเคสเตือนภัย พร้อมสถิติจากเรื่องที่ส่งเข้ามา"
        divGap="0.5rem"
        prop3="ดูข่าวเตือนภัยทั้งหมด"
      />
      <div className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-[1.5rem] max-w-full">
        <Component5
          prop="/home/13@2x.png"
          prop1="SMS ปลอม"
          prop2="พัสดุตกค้าง? อย่ารีบกดลิงก์ใน SMS"
          prop3="ข้อความเร่งให้จ่ายค่าจัดส่งเล็กน้อย อาจเป็นกับดักขโมยข้อมูลบัตรและรหัส OTP"
          prop4={`ติดต่อบริษัทขนส่งผ่านช่องทางทางการ
ไม่กรอกข้อมูลบัตรหรือรหัส OTP ในลิงก์`}
          linkTo="/scam-types#scam-category-1"
        />
        <Component5
          prop="/home/14@2x.png"
          prop1="หลอกลงทุน"
          prop2="กำไรแน่นอน ถอนง่าย…จริงหรือ?"
          prop3="ชวนเข้ากลุ่มลงทุนแล้วให้เติมเงินเพิ่มก่อนถอน เป็นสัญญาณที่ควรหยุดและตรวจสอบ"
          prop4={`ตรวจสอบผู้ให้บริการผ่านช่องทางของ ก.ล.ต.
อย่าโอนเพิ่มเพียงเพราะมีคนรับรองในกลุ่ม`}
          linkTo="/scam-types#scam-category-2"
        />
        <section className="flex-1 rounded-[20px] bg-[#fff3be] overflow-hidden flex flex-col items-start p-[1.75rem] box-border gap-[1.25rem] min-w-[8.188rem] max-w-[20.5rem] text-left text-[0.75rem] text-[#000] font-['Noto_Sans_Thai'] mq450:flex-1 mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border">
          <div className="w-[3.6rem] h-[1.75rem] rounded-[100px] bg-[#191919] overflow-hidden shrink-0 flex items-start py-[0.312rem] px-[0.75rem] box-border text-[#ffd43b]">
            <div className="relative font-semibold">ข้อมูล</div>
          </div>
          <h3 className="m-0 self-stretch relative text-[1.375rem] font-bold font-[inherit] mq450:text-[1.125rem]">
            ภาพรวมการแจ้งเรื่อง
          </h3>
          <div className="relative text-[0.813rem] text-[#65645e]">
            สรุปเรื่องที่ส่งเข้ามาและรูปแบบกลโกงที่พบ
          </div>
          {stats.error && (
            <div
              className="text-[0.75rem] text-red-700"
              role="alert"
              aria-live="polite"
            >
              {stats.error}
            </div>
          )}
          {component6Items.map((item, index) => (
            <Component6
              key={index}
              divWidth={item.divWidth}
              prop={item.prop}
              h2Display={item.h2Display}
              h2MinWidth={item.h2MinWidth}
              prop1={item.prop1}
              prop2={item.prop2}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Component13;
