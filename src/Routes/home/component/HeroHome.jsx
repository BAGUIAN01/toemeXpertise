import React, { useEffect, useState, useRef } from "react";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import { MouseParallax } from "react-just-parallax";
import PlusSvg from "./PlusSvg";
import TypeWriterEffect from "react-typewriter-effect";
import Autoplay from "embla-carousel-autoplay";

function HeroHome() {
  const parallaxRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] text-white"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative"
        ref={parallaxRef}
      >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="font-semibold text-[2.5rem] mt-12 text-white leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
            Libérerons la créativité pour bâtir l’inédit avec {` `}
            <span className="inline-block relative">TomeXpertise </span>
          </h1>
          <div className="ml-[20%]">
            <p className="text-[0.875rem] ml-[10%] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto mb-6  lg:mb-8">
              <TypeWriterEffect
                textStyle={{
                  fontWeight: 600,
                  fontSize: "2em",
                  padding: "0.5rem 0 2rem 0",
                  color: "white",
                }}
                startDelay={400}
                cursorColor="#3F3D56"
                multiText={[
                  "Developpement web",
                  "Intelligence artificielle",
                  "Data science",
                  "Developpement logiciel",
                  "Developpement mobile",
                ]}
                multiTextDelay={800}
                typeSpeed={50}
                multiTextLoop={true}
              />
            </p>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-[#0E0C15] rounded-[1rem]">
              <div className="h-[1.4rem] bg-[#43435C] rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={process.env.PUBLIC_URL + "/images/home/robot.jpg"}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] w-80 h-20 px-1 py-1 bg-[#474060]/40 backdrop-blur border border-[#FFFFFF]/10 rounded-2xl xl:flex">
                    
                     
                    
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Team"
                  />
                </ScrollParallax>
              </div>
            </div>

            <div>
              <div className="relative z-1 h-6 mx-2.5 bg-[#1B1B2E] shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
              <div className="relative z-1 h-6 mx-6 bg-[#1B1B2E]/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
            </div>

            <div className="absolute z-[-100] -top-[42.375rem] left-1/2 w-[78rem] aspect-square border-0  -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
              <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                  <div
                    className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                  <div
                    className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                  <div
                    className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                  <div
                    className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                  <div
                    className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                  <div
                    className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  />
                </div>
              </MouseParallax>
            </div>

            <div>
              <div className="hidden absolute top-[40rem] left-10 right-10 h-0.25 bg-white pointer-events-none xl:block" />

              <PlusSvg className="hidden absolute top-[40rem] left-[-20%] z-2 pointer-events-none xl:block" />

              <PlusSvg className="hidden absolute top-[40rem] right-[-20%] z-2 pointer-events-none xl:block" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroHome;
