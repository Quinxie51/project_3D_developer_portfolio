import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { aboutMe1, aboutMe2, aboutMe3, aboutMe4, aboutMe5, aboutMe6 } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
     I'm a dedicated software developer and a UI/UX designer. I bring expertise in TypeScript, JavaScript, 
    and frameworks like React and Flutter, alongside a keen interest in AR/VR development. 
    I thrive in collaborative environments, working closely with clients and teams to design and build 
    innovative, scalable, and user-centric solutions that drive impact. 
    Team up to transform your vision into reality!
      </motion.p>

      {/* Photo Gallery Section */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-16'
      >
        <h3 className='text-white text-[48px] font-bold mb-8'>Behind the Scenes</h3>
        <div className='columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6'>
          {[
            { src: aboutMe1, alt: "About me photo 1", size: "large" },
            { src: aboutMe2, alt: "About me photo 2", size: "medium" },
            { src: aboutMe3, alt: "About me photo 3", size: "large" },
            { src: aboutMe4, alt: "About me photo 4", size: "medium" },
            { src: aboutMe5, alt: "About me photo 5", size: "small" },
            { src: aboutMe6, alt: "About me photo 6", size: "large" }
          ].map((photo, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className='relative group cursor-pointer break-inside-avoid mb-6'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className='relative overflow-hidden rounded-xl bg-tertiary p-3 shadow-lg'>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full object-cover rounded-lg ${
                    photo.size === 'large' ? 'h-96' : 
                    photo.size === 'medium' ? 'h-80' : 'h-64'
                  }`}
                />
                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg' />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </>
  );
};

export default SectionWrapper(About, "about");
