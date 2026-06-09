import { Routes, Route } from "react-router-dom";
import CursorGlow from "./components/CursorGlow";
import Particles from "./components/Particles";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectCard";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CursorGlow />
            <Particles />
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Footer />
          </>
        }
      />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
