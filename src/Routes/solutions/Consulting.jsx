import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../../Styles/solutions_general.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import AtomeHero from '../../components/AtomeHero';

import { ConsultingSolutionMultiTextData } from '../../components/data/Solutions_consultingData';

function ConsultingSolution() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleButtonContactClick = () => {
    navigate('/contact');
  };
 
 
  return (
    <div className='ConsultingSolution'>
      <Container fluid>
        <Navbar />
      </Container>

      <Container fluid>
        <AtomeHero
          cName="hero-mid"
          heroImg="/images/solutions/consulting/heroImage.png"
          title="Nos Services de Consultation :"
          multiText={ConsultingSolutionMultiTextData}
          btnClass="hide"
        />
        <div className="consulting-content">
          <Container fluid>
            <Row>
              <Col>
                <div className="consultation-info">
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={{fontWeight:'bolder', backgroundColor:'#354C6A', color:'white'}}>Pourquoi Choisir ToemeXpertise pour Votre Prochain Projet ?</Card.Header>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" >
                                <strong>Nous comprenons que chaque projet est unique, c'est pourquoi nous offrons des consultations spécifiques pour répondre à vos besoins individuels. Voici ce que vous pouvez attendre de nos services:</strong> 
                            </ListGroup.Item>
                            <ListGroup.Item as="li" style={{textAlign:'start'}}>Une équipe d'experts dévoués prêts à comprendre vos besoins et à vous proposer des solutions sur mesure</ListGroup.Item>
                            <ListGroup.Item as="li" style={{textAlign:'start'}}>Des années d'expérience dans la digitalisation et l'informatique decisionnelle</ListGroup.Item>
                            <ListGroup.Item as="li" style={{textAlign:'start'}}>Une équipe très polyvalente, nous permettant de vous fournir des conseils et des recommandations avisés</ListGroup.Item>
                            <ListGroup.Item as="li" style={{textAlign:'start'}}>Un engagement envers l'excellence et la satisfaction du client à chaque étape du processus</ListGroup.Item>
                            <ListGroup.Item as="li" style={{textAlign:'start'}}>Des solutions innovantes et personnalisées pour répondre aux défis uniques de votre projet</ListGroup.Item>
                        </ListGroup>
                    </Card>
                  <h4>Nous sommes là pour vous aider à réaliser votre vision. Contactez-nous dès aujourd'hui pour une consultation personnalisée sur l'un de nos services :</h4>
                  <Button variant="dark" onClick={handleButtonContactClick}>Contacter ToemeXpertise</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Card className="service-card">
                  <Card.Body>
                    <Card.Title>Développement de Site Web</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="service-card">
                  <Card.Body>
                    <Card.Title>Développement Mobiles </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="service-card">
                  <Card.Body>
                    <Card.Title>Développement de Logiciels</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Card className="service-card">
                  <Card.Body>
                    <Card.Title>Intelligence Artificielle (IA)</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="service-card">
                  <Card.Body>
                    <Card.Title>Analyse de Données</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="service-card">
                  <Card.Body>
                    <Card.Title>Big Data</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}

export default ConsultingSolution;
