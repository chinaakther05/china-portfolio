import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProvider from "./components/ScrollProvider";



function App() {
  return (
    <div>
      <ScrollProvider>
<Navbar />
      <Hero />
      <About />
      <Projects />
     
      <Contact />
      <Footer />
      </ScrollProvider>
      
      
    </div>
  );
}

export default App;
