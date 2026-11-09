import { useCallback, useEffect, useState } from "react";
import liff from "@line/liff";

type LiffProfile = Awaited<ReturnType<typeof liff.getProfile>>;

export const useLiff = () => {
  const [initialized, setInitialized] = useState(false);
  const [isInClient, setIsInClient] = useState(false);
  const [profile, setProfile] = useState<LiffProfile | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const liffId = import.meta.env.VITE_LIFF_ID;

    if (!liffId) {
      setError("ยังไม่ได้ตั้งค่า LIFF ID");
      return () => {
        active = false;
      };
    }

    const initialize = async () => {
      try {
        await liff.init({ liffId });
        if (!active) return;

        setInitialized(true);
        setIsInClient(liff.isInClient());

        if (liff.isLoggedIn()) {
          setProfile(await liff.getProfile());
        }
      } catch (initError) {
        console.error("LIFF Init Error:", initError);
        if (active) {
          setError("เชื่อมต่อ LIFF ไม่สำเร็จ กรุณาลองเปิดผ่าน LINE อีกครั้ง");
        }
      }
    };

    void initialize();

    return () => {
      active = false;
    };
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!initialized || !isInClient) {
      throw new Error("ฟังก์ชันนี้ใช้งานได้เมื่อเปิดผ่านแอป LINE เท่านั้น");
    }
    await liff.sendMessages([{ type: "text", text }]);
  }, [initialized, isInClient]);

  const closeWindow = useCallback(() => {
    if (initialized && isInClient) {
      liff.closeWindow();
    }
  }, [initialized, isInClient]);

  return { initialized, isInClient, profile, error, sendMessage, closeWindow };
};
