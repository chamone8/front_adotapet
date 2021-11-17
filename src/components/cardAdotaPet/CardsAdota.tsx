import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Details from "../modalDetails/modal";
import api from "../../service/config";

let resu: any;
const stringWhatsapp = "https://api.whatsapp.com/send?phone=5531991144713&text=Ol%C3%A1%2C%20vi%20o%20anuncio%20sobre%20o%20seu%20Pet%20na%20plataforma%20AdotaPet%2C%20e%20gostaria%20de%20converasar%20conversar%20%3F"

const nomeLocalImg = 'http://localhost:222/arquivos/pets/'

const Cards = () => {
  const [items, setItems] = useState([]);
  const [imgs, setIImg] = useState([]);
  
  api.get('/pet/adotados')
  .then(res => {
    resu = res.data;
    let a = resu.data.insertId;
    setItems(a)
  }).catch(err => {
    console.log(err)
  });
  
  // api.get('/arquivo')
  // .then(res =>{
  //   resu = res.data;
  //   setIImg(resu)
  // }).catch(err =>{
  //   console.log(err)
  // })
  
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
          
          <Card.Img  style={{maxWidth:'300px', maxHeight: '200px'}}  variant="top" src={nomeLocalImg+value.img} />
          <Card.Body>
            <Card.Title>{capitalize(value.nomePet)}</Card.Title>
            <Card.Text>{capitalize(value.informacoesAdicionais)}</Card.Text>
            <a className='btn btn-primary' target="_blank" href={stringWhatsapp}>Entre em contato</a>
            <Details url={nomeLocalImg+value.img} cidade={value.cidade} estado={value.estado} descricao={value.informacoesAdicionais}/>
          </Card.Body>
        </Card>
      </div>
    );
  };
  return <div className="grid">{items.map(cardRender)}</div>;
};

export default Cards;
