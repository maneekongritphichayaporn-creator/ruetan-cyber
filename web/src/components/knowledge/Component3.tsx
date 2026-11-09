import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component3Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  prop5?: string;
  href: string;
  prop6?: string;
  href1: string;

  /** Style props */
  bMinWidth?: CSSProperties["minWidth"];
};

const Component3: FunctionComponent<Component3Type> = ({
  className = "",
  prop,
  prop1,
  bMinWidth,
  prop2,
  prop3,
  prop4,
  prop5,
  href,
  prop6,
  href1,
}) => {
  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: bMinWidth,
    };
  }, [bMinWidth]);

  return (
    <section
      className={`self-stretch flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[1rem] min-w-[19.375rem] text-left text-[0.75rem] text-[#191919] font-['Noto_Sans_Thai'] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-center gap-[0.75rem] text-[1.063rem] mq450:flex-wrap">
        <div className="h-[3.5rem] w-[4.5rem] rounded-xl bg-[#fff3be] overflow-hidden shrink-0 flex items-center justify-center">
          <div className="relative leading-[165%] font-extrabold">{prop}</div>
        </div>
        <b
          className="flex-1 relative text-[1rem] leading-[165%] inline-block min-w-[8.125rem]"
          style={bStyle}
        >
          {prop1}
        </b>
      </div>
      <div className="rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem]">
        <div className="relative leading-[165%] font-semibold">{prop2}</div>
      </div>
      <h2 className="m-0 self-stretch relative text-[1.438rem] leading-[145%] font-bold font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.688rem]">
        {prop3}
      </h2>
      <div className="self-stretch relative text-[0.938rem] leading-[165%] text-[#65645e]">
        {prop4}
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
      <a
        className="self-stretch relative text-[0.875rem] leading-[165%] font-bold text-[inherit] [text-decoration:none]"
        href={href}
        target="_blank"
      >
        {prop5}
      </a>
      <div className="self-stretch overflow-hidden flex items-center gap-[0.5rem] text-[#65645e]">
        <img
          className="h-[0.938rem] w-[0.938rem] relative"
          loading="lazy"
          alt=""
          src="/share/external-link.svg"
        />
        <a
          className="flex-1 relative leading-[165%] text-[inherit] [text-decoration:none]"
          href={href1}
          target="_blank"
        >
          {prop6}
        </a>
      </div>
    </section>
  );
};

export default Component3;
