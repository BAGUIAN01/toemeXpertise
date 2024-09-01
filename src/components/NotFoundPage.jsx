// NotFoundPage.jsx

import React from "react";


import { motion } from "framer-motion";
import "../Styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="row cover" style={{backgroundColor:"gainsboro", height:"100%"}}>
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{marginTop:"15%"}}>
      <h1 style={{ textAlign: "center" }}>404 - Page non trouvée</h1>
      <p style={{ textAlign: "center" }}>
        Désolé, la page que vous recherchez est introuvable.
      </p>
      <div className="balls-container">
        <div className="ball blue"></div>
        <div className="ball light-blue"></div>
        <div className="ball light-red"></div>
      </div>
      </div>
    </motion.div>
    </div>
  );
};

export default NotFoundPage;
