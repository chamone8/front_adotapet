import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import "./rgpet.css";
import img from '../../assets/cachorro.jpg';
const RgPets = () => {
  return (
    <div className="body">
      <div className="container">
        <h2 className="title">Cadastro Rg do seus Amiguinhos</h2>
      </div>{" "}
      {/* <Image src={img} rounded /> */}
      <ListGroup variant="flush" className="itensBody">
        <ListGroup.Item>
          O RG Pet é um sistema de cadastramento de animais de estimação que tem
          como objetivo identificar seu PET com segurança e confiabilidade
          através de um número único, intransferível e insubstituível, e que
          vinculará diversas informações cadastrais do animal e de seu tutor,
          concentrando todo o histórico e atividades principais em um único
          local.
        </ListGroup.Item>
        <ListGroup.Item>
          O RG Pet tem como benefício principal a garantir identificação dos
          animais através de chip ou sistema biométrico, garantindo a
          reciprocidade da informação do animal com o seu RG. Similiar ao RG
          usado para seres humanos.
        </ListGroup.Item>
        <ListGroup.Item>
          Para fazer parte deste grupo é muito simples. Basta realizar o
          cadastro de seus dados e de seu animal de estimação.
        </ListGroup.Item>
        <ListGroup.Item>
          Um número de RG Pet será atribuído ao animal de estimação quando o
          cadastro for finalizado.
        </ListGroup.Item>
        <ListGroup.Item>
          Em seguida escolha um veterinário, pet shop, ou clínica credenciada
          para finalizar o processo via implantação de chip subcutâneo ou pelo
          sistema biométrico (desenvolvido com exclusividade pelo Instituto Pet
          Brasil). Esta fase não é obrigatória, mas garante a reciprocidade
          entre o cadastro e o animal.
        </ListGroup.Item>
        <ListGroup.Item style={{ marginBottom: "24px" }}>
          O programa RG Pet é de responsabilidade do Instituto Pet Brasil,
          entidade de representação oficial do setor PET no Brasil
        </ListGroup.Item>
      </ListGroup>
      <a
        className="btn btn-primary acessoLink"
        href="http://www.rgpet.org.br"
        target="_blank"
      >
        Acesse o Site
      </a>
    </div>
  );
};

export default RgPets;
