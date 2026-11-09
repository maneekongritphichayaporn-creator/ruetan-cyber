import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type Component5Type = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  linkTo?: string;
};

const Component5: FunctionComponent<Component5Type> = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  linkTo,
}) => {
  return (
    <section
      className={`flex-[1.1985] rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start pt-[0rem] px-[0rem] pb-[2.25rem] min-w-[20.938rem] max-h-[33.25rem] max-w-full text-left text-[0.75rem] text-[#000] font-['Noto_Sans_Thai'] ${className}`}
    >
      <img
        className="self-stretch h-[11.25rem] relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={prop}
      />
      <div className="self-stretch overflow-hidden flex flex-col items-start p-[1.5rem] gap-[0.75rem]">
        <div className="self-stretch overflow-hidden flex items-center justify-between gap-[0rem] [row-gap:20px] text-[#191919] mq450:flex-wrap mq450:gap-[0rem]">
          <div className="h-[1.75rem] rounded-[100px] bg-[#fff3be] overflow-hidden flex items-start py-[0.312rem] px-[0.75rem] box-border">
            <div className="relative font-semibold">{prop1}</div>
          </div>
          <div className="relative text-[#65645e]">เคสตัวอย่าง</div>
        </div>
        <b className="self-stretch relative text-[1.313rem] leading-[150%] mq450:text-[1.063rem] mq450:leading-[1.563rem]">
          {prop2}
        </b>
        <div className="w-full relative text-[0.875rem] leading-[170%] text-[#65645e] inline-block max-w-[25.125rem] mq450:max-w-full">
          {prop3}
        </div>
        {linkTo ? (
          <Link
            to={linkTo}
            className="min-h-[1.25rem] overflow-hidden flex items-center gap-[0.5rem] text-[0.813rem] text-[#000] [text-decoration:none] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919]"
          >
            <b className="relative">อ่านวิธีสังเกตและป้องกัน</b>
            <img
              className="h-[1rem] w-[1rem] relative"
              alt=""
              src="/share/arrow-right.svg"
            />
          </Link>
        ) : (
          <div className="w-[9.813rem] h-[1.25rem] overflow-hidden shrink-0 flex items-center gap-[0.5rem] text-[0.813rem]">
            <b className="relative">อ่านวิธีสังเกตและป้องกัน</b>
            <img
              className="h-[1rem] w-[1rem] relative"
              alt=""
              src="/share/arrow-right.svg"
            />
          </div>
        )}
        <div className="self-stretch rounded-[10px] bg-[#faf8f2] overflow-hidden flex flex-col items-start p-[0.875rem] gap-[0.312rem]">
          <b className="relative">เช็กก่อนเชื่อ</b>
          <div className="w-full relative leading-[160%] text-[#65645e] inline-block max-w-[23.375rem]">
            {prop4}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component5;
