import React from 'react';
import './Tarea.css';

function Tarea(props) {
  return (
    <div className={`Tarea ` + (props.data.completed ? 'completed' : '')}>
      <span className='text'> {props.data.text}</span>
      <div className='actions'>
        <button>eliminar</button>
        <button onClick={() => props.onComplete(props.data)}>completar</button>
      </div>
    </div>
  );
}

export default Tarea;
