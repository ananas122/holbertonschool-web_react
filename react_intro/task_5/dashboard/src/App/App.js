import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <img src="/logo.png" className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <span style={{ margin: '0 10px' }}></span> {/* espace horizontal */}
        <label htmlFor="psw">Password: </label>
        <input type="password" id="psw" />
        <span style={{ margin: '0 10px' }}></span> {/* espace horizontal */}
        <button>OK</button>
        <p>Login to access the full dashboard</p>

      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        {/* <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p> */}
      </footer>
    </div>
  );
}

export default App;