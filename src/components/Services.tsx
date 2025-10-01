import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calculator, 
  FileText, 
  Shield, 
  Users, 
  CheckCircle, 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Check device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const serviceImages = [
    '/images/s1.jpg',
    '/images/s2.jpg',
    '/images/s3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % serviceImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [serviceImages.length]);

  // บริการหลักเดิม
  const services = [
    {
      icon: Calculator,
      title: "รับทำบัญชีครบวงจร",
      description: "บริการบัญชีและภาษีแบบครบวงจร พร้อมยื่นเอกสารทุกประเภท",
      features: ["ยื่นภาษีทุกประเภทกับกรมสรรพากร", "ยื่นประกันสังคม พร้อมเพิ่ม-ลดพนักงาน", "ตรวจสอบเอกสารบัญชีและภาษีให้ถูกต้อง", "วางแผนภาษีรายเดือน/รายปี"]
    },
    {
      icon: FileText,
      title: "วางระบบบัญชี",
      description: "ออกแบบและวางระบบบัญชีให้เหมาะสมกับธุรกิจของคุณ",
      features: ["ออกแบบระบบบัญชีให้เหมาะกับธุรกิจ", "วางโครงสร้างบัญชีให้เหมาะใช้งานได้จริง", "ช่วยจัดระบบเอกสารและควบคุมภายใน"]
    },
    {
      icon: TrendingUp,
      title: "วางแผนภาษี",
      description: "วิเคราะห์และวางแผนภาษีเพื่อประหยัดค่าใช้จ่ายของธุรกิจ",
      features: ["วิเคราะห์รายรับ-รายจ่าย เพื่อลดหย่อนภาษี", "วางแผนและประเมินยอดจากตัวเลขล่วงหน้า", "ปรับแผนให้เหมาะกับธุรกิจ"]
    },
    {
      icon: Shield,
      title: "ตรวจสอบบัญชี",
      description: "บริการตรวจสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต (CPA)",
      features: ["ตรวจงบการเงินโดยผู้สอบบัญชี (CPA)", "ตรวจความถูกต้องของบัญชีและเอกสาร", "รายงานผลการตรวจสอบพร้อมข้อเสนอแนะ", "ให้คำแนะนำเพื่อปรับปรุงระบบบัญชี"]
    },
    {
      icon: Building2,
      title: "จดทะเบียนธุรกิจ",
      description: "บริการจดทะเบียนธุรกิจและแก้ไขงานทะเบียนครบวงจร",
      features: ["จดทะเบียนบริษัทและหจก. อย่างรวดเร็ว", "แก้ไขงานทะเบียนต่าง ๆ ทุกหน่วยงาน", "จดลิขสิทธิ์ โลโก้"]
    },
    {
      icon: Users,
      title: "รับปรึกษาทางวิชาการ",
      description: "ให้คำปรึกษาด้านบัญชี ภาษี และการเงินโดยผู้เชี่ยวชาญ",
      features: ["ให้คำปรึกษาด้านบัญชีและภาษี", "วิเคราะห์ปัญหาและหาทางแก้ไข", "แนะนำแนวทางปฏิบัติที่ถูกต้อง", "สนับสนุนการตัดสินใจทางธุรกิจ"]
    }
  ];

  useEffect(() => {
    const getCardsPerView = () => {
      switch (deviceType) {
        case 'mobile': return 1;
        case 'tablet': return 2;
        case 'desktop': return 3;
        default: return 3;
      }
    };
    
    const cardsPerView = getCardsPerView();
    const maxIndex = services.length - cardsPerView;
    
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => 
        (prevIndex + 1) % (maxIndex + 1)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length, deviceType]);

  // บริการใหม่พิเศษ
  const specialServices = [
    {
      id: 1,
      icon: Building2,
      title: "จดทะเบียนจัดตั้งนิติบุคคล",
      subtitle: "เริ่มต้นธุรกิจอย่างถูกต้องตามกฎหมาย",
      features: [
        "ดำเนินการจดทะเบียนให้ทุกขั้นตอน",
        "ออกแบบตรายางและจัดทำตรายาง",
        "จดขอ Password เพื่อนำส่งงบการเงิน",
        "จด ภ.อ.01 ขอ Password สำหรับยื่นภาษี",
        "จัดทำรายงานการประชุมเพื่อเปิดบัญชีธนาคาร",
        "ขึ้นทะเบียนนายจ้างประกันสังคม ฟรี!!",
        "จดภาษีมูลค่าเพิ่ม Vat ฟรี!!",
        "ฟรี!! ค่าบริการเดือนแรก",
        "ติดต่อเพื่อรับคำปรึกษาและคำแนะนำได้ตลอดเวลา",
        "ค่าธรรมเนียมและค่าบริการจัดตั้ง",
        "ห้างหุ้นส่วนจำกัด : 8,000 บาท",
        "บริษัทจำกัด : 12,000 บาท"
      ],
      pricing: [
        { type: "ห้างหุ้นส่วนจำกัด", price: "8,000 บาท" },
        { type: "บริษัทจำกัด", price: "12,000 บาท" }
      ],
      color: "from-orange-400 to-amber-500",
      bgColor: "bg-orange-50"
    },
    {
      id: 2,
      icon: Calculator,
      title: "ทำบัญชีรายเดือน",
      subtitle: "บริการบัญชีและภาษีครบวงจร",
      features: [
        "ให้คำปรึกษาด้านบัญชีและภาษี",
        "ยื่นแบบแสดงรายการทุกประเภทภาษีให้แก่สรรพากร",
        "ยื่นแบบประกันสังคม พร้อมเพิ่มหรือลดพนักงาน",
        "ตรวจสอบความถูกต้องของเอกสารบัญชีและภาษี",
        "วางแผนภาษีประจำเดือนและประจำปีให้",
        "อัพเดทข้อมูล ข่าวสารใหม่ๆ ให้ตลอด",
        "ให้คำปรึกษาด้านบัญชีและภาษี",
        "ติดต่อกับหน่วยงานราชการ กรณีโดนเรียกตรวจสอบ",
        "ค่าบริการเริ่มต้น เดือนละ 2,500 บาท"
      ],
      pricing: [
        { type: "ค่าบริการเริ่มต้น", price: "2,500 บาท/เดือน" }
      ],
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50"
    }
  ];


  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-2 mb-8">
        
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            บริการด้านบัญชีและการเงิน
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2">
              แบบมืออาชีพ
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-orange-600">ครบ จบ ในที่เดียว</span> กับบริการด้านบัญชีและการเงินแบบมืออาชีพ
            <br className="hidden md:block" />
            เราให้บริการอย่างครบวงจรตั้งแต่เริ่มต้นธุรกิจ ไปจนถึงการบริหารจัดการบัญชี การวางแผนภาษี
            <br className="hidden md:block" />
            และการสนับสนุนด้านการเงิน เพื่อให้ธุรกิจของคุณดำเนินไปได้อย่างราบรื่นและมั่นคง
          </p>
        </motion.div>

        {/* บริการหลักเดิม - Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
     

            {/* Slider Container */}
            <div className="relative max-w-7xl mx-auto  py-4">
              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentServiceIndex((prev) => Math.max(0, prev - 1))}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
                disabled={currentServiceIndex === 0}
              >
                <ChevronLeft className={`w-5 h-5 md:w-6 md:h-6 ${currentServiceIndex === 0 ? 'text-gray-400' : 'text-gray-700'}`} />
              </button>
              
              <button
                onClick={() => {
                  const getCardsPerView = () => {
                    switch (deviceType) {
                      case 'mobile': return 1;
                      case 'tablet': return 2;
                      case 'desktop': return 3;
                      default: return 3;
                    }
                  };
                  const cardsPerView = getCardsPerView();
                  const maxIndex = services.length - cardsPerView;
                  setCurrentServiceIndex((prev) => Math.min(maxIndex, prev + 1));
                }}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
                disabled={(() => {
                  const getCardsPerView = () => {
                    switch (deviceType) {
                      case 'mobile': return 1;
                      case 'tablet': return 2;
                      case 'desktop': return 3;
                      default: return 3;
                    }
                  };
                  const cardsPerView = getCardsPerView();
                  return currentServiceIndex >= services.length - cardsPerView;
                })()}
              >
                <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 ${(() => {
                  const getCardsPerView = () => {
                    switch (deviceType) {
                      case 'mobile': return 1;
                      case 'tablet': return 2;
                      case 'desktop': return 3;
                      default: return 3;
                    }
                  };
                  const cardsPerView = getCardsPerView();
                  return currentServiceIndex >= services.length - cardsPerView;
                })() ? 'text-gray-400' : 'text-gray-700'}`} />
              </button>

              {/* Slider Track */}
              <div className="overflow-hidden rounded-3xl mx-2 md:mx-8">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out "
                  style={{  padding:'10px 0 ', transform: `translateX(-${currentServiceIndex * ((() => {
                    switch (deviceType) {
                      case 'mobile': return 100;
                      case 'tablet': return 50;
                      case 'desktop': return 100/3;
                      default: return 100/3;
                    }
                  })())}%)` }}
                >
                  {services.map((service: any, index: number) => (
                    <motion.div
                      key={index}
                      className={`flex-shrink-0 px-2 md:px-3 lg:px-4 ${
                        deviceType === 'mobile' ? 'w-full' :
                        deviceType === 'tablet' ? 'w-1/2' :
                        'w-1/3'
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{ duration: 2 }}
                    >
                      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group h-full">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 md:p-4 rounded-full w-fit mb-4 md:mb-6 group-hover:shadow-lg  duration-300 mx-auto">
                          <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        
                        <div className="text-center">
                          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">{service.title}</h3>
                          <p className="text-orange-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                          
                          <div className="space-y-2 md:space-y-3">
                            {service.features.map((feature: string, featureIndex: number) => (
                              <div key={featureIndex} className="flex items-start space-x-2 text-left">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-gray-600 text-sm md:text-base leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                {Array.from({ length: (() => {
                  const getCardsPerView = () => {
                    switch (deviceType) {
                      case 'mobile': return 1;
                      case 'tablet': return 2;
                      case 'desktop': return 3;
                      default: return 3;
                    }
                  };
                  const cardsPerView = getCardsPerView();
                  return services.length - cardsPerView + 1;
                })() }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      currentServiceIndex === index 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

      
        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {specialServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-md`}>
                  {React.createElement(service.icon, { className: "h-8 w-8 text-white" })}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mt-1">{service.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                 {service.features.map((feature, featureIndex) => (
                   <motion.div
                     key={featureIndex}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                     viewport={{ once: true }}
                     className="flex items-start"
                   >
                     <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                     <span className="text-gray-700 leading-relaxed">{feature}</span>
                   </motion.div>
                 ))}
               </div>

        
            </motion.div>
          ))}
        </div>

        {/* Image Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {serviceImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentImageIndex ? 1 : 0,
                  scale: index === currentImageIndex ? 1 : 1.1
                }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img
                  src={image}
                  alt={`บริการด้านบัญชี ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            ))}
            
            {/* Image Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {serviceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

  

      </div>
    </section>
  );
};

export default Services;