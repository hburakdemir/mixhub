import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/homepage/homepage'
import Register from './pages/register/register';


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
       <Route path='/anasayfa' element={<Home />} />
       <Route path='/kayıt ol' element={<Register/>} />
      </Routes>
    </Router>
  );  
}


