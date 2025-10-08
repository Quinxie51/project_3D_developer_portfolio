import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, StarsCanvas } from "./components";
import CustomCursor from "./components/CustomCursor";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import ProjectDetailPastPort from "./components/ProjectDetail-PastPort";
import ProjectDetail0KM from "./components/ProjectDetail-0KM";
import ProjectDetailExpiro from "./components/ProjectDetail-Expiro";
import ProjectDetailAgentOps from "./components/ProjectDetail-AgentOps";
import ProjectDetailConvoSense from "./components/ProjectDetail-ConvoSense";
import ProjectDetailTooGoodToGo from "./components/ProjectDetail-TooGoodToGo";

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
          <Route path="/project/pastport" element={<ProjectDetailPastPort />} />
          <Route path="/project/0km" element={<ProjectDetail0KM />} />
          <Route path="/project/expiro" element={<ProjectDetailExpiro />} />
          <Route path="/project/agentops" element={<ProjectDetailAgentOps />} />
          <Route path="/project/convosense" element={<ProjectDetailConvoSense />} />
          <Route path="/project/toogoodtogo" element={<ProjectDetailTooGoodToGo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
