// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import RoomPage from './components/pages/RoomPage';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";



function App() {
  let Component
  switch (window.location.pathname) {
    case "/home" :
      Component = Home;
      break;
       case "/about":
        Component = About;
        break;
        case "/room":
          Component = RoomPage;
          break;
            case "/contact":
            Component = Contact;
            break
          case "/login":
            Component = Login;
            break


  }
  return (
    <>
    {/* <Router> */}
    <Navbar/>
   
    <Component/>
    {/* <ul>
            <li>
           <Nav.Link as={Link} to= {"/home"}>Home</Nav.Link>
           </li>
            <li>
           <Nav.Link as={Link} to= {"/about"}>About</Nav.Link>
           </li>
           </ul> */}
{/* </Router> */}
{/* <div>
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/room" element={<Room />} />
         <Route path="/contact" element={<Contact Us />} />
         </Routes>
   </div> */}
  </>
    
   
  )
}

export default App;
