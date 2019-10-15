import React from 'react';
import './Tarea.css';

function Tarea(props) {
  return (
    <div className='Tarea'>
      <span className='text'> {props.data.text}</span>
      <div className='actions'>
        <button>eliminar</button>
        <button>completar</button>
      </div>
    </div>
  );
}

export default Tarea;
