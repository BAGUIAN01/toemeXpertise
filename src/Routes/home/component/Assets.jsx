import { Button } from "../../../components/ui/button";
import check from "./check.svg";
import brainwaveSymbol from "./brainwave-symbol.svg";
import Section from "./Section";
import curve2 from "./curve-2.svg";
import curve1 from "./curve-1.svg";
import { useState, useEffect } from "react";
import {collabText,collabContent,collabApps} from "../../../components/data/Data"

const Assets = () => {
    const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle((prevAngle) => prevAngle + 45); // Augmentez l'angle de rotation de 45 degrés à chaque fois
    }, 2000); // Changez la valeur de l'intervalle selon votre besoin

    return () => clearInterval(intervalId); // Nettoyez l'intervalle lors du démontage du composant
  }, []);

  return (
    <Section>
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight text-left mb-4 md:mb-8">
            l'identité de ToemeXpertise c'est:
          </h2>
          <ul className="max-w-[22rem] mb-10 ml-[-30px] md:mb-14 text-left">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} className="w-[30px] h-[30px]" alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button variant="ghost" className="hidden">Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square  p-[0.2rem] ml-16 bg-conic-gradient rounded-full items-center flex">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    className="w-[3rem] h-[3rem]"
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${rotationAngle}deg)` }}>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border-0  rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="w-[3rem] h-[3rem] mx-auto my-auto object-cover relative "
                      alt={app.title}
                      src={process.env.PUBLIC_URL + app.icon}
                      style={{ width: app.width + "px", height: app.height + "px" }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            
            <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
            <img src={curve1} className="w-[552px] h-[182px]" alt="Curve 1" />
            </div>

            <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
              <img src={curve2} className="w-[162px] h-[76px] stroke-white" alt="Curve 2" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Assets;
