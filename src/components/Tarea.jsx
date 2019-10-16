import React from 'react';
import './Tarea.scss';

function Tarea(props) {
  return (
    <div
    className={`Tarea ` + (props.data.completed ? 'completed' : '')}
    style={ {borderColor: props.data.color} }

    >
      <span className='text'> {props.data.text}</span>
      <div className='actions'>
        <button   onClick={() => props.onDelete(props.data.id)}>eliminar</button>
        <button onClick={() => props.onComplete(props.data)}>completar</button>
        <input type="color"
        value={props.data.color}
        onChange={ev => props.onColorChange(props.data.id,ev.target.value)}/>
      </div>
    </div>
  );
}

export default Tarea;
