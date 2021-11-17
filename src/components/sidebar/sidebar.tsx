import React, { ReactNode, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import {
  MdPets,
  BsList,
  SiApacheflink,
  SiGreensock,
  RiSearchEyeLine,
  FaUserFriends,
  BsFillPersonPlusFill,
  FaQq,
  IoIosLogIn,
  BiLogOut,
  GrUserAdmin
} from "react-icons/all";
import "./sidebar.css";
import imgPerfil from "../../assets/perfil.jpg";
import api from "../../service/config";
import { errorMonitor } from "events";

const imgName = 'http://localhost:222/arquivos/login/'+ localStorage.getItem("idUsuario") +'.jpg'


function SideBar(): JSX.Element {

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <a className="Sidebar" onClick={handleShow} href={"#"}>
        <BsList />
      </a>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu ADOTA PET</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {localStorage.getItem("auth") ? (
              <div>
                <img
                  src={imgName}
                  className="fotoPerfil"
                  alt="Foto do perfil"
                ></img>
                
                <span className="iconMenuSide">
                  Bem vindo {localStorage.getItem("username")}
                </span>
              </div>
            ) : (
              <div>
                <span className="iconMenuSide">
                  <IoIosLogIn />
                </span>
                <a className="linkSideBar" href="/Login">
                  LOGIN
                </a>
              </div>
            )}
          </div>

          <div className="linha">
            <span className="iconMenuSide">
              <MdPets />
            </span>
            <a className="linkSideBar" href="/home">
              HOME
            </a>

            <span className="iconMenuSide">
              <SiApacheflink />
            </span>
            <a className="linkSideBar" href='/RgPet'>RG PET</a>

            <span className="iconMenuSide">
              <SiGreensock />
            </span>
            <a className="linkSideBar" href="/AdotaPet">
              ADOTAR PET
            </a>

            <span className="iconMenuSide">
              <RiSearchEyeLine />
            </span>
            <a className="linkSideBar" href='/encontrarPet'>ENCONTRE PET </a>

            <span className="iconMenuSide">
              <FaUserFriends />
            </span>
            <a className="linkSideBar" href='/amigoAnimais'>AMIGO DOS ANIMAIS </a>

            {localStorage.getItem("auth") ? (
              <div>
                <span className="iconMenuSide">
                  <BsFillPersonPlusFill />
                </span>
                <a className="linkSideBar" href="/cadastroPet">
                  CADASTRO PET
                </a>
              </div>
            ) : (
              <div></div>
            )}
           
            {localStorage.getItem("auth") ? (
              <div>
                <span className="iconMenuSide">
                  <GrUserAdmin />
                </span>
                <a className="linkSideBar" href="/AdmPet">
                  Administração Pet 
                </a>
              </div>
            ) : (
              <div></div>
            )}

            {/* <span className="iconMenuSide">
              <FaQq />
            </span>
            <a className="linkSideBar">FAQ</a> */}
          </div>
        </Offcanvas.Body>
        {localStorage.getItem("auth") ? (
          <div className="logout">
            <span className="iconMenuSide">
              <BiLogOut />
            </span>
            <a className="linkSideBar" onClick={() => logout()}>
              LOGOUT
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </Offcanvas>
    </>
  );
}

export default SideBar;
