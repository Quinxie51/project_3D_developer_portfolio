import React from 'react';
import { About, Experience, Tech, Contact } from './index';

const AboutPage = () => {
  return (
    <>
      <About />
      <Experience />
      <Tech />
      <div className="relative z-10">
        <Contact />
      </div>
    </>
  );
};

export default AboutPage;
