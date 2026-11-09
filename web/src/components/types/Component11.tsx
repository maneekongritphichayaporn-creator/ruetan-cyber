import { FunctionComponent, useState } from "react";

export type Component11Type = {
  className?: string;
};

const Component11: FunctionComponent<Component11Type> = ({
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState("scam-category-1");
  const categories = [
    "อ้างหน่วยงานรัฐ / ข่มขู่",
    "ฟิชชิ่งลิงก์ & มัลแวร์ดูดเงิน",
    "หลอกลงทุน & งานออนไลน์",
    "ซื้อขายสินค้าออนไลน์ & ปล่อยกู้ทิพย์",
  ];

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start gap-[0.75rem] shrink-0 text-left text-[1rem] text-[#000] font-['Noto_Sans_Thai'] ${className}`}
    >
      <b className="relative">เลือกหมวดหมู่เพื่อดูบทความ</b>
      <div className="self-stretch overflow-hidden flex items-start gap-[0.75rem] text-[0.875rem] text-[#191919] mq1050:flex-wrap">
        {categories.map((category, index) => {
          const id = `scam-category-${index + 1}`;
          const isActive = activeCategory === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => selectCategory(id)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full border px-4 py-2.5 font-semibold transition-colors ${
                isActive
                  ? "border-[#191919] bg-[#191919] text-[#ffd43b]"
                  : "border-[#e3e0d6] bg-white text-[#191919] hover:bg-[#191919] hover:text-[#ffd43b]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Component11;
