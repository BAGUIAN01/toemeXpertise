
import React from "react";
import { StickyScroll } from "./stickeyScrollReveal";


const content = [
  {
    title: "Site web e-commerce",
    description:
      "Développement d'un site web pour une boutique en ligne, visant à offrir une expérience utilisateur conviviale avec des fonctionnalités telles qu'un catalogue de produits, un panier d'achat sécurisé et des systèmes de paiement en ligne.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={"/images/project/img2.png"}
         
          className="h-full w-full "
          alt="site ecommerce"
        />
      </div>
    ),
  },
  {
    title: "Plateforme de data science",
    description:
      "Plateforme que nous avons developper permettant de faire de data science sans code.Cette plateforme offre une expérience intuitive pour l'analyse et la manipulation de données, la création de modèles prédictifs, et la visualisation des résultats. L'équipe de développement est composée d'experts en science des données et en développement logiciel",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={"/images/project/streamlit.png"}
         
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "logiciel de vision par ordinateur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, velit eu mollis vehicula, arcu arcu volutpat ante, eget fringilla tortor sem a risus. Maecenas vestibulum nunc eu eros commodo, sit amet bibendum tortor venenatis. Duis at bibendum justo. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={"/images/project/Screenshot 2023-12-07 130542.png"}
         
          className="h-full w-full object-cover"
          alt="vision"
        />
      </div>
    ),
  },
  {
    title: "logiciel de gestion de magasin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, velit eu mollis vehicula, arcu arcu volutpat ante, eget fringilla tortor sem a risus. Maecenas vestibulum nunc eu eros commodo, sit amet bibendum tortor venenatis. Duis at bibendum justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, velit eu mollis vehicula, arcu arcu volutpat ante, eget fringilla tortor sem a risus. Maecenas vestibulum nunc eu eros commodo, sit amet bibendum tortor venenatis. Duis at bibendum justo. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={"/images/project/dev_logiciel.PNG"}
         
          className="h-full w-full object-cover"
          alt="gestion de magasin"
        />
      </div>
    ),
  },
];
export function StickyScrollLayout() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
