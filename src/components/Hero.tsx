import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/IMG-20250116-WA0038.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/70 via-yellow-400/60 to-green-500/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Un lieu d'épanouissement 
              <span className="text-yellow-200"> et de sérénité</span> 
              <br />pour vos enfants
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Chez Dar Selam, chaque enfant grandit dans un environnement sécurisé, 
              bienveillant et stimulant, entouré d'éducateurs passionnés.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Inscrire mon enfant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Nous contacter</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Pourquoi choisir Dar Selam ?</h3>
              <div className="space-y-4">
                {[
                  "Équipe qualifiée et bienveillante",
                  "Environnement sécurisé et adapté",
                  "Programme éducatif personnalisé",
                  "Activités d'éveil variées"
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;