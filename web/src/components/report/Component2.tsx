import { FunctionComponent } from "react";

export type Component2Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex items-start gap-[0.75rem] shrink-0 text-left text-[0.875rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <img
        className="cursor-pointer [border:none] p-0 bg-[transparent] h-[2.25rem] w-[2.25rem] relative rounded-[10px]"
        alt=""
        src={prop}
      />
      <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.25rem]">
        <b className="self-stretch relative leading-[160%]">{prop1}</b>
        <div className="w-full relative text-[0.813rem] leading-[170%] text-[#65645e] inline-block max-w-[16.375rem]">
          {prop2}
        </div>
      </div>
    </div>
  );
};

export default Component2;
