import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

// Placeholder components for Skills
const Skills = () => <div className="bg-[#F5EDE3] min-h-screen flex items-center justify-center"><h1 className="text-4xl font-serif">Skills Section Coming Soon</h1></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Achievements" element={<Achievements />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
