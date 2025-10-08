import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  tooGoodToGoThumbnail,
  tooGoodToGoHome, 
  tooGoodToGoOffer, 
  tooGoodToGoDelivery, 
  tooGoodToGoEarlyReserve, 
  tooGoodToGoOnboarding 
} from "../assets";
import { getProjectByTitle } from "../constants";

const ProjectDetailTooGoodToGo = () => {
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              {detailedInfo.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              {detailedInfo.subtitle}
            </motion.p>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 italic max-w-4xl mx-auto leading-relaxed"
            >
              "{detailedInfo.heroQuote}"
            </motion.blockquote>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-12"
          >
            <img
              src={tooGoodToGoThumbnail}
              alt={detailedInfo.title}
              className="w-full h-auto object-cover max-h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(detailedInfo.quickStats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-lg font-bold text-white">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                The Problem
              </h2>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  {detailedInfo.problem}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Our Solution
              </h2>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  {detailedInfo.solution}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="space-y-16">
            {detailedInfo.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '9/16' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(detailedInfo.techStack).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Impact & Results
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Impact */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Social Impact
              </h3>
              <div className="space-y-4">
                {detailedInfo.results.socialImpact.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{impact}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Business Metrics */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Business Metrics
              </h3>
              <div className="space-y-4">
                {detailedInfo.results.businessMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{metric}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              User Testimonials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detailedInfo.results.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.0 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <p className="text-gray-300 italic leading-relaxed">
                    "{testimonial}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Key Learnings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Design Learnings */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                Design Insights
              </h3>
              <div className="space-y-4">
                {detailedInfo.learnings.design.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{learning}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Learnings */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400">
                Technical Insights
              </h3>
              <div className="space-y-4">
                {detailedInfo.learnings.technical.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{learning}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Project Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {detailedInfo.figmaLink && (
              <motion.a
                href={detailedInfo.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Figma Design</h3>
                <p className="text-gray-300">View the complete design system and prototypes</p>
              </motion.a>
            )}
            
            {detailedInfo.pitchDeck && (
              <motion.a
                href={detailedInfo.pitchDeck}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Presentation Deck</h3>
                <p className="text-gray-300">View the complete project presentation</p>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          className="text-center"
        >
          <div className="flex justify-center gap-6">
            <motion.button
              onClick={() => {
                const nextProject = getProjectByTitle("PastPort");
                navigate('/project/pastport', { state: { project: nextProject } });
              }}
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Project: PastPort
            </motion.button>
            <button
              onClick={() => navigate('/work')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ← Back to Projects
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailTooGoodToGo;
