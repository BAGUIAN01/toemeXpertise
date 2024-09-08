import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const stats = [
  { data: 10, title: "Clients", icon: "👥" },
  { data: 21, title: "Projets", icon: "🚀" },
  { data: 4, title: "Pays", icon: "🌍" },
  { data: 3, title: "Collaborateurs", icon: "👨‍💻" },
];

const StatItem = ({ item, isVisible }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full sm:w-auto"
  >
    <div className="bg-[#1A1825] px-6 py-8 rounded-2xl shadow-lg hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1 border border-red-500/10">
      <div className="text-5xl mb-4">{item.icon}</div>
      {isVisible && (
        <h4 className="text-4xl text-white font-bold mb-2">
          <CountUp start={0} end={item.data} duration={2.5} />
          <span className="text-red-500">+</span>
        </h4>
      )}
      <p className="text-gray-300 font-medium uppercase tracking-wider">
        {item.title}
      </p>
    </div>
  </motion.li>
);

export default function Stats() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <section className="py-16 px-4 bg-[#0E0C15]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h3 className="text-white text-3xl sm:text-4xl font-bold mb-4">
              Notre Impact en Chiffres
            </h3>
            <p className="text-gray-300 text-lg">
              Découvrez comment nous transformons des idées en réalité pour nos clients à travers le monde.
            </p>
          </motion.div>
          <AnimatePresence>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((item, idx) => (
                <StatItem key={idx} item={item} isVisible={counterOn} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </section>
    </ScrollTrigger>
  );
}