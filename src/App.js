//APP.JS//
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Story from './pages/Story';
import EcoZone from './pages/EcoZone';
import Empowerment from './pages/Empowerment';
import TechForGood from './pages/TechForGood';
import Volunteer from './pages/Volunteer';
import './App.css'; 
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ padding: '0px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/story" element={<Story />} />  
            <Route path="/ecozone" element={<EcoZone />}  /> 
            <Route path="/empowerment" element={<Empowerment />} />
            <Route path="/tech-tools" element={<TechForGood />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
