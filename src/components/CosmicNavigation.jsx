import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const CosmicNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About Me" },
    { id: "/contact", label: "Contact" },
  ];

  const handleNavClick = (path) => {
    console.log('CosmicNavigation: Navigating to', path);
    navigate(path);
  };

  const handleResumeClick = () => {
    console.log('CosmicNavigation: Opening Resume');
    window.open("https://drive.google.com/file/d/1-ntgFbUvVx1QzBhJhtPa0L2otZOOalux/view?usp=drive_link", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[9999] cosmic-navigation"
      style={{ zIndex: 99999, position: 'fixed' }}
    >
      <div className="bg-black/20 backdrop-blur-md rounded-full border border-white/20 p-2">
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === item.id
                  ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active indicator - behind the text */}
              {location.pathname === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Text content - always on top */}
              <span className="relative z-10">
                {item.label}
              </span>
            </motion.button>
          ))}
          
          {/* Resume Button */}
          <motion.button
            onClick={handleResumeClick}
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">
              Resume
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CosmicNavigation;
