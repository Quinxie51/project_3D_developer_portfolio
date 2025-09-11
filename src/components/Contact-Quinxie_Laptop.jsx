import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GlassPanel from './GlassPanel';
import Tag from './Tag';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully!');
  };

  const contactMethods = [
    {
      title: "Email",
      value: "hello@example.com",
      icon: "✉️",
      link: "mailto:hello@example.com"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      icon: "💼",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      title: "GitHub",
      value: "github.com/yourusername",
      icon: "🐙",
      link: "https://github.com/yourusername"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's Connect"
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                Let's Start a Conversation
              </h3>
              
              <p className="text-gray-200 font-text leading-relaxed">
                I'm always interested in new opportunities, exciting projects, and 
                connecting with fellow developers and designers. Whether you have a 
                project in mind or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? "_blank" : undefined}
                  rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassPanel 
                    variant="light" 
                    hasInnerStroke 
                    className="p-4 hover:bg-white/10 transition-colors duration-200"
                    hover={false}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <h4 className="font-heading font-semibold text-white">
                          {method.title}
                        </h4>
                        <p className="text-gray-300 font-text text-sm">
                          {method.value}
                        </p>
                      </div>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </GlassPanel>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlassPanel variant="dark" hasInnerStroke className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-heading font-semibold">
                      Available for Opportunities
                    </p>
                    <p className="text-gray-300 font-text text-sm">
                      Currently accepting new projects and collaborations
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassPanel variant="dark" hasInnerStroke className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-text font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-text font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-text font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-text font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-white text-black font-heading font-bold tracking-wide rounded-2xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
