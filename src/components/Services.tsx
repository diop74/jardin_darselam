import React from 'react';
import { Baby, Palette, Music, Users, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: "Crèche (0-3 ans)",
      description: "Un accueil personnalisé pour les tout-petits avec des activités d'éveil adaptées à leur développement.",
      features: ["Suivi individualisé", "Activités sensorielles", "Sieste adaptée", "Repas équilibrés"],
      icon: Baby,
      color: "bg-red-100 text-red-600",
      image: "https://images.pexels.com/photos/8612988/pexels-photo-8612988.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Jardin d'enfants (3-6 ans)",
      description: "Préparation douce à la scolarité avec des activités ludiques et éducatives variées.",
      features: ["Préparation scolaire", "Activités groupe", "Apprentissage ludique", "Développement autonomie"],
      icon: Users,
      color: "bg-green-100 text-green-600",
      image: "https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Ateliers créatifs",
      description: "Développement de la créativité à travers l'art, la musique et les activités manuelles.",
      features: ["Arts plastiques", "Éveil musical", "Bricolage", "Expression corporelle"],
      icon: Palette,
      color: "bg-yellow-100 text-yellow-600",
      image: "/images/WhatsApp Image 2025-08-28 at 20.30.21.jpeg"
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Horaires flexibles",
      description: "Ouvert de 8h00 à 14h00",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Music,
      title: "Éveil musical",
      description: "Sessions d'initiation musicale",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Award,
      title: "Certification qualité",
      description: "Agréé par les services de PMI",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
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
            Nos <span className="text-green-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des programmes adaptés à chaque tranche d'âge pour un développement harmonieux de votre enfant
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Services */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;