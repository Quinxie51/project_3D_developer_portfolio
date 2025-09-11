import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import GrainLayer from './components/GrainLayer';

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Grain Layer */}
      <GrainLayer />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
