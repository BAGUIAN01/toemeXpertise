import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Arrow from "./Arrow";
import ClipPath from "./ClipPath";
import { services_items } from "../../../components/data/Data";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const Services = () => {
  return (
    <Section id="features">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Nos domaines d'eXpertise"
          text="Découvrez l'éventail riche et varié de nos domaines d'activités, où
          chaque secteur trouve sa place pour répondre à vos besoins et intérêts."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {services_items.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="text-2xl leading-normal mb-5">{item.title}</h5>
                <p className=" text-[0.875rem] leading-6 md:text-base mb-6 text-n-3 text-left font-semibold">
                  {item.text}
                </p>
                <div className="flex items-center justify-center mb-0 gap-2">
                  <Link to="/websiteSolution">
                    <Button variant="ghost" className="flex flex-row gap-3 no-underline">
                      <img
                        src={item.iconUrl}
                        className="w-[48px] h-[48px]"
                        alt={item.title}
                      />

                      <p className="ml-auto mt-3 font-code text-xs font-bold text-[#FFFFFF] uppercase tracking-wider">
                        En savoir plus
                      </p>
                      <Arrow />
                    </Button>
                  </Link>
                </div>
              </div>

              {item.light && (
                <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
              )}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#features)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={process.env.PUBLIC_URL + item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
