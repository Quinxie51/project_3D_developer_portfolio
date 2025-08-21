import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CosmicNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: "🌌" },
    { id: "about", label: "About", icon: "⭐" },
    { id: "project", label: "Works", icon: "🚀" },
    { id: "work", label: "Experience", icon: "🌍" },
    { id: "tech", label: "Tech", icon: "⚡" },
    { id: "contact", label: "Contact", icon: "📡" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    
    // For home section, scroll to top
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // For other sections, find the hash-span element
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Simple and reliable scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page (Contact section)
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 150;
      
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }
      
      // Simple section detection based on scroll position
      if (scrollPosition < 300) {
        setActiveSection("home");
      } else if (scrollPosition < 800) {
        setActiveSection("about");
      } else if (scrollPosition < 1300) {
        setActiveSection("project");
      } else if (scrollPosition < 1800) {
        setActiveSection("work");
      } else if (scrollPosition < 2300) {
        setActiveSection("tech");
      } else {
        setActiveSection("contact");
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-black/20 backdrop-blur-md rounded-full border border-white/20 p-2">
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active indicator - behind the text */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Text content - always on top */}
              <span className="relative z-10 flex items-center">
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CosmicNavigation;
