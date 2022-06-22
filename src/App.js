import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';

function App() {

  let [emptyInput, setemptyInput] = useState('');
  let [Name, setName] = useState('');

  const handleEventChange = (event) => {
    setemptyInput(event.target.value);
  }

  const handleEventClick = (event) => {
    setName(emptyInput);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is {Name}
        </p>

        <input type="text" value={emptyInput} onChange={(event) => { handleEventChange(event) }} />

        <input type="button" value="Click Me" onClick={(event) => { handleEventClick(event) }} />

      </header>
    </div>
  );
}

export default App;
