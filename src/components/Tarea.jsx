import React from 'react';
import './Tarea.scss';
import ColorPicker from './ColorPicker.jsx';
function Tarea(props) {
  return (
    <div
      className={`Tarea ` + (props.data.completed ? 'completed' : '')}
      style={{ borderColor: props.data.color }}
    >
      <span className='text'> {props.data.text}</span>
      <div className='actions'>
        <button onClick={() => props.onDelete(props.data.id)}>eliminar</button>
        <button onClick={() => props.onComplete(props.data)}>completar</button>

        <ColorPicker
        color={props.data.color}
          onColorSelect={color => props.onColorChange(props.data.id, color)}
        >
          <button>color</button>
        </ColorPicker>

        {/* <input type="color"
        value={props.data.color}
        onChange={ev => props.onColorChange(props.data.id,ev.target.value)}/> */}
      </div>
    </div>
  );
}

export default Tarea;
