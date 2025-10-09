import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { getProjectByTitle } from "../constants";

const ProjectDetail0KM = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !project.detailedInfo) {
    return (
      <div className="relative w-full min-h-screen bg-black">
        <div className="relative z-0 container mx-auto px-8 pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Project Not Found
            </h1>
            <button
              onClick={() => navigate('/work')}
              className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { detailedInfo } = project;

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <div className="relative z-0 container mx-auto px-8 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-4"
            >
              {detailedInfo.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-8"
            >
              Award-Winning Relationship App • Full-Stack Developer & Product Designer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <p className="text-lg text-white leading-relaxed">
                {detailedInfo.heroQuote}
              </p>
            </motion.div>
          </div>

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Project Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.a
                  href={detailedInfo.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-red-600/20 border border-red-400/30 text-red-300 rounded-xl hover:bg-red-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-medium">Demo Video</span>
                </motion.a>

                <motion.a
                  href={detailedInfo.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-purple-600/20 border border-purple-400/30 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.852 8.981h-4.588v-2.04c0-1.04.52-1.57 1.57-1.57 1.04 0 1.57.53 1.57 1.57v2.04h1.448v-2.04c0-1.04.52-1.57 1.57-1.57s1.57.53 1.57 1.57v2.04h1.448v-2.04c0-1.04-.52-1.57-1.57-1.57s-1.57.53-1.57 1.57v2.04zm-4.588 0H9.816v-2.04c0-1.04-.52-1.57-1.57-1.57s-1.57.53-1.57 1.57v2.04H5.228v-2.04c0-1.04.52-1.57 1.57-1.57s1.57.53 1.57 1.57v2.04zm0 0v2.04c0 1.04.52 1.57 1.57 1.57s1.57-.53 1.57-1.57v-2.04zm0 0H9.816v2.04c0 1.04.52 1.57 1.57 1.57s1.57-.53 1.57-1.57v-2.04z"/>
                  </svg>
                  <span className="font-medium">Figma Design</span>
                </motion.a>

                <motion.a
                  href={detailedInfo.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-600/20 border border-gray-400/30 text-gray-300 rounded-xl hover:bg-gray-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </motion.a>

                <motion.a
                  href={detailedInfo.awardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-yellow-600/20 border border-yellow-400/30 text-yellow-300 rounded-xl hover:bg-yellow-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                  </svg>
                  <span className="font-medium">Pitch Deck</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Award</h3>
              <p className="text-white font-semibold">{detailedInfo.quickStats.award}</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Timeline</h3>
              <p className="text-white font-semibold">{detailedInfo.quickStats.timeline}</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Role</h3>
              <p className="text-white font-semibold">{detailedInfo.quickStats.role}</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Impact</h3>
              <p className="text-white font-semibold">{detailedInfo.quickStats.impact}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: detailedInfo.features[0].image, alt: "Home Dashboard" },
              { src: detailedInfo.features[1].image, alt: "Chat" },
              { src: detailedInfo.features[2].image, alt: "Calendar" },
              { src: detailedInfo.features[3].image, alt: "Music" },
              { src: detailedInfo.features[4].image, alt: "Diary" }
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="rounded-xl overflow-hidden bg-white/5 border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[9/16] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">{detailedInfo.challenge}</p>
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">😔 Emotional Disconnect</h4>
                      <p className="text-gray-300 text-sm">67% felt "emotionally distant" despite daily communication</p>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">🕐 Coordination Chaos</h4>
                      <p className="text-gray-300 text-sm">89% juggled 3-6 different apps for communication and planning</p>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">📱 App Fatigue</h4>
                      <p className="text-gray-300 text-sm">No single platform designed specifically for couples' unique needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.img
                src={detailedInfo.heroImage}
                alt="0-KM Hero"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="space-y-12">
            {detailedInfo.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <span className="text-pink-400 text-lg mt-1">•</span>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full max-w-xs rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
                <p className="text-gray-300">{detailedInfo.techStack.frontend}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
                <p className="text-gray-300">{detailedInfo.techStack.backend}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Database</h3>
                <p className="text-gray-300">{detailedInfo.techStack.database}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Authentication</h3>
                <p className="text-gray-300">{detailedInfo.techStack.authentication}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
              <div className="space-y-4">
                {detailedInfo.results.quantitative.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl mt-1">✓</span>
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">User Testimonials</h2>
              <div className="space-y-4">
                {detailedInfo.results.testimonials.map((testimonial, index) => (
                  <blockquote key={index} className="text-gray-300 italic text-sm leading-relaxed">
                    "{testimonial}"
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Learnings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Design Insights</h3>
              <ul className="space-y-3">
                {detailedInfo.learnings.design.map((learning, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-blue-400 text-lg mt-1">•</span>
                    <span className="text-gray-300">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Growth</h3>
              <ul className="space-y-3">
                {detailedInfo.learnings.technical.map((learning, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-purple-400 text-lg mt-1">•</span>
                    <span className="text-gray-300">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6">
            <motion.button
              onClick={() => {
                const nextProject = getProjectByTitle("ConvoSense");
                navigate('/project/convosense', { state: { project: nextProject } });
              }}
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Project: ConvoSense
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail0KM;
