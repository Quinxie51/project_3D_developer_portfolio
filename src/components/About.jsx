import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  console.log('About component rendered');

  return (
    <>
      <div className="relative w-full min-h-screen bg-space-bg">
        {/* Background Pattern */}
        <div className="absolute inset-0 starfield opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-8 py-16">
          {/* Back to Home Button */}
          <div className="absolute top-8 left-8">
            <motion.button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-cyan-600/20 border border-cyan-400/30 text-cyan-300 rounded-full hover:bg-cyan-600/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
          </div>

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
                Mission Profile & Achievements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Bio Panel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
                  Mission Statement
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My mission is to bridge the gap between imagination and implementation, crafting digital
                  experiences that not only meet functional requirements but exceed user expectations.
                  I specialize in creating intuitive, scalable solutions that drive business growth.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With expertise in modern web technologies and a passion for clean, maintainable code,
                  I transform complex problems into elegant solutions. My approach combines technical
                  excellence with creative problem-solving.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">MISSION ACTIVE</span>
                </div>
              </motion.div>

              {/* Skills Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
                  Core Competencies
                </h2>
                <div className="space-y-4">
                  {[
                    { skill: "Frontend Development", level: 90, color: "from-cyan-400 to-blue-500" },
                    { skill: "Backend Development", level: 85, color: "from-purple-400 to-pink-500" },
                    { skill: "UI/UX Design", level: 80, color: "from-green-400 to-teal-500" },
                    { skill: "Database Management", level: 85, color: "from-orange-400 to-red-500" },
                    { skill: "DevOps & Deployment", level: 75, color: "from-yellow-400 to-orange-500" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">{item.skill}</span>
                        <span className="text-cyan-400">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-space-grotesk font-bold text-white mb-8 text-center">
                Achievement Badges
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { title: "Hackathon Winner", desc: "First Place" },
                  { title: "Project Launches", desc: "20+ Deployed" },
                  { title: "Code Reviews", desc: "100+ Completed" },
                  { title: "Client Satisfaction", desc: "98% Rating" },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-cyan-400/20"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-white font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-cyan-400 text-sm">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/1-ntgFbUvVx1QzBhJhtPa0L2otZOOalux/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Full Mission Report
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
