import React from 'react';
import { Calculator, FileText, PieChart, TrendingUp, Building, ClipboardCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "จัดทำบัญชี",
      description: "บริการจัดทำบัญชีรายเดือน รายปี ครบถ้วนตามมาตรฐาน",
      features: ["บันทึกรายรับ-รายจ่าย", "จัดทำงบการเงิน", "ตรวจสอบความถูกต้อง"]
    },
    {
      icon: FileText,
      title: "ยื่นภาษี",
      description: "บริการยื่นภาษีเงินได้นิติบุคคลและภาษีมูลค่าเพิ่ม",
      features: ["คำนวณภาษีที่ถูกต้อง", "ยื่นตรงกำหนด", "ติดตามสถานะ"]
    },
    {
      icon: PieChart,
      title: "วิเคราะห์ทางการเงิน",
      description: "รายงานและวิเคราะห์ฐานะทางการเงินของธุรกิจ",
      features: ["รายงานกำไรขาดทุน", "งบแสดงฐานะการเงิน", "อัตราส่วนทางการเงิน"]
    },
    {
      icon: TrendingUp,
      title: "ที่ปรึกษาธุรกิจ",
      description: "คำแนะนำเชิงกลยุทธ์เพื่อการเติบโตของธุรกิจ",
      features: ["วางแผนทางการเงิน", "ปรับปรุงกระบวนการ", "ลดต้นทุน"]
    },
    {
      icon: Building,
      title: "จดทะเบียนบริษัท",
      description: "บริการจดทะเบียนจัดตั้งบริษัทและหจก.",
      features: ["จดทะเบียนบริษัท", "ขอใบอนุญาต", "ดำเนินการครบวงจร"]
    },
    {
      icon: ClipboardCheck,
      title: "ตรวจสอบบัญชี",
      description: "ตรวจสอบความถูกต้องของบัญชีและควบคุมภายใน",
      features: ["ตรวจสอบรายการ", "ประเมินความเสี่ยง", "รายงานผลการตรวจสอบ"]
    }
  ];

  return (
    <motion.section 
      id="services" 
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
            บริการ<span className="text-[#f57d21]">ของเรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราให้บริการครบครันด้านบัญชีและภาษี เพื่อตอบสนองทุกความต้องการของธุรกิจคุณ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-4 rounded-full w-fit mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f57d21] rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full bg-[#f3e9d7] hover:bg-[#ffc89c] text-[#f15a29] font-semibold py-3 rounded-xl transition-colors duration-200">
                เรียนรู้เพิ่มเติม
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#f3e9d7] to-[#ffc89c]/50 rounded-3xl p-8 lg:p-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                ทำไมต้องเลือกเรา?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f57d21] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">ประสบการณ์กว่า 15 ปี ในการให้บริการลูกค้าหลากหลายธุรกิจ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f57d21] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">ทีมงานที่ผ่านการรับรองและอบรมอย่างต่อเนื่อง</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#f57d21] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">ใช้เทคโนโลยีสมัยใหม่ เพื่อความแม่นยำและรวดเร็ว</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern accounting office with technology" 
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;