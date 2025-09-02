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
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // ใช้ modern scroll API
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
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

          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="เมนูหลัก">
            <button onClick={() => scrollToSection('hero')} 
                    aria-label="ไปยังหน้าแรก"
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
              หน้าแรก
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about')} 
                    aria-label="ไปยังส่วนเกี่ยวกับเรา"
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
              เกี่ยวกับเรา
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('services')} 
                    aria-label="ไปยังส่วนบริการ"
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
              บริการ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('clients')} 
                    aria-label="ไปยังส่วนลูกค้า"
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
              ลูกค้า
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('reviews')} 
                    aria-label="ไปยังส่วนรีวิว"
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
              รีวิว
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('faq')} 
                    aria-label="ไปยังส่วนคำถามที่พบบ่อย"
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('gallery')} 
                    aria-label="ไปยังส่วนแกลเลอรี่"
                    className="text-gray-700 hover:text-[#f57d21] transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
              แกลเลอรี่
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f57d21] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    aria-label="ติดต่อเรา"
                    className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-[#f15a29] hover:to-[#f57d21] focus:outline-none focus:ring-2 focus:ring-white/50">
              ติดต่อเรา
            </button>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={isMenuOpen}
            className="lg:hidden p-2 text-gray-700 hover:text-[#f57d21] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-slide-down" role="navigation" aria-label="เมนูมือถือ">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} 
                      aria-label="ไปยังหน้าแรก"
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
                หน้าแรก
              </button>
              <button onClick={() => scrollToSection('about')} 
                      aria-label="ไปยังส่วนเกี่ยวกับเรา"
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium focus:outline-none focus:ring-2 focus:ring-[#f57d21]/50 rounded">
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
              <button onClick={() => scrollToSection('faq')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium">
                FAQ
              </button>
              <button onClick={() => scrollToSection('gallery')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-all duration-300 hover:translate-x-2 hover:font-medium">
                แกลเลอรี่
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