import React, {useState, useContext} from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import CandS from './components/CandS';
import AddCountry from './components/AddCountry';
import AddState from './components/AddState';
import Register from './components/Register';
import Login from './components/Login';
import {Context} from './context/Context';

// TODO: maybe move thiis to login? Idk
function LoginRegister(props: any) {
  const {setToken, token} = useContext(Context);
  // TODO: Try !token
  if (token !== "" && token !== undefined) {
    return (
      <div className="User-access">
        <div className="User-link" onClick={() => setToken("")}>Log out</div>
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
  //const[loggedIn, setStatus] = useState(false);

  return (
    <div className="App">
      <Context.Provider value={{token, setToken}}>
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
          <Route path="/country" element={<AddCountry />} />
          <Route path="/state" element={<AddState />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
