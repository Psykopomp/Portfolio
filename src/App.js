import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Life from "./components/Life";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas" 
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 900
              }
            }
          },
          shape: {
            type: "square",
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Life />
      <Footer />
    </div>
  );
}

export default App;
