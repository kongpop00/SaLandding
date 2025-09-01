import { Award, Trophy, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "สำนักงานบัญชีดีเด่น",
      year: "2024",
      organization: "สมาคมนักบัญชีแห่งประเทศไทย",
      description: "ได้รับการยกย่องในด้านการให้บริการที่มีคุณภาพ"
    },
    {
      icon: Medal,
      title: "รางวัลบริการลูกค้ายอดเยี่ยม",
      year: "2023",
      organization: "สภาวิชาชีพบัญชี",
      description: "ความพึงพอใจของลูกค้าระดับสูงสุด"
    },
    {
      icon: Star,
      title: "มาตรฐาน ISO 9001:2015",
      year: "2022",
      organization: "องค์กรรับรองมาตรฐาน",
      description: "การจัดการคุณภาพระดับสากล"
    },
    {
      icon: Award,
      title: "นวัตกรรมดิจิทัลยอดเยี่ยม",
      year: "2023",
      organization: "เทคโนโลยีธุรกิจไทย",
      description: "การนำเทคโนโลยีมาใช้ในการให้บริการ"
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
            รางวัล<span className="text-[#f57d21]">ของเรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            การยอมรับในมาตรฐานการให้บริการและความเป็นเลิศทางวิชาชีพ
          </p>
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