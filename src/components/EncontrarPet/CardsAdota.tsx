import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Details from "../modalDetails/modal";
import api from "../../service/config";
import ModalChat from "../modalChat/modal";

let resu: any;

const nomeLocalImg = 'http://localhost:222/arquivos/pets/'

const Cards = () => {
  const [items, setItems] = useState([]);
  const [imgs, setIImg] = useState([]);
  
  api.get('/pet/encontrarPet')
  .then(res => {
    resu = res.data;
    let a = resu.data.insertId;
    setItems(a)
  }).catch(err => {
    console.log(err)
  });
  
  const capitalize = (str: string) => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  const cardRender = (value: any, index: any) => {
    return (
      <div className="grid">
        <Card style={{ width: "19rem", float: "left", margin: "30px", marginLeft: "60px"  }} >
          {" "}
          <div style={{display: "none"}}>
            key={index}
            </div>
          
          <Card.Img variant="top" src={nomeLocalImg+value.img} />
          <Card.Body>
            <Card.Title>{capitalize(value.nomePet)}</Card.Title>
            <Card.Body>O Pet foi visto pela ultima vez na rua {value.endereco}, no bairro {value.bairro} na cidade {value.cidade} </Card.Body>
            {/* <Card.Text>{capitalize(value.informacoesAdicionais)}</Card.Text> */}
            <ModalChat id={value._id} name={capitalize(value.nomePet)}/>
          </Card.Body>
        </Card>
      </div>
    );
  };
  return <div className="grid">{items.map(cardRender)}</div>;
};

export default Cards;
