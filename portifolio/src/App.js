import { Routes, Route } from "react-router-dom";
import CursorGlow from "./components/CursorGlow";
import Particles from "./components/Particles";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Education from "./components/Education";
import SideEmail from "./components/SideEmail";
import SideSocial from "./components/SideSocial";
import Loader from "./components/Loader";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Loader />
            <CursorGlow />
            <Particles />

            <Navigation />
            <SideEmail />
            <SideSocial />
            <Hero />
            <About />
            <Education />
            <Projects />

            <Contact />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
