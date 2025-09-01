import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "คุณสมชาย รุ่งเรือง",
      company: "บริษัท ABC จำกัด",
      rating: 5,
      comment: "บริการดีมาก ทีมงานมีความเชี่ยวชาญสูง ทำงานละเอียดและตรงเวลาเสมอ ใช้บริการมา 3 ปีแล้ว ประทับใจมาก",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "คุณสุมาลี เจริญผล",
      company: "ร้าน Sweet Bakery",
      rating: 5,
      comment: "ก่อนใช้บริการที่นี่ เรามีปัญหาเรื่องบัญชียุ่งยาก แต่พอมาใช้บริการแล้ว ทุกอย่างเป็นระเบียบ คุ้มค่ามาก",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "คุณประชา ก้าวหน้า",
      company: "บริษัท เทคโนโลยี XYZ",
      rating: 5,
      comment: "ให้คำปรึกษาดีมาก ช่วยประหยัดภาษีได้เยอะ และยังแนะแนวทางการดำเนินธุรกิจที่ดี แนะนำเลยครับ",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "คุณพิมพ์ใจ สร้างสรรค์",
      company: "ร้าน Fashion Hub",
      rating: 5,
      comment: "เป็นมืออาชีพจริงๆ ตอบคำถามได้ทุกเรื่อง ช่วยแก้ปัญหาได้ดี ราคาเหมาะสม บริการยอดเยี่ยม",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            รีวิว<span className="text-[#f57d21]">ลูกค้า</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ฟังความคิดเห็นจากลูกค้าที่ได้รับบริการจากเรา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#f3e9d7]/30 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#f57d21]/20" />
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-gray-600">{review.company}</p>
                  <div className="flex space-x-1 mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            เข้าร่วมกับลูกค้าที่พึงพอใจกว่า 500+ ราย
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            ให้เราเป็นส่วนหนึ่งในความสำเร็จของธุรกิจคุณ
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#f57d21] px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            เริ่มต้นกับเราวันนี้
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;