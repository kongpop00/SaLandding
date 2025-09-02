import { Award, Trophy, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "ประสบการณ์ตรงจากกรมสรรพากร",
      year: "17 ปี",
      organization: "นักตรวจสอบภาษีชำนาญการ",
      description: "ความเชี่ยวชาญด้านภาษีระดับผู้เชี่ยวชาญ"
    },
    {
      icon: Medal,
      title: "แม่นยำ โปร่งใส เชื่อถือได้",
      year: "100%",
      organization: "มาตรฐานการทำงาน",
      description: "ทำงานอย่างเป็นระบบ ตรวจสอบได้ทุกขั้นตอน"
    },
    {
      icon: Star,
      title: "บริการครบวงจรในที่เดียว",
      year: "All-in-One",
      organization: "One Stop Service",
      description: "จดบริษัท ทำบัญชี ส่งงบ วางแผนภาษี ยื่นเอกสารกู้เงิน"
    },
    {
      icon: Award,
      title: "ที่ปรึกษาทางการเงิน",
      year: "Long-term",
      organization: "Partnership",
      description: "พร้อมเติบโตไปกับคุณตลอดการเติบโตของธุรกิจ"
    }
  ];

  const certifications = [
    "CPA - นักบัญชีรับอนุญาต",
    "CFP - วางแผนการเงินรับอนุญาต", 
    "ISO 9001:2015 - ระบบบริหารคุณภาพ",
    "มาตรฐานการบัญชี TFRS"
  ];

  return (
    <motion.section 
      id="awards" 
      className="py-20 bg-gray-50"
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
            ทีมงาน<span className="text-[#f57d21]">มืออาชีพ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ดำเนินงานโดยผู้เชี่ยวชาญที่มีประสบการณ์ตรงจากกรมสรรพากร พร้อมทีมบัญชีที่ผ่านการรับรองมาตรฐานสากล
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div 
          className="mb-16 bg-gradient-to-r from-[#f3e9d7] to-[#ffc89c]/50 rounded-3xl p-8 lg:p-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div 
              className="lg:w-1/3 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-[#f57d21] to-[#f15a29] rounded-full flex items-center justify-center">
                <span className="text-white text-4xl font-bold">ว</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">คุณ วิลินรัตน์ ยานยา</h3>
              <p className="text-[#f57d21] font-semibold">CEO & ผู้ก่อตั้ง</p>
            </motion.div>
            <motion.div 
              className="lg:w-2/3"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl">
                  <h4 className="font-semibold text-gray-800 mb-2">ประสบการณ์</h4>
                  <p className="text-gray-700">17 ปี ในตำแหน่ง <span className="font-semibold text-[#f57d21]">นักตรวจสอบภาษีชำนาญการ กรมสรรพากร</span></p>
                  <p className="text-gray-700">10+ ปี ในด้านทำบัญชีและภาษี</p>
                </div>
                <div className="bg-white p-4 rounded-2xl">
                  <h4 className="font-semibold text-gray-800 mb-2">ปรัชญาการทำงาน</h4>
                  <blockquote className="text-gray-700 italic">
                    "จัดการบัญชีอย่างมืออาชีพ เพื่อธุรกิจที่มั่นคง เรื่องบัญชี เราเชี่ยวชาญ ทุกงานไม่มีพลาด 
                    ให้การเงินและบัญชีของคุณเป็นเรื่องง่าย คิดครบ จบเรื่องบัญชีที่เรา"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-4 rounded-full w-fit mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <award.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="mb-4">
                <span className="bg-[#ffc89c]/50 text-[#f15a29] px-3 py-1 rounded-full text-sm font-semibold">
                  {award.year}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">{award.title}</h3>
              <p className="text-sm text-[#f57d21] font-medium mb-3">{award.organization}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-[#f3e9d7] to-[#ffc89c]/50 rounded-3xl p-8 lg:p-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                ใบรับรองและมาตรฐาน
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-[#f57d21] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-8 p-6 bg-white/50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 leading-relaxed">
                  ทีมงานของเรามีการอบรมและพัฒนาอย่างต่อเนื่อง เพื่อให้บริการที่ทันสมัยและตรงตามกฎหมายล่าสุดเสมอ
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional certification and awards display" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Awards;