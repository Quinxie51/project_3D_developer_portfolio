import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import avatar from "../assets/3d avatar.gif"; // Import your avatar GIF
import AnimatedText from "./AnimatedText"; // Import the new component

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[200px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-10"> {/* Added margin-top to move the text lower */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Quinxie</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <AnimatedText />
          </p>
        </div>
      </div>

      {/* Add the GIF here with absolute positioning */}
      <div
        className="absolute"
        style={{ top: "170px", right: "100px", width: "500px", height: "500px" }}
      >
        <img
          src={avatar}
          alt="3D Avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
