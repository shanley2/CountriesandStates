import React from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import CandS from './components/CandS';
import AddCountry from './components/AddCountry';
import AddState from './components/AddState';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className='header-link'>Home</Link>
        <Link to="/country" className='header-link'>Add Country</Link>
        <Link to="/state" className='header-link'>Add State</Link>
      </header>
      <Routes>
        <Route path="/" element={<CandS />} />
        <Route path="/country" element={<AddCountry />} />
        <Route path="/state" element={<AddState />} />
      </Routes>
    </div>
  );
}

export default App;
