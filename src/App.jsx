import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProvider from "./components/ScrollProvider";

import Skills from "./components/skills";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails"; // ১. ডিটেইলস পেজটি ইম্পোর্ট করুন

function App() {
  return (
    <Routes>
    
      <Route
        path="/"
        element={
          <ScrollProvider>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
           <Education />
           <Contact />
            <Footer />
          </ScrollProvider>
        }
      />

      
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;