import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ title, description, image, technologies, projectId }) => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate(`/project/${projectId}`);
  };

  return (
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
              className="text-[12px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <button
          onClick={handleProjectClick}
          className="text-purple-400 text-[14px] font-semibold hover:text-purple-300 transition-colors"
        >
          View Project →
        </button>
      </div>
    </motion.div>
  );
};

const FullStackProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, payment processing, and admin dashboard.",
      image: "https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      projectId: "ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication.",
      image: "https://via.placeholder.com/400x200/7C3AED/FFFFFF?text=Task+Management+App",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      projectId: "task-management-app"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and scheduling features.",
      image: "https://via.placeholder.com/400x200/EC4899/FFFFFF?text=Social+Media+Dashboard",
      technologies: ["Angular", "Python", "Redis", "Chart.js", "Heroku"],
      projectId: "social-media-dashboard"
    },
    {
      title: "Real-time Chat Application",
      description: "Instant messaging app with group chats, file sharing, and video calling capabilities.",
      image: "https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=Chat+Application",
      technologies: ["React", "Socket.io", "MongoDB", "WebRTC", "Firebase"],
      projectId: "chat-application"
    },
    {
      title: "Inventory Management System",
      description: "Comprehensive inventory tracking system with barcode scanning, reporting, and supplier management.",
      image: "https://via.placeholder.com/400x200/10B981/FFFFFF?text=Inventory+System",
      technologies: ["Next.js", "Prisma", "MySQL", "Redis", "Vercel"],
      projectId: "inventory-system"
    },
    {
      title: "Learning Management Platform",
      description: "Educational platform with course creation, student progress tracking, and interactive assessments.",
      image: "https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=Learning+Platform",
      technologies: ["React", "Django", "PostgreSQL", "AWS S3", "Nginx"],
      projectId: "learning-platform"
    }
  ];

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
        <p className={styles.sectionSubText}>Full Stack Development</p>
        <h2 className={styles.sectionHeadText}>Full Stack Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-16"
      >
        Complete web applications showcasing my expertise in both frontend and backend development. These projects demonstrate full-stack capabilities including database design, API development, user authentication, and deployment.
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

export default SectionWrapper(FullStackProjects, "fullstack-projects");
