import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-20"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          PTL Real Estate
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-blue-200 font-light animate-fade-in-delay-1">
          Turning Promises into Properties
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed animate-fade-in-delay-2">
          Your trusted gateway to Chennai's residential, commercial, and luxury property markets
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-xl"
          >
            <span>Get Free Consultation</span>
            <ArrowRight size={20} />
          </button>
          <a
            href="tel:9940404075"
            className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
