import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import GlassPanel from './GlassPanel';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "E-Commerce Platform",
      year: "2024",
      summary: "A modern e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      cover: "/src/assets/web.png", // Update with actual image path
      tags: ["Full Stack", "E-Commerce", "React"],
      roles: ["Full Stack Developer", "UI/UX Designer"],
      tools: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "AI Chat Application",
      year: "2024",
      summary: "An intelligent chat application powered by OpenAI's GPT model. Built with real-time messaging, conversation history, and smart responses.",
      cover: "/src/assets/chat.png", // Update with actual image path
      tags: ["AI", "Real-time", "Chat"],
      roles: ["Backend Developer", "AI Integration"],
      tools: ["Python", "OpenAI API", "WebSocket", "React", "FastAPI"]
    },
    {
      title: "Portfolio Website",
      year: "2024",
      summary: "A minimalist portfolio website showcasing creative work and professional experience. Built with modern web technologies and smooth animations.",
      cover: "/src/assets/creator.png", // Update with actual image path
      tags: ["Portfolio", "Creative", "Modern"],
      roles: ["Frontend Developer", "Designer"],
      tools: ["React", "Framer Motion", "Tailwind CSS", "Three.js"]
    },
    {
      title: "Dashboard Analytics",
      year: "2023",
      summary: "A comprehensive analytics dashboard for business intelligence. Features data visualization, real-time updates, and customizable reports.",
      cover: "/src/assets/dashboard.png", // Update with actual image path
      tags: ["Analytics", "Dashboard", "Data"],
      roles: ["Full Stack Developer"],
      tools: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"]
    }
  ];

  return (
    <section id="work" className="py-32 bg-black relative">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title="Selected Work"
          subtitle="Featured Projects"
          align="center"
          className="mb-20"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => console.log(`Clicked on ${project.title}`)}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="#all-projects"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-heading font-medium tracking-wide rounded-2xl hover:bg-white/5 transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

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

export default Projects;
