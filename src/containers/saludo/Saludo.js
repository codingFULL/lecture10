import React from 'react';

function Saludo(props) {
  return (
    <div>
      <p>Hola desde el componente funcional llamado {props.nombre}</p>
    </div>
  );
}

export default Saludo;
