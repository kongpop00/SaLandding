import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('ขอบคุณสำหรับการติดต่อ! เราจะตอบกลับภายใน 24 ชั่วโมง');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "โทรศัพท์",
      info: "089-130-7416",
      subInfo: "จันทร์-เสาร์ 9:00-18:00"
    },
    {
      icon: Mail,
      title: "อีเมล",
      info: "director@saaccounttax.com",
      subInfo: "ตอบกลับ ในเวลาทำการ"
    },
    {
      icon: MapPin,
      title: "ที่อยู่",
      info: " 388/31-32 ถนน ซ. รามคำแหง 53 แขวงพลับพลา วังทองหลาง กรุงเทพ 10310",
      subInfo: ""
    },
    {
      icon: Clock,
      title: "เวลาทำการ",
      info: "จันทร์-เสาร์ 8:00-18:00",
      subInfo: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#f3e9d7]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ติดต่อ<span className="text-[#f57d21]">เรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            พร้อมให้คำปรึกษาและบริการด้านบัญชีแก่คุณ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-3 rounded-full w-fit mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-[#f57d21] font-semibold">{info.info}</p>
                  <p className="text-gray-600 text-sm">{info.subInfo}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-[#f57d21]" />
                <span>ปรึกษาฟรี</span>
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  📞 <strong>โทรปรึกษาฟรี</strong> ทุกวันจันทร์-ศุกร์ 8:00-18:00
                </p>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600 leading-relaxed">
                    💬 <strong>Line Official</strong> 
                  </p>
                  <a 
                    href="https://line.me/ti/p/0885770601" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-fit hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                    aria-label="เพิ่มเพื่อนใน Line"
                  >
                    <img src="/images/Line.png" alt="Line" className="w-32 h-auto " />
                  </a>
                </div>             <p className="text-gray-600 leading-relaxed">
                  📧 <strong>อีเมลปรึกษา</strong> consulting@aaaaccounting.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              ส่งข้อความหาเรา
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="ฟอร์มติดต่อ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">ชื่อ-นามสกุล</label>
                  <input 
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-describedby="name-help"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200 focus:outline-none"
                    required
                  />
                  <div id="name-help" className="sr-only">กรุณากรอกชื่อและนามสกุลของคุณ</div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">อีเมล</label>
                  <input 
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-describedby="email-help"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200 focus:outline-none"
                    required
                  />
                  <div id="email-help" className="sr-only">กรุณากรอกที่อยู่อีเมลที่ถูกต้อง</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">เบอร์โทรศัพท์</label>
                  <input 
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-describedby="phone-help"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200 focus:outline-none"
                    required
                  />
                  <div id="phone-help" className="sr-only">กรุณากรอกเบอร์โทรศัพท์ที่สามารถติดต่อได้</div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">บริษัท/ร้าน</label>
                  <input 
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    aria-describedby="company-help"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200 focus:outline-none"
                  />
                  <div id="company-help" className="sr-only">ชื่อบริษัทหรือร้านค้าของคุณ (ไม่จำเป็น)</div>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">บริการที่สนใจ</label>
                <select 
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  aria-describedby="service-help"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200 focus:outline-none"
                >
                  <option value="">เลือกบริการ</option>
                  <option value="accounting">จัดทำบัญชี</option>
                  <option value="tax">ยื่นภาษี</option>
                  <option value="consulting">ที่ปรึกษาธุรกิจ</option>
                  <option value="audit">ตรวจสอบบัญชี</option>
                  <option value="registration">จดทะเบียนบริษัท</option>
                </select>
                <div id="service-help" className="sr-only">เลือกบริการที่คุณสนใจ</div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">ข้อความ</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200 resize-none"
                  placeholder="บอกเราเกี่ยวกับความต้องการของคุณ..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-[#f57d21]/30 focus:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>ส่งข้อความ</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-[#ff4500] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-focus:opacity-100 transition-opacity duration-300 rounded-xl blur animate-pulse"></span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;