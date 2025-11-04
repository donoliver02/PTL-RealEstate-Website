import { Home, Building2, Crown, TrendingUp, FileCheck, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Properties',
      description: 'Find your dream home from our curated selection of apartments, villas, and independent houses across Chennai',
      areas: 'OMR, ECR, Anna Nagar, Velachery & more',
    },
    {
      icon: Building2,
      title: 'Commercial Properties',
      description: 'Premium office spaces, retail outlets, and commercial complexes for your business needs',
      areas: 'Prime business districts',
    },
    {
      icon: Crown,
      title: 'Luxury Properties',
      description: 'Exclusive luxury villas, penthouses, and high-end properties for discerning clients',
      areas: 'Premium locations',
    },
    {
      icon: TrendingUp,
      title: 'Investment Consulting',
      description: 'Expert guidance on property investment opportunities with high returns and growth potential',
      areas: 'Emerging & established areas',
    },
    {
      icon: FileCheck,
      title: 'Property Verification',
      description: 'Comprehensive legal verification and documentation support for safe transactions',
      areas: 'All property types',
    },
    {
      icon: HeadphonesIcon,
      title: 'Free Consultation',
      description: 'Complimentary property consultation to help you make informed decisions',
      areas: 'Available for all clients',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-white rounded-lg flex items-center justify-center mb-4 transition-colors">
                <service.icon className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-blue-100 mb-3 transition-colors">
                {service.description}
              </p>
              <p className="text-sm text-blue-900 group-hover:text-blue-200 font-semibold transition-colors">
                {service.areas}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Coverage Areas Across Chennai
            </h3>
            <div className="text-blue-100 text-lg grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>OMR</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>ECR</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Anna Nagar</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Velachery</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>T. Nagar</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Adyar</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Porur</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Tambaram</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Sholinganallur</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Kelambakkam</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Mahabalipuram</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Panaiyur</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Peravallur</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Chengalpattu</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Neelankarai</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Thiruvanmiyur</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Besant Nagar</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Mylapore</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Alwarpet</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Teynampet</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Nungambakkam</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Chetpet</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Thousand Lights</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Egmore</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Purasawalkam</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Triplicane</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Chepauk</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Basilica</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>Georgetown</span></div>
              <div className="flex items-center space-x-2"><span className="text-blue-300 font-bold">•</span><span>And More...</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
