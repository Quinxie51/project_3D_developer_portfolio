import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  if (!project || !project.detailedInfo) {
    return (
      <div className="relative w-full min-h-screen bg-space-bg">
        <div className="absolute inset-0 starfield opacity-20"></div>
        <div className="relative z-10 container mx-auto px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-space-grotesk font-bold text-white mb-4">
              Project Not Found
            </h1>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 bg-cyan-600/20 border border-cyan-400/30 text-cyan-300 rounded-full hover:bg-cyan-600/30 transition-colors"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full min-h-screen bg-space-bg">
        {/* Background Pattern */}
        <div className="absolute inset-0 starfield opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-8 py-16">
          {/* Back to Projects Button */}
          <div className="absolute top-8 left-8">
            <motion.button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 bg-cyan-600/20 border border-cyan-400/30 text-cyan-300 rounded-full hover:bg-cyan-600/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Projects
            </motion.button>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Project Header */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-space-grotesk font-bold text-white mb-4"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-cyan-400 font-mono mb-4"
              >
                {project.detailedInfo.role}
              </motion.p>
              {project.detailedInfo.team && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-lg text-purple-400 font-mono mb-4"
                >
                  Team: {project.detailedInfo.team}
                </motion.p>
              )}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 max-w-3xl mx-auto"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Project Images Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-space-grotesk font-bold text-white mb-8 text-center">
                Project Screenshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.detailedInfo.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="rounded-xl overflow-hidden glass-panel"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <div className="glass-panel p-8 rounded-2xl">
                <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.detailedInfo.introduction}
                </p>
              </div>
            </motion.div>

            {/* Problem & Solution Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-panel p-8 rounded-2xl">
                  <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
                    The Problem
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.detailedInfo.problem}
                  </p>
                </div>
                <div className="glass-panel p-8 rounded-2xl">
                  <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
                    The Solution
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.detailedInfo.solution}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-16"
            >
              <div className="glass-panel p-8 rounded-2xl">
                <h2 className="text-3xl font-space-grotesk font-bold text-white mb-8 text-center">
                  Key Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.detailedInfo.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-black/20 rounded-lg border border-cyan-400/20"
                    >
                      <span className="text-cyan-400 text-xl mt-1">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools & Technologies Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mb-16"
            >
              <div className="glass-panel p-8 rounded-2xl">
                <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6 text-center">
                  Tools & Technologies
                </h2>
                <div className="text-center">
                  <p className="text-cyan-400 font-mono text-xl">
                    {project.detailedInfo.tools}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-center"
            >
              <div className="flex justify-center space-x-6">
                {project.github && project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-purple-600/20 border border-purple-400/30 text-purple-300 rounded-full hover:bg-purple-600/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                  </motion.a>
                )}
                {project.live && project.live !== "#" && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-green-600/20 border border-green-400/30 text-green-300 rounded-full hover:bg-green-600/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
