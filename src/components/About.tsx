import { Shield, Users, DollarSign, FileCheck, TrendingUp, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // ฟังก์ชันเล่น/หยุดวิดีโอ
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowControls(false);
        // แสดงปุ่มหยุดชั่วคราวหลังจากเล่น 2 วินาที
        setTimeout(() => {
          setShowControls(true);
        }, 2000);
      }
    }
  };

  // ฟังก์ชันแสดง/ซ่อนปุ่มควบคุม
  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setTimeout(() => {
        setShowControls(false);
      }, 1000);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "ประสบการณ์ตรงจากกรมสรรพากร",
      description: "ดำเนินงานโดยนักตรวจสอบภาษีชำนาญการ และทีมบัญชีมืออาชีพ มีประสบการณ์รวมกว่า 17 ปี"
    },
    {
      icon: DollarSign,
      title: "แม่นยำ โปร่งใส เชื่อถือได้",
      description: "ทำงานอย่างเป็นระบบ ตรวจสอบได้ทุกขั้นตอน พร้อมอธิบายทุกตัวเลขอย่างเข้าใจง่าย"
    },
    {
      icon: FileCheck,
      title: "บริการครบวงจรในที่เดียว",
      description: "ตั้งแต่จดบริษัท ทำบัญชี ส่งงบ วางแผนภาษี ไปจนถึงวิเคราะห์และยื่นเอกสารกู้เงิน"
    },
    {
      icon: Users,
      title: "ให้คำปรึกษาอย่างจริงใจ",
      description: "เราไม่เพียงทำงานตามเอกสาร แต่เข้าใจปัญหาและความต้องการของเจ้าของกิจการ พร้อมแนะนำทางออกที่ดีที่สุด"
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
            <span className="text-[#f57d21]">บริษัท เอส.เอ.การบัญชีและภาษี จำกัด</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            <span className="font-semibold text-[#f57d21]">ก่อตั้งขึ้นเมื่อวันที่ 1 พฤศจิกายน 2560</span> โดยมีวัตถุประสงค์ประกอบธุรกิจเกี่ยวกับบัญชี การทำบัญชีและการตรวจสอบบัญชี การให้คำปรึกษาด้านภาษี ออกแบบจัดทำตรายางพร้อมจดบริษัท ช่วยติดตามวิเคราะห์ผลประกอบการ การจัดทำงบประมาณและเตรียมเอกสารเพื่อใช้กู้เงินกับทางสถาบันการเงิน รวมไปถึงการวิเคราะห์วางแผนสภาพคล่องทางการเงิน
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            <span className="font-semibold">ก่อตั้งโดยผู้เชี่ยวชาญที่มีประสบการณ์ตรงจากกรมสรรพากร</span> และมีความชำนาญในสายงานบัญชีและการวางแผนภาษีมากกว่า 10 ปี
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            บริษัทจึงมุ่งมั่นที่จะให้บริการที่ <span className="text-[#f57d21] font-semibold">"แม่นยำ โปร่งใส ถูกต้องตามกฎหมาย และเข้าใจง่าย"</span>
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
            <div className="grid grid-cols-1 gap-6">
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
            className="lg:w-1/2 "
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <video 
                ref={videoRef}
                src="/video/video1.mp4"
                className="w-full h-[800px] lg:h-[850px] object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 cursor-pointer"
                poster="/images/Office1.webp"
                preload="metadata"
                onClick={togglePlayPause}
                onLoadedData={() => console.log('Video loaded')}
                onCanPlay={() => console.log('Video can play')}
              >
                <p className="text-gray-600">เบราว์เซอร์ของคุณไม่รองรับการเล่นวีดีโอ</p>
              </video>
              
              {/* Play/Pause Button Overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
                } ${!isPlaying ? 'bg-black/30' : ''}`}
              >
                <button
                  onClick={togglePlayPause}
                  className="bg-white hover:bg-gray-50 text-orange-500 p-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl border-2 border-orange-200"
                >
                  {isPlaying ? (
                    <Pause size={48} className="ml-1 text-orange-500" />
                  ) : (
                    <Play size={48} className="ml-1 text-orange-500" />
                  )}
                </button>
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f57d21]">17+</p>
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
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src="/images/profile.jpg" 
                alt="คุณ วิลินรัตน์ ยานยา - CEO & ผู้ก่อตั้ง"
                className="w-48 h-64 lg:w-56 lg:h-72 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                คุณ วิลินรัตน์ ยานยา
              </h3>
              <p className="text-lg font-medium mb-6 opacity-90">
                CEO เอส.เอ.การบัญชีและภาษี | ประสบการณ์ 17 ปี ในตำแหน่ง นักตรวจสอบภาษีชำนาญการ กรมสรรพากร
              </p>
              <blockquote className="text-lg lg:text-xl opacity-90 leading-relaxed italic border-l-4 border-white/30 pl-6">
                "ในปัจจุบัน เราบริการลูกค้าด้วยความใส่ใจ ให้คำปรึกษา วิเคราะห์ทางด้านภาษีและงบการเงิน 
                กับธุรกิจทุกประเภท หากได้รับการสนับสนุนด้านบัญชี-การเงินที่ถูกต้อง จะยิ่งเป็นผลดี เพราะบัญชียังคงเป็นปัจจัยหลักของการดำเนินธุรกิจ ดังนั้น ลูกค้าของเราจึงได้เลือกให้ 
                เราเป็นผู้ดูแลบัญชีและปิดงบประจำปี เพราะเราคือ 'มืออาชีพ'"
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;