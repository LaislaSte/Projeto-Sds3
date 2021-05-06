import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
  /*esta renderizando o componete  root localizado no index.html
  o App está chamando uma função lá do App.tsx que está retornando nossa div/conteudo
  */
);


