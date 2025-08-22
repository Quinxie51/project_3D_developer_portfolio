import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const IndividualProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock project data - you can replace this with your actual project data
  const projectData = {
    "starship-quinxie": {
      title: "Starship Quinxie",
      subtitle: "Interactive 3D Space Experience",
      description: "An immersive 3D web application featuring interactive holographic displays, cosmic navigation, and futuristic UI elements built with React Three Fiber.",
      image: "https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Starship+Quinxie",
      technologies: ["React", "Three.js", "React Three Fiber", "Framer Motion", "Tailwind CSS"],
      features: [
        "Interactive 3D holographic displays",
        "Cosmic navigation system",
        "Real-time particle effects",
        "Responsive design",
        "Custom cursor effects"
      ],
      longDescription: `
        Starship Quinxie is a cutting-edge 3D web experience that pushes the boundaries of web technology. 
        Built with React Three Fiber, it features interactive holographic displays with glass materials and 
        emissive lights that create an immersive sci-fi atmosphere.
        
        The project showcases advanced 3D graphics, real-time particle systems, and innovative UI design 
        that creates a truly futuristic user experience. Users can navigate through different sections 
        using the cosmic navigation system, each featuring unique interactive elements and visual effects.
      `,
      githubLink: "#",
      liveLink: "#",
      demoLink: "#"
    }
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="mb-8 px-6 py-3 bg-purple-600/20 border border-purple-400/30 text-purple-300 rounded-full hover:bg-purple-600/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Portfolio
      </motion.button>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Project Showcase</p>
        <h2 className={styles.sectionHeadText}>{project.title}.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-8"
      >
        {project.subtitle}
      </motion.p>

      {/* Project Image */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="w-full mb-12"
      >
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Description */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="lg:col-span-2"
        >
          <h3 className="text-white text-[24px] font-bold mb-4">About This Project</h3>
          <p className="text-secondary text-[16px] leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="bg-tertiary p-6 rounded-2xl">
            <h4 className="text-white text-[18px] font-semibold mb-4">Project Overview</h4>
            <p className="text-secondary text-[14px] leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="space-y-6"
        >
          {/* Technologies */}
          <div className="bg-tertiary p-6 rounded-2xl">
            <h4 className="text-white text-[18px] font-semibold mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-[12px] bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-tertiary p-6 rounded-2xl">
            <h4 className="text-white text-[18px] font-semibold mb-4">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-secondary text-[14px] flex items-center">
                  <span className="text-purple-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="bg-tertiary p-6 rounded-2xl">
            <h4 className="text-white text-[18px] font-semibold mb-4">Project Links</h4>
            <div className="space-y-3">
              <a
                href={project.githubLink}
                className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                View on GitHub
              </a>
              <a
                href={project.liveLink}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Live Demo
              </a>
              <a
                href={project.demoLink}
                className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Video Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(IndividualProject, "project");
