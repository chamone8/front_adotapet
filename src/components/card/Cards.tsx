import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';
import api from "../../service/config";
import "./card.css";
import ModalDetalhe from "../modalDetails/modal";
import ModalChat from "../modalChat/modal"

const imgTeste = 'https://www.petlove.com.br/images/breeds/194940/profile/original/bernese-p.jpg?1532380300';
const nomeLocalImg = 'http://localhost:222/arquivos/pets/'

let resu: any;
const Cards = () => {
  const [items, setItems] = useState([]);
  const [imgs, setIImg] = useState([]);
  
  api.get('/pets')
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
        
        <Card style={{ width: "19rem", float: "left", margin: "70px", marginLeft: "60px"  }} >
          {" "}
          <div style={{display: "none"}}>
            key={index}
            </div>
          
          <Card.Img style={{width:'300px', height: '200px'}} variant="top" src={nomeLocalImg+value.img} />
          <Card.Body>
            <Card.Title>{'Meu Nome é ' + capitalize(value.nomePet)}</Card.Title>
            <Card.Text>{capitalize(value.informacoesAdicionais)}</Card.Text>
            {value.animalPerdido == true ? (
               <ModalChat id={value._id} name={capitalize(value.nomePet)} telefone={value.telefone} />
            ) : (
              <ModalDetalhe url={nomeLocalImg+value.img} cidade={value.cidade} estado={value.estado} descricao={value.informacoesAdicionais} perdido={value.animalPerdido}/>
            )}
            
          </Card.Body>
        </Card>
      </div>
    );
  };
  return <div className="grid">{items.map(cardRender)}</div>;
};

export default Cards;
