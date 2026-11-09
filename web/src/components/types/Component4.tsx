import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component4Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  prop5?: string;

  /** Style props */
  sectionMinWidth?: CSSProperties["minWidth"];
  h3AlignSelf?: CSSProperties["alignSelf"];
  h3Display?: CSSProperties["display"];
  divDisplay?: CSSProperties["display"];
  divAlignSelf?: CSSProperties["alignSelf"];
  divDisplay1?: CSSProperties["display"];
  divAlignSelf1?: CSSProperties["alignSelf"];
  divDisplay2?: CSSProperties["display"];
  divAlignSelf2?: CSSProperties["alignSelf"];
};

const Component4: FunctionComponent<Component4Type> = ({
  className = "",
  sectionMinWidth,
  prop,
  prop1,
  h3AlignSelf,
  h3Display,
  prop2,
  divDisplay,
  divAlignSelf,
  prop3,
  divDisplay1,
  divAlignSelf1,
  prop4,
  divDisplay2,
  divAlignSelf2,
  prop5,
}) => {
  const sectionStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: sectionMinWidth,
    };
  }, [sectionMinWidth]);

  const h3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: h3AlignSelf,
      display: h3Display,
    };
  }, [h3AlignSelf, h3Display]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: divDisplay,
      alignSelf: divAlignSelf,
    };
  }, [divDisplay, divAlignSelf]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      display: divDisplay1,
      alignSelf: divAlignSelf1,
    };
  }, [divDisplay1, divAlignSelf1]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      display: divDisplay2,
      alignSelf: divAlignSelf2,
    };
  }, [divDisplay2, divAlignSelf2]);

  return (
    <section
      className={`flex-1 rounded-[20px] bg-white border-[#e3e0d6] border-solid border box-border overflow-hidden flex flex-col items-start min-w-118 max-w-full text-left text-[0.813rem] text-[#000] font-['Noto_Sans_Thai'] mq750:min-w-full ${className}`}
      style={sectionStyle}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem]">
        <div className="self-stretch overflow-hidden flex items-center justify-between gap-[0rem] [row-gap:20px] text-[#191919] mq450:flex-wrap mq450:gap-[0rem]">
          <div className="w-fit min-h-[1.875rem] h-auto max-w-full rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border">
            <div className="relative font-semibold">{prop}</div>
          </div>
          <div className="relative text-[#65645e]">ตัวอย่างบทเรียน</div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem] text-[1.375rem]">
          <h3
            className="m-0 self-stretch relative text-[length:inherit] leading-[140%] font-bold font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.563rem]"
            style={h3Style}
          >
            {prop1}
          </h3>
          <div
            className="w-full relative text-[0.875rem] leading-[170%] text-[#65645e] inline-block max-w-[36.25rem] mq750:max-w-full"
            style={divStyle}
          >
            {prop2}
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.75rem]">
          <div className="self-stretch rounded-xl bg-[#faf8f2] overflow-hidden flex flex-col items-start py-[1rem] pl-[1rem] pr-[0.937rem] gap-[0.5rem]">
            <b className="relative">{`ตัวอย่างบทสนทนา (Script & Modus Operandi)`}</b>
            <div
              className="w-full relative text-[0.875rem] leading-[170%] inline-block max-w-[34.25rem] mq750:max-w-full"
              style={div1Style}
            >
              {prop3}
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-[#fff3be] overflow-hidden flex flex-col items-start p-[1rem] gap-[0.5rem]">
            <b className="relative">จุดสังเกตผิดปกติ (Red Flags)</b>
            <div
              className="w-full relative text-[0.875rem] leading-[170%] inline-block max-w-[34.25rem] mq750:max-w-full"
              style={div2Style}
            >
              {prop4}
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-[#fff] border-[#e3e0d6] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1rem] gap-[0.5rem]">
            <b className="relative">วิธีป้องกันเชิงเทคนิค</b>
            <div className="w-full relative text-[0.875rem] leading-[170%] inline-block max-w-[34.125rem] mq750:max-w-full">
              {prop5}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component4;
