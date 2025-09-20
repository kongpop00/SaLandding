import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      name: "มาดามหญิง แสนล้าน",
      company: "",
      rating: 5,
      comment: "ไว้วางใจที่สุดค่ะไม่มีปัญหาย้อนกลับมาให้ปวดหัวเลย ใครยังมีปัญหาเรื่องภาษี แนะนำบริษัทเอสเอการบัญชีเลยค่ะ",
      image: "/images/review/review1.png"
    },
    {
      name: "คุณประวิทย์ มีประวัติ",
      company: "",
      rating: 5,
      comment: "ผมไว้วางใจ และมั่นใจในทุกเรื่องของบัญชี ให้บริษัทเอส.เอ.การบัญชีจัดการให้ทั้งหมด (มืออาชีพจริงๆ)",
      image: "/images/review/review2.png"
    },
    {
      name: "ดร.ชาญชัย เจ้ยชุม",
      company: "",
      rating: 5,
      comment: "ยกให้เป็นนัมเบอร์วัน",
      image: "/images/review/review3.png"
    },
    {
      name: "คุณเสถียร ศรีประศาสตร์",
      company: "",
      rating: 5,
      comment: "มั่นใจในการเอาใจใส่จริงๆ",
      image: "/images/review/review4.png"
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
    <motion.section 
      id="reviews" 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            รีวิว<span className="text-[#f57d21]">ลูกค้า</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ฟังความคิดเห็นจากลูกค้าที่ได้รับบริการจากเรา
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#f3e9d7]/30 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] rounded-3xl p-8 lg:p-12 text-white text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            เข้าร่วมกับลูกค้าที่พึงพอใจกว่า 500+ ราย
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            ให้เราเป็นส่วนหนึ่งในความสำเร็จของธุรกิจคุณ
          </p>
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#f57d21] px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            เริ่มต้นกับเราวันนี้
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reviews;