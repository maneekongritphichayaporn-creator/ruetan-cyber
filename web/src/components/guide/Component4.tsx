import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component4Type = {
  className?: string;
  prop?: string;
  scale?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;

  /** Style props */
  bMargin?: CSSProperties["margin"];
};

const Component4: FunctionComponent<Component4Type> = ({
  className = "",
  prop,
  scale,
  prop1,
  bMargin,
  prop2,
  prop3,
  prop4,
}) => {
  const b1Style: CSSProperties = useMemo(() => {
    return {
      margin: bMargin,
    };
  }, [bMargin]);

  return (
    <section
      className={`self-stretch flex-1 rounded-[20px] bg-[#2a2a25] overflow-hidden flex flex-col items-start p-6 box-border gap-4 min-w-[19.375rem] text-left text-[0.813rem] text-[#ffd43b] font-['Noto_Sans_Thai'] mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-center justify-between gap-5">
        <div className="relative font-semibold">{prop}</div>
        <img className="h-[1.5rem] w-[1.5rem] relative" alt="" src={scale} />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-2 min-h-[8.125rem] text-[1.375rem] text-[#fff]">
        <b
          className="self-stretch relative leading-[145%] mq450:text-[1.125rem] mq450:leading-[1.625rem]"
          style={b1Style}
        >
          {prop1}
        </b>
        <div className="self-stretch relative text-[0.875rem] leading-[160%] font-semibold text-[#ffd43b]">
          {prop2}
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-[#45453f]" />
      <div className="self-stretch relative text-[0.938rem] leading-[170%] text-[#fff]">
        {prop3}
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-1.5">
        <b className="relative">ข้อควรรู้</b>
        <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#c7c7be]">
          {prop4}
        </div>
      </div>
    </section>
  );
};

export default Component4;
