import { Button, Col, Form, InputGroup, Row, Tab, Tabs } from "react-bootstrap";
import React, { useState, useRef } from "react";
import * as yup from "yup";
import api from "../../service/config";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import "./cadastroPet.css";


const schema = yup.object().shape({
  nomePet: yup.string().required(),
  nomeDono: yup.string().required(),
  idadePet: yup.number().required(),
  racaPet: yup.string().required(),
  estado: yup.string().required(),
  bairro: yup.string().required(),
  endereco: yup.string().required(),
  cidade: yup.string().required(),

  possuiRg: yup.boolean().required(),
  doencas: yup.string().required(),
  vacinas: yup.string().required(),

  file: yup.mixed().required(),
  infomacoesAdicionais: yup.string().required(),
});

const idDono = localStorage.getItem("idUsuario");

const valorInicial = {
  nomePet: "",
  idDono: idDono,
  nomeDono: "",
  idadePet: "",
  racaPet: "",
  estado: "",
  bairro: "",
  endereco: "",
  cidade: "",
  inseridoPor: 1,
  possuiRg: "",
  doencas: "",
  vacinas: "",
  descricao: "",
  animalPerdido: false,
  Telefone: "",
};

function FormExample() {


  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState();
  const [values, setValues] = useState({ valorInicial });
  let [valuesImg, setValuesImg] = useState("");
  const [key, setKey] = useState('home');

  let history = useHistory();

  const handleChangeFile = (e: any) => {
    const arquivos = e.target.files[0];
    setValuesImg(arquivos);
  };
  const handleChangeCheck = () => {
    valorInicial["animalPerdido"] = false;
  };
  const handleChangeCheck2 = () => {
    valorInicial["animalPerdido"] = true;
  };

  const handleChange = (e: any) => {
    setText(e.target.value);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tipo", "Pets");

    formData.append("file", valuesImg);

    try {
      await api
        .post("/arquivo/file", formData)
        .then((respose) => {
          api
            .post("/pet", {
              values,
              respose,
            })
            .then((res) => {
              history.push("/home") 

            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        nomePet: "",
        nomeDono: "",
        idadePet: "",
        racaPet: "",
        estado: "",
        bairro: "",
        endereco: "",
        cidade: "",
        inseridoPor: "",
        possuiRg: "",
        doencas: "",
        vacinas: "",
        descricao: "",
        file: null,
      }}
    >
      {({
        handleSubmit: string,
        // handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 tab"
            
          >
            <Tab eventKey="Adocao" title="Pet para Adoção">
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Nome do Pet:</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomePet"
                      placeholder=""
                      onChange={handleChange}
                      isValid={touched.nomePet && !errors.nomePet}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Nome do Amgo do Pet</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomeDono"
                      onChange={handleChange}
                      isValid={touched.nomeDono && !errors.nomeDono}
                    />

                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="2"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Idade do seu pet</Form.Label>
                    <Form.Select
                      style={{ marginTop: "21px" }}
                      aria-describedby="inputGroupPrepend"
                      name="idadePet"
                      onChange={handleChange}
                    >
                      <option value="0">Menos de 1 ano</option>
                      <option value="1 ano">1 ano</option>
                      <option value="2 anos">2 anos</option>
                      <option value="3 anos">3 anos</option>
                      <option value="4 anos">4 anos</option>
                      <option value="5 anos">5 anos</option>
                      <option value="6 anos">6 anos</option>
                      <option value="7 anos">7 anos</option>
                      <option value="8 anos">8 anos</option>
                      <option value="9 anos">9 anos</option>
                      <option value="10 anos">10 anos</option>
                      <option value="mais de 10 anos">mais de 10 anos</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="text"
                      name="Telefone"
                      onChange={handleChange}
                      isValid={touched.nomeDono && !errors.nomeDono}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Raça do seu pet</Form.Label>
                    <Form.Control
                      type="text"
                      name="racaPet"
                      onChange={handleChange}
                      isInvalid={!!errors.racaPet}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.racaPet}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="2"
                    controlId="validationFormik104"
                    className="position-relative"
                  >
                    <Form.Label>UF:</Form.Label>
                    <Form.Control
                      type="text"
                      name="estado"
                      onChange={handleChange}
                      isInvalid={!!errors.estado}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.estado}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      type="text"
                      name="bairro"
                      onChange={handleChange}
                      isInvalid={!!errors.bairro}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.bairro}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      name="cidade"
                      onChange={handleChange}
                      isInvalid={!!errors.cidade}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.cidade}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3 hidder">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      type="text"
                      name="endereco"
                      onChange={handleChange}
                      isInvalid={!!errors.endereco}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.endereco}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="2"
                    controlId="validationFormik104"
                    className="position-relative"
                  >
                    <Form.Label>Possui alguma doeça ?</Form.Label>
                    <Form.Control
                      type="text"
                      name="doencas"
                      onChange={handleChange}
                      isInvalid={!!errors.doencas}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.doencas}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Alguma informação sobre vacinas ?</Form.Label>
                    <Form.Control
                      type="text"
                      name="vacinas"
                      onChange={handleChange}
                      isInvalid={!!errors.vacinas}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.vacinas}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Descricao do Pet</Form.Label>
                    <Form.Control
                      type="text"
                      name="descricao"
                      onChange={handleChange}
                      isInvalid={!!errors.descricao}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="position-relative mb-3">
                  <Form.Label>File</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    onChange={handleChangeFile}
                    isInvalid={!!errors.file}
                  />
                </Form.Group>
                <Button onClick={handleChangeCheck} type="submit">
                  Cadastrar
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="perdido" title="Cadastro Animais perdidos" >
              {/* 
                Segundo Form
              */}

              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Nome do Pet:</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomePet"
                      placeholder=""
                      onChange={handleChange}
                      isValid={touched.nomePet && !errors.nomePet}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Nome do Amigo do Pet</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomeDono"
                      onChange={handleChange}
                      isValid={touched.nomeDono && !errors.nomeDono}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="text"
                      name="Telefone"
                      onChange={handleChange}
                      isValid={touched.nomeDono && !errors.nomeDono}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Idade do seu pet</Form.Label>
                    <Form.Select
                      style={{ marginTop: "21px" }}
                      aria-describedby="inputGroupPrepend"
                      name="idadePet"
                      onChange={handleChange}
                    >
                      <option value="0">Menos de 1 ano</option>
                      <option value="1 ano">1 ano</option>
                      <option value="2 anos">2 anos</option>
                      <option value="3 anos">3 anos</option>
                      <option value="4 anos">4 anos</option>
                      <option value="5 anos">5 anos</option>
                      <option value="6 anos">6 anos</option>
                      <option value="7 anos">7 anos</option>
                      <option value="8 anos">8 anos</option>
                      <option value="9 anos">9 anos</option>
                      <option value="10 anos">10 anos</option>
                      <option value="mais de 10 anos">mais de 10 anos</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      placeholder="Rua onde o Pet foi visto pela ultima vez."
                      type="text"
                      name="endereco"
                      onChange={handleChange}
                      isInvalid={!!errors.endereco}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Raça do seu pet</Form.Label>
                    <Form.Control
                      type="text"
                      name="racaPet"
                      onChange={handleChange}
                      isInvalid={!!errors.racaPet}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.racaPet}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik104"
                    className="position-relative"
                  >
                    <Form.Label>UF:</Form.Label>
                    <Form.Control
                      placeholder="Estado onde o Pet foi visto pela ultima vez."
                      type="text"
                      name="estado"
                      onChange={handleChange}
                      isInvalid={!!errors.estado}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.estado}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      placeholder="Bairro onde o Pet foi visto pela ultima vez."
                      type="text"
                      name="bairro"
                      onChange={handleChange}
                      isInvalid={!!errors.bairro}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.bairro}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      placeholder="Cidade onde o Pet foi visto pela ultima vez."
                      type="text"
                      name="cidade"
                      onChange={handleChange}
                      isInvalid={!!errors.cidade}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.cidade}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3 hidder">
                  <Form.Group
                    as={Col}
                    md="2"
                    controlId="validationFormik104"
                    className="position-relative"
                  ></Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>
                      Descreva informações relevantes sobre o pet
                    </Form.Label>
                    <Form.Control
                      placeholder="Descreva aqui informações relevantes para podemos encontrar o seu pet"
                      as="textarea"
                      rows={12}
                      type="text"
                      name="descricao"
                      onChange={handleChange}
                      isInvalid={!!errors.descricao}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="position-relative mb-3">
                  <Form.Label>File</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    onChange={handleChangeFile}
                    isInvalid={!!errors.file}
                  />
                </Form.Group>

                <Button onClick={handleChangeCheck2} type="submit">
                  Cadastrar
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </>
      )}
    </Formik>
  );
}

export default FormExample;
