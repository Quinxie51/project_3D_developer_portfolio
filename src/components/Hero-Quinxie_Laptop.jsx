import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GlassPanel from './GlassPanel';
import Tag from './Tag';

const Hero = () => {
  const [show3D, setShow3D] = useState(true);

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Three.js', 'Framer Motion', 'Tailwind CSS'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Optional 3D Orbs */}
        {show3D && (
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/5 border border-white/10"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-white/5 border border-white/10"
              animate={{
                y: [0, 20, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white/5 border border-white/10"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 text-center">
        {/* Main Hero Content */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Large Wordmark */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white tracking-tighter leading-none">
              FUTURE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-text tracking-wide max-w-2xl mx-auto">
              Crafting digital experiences with precision and purpose
            </p>
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <Tag
                key={skill}
                variant="primary"
                size="md"
                interactive={false}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {skill}
              </Tag>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#work"
              className="px-8 py-4 bg-white text-black font-heading font-bold tracking-wide rounded-2xl hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-4 border border-white/20 text-white font-heading font-medium tracking-wide rounded-2xl hover:bg-white/5 transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3D Toggle */}
        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white text-sm hover:bg-black/30 transition-colors duration-200"
          onClick={() => setShow3D(!show3D)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {show3D ? 'Hide 3D' : 'Show 3D'}
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
