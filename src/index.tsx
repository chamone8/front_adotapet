import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from "./components/navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from './reportWebVitals';
import Router from './Router'

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
