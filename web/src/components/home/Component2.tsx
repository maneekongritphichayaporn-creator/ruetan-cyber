import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";

export type Component2Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;

  /** Style props */
  divMinWidth?: CSSProperties["minWidth"];
  h2Display?: CSSProperties["display"];
  h2AlignSelf?: CSSProperties["alignSelf"];
  divGap?: CSSProperties["gap"];
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
  divMinWidth,
  prop,
  prop1,
  h2Display,
  h2AlignSelf,
  prop2,
  divGap,
  prop3,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: divMinWidth,
    };
  }, [divMinWidth]);

  const h2Style: CSSProperties = useMemo(() => {
    return {
      display: h2Display,
      alignSelf: h2AlignSelf,
    };
  }, [h2Display, h2AlignSelf]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      gap: divGap,
    };
  }, [divGap]);

  return (
    <section
      className={`self-stretch overflow-hidden flex items-end justify-between flex-wrap content-end gap-[0rem] max-w-full [row-gap:20px] text-left text-[0.75rem] text-[#65645e] font-['Noto_Sans_Thai'] ${className}`}
    >
      <div
        className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-[46.375rem] max-w-full mq1050:min-w-full"
        style={divStyle}
      >
        <b className="relative">{prop}</b>
        <h2
          className="m-0 w-full relative text-[2.125rem] leading-[135%] font-bold font-[inherit] text-[#191919] inline-block max-w-[71.375rem] lg:max-w-full mq450:text-[1.25rem] mq450:leading-[1.75rem] mq1050:text-[1.688rem] mq1050:leading-[2.313rem]"
          style={h2Style}
        >
          {prop1}
        </h2>
        <div className="self-stretch relative text-[1rem] leading-[160%]">
          {prop2}
        </div>
      </div>
      <div
        className="h-[1.313rem] overflow-hidden flex items-center gap-[0.625rem] text-[0.875rem] text-[#000]"
        style={div1Style}
      >
        <Link
          to={prop3 === "ดูข่าวเตือนภัยทั้งหมด" ? "/knowledge-base" : "/scam-types"}
          className="relative font-semibold text-[#000] [text-decoration:none] hover:text-[#b58b00] hover:underline"
        >
          {prop3}
        </Link>
        <img className="h-[1.125rem] w-[1.125rem] relative" alt="" src="/share/arrow-right.svg" />
      </div>
    </section>
  );
};

export default Component2;
