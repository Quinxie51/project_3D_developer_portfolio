import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ title, description, image, technologies, link }) => (
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
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-[12px] bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <a
        href={link}
        className="text-pink-400 text-[14px] font-semibold hover:text-pink-300 transition-colors"
      >
        Explore Project →
      </a>
    </div>
  </motion.div>
);

const CreativeProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "AI Art Generator",
      description: "Interactive web application that generates unique artwork using machine learning and creative algorithms.",
      image: "https://via.placeholder.com/400x200/EC4899/FFFFFF?text=AI+Art+Generator",
      technologies: ["Python", "TensorFlow", "React", "Three.js", "WebGL"],
      link: "#"
    },
    {
      title: "Interactive Music Visualizer",
      description: "Real-time audio visualization tool that creates dynamic visual patterns synchronized with music.",
      image: "https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Music+Visualizer",
      technologies: ["Web Audio API", "Canvas API", "JavaScript", "WebGL", "FFT"],
      link: "#"
    },
    {
      title: "3D Portfolio Experience",
      description: "Immersive 3D environment showcasing projects in an interactive virtual gallery space.",
      image: "https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=3D+Portfolio",
      technologies: ["Three.js", "React Three Fiber", "Blender", "WebGL", "GSAP"],
      link: "#"
    },
    {
      title: "Generative Design System",
      description: "Algorithmic design tool that creates unique patterns and layouts based on mathematical principles.",
      image: "https://via.placeholder.com/400x200/10B981/FFFFFF?text=Generative+Design",
      technologies: ["Processing", "p5.js", "SVG", "Canvas", "Mathematics"],
      link: "#"
    },
    {
      title: "AR Product Showcase",
      description: "Augmented reality application for virtual product visualization and interactive demonstrations.",
      image: "https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=AR+Showcase",
      technologies: ["WebXR", "Three.js", "AR.js", "WebGL", "Computer Vision"],
      link: "#"
    },
    {
      title: "Interactive Storytelling Platform",
      description: "Dynamic narrative experience with branching storylines and user-driven plot development.",
      image: "https://via.placeholder.com/400x200/EF4444/FFFFFF?text=Interactive+Story",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets", "NLP"],
      link: "#"
    }
  ];

  return (
    <>
      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="mb-8 px-6 py-3 bg-pink-600/20 border border-pink-400/30 text-pink-300 rounded-full hover:bg-pink-600/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Portfolio
      </motion.button>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Creative & Experimental</p>
        <h2 className={styles.sectionHeadText}>Creative Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-16"
      >
        Experimental and innovative projects that push the boundaries of technology and creativity. These projects explore emerging technologies, artistic expression, and novel approaches to problem-solving.
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

export default SectionWrapper(CreativeProjects, "creative-projects");
