import { FunctionComponent } from "react";

export type Component6Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  href: string;
  prop2?: string;
  href1: string;
};

const Component6: FunctionComponent<Component6Type> = ({
  className = "",
  prop,
  prop1,
  href,
  prop2,
  href1,
}) => {
  return (
    <div
      className={`self-stretch border-[#e3e0d6] border-solid border-b-[1px] overflow-hidden flex items-start pt-[0.75rem] px-[0rem] pb-[0.625rem] gap-[0.75rem] text-left text-[0.813rem] text-[#191919] font-['Noto_Sans_Thai'] mq1050:flex-wrap ${className}`}
    >
      <b className="w-[1.875rem] relative leading-[165%] inline-block shrink-0">
        {prop}
      </b>
      <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.25rem] min-w-[34.375rem] text-[0.875rem] mq750:min-w-full">
        <a
          className="self-stretch relative leading-[165%] font-semibold text-[inherit] [text-decoration:none]"
          href={href}
          target="_blank"
        >
          {prop1}
        </a>
        <a
          className="self-stretch relative text-[0.75rem] leading-[165%] text-[#65645e] [text-decoration:none]"
          href={href1}
          target="_blank"
        >
          {prop2}
        </a>
      </div>
    </div>
  );
};

export default Component6;
