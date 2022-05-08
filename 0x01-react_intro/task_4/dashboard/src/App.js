import './App.css';
import logo from "./logo.jpg";
import { getFullYear, getFooterCopy } from "./utils.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className='logo-title'>
        <h1>School dashboard</h1>
        </div>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email: </label><input name="email" />
        <label>Password: </label><input name="password"/>
        <button>OK</button>
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
