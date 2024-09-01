import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { IoCalculator } from "react-icons/io5";
import ContactUsCard from "./ContactUsCard";
const CardDevis = () => {
  return (
    <div>
      <Card className="w-[90%] ml-[5.7%] h-[400px]">
        <CardContent>
          <div className="flex flex-row  gap-2 mt-4 p-0">
            <div className="w-[48%] m-0">
              <img
                src={process.env.PUBLIC_URL + "devis-freelance.jpg"}
                alt=""
                className="h-[350px] rounded-md"
              />
            </div>
            <div className="w-[100%] ml-5 gap-5">
              <h1 className="mt-6 text-left !important">
                Obtenez une proposition sur mesure pour votre projet
              </h1>
              <p className="text-left ">
                Vous avez un projet pour une étude et/ou de la réalisation, vous
                aimerez qu'on vous digitalise vos process, communiquez-nous les
                détails de votre projet et nos équipes vous contacterons dans un
                délai de 48h pour mieux analyser votre besoin et vous proposer
                un devis adapté.
              </p>

              <ContactUsCard
                name={"Obtenez un devis"}
                icon={<IoCalculator />}
                bt_style={
                  "ml-0 absolute left-[40%] bg-[#044444] text-xl font-bold !important h-12"
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDevis;
