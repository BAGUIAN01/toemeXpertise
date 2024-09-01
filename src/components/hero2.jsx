import React from "react";
import "../Styles/hero2.css";
import TypeWriterEffect from "react-typewriter-effect";

const StarryNight = () => {
  return (
    <div
      className="starry-night"
      style={{
        background: "#0f0f23",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="stars-container text-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
      <div class="mx-auto" style={{ width: "600px" }}>
        <div className="hero-text">
          <TypeWriterEffect
            textStyle={{
              fontSize: "2rem",
              fontWeight: 300,
              color: "#fff",
            }}
            startDelay={100}
            cursorColor="#fff"
            text=" Laissez-nous vous guider vers l'innovation, et ensemble, transformons votre vision en une réalité vibrante et dynamique. Votre monde est notre terrain de jeu, prêt à être réinventé et enrichi par notre collaboration."
            typeSpeed={150}
            hideCursorAfterText={true}
            loop={true}
          />
        </div>
      </div>
      <div className="moon moon-new"></div>
      <div className="moon moon-full"></div>
      <div className="moon moon-full1"></div>
    </div>
  );
};

export default StarryNight;
