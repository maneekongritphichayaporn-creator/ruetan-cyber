import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component5Type = {
  className?: string;
  landmark?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  bMargin?: CSSProperties["margin"];
};

const Component5: FunctionComponent<Component5Type> = ({
  className = "",
  landmark,
  prop,
  bMargin,
  prop1,
}) => {
  const b2Style: CSSProperties = useMemo(() => {
    return {
      margin: bMargin,
    };
  }, [bMargin]);

  return (
    <div
      className={`self-stretch rounded-[20px] bg-white border-[#e3e0d6] border-solid border overflow-hidden flex items-start py-5 px-[1.312rem] gap-4 text-left text-[1.25rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:flex-wrap ${className}`}
    >
      <div className="h-11 w-11 rounded-xl bg-[#fff3be] overflow-hidden shrink-0 flex items-center justify-center">
        <img
          className="h-5.5 w-5.5 relative"
          alt=""
          src={landmark}
        />
      </div>
      <div className="flex-1 overflow-hidden flex flex-col items-start gap-1.5 min-w-[30.125rem] mq750:min-w-full">
        <b
          className="self-stretch relative leading-[140%] mq450:text-[1rem] mq450:leading-[1.375rem]"
          style={b2Style}
        >
          {prop}
        </b>
        <div className="self-stretch relative text-[0.938rem] leading-[170%] text-[#65645e]">
          {prop1}
        </div>
      </div>
    </div>
  );
};

export default Component5;
