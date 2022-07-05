import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';
// import Todo from './components/Todo';
import Covid19 from './components/Covid19';
// import { useEffect, useState } from 'react';
import { CountDown, NewCountDown } from './components/CountDown';

function App() {

  // let [emptyInput, setemptyInput] = useState('');
  // let [todos, setTodos] = useState([
  //   { id: 'todo1', title: 'Learning React.js' },
  //   { id: 'todo2', title: 'Doing React.js' },
  //   { id: 'todo3', title: 'Runing React.js' }
  // ]);

  // useEffect(() => {
  //   console.log('check todos')
  // }, [todos])
  // useEffect(() => {
  //   console.log('check input change')
  // }, [emptyInput])

  // const handleEventChange = (event) => {
  //   setemptyInput(event.target.value);
  // }

  // const handleEventClick = (event) => {
  //   if (!emptyInput) {
  //     alert('Missing title!');
  //     return;
  //   }
  //   let newTodo = {
  //     id: 'todo' + Math.floor(Math.random() * 100),
  //     title: emptyInput
  //   }
  //   setTodos([...todos, newTodo]);
  //   setemptyInput('');
  // }

  // const deleteDataTodo = (id) => {
  //   let currentTodos = todos;
  //   currentTodos = currentTodos.filter(item => item.id !== id)
  //   setTodos(currentTodos);
  // }

  const onTimesup = () => {
    alert('Done!')
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <CountDown onTimesup={onTimesup} />
        <hr></hr>
        <NewCountDown onTimesup={onTimesup} />
        {/* <p>
          List Todo
        </p>

        <Todo todos={todos} deleteDataTodo={deleteDataTodo} />

        <input type="text" value={emptyInput} onChange={(event) => { handleEventChange(event) }} />

        <input type="button" value="Add New" onClick={(event) => { handleEventClick(event) }} /> */}

        <p>Covid 19 data show</p>
        <Covid19 />

      </header>

    </div>
  );
}

export default App;