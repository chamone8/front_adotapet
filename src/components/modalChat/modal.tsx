import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ChatBox from "../chatBox/chatBox";
import './modalChat.css'
function Details(props: any) {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const stringWhatsapp = "https://api.whatsapp.com/send?phone=5531991144713&text=Ol%C3%A1%2C%20vi%20o%20anuncio%20sobre%20o%20seu%20Pet%20na%20plataforma%20AdotaPet%2C%20e%20gostaria%20de%20converasar%20conversar%20%3F"

  return (
    <>
      {/* <Button onClick={handleShow}>Detalhes</Button> */}
      <Button onClick={() => setLgShow(true)}>Entre no Chat</Button>

      {/* <Modal show={show} onHide={handleClose}>
       */}
            <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'cursive'}}> Nós ajude a encontrar o {props.name}</Modal.Title>
        </Modal.Header>
        <img src={props.url} className="img-fluid"></img>
        <Modal.Body>
        <ChatBox id={props.id} />  
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Entre em con
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Details;
