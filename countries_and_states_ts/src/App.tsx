import React, {useState} from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import CandS from './components/CandS';
import AddCountry from './components/AddCountry';
import AddState from './components/AddState';
import Register from './components/Register';
import Login from './components/Login';


function LoginRegister(props: any) {

  if (props.token !== "" && props.token !== undefined) {
    return (
      <div className="User-access">
        <div className="User-link" onClick={() => props.setToken("")}>Log out</div>
      </div>
    );
  } else  {
    return (
      <div className="User-access">
        <Link to="/register" className='User-link'>Register</Link>
        <Link to="/login" className='User-link'>Login</Link>
      </div>
    )
  }
}

function App() {
  const[token, setToken] = useState(""); // TODO: look into localstorage

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-pages">
          <Link to="/" className='header-link'>Home</Link>
          <Link to="/country" className='header-link'>Add Country</Link>
          <Link to="/state" className='header-link'>Add State</Link>
        </div>
        <LoginRegister token={token} setToken={setToken}/>
      </header>
      <Routes>
        <Route path="/" element={<CandS />} />
        <Route path="/country" element={<AddCountry token={token}/>} />
        <Route path="/state" element={<AddState token={token}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
