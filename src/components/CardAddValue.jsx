import React from "react";
import { Card, CardContent } from "./ui/card";

import { useMediaQuery } from "@chakra-ui/react";
const CardAddValue = () => {
    const [isDesktop, setisDesktop] = useMediaQuery("(min-width: 1100px)", '(display-mode: browser)');
    if(isDesktop){

        return (
            <div>
              <Card className="w-[80%] ml-[5.7%] h-[660px]">
                <CardContent>
                  <div className="w-full flex flex-row mt-4 ">
                    <div className="w-[80%] mt-4 ">
                      <img
                        src={process.env.PUBLIC_URL + "men-hands.png"}
                        alt=""
                        className="h-[600px] rounded-md z-0"
                      />
                    </div>
                    <div className="w-[100%] flex flex-col gap-12 text-left mt-10 relative ">
                      <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                        <div className="ml-3 ">
                          <h1>Une equipe très qualifié</h1>
                          <p>
                            Notre équipe est constituée d'ingénieurs diplômés de grandes
                            écoles, avec un tiers de nos effectifs ayant le niveau de
                            Doctorant.
                          </p>
                        </div>
                      </div>
                      <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                        <div className="ml-3">
                        <h1>Des cahiers de charges respecté</h1>
                        <p>
                          En plus dêtre bien défini, nous vous garantissons un recpect
                          des cahiers de charges à travers une communication régulière
                          avec le client.
                        </p>
                        </div>
                      </div>
                      <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                        <div className="ml-3 ">
                        <h1>Un support 24/7</h1>
                        <p>
                          Notre équipe est réactive et prête à répondre à vos demandes
                          et préoccupations.
                        </p>
                        </div>
                      </div>
                      <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                       <div className="ml-3 ">
                       <h1>Des calendriers respectés</h1>
                        <p>Nos services sont effectués avec assiduité et rigueure.</p>
                       </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );

    }
    else{
       
            return (
                <div>
                  <Card className="w-[100%]  h-[660px]">
                    <CardContent>
                      <div className="w-full flex flex-row  ">
                       
                        <div className="w-full flex flex-col gap-8 text-left relative ">
                          <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                            <div className="ml-3 ">
                              <h1 className="text-2d3954]">Une equipe très qualifié</h1>
                              <p className="font-light">
                                Notre équipe est constituée d'ingénieurs diplômés de grandes
                                écoles, avec un tiers de nos effectifs ayant le niveau de
                                Doctorant.
                              </p>
                            </div>
                          </div>
                          <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                            <div className="ml-3">
                            <h1>Des cahiers de charges respecté</h1>
                            <p>
                              En plus dêtre bien défini, nous vous garantissons un recpect
                              des cahiers de charges à travers une communication régulière
                              avec le client.
                            </p>
                            </div>
                          </div>
                          <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                            <div className="ml-3 ">
                            <h1>Un support 24/7</h1>
                            <p>
                              Notre équipe est réactive et prête à répondre à vos demandes
                              et préoccupations.
                            </p>
                            </div>
                          </div>
                          <div className="shadow-md rounded-[8px]  z-99 ml-3 pull-up ">
                           <div className="ml-3 ">
                           <h1>Des calendriers respectés</h1>
                            <p>Nos services sont effectués avec assiduité et rigueure.</p>
                           </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
        
    }
 
};

export default CardAddValue;
