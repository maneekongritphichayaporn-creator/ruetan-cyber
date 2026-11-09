import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Component4 from "./Component4";

export type Component5Type = {
  className?: string;
  id?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop11?: string;
  prop12?: string;
  prop21?: string;
  prop22?: string;
  prop31?: string;
  prop32?: string;
  prop4?: string;
  prop41?: string;
  prop5?: string;
  prop51?: string;
  sectionMinWidth?: CSSProperties["minWidth"];
  sectionMinWidth1?: CSSProperties["minWidth"];
  h3AlignSelf?: CSSProperties["alignSelf"];
  h3AlignSelf1?: CSSProperties["alignSelf"];
  h3Display?: CSSProperties["display"];
  h3Display1?: CSSProperties["display"];
  divDisplay1?: CSSProperties["display"];
  divDisplay2?: CSSProperties["display"];
  divAlignSelf1?: CSSProperties["alignSelf"];
  divAlignSelf2?: CSSProperties["alignSelf"];
  divDisplay12?: CSSProperties["display"];
  divAlignSelf12?: CSSProperties["alignSelf"];
  divDisplay21?: CSSProperties["display"];
  divAlignSelf21?: CSSProperties["alignSelf"];

  /** Style props */
  bMargin?: CSSProperties["margin"];
  bDisplay?: CSSProperties["display"];
  divAlignSelf?: CSSProperties["alignSelf"];
  divDisplay?: CSSProperties["display"];
};

const Component5: FunctionComponent<Component5Type> = ({
  className = "",
  id,
  prop,
  bMargin,
  bDisplay,
  prop1,
  divAlignSelf,
  divDisplay,
  prop2,
  prop3,
  prop11,
  prop12,
  prop21,
  prop22,
  prop31,
  prop32,
  prop4,
  prop41,
  prop5,
  prop51,
  sectionMinWidth,
  sectionMinWidth1,
  h3AlignSelf,
  h3AlignSelf1,
  h3Display,
  h3Display1,
  divDisplay1,
  divDisplay2,
  divAlignSelf1,
  divAlignSelf2,
  divDisplay12,
  divAlignSelf12,
  divDisplay21,
  divAlignSelf21,
}) => {
  const bStyle: CSSProperties = useMemo(() => {
    return {
      margin: bMargin,
      display: bDisplay,
    };
  }, [bMargin, bDisplay]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: divAlignSelf,
      display: divDisplay,
    };
  }, [divAlignSelf, divDisplay]);

  return (
    <div
      id={id}
      className={`self-stretch scroll-mt-28 overflow-hidden flex flex-col items-start gap-[1rem] max-w-full shrink-0 text-left text-[1.75rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-center justify-between flex-wrap content-center gap-[0rem] max-w-full [row-gap:20px]">
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.375rem] min-w-[48.75rem] max-w-full mq1050:min-w-full">
          <b className="relative mq450:text-[1.375rem]" style={bStyle}>
            {prop}
          </b>
          <div
            className="self-stretch relative text-[0.938rem] leading-[160%] text-[#65645e]"
            style={div3Style}
          >
            {prop1}
          </div>
        </div>
        <div className="h-[1.875rem] rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border text-[0.813rem] text-[#000]">
          <div className="relative font-semibold">2 บทความ</div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-x-[1.25rem] gap-y-[0.625rem] max-w-full">
        <Component4
          sectionMinWidth={sectionMinWidth}
          prop={prop2}
          prop1={prop11}
          h3AlignSelf={h3AlignSelf}
          h3Display={h3Display}
          prop2={prop21}
          divDisplay={divDisplay1}
          divAlignSelf={divAlignSelf1}
          prop3={prop31}
          prop4={prop4}
          divDisplay2={divDisplay21}
          divAlignSelf2={divAlignSelf21}
          prop5={prop5}
        />
        <Component4
          sectionMinWidth={sectionMinWidth1}
          prop={prop3}
          prop1={prop12}
          h3AlignSelf={h3AlignSelf1}
          h3Display={h3Display1}
          prop2={prop22}
          divDisplay={divDisplay2}
          divAlignSelf={divAlignSelf2}
          prop3={prop32}
          divDisplay1={divDisplay12}
          divAlignSelf1={divAlignSelf12}
          prop4={prop41}
          divDisplay2="inline-block"
          divAlignSelf2="unset"
          prop5={prop51}
        />
      </div>
    </div>
  );
};

export default Component5;
