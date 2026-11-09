import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/common/Navbar";
import BannerAOC from "../components/common/BannerAOC";
import Footer from "../components/common/Footer";
import { useLiff } from "../hooks/useLiff";

// 1. กำหนด Type Structure สำหรับข้อมูล Scenario และ Choice
interface Choice {
  id: 'A' | 'B' | 'C';
  text: string;
  isScamTrap: boolean;
  feedback: string;
  explanation: string;
  legalNote: string;
}

interface Scenario {
  id: number;
  title: string;
  senderName: string;
  senderAvatar: string;
  botInitialMessages: string[];
  simulation: {
    message: string;
    events: {
      actionLabel: string;
      dangerMessage: string;
    }[];
  };
  choices: Choice[];
}

interface ChatItem {
  sender: 'bot' | 'user';
  text: string;
}

// 2. Mock Data สำหรับจำลองสถานการณ์
const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "กรณีที่ 1: คืนเงินค่าประกันมิเตอร์ไฟฟ้า",
    senderName: "การไฟฟ้าส่วนภูมิภาค (Official ปลอม)",
    senderAvatar: "⚡",
    botInitialMessages: [
      "เรียนคุณลูกค้า เนื่องด้วยนโยบายคืนเงินค่าประกันการใช้ไฟฟ้าประจำปี",
      "ระบบพบว่าท่านมียอดเงินคืนคงค้าง 3,250 บาท",
      "โปรดดาวน์โหลดแอปพลิเคชันเพื่อยืนยันตัวตนและรับเงินคืนทันที: http://pea-refund.online/app.apk"
    ],
    simulation: {
      message: "คุณมีเงินคืนค่าประกันไฟฟ้าค้างอยู่ แตะลิงก์เพื่อรับเงินคืนทันที",
      events: [
        {
          actionLabel: "pea-refund.example/claim",
          dangerMessage: "โดเมนนี้ไม่ใช่ช่องทางทางการ อย่ากรอกข้อมูล ตรวจสอบสิทธิ์ผ่านแอปหรือเว็บไซต์ทางการด้วยตนเอง"
        },
        {
          actionLabel: "ดาวน์โหลดแอปเพื่อรับเงินคืน",
          dangerMessage: "อย่าติดตั้งไฟล์แอปจากลิงก์ในข้อความ เพราะแอปอาจขอสิทธิ์ควบคุมอุปกรณ์หรือเข้าถึงข้อมูล"
        },
        {
          actionLabel: "กรอกรหัส OTP เพื่อยืนยัน",
          dangerMessage: "อย่าเปิดเผยรหัส OTP ให้ผู้ติดต่อหรือกรอกในหน้าเว็บที่เปิดจากลิงก์ข้อความ"
        }
      ]
    },
    choices: [
      {
        id: 'A',
        text: "กดลิงก์ทันที เพราะอยากได้เงินคืน และกลัวเสียสิทธิ์",
        isScamTrap: true,
        feedback: "อันตรายมาก! โดนหลอกแล้ว",
        explanation: "การดาวน์โหลดไฟล์ .apk จากภายนอก Store เป็นเทคนิคของมิจฉาชีพ เพื่อขอสิทธิ์ 'Accessibility Service' ในการเข้าควบคุมโทรศัพท์และโอนเงินออกจากบัญชี",
        legalNote: "การส่งลิงก์หลอกติดตั้งมัลแวร์ เข้าข่ายความผิดตาม พ.ร.บ.คอมพิวเตอร์ฯ มาตรา 14 (นำเข้าข้อมูลเท็จ) และ พ.ร.ก.มาตรการป้องกันและปราบปรามอาชญากรรมทางเทคโนโลยี"
      },
      {
        id: 'B',
        text: "โทรสอบถามคอลเซ็นเตอร์ 1129 หรือตรวจสอบผ่านแอป PEA Smart Plus โดยตรง",
        isScamTrap: false,
        feedback: "ถูกต้อง! ปลอดภัย 100%",
        explanation: "หน่วยงานรัฐวิสาหกิจไม่มีนโยบายส่ง SMS หรือทักแชตแจกลิงก์ดาวน์โหลดไฟล์ .apk การตรวจสอบผ่านช่องทางทางการโดยตรงคือวิธีป้องกันที่ดีที่สุด",
        legalNote: "หากพบลิงก์หรือเว็บไซต์ลักษณะนี้ สามารถแจ้งเบาะแสได้ที่ศูนย์ AOC 1441 ทันที"
      }
    ]
  },
  {
    id: 2,
    title: "กรณีที่ 2: แอบอ้างเป็นตำรวจหรือธนาคาร",
    senderName: "เจ้าหน้าที่ (แอบอ้าง)",
    senderAvatar: "📞",
    botInitialMessages: [
      "เจ้าหน้าที่แจ้งว่าบัญชีของคุณเกี่ยวข้องกับคดีฟอกเงิน",
      "เพื่อยืนยันความบริสุทธิ์ ให้โอนเงินไปยังบัญชีตรวจสอบ และห้ามบอกใคร",
      "อีกสักครู่จะมีวิดีโอคอลและส่งลิงก์ให้ติดตั้งแอปเพื่อดำเนินการ"
    ],
    simulation: {
      message: "เจ้าหน้าที่สั่งให้โอนเงินไปยังบัญชีตรวจสอบทันที และห้ามวางสาย",
      events: [
        {
          actionLabel: "ยืนยันการโอนเงิน",
          dangerMessage: "หยุดก่อน! หน่วยงานรัฐและธนาคารไม่มีนโยบายให้โอนเงินไปบัญชีตรวจสอบ วางสายแล้วโทรกลับเบอร์ทางการ"
        },
        {
          actionLabel: "กรอกรหัส OTP ให้เจ้าหน้าที่",
          dangerMessage: "อย่าบอกรหัส OTP ให้ใคร รหัสนี้ใช้ยืนยันการเข้าถึงบัญชีหรือทำธุรกรรม"
        },
        {
          actionLabel: "ติดตั้งแอปเพื่อให้เจ้าหน้าที่ช่วยเหลือ",
          dangerMessage: "อย่าติดตั้งแอปหรือเปิดสิทธิ์ควบคุมเครื่องตามคำแนะนำจากผู้โทรที่ไม่ได้ตรวจสอบ"
        }
      ]
    },
    choices: [
      {
        id: 'A',
        text: "ทำตามขั้นตอนและโอนเงินไปยังบัญชีที่แจ้งมา",
        isScamTrap: true,
        feedback: "อย่าโอนเงินให้ผู้ที่โทรมา",
        explanation: "การข่มขู่ให้กลัวคดี เร่งให้โอนเงิน หรือสั่งให้เก็บเรื่องเป็นความลับ เป็นสัญญาณอันตราย วางสายแล้วติดต่อหน่วยงานหรือธนาคารจากช่องทางทางการด้วยตนเอง",
        legalNote: "หากมีความเสียหาย ให้ติดต่อธนาคารทันทีและโทร AOC 1441 เพื่อขอคำแนะนำ"
      },
      {
        id: 'B',
        text: "ส่งรหัส OTP ให้เจ้าหน้าที่เพื่อยืนยันตัวตน",
        isScamTrap: true,
        feedback: "อย่าเปิดเผยรหัส OTP",
        explanation: "รหัส OTP ใช้ยืนยันการทำรายการและการเข้าถึงบัญชี ไม่มีเหตุผลที่ควรบอกรหัสนี้ให้ผู้ที่โทรหรือแชตมา แม้อ้างว่าเป็นเจ้าหน้าที่ก็ตาม",
        legalNote: "เก็บข้อความ เบอร์โทร และหลักฐานการติดต่อไว้ หากสงสัยว่าเป็นการหลอกลวงให้แจ้งธนาคารและ AOC 1441"
      },
      {
        id: 'C',
        text: "วางสาย ไม่กดลิงก์ แล้วโทรตรวจสอบกับธนาคารหรือหน่วยงานจากเบอร์ทางการ",
        isScamTrap: false,
        feedback: "ถูกต้อง! ตรวจสอบผ่านช่องทางทางการ",
        explanation: "การวางสายช่วยหยุดแรงกดดัน อย่าติดตั้งแอปจากลิงก์ที่ได้รับ และค้นหาช่องทางติดต่อจากเว็บไซต์หรือแอปทางการด้วยตนเอง",
        legalNote: "หากโอนเงินไปแล้ว ให้รีบติดต่อธนาคารทันทีและโทร AOC 1441"
      }
    ]
  },
  {
    id: 3,
    title: "กรณีที่ 3: SMS แจ้งพัสดุตกค้าง",
    senderName: "บริษัทขนส่ง (แอบอ้าง)",
    senderAvatar: "📦",
    botInitialMessages: [
      "พัสดุของคุณจัดส่งไม่สำเร็จ เนื่องจากที่อยู่ไม่ครบถ้วน",
      "กรุณาชำระค่าดำเนินการจำนวน 12 บาท และกรอกข้อมูลบัตรที่ลิงก์นี้",
      "หากไม่ชำระภายในวันนี้ พัสดุจะถูกส่งคืนผู้ขาย"
    ],
    simulation: {
      message: "พัสดุของคุณตกค้าง กรุณาชำระค่าธรรมเนียมเล็กน้อยเพื่อจัดส่งใหม่",
      events: [
        {
          actionLabel: "parcel-track.example/pay",
          dangerMessage: "อันตราย! ลิงก์อาจพาไปหน้าเว็บปลอม ตรวจสอบเลขพัสดุในแอปหรือเว็บไซต์ทางการด้วยตนเอง"
        },
        {
          actionLabel: "กรอกข้อมูลบัตรเพื่อจ่ายค่าธรรมเนียม",
          dangerMessage: "อย่ากรอกข้อมูลบัตรหรือรหัสความปลอดภัยในหน้าเว็บจากข้อความที่ไม่แน่ใจ"
        },
        {
          actionLabel: "ใส่ OTP เพื่อยืนยันการจัดส่ง",
          dangerMessage: "OTP ไม่ใช่รหัสติดตามพัสดุ อย่ากรอกหรือบอกรหัสนี้ให้ผู้อื่น"
        }
      ]
    },
    choices: [
      {
        id: 'A',
        text: "เปิดลิงก์และกรอกข้อมูลบัตรเพื่อจ่ายค่าธรรมเนียมเล็กน้อย",
        isScamTrap: true,
        feedback: "ระวังลิงก์ปลอมและการขโมยข้อมูลบัตร",
        explanation: "ข้อความที่เร่งให้จ่ายเงินหรือกรอกข้อมูลผ่านลิงก์อาจเป็นฟิชชิ่ง อย่ากรอกเลขบัตร รหัสผ่าน หรือ OTP จากลิงก์ที่ไม่แน่ใจ",
        legalNote: "ตรวจสอบสถานะพัสดุในแอปหรือเว็บไซต์ทางการของบริษัทขนส่ง โดยพิมพ์ที่อยู่เว็บไซต์เอง"
      },
      {
        id: 'B',
        text: "ตรวจสอบเลขพัสดุในแอปหรือเว็บไซต์ทางการ โดยไม่กดลิงก์ใน SMS",
        isScamTrap: false,
        feedback: "ถูกต้อง! ตรวจสอบพัสดุโดยตรง",
        explanation: "ช่องทางทางการช่วยยืนยันได้ว่ามีพัสดุจริงหรือไม่ หากไม่มีเลขพัสดุหรือข้อมูลไม่ตรง อย่าชำระเงินตามข้อความ",
        legalNote: "หากกรอกข้อมูลบัตรไปแล้ว ให้ติดต่อธนาคารทันทีเพื่อระงับหรือเฝ้าระวังรายการ"
      },
      {
        id: 'C',
        text: "ส่งต่อ SMS ให้เพื่อนช่วยกดลิงก์ตรวจสอบแทน",
        isScamTrap: true,
        feedback: "อย่าส่งต่อข้อความที่อาจเป็นลิงก์หลอก",
        explanation: "การส่งต่ออาจทำให้ผู้อื่นตกเป็นเหยื่อได้เช่นกัน ให้ลบหรือรายงานข้อความ และตรวจสอบผ่านช่องทางทางการด้วยตนเอง",
        legalNote: "หากพบข้อความหลอกลวง สามารถเก็บภาพหน้าจอและแจ้งผู้ให้บริการหรือ AOC 1441"
      }
    ]
  },
  {
    id: 4,
    title: "กรณีที่ 4: งานออนไลน์ รายได้ดีแต่ต้องเติมเงิน",
    senderName: "ผู้ชักชวนทำงานออนไลน์",
    senderAvatar: "💼",
    botInitialMessages: [
      "รับงานกดไลก์และรีวิวสินค้า ทำจากที่บ้าน รายได้วันละหลายพันบาท",
      "ช่วงแรกได้รับเงินจริง แต่ตอนนี้ระบบแจ้งว่าต้องเติมเงินเพื่อปลดล็อกงานชุดใหญ่",
      "ถ้าไม่เติมภายในเวลาที่กำหนด เงินที่ทำไว้ทั้งหมดจะถอนออกไม่ได้"
    ],
    simulation: {
      message: "เติมเงินเพื่อปลดล็อกงานและถอนรายได้ของคุณ ก่อนหมดเวลา",
      events: [
        {
          actionLabel: "เติมเงิน 2,000 บาทเพื่อปลดล็อกงาน",
          dangerMessage: "อันตราย! การเรียกเก็บเงินเพื่อรับงานเป็นสัญญาณหลอกลวง อย่าโอนเพิ่ม"
        },
        {
          actionLabel: "จ่ายค่าธรรมเนียมก่อนถอนรายได้",
          dangerMessage: "อย่าจ่ายเงินเพิ่มเพื่อถอนรายได้ที่แสดงในแอปหรือกลุ่มแชตที่ยังตรวจสอบไม่ได้"
        },
        {
          actionLabel: "ส่งบัตรประชาชนเพื่อเปิดรับงาน",
          dangerMessage: "อย่าส่งภาพเอกสารส่วนตัวให้ผู้ชักชวนที่ไม่สามารถยืนยันตัวตนและบริษัทได้"
        }
      ]
    },
    choices: [
      {
        id: 'A',
        text: "เติมเงินเพิ่ม เพราะมีรายได้เข้ามาในช่วงแรกแล้ว",
        isScamTrap: true,
        feedback: "ระวังการหลอกให้เติมเงินต่อเนื่อง",
        explanation: "การให้ผลตอบแทนเล็กน้อยช่วงแรกอาจใช้สร้างความไว้ใจ จากนั้นจะเรียกเงินเพิ่มโดยอ้างว่าต้องปลดล็อกงานหรือถอนรายได้ อย่าโอนเงินเพื่อแลกกับงาน",
        legalNote: "หยุดโอน เก็บแชตและหลักฐานการจ่ายเงิน หากเสียหายให้ติดต่อธนาคารและ AOC 1441"
      },
      {
        id: 'B',
        text: "ขอกู้เงินมาเติมก่อน เพราะผู้ดูแลรับรองว่าจะได้เงินคืน",
        isScamTrap: true,
        feedback: "อย่ากู้หรือโอนเงินตามคำรับรอง",
        explanation: "คำรับรองในแชตไม่ใช่หลักประกัน และการกู้มาเติมเงินอาจทำให้เสียหายมากขึ้น หยุดทำรายการและปรึกษาคนที่ไว้ใจได้",
        legalNote: "เก็บหลักฐานการสนทนา โปรไฟล์ผู้ชักชวน และรายการโอนเพื่อใช้ประกอบการขอความช่วยเหลือ"
      },
      {
        id: 'C',
        text: "หยุดโอนเงิน ตรวจสอบบริษัทและประกาศรับสมัครจากแหล่งทางการ",
        isScamTrap: false,
        feedback: "ถูกต้อง! งานไม่ควรบังคับให้จ่ายเงินก่อน",
        explanation: "ตรวจสอบชื่อบริษัท ช่องทางติดต่อ และรายละเอียดงานจากแหล่งที่เชื่อถือได้ อย่าให้ข้อมูลส่วนตัวหรือโอนเงินเพื่อรับงานหรือถอนค่าจ้าง",
        legalNote: "หากโอนเงินไปแล้ว ให้รีบติดต่อธนาคารและ AOC 1441 พร้อมเก็บหลักฐานทั้งหมด"
      }
    ]
  },
  {
    id: 5,
    title: "กรณีที่ 5: ชวนลงทุน ผลตอบแทนสูง รับประกันกำไร",
    senderName: "ที่ปรึกษาการลงทุน (ไม่น่าเชื่อถือ)",
    senderAvatar: "📈",
    botInitialMessages: [
      "มีโอกาสลงทุนรอบพิเศษ รับประกันกำไร 20% ต่อเดือน ไม่มีความเสี่ยง",
      "สมาชิกในกลุ่มถอนกำไรได้จริง ดูสลิปและรีวิวจากผู้ลงทุนได้เลย",
      "ต้องโอนเงินภายในคืนนี้เพื่อรับสิทธิ์ และห้ามบอกคนนอกกลุ่ม"
    ],
    simulation: {
      message: "โอนเงินเพื่อจองสิทธิ์ลงทุนรอบพิเศษ รับประกันกำไรสูง ไม่มีความเสี่ยง",
      events: [
        {
          actionLabel: "โอนเงินลงทุนเพื่อจองสิทธิ์",
          dangerMessage: "หยุดก่อน! อย่าโอนเงินเพราะถูกเร่ง ตรวจสอบผู้ให้บริการกับหน่วยงานกำกับดูแลจากช่องทางทางการ"
        },
        {
          actionLabel: "จ่ายภาษีเพื่อถอนกำไร",
          dangerMessage: "ระวังการเรียกเก็บเงินเพิ่มเพื่อถอนกำไร ตรวจสอบสถานะการลงทุนกับผู้ให้บริการผ่านช่องทางทางการ"
        },
        {
          actionLabel: "กรอกข้อมูลส่วนตัวเพื่อเปิดพอร์ต",
          dangerMessage: "อย่าส่งข้อมูลบัตร บัญชี หรือ OTP ให้ผู้ชักชวนผ่านแชตที่ยังไม่ได้ตรวจสอบ"
        }
      ]
    },
    choices: [
      {
        id: 'A',
        text: "เชื่อรีวิวและสลิปในกลุ่ม แล้วโอนเงินจำนวนเล็กน้อยไปทดลอง",
        isScamTrap: true,
        feedback: "รีวิวและสลิปไม่ยืนยันว่าการลงทุนมีอยู่จริง",
        explanation: "ภาพหลักฐานหรือคำยืนยันจากสมาชิกในกลุ่มอาจจัดทำขึ้นได้ ผลตอบแทนสูงที่รับประกันและการเร่งให้โอนเป็นสัญญาณเตือน ควรตรวจสอบก่อนลงทุนทุกครั้ง",
        legalNote: "ตรวจสอบผู้ให้บริการและคำเตือนจากหน่วยงานกำกับดูแลผ่านเว็บไซต์ทางการก่อนตัดสินใจ"
      },
      {
        id: 'B',
        text: "ตรวจสอบใบอนุญาตและข้อมูลผู้ให้บริการจากแหล่งทางการ และไม่โอนเพราะถูกเร่ง",
        isScamTrap: false,
        feedback: "ถูกต้อง! ตรวจสอบก่อนลงทุน",
        explanation: "ไม่มีการลงทุนที่รับประกันกำไรสูงโดยไม่มีความเสี่ยง ให้ค้นหาข้อมูลจากหน่วยงานกำกับดูแลและใช้เวลาตรวจสอบ ไม่ทำตามแรงกดดันในแชต",
        legalNote: "หากโอนเงินแล้ว ให้ติดต่อธนาคารทันที เก็บหลักฐาน และขอคำแนะนำจาก AOC 1441"
      },
      {
        id: 'C',
        text: "ส่งภาพบัตรประชาชนและข้อมูลบัญชีให้ที่ปรึกษาเปิดพอร์ตให้เร็วขึ้น",
        isScamTrap: true,
        feedback: "อย่าส่งข้อมูลส่วนตัวให้ผู้ชักชวนที่ยังไม่ตรวจสอบ",
        explanation: "ข้อมูลบัตรประชาชนและบัญชีอาจถูกนำไปใช้โดยไม่ได้รับอนุญาต อย่าส่งเอกสารหรือรหัสยืนยันผ่านแชตที่ไม่ใช่ช่องทางทางการ",
        legalNote: "ถ้าส่งข้อมูลไปแล้ว ให้ติดต่อธนาคารและติดตามความเคลื่อนไหวของบัญชี พร้อมเก็บหลักฐานการติดต่อ"
      }
    ]
  },
  {
    id: 6,
    title: "กรณีที่ 6: ซื้อขายออนไลน์และสลิปโอนเงินปลอม",
    senderName: "ผู้ซื้อสินค้าออนไลน์",
    senderAvatar: "🛍️",
    botInitialMessages: [
      "ผู้ซื้อส่งสลิปและบอกว่าโอนเงินเกิน ขอให้คืนส่วนต่างทันที",
      "พร้อมส่งภาพหน้าจอรายการโอนมาให้ แต่ยอดเงินยังไม่ปรากฏในบัญชีของคุณ",
      "ผู้ซื้อเร่งให้คืนเงินก่อนที่ขนส่งจะมารับสินค้า"
    ],
    simulation: {
      message: "ผู้ซื้อแจ้งว่าโอนเงินเกิน ขอให้คืนส่วนต่างทันที แต่ยอดยังไม่เข้าบัญชี",
      events: [
        {
          actionLabel: "คืนเงินส่วนต่างไปยังบัญชีที่ส่งมา",
          dangerMessage: "อย่าเพิ่งคืนเงิน! ตรวจสอบยอดเงินจริงในแอปธนาคารที่เปิดด้วยตนเองก่อน"
        },
        {
          actionLabel: "กดลิงก์ตรวจสอบสถานะการชำระเงิน",
          dangerMessage: "อย่ากดลิงก์จากคู่สนทนาเพื่อตรวจสอบยอด ใช้แอปธนาคารหรือแพลตฟอร์มที่เปิดเอง"
        },
        {
          actionLabel: "ส่งสินค้าเพราะเห็นสลิปแล้ว",
          dangerMessage: "สลิปหรือภาพหน้าจอปลอมได้ รอจนยอดเงินจริงเข้าบัญชีก่อนส่งสินค้า"
        }
      ]
    },
    choices: [
      {
        id: 'A',
        text: "ตรวจสอบยอดเงินจริงในแอปธนาคารก่อน และยังไม่ส่งสินค้าหรือคืนเงิน",
        isScamTrap: false,
        feedback: "ถูกต้อง! ยืนยันยอดจากบัญชีจริง",
        explanation: "สลิปหรือภาพหน้าจอปลอมได้ ให้เปิดแอปธนาคารด้วยตนเองและตรวจสอบรายการเงินจริงก่อนส่งสินค้า คืนเงิน หรือทำธุรกรรมใด ๆ",
        legalNote: "เก็บข้อความและหลักฐานการซื้อขายไว้ และใช้ระบบชำระเงินหรือช่องทางของแพลตฟอร์ม"
      },
      {
        id: 'B',
        text: "คืนเงินส่วนเกินทันทีตามเลขบัญชีที่ผู้ซื้อส่งมา",
        isScamTrap: true,
        feedback: "อย่าโอนคืนจากสลิปที่ยังไม่ยืนยัน",
        explanation: "หากไม่มีเงินเข้าจริง การโอนคืนคือการเสียเงินของตนเอง อย่าใช้เลขบัญชีที่คู่สนทนาส่งมาโดยไม่ตรวจสอบต้นทางและรายการ",
        legalNote: "หากโอนเงินไปแล้ว ให้รีบติดต่อธนาคาร เก็บหลักฐานการสนทนาและการโอน"
      },
      {
        id: 'C',
        text: "กดลิงก์ที่ผู้ซื้อส่งมาเพื่อตรวจสอบสถานะการชำระเงิน",
        isScamTrap: true,
        feedback: "อย่ากดลิงก์ตรวจสอบการจ่ายเงินจากคู่สนทนา",
        explanation: "ลิงก์อาจพาไปยังหน้าเว็บปลอมเพื่อขโมยรหัสผ่านหรือข้อมูลบัตร ตรวจสอบรายการผ่านแอปธนาคารและแพลตฟอร์มที่ใช้งานโดยตรง",
        legalNote: "หากกรอกข้อมูลบัญชีหรือรหัสผ่านไปแล้ว ให้เปลี่ยนรหัสและติดต่อธนาคารทันที"
      }
    ]
  }
];

