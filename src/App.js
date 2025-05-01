import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-teal-600 text-white p-4">
          <nav className="flex justify-center space-x-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/education">Education</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-teal-600 text-white text-center p-4">
          &copy; {new Date().getFullYear()} Kristine MAE
        </footer>
      </div>
    </Router>
  );
}

export default App;
