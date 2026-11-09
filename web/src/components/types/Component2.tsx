import { FormEvent, FunctionComponent, useState } from "react";

export type Component2Type = {
  className?: string;
};

const searchCategories = [
  {
    id: "scam-category-1",
    terms: ["อ้างตำรวจ", "แก๊งคอลเซ็นเตอร์", "อ้างหน่วยงานรัฐ", "ข่มขู่"],
  },
  {
    id: "scam-category-2",
    terms: ["พัสดุตกค้าง", "แอปดูดเงิน", "sms ปลอม", "ฟิชชิ่ง", "มัลแวร์"],
  },
  {
    id: "scam-category-3",
    terms: ["งานกดไลก์", "หลอกลงทุน", "งานออนไลน์"],
  },
  {
    id: "scam-category-4",
    terms: ["กู้เงินออนไลน์", "ซื้อขายสินค้า", "ปล่อยกู้ทิพย์"],
  },
];

const suggestions = [
  "อ้างตำรวจ",
  "พัสดุตกค้าง",
  "แอปดูดเงิน",
  "งานกดไลก์",
  "กู้เงินออนไลน์",
];

const Component2: FunctionComponent<Component2Type> = ({ className = "" }) => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const search = (term: string) => {
    const normalizedQuery = term.trim().toLocaleLowerCase();
    if (!normalizedQuery) {
      setMessage("พิมพ์คำที่ต้องการค้นหาก่อน");
      return;
    }

    const category = searchCategories.find(({ terms }) =>
      terms.some((keyword) => {
        const normalizedKeyword = keyword.toLocaleLowerCase();
        return (
          normalizedQuery.includes(normalizedKeyword) ||
          (normalizedQuery.length > 1 && normalizedKeyword.includes(normalizedQuery))
        );
      }),
    );

    if (!category) {
      setMessage("ยังไม่พบหมวดที่ตรงกัน ลองค้นหาด้วยคำแนะนำด้านล่าง");
      return;
    }

    setMessage("");
    document.getElementById(category.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(query);
  };

  return (
    <section
      className={`self-stretch rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem] max-w-full text-left text-[1rem] text-[#000] font-['Noto_Sans_Thai'] ${className}`}
    >
      <b className="relative">เจออะไรมา? ลองค้นหาที่นี่</b>
      <form
        className="self-stretch overflow-hidden flex items-start flex-wrap content-start gap-x-[0.75rem] gap-y-[0.625rem] max-w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 rounded-[10px] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex items-center py-[0rem] px-[1.125rem] gap-[0.75rem] min-w-[15.625rem] min-h-[3.5rem] max-w-full">
          <img className="h-[1.375rem] w-[1.375rem] relative" alt="" src="/share/search.svg" />
          <input
            className="w-full border-0 outline-none font-['Noto_Sans_Thai'] text-[0.938rem] bg-transparent flex-1 text-[#65645e] text-left p-0"
            placeholder="ค้นหาชื่อกลโกง คำพูดที่เจอ หรือวิธีป้องกัน เช่น “โอนเงินตรวจสอบ”"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="ค้นหาหมวดกลโกง"
          />
        </div>
        <button className="cursor-pointer border-0 px-6 bg-[#ffd43b] min-h-[3.25rem] rounded-[10px] flex items-center justify-center gap-3 hover:bg-[#e6ba21] transition-colors">
          <span className="text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#191919]">
            ค้นหากลโกง
          </span>
          <img className="h-[1.375rem] w-[1.375rem] relative" alt="" src="/share/search.svg" />
        </button>
      </form>
      <div className="self-stretch flex items-center flex-wrap gap-2.5 text-[0.813rem]">
        <span className="text-[#65645e]">ลองค้นหา</span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => {
              setQuery(suggestion);
              search(suggestion);
            }}
            className="cursor-pointer rounded-full border-0 bg-[#faf8f2] px-3 py-1.5 text-[#191919] hover:bg-[#191919] hover:text-[#ffd43b] transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
      {message && (
        <div role="status" className="text-[0.813rem] text-[#65645e]">
          {message}
        </div>
      )}
    </section>
  );
};

export default Component2;
