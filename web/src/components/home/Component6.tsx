import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component6Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  divWidth?: CSSProperties["width"];
  h2Display?: CSSProperties["display"];
  h2MinWidth?: CSSProperties["minWidth"];
};

const Component6: FunctionComponent<Component6Type> = ({
  className = "",
  divWidth,
  prop,
  h2Display,
  h2MinWidth,
  prop1,
  prop2,
}) => {
  const div4Style: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  const h21Style: CSSProperties = useMemo(() => {
    return {
      display: h2Display,
      minWidth: h2MinWidth,
    };
  }, [h2Display, h2MinWidth]);

  return (
    <div
      className={`self-stretch border-[#e5d895] border-solid border-b-[1px] overflow-hidden flex flex-col items-start pt-[0rem] px-[0rem] pb-[0.75rem] gap-[0.25rem] text-left text-[2.25rem] text-[#000] font-['Noto_Sans_Thai'] ${className}`}
    >
      <div
        className="w-[6.063rem] h-[2.688rem] overflow-hidden shrink-0 flex items-baseline gap-[0.5rem]"
        style={div4Style}
      >
        <h2
          className="m-0 relative text-[length:inherit] leading-[120%] font-extrabold font-[inherit] inline-block min-w-[4rem] mq450:text-[1.375rem] mq450:leading-[1.625rem] mq1050:text-[1.813rem] mq1050:leading-[2.188rem]"
          style={h21Style}
        >
          {prop}
        </h2>
        <div className="relative text-[0.813rem]">{prop1}</div>
      </div>
      <div className="relative text-[0.813rem] text-[#65645e]">{prop2}</div>
    </div>
  );
};

export default Component6;
