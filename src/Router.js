import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/" component={Home} />
      {/* <Route path="/galeria" component={} />
      <Route path="/orcamento" component={Orcamento} /> */}
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;