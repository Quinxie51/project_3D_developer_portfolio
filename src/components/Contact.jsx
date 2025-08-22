import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Communications Hub
            </h1>
            <p className="text-xl text-cyan-400 font-mono">
              Establish Contact with the Captain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Holographic Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-space-grotesk font-bold text-white mb-6">
                Transmission Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    Call Sign
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-space-dark border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    Frequency (Email)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-space-dark border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 font-mono text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-space-dark border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full glow-button py-4 rounded-lg text-lg font-semibold font-space-grotesk"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  📡 Send Transmission
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                  Direct Channels
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-mono text-sm">Email</p>
                      <p className="text-white">quinxie@starship.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-mono text-sm">Comm Link</p>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-mono text-sm">Location</p>
                      <p className="text-white">Digital Space, Earth Orbit</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                  Social Networks
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'GitHub', icon: '🐙', url: '#' },
                    { name: 'LinkedIn', icon: '💼', url: '#' },
                    { name: 'Twitter', icon: '🐦', url: '#' },
                    { name: 'Portfolio', icon: '🚀', url: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-3 p-4 border border-cyan-400/30 rounded-lg hover:border-cyan-400/60 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="text-white font-space-grotesk">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">COMMUNICATIONS ACTIVE</span>
                </div>
                <p className="text-gray-300 text-sm">
                  All transmission channels are operational. 
                  Response time: <span className="text-cyan-400">24-48 hours</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
