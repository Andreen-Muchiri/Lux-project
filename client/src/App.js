// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Room from './components/pages/Room';
import About from './components/About';
import Contact from './components/Contact';


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
          Component = Room;
          break;
            case "/contact":
            Component = Contact;
            break
  }
  return (
    <><Navbar/>
   
      <Component/>
    
  </>
    
   
  )
}

export default App;
