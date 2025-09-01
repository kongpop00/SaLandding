import { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // ความสูงของ header + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // ใช้ custom smooth scroll ที่ช้าและนุ่มกว่า
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) * 2.5, 3000); // ใช้เวลานานขึ้น, สูงสุด 3 วินาที
      let start: number | null = null;

      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // ใช้ easing function แบบ ease-in-out ที่นุ่มนวล
        const easeInOutCubic = percentage < 0.5 
          ? 4 * percentage * percentage * percentage 
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + (distance * easeInOutCubic));
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
      
      window.requestAnimationFrame(step);
      setIsMenuOpen(false);
      
      // เอา subtle animation ออกเพื่อไม่ให้รบกวน
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-2 rounded-lg">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">S.A. Accounting</h1>
              <p className="text-sm text-gray-600">บริษัท เอส.เอ.การบัญชีและภาษี จำกัด</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group">
              หน้าแรก
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group">
              เกี่ยวกับเรา
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('services')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group">
              บริการ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('clients')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group">
              ลูกค้า
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('reviews')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group">
              รีวิว
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-[#f15a29] hover:to-[#f57d21]">
              ติดต่อเรา
            </button>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#f57d21] transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium">
                หน้าแรก
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium">
                เกี่ยวกับเรา
              </button>
              <button onClick={() => scrollToSection('services')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium">
                บริการ
              </button>
              <button onClick={() => scrollToSection('clients')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium">
                ลูกค้า
              </button>
              <button onClick={() => scrollToSection('reviews')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium">
                รีวิว
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="text-left bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-fit">
                ติดต่อเรา
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;