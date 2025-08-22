import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leva } from "leva";
import Airlock from "./components/scenes/Airlock";
import BridgeScene from "./components/scenes/Bridge";
import ProjectBay from "./components/scenes/ProjectBay";
import About from "./components/About";
import Contact from "./components/Contact";
import useStore from "./lib/store";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAudioOn } = useStore();

  useEffect(() => {
    // Simulate loading time for space experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-space-bg flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🚀</div>
          <h1 className="text-3xl font-space-grotesk font-bold text-white mb-4">
            Initializing Starship Quinxie
          </h1>
          <div className="w-64 h-2 bg-space-light rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
          <p className="text-cyan-400 font-mono text-sm mt-4">
            Loading systems...
          </p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* Fixed Space Background */}
      <div className="space-background-fixed" />
      
      <div className="relative z-0 min-h-screen">
        <Routes>
          {/* Landing Airlock - Default Home Page */}
          <Route path="/" element={<Airlock />} />
          
          {/* Bridge Hub */}
          <Route path="/bridge" element={<BridgeScene />} />
          
          {/* Project Bay */}
          <Route path="/projects" element={<ProjectBay />} />
          
          {/* About Page */}
          <Route path="/about" element={<About />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all route - redirect to home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Development Tools */}
      {process.env.NODE_ENV === 'development' && (
        <Leva
          titleBar={{
            title: "Starship Quinxie Controls",
          }}
        />
      )}
    </BrowserRouter>
  );
};

export default App;
