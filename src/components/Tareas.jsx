import React from 'react';
import './Tareas.css';
import Tarea from './Tarea.jsx'
import generateID from '../services/generateID.js';


class Tareas extends React.Component {
  constructor (props) {
     super(props);
     this.state = {
       tasks: [
         {
           text: 'aprender react',
           completed: false,
           id: generateID(),
         },
         {
           text: 'aprender jsx',
           completed: true,
           id: generateID(),
         },
       ],
     };
  }

  render () {
     return (
       <div className='Tareas'>
         <section className='addTask'>
           <input type='text' placeholder='añade tu tarea aquí' />
         </section>
         <main className='taskList'>
              {this.state.tasks.map(task => <Tarea key={task.id} data={task}/>)}
         </main>
       </div>
     );
  }
}

export default Tareas;
