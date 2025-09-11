import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, StarsCanvas } from "./components";
import CustomCursor from "./components/CustomCursor";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <CustomCursor /> {/* Cosmic cursor with trailing effect */}
        <StarsCanvas /> {/* Apply StarsCanvas globally */}
        <div className="relative z-10">
          <Navbar />
        </div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
