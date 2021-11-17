import { Formik } from "formik";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import * as yup from "yup";
import api from "../../service/config";

const FormData = require("form-data");
const fs = require("fs");

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

const valorInicial = {
  nomeCompleto: "",
  email: "",
  confirmarEmail: "",
  password: "",
  confirmarPassword: "",
  bairro: "",
  endereco: "",
  cidade: "",
  file: null,
  estado: "",
};

function CadastroUsuario(props: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState();
  const [values, setValues] = useState(valorInicial);
  let [valuesImg, setValuesImg] = useState([]);

  function refreshPage(props: any) {
    alert(props);
    window.location.reload();
  }

  const handleChange = (e: any) => {
    setText(e.target.value);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleChangeFile = (e: any) => {
    const arquivos = e.target.files[0];
    setValuesImg(arquivos);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    try {
      const usuario = await api
        .post("/usuario/cadastro", values)
        .then((response) => {
          let results: any;
          results = response.data;
          if (results.data.status === 200) {
            // PegarIdUsuario(values);

            // uploadFile(valuesImg)

            let informacao: any;
            api.post("/login", values).then((result) => {
              informacao = result.data;
              if (informacao.data.statuscode == 200) {
                // localStorage.setItem('username',informacao.data.user.username)
                localStorage.setItem("idUsuario", informacao.data.user._id);
                // localStorage.setItem('auth',informacao.data.auth)

                const formData = new FormData();
                formData.append("file", valuesImg);
                formData.append("Nome", localStorage.getItem("idUsuario"));

                api.post("/arquivo/files", formData);
                formData.delete("Nome");
                refreshPage(results.data.message);
              } else {
                localStorage.setItem("idUsuario", informacao.data.statuscode);
              }
            });
          } else {
            alert(results.data.message);
          }
        })
        .catch((err) => console.log(err));
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        nomeCompleto: "",
        email: "",
        confirmarEmail: "",
        password: "",
        confirmarPassword: "",
        bairro: "",
        endereco: "",
        cidade: "",
        estado: "",
        file: null,
      }}
    >
      {({
        handleSubmit: string,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <>
          <Button onClick={() => setLgShow(true)}>Cadastrar</Button>

          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Cadastro Usuario
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Nome Completo:</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomeCompleto"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Email: </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>@</InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder=""
                        name="email"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Confirmar Email: </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>@</InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder=""
                        name="confirmarEmail"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationFormik104"
                    className="position-relative"
                  >
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label>Confirmar Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmarPassword"
                      onChange={handleChange}
                      isInvalid={!!errors.estado}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik106"
                    className="position-relative"
                  >
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      type="text"
                      name="bairro"
                      onChange={handleChange}
                      isInvalid={!!errors.bairro}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationFormik107"
                    className="position-relative"
                  >
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      name="cidade"
                      onChange={handleChange}
                      isInvalid={!!errors.cidade}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3 hidder">
                  <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationFormik108"
                    className="position-relative"
                  >
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      type="text"
                      name="endereco"
                      onChange={handleChange}
                      isInvalid={!!errors.endereco}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationFormik109"
                    className="position-relative"
                  >
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control
                      type="text"
                      name="estado"
                      maxLength={2}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Adicione uma foto</Form.Label>
                  <Form.Control
                    formEncType="multipart/form-data"
                    type="file"
                    required
                    name="file"
                    onChange={handleChangeFile}
                  />
                </Form.Group>
                <Form.Label></Form.Label>

                <Form.Check type="checkbox" label="Você é maior de 18 anos ?" />
                <Button type="submit">Submit form</Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </Formik>
  );
}

export default CadastroUsuario;
