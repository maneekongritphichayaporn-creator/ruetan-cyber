import { FunctionComponent } from "react";

export type Component4Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  prop5?: string;
  prop6?: string;
  href: string;
};

const Component4: FunctionComponent<Component4Type> = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  href,
}) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start p-[1.75rem] gap-[1rem] text-left text-[0.813rem] text-[#191919] font-['Noto_Sans_Thai'] mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border ${className}`}
    >
      <div className="rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] text-[0.75rem]">
        <div className="relative leading-[165%] font-semibold">{prop}</div>
      </div>
      <h2 className="m-0 self-stretch relative text-[1.625rem] leading-[140%] font-bold font-[inherit] mq450:text-[1.313rem] mq450:leading-[1.813rem]">
        {prop1}
      </h2>
      <div className="self-stretch relative text-[0.938rem] leading-[165%] text-[#65645e]">
        {prop2}
      </div>
      <div className="self-stretch rounded-xl bg-[#faf8f2] overflow-hidden flex flex-col items-start p-[1rem] gap-[0.375rem]">
        <b className="self-stretch relative leading-[165%]">
          กลไก — หลอกอย่างไร
        </b>
        <div className="self-stretch relative text-[0.875rem] leading-[165%]">
          {prop3}
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-[#fff3be] overflow-hidden flex flex-col items-start p-[1rem] gap-[0.375rem]">
        <b className="self-stretch relative leading-[165%]">
          สัญญาณเตือน — เจอแบบนี้ให้หยุด
        </b>
        <div className="self-stretch relative text-[0.875rem] leading-[165%]">
          {prop4}
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-[#faf8f2] overflow-hidden flex flex-col items-start p-[1rem] gap-[0.375rem]">
        <b className="self-stretch relative leading-[165%]">
          วิธีรับมือ — ทำอะไรได้บ้าง
        </b>
        <div className="self-stretch relative text-[0.875rem] leading-[165%]">
          {prop5}
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex items-center gap-[0.5rem] text-[0.75rem] text-[#65645e]">
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
          {prop6}
        </a>
      </div>
    </div>
  );
};

export default Component4;
