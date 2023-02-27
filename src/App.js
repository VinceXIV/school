import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import HouseCard from './Components/HouseCard/HouseCard';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
