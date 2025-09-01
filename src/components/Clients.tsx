import React from 'react';
import { Building2, Truck, ShoppingBag, Utensils, Heart, Cog } from 'lucide-react';

const Clients = () => {
  const clientTypes = [
    { icon: Building2, name: "บริษัท/องค์กร", count: "150+" },
    { icon: Truck, name: "ขนส่ง/โลจิสติกส์", count: "80+" },
    { icon: ShoppingBag, name: "ร้านค้า/ค้าปลีก", count: "120+" },
    { icon: Utensils, name: "ร้านอาหार", count: "90+" },
    { icon: Heart, name: "บริการสุขภาพ", count: "45+" },
    { icon: Cog, name: "ผลิตและบริการ", count: "110+" }
  ];

  return (
    <section id="clients" className="py-20 bg-[#f3e9d7]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ลูกค้า<span className="text-[#f57d21]">ของเรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราได้รับความไว้วางใจจากธุรกิจหลากหลายสาขา ทั้งบริษัทขนาดเล็กไปจนถึงองค์กรขนาดใหญ่
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-4 rounded-full w-fit mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <client.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#f15a29] text-2xl mb-1">{client.count}</h3>
              <p className="text-gray-600 text-sm font-medium">{client.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                พันธมิตรที่เชื่อถือได้
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ตั้งแต่ธุรกิจเริ่มต้นไปจนถึงบริษัทที่จดทะเบียนในตลาดหลักทรัพย์ 
                เราให้บริการด้วยมาตรฐานเดียวกัน คือ ความเป็นเลิศ
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f57d21]">500+</p>
                  <p className="text-gray-600">ลูกค้าปัจจุบัน</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f57d21]">98%</p>
                  <p className="text-gray-600">อัตราการกลับมาใช้บริการ</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Diverse business clients collaboration" 
                className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;