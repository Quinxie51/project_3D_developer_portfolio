import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-space-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 starfield opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/bridge')}
          className="mb-8 px-6 py-3 bg-cyan-600/20 border border-cyan-400/30 text-cyan-300 rounded-full hover:bg-cyan-600/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Bridge
        </motion.button>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-space-grotesk font-bold text-white mb-4">
              About the Captain
            </h1>
            <p className="text-xl text-cyan-400 font-mono">
              Quinxie - Digital Space Explorer
            </p>
          </div>

          {/* Bio Section */}
          <div className="glass-panel p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Mission Profile
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Greetings, fellow space travelers! I'm Quinxie, a passionate developer and creative technologist 
                  exploring the vast digital cosmos. With over 3 years of experience navigating the complex 
                  landscapes of web development, I specialize in creating immersive, interactive experiences 
                  that push the boundaries of what's possible on the web.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My mission is to bridge the gap between imagination and implementation, crafting digital 
                  experiences that not only function flawlessly but also inspire wonder and engagement. 
                  From full-stack applications to creative coding experiments, I approach each project 
                  as a new adventure in the digital frontier.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-400 font-mono">Full Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-400 font-mono">3D Web Graphics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-400 font-mono">Creative Coding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-400 font-mono">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hackathon Badges */}
          <div className="glass-panel p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Achievement Badges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Innovation Award", description: "Best Creative Project", icon: "🏆" },
                { title: "Technical Excellence", description: "Advanced Implementation", icon: "⚡" },
                { title: "Team Leadership", description: "Project Coordination", icon: "👨‍🚀" }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 border border-cyan-400/30 rounded-xl hover:border-cyan-400/60 transition-colors"
                >
                  <div className="text-4xl mb-4">{badge.icon}</div>
                  <h3 className="text-xl font-space-grotesk font-semibold text-white mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-cyan-400 text-sm">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="glass-panel p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
              Download Mission Dossier
            </h2>
            <p className="text-gray-300 mb-6">
              Access my complete technical profile and mission history
            </p>
            <motion.a
              href="/resume.pdf"
              download
              className="glow-button px-8 py-4 rounded-full text-lg font-semibold font-space-grotesk inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
