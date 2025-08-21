import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { About, Contact, Experience, Hero, Tech, Works, StarsCanvas } from "./components";
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
        
        <Hero />
        <About />
        <Works />
        <Experience />
        <Tech />
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
