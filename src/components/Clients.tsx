import { useState, useEffect, useRef } from 'react';
import { Building2, Truck, ShoppingBag, Utensils, Heart, Cog } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Simple counter that works reliably
const AnimatedCounter = ({ target, duration = 2000, delay = 0 }: { target: number; duration?: number; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(countRef, { once: true });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      
      setTimeout(() => {
        const increment = target / (duration / 50); // อัพเดตทุก 50ms
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 50);
        
        return () => clearInterval(timer);
      }, delay);
    }
  }, [inView, started, target, duration, delay]);

  return <span ref={countRef}>{count}</span>;
};

const Clients = () => {
  const clientTypes = [
    { icon: Building2, name: "บริษัท/องค์กร", count: "150+", countNumber: 150 },
    { icon: Truck, name: "ขนส่ง/โลจิสติกส์", count: "80+", countNumber: 80 },
    { icon: ShoppingBag, name: "ร้านค้า/ค้าปลีก", count: "120+", countNumber: 120 },
    { icon: Utensils, name: "ร้านอาหาร", count: "90+", countNumber: 90 },
    { icon: Heart, name: "บริการสุขภาพ", count: "45+", countNumber: 45 },
    { icon: Cog, name: "ผลิตและบริการ", count: "110+", countNumber: 110 }
  ];

  return (
    <motion.section 
      id="clients" 
      className="py-20 bg-[#f3e9d7]/30"
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
            ลูกค้า<span className="text-[#f57d21]">ของเรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราได้รับความไว้วางใจจากธุรกิจหลากหลายสาขา ทั้งบริษัทขนาดเล็กไปจนถึงองค์กรขนาดใหญ่
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clientTypes.map((client, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-4 rounded-full w-fit mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <client.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#f15a29] text-2xl mb-1">
                <AnimatedCounter target={client.countNumber} duration={2500} delay={500 + index * 100} />+
              </h3>
              <p className="text-gray-600 text-sm font-medium">{client.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
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
                พันธมิตรที่เชื่อถือได้
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ตั้งแต่ธุรกิจเริ่มต้นไปจนถึงบริษัทที่จดทะเบียนในตลาดหลักทรัพย์ 
                เราให้บริการด้วยมาตรฐานเดียวกัน คือ ความเป็นเลิศ
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-bold text-[#f57d21]">
                    <AnimatedCounter target={500} duration={3000} delay={1200} />+
                  </p>
                  <p className="text-gray-600">ลูกค้าปัจจุบัน</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-bold text-[#f57d21]">
                    <AnimatedCounter target={98} duration={3000} delay={1300} />%
                  </p>
                  <p className="text-gray-600">อัตราการกลับมาใช้บริการ</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Diverse business clients collaboration" 
                className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Clients;