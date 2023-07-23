import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Skills from "./components/Skills";
import Work from "./components/Work";



function App() {
  return (
    <div>
     <Navbar/>
     <Home />
     <About />
     <Skills />
     <Process />
     <Work />
     <Contact />
     <Footer />
 
    </div>
  );
}

export default App;
