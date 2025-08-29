import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { About, Contact, Hero, Projects, ProjectDetail, FullStackProjects, UIUXProjects, CreativeProjects, StarsCanvas } from "./components";
import CosmicLoader from "./components/CosmicLoader";
import CosmicCursor from "./components/CosmicCursor";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for cosmic experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CosmicLoader />;
  }

  return (
    <BrowserRouter>
      {/* Fixed Cosmic Background - Never Disappears */}
      <div className="cosmic-background-fixed" />
      
      <div className="relative z-0 min-h-screen">
        {/* Enhanced Cosmic Background */}
        <StarsCanvas />
        
        {/* Cosmic Cursor */}
        <CosmicCursor />
        
        <Routes>
          {/* Main Portfolio Page - Only Hero */}
          <Route path="/" element={<Hero />} />
          
          {/* About Page */}
          <Route path="/about" element={<About />} />
          
          {/* Projects Page */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Individual Project Page */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Project Category Pages */}
          <Route path="/fullstack-projects" element={<FullStackProjects />} />
          <Route path="/uiux-projects" element={<UIUXProjects />} />
          <Route path="/creative-projects" element={<CreativeProjects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
