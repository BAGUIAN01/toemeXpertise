import React from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 

function ContactModal(props) {

  const navigate = useNavigate();

  const handleButtonContactClick = () => {
    navigate('/contact');
  };


  return (
    <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Votre business : {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.contain}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={handleButtonContactClick}>Contacter ToemeXpertise pour Discuter</Button>
        <Button onClick={props.onHide}>Pas Maintenant</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactModal;
 