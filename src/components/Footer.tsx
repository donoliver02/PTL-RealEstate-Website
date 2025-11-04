import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/WhatsApp Image 2025-11-03 at 13.58.11_6b2b02be.jpg"
              alt="PTL Real Estate"
              className="h-16 w-auto mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-blue-100 mb-4">
              Turning Promises into Properties
            </p>
            <p className="text-sm text-blue-200">
              Your trusted partner for residential, commercial, and luxury properties in Chennai
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:9940404075" className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <Phone size={18} />
                <span>9940404075</span>
              </a>
              <a href="https://wa.me/919841331601" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <MessageCircle size={18} />
                <span>9841331601</span>
              </a>
              <a href="mailto:angelsingh2769@gmail.com" className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <Mail size={18} />
                <span>angelsingh2769@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-blue-100">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">
                  J.KHADER COMPLEX, 1st Floor<br />
                  Door No. 82/75, Moore Street<br />
                  Mannadi, Georgetown, Chennai - 600 001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            &copy; {currentYear} PTL Real Estate. All rights reserved. | Led by Angel Singh P
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
