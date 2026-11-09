import { FunctionComponent } from "react";

export type Component7Type = {
  className?: string;
};

const Component7: FunctionComponent<Component7Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[15.313rem] relative overflow-hidden min-w-[22.5rem] max-w-full text-left text-[0.875rem] text-[#ffd43b] font-['Noto_Sans_Thai'] lg:flex-1 mq750:min-w-full ${className}`}
    >
      <div className="absolute h-[calc(100%_-_13px)] top-[0.313rem] bottom-[0.5rem] left-[calc(50%_-_7.25rem)] rounded-[50%] bg-[#ffd43b] w-[14.5rem] shrink-0" />
      <img
        className="absolute left-[calc(50%_-_0.25rem)] bottom-[-0.081rem] rounded-2xl w-[12.725rem] h-[12.894rem] object-contain shrink-0"
        loading="lazy"
        alt=""
        src="/scam-types/3@2x.png"
      />
      <img
        className="absolute top-[1.5rem] left-[calc(50%_-_10.5rem)] w-[10.75rem] h-[10.75rem] object-cover shrink-0"
        alt=""
        src="/scam-types/6@2x.png"
      />
      <div className="absolute bottom-[1.438rem] left-1/2 -translate-x-1/2 rounded-[100px] bg-[#191919] overflow-hidden flex items-start py-[0.5rem] px-[1rem] whitespace-nowrap shrink-0">
        <div className="relative font-semibold">
          มุกเปลี่ยนได้ แต่เรารู้ทันได้
        </div>
      </div>
    </div>
  );
};

export default Component7;
