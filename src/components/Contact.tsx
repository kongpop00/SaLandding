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
      info: "02-123-4567",
      subInfo: "จันทร์-ศุกร์ 8:00-18:00"
    },
    {
      icon: Mail,
      title: "อีเมล",
      info: "info@aaaaccounting.com",
      subInfo: "ตอบกลับภายใน 24 ชั่วโมง"
    },
    {
      icon: MapPin,
      title: "ที่อยู่",
      info: "123 ถนนสีลม กรุงเทพฯ",
      subInfo: "ใกล้ BTS ศาลาแดง"
    },
    {
      icon: Clock,
      title: "เวลาทำการ",
      info: "จันทร์-ศุกร์ 8:00-18:00",
      subInfo: "เสาร์ 9:00-15:00"
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
                <p className="text-gray-600 leading-relaxed">
                  💬 <strong>Line Official</strong> @aaaaccounting
                </p>
                <p className="text-gray-600 leading-relaxed">
                  📧 <strong>อีเมลปรึกษา</strong> consulting@aaaaccounting.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              ส่งข้อความหาเรา
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ชื่อ-นามสกุล</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">อีเมล</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">เบอร์โทรศัพท์</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">บริษัท/ร้าน</label>
                  <input 
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">บริการที่สนใจ</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-[#f57d21] focus:ring-2 focus:ring-[#f57d21]/20 transition-all duration-200"
                >
                  <option value="">เลือกบริการ</option>
                  <option value="accounting">จัดทำบัญชี</option>
                  <option value="tax">ยื่นภาษี</option>
                  <option value="consulting">ที่ปรึกษาธุรกิจ</option>
                  <option value="audit">ตรวจสอบบัญชี</option>
                  <option value="registration">จดทะเบียนบริษัท</option>
                </select>
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
                className="w-full bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>ส่งข้อความ</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;