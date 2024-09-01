import React from "react";
import { Container } from "react-bootstrap";

import Navbar from '../../components/Navbar'
import Footer2 from '../../components/Footer2'
import Contact from './component/contact'

 


function ContactUs() {
  return (
    <div className="Contact">
      <Container fluid>
        <Navbar />
      </Container>

      <Container fluid>
        <Contact/>
        
      </Container>

      <Container fluid>
        <Footer2/>
      </Container>
    </div>
  );
}

export default ContactUs;
