import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import AdotaPet from "./pages/AdotaPet/adotaPet";
import EncontrarPet from "./pages/EncontrarPet/encontrarPet";
import App from './App';
import CadastroPet from './pages/CadastroPet/cadastroPet'
import RgPet from "./pages/RgPet/rgPet";
import AmigoAnimais from "./pages/AmigosAnimais/amigosAnimais";
import AdmPet from "./pages/AdmPet/AdministracaoPet"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/amigoAnimais" component={AmigoAnimais} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/RgPet" component={RgPet} />
      
      {localStorage.getItem("auth") ? <Route exact path="/cadastroPet" component={CadastroPet} />  : ''}
      {localStorage.getItem("auth") ? <Route exact path="/EncontrarPet" component={EncontrarPet} /> : ''}
      {localStorage.getItem("auth") ? <Route exact path="/AdotaPet" component={AdotaPet} />  : ''}
      {localStorage.getItem("auth") ? <Route exact path="/AdmPet" component={AdmPet} />  : ''}

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;