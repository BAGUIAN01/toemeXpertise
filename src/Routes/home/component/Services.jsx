import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "./Arrow";
import { services_items } from "../../../components/data/Data";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={process.env.PUBLIC_URL + item.imageUrl} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <img 
        src={item.iconUrl} 
        alt={item.title + " icon"} 
        className="absolute bottom-4 left-4 w-12 h-12 bg-red-500 rounded-full p-2 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-gray-300 text-sm mb-4">
        {item.text}
      </p>
      <Link 
        to="/websiteSolution" 
        className="inline-flex items-center text-red-500 hover:text-white transition-colors duration-300"
      >
        En savoir plus
        <Arrow className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

const Services = () => {
  const displayedServices = services_items.slice(0, 6);

  return (
    <Section id="features" className="bg-[#0E0C15] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Heading
            title="Nos domaines d'eXpertise"
            text="Découvrez l'éventail riche et varié de nos domaines d'activités, où chaque secteur trouve sa place pour répondre à vos besoins et intérêts."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;