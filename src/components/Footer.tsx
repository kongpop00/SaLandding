import React from 'react';
import { Calculator, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
               <img src="/LogoSA.png" alt="S.A. Accounting - สำนักงานบัญชีมืออาชีพ บริการบัญชีและภาษีครบวงจร" className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-bold">S.A. Accounting</h3>
                <p className="text-gray-400">บริษัท เอส.เอ.การบัญชีและภาษี จำกัด</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              บริการบัญชีมืออาชีพ ด้วยทีมงานที่มีประสบการณ์กว่า 17 ปี 
              พร้อมให้คำปรึกษาและดูแลธุรกิจของคุณ
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/wilinrat.sa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f57d21] p-2 rounded-full hover:bg-[#f15a29] transition-colors duration-200 cursor-pointer inline-block"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@sasa.accounting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f57d21] p-2 rounded-full hover:bg-[#f15a29] transition-colors duration-200 cursor-pointer inline-block"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
                  {/* <a 
                    href="https://www.tiktok.com/@sasa.accounting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#f57d21] p-2 rounded-full hover:bg-[#f15a29] transition-colors duration-200 cursor-pointer inline-block"
                  >
                    <Instagram className="w-5 h-5" />
                  </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">บริการของเรา</h4>
            <div className="space-y-3">
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                จัดทำบัญชี
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                ยื่นภาษี
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                วิเคราะห์ทางการเงิน
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                ที่ปรึกษาธุรกิจ
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                จดทะเบียนบริษัท
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">เมนู</h4>
            <div className="space-y-3">
              <button onClick={() => scrollToSection('hero')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                หน้าแรก
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                เกี่ยวกับเรา
              </button>
              <button onClick={() => scrollToSection('clients')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                ลูกค้าของเรา
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                รีวิวลูกค้า
              </button>
              <button onClick={() => scrollToSection('awards')} className="block text-gray-300 hover:text-[#f57d21] transition-colors duration-200">
                ทีมงานของเรา
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">ติดต่อเรา</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#f57d21] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">089-130-7416</p>
                  <p className="text-gray-400 text-sm">จันทร์-เสาร์ 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#f57d21] mt-1 flex-shrink-0" />
                <p className="text-gray-300">director@saaccounttax.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#f57d21] mt-1 flex-shrink-0" />
                <p className="text-gray-300">388/31-32 ถนน ซ. รามคำแหง 53 แขวงพลับพลา วังทองหลาง กรุงเทพ 10310</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 S.A. Accounting. สงวนลิขสิทธิ์
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#f57d21] transition-colors duration-200">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f57d21] transition-colors duration-200">
                เงื่อนไขการใช้งาน
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;