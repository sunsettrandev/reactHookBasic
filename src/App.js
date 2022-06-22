import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';

function App() {

  let [emptyInput, setemptyInput] = useState('');
  let [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learning React.js' },
    { id: 'todo2', title: 'Doing React.js' },
    { id: 'todo3', title: 'Runing React.js' }
  ]);

  const handleEventChange = (event) => {
    setemptyInput(event.target.value);
  }

  const handleEventClick = (event) => {
    if (!emptyInput) {
      alert('Missing title!');
      return;
    }
    let newTodo = {
      id: 'todo' + Math.floor(Math.random() * 100),
      title: emptyInput
    }
    setTodos([...todos, newTodo]);
    setemptyInput('');
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          List Todo
        </p>

        <table className='todos-content'>
          <tbody>
            {todos && todos.length > 0 && todos.map((item, index) => {
              return (
                <tr className='todo-child' key={item.id}>
                  <td>{index + 1} -</td>
                  <td>{item.title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <input type="text" value={emptyInput} onChange={(event) => { handleEventChange(event) }} />

        <input type="button" value="Add New" onClick={(event) => { handleEventClick(event) }} />

      </header>
    </div>
  );
}

export default App;
