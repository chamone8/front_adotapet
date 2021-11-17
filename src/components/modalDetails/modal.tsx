import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


function Details(props: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const stringWhatsapp = "https://api.whatsapp.com/send?phone=5531991144713&text=Ol%C3%A1%2C%20vi%20o%20anuncio%20sobre%20o%20seu%20Pet%20na%20plataforma%20AdotaPet%2C%20e%20gostaria%20de%20converasar%20conversar%20%3F"
  return (
    <>
      <Button onClick={handleShow}>Detalhes</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <img src={props.url} className="img-fluid"></img>
        <Modal.Body>
          {props.descricao}
          <br /> Cidade: {props.cidade}, Estado: {props.estado}
        </Modal.Body>
        <Modal.Footer>
        {localStorage.getItem("auth") ?
        <a className='btn btn-primary' target="_blank" href={stringWhatsapp}>Entre em contato</a>
        : <p>Loger no sistema para convesar com o dono do pet</p>}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Details;
