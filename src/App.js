import React, { Component } from 'react';
import Saludo from './containers/saludo/Saludo';
import './App.css';

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
        <p> Mi primera aplicación en React {this.state.valor} </p>

        <input type="text" onChange={this.cambio} />
        <br />
        <button onClick={this.mostrar} className="button-show">
          Mostrar
        </button>

        <Saludo nombre="funcion Saludo" />
      </div>
    );
  }

  /* cambio(event) {
    console.log(this.state.valor);
  } */
  cambio = (event) => {
    const newValue = event.target.value;
    this.setState({ valor: newValue });
  };

  mostrar = (event) => {
    console.log(this.state.valor);
  };
}

export default App;
