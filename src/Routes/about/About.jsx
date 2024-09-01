import React from "react";
import { Container } from "react-bootstrap";
import { aboutdata } from "../../components/data/Data";
import Navbar from "../../components/Navbar";
import AtomeHero from "../../components/AtomeHero";
import Footer2 from "../../components/Footer2";
import Team from "../../components/Team";
import Culture from "../../components/Culture";
import StarryNight from "../../components/hero2";

function About(){
  return (
    <div className="About">
      <Container fluid>
        <Navbar />
      </Container>

      <Container fluid>
        <StarryNight/>
       {/* <AtomeHero
          cName="hero-mid"
          heroImg="images/about/banner.png"
          title="A propos de nous"
          multiText={[
            "Intelligence artificielle",
            "Data sicence",
            "Développement web",
            "Développent de logiciel",
            "Développement mobile",
          ]}
          btnClass="hide"
        />*/}

        <div className="aboutfeature">
          <div>
            <Culture image={aboutdata[0].cover} />
          </div>
        </div>
        <Team />
      </Container>

      <Container fluid>
        <Footer2/>
      </Container>
    </div>
  );


}
  

export default About;
