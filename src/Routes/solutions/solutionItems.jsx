import React, { useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import '../../Styles/solutions_general.css';
import ContactModal from './contactModal';

function DisplaySolutions({ solutiondata }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedContain, setSelectedContain] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleButtonClick = (title,contain) => {
    setModalShow(true);
    setSelectedContain(contain);
    setSelectedTitle(title);
  };

  return (
    <Container fluid className="solution-Items-container">
      {solutiondata.map((solution, index) => (
        <div key={index} className="solution-item">
          <Image className="solution-item-icon" src={solution.icon} />
          <div className='solution-item-infos'>
            <span className="solution-item-name">{solution.name}</span>
            <Button variant="outline-primary" size="sm" onClick={() => handleButtonClick(solution.name,solution.contain)}>
              Démarrer
            </Button>
            <ContactModal show={modalShow} onHide={() => setModalShow(false)} title={selectedTitle} contain={selectedContain} />
          </div>
        </div>
      ))}
    </Container>
  );
}

export default DisplaySolutions;
