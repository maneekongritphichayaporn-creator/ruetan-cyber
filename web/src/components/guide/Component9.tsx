import { FunctionComponent } from "react";

export type Component9Type = {
  className?: string;
};

const Component9: FunctionComponent<Component9Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[17.5rem] w-[22.5rem] overflow-hidden shrink-0 flex items-start relative isolate max-w-full text-left text-[0.875rem] text-[#ffd43b] font-['Noto_Sans_Thai'] lg:w-full lg:flex-none mq750:min-w-full ${className}`}
    >
      <div className="h-[15.625rem] w-[15.625rem] absolute !!m-[0 important] top-[0.625rem] left-[calc(50%_-_7.8125rem)] rounded-[50%] bg-[#ffd43b] z-[0]" />
      <img
        className="h-[14.981rem] w-[13.05rem] !!m-[0 important] absolute top-[2.188rem] left-[calc(50%_-_0.25rem)] rounded-2xl object-contain z-[1]"
        alt=""
        src="/reporting-guide/3@2x.png"
      />
      <div className="h-[10.75rem] w-[10.75rem] !!m-[0 important] absolute top-[2.125rem] left-[calc(50%_-_10.5rem)] overflow-hidden shrink-0 flex items-start z-[2]">
        <div className="h-[10.75rem] w-[10.75rem] overflow-hidden shrink-0 flex items-start relative isolate">
          <img
            className="h-[10.75rem] w-[10.75rem] relative z-[0]"
            alt=""
            src="/share/logo.svg"
          />
          <div className="h-[1.613rem] w-[0.375rem] absolute !!m-[0 important] top-[4.894rem] left-[3.225rem] rounded-[50%] bg-[#191919] z-[2]" />
          <div className="h-[1.613rem] w-[0.375rem] absolute !!m-[0 important] top-[4.894rem] left-[7.363rem] rounded-[50%] bg-[#191919] z-[3]" />
        </div>
      </div>
      <div className="!!m-[0 important] absolute top-[13.563rem] left-1/2 -translate-x-1/2 rounded-[100px] bg-[#191919] overflow-hidden flex items-start py-[0.5rem] px-[1rem] whitespace-nowrap z-[3]">
        <div className="relative font-semibold">ค่อย ๆ ทำ เราไปทีละขั้น</div>
      </div>
    </div>
  );
};

export default Component9;
