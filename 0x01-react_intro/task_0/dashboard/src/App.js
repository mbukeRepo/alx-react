import './App.css';
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className='logo-title'>
        <h1>School dashboard</h1>
        </div>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
