import React from "react";
import { Container } from "react-bootstrap";

import AtomeHero from '../../components/AtomeHero'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Footer2 from '../../components/Footer2'
import Achievements from "../../components/Achievements";

 


function Project() {
  return (
    <div className="Project">
      <Container fluid>
        <Navbar />
      </Container>

      <Container fluid>
        <AtomeHero
          cName="hero-mid"
          heroImg="images/project/article-php.webp"
          title="Projets"
          multiText={[
            "Intelligence artificielle",
            "Data sicence",
            "Développement web",
            "Développent de logiciel",
            "Développement mobile",
          ]}
          btnClass="hide"
        />
      </Container>
      <Container fluid>
        <Achievements/>
      </Container>

      <Container fluid>
        <Footer2/>
      </Container>
    </div>
  );
}

export default Project;
