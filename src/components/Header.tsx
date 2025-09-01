import React, { useState, useEffect } from 'react';
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
      element.scrollIntoView({ behavior: 'smooth' });
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
              <h1 className="text-xl font-bold text-gray-800">AAA Accounting</h1>
              <p className="text-sm text-gray-600">สำนักงานบัญชี</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
              หน้าแรก
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
              เกี่ยวกับเรา
            </button>
            <button onClick={() => scrollToSection('services')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
              บริการ
            </button>
            <button onClick={() => scrollToSection('clients')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
              ลูกค้า
            </button>
            <button onClick={() => scrollToSection('reviews')} 
                    className="text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
              รีวิว
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
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
          <nav className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
                หน้าแรก
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
                เกี่ยวกับเรา
              </button>
              <button onClick={() => scrollToSection('services')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
                บริการ
              </button>
              <button onClick={() => scrollToSection('clients')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
                ลูกค้า
              </button>
              <button onClick={() => scrollToSection('reviews')} 
                      className="text-left text-gray-700 hover:text-[#f57d21] transition-colors duration-200">
                รีวิว
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="text-left bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white px-6 py-2 rounded-full">
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