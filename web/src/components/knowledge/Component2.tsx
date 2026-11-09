import { FunctionComponent } from "react";

export type Component2Type = {
  className?: string;
  prop?: string;
  heartHandshake?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  href: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
  prop,
  heartHandshake,
  prop1,
  prop2,
  prop3,
  prop4,
  href,
}) => {
  return (
    <div
      className={`self-stretch flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[1.625rem] px-[1.687rem] gap-[1.125rem] min-w-[29.438rem] text-left text-[0.75rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:min-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex items-center justify-between gap-[1.25rem] mq450:flex-wrap mq450:gap-[1.25rem]">
        <div className="rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem]">
          <div className="relative leading-[165%] font-semibold">{prop}</div>
        </div>
        <div className="h-[3.5rem] w-[3.5rem] rounded-2xl bg-[#ffd43b] overflow-hidden shrink-0 flex items-center justify-center">
          <img
            className="h-[1.75rem] w-[1.75rem] relative"
            alt=""
            src={heartHandshake}
          />
        </div>
      </div>
      <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[140%] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.688rem]">
        {prop1}
      </h3>
      <div className="self-stretch relative text-[0.938rem] leading-[165%] text-[#65645e]">
        {prop2}
      </div>
      <div className="self-stretch rounded-xl bg-[#faf8f2] overflow-hidden flex flex-col items-start p-[1rem] gap-[0.375rem] text-[0.813rem]">
        <b className="self-stretch relative leading-[165%]">
          สิ่งที่เราเรียนรู้
        </b>
        <div className="self-stretch relative text-[0.875rem] leading-[165%]">
          {prop3}
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex items-center gap-[0.5rem] text-[#65645e]">
        <img
          className="h-[0.938rem] w-[0.938rem] relative"
          loading="lazy"
          alt=""
          src="/share/external-link.svg"
        />
        <a
          className="flex-1 relative leading-[165%] text-[inherit] [text-decoration:none]"
          href={href}
          target="_blank"
        >
          {prop4}
        </a>
      </div>
    </div>
  );
};

export default Component2;
