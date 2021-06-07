import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import DividerOne from "./components/DividerOne"
import DividerTwo from "./components/DividerTwo";
import Work from "./components/Work";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas" 
        params={{
          particles: {
            number: {
              value: 30,
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
      <DividerOne />
      <Skills />
      <DividerTwo />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
