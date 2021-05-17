import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particales from "react-particles-js"
import Nabvar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
    <Particales 
    className= "particles-canvas"
    parms={{
      particles: {
        number: {
          value : 30,
          density : {
            enable : true,
            value_area: 900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6
          }
        }
      }
    }}
    />
      <Nabvar />
      <Header />
    </>
  );  
}

export default App;
