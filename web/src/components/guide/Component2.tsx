import { FunctionComponent } from "react";

export type Component2Type = {
  className?: string;
  prop?: string;
  phoneCall?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  prop5?: string;
  prop6?: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
  prop,
  phoneCall,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
}) => {
  return (
    <section
      className={`self-stretch rounded-[20px] bg-white border-[#e3e0d6] border-solid border overflow-hidden flex items-start flex-wrap content-start py-6.5 px-[1.687rem] gap-6 text-left text-[2.5rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <div className="w-16 overflow-hidden shrink-0 flex flex-col items-center gap-4">
        <div className="relative leading-[120%] font-extrabold mq1050:text-[2rem] mq1050:leading-[2.375rem] mq450:text-[1.5rem] mq450:leading-[1.813rem]">
          {prop}
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
          <img
            className="h-5.5 w-5.5 relative"
            alt=""
            src={phoneCall}
          />
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col items-start gap-2.5 min-w-131 text-[0.813rem] text-[#65645e] mq1050:min-w-full">
        <b className="relative">{prop1}</b>
        <b className="self-stretch relative text-[1.5rem] leading-[140%] text-[#191919] mq450:text-[1.188rem] mq450:leading-[1.688rem]">
          {prop2}
        </b>
        <div className="self-stretch relative text-[1rem] leading-[170%] text-[#191919]">
          {prop3}
        </div>
        <div className="self-stretch relative text-[0.875rem] leading-[170%]">
          {prop4}
        </div>
      </div>
      <div className="self-stretch w-77 rounded-xl bg-[#faf8f2] overflow-hidden shrink-0 flex flex-col items-start p-5 box-border gap-2 text-[1rem]">
        <b className="self-stretch relative">{prop5}</b>
        <div className="self-stretch relative text-[0.875rem] leading-[170%] text-[#65645e]">
          {prop6}
        </div>
      </div>
    </section>
  );
};

export default Component2;
