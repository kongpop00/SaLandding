import React from 'react';
import { Calculator, Phone, Mail, MapPin, Facebook, MessageCircle, Instagram } from 'lucide-react';

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
              <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-2 rounded-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AAA Accounting</h3>
                <p className="text-gray-400">สำนักงานบัญชี</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              บริการบัญชีมืออาชีพ ด้วยทีมงานที่มีประสบการณ์กว่า 15 ปี 
              พร้อมให้คำปรึกษาและดูแลธุรกิจของคุณ
            </p>
            <div className="flex space-x-4">
              <div className="bg-[#f57d21] p-2 rounded-full hover:bg-[#f15a29] transition-colors duration-200 cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-[#f57d21] p-2 rounded-full hover:bg-[#f15a29] transition-colors duration-200 cursor-pointer">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="bg-[#f57d21] p-2 rounded-full hover:bg-[#f15a29] transition-colors duration-200 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
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
                รางวัลของเรา
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">ติดต่อเรา</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#f57d21] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">02-123-4567</p>
                  <p className="text-gray-400 text-sm">มือถือ: 081-234-5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#f57d21] mt-1 flex-shrink-0" />
                <p className="text-gray-300">info@aaaaccounting.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#f57d21] mt-1 flex-shrink-0" />
                <p className="text-gray-300">123 ถนนสีลม แขวงสีลม<br />เขตบางรัก กรุงเทพฯ 10500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 AAA Accounting. สงวนลิขสิทธิ์
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