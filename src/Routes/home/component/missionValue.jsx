import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Section from "./Section";
import check from "./check.svg";
import { mission_value } from "../../../components/data/Data";

const FeatureItem = ({ feature }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start py-3 border-t border-red-500/20"
  >
    <img src={check} className="h-6 w-6 text-red-500" alt="Check" />
    <p className="ml-4 text-gray-300">{feature}</p>
  </motion.li>
);

const ValueCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full lg:flex-1 px-6 py-10 bg-[#1A1825] border border-red-500/10 rounded-2xl shadow-lg hover:shadow-red-500/5 transition-all duration-300"
  >
    <h4 className="text-4xl lg:text-5xl font-bold mb-8 text-red-500">
      {item.title}
    </h4>
    <ul className="space-y-2">
      {item.features.map((feature, idx) => (
        <FeatureItem key={idx} feature={feature} />
      ))}
    </ul>
  </motion.div>
);

export default function MissionValue() {
  return (
    <Section className="overflow-hidden text-white bg-[#0E0C15] py-20" id="mission_value">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
        <Heading
          tag="Ce qui définit ToemeXpertise"
          title="L'ADN de ToemeXpertise!"
          className="text-center mb-16"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col lg:flex-row gap-8 justify-center"
        >
          {mission_value.map((item) => (
            <ValueCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}