import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component4Type = {
  className?: string;
  prop?: string;
  phoneCall?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;

  /** Style props */
  divWidth?: CSSProperties["width"];
};

const Component4: FunctionComponent<Component4Type> = ({
  className = "",
  prop,
  phoneCall,
  prop1,
  prop2,
  divWidth,
  prop3,
}) => {
  const div3Style: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start gap-[1rem] min-w-[19.125rem] max-w-full text-left text-[2.75rem] text-[#ffd43b] font-['Noto_Sans_Thai'] ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-center justify-between gap-[0rem] [row-gap:20px]">
        <h2 className="m-0 relative text-[length:inherit] leading-[120%] font-extrabold font-[inherit] mq450:text-[1.625rem] mq450:leading-[2rem] mq1050:text-[2.188rem] mq1050:leading-[2.625rem]">
          {prop}
        </h2>
        <img
          className="h-[1.75rem] w-[1.75rem] relative"
          alt=""
          src={phoneCall}
        />
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-[#45453f]" />
      <h3 className="m-0 relative text-[1.375rem] font-bold font-[inherit] text-[#fff] mq450:text-[1.125rem]">
        {prop1}
      </h3>
      <div className="w-full relative text-[0.875rem] leading-[175%] text-[#b9b9b0] inline-block max-w-[25.5rem] mq450:max-w-full">
        {prop2}
      </div>
      <a
        href={prop3 === "ดูรายการหลักฐานที่ต้องใช้" ? "/reporting-guide#guide-evidence-02" : prop3 === "ไปแจ้งความออนไลน์" ? "https://thaipoliceonline.go.th/" : "tel:1441"}
        target={prop3 === "ไปแจ้งความออนไลน์" ? "_blank" : undefined}
        rel={prop3 === "ไปแจ้งความออนไลน์" ? "noreferrer" : undefined}
        className="w-[6.688rem] h-[1.25rem] overflow-hidden shrink-0 flex items-center gap-[0.5rem] text-[0.813rem] text-[inherit] [text-decoration:none] hover:text-[#ffd43b] hover:underline"
        style={div3Style}
      >
        <div className="relative font-semibold">{prop3}</div>
        <img
          className="h-[1rem] w-[1rem] relative"
          alt=""
          src="/share/arrow-up-right.svg"
        />
      </a>
    </div>
  );
};

export default Component4;
