import { FormEvent, FunctionComponent, useState } from "react";

export type Component15Type = {
  className?: string;
};

const categories = [
  { label: "ทั้งหมด", id: "" },
  { label: "บทวิเคราะห์เคส", id: "knowledge-cases" },
  { label: "ข้อมูลจากหน่วยงาน", id: "knowledge-official" },
  { label: "เทคนิคใหม่", id: "knowledge-ai" },
  { label: "หลอกลงทุน", id: "knowledge-ai" },
  { label: "ปลอมหน้า / เสียง", id: "knowledge-ai" },
];

const Component15: FunctionComponent<Component15Type> = ({
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [message, setMessage] = useState("");

  const goToCategory = (id: string) => {
    setActiveCategory(id);
    if (id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim().toLocaleLowerCase();
    if (!value) {
      setMessage("พิมพ์คำที่ต้องการค้นหาก่อน");
      return;
    }

    const target =
      /หน่วยงาน|ตำรวจ|ธปท|ก\.ล\.ต|ทางการ/.test(value)
        ? "knowledge-official"
        : /เคส|รายงานคดี|บทวิเคราะห์/.test(value)
          ? "knowledge-cases"
          : /เทคนิค|ลงทุน|เอไอ|ปลอมหน้า|เสียง|ดีปเฟก/.test(value)
            ? "knowledge-ai"
            : null;

    if (!target) {
      setMessage("ยังไม่พบหมวดที่ตรงกัน ลองค้นหา “เคส” “หน่วยงาน” หรือ “ปลอมเสียง”");
      return;
    }

    setMessage("");
    goToCategory(target);
  };

  return (
    <section
      className={`self-stretch rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] overflow-hidden flex flex-col items-start py-[1.375rem] px-[1.437rem] gap-[1rem] text-left text-[0.875rem] text-[#191919] font-['Noto_Sans_Thai'] ${className}`}
    >
      <form
        className="self-stretch overflow-hidden flex items-center gap-[0.75rem] lg:flex-wrap"
        onSubmit={search}
      >
        <div className="min-h-[3.5rem] flex-1 rounded-[10px] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex items-center py-0 px-[1.062rem] gap-3 min-w-[15.625rem]">
          <img className="h-[1.375rem] w-[1.375rem] relative" alt="" src="/share/search.svg" />
          <input
            className="w-full border-0 outline-none font-['Noto_Sans_Thai'] text-[0.938rem] bg-transparent flex-1 leading-[165%] text-[#65645e] p-0"
            placeholder="ค้นหาข่าว เคส หรือคำที่พบ เช่น “ปลอมเสียง” “ชวนลงทุน”"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="ค้นหาข่าวและบทเรียน"
          />
        </div>
        <button className="cursor-pointer border-0 px-6 bg-[#ffd43b] h-[3.25rem] rounded-[10px] flex items-center justify-center gap-3 hover:bg-[#e6ba21] transition-colors">
          <span className="text-[1rem] leading-[165%] font-semibold font-['Noto_Sans_Thai'] text-[#191919]">
            ค้นหาข่าว
          </span>
          <img className="h-[1.375rem] w-[1.375rem] relative" alt="" src="/share/search.svg" />
        </button>
      </form>
      <div className="self-stretch flex items-center flex-wrap gap-2.5">
        {categories.map(({ label, id }) => {
          const isActive = activeCategory === id;
          return (
            <button
              key={label}
              type="button"
              onClick={() => goToCategory(id)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full border px-4 py-2 font-semibold transition-colors ${
                isActive
                  ? "border-[#191919] bg-[#191919] text-[#ffd43b]"
                  : "border-transparent bg-[#faf8f2] text-[#191919] hover:bg-[#191919] hover:text-[#ffd43b]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      {message && (
        <div role="status" className="text-[0.813rem] text-[#65645e]">
          {message}
        </div>
      )}
    </section>
  );
};

export default Component15;
