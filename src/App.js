import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';
import Todo from './components/Todo';
import Covid19 from './components/Covid19';
import { CountDown } from './components/CountDown';
import { Routes, Route } from "react-router-dom"

function App() {

  const onTimesup = () => {
    alert('Done!')
  }

  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path='/' element={<Covid19 />} />
          <Route path='/time-down' element={<CountDown onTimesup={onTimesup} />} />
          <Route path='/todos-app' element={<Todo />} />

        </Routes>

      </header>

    </div>
  );
}

export default App;