import React from 'react';
import { Shield, Clock, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.section 
      id="about" 
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
            เกี่ยวกับ<span className="text-[#f57d21]">เรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            ในยุคที่กฎหมายภาษีและการเงินมีการปรับเปลี่ยนอยู่เสมอ การมีทีมบัญชีมืออาชีพที่เข้าใจระบบบัญชีและภาษีอย่างลึกซึ้ง คือสิ่งจำเป็นสำหรับทุกธุรกิจ
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            บริการรับทำบัญชีแบบครบวงจรไม่เพียงแค่ช่วยให้ธุรกิจปฏิบัติตามกฎหมายได้ถูกต้อง แต่ยังช่วยวางแผนภาษีและการเงินให้เกิดประสิทธิภาพสูงสุด ตั้งแต่การจดทะเบียนบริษัท ไปจนถึงการจัดทำงบการเงินและยื่นภาษี <span className="text-[#f57d21] font-semibold">ครบ จบในที่เดียว</span>
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-[#f3e9d7]/30 rounded-2xl hover:bg-[#f3e9d7]/50 transition-all duration-300 transform hover:scale-105 group"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-3 rounded-full w-fit mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional accounting office environment" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f57d21]">15+</p>
                  <p className="text-gray-600 font-medium">ปีประสบการณ์</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#f57d21] to-[#f15a29] rounded-3xl p-8 lg:p-12 text-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              ให้เราดูแลบัญชีของคุณ
            </h3>
            <p className="text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              ด้วยบริการที่ได้มาตรฐาน ครอบคลุมทุกด้านทั้งบัญชี ภาษี และที่ปรึกษาทางการเงิน 
              ตั้งแต่เริ่มต้นธุรกิจจนถึงขยายกิจการ พร้อมจดทะเบียนบริษัทดำเนินการให้คุณทุกขั้นตอน
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;