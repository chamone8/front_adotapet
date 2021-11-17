import { Button } from "@chakra-ui/button";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import api from "../../service/config";
import "./chatBox.css";
import { format } from "date-fns";

const idUser = localStorage.getItem("idUsuario");
const usuario = localStorage.getItem("username");

function ChatBox(props: any) {
  const [resultText, setResultText] = useState([]);
  let result: any;

  React.useEffect(() => {
    let dados: any;
    api
      .get("/chat")
      .then((res) => {
        dados = res.data;
        result = dados.data.insertId;
        setResultText(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [textAreaValue, SettextAreaValue] = useState("");
  let idPet = props.id;

  const handleChange = (event: any) => {
    SettextAreaValue(event.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let values = {
      textAreaValue,
      idUser,
      usuario,
      idPet,
    };
    api
      .post("/chat", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };
  return (
    <div className="App">
      <Form noValidate onSubmit={handleSubmit}>
        <div className="container chat">
          {resultText.map((result: any) => {
            if (props.id == result.idPet) {
              return (
                <div className="blocoChat">
                  <span className="nomeChat">{result.nome}</span>
                  <br />
                  <span className="dateChat">
                    {format(
                      Date.parse(result.inseridoEm),
                      "yyyy/MM/dd kk:mm:ss"
                    )}
                  </span>
                  <br />
                  <span className="mensagemChat">{result.texto}</span>
                </div>
              );
            }
          })}
        </div>
        {localStorage.getItem("auth") ?
        <Form.Control
          type="textare"
          name="textValue"
          id="textValue"
          onChange={handleChange}
          required
        ></Form.Control>
        : <p>Logue como usuario para acessar o chat</p>}
        {localStorage.getItem("auth") ? <Button type="submit">Enviar</Button> : ""}
      </Form>
    </div>
  );
}

export default ChatBox;
