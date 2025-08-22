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
  const projectCategories = [
    {
      title: "Full Stack Projects",
      description: "Complete web applications with frontend and backend integration, databases, and deployment solutions.",
      icon: "⚡",
      color: "green-pink-gradient",
      link: "/projects/fullstack"
    },
    {
      title: "UI/UX Projects",
      description: "User interface designs, user experience prototypes, and interactive design systems.",
      icon: "🎨",
      color: "blue-pink-gradient",
      link: "/projects/uiux"
    },
    {
      title: "Creative Projects",
      description: "Innovative and experimental projects showcasing creative coding and unique solutions.",
      icon: "✨",
      color: "purple-pink-gradient",
      link: "/projects/creative"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-16"
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
    </>
  );
};

export default SectionWrapper(Projects, "projects");
