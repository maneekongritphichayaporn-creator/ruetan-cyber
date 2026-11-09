import { FormEvent, FunctionComponent, useState } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzGD2oh_lLt3HntLZz_4j_2n2eGR9m4_-JkhUtjacp64nPqXwtCQs0ILr873Dg4JHII/exec";

export type Component3Type = {
  className?: string;
  onSubmitSuccess?: () => void;
};

const Component3: FunctionComponent<Component3Type> = ({
  className = "",
  onSubmitSuccess,
}) => {
  const [details, setDetails] = useState("");
  const [scamType, setScamType] = useState("");
  const [platform, setPlatform] = useState("");
  const [scammerContact, setScammerContact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          scamType,
          platform,
          scammerContact,
          details,
          imageUrl,
        }),
      });

      setSuccessMessage(
        "ส่งคำขอแจ้งเรื่องแล้ว ขอบคุณที่ร่วมปกป้องสังคมจากภัยไซเบอร์",
      );
      onSubmitSuccess?.();
      setScamType("");
      setPlatform("");
      setScammerContact("");
      setDetails("");
      setImageUrl("");
      setConsent(false);
    } catch (error) {
      console.error("Error submitting report:", error);
      setErrorMessage("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex-1 rounded-[20px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start p-[2rem] gap-[1.5rem] min-w-0 max-w-[55.5rem] text-left text-[1rem] text-[#191919] font-['Noto_Sans_Thai'] mq450:p-[1rem] mq750:max-w-full mq1050:max-w-full mq1050:w-[calc(100%_-_40px)] mq1050:flex-1 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.375rem] shrink-0 text-[1.5rem]">
        <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] mq450:text-[1.188rem]">
          เล่าเรื่องที่คุณพบ
        </h3>
        <div className="self-stretch relative text-[0.875rem] leading-[165%] text-[#65645e]">
          ช่องที่มี * จำเป็นต้องกรอก • ไม่ต้องระบุข้อมูลส่วนตัวของผู้ส่ง
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
      <div className="self-stretch overflow-hidden flex items-start gap-[1.25rem] shrink-0 max-w-full mq1050:flex-wrap">
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-0 max-w-full">
          <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[8.5rem]">
            <span className="leading-[150%]">รูปแบบกลโกงที่พบ</span>
            <span className="text-[#65645e] leading-[150%]"> *</span>
          </div>
          <FormControl
            className="self-stretch h-[3.5rem] min-w-0 font-['Noto_Sans_Thai'] text-[0.938rem] text-[#85847d] max-w-full"
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",
              height: "56px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "56px",
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "56px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "56px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: "0 32px 0 14px !important",
                height: "56px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                textAlign: "left",
                p: "0 32px 0 14px !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              value={scamType}
              renderValue={(selected) =>
                selected || "กรุณาเลือกรูปแบบกลโกงที่พบ"
              }
              onChange={(event) => setScamType(event.target.value)}
              required
            >
              <MenuItem value="" disabled>
                กรุณาเลือกรูปแบบกลโกงที่พบ
              </MenuItem>
              <MenuItem value="หลอกขายสินค้าออนไลน์">
                หลอกขายสินค้าออนไลน์
              </MenuItem>
              <MenuItem value="แก๊ง Call Center">
                แก๊ง Call Center แอบอ้างเป็นเจ้าหน้าที่หรือธนาคาร
              </MenuItem>
              <MenuItem value="แอปพลิเคชันเงินกู้ออนไลน์เถื่อน">
                แอปพลิเคชันเงินกู้ออนไลน์เถื่อน ดอกเบี้ยโหด
              </MenuItem>
              <MenuItem value="ลงทุนปลอม">
                ลงทุนปลอม หรือหลอกเทรดคริปโตเคอเรนซี
              </MenuItem>
              <MenuItem value="หลอกให้รักแล้วโอนเงิน">
                หลอกให้รักแล้วโอนเงิน Romance Scam
              </MenuItem>
              <MenuItem value="งานเสริมออนไลน์">
                งานเสริมออนไลน์ กดรับออเดอร์ หรือปั๊มวิวสินค้า
              </MenuItem>
              <MenuItem value="ฟิชชิ่งลิงก์ปลอมดูดเงิน">
                ฟิชชิ่งลิงก์ปลอมดูดเงิน หลอกคลิกรับสิทธิ์
              </MenuItem>
              <MenuItem value="ขู่กรรโชกทรัพย์">
                ขู่กรรโชกทรัพย์ หรือแบล็กเมลทางเพศ
              </MenuItem>
              <MenuItem value="อื่นๆ">อื่นๆ</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.5rem] min-w-0 max-w-full mq1050:basis-full">
          <div className="self-stretch relative leading-[150%] font-semibold">
            <span className="leading-[150%]">แพลตฟอร์มที่พบ</span>
            <span className="text-[#65645e] leading-[150%]"> *</span>
          </div>
          <FormControl
            className="self-stretch min-w-0 font-['Noto_Sans_Thai'] text-[0.938rem] text-[#85847d] min-h-[3.5rem] max-w-full"
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",
              height: "56px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "56px",
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "56px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "56px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: "0 32px 0 14px !important",
                height: "56px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                textAlign: "left",
                p: "0 32px 0 14px !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              value={platform}
              renderValue={(selected) => selected || "กรุณาเลือกแพลตฟอร์มที่พบ"}
              onChange={(event) => setPlatform(event.target.value)}
              required
            >
              <MenuItem value="" disabled>
                กรุณาเลือกแพลตฟอร์มที่พบ
              </MenuItem>
              <MenuItem value="Facebook และ Instagram">
                Facebook และ Instagram
              </MenuItem>
              <MenuItem value="LINE">LINE</MenuItem>
              <MenuItem value="TikTok">TikTok</MenuItem>
              <MenuItem value="SMS หรือข้อความสั้นในมือถือ">
                SMS หรือข้อความสั้นในมือถือ
              </MenuItem>
              <MenuItem value="โทรศัพท์">
                โทรศัพท์ สายโทรเข้าตรงจากมิจฉาชีพ
              </MenuItem>
              <MenuItem value="เว็บไซต์ปลอม">
                เว็บไซต์ปลอม แอบอ้างหน่วยงานรัฐหรือธนาคาร
              </MenuItem>
              <MenuItem value="X และ Threads">X และ Threads</MenuItem>
              <MenuItem value="อีเมล">อีเมลหลอกลวง</MenuItem>
              <MenuItem value="อื่นๆ">อื่นๆ</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem] shrink-0 max-w-full">
        <div className="self-stretch relative leading-[150%] font-semibold">
          <span className="leading-[150%]">
            ช่องทาง / บัญชี / เบอร์โทร หรือลิงก์เว็บไซต์ของมิจฉาชีพ
          </span>
          <span className="text-[#65645e] leading-[150%]"> *</span>
        </div>
        <div className="self-stretch h-[3.5rem] rounded-[10px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center py-[0rem] px-[1rem] max-w-full focus-within:border-[#ffd43b]">
          <input
            className="w-full [border:none] [outline:none] font-['Noto_Sans_Thai'] text-[0.938rem] bg-[transparent] h-[1.563rem] flex-1 relative leading-[165%] text-[#85847d] text-left inline-block min-w-[15.625rem] p-0 max-w-full"
            placeholder="เช่น @บัญชีตัวอย่าง, 0XX-XXX-XXXX หรือ https://example.com"
            type="text"
            value={scammerContact}
            onChange={(event) => setScammerContact(event.target.value)}
            required
            aria-label="ช่องทาง บัญชี เบอร์โทร หรือลิงก์เว็บไซต์ของมิจฉาชีพ"
          />
        </div>
        <div className="self-stretch relative text-[0.813rem] leading-[165%] text-[#65645e]">
          ระบุเฉพาะช่องทางที่มิจฉาชีพใช้ติดต่อ ไม่ใส่บัญชีหรือเบอร์โทรของคุณ
        </div>
      </div>
      <section className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem] shrink-0 text-left text-[1rem] text-[#191919] font-['Noto_Sans_Thai']">
        <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.5rem]">
          <div className="self-stretch relative leading-[150%] font-semibold">
            <span className="leading-[150%]">รายละเอียดเหตุการณ์สั้น ๆ</span>
            <span className="text-[#65645e] leading-[150%]"> *</span>
          </div>
          <textarea
            className="self-stretch min-h-[8.5rem] resize-y rounded-[10px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border py-[0.875rem] px-[1rem] font-['Noto_Sans_Thai'] text-[0.938rem] leading-[165%] text-[#191919] outline-none focus:border-[#ffd43b]"
            placeholder="เล่าว่าพบอะไร เขาติดต่ออย่างไร และชักชวนให้ทำอะไร…"
            value={details}
            onChange={(event) => setDetails(event.target.value.slice(0, 1000))}
            maxLength={1000}
            required
            aria-label="รายละเอียดเหตุการณ์สั้น ๆ"
          />
          <div className="self-stretch relative text-[0.813rem] leading-[165%] text-[#65645e]">
            เล่าเฉพาะข้อเท็จจริงที่พบ
            โดยไม่ใส่ชื่อหรือข้อมูลส่วนตัวของคุณและผู้เสียหาย
          </div>
        </div>
        <div className="self-stretch relative text-[0.75rem] text-[#65645e] text-right">
          {details.length} / 1,000 ตัวอักษร
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-start gap-[0.75rem] max-w-full text-left text-[1rem] text-[#191919] font-['Noto_Sans_Thai']">
        <div className="self-stretch relative">
          <span className="font-semibold">ลิงก์รูปภาพหลักฐาน </span>
          <span className="text-[0.813rem] text-[#65645e]">(ไม่บังคับ)</span>
        </div>
        <div className="self-stretch rounded-[10px] bg-[#fff3be] overflow-hidden flex items-start p-[1rem] box-border gap-[0.75rem] max-w-full text-[0.938rem] mq750:flex-wrap">
          <img
            className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.5rem] w-[1.5rem] relative"
            alt=""
            src="/share/shield-alert.svg"
          />
          <div className="flex-1 min-w-0 overflow-hidden flex flex-col items-start gap-[0.375rem] max-w-full break-words">
            <b className="self-stretch relative leading-[150%]">
              ปิดข้อมูลส่วนบุคคลในรูปภาพก่อนแชร์ลิงก์
            </b>
            <div className="self-stretch relative text-[0.875rem] leading-[165%]">
              ปิดชื่อ นามสกุล เลขบัตรประชาชน เบอร์โทร เลขบัญชี
              และข้อมูลส่วนบุคคลอื่นของผู้ส่งหรือผู้เสียหายให้ครบ
            </div>
            <div className="self-stretch relative text-[0.813rem] leading-[165%]">
              แชร์เฉพาะรูปที่ปิดข้อมูลแล้ว และตั้งค่าลิงก์ให้ผู้รับเปิดดูได้
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col gap-[0.5rem]">
          <label
            className="self-stretch relative text-[0.875rem] leading-[165%] text-[#65645e]"
            htmlFor="evidence-image-url"
          >
            วาง URL ของรูปภาพ (เช่น Imgur หรือ Google Drive)
          </label>
          <input
            id="evidence-image-url"
            className="self-stretch min-h-[3.5rem] rounded-[10px] bg-[#fff] border-[#e3e0d6] border-solid border-[1px] box-border py-[0.875rem] px-[1rem] font-['Noto_Sans_Thai'] text-[0.938rem] leading-[165%] text-[#191919] outline-none focus:border-[#ffd43b]"
            type="url"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="https://..."
            aria-label="URL ของรูปภาพหลักฐาน (ไม่บังคับ)"
          />
        </div>
      </section>
      <div className="self-stretch h-[0.063rem] relative bg-[#e3e0d6]" />
      <div className="self-stretch overflow-hidden flex items-start gap-[0.75rem] max-w-full text-[0.938rem] mq750:flex-wrap">
        <input
          className="m-0 h-[1.375rem] w-[1.375rem] relative rounded border-[#85847d] border-solid border-[1.5px] box-border"
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          aria-label="ยินยอมให้นำเรื่องไปเผยแพร่แบบไม่ระบุตัวตน"
        />
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.375rem] min-w-[32rem] max-w-full mq750:min-w-full">
          <div className="w-full relative leading-[165%] font-semibold inline-block max-w-[49.25rem] mq1050:max-w-full">
            ยินยอมให้นำเรื่องไปเผยแพร่เป็นอุทาหรณ์เตือนภัยแบบไม่ระบุตัวตน
            (Anonymized Data) *
          </div>
          <div className="w-full relative text-[0.813rem] leading-[165%] text-[#65645e] inline-block max-w-[49.25rem] mq1050:max-w-full">
            ทีมงานจะพิจารณาและตรวจสอบก่อนเผยแพร่
            การส่งเรื่องไม่ได้หมายความว่าจะเผยแพร่ทันทีหรือทุกเรื่อง
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex items-center gap-[1.5rem] max-w-full text-[0.813rem] text-[#65645e] mq1050:flex-wrap mq1050:gap-3">
        <div className="flex-1 overflow-hidden flex flex-col items-start min-w-[24.813rem] max-w-full mq1050:min-w-full">
          <div className="self-stretch relative leading-[165%]">
            การส่งเรื่องนี้เป็นการแชร์เพื่อเตือนภัย
            ไม่ใช่การแจ้งความหรือระงับบัญชี และไม่รับประกันผลการร้องเรียน
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer disabled:cursor-wait disabled:opacity-60 [border:none] py-3 px-[1.5rem] bg-[#ffd43b] min-h-[3.25rem] h-auto max-w-full rounded-[10px] overflow-hidden flex items-center justify-center box-border gap-[0.75rem] hover:bg-[#e6ba21]"
        >
          <div className="relative text-[1rem] font-semibold font-['Noto_Sans_Thai'] text-[#191919] text-left">
            {loading ? "กำลังส่งข้อมูล..." : "ส่งเรื่องเตือนภัย"}
          </div>
          <img
            className="h-[1.375rem] w-[1.375rem] relative"
            alt=""
            src="/share/send.svg"
          />
        </button>
      </div>
      {(successMessage || errorMessage) && (
        <div
          className={`self-stretch rounded-md p-3 text-[0.875rem] ${
            errorMessage
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
          role={errorMessage ? "alert" : "status"}
          aria-live="polite"
        >
          {errorMessage || successMessage}
        </div>
      )}
    </form>
  );
};

export default Component3;
