import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <img
                src="/WhatsApp Image 2025-11-03 at 13.58.11_6b2b02be.jpg"
                alt="PTL Real Estate"
                className="h-16 w-auto"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-blue-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-blue-200'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-blue-200'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-blue-200'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium"
            >
              Contact Us
            </button>
            <a
              href="tel:9940404075"
              className={`flex items-center space-x-2 font-medium ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              <Phone size={18} />
              <span>9940404075</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-900"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-900"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-900"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-900"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-900"
            >
              Contact
            </button>
            <a
              href="tel:9940404075"
              className="flex items-center space-x-2 py-2 text-blue-900 font-medium"
            >
              <Phone size={18} />
              <span>9940404075</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
