import '../scss/Nav.scss';

const Nav = () => {
  return (
    <div className="headerBar">
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/time-down">Time Down</a></li>
        <li><a href="/todos-app">Todos App</a></li>
        <li><a href="/secret">Secret</a></li>
      </ul>
    </div>
  );
}

export default Nav;