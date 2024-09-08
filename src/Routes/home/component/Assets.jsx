import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import check from "./check.svg";
import Section from "./Section";
import curve2 from "./curve-2.svg";
import curve1 from "./curve-1.svg";
import { collabText, collabContent, collabApps } from "../../../components/data/Data";

const Assets = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle((prevAngle) => prevAngle + 45);
      setActiveIndex((prevIndex) => (prevIndex + 1) % collabApps.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section className="bg-[#0E0C15] overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex items-center">
        <motion.div 
          className="max-w-xl lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            L'identité de ToemeXpertise c'est:
          </h2>
          <ul className="space-y-6 mb-10">
            {collabContent.map((item, index) => (
              <motion.li 
                key={item.id}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={check} className="w-6 h-6 mt-1 text-red-500" alt="check" />
                <div className="ml-4">
                  <h6 className="text-lg font-semibold text-white">{item.title}</h6>
                  {item.text && (
                    <p className="mt-2 text-gray-400">{item.text}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
          <Button variant="ghost" className="hidden">Try it now</Button>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 mb-12 lg:mb-16 max-w-md mx-auto">
            {collabText}
          </p>

          <div className="relative w-80 h-80 mx-auto">
            <motion.div 
              className="absolute inset-0   rounded-full"
              animate={{ rotate: rotationAngle }}
              transition={{ duration: 2, ease: "linear" }}
            />
            <div className="absolute inset-4  rounded-full flex items-center justify-center">
              {/* <motion.img
                src={process.env.PUBLIC_URL + "/logo.png"}
                className="w-16 h-16"
                alt="ToemeXpertise"
                animate={{ rotate: -rotationAngle }}
                transition={{ duration: 2, ease: "linear" }}
              /> */}
            </div>
            {collabApps.map((app, index) => (
              <motion.div
                key={app.id}
                className="absolute w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center"
                style={{
                  top: `${50 - 40 * Math.cos((index * Math.PI) / 4)}%`,
                  left: `${50 + 40 * Math.sin((index * Math.PI) / 4)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ 
                  scale: activeIndex === index ? 1.2 : 1,
                  rotate: -rotationAngle 
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={process.env.PUBLIC_URL + app.icon}
                  alt={app.title}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2">
            <img src={curve1} className="w-96 opacity-50" alt="Curve 1" />
          </div>
          <div className="hidden lg:block absolute bottom-0 left-0 transform -translate-x-1/2">
            <img src={curve2} className="w-64 opacity-50" alt="Curve 2" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Assets;