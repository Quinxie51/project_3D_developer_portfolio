import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white">
          {project.category}
        </div>
      </div>
      
      <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
        {project.title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 bg-cyan-600/20 text-cyan-300 text-xs rounded border border-cyan-400/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 bg-purple-600/20 text-purple-300 text-center text-sm rounded border border-purple-400/30 hover:bg-purple-600/30 transition-colors"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 bg-green-600/20 text-green-300 text-center text-sm rounded border border-green-400/30 hover:bg-green-600/30 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const CategoryFilter = ({ category, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-400/50 text-white"
          : "bg-black/20 border border-gray-600/30 text-gray-300 hover:bg-black/40 hover:border-gray-500/50"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{category.icon}</span>
        <div>
          <h3 className="font-space-grotesk font-semibold">{category.title}</h3>
          <p className="text-xs opacity-70">{category.count} projects</p>
        </div>
      </div>
    </motion.button>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  console.log('Projects component rendered');

  // Mock project data - you can replace with real data
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard.",
      image: "https://via.placeholder.com/400x250/1a1a2e/ffffff?text=E-Commerce",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "https://via.placeholder.com/400x250/16213e/ffffff?text=Task+App",
      category: "Full Stack",
      technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website with 3D animations and interactive elements.",
      image: "https://via.placeholder.com/400x250/0f3460/ffffff?text=Portfolio",
      category: "UI/UX",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with real-time data and interactive charts.",
      image: "https://via.placeholder.com/400x250/533483/ffffff?text=Weather",
      category: "UI/UX",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "AI Chat Bot",
      description: "An intelligent chatbot powered by machine learning for customer support.",
      image: "https://via.placeholder.com/400x250/7209b7/ffffff?text=AI+Bot",
      category: "Creative",
      technologies: ["Python", "TensorFlow", "Flask", "WebSocket"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Music Visualizer",
      description: "An interactive music visualizer with real-time audio analysis and 3D graphics.",
      image: "https://via.placeholder.com/400x250/560bad/ffffff?text=Music+Viz",
      category: "Creative",
      technologies: ["JavaScript", "Web Audio API", "Three.js", "Canvas"],
      github: "#",
      live: "#"
    },
    {
      id: 7,
      title: "Social Media Clone",
      description: "A social media platform with posts, comments, likes, and user profiles.",
      image: "https://via.placeholder.com/400x250/480ca8/ffffff?text=Social+App",
      category: "Full Stack",
      technologies: ["React", "Firebase", "Redux", "Material-UI"],
      github: "#",
      live: "#"
    },
    {
      id: 8,
      title: "Game Interface Design",
      description: "A modern gaming interface design with dark theme and neon accents.",
      image: "https://via.placeholder.com/400x250/3f37c9/ffffff?text=Game+UI",
      category: "UI/UX",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Design System"],
      github: "#",
      live: "#"
    }
  ];

  const categories = [
    {
      id: "all",
      title: "All Projects",
      icon: "🚀",
      count: allProjects.length
    },
    {
      id: "Full Stack",
      title: "Full Stack",
      icon: "⚡",
      count: allProjects.filter(p => p.category === "Full Stack").length
    },
    {
      id: "UI/UX",
      title: "UI/UX Design",
      icon: "🎨",
      count: allProjects.filter(p => p.category === "UI/UX").length
    },
    {
      id: "Creative",
      title: "Creative",
      icon: "✨",
      count: allProjects.filter(p => p.category === "Creative").length
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

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
            className="max-w-7xl mx-auto"
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

            {/* Projects Layout */}
            <div className="flex gap-8">
              {/* Left Sidebar - Category Filters */}
              <div className="w-80 flex-shrink-0">
                <div className="sticky top-8">
                  <h2 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                    Categories
                  </h2>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <CategoryFilter
                        key={category.id}
                        category={category}
                        isActive={selectedCategory === category.id}
                        onClick={() => setSelectedCategory(category.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Projects Grid */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-2xl font-space-grotesk font-bold text-white mb-2">
                    {selectedCategory === "all" ? "All Projects" : `${selectedCategory} Projects`}
                  </h2>
                  <p className="text-gray-400">
                    Showing {filteredProjects.length} of {allProjects.length} projects
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {filteredProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                      No projects found
                    </h3>
                    <p className="text-gray-400">
                      Projects in this category are coming soon!
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
