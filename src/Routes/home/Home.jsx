import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";

import Heading from "./component/Heading";
import Arrow from "./component/Arrow";

import CarouselFeatured from "../../components/CarouselFeatured";
import { TextRevealCardPreview } from "./component/textRevalContactus";
import { StickyScrollLayout } from "./component/stickeyScrollLayout";
import { motion } from "framer-motion";
import ValueProposalTabs from "./component/valueProposalTabs";
import Stats from "./component/stats";
import Footer2 from "../../components/Footer2";
import HeroHome from "./component/HeroHome";
import Services from "./component/Services";
import Assets from "./component/Assets";
import MissionValue from "./component/missionValue";
import { useMediaQuery } from "@chakra-ui/react";
import { Project_items } from "../../components/data/Data";

import ProjectMobileComponent from "./component/project-mobile-component";

function Home() {
  const [isDesktop, setisDesktop] = useMediaQuery(
    "(min-width: 1100px)",
    "(display-mode: browser)"
  );
  return (
    <div className="bg-[#0E0C15] overflow-x-hidden ">
      <Container fluid>
        <Navbar />
      </Container>

      <Container fluid>
        <div>
          <HeroHome />
        </div>
        <CarouselFeatured />
        <div className="text-white">
          <Services />
        </div>

        <div className="text-white">
          <Assets />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white"
        >
          <Heading title="Projets" text="Liste des projets" />
          {isDesktop ? (
            <StickyScrollLayout />
          ) : (
            <ProjectMobileComponent Project_items={Project_items} />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white"
        >
          <Heading title="L'Excellence Technologique à Votre Service" subtitle="" />
          <ValueProposalTabs />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white"
        >
          <Heading title="Quelques chiffres" subtitle="" />
          <Stats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <MissionValue />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 70 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <TextRevealCardPreview/>
        </motion.div>
      </Container>

      <Container fluid className="mt-20">
        <Footer2 />
      </Container>
    </div>
  );
}

export default Home;
