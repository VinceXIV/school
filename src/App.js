import './App.css';
import React, {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

function App() {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || "")

  useEffect(()=>{
    navigate(`/${activePage}`)
    localStorage.setItem('activePage', activePage)
  }, [activePage])

  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage}/>
      
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
