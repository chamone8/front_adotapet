import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import Carousel from "react-bootstrap/Carousel";
import "./amigoPet.css";
const RgPets = () => {
  return (
    <div className="body">
      <div>
        <h3 className="title">QUEM AMA CUIDA</h3>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarousel"
            src="https://source.unsplash.com/1600x900/?cat"
            alt=""
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarousel"
            src="https://source.unsplash.com/1600x900/?dog"
            alt=""
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarousel"
            src="https://source.unsplash.com/1600x900/?pets"
            alt=""
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="texto">
        <p>
          O Uso do Portal é Gratuíto, a filiação é um ato de AMOR , CARINHO E
          CUIDADO que você tem pelo seu Pet
          <br />
          <br />
          NOSSA LUTA
          <br />
          <br />
          Que as prefeituras criem um local para acolher animais abandonados,
          alimente, vacine, cuide adequadamente , e crie um plano de doação.
          <br />
          <br />
          Que o governo Federal de incentivos para as ONGS, ampliar seus
          projetos de acolhimento.
          <br />
          <br />
          Cadastro de todos os criadores de animais , e fiscalizar, fornecendo
          um protocolo de procedimentos , tanto para o comércio, como para o
          adestramento
          <br />
          <br />
          Ter um telefone nacional ( 0800 xxxxxx ) que realmente funcione nas
          denuncias, agindo prontamente contra maus tratos, retirando esse
          animalzinho desta pessoa , bem como, multa-la e proibi-la de ter
          animais domésticos.
          <br />
          <br />
          <span style={{ color: "red" }}>
            A MAIOR PROVA DE FRAQUEZA E COVARDIA, É UMA PESSOA MALTRATAR UM
            <br />
            <br />
            ANIMAL. TODO MAL SÓ TRIUNFA QUANDO FICAMOS CALADOS
          </span>
          <br />
          <br />
          Se voce apoia nossa luta mande tambem no whatsapp 031 991144713, e
          diga eu apoio.
          <br />
          <br />
          Ajude-nos a divulgar essa ideia...
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default RgPets;
