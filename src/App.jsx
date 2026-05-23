import "./App.css";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Vision from "./components/Vision";
import Teaching from "./components/Teaching";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
// import CursorDot from "./components/CursorDot";
// import { Toaster } from "./components/Toaster";

function App() {
  return (
    <>
      {/* <CursorDot /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Teaching />
      <Testimonials />
      <Vision />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
