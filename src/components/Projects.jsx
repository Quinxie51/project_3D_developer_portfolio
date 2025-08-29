import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCategory = ({ title, description, icon, color, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full"
    >
      <motion.button
        onClick={handleClick}
        className="group block w-full text-left"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={`w-full ${color} p-[1px] rounded-[20px] shadow-card`}>
          <div className="bg-tertiary rounded-[20px] py-10 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-white text-[24px] font-bold text-center mb-4">
              {title}
            </h3>
            <p className="text-secondary text-[16px] text-center leading-relaxed">
              {description}
            </p>
            <motion.div
              className="mt-6 text-purple-400 font-semibold"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Explore Projects →
            </motion.div>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  
  console.log('Projects component rendered');

  const projectCategories = [
    {
      title: "Full Stack Projects",
      description: "Complete web applications with frontend and backend integration, databases, and deployment solutions.",
      icon: "⚡",
      color: "green-pink-gradient",
      link: "/fullstack-projects"
    },
    {
      title: "UI/UX Projects",
      description: "User interface designs, user experience prototypes, and interactive design systems.",
      icon: "🎨",
      color: "blue-pink-gradient",
      link: "/uiux-projects"
    },
    {
      title: "Creative Projects",
      description: "Innovative and experimental projects showcasing creative coding and unique solutions.",
      icon: "✨",
      color: "purple-pink-gradient",
      link: "/creative-projects"
    }
  ];

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
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-space-grotesk font-bold text-white mb-4">
                Project Portfolio
              </h1>
              <p className="text-xl text-cyan-400 font-mono">
                Explore My Digital Creations
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto text-center leading-relaxed"
            >
              Explore my diverse portfolio of projects across different domains. Each category represents a unique aspect of my skills and creativity in software development and design.
            </motion.p>

            <div className="w-full flex flex-col lg:flex-row gap-8">
              {projectCategories.map((category, index) => (
                <ProjectCategory
                  key={category.title}
                  index={index}
                  {...category}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
