import React from "react";
import ContactUsCard from "./ContactUsCard";

/* The above code defines a React functional component called `Culture` that represents a section of a
website related to the culture, mission, vision, and values of a company named ToemeXpertise. */
function Culture(props) {
  const containerStyle = {
    display: "flex",
    backgroundImage: 'url("/images/about/banner.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    border: "4px",
    borderRadius: "4px",
    marginTop: "10px",
  };
  return (
    <>
      <div className="w3-row w3-padding-64" id="about">
        <div className="w3-col m6 w3-padding-large w3-hide-small mx-auto">
          <img
            src={process.env.PUBLIC_URL + props.image}
            alt="project1"
            style={{ maxWidth: "100%", height: "80%" ,backgroundSize:"cover"}}
          />
        </div>

        <div className="w3-col m6 w3-padding-large">
          <h1 className="w3-center">À propos de ToemeXpertise</h1>
          <hr />
          <h5 class="w3-center">
            {" "}
            <strong>Tradition depuis 2023</strong>
          </h5>
          <p className="w3-large" style={{ textAlign: "justify" }}>
            ToemeXpertise a été créée en 2023 dans le but de fournir des
            solutions digitales innovantes à ses clients. Fondée par trois
            ingénieurs en Intelligence Artificielle et Data Science ,
            ToemeXpertise s'engage à offrir des services de pointe dans le
            domaine de <strong>digitalisation</strong>. 
          </p>
          <br />
          <p
            className="w3-large  w3-hide-medium"
            style={{ textAlign: "justify" }}
          >
            Que vous soyez une petite entreprise cherchant à optimiser ses
            processus ou une grande entreprise visant la transformation
            digitale, nous sommes là pour vous accompagner à chaque étape. Notre
            équipe dynamique de professionnels expérimentés est déterminée à
            trouver des solutions sur mesure répondant à vos besoins
            spécifiques.
          </p>
        </div>
      </div>
      <div className="container shadow pw-4">
        <div className="row">
          <div className="col">
            <h1 style={{ fontWeight: "bolder" }}>MISSION</h1>
            <div className="card" style={{ width: "18rem;" }}>
              <img
                className="card-img-top rounded-circle"
                src={process.env.PUBLIC_URL + "/images/about/Mission.png"}
                alt="project1"
                style={{ width: "150px", height: "150px", objectFit: "cover", margin: "auto", display: "block" }} 
              />
              <div className="card-body">
                <p className="card-text">
                  <ul>
                    <li className="" style={{ textAlign: "left" }}>
                      Se positionner en tant que leader africain dans le domaine
                      de l'informatique, en se démarquant par l'excellence dans
                      la conception, l'ingénierie, la livraison de projets et la
                      gestion des actifs.
                    </li>
                    <li className="" style={{ textAlign: "left" }}>
                      Proposer des solutions informatiques novatrices et
                      durables, couvrant l'ensemble du spectre industriel et
                      urbain, pour stimuler l'avancement technologique.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <h1 style={{ fontWeight: "bolder" }}>VISION</h1>
            <div className="card" style={{ width: "18rem;" }}>
              <img
                className="card-img-top rounded-circle"
                src={process.env.PUBLIC_URL + "/images/about/Vision.png"}
                alt="project1"
                style={{ width: "150px", height: "150px", objectFit: "cover", margin: "auto", display: "block" }} 
              />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: "left" }}>
                  Envisageant un horizon où l'informatique forge le chemin de l'{" "}
                  <strong>excellence</strong> notre vision est d'insuffler une
                  transformation numérique qui redéfinit les normes, élevant
                  ainsi l'<strong>Afrique</strong>
                  vers de nouveaux horizons technologiques."
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <h1 style={{ fontWeight: "bolder" }}>VALEURS</h1>
            <div className="card" style={{ width: "18rem;" }}>
              <img
                className="card-img-top rounded-circle"
                src={process.env.PUBLIC_URL + "/images/about/Values.png"}
                alt="project1"
                style={{ width: "150px", height: "150px", objectFit: "cover", margin: "auto", display: "block" }} 
              />
              <div className="card-body">
                <p style={{ textAlign: "left" }}>
                  Guidés par des principes fondamentaux, nous sommes fiers de
                  nous définir à travers trois valeurs essentielles qui
                  façonnent notre identité et inspirent notre engagement envers
                  l'excellence.
                </p>

                <p className="card-text text-center">
                  <ol className="text-center">
                    <li className="text-justify">
                      <strong>Innovation</strong>
                    </li>
                    <li className="text-justify">
                      {" "}
                      <strong>Intégrité</strong>
                    </li>
                    <li className="text-justify">
                      {" "}
                      <strong>Engagement</strong>
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row" style={containerStyle}>
          <h4 className="mt-4">
            Chaque entreprise a une mission unique qui la guide vers le succès.
            À ToemeXpertise, nous sommes prêts à entendre votre vision et à
            transformer vos objectifs en réalité. Avez-vous une mission spéciale
            en tête? Faites-nous part de vos aspirations et laissez-nous vous
            aider à les concrétiser. Cliquez ci-dessous pour nous faire part de
            votre mission et commençons à construire l'avenir ensemble.
          </h4>
          <br />
          <p className="mt-5">
            <ContactUsCard
              name={"NOUS CONTACTER ICI"}
              bt_style={"gap-4 align-middle justify-center bg-[#5a5c9c] "}
            ></ContactUsCard>
          </p>
          <br />
        </div>
      </div>
      <hr />
      <br />
      <h3 className="w3-text-center" style={{ fontWeight: "bolder" }}>
        NOTRE EQUIPE
      </h3>
      <hr />
    </>
  );
}
export default Culture;
