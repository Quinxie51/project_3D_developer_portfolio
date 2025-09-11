import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import GlassPanel from './GlassPanel';

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // All projects data with categories
  const allProjects = [
    {
      title: "E-Commerce Platform",
      year: "2024",
      summary: "A modern e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      cover: "/src/assets/web.png",
      tags: ["Full Stack", "E-Commerce", "React"],
      roles: ["Full Stack Developer", "UI/UX Designer"],
      tools: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "fullstack"
    },
    {
      title: "AI Chat Application",
      year: "2024",
      summary: "An intelligent chat application powered by OpenAI's GPT model. Built with real-time messaging, conversation history, and smart responses.",
      cover: "/src/assets/chat.png",
      tags: ["AI", "Real-time", "Chat"],
      roles: ["Backend Developer", "AI Integration"],
      tools: ["Python", "OpenAI API", "WebSocket", "React", "FastAPI"],
      category: "fullstack"
    },
    {
      title: "Dashboard Analytics",
      year: "2023",
      summary: "A comprehensive analytics dashboard for business intelligence. Features data visualization, real-time updates, and customizable reports.",
      cover: "/src/assets/dashboard.png",
      tags: ["Analytics", "Dashboard", "Data"],
      roles: ["Full Stack Developer"],
      tools: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      category: "fullstack"
    },
    {
      title: "Backend API System",
      year: "2023",
      summary: "A robust RESTful API system with authentication, rate limiting, and comprehensive documentation. Built for scalability and performance.",
      cover: "/src/assets/backend.png",
      tags: ["Backend", "API", "REST"],
      roles: ["Backend Developer"],
      tools: ["Node.js", "Express", "JWT", "MongoDB", "Swagger"],
      category: "fullstack"
    },
    {
      title: "Mobile Fitness App",
      year: "2023",
      summary: "A cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
      cover: "/src/assets/mobile.png",
      tags: ["Mobile", "Fitness", "Cross-platform"],
      roles: ["Product Designer", "UX Researcher"],
      tools: ["Figma", "React Native", "Firebase", "Redux", "Expo"],
      category: "product"
    },
    {
      title: "SaaS Dashboard Design",
      year: "2024",
      summary: "Complete UI/UX design for a SaaS platform including user flows, wireframes, and high-fidelity prototypes.",
      cover: "/src/assets/dashboard.png",
      tags: ["UI/UX", "SaaS", "Design System"],
      roles: ["Product Designer", "UI Designer"],
      tools: ["Figma", "Adobe XD", "Principle", "Sketch"],
      category: "product"
    },
    {
      title: "Portfolio Website",
      year: "2024",
      summary: "A minimalist portfolio website showcasing creative work and professional experience. Built with modern web technologies and smooth animations.",
      cover: "/src/assets/creator.png",
      tags: ["Portfolio", "Creative", "Modern"],
      roles: ["Frontend Developer", "Designer"],
      tools: ["React", "Framer Motion", "Tailwind CSS", "Three.js"],
      category: "creative"
    },
    {
      title: "3D Interactive Experience",
      year: "2024",
      summary: "An immersive 3D web experience built with Three.js featuring interactive animations and particle effects.",
      cover: "/src/assets/creator.png",
      tags: ["3D", "Interactive", "WebGL"],
      roles: ["Creative Developer", "3D Artist"],
      tools: ["Three.js", "Blender", "WebGL", "React"],
      category: "creative"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', count: allProjects.length },
    { id: 'fullstack', name: 'Full Stack', count: allProjects.filter(p => p.category === 'fullstack').length },
    { id: 'product', name: 'Product Design', count: allProjects.filter(p => p.category === 'product').length },
    { id: 'creative', name: 'Creative Work', count: allProjects.filter(p => p.category === 'creative').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-32 bg-black relative">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title="All Projects"
          subtitle="Complete Portfolio"
          align="center"
          className="mb-20"
        />

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#915EFF] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => console.log(`Clicked on ${project.title}`)}
                className="animate-fade-in"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassPanel variant="light" hasInnerStroke className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { number: "20+", label: "Projects Completed" },
                { number: "3+", label: "Years Experience" },
                { number: "15+", label: "Technologies" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-text text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkPage;
