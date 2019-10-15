import React from 'react';
import './Tareas.css';
import Tarea from './Tarea.jsx';
import generateID from '../services/generateID.js';

class Tareas extends React.Component {
  constructor(props) {
    super(props);
    const INITIAL = {
      newTaskText: '',
      tasks: [],
    };
    this.state = JSON.parse(localStorage.getItem('TareasState')) || INITIAL;
  }
  saveToLocalStorage() {
    localStorage.setItem('TareasState', JSON.stringify(this.state));
  }
  addTask(text) {
    text = text.trim();
    if (text) {
      const newTask = {
        text: text,
        completed: false,
        id: generateID(),
      };

      this.setState({
        newTaskText: '',
        tasks: [...this.state.tasks, newTask],
      }, this.saveToLocalStorage);
    }
  }
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.addTask(this.state.newTaskText);
    }
  };

  render() {
    return (
      <div className='Tareas'>
        <section className='addTask'>
          <input
            type='text'
            placeholder='añade tu tarea aquí'
            value={this.state.newTaskText}
            onKeyPress={this.handleKeyPress}
            onChange={event =>
              this.setState({ newTaskText: event.target.value })
            }
          />
          <button onClick={() => this.setState({ newTaskText: '' })}>
            clean
          </button>
        </section>
        <main className='taskList'>
          {this.state.tasks.map(task => (
            <Tarea key={task.id} data={task} />
          ))}
        </main>
      </div>
    );
  }
}

export default Tareas;
