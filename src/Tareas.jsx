import React from 'react';
import './Tareas.css';
import Tarea from './Tarea.jsx'
function Tareas() {
  return (
    <div className='Tareas'>
      <section className='addTask'>
        <input type='text' placeholder='añade tu tarea aquí' />
      </section>
      <main className='taskList'>

        <Tarea text='aprender react' />
        <Tarea text='aprender jsx' />
      </main>
    </div>
  );
}

export default Tareas;
