import { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Award, ChevronLeft, ChevronRight, User, Download } from 'lucide-react';
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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Professional accounting team working"
    },
    {
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Modern office environment"
    },
    {
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Business consultation meeting"
    },
    {
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Financial analysis and reporting"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProfileClick = () => {
    // Navigate to profile page - will be implemented
    window.location.href = '/profile';
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.section 
      id="hero" 
      className="relative pt-24 pb-12 min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f57d21]/20 to-[#f15a29]/20"></div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        aria-label="ดูรูปก่อนหน้า"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="ดูรูปถัดไป"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3" role="tablist" aria-label="สไลด์รูปภาพ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`ไปยังสไลด์ที่ ${index + 1}`}
            aria-pressed={index === currentSlide}
            role="tab"
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-2/3 space-y-8 text-center lg:text-left"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                บริการ<span className="text-[#ffc89c]">บัญชี</span>
                <br />
                <span className="text-[#f57d21]">ครบวงจร</span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-md max-w-2xl mx-auto lg:mx-0"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="text-[#ffc89c] font-semibold">จดบริษัท → ทำบัญชี → ส่งงบ → ยื่นภาษี</span>
                <br />
                เราจัดการให้ทั้งหมด ประหยัดเวลา ประหยัดภาษี ด้วยทีมผู้เชี่ยวชาญที่ผ่านการรับรอง
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button 
                onClick={scrollToContact}
                aria-label="ติดต่อเพื่อปรึกษาฟรี"
                className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span>ปรึกษาฟรี</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="ดูรายละเอียดบริการทั้งหมด"
                className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-[#f57d21] transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                ดูบริการ
              </button>
              <button 
                onClick={handleProfileClick}
                aria-label="ดูโปรไฟล์บริษัท"
                className="bg-gradient-to-r from-[#f57d21]/80 to-[#f15a29]/80 border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-[#f57d21] hover:to-[#f15a29] hover:border-white/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <User className="w-6 h-6" />
                <span>ดู Profile</span>
              </button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-8 pt-8 justify-center lg:justify-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div 
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-[#f57d21]/80 p-3 rounded-full">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-2xl">
                    <AnimatedCounter target={500} duration={2500} delay={1500} />+
                  </p>
                  <p className="text-white/80">ลูกค้าที่เชื่อใจ</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-[#f57d21]/80 p-3 rounded-full">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-2xl">
                    <AnimatedCounter target={15} duration={2000} delay={1700} />+
                  </p>
                  <p className="text-white/80">ปีประสบการณ์</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-[#f57d21]/80 p-3 rounded-full">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-2xl">
                    <AnimatedCounter target={100} duration={2500} delay={1900} />%
                  </p>
                  <p className="text-white/80">ความพึงพอใจ</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </motion.section>
  );
};

export default Hero;