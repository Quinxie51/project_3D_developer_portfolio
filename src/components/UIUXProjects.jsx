import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ title, description, image, tools, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.5, 0.75)}
    className="w-full"
  >
    <div className="bg-tertiary p-6 rounded-2xl shadow-card">
      <div className="relative w-full h-[200px] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      
      <h3 className="text-white text-[20px] font-bold mb-2">{title}</h3>
      <p className="text-secondary text-[14px] mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="text-[12px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>
      
      <a
        href={link}
        className="text-blue-400 text-[14px] font-semibold hover:text-blue-300 transition-colors"
      >
        View Design →
      </a>
    </div>
  </motion.div>
);

const UIUXProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Mobile Banking App",
      description: "Modern banking interface with intuitive navigation, secure authentication, and seamless transaction flows.",
      image: "https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=Banking+App+Design",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
      link: "#"
    },
    {
      title: "E-Learning Platform",
      description: "Educational interface design focusing on accessibility, engagement, and progressive learning paths.",
      image: "https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=E-Learning+Design",
      tools: ["Figma", "Adobe Creative Suite", "Miro", "UserTesting", "Hotjar"],
      link: "#"
    },
    {
      title: "Fitness Tracking Dashboard",
      description: "Health and wellness app with data visualization, goal setting, and social features.",
      image: "https://via.placeholder.com/400x200/10B981/FFFFFF?text=Fitness+Dashboard",
      tools: ["Sketch", "Framer", "Adobe Illustrator", "Zeplin", "Abstract"],
      link: "#"
    },
    {
      title: "Restaurant Ordering System",
      description: "Digital menu and ordering interface with payment integration and kitchen management.",
      image: "https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=Restaurant+System",
      tools: ["Figma", "Adobe Photoshop", "Lottie", "Protopie", "Marvel"],
      link: "#"
    },
    {
      title: "Travel Booking App",
      description: "Comprehensive travel platform with booking flows, itinerary management, and review systems.",
      image: "https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=Travel+App+Design",
      tools: ["Adobe XD", "Sketch", "Figma", "Principle", "InVision"],
      link: "#"
    },
    {
      title: "Social Media Redesign",
      description: "Modern social platform interface with enhanced user experience and content discovery.",
      image: "https://via.placeholder.com/400x200/EC4899/FFFFFF?text=Social+Media+Design",
      tools: ["Figma", "Adobe Creative Suite", "Miro", "UserTesting", "Hotjar"],
      link: "#"
    }
  ];

  return (
    <>
      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="mb-8 px-6 py-3 bg-blue-600/20 border border-blue-400/30 text-blue-300 rounded-full hover:bg-blue-600/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Portfolio
      </motion.button>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>User Interface & Experience</p>
        <h2 className={styles.sectionHeadText}>UI/UX Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-16"
      >
        User-centered design projects that focus on creating intuitive, accessible, and engaging user experiences. These designs prioritize usability, aesthetics, and user satisfaction through research-driven design processes.
      </motion.p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(UIUXProjects, "uiux-projects");
