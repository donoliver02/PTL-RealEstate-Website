import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'R. Kumar',
      text: 'Working with PTL Real Estate was a seamless experience. Angel Singh\'s expertise and transparency helped me find the perfect home in Chennai without any hassle. I highly recommend their personalized service to anyone looking to buy or sell property.',
      rating: 5,
    },
    {
      name: 'S. Mehta',
      text: 'PTL Real Estate made investing in commercial property straightforward and trustworthy. Their deep market knowledge and prompt communication gave me confidence throughout the entire process. Exceptional service and professionalism!',
      rating: 5,
    },
    {
      name: 'N. Iyer',
      text: 'I\'m grateful for the honest and patient guidance from PTL Real Estate in finding our dream luxury villa. Their commitment to client satisfaction is evident from start to finish. Truly a reliable partner in real estate.',
      rating: 5,
    },
    {
      name: 'L. Fernandez',
      text: 'From the first consultation to closing, PTL Real Estate exceeded my expectations. They helped me navigate Chennai\'s property market with ease and integrity. Their responsiveness and local expertise make all the difference.',
      rating: 5,
    },
    {
      name: 'M. Rajan',
      text: 'Thanks to PTL Real Estate, selling my property was smooth and stress-free. The team\'s dedication and transparent communication earned my trust completely. I felt supported at every step.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-100" size={40} />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-blue-900">Verified Client</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-900 px-8 py-4 rounded-lg">
            <p className="text-white text-lg font-semibold">
              Join hundreds of satisfied clients who trust PTL Real Estate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
