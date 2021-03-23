import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div id="nav">
          <img src={logo} className="logo" alt="Logo Image" />
          <div id="nav-sub">
            <a href="" className="item">Projects</a>
            <a href="" className="item">Articles</a>
            <a href="" className="item">About</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