export const ScamSimulator: React.FC = () => {
  const { initialized, isInClient, profile, sendMessage, closeWindow, error: liffError } = useLiff();
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([]);
  const [simulationResult, setSimulationResult] = useState<number | "safe" | null>(null);
  const mobileSimulatorRef = useRef<HTMLElement>(null);
  const [liffActionError, setLiffActionError] = useState("");

  const scenario = SCENARIOS[currentScenarioIndex];
  const completedAllScenarios =
    currentScenarioIndex === SCENARIOS.length - 1 && selectedChoice !== null;

  // เริ่มต้นบทสนทนาเมื่อโหลด Scenario
  useEffect(() => {
    if (scenario) {
      const initialChats: ChatItem[] = scenario.botInitialMessages.map((msg) => ({
        sender: 'bot',
        text: msg
      }));
      setChatHistory(initialChats);
      setSelectedChoice(null);
      setSimulationResult(null);
    }
  }, [scenario]);

  useEffect(() => {
    if (completedAllScenarios) {
      mobileSimulatorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [completedAllScenarios]);

  // ฟังก์ชันเมื่อผู้เล่นกดเลือกคำตอบ
  const handleSelectChoice = (choice: Choice) => {
    if (selectedChoice) return;

    setChatHistory((prev) => [
      ...prev,
      { sender: 'user', text: choice.text }
    ]);
    setSelectedChoice(choice);
  };

  const handleNextScenario = () => {
    setSelectedChoice(null);
    setSimulationResult(null);
    setCurrentScenarioIndex((index) => (index + 1) % SCENARIOS.length);
  };

  const handleSimulationAction = (eventIndex: number) => {
    setSimulationResult(eventIndex);
  };

  // ส่งผลการทดสอบกลับเข้าห้องแชต LINE
  const handleSendSummaryToChat = async () => {
    if (!selectedChoice) return;

    try {
      setLiffActionError("");
      await sendMessage(
        `[ผลทดสอบ Scam Simulator - รู้ทัน]\nหัวข้อ: ${scenario.title}\nผลลัพธ์: ${selectedChoice.feedback}\nข้อแนะนำ: ${selectedChoice.explanation}`,
      );
      closeWindow();
    } catch (sendError) {
      console.error("LIFF Send Message Error:", sendError);
      setLiffActionError(
        sendError instanceof Error
          ? sendError.message
          : "ส่งผลสรุปเข้า LINE ไม่สำเร็จ กรุณาลองอีกครั้ง",
      );
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-[#faf8f2] flex flex-col items-start leading-[normal] tracking-[normal] font-['Noto_Sans_Thai']">
      <Navbar />
      <BannerAOC />

      <main className="w-full flex-1 px-20 py-14 box-border mq1050:px-10 mq750:px-6 mq750:py-10 mq450:px-4">
        <section className="w-full max-w-6xl mx-auto">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-bold tracking-wide text-[#8a6b00]">
              SCAM SIMULATOR
            </p>
            <h1 className="m-0 text-3xl font-extrabold leading-tight text-[#191919] mq450:text-2xl">
              ฝึกสังเกต ก่อนตกเป็นเหยื่อ
            </h1>
            <p className="mt-3 mb-0 text-base leading-7 text-[#65645e] mq450:text-sm">
              ลองอ่านสถานการณ์จำลอง แล้วเลือกวิธีรับมือที่ปลอดภัยที่สุด
              เพื่อเรียนรู้สัญญาณเตือนของมิจฉาชีพ
            </p>
          </div>

          <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] items-start gap-6 mq750:grid-cols-1">
            <section className="overflow-hidden rounded-3xl border border-[#e3e0d6] bg-white shadow-sm">
              <header className="flex items-center justify-between gap-4 border-b border-[#e3e0d6] px-6 py-5 mq450:px-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff4c2] text-xl">
                    🛡️
                  </span>
                  <div className="min-w-0">
                    <h2 className="m-0 text-lg font-bold text-[#191919] mq450:text-base">
                      ห้องซ้อมรับมือ Scam
                    </h2>
                    <p className="m-0 mt-1 text-xs text-[#65645e]">
                      {initialized
                        ? isInClient
                          ? "เชื่อมต่อ LINE แล้ว"
                          : "เปิดผ่าน LINE เพื่อส่งผลสรุป"
                        : liffError || "กำลังเชื่อมต่อ LIFF..."}
                    </p>
                  </div>
                </div>
                {profile?.pictureUrl && (
                  <img
                    src={profile.pictureUrl}
                    alt={profile.displayName || "User Avatar"}
                    className="h-10 w-10 shrink-0 rounded-full border border-[#e3e0d6]"
                  />
                )}
              </header>

              <div className="space-y-4 bg-[#f7f6f1] p-6 mq450:p-4">
                <div
                  className="h-1.5 overflow-hidden rounded-full bg-[#e3e0d6]"
                  role="progressbar"
                  aria-label="ความคืบหน้าสถานการณ์"
                  aria-valuemin={1}
                  aria-valuemax={SCENARIOS.length}
                  aria-valuenow={currentScenarioIndex + 1}
                >
                  <div
                    className="h-full rounded-full bg-[#ffd43b] transition-all"
                    style={{
                      width: `${((currentScenarioIndex + 1) / SCENARIOS.length) * 100}%`
                    }}
                  />
                </div>
                <p className="m-0 text-center text-xs text-[#65645e]">
                  สถานการณ์ที่ {currentScenarioIndex + 1} จาก {SCENARIOS.length}
                </p>
                <div className="text-center">
                  <span className="inline-flex rounded-full bg-[#fff0a8] px-4 py-1.5 text-xs font-bold text-[#594500]">
                    {scenario.title}
                  </span>
                </div>

                {chatHistory.map((item, idx) => {
                  const isBot = item.sender === 'bot';
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 ${
                        isBot ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      {isBot && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-base shadow-sm">
                          {scenario.senderAvatar}
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                          isBot
                            ? 'rounded-tl-sm border border-[#e3e0d6] bg-white text-[#34332f]'
                            : 'rounded-tr-sm bg-[#191919] text-white'
                        }`}
                      >
                        {isBot && (
                          <p className="m-0 mb-1 text-xs font-bold text-[#9a2929]">
                            {scenario.senderName}
                          </p>
                        )}
                        <p className="m-0 break-words">{item.text}</p>
                      </div>
                    </div>
                  );
                })}

                {selectedChoice && (
                  <div
                    className={`rounded-2xl border p-5 transition-all mq450:p-4 ${
                      selectedChoice.isScamTrap
                        ? 'border-[#f2c5c2] bg-[#fff3f1] text-[#742c27]'
                        : 'border-[#b8d7c5] bg-[#eff8f1] text-[#245b39]'
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2 font-bold">
                      <span>{selectedChoice.isScamTrap ? '❌' : '✅'}</span>
                      <span>{selectedChoice.feedback}</span>
                    </div>
                    <p className="mb-3 mt-0 text-sm leading-6 text-[#45443f]">
                      {selectedChoice.explanation}
                    </p>
                    <div className="rounded-xl border border-[#e3e0d6] bg-white p-3 text-xs leading-5 text-[#65645e]">
                      <span className="font-bold text-[#191919]">
                        📌 ข้อกฎหมายที่เกี่ยวข้อง:{" "}
                      </span>
                      {selectedChoice.legalNote}
                    </div>
                    <button
                      onClick={handleSendSummaryToChat}
                      disabled={!initialized || !isInClient}
                      className="mt-4 w-full cursor-pointer rounded-xl bg-[#191919] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#4d4d4d] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {initialized && isInClient
                        ? "ส่งผลสรุปกลับเข้าห้องแชต"
                        : "เปิดผ่าน LINE เพื่อส่งผลสรุป"}
                    </button>
                    {(liffError || liffActionError) && (
                      <p className="mb-0 mt-2 text-xs text-[#9a2929]" role="alert">
                        {liffActionError || liffError}
                      </p>
                    )}
                    <button
                      onClick={handleNextScenario}
                      className="mt-2 w-full cursor-pointer rounded-xl bg-[#ffd43b] px-4 py-3 text-sm font-bold text-[#191919] transition-colors hover:bg-[#e6ba21] active:scale-[0.99]"
                    >
                      {currentScenarioIndex === SCENARIOS.length - 1
                        ? "เริ่มฝึกใหม่อีกครั้ง"
                        : "ไปสถานการณ์ถัดไป"}
                    </button>
                  </div>
                )}
              </div>
            </section>

            <section className="rounded-3xl border border-[#e3e0d6] bg-white p-6 shadow-sm mq450:p-4">
              <div className="mb-5">
                <p className="mb-2 text-xs font-bold tracking-wide text-[#8a6b00]">
                  เลือกวิธีรับมือ
                </p>
                <h2 className="m-0 text-lg font-bold leading-7 text-[#191919]">
                  หากเจอข้อความลักษณะนี้ คุณจะดำเนินการอย่างไร?
                </h2>
              </div>
              <div className="space-y-3">
                {scenario.choices.map((choice) => (
                  <button
                    key={choice.id}
                    disabled={selectedChoice !== null}
                    onClick={() => handleSelectChoice(choice)}
                    className={`w-full rounded-2xl border p-4 text-left text-sm leading-6 transition-colors ${
                      selectedChoice
                        ? 'cursor-not-allowed border-[#e3e0d6] bg-[#f7f6f1] text-[#8a8983]'
                        : 'cursor-pointer border-[#e3e0d6] bg-white text-[#34332f] hover:border-[#d3ae25] hover:bg-[#fffbee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a6b00]'
                    }`}
                  >
                    <span className="mb-2 block text-xs font-extrabold tracking-wide text-[#8a6b00]">
                      ตัวเลือก {choice.id}
                    </span>
                    {choice.text}
                  </button>
                ))}
              </div>
              <p className="mb-0 mt-5 border-t border-[#e3e0d6] pt-4 text-xs leading-5 text-[#65645e]">
                เคล็ดลับ: อย่ากดลิงก์หรือทำตามคำเร่งเร้า
                ตรวจสอบกับหน่วยงานผ่านช่องทางทางการด้วยตนเอง
              </p>
            </section>
          </div>

          {completedAllScenarios && (
            <section
              ref={mobileSimulatorRef}
              style={{ scrollMarginTop: "7rem" }}
              className="mt-8 overflow-hidden rounded-3xl border border-[#e3e0d6] bg-white shadow-sm"
            >
              <div className="border-b border-[#e3e0d6] px-6 py-5 mq450:px-4">
                <p className="mb-1 text-xs font-bold tracking-wide text-[#8a6b00]">
                  จบครบทั้ง 6 สถานการณ์แล้ว
                </p>
                <h2 className="m-0 text-xl font-bold text-[#191919] mq450:text-lg">
                  ทดลองเหตุการณ์เสี่ยงบนมือถือจำลอง
                </h2>
                <p className="mb-0 mt-2 text-sm leading-6 text-[#65645e]">
                  แตะลิงก์หรือปุ่มในหน้าจอจำลองเพื่อเรียนรู้สัญญาณอันตราย
                  การทดลองนี้ไม่เปิดเว็บไซต์และไม่ทำธุรกรรมจริง
                </p>
              </div>

              <div className="flex flex-col items-center gap-5 bg-[#f7f6f1] p-6 mq450:p-4">
                <div className="w-full max-w-[19rem] rounded-[2.5rem] border-[6px] border-[#292929] bg-[#292929] p-1.5 shadow-xl">
                  <div className="overflow-hidden rounded-[2rem] bg-white">
                    <div className="flex items-center justify-between bg-[#f4f3ef] px-5 py-2 text-[10px] font-semibold text-[#34332f]">
                      <span>9:41</span>
                      <span>●●●  Wi-Fi  ▰</span>
                    </div>
                    <div className="flex items-center gap-2 border-b border-[#e3e0d6] px-4 py-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0a8]">
                        {scenario.senderAvatar}
                      </span>
                      <div className="min-w-0">
                        <p className="m-0 truncate text-xs font-bold text-[#191919]">
                          {scenario.senderName}
                        </p>
                        <p className="m-0 text-[10px] text-[#65645e]">
                          ข้อความใหม่ · ตอนนี้
                        </p>
                      </div>
                    </div>
                    <div className="min-h-64 space-y-3 bg-[#f4f3ef] p-4">
                      <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-[#e3e0d6] bg-white p-3 text-xs leading-5 text-[#34332f] shadow-sm">
                        {scenario.simulation.message}
                      </div>
                      {scenario.simulation.events.map((event, eventIndex) => (
                        <React.Fragment key={event.actionLabel}>
                          <button
                            type="button"
                            onClick={() => handleSimulationAction(eventIndex)}
                            className="block max-w-[90%] cursor-pointer rounded-2xl rounded-tl-sm border border-[#e3e0d6] bg-white p-3 text-left text-xs font-semibold leading-5 text-[#1769aa] underline decoration-dotted underline-offset-2 shadow-sm hover:bg-[#fffbee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a6b00]"
                          >
                            {event.actionLabel}
                          </button>

                          {simulationResult === eventIndex && (
                            <div
                              role="alert"
                              className="rounded-2xl border border-[#e9b7b2] bg-[#fff1ef] p-3 text-xs leading-5 text-[#742c27]"
                            >
                              <p className="m-0 mb-1 font-extrabold">
                                ⚠️ อันตราย — หยุดก่อน!
                              </p>
                              <p className="m-0">{event.dangerMessage}</p>
                            </div>
                          )}
                        </React.Fragment>
                      ))}

                      {simulationResult === "safe" && (
                        <div
                          role="status"
                          className="rounded-2xl border border-[#b8d7c5] bg-[#eff8f1] p-3 text-xs leading-5 text-[#245b39]"
                        >
                          <p className="m-0 mb-1 font-extrabold">✅ ทำได้ดี</p>
                          <p className="m-0">
                            อย่ากดลิงก์หรือทำรายการจากข้อความนี้
                            ให้เปิดแอปหรือเว็บไซต์ทางการด้วยตนเองเพื่อตรวจสอบ
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center bg-[#f4f3ef] pb-2">
                      <span className="h-1 w-20 rounded-full bg-[#292929]" />
                    </div>
                  </div>
                </div>

                <div className="flex w-full max-w-[19rem] flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setSimulationResult("safe")}
                    className="w-full cursor-pointer rounded-xl bg-[#191919] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#4d4d4d]"
                  >
                    ตรวจสอบผ่านช่องทางทางการ
                  </button>
                  <p className="m-0 text-center text-xs leading-5 text-[#65645e]">
                    ลองแตะเหตุการณ์ในมือถือเพื่อดูคำเตือนแต่ละจุด
                  </p>
                </div>
              </div>
            </section>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ScamSimulator;
