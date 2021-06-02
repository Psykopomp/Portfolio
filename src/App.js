import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Particles 
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
    </div>
  );
}

export default App;
