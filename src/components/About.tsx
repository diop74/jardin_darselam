import React from 'react';
import { Heart, Shield, Palette, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Sécurité",
      description: "Un environnement sûr et protégé pour tous nos petits",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Heart,
      title: "Bienveillance", 
      description: "Une approche douce et attentionnée pour chaque enfant",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Palette,
      title: "Créativité",
      description: "Stimuler l'imagination et l'expression artistique",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: BookOpen,
      title: "Éducation",
      description: "Un apprentissage ludique adapté à chaque âge",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  const team = [
    {
      name: "Hawa Thiam",
      role: "Directrice pédagogique",
      image: "/public/images/WhatsApp Image 2025-08-28 at 20.40.09.jpeg",
      experience: "+15 ans d'expérience"
    },
    {
      name: "Taty Traore",
      role: "Éducatrice spécialisée",
      image: "/images/IMG-20250116-WA0038.jpg",
      experience: "+4 ans d'expérience"
    },
    {
      name: "Mariam Dicko",
      role: "Assistante maternelle",
      image: "/images/WhatsApp Image 2025-08-28 at 20.44.19.jpeg",
      experience: "+2 ans d'expérience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-pink-50 to-yellow-50">
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
            À propos de <span className="text-red-500">Dar Selam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis 2010, Dar Selam accompagne les familles en offrant un cadre éducatif 
            exceptionnel où chaque enfant peut s'épanouir pleinement dans le respect de son rythme.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Dar Selam est née du rêve de créer un espace où les enfants peuvent grandir 
                en toute sérénité. Fondée par une équipe d'éducatrices passionnées, notre 
                crèche-jardin d'enfants privilégie une approche humaniste et bienveillante.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nous croyons que chaque enfant est unique et mérite une attention 
                particulière pour révéler son plein potentiel dans un environnement 
                stimulant et sécurisant.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/IMG-20250828-WA0028.jpg"
                alt="Enfants jouant à Dar Selam"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-700" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos Valeurs
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 text-center mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Notre Équipe
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">{member.experience}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-pink-500 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;