import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
import CursorDot from "./components/CursorDot";

function App() {
  return (
    <div className="min-h-screen bg-dot-dark dark:bg-dot-light">
      <CursorDot />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Teaching />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
