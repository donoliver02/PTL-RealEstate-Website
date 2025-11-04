import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Led by Angel Singh P with deep market knowledge and years of experience',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Personalized service tailored to meet your unique property goals',
    },
    {
      icon: TrendingUp,
      title: 'Market Expertise',
      description: 'Comprehensive coverage from OMR to Anna Nagar, ECR to Velachery',
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building long-term relationships founded on integrity and honesty',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About PTL Real Estate</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            PTL Real Estate, led by Angel Singh P, is a trusted independent real estate agency based in Chennai,
            dedicated to facilitating seamless, transparent, and reliable property transactions. Specializing in
            residential, commercial, and luxury properties across Chennai—from OMR and ECR to Anna Nagar and
            Velachery—PTL Real Estate offers personalized, expert guidance tailored to meet the unique goals of
            each client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              Our deep market knowledge and commitment to transparency enable clients to make confident,
              informed decisions in buying, selling, or investing. At PTL Real Estate, we believe in building
              long-term relationships founded on honesty, responsiveness, and client satisfaction, ensuring
              every interaction upholds the highest standards of professionalism and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
