import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component5Type = {
  className?: string;
  heart?: string;
  prop?: string;

  /** Style props */
  divBackgroundColor?: CSSProperties["backgroundColor"];
};

const Component5: FunctionComponent<Component5Type> = ({
  className = "",
  divBackgroundColor,
  heart,
  prop,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: divBackgroundColor,
    };
  }, [divBackgroundColor]);

  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-center gap-[0.75rem] min-w-[8.313rem] text-left text-[1rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <div
        className={`w-[4.625rem] h-[4.625rem] rounded-[20px] border-2 ${prop === "ถอนติดล็อก" ? "border-[#ffd43b]" : "border-transparent"} bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center`}
        style={divStyle}
      >
        <img
          className="h-[2.125rem] w-[2.125rem] relative"
          alt=""
          src={heart}
        />
      </div>
      <b className="relative leading-[165%]">{prop}</b>
    </div>
  );
};

export default Component5;
