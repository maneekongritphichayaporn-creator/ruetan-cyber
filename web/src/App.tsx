import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";                       
import ScamTypes from "./pages/ScamTypes";             
import ReportingGuide from "./pages/ReportingGuide";   
import KnowledgeBase from "./pages/KnowledgeBase";     
import ReportForm from "./pages/ReportForm";           
import ScamSimulator from "./pages/ScamSimulator";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (location.hash) {
      const frame = window.requestAnimationFrame(() => {
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, location.hash, pathname]);

  useEffect(() => {
    let title = "ศูนย์รวมข้อมูลเตือนภัยกลโกงออนไลน์";
    let metaDescription = "ศูนย์รวมข้อมูล รู้ทันกลโกง แจ้งเบาะแส และวิธีรับมือภัยไซเบอร์";

    switch (pathname) {
      case "/":
        title = "หน้าแรก | ศูนย์รวมข้อมูลเตือนภัยกลโกง";
        metaDescription = "หน้าหลักเตือนภัยกลโกงออนไลน์ แนวทางป้องกัน และสายด่วน AOC 1441";
        break;
      case "/scam-types":
        title = "รูปแบบกลโกง | รู้ทันมิจฉาชีพ";
        metaDescription = "รวมรูปแบบกลโกงยอดฮิต สัญญาณเตือนภัย (Red Flags) และพฤติการณ์มิจฉาชีพ";
        break;
      case "/reporting-guide":
        title = "วิธีรับมือและแจ้งความ | ขั้นตอนระงับบัญชี";
        metaDescription = "ขั้นตอนการแจ้งความออนไลน์ การขอ Bank Case ID และการประสานงาน AOC 1441";
        break;
      case "/knowledge-base":
        title = "คลังความรู้และสถิติภัยออนไลน์";
        metaDescription = "คลังความรู้ กฎหมายที่เกี่ยวข้อง สถิติภัยออนไลน์ และแนวทางคุ้มครองตนเอง";
        break;
      case "/report-form":
        title = "แจ้งเบาะแสภัยออนไลน์";
        metaDescription = "แบบฟอร์มแจ้งเบาะแสภัยไซเบอร์ ส่งต่อข้อมูลเพื่อความปลอดภัยของสังคม";
        break;
      case "/scam-simulator":
        title = "จำลองสถานการณ์กลโกง | รู้ทันมิจฉาชีพ";
        metaDescription = "ฝึกสังเกตกลโกงออนไลน์ผ่านสถานการณ์จำลองและเรียนรู้วิธีรับมืออย่างปลอดภัย";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {/* 1. หน้าหลัก (scam_project) */}
      <Route path="/" element={<Home />} />

      {/* 2. รูปแบบกลโกง (scam_project2) */}
      <Route path="/scam-types" element={<ScamTypes />} />

      {/* 3. วิธีรับมือและขั้นตอนแจ้งความ (scam_project3) */}
      <Route path="/reporting-guide" element={<ReportingGuide />} />

      {/* 4. คลังความรู้และสถิติ (scam_project4) */}
      <Route path="/knowledge-base" element={<KnowledgeBase />} />

      {/* 5. ฟอร์มแจ้งเบาะแส (scam_project5) */}
      <Route path="/report-form" element={<ReportForm />} />

      <Route path="/scam-simulator" element={<ScamSimulator />} />

      {/* กรณีใส่ URL ผิด ให้ย้อนกลับหน้าแรก */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;