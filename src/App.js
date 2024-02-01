import React from 'react';
import Resume from './Resume';
import Home from './Home';
import Math from './Math';
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Resume />} />
                <Route
                    path="/math"
                    element={<Math />}
                />
                <Route
                    path="/portfolio"
                    element={<Portfolio />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
      </Router>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Ethan Hulen</p>
      </footer>
    </div>
  );
}

export default App;
