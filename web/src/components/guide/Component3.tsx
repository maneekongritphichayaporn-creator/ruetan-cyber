import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component3Type = {
  className?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  sectionBackgroundColor?: CSSProperties["backgroundColor"];
  bColor?: CSSProperties["color"];
  divColor?: CSSProperties["color"];
};

const Component3: FunctionComponent<Component3Type> = ({
  className = "",
  sectionBackgroundColor,
  prop,
  bColor,
  prop1,
  divColor,
}) => {
  const sectionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: sectionBackgroundColor,
    };
  }, [sectionBackgroundColor]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      color: bColor,
    };
  }, [bColor]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <section
      className={`self-stretch rounded-xl bg-[#fff3be] overflow-hidden flex items-start flex-wrap content-start p-5 gap-3 text-left text-[1rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
      style={sectionStyle}
    >
      <img
        className="h-5.5 w-5.5 relative"
        alt=""
        src="/share/info.svg"
      />
      <div className="flex-1 overflow-hidden flex flex-col items-start gap-1 min-w-196 mq1050:min-w-full">
        <b className="self-stretch relative" style={bStyle}>
          {prop}
        </b>
        <div
          className="self-stretch relative text-[0.875rem] leading-[170%]"
          style={divStyle}
        >
          {prop1}
        </div>
      </div>
    </section>
  );
};

export default Component3;
