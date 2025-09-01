import React from 'react';
import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "ความน่าเชื่อถือ",
      description: "ดำเนินงานด้วยความซื่อสัตย์และโปร่งใส รับประกันความถูกต้องของงาน"
    },
    {
      icon: Clock,
      title: "ตรงเวลา",
      description: "ส่งงานตรงตามกำหนด ไม่เสียโอกาสทางธุรกิจของคุณ"
    },
    {
      icon: Users,
      title: "ทีมมืออาชีพ",
      description: "นักบัญชีที่ผ่านการรับรองและมีประสบการณ์สูง"
    },
    {
      icon: CheckCircle,
      title: "มาตรฐานสากล",
      description: "ปฏิบัติตามมาตรฐานการบัญชีและกฎหมายอย่างเคร่งครัด"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            เกี่ยวกับ<span className="text-[#f57d21]">เรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราคือสำนักงานบัญชีที่มีประสบการณ์กว่า 15 ปี ในการให้บริการธุรกิจทุกขนาด 
            ด้วยความเชี่ยวชาญและใส่ใจในรายละเอียด
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-[#f3e9d7]/30 rounded-2xl hover:bg-[#f3e9d7]/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-3 rounded-full w-fit mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional accounting office environment" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f57d21]">15+</p>
                  <p className="text-gray-600 font-medium">ปีประสบการณ์</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#f57d21] to-[#f15a29] rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              วิสัยทัศน์ของเรา
            </h3>
            <p className="text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              "เป็นพันธมิตรทางการเงินที่เชื่อถือได้ ช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน 
              ด้วยบริการบัญชีและภาษีที่มีคุณภาพระดับมาตรฐานสากล"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;