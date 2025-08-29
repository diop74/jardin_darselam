import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Khadijetou mint Houssein",
      role: "Maman de Salma (4 ans)",
      content: "Dar Selam a transformé la vie de ma fille. Elle y va chaque matin avec le sourire et revient pleine d'histoires merveilleuses. L'équipe est exceptionnelle et très attentionnée.",
      rating: 5,
      image: "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Mariame",
      role: "Maman de Awa (3 ans) et Adama (3 ans)",
      content: "Nous recommandons vivement Dar Selam. Nos deux enfants y ont appris l'autonomie, la socialisation et ont développé leur créativité dans un cadre sécurisé et bienveillant.",
      rating: 5,
      image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Aminata Gueue",
      role: "Maman de Fatou Kine (3 ans)",
      content: "L'approche pédagogique de Dar Selam est remarquable. Ma fille a gagné en confiance et en autonomie. Les éducatrices sont à l'écoute et vraiment professionnelles.",
      rating: 5,
      image: "https://images.pexels.com/photos/3771071/pexels-photo-3771071.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Monsieur Diack",
      role: "Papa de Amadou Diack (4 ans)",
      content: "En tant que père, je suis rassuré de savoir mon fils dans un environnement aussi bien structuré. Les activités sont variées et le suivi individualisé est appréciable.",
      rating: 5,
      image: "https://images.pexels.com/photos/3771077/pexels-photo-3771077.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-yellow-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Témoignages <span className="text-green-500">Parents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'expérience de nos familles et leur confiance en Dar Selam
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-red-400 mb-4 mx-auto md:mx-0" />
                    
                    {/* Testimonial text */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonials[currentTestimonial].content}"
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    {/* Author */}
                    <div>
                      <p className="font-bold text-gray-800 text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-500">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full hover:shadow-xl transition-all flex items-center justify-center hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full hover:shadow-xl transition-all flex items-center justify-center hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-red-400 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;