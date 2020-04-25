import './App.css';
import React, { Component } from 'react';
import Saludo from './containers/saludo/Saludo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 'valor inicial',
    };
    //this.cambio = this.cambio.bind(this);
  }

  render() {
    return (
      <div>
        <p> Mi primera aplicación en React {console.log('Hola')} </p>

        <input type="text" onChange={this.cambio} />
        <br />
        <button onClick={this.mostrar}>Mostrar</button>

        <Saludo nombre="funcion Saludo" />
      </div>
    );
  }

  /* cambio(event) {
    console.log(this.state.valor);
  } */
  cambio = (event) => {
    console.log(this.state.valor);
  };

  mostrar = (event) => {};
}

export default App;
