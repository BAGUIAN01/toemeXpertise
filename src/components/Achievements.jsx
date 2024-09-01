import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ContactUsCard from "./ContactUsCard";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../Styles/achievement.css";
import {
  achievement_items,
  achievement_items1,
  achievement_items2,
  achievement_items3,
} from "./data/Data";
function Achievement() {
  const styleimage = {
    width: "100%",
    height: "345px",
  };

  const styletext = {
    color: "#e61227",
    fontWheigh: "bolder",
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <hr className="mt-2" style={{ fontWeight: "bolder", width: "100%" }} />
        <h3 className="shadow text-align-center">
          Nos Réalisations Précedentes
        </h3>
        <hr className="mt-2" style={{ fontWeight: "bolder", width: "100%" }} />
      </div>
      <div className="row ">
        <div className="col" style={{ maxWidth: "50%" }}>
          <div className="container shadow p-3">
            <div>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={true}
                pagination={true}
                loop={true}
              >
                {achievement_items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      style={styleimage}
                      src={process.env.PUBLIC_URL + item.image}
                      className="d-block w-100"
                      alt="..."
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container text-center">
            <p style={{ textAlign: "left" }}>
              <strong className="text-center" style={styletext}>
                Le logiciel FinTech
              </strong>{" "}
              <br />
              Découvrez notre logiciel innovant, expert en traitement de
              données, dédié à la prédiction précise des marchés boursiers.
              Alliant technologie de pointe et analyses sophistiquées, notre
              solution offre une vision éclairée pour vous aider à naviguer avec
              confiance dans le monde complexe des marchés financiers. <br />{" "}
              <strong className="text-center" style={styletext}>
                Type :{" "}
              </strong>
              <br />
              Bureautique <br />
              <strong className="text-center" style={styletext}>
                Technologies Utilisées:{" "}
              </strong>
              <br />
              PQT5,Deep Learning,Yahoo Finance,HTML5, CSS3, jQuery. <br />
              <strong className="text-center" style={styletext}>
                Hébergement :{" "}
              </strong>
              <br />
              Une solution d'hébergement fiable pour une disponibilité maximale.{" "}
              <br />
              <strong className="text-center" style={styletext}>
                Maintenance :{" "}
              </strong>
              <br />
              Mises à jour régulières pour assurer sécurité et pertinence du
              contenu.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="container text-center">
            <p style={{ textAlign: "left" }}>
              <strong className="text-center" style={styletext}>
                Ecommerce
              </strong>{" "}
              <br />
              Plongez dans l'univers de l'e-commerce sur mesure avec notre
              expertise en développement web Django. Découvrez comment nous
              avons mis en valeur l'identité unique d'un client à travers notre
              Carousel, une vitrine honnête de notre savoir-faire. . <br />{" "}
              <strong className="text-center" style={styletext}>
                Type :{" "}
              </strong>
              <br />
              eCommerce <br />
              <strong className="text-center" style={styletext}>
                Technologies Utilisées:{" "}
              </strong>
              <br />
              Django,Sqlite3,MySql,HTML5, CSS3, javascript. <br />
              <strong className="text-center" style={styletext}>
                Hébergement :{" "}
              </strong>
              <br />
              Une solution d'hébergement fiable pour une disponibilité maximale.{" "}
              <br />
              <strong className="text-center" style={styletext}>
                Maintenance :{" "}
              </strong>
              <br />
              Mises à jour régulières pour assurer sécurité et pertinence du
              contenu.
            </p>
          </div>
        </div>
        <div className="col" style={{ maxWidth: "50%" }}>
          <div className="container shadow p-3">
            <div>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={true}
                pagination={true}
                loop={true}
              >
                {achievement_items1.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      style={styleimage}
                      src={process.env.PUBLIC_URL + item.image}
                      className="d-block w-100"
                      alt="..."
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col" style={{ maxWidth: "50%" }}>
          <div className="container shadow p-3">
            <div>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={true}
                pagination={true}
                loop={true}
              >
                {achievement_items2.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      style={styleimage}
                      src={process.env.PUBLIC_URL + item.image}
                      className="d-block w-100"
                      alt="..."
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="container text-center">
            <p style={{ textAlign: "left" }}>
              <strong className="text-center" style={styletext}>
                InnovAgri
              </strong>{" "}
              <br />
              Explorez une nouvelle ère dans l'agriculture avec notre solution
              bureautique innovante dédiée à la prédiction des rendements.
              Découvrez comment notre technologie révolutionnaire ouvre la voie
              à des récoltes plus prospères et à un avenir agricole plus
              durable.
              <br />{" "}
              <strong className="text-center" style={styletext}>
                Type :{" "}
              </strong>
              <br />
              Bureautique <br />
              <strong className="text-center" style={styletext}>
                Technologies Utilisées:{" "}
              </strong>
              <br />
              PYQT5,Qt Designer,Deep Learning,HTML5, CSS3. <br />
              <strong className="text-center" style={styletext}>
                Hébergement :{" "}
              </strong>
              <br />
              Une solution d'hébergement fiable pour une disponibilité maximale.{" "}
              <br />
              <strong className="text-center" style={styletext}>
                Maintenance :{" "}
              </strong>
              <br />
              Mises à jour régulières pour assurer sécurité et pertinence du
              contenu.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="container text-center">
            <p style={{ textAlign: "left" }}>
              <strong className="text-center" style={styletext}>
                Systeme de traçage
              </strong>{" "}
              <br />
              Découvrez notre solution de pointe pour la détection de numéros
              d'immatriculation et la reconnaissance faciale, développée avec
              Flask. Explorez comment notre technologie de reconnaissance
              optique de caractères (OCR) et de vision par ordinateur
              révolutionne la sécurité et la gestion des données. <br />{" "}
              <strong className="text-center" style={styletext}>
                Type :{" "}
              </strong>
              <br />
              Api avec extension Dashboard
              <br />
              <strong className="text-center" style={styletext}>
                Technologies Utilisées:{" "}
              </strong>
              <br />
              Flask,Sqlite3,Big Query,MS Azure,HTML5, CSS3, javascript. <br />
              <strong className="text-center" style={styletext}>
                Hébergement :{" "}
              </strong>
              <br />
              Une solution d'hébergement fiable pour une disponibilité maximale.{" "}
              <br />
              <strong className="text-center" style={styletext}>
                Maintenance :{" "}
              </strong>
              <br />
              Mises à jour régulières pour assurer sécurité et pertinence du
              contenu.
            </p>
          </div>
        </div>
        <div className="col" style={{ maxWidth: "50%" }}>
          <div className="container shadow p-3">
            <div>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={true}
                pagination={true}
                loop={true}
              >
                {achievement_items3.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      style={styleimage}
                      src={process.env.PUBLIC_URL + item.image}
                      className="d-block w-100"
                      alt="..."
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div
          className=" container shadow p-1 mt-3 text-center"
          style={{
            backgroundColor: "#ffffff",
            height: "100px",
            width: "600px",
            color: "#080707",
          }}
        >
          <h5>
            Vous avez été impressionné par nos projets précédents ? Si l'un
            d'eux suscite votre intérêt, n'hésitez pas à nous contacter pour
            discuter de votre propre projet. Nous sommes prêts à transformer
            votre vision en réalité. <br />
          </h5>
          <ContactUsCard name={"Nous contacter ici"}></ContactUsCard>
        </div>
        <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </div>
   
  );
}
export default Achievement;
