import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";

export type Component3Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;

  /** Style props */
  divDisplay?: CSSProperties["display"];
};

const Component3: FunctionComponent<Component3Type> = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  divDisplay,
}) => {
  const div2Style: CSSProperties = useMemo(() => {
    return {
      display: divDisplay,
    };
  }, [divDisplay]);

  return (
    <Link
      to={`/scam-types#${prop2 === "แก๊งคอลเซ็นเตอร์" ? "scam-category-1" : prop2 === "SMS ปลอม" || prop2 === "แอปดูดเงิน" ? "scam-category-2" : "scam-category-3"}`}
      className={`flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem] min-w-[14.313rem] max-w-[19.063rem] text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai'] [text-decoration:none] hover:border-[#ffd43b] hover:shadow-md transition-shadow ${className}`}
    >
      <img
        className="self-stretch h-[4rem] w-full relative shrink-0 object-contain object-left"
        loading="lazy"
        alt=""
        src={prop}
      />
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem]">
        <div className="relative">{prop1}</div>
        <h3 className="m-0 relative text-[1.375rem] font-bold font-[inherit] text-[#191919] mq450:text-[1.125rem]">
          {prop2}
        </h3>
        <div className="w-full relative text-[0.938rem] leading-[165%] inline-block max-w-[15.938rem]">
          {prop3}
        </div>
      </div>
        <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
      <div className="self-stretch overflow-hidden flex items-start gap-[0.5rem] text-[#000]">
        <img
          className="h-[1rem] w-[1rem] relative"
          alt=""
          src="/share/shield-check.svg"
        />
        <div
          className="flex-1 relative leading-[155%] font-semibold"
          style={div2Style}
        >
          {prop4}
        </div>
      </div>
    </Link>
  );
};

export default Component3;
