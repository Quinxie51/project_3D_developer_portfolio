import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas /> {/* Apply StarsCanvas globally */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
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
