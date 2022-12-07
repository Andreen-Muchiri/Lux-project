// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import RoomPage from './components/pages/RoomPage';
import About from './components/About';
import Contact from './components/Contact';
// import Login from './components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/room' element={<RoomPage />} />
          <Route path='/about' element={<About />} />
      </Routes>
      <About />
      <Contact />
      
   </div>
  )
};

export default App;
