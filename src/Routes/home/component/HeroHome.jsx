import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";
import TypeWriterEffect from "react-typewriter-effect";
import Section from "./Section";
import Generating from "./Generating";
import Notification from "./Notification";
import PlusSvg from "./PlusSvg";

const HeroHome = () => {
  const [mounted, setMounted] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    "Développement web",
    "Intelligence artificielle",
    "Data science",
    "Développement logiciel",
    "Développement mobile",
  ];

  return (
    <Section
      className="pt-30 mt-20 sm:mt-10 pb-16  overflow-hidden text-white bg-[#0E0C15]"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={parallaxRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex items-center flex-col"
        >
          <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Libérons la créativité pour bâtir l'inédit avec{" "}
            <span className="text-red-500">TomeXpertise</span>
          </h1>
          <div className="h-20 md:h-24">
            <TypeWriterEffect
              textStyle={{
                fontWeight: 600,
                fontSize: "1.5rem",
                color: "white",
              }}
              startDelay={400}
              cursorColor="#3F3D56"
              multiText={services}
              multiTextDelay={1000}
              typeSpeed={50}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-6 bg-gray-800 rounded-t-2xl" />
            <div className="aspect-video relative">
              <img
                src={process.env.PUBLIC_URL + "/images/home/robot.jpg"}
                className="w-full h-full object-cover"
                alt="AI Visualization"
              />
              <Generating className="absolute left-4 right-4 bottom-4" />
            </div>
          </div>

          <ScrollParallax isAbsolutelyPositioned>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -left-20 top-1/4 hidden lg:block"
            >
              <Notification
                className="w-64"
                title="AI Innovation"
              />
            </motion.div>
          </ScrollParallax>

          <ScrollParallax isAbsolutelyPositioned>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -right-20 bottom-1/4 hidden lg:block"
            >
              <Notification
                className="w-64"
                title="Team Collaboration"
              />
            </motion.div>
          </ScrollParallax>
        </motion.div>

        {/* <div className="mt-16 flex justify-center space-x-4">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4 py-2 bg-red-500 rounded-full text-sm font-medium"
            >
              {service}
            </motion.div>
          ))}
        </div> */}
      </div>
    </Section>
  );
};

export default HeroHome;