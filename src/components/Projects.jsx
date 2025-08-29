import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pasportThumbnail, pasportDashboard, pasportTalk, pasportChat, pasportSave, pasportSet } from "../assets";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    if (project.detailedInfo) {
      // Navigate to detailed project page for projects with detailed info
      navigate(`/project/${project.id}`, { state: { project } });
    } else {
      // For simple projects, just open links or show basic info
      if (project.live && project.live !== "#") {
        window.open(project.live, "_blank");
      } else if (project.github && project.github !== "#") {
        window.open(project.github, "_blank");
      }
    }
  };

  // For creative projects with video embeds, render as card with videos
  if (project.videoEmbeds) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-panel p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="relative mb-4">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={project.videoEmbeds[0]}
              title={`${project.title} Main Video`}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white">
            {Array.isArray(project.category) ? project.category[0] : project.category}
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
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel p-6 rounded-2xl hover:shadow-glow transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={handleProjectClick}
    >
      <div className="relative mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {Array.isArray(project.category) ? (
            project.category.map((cat, index) => (
              <span key={index} className="px-2 py-1 bg-black/70 rounded text-xs text-white">
                {cat}
              </span>
            ))
          ) : (
            <span className="px-2 py-1 bg-black/70 rounded text-xs text-white">
              {project.category}
            </span>
          )}
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
  const jobit = "https://via.placeholder.com/400x250/1a1a2e/ffffff?text=JobIT";
  const tripguide = "https://via.placeholder.com/400x250/16213e/ffffff?text=TripGuide";
  const creator = "https://via.placeholder.com/400x250/0f3460/ffffff?text=Creative+Portfolio";

  const allProjects = [
    {
      id: 1,
      title: "PastPort",
      description: "A mobile app designed to transform history education into an immersive, interactive experience through AI-powered conversations and personalized learning paths.",
      image: pasportThumbnail,
      category: ["Full Stack", "UI/UX"],
      technologies: ["Flutter", "Dart", "SQLite", "OpenAI API", "Figma"],
      github: "#",
      live: "#",
      detailedInfo: {
        role: "Lead UI/UX Designer • Software Engineer • AI Integrator",
        team: "Jay Vimalbhai Gohel • Zeel Thakkar • Vijay Bharvad • Rishi Patel",
        tools: "Figma, Flutter, Dart, SQLite, OpenAI API",
        introduction: "PastPort is a mobile app designed to transform history education into an immersive, interactive experience. Our vision was simple: 'Make learning history feel like traveling through time — exploring events, meeting historical figures, and shaping your journey.' By combining AI-powered conversations, interactive timelines, and personalized learning paths, we turned passive memorization into dynamic storytelling.",
        problem: "Existing learning apps lack interactivity and personalization. BBC History & HISTORY App are overloaded with ads, passive content, and early paywalls. Museum Apps have limited organization and low engagement. YouTube & Articles are scattered, hard to track, and not tailored for learners. We realized learners needed a single platform where education feels like exploration — hands-on, narrative-driven, and fun.",
        solution: "PastPort turns historical exploration into an AI-powered adventure: Talk with historical figures like Mahatma Gandhi or Cleopatra, explore timelines and dive into curated events, track learnings with a built-in notebook, reinforce knowledge through quizzes and gamification, and personalize content with adaptive recommendations.",
        achievements: [
          "Built a full working MVP in just 8 weeks",
          "Designed an AI chatbot experience rated 'realistic and fun' by test users",
          "Created a freemium subscription system with multiple engagement tiers",
          "Boosted retention in initial testing by ~25%"
        ],
        images: [
          pasportDashboard,
          pasportTalk,
          pasportChat,
          pasportSave,
          pasportSet
        ]
      }
    },
    {
      id: 2,
      title: "AgentOps",
      description: "An agentic workflow visualization & audit platform that provides unprecedented transparency into AI decision-making processes.",
      image: "https://via.placeholder.com/400x250/1a1a2e/ffffff?text=AgentOps",
      category: ["Full Stack", "UI/UX"],
      technologies: ["LangGraph", "React 18", "TypeScript", "Python", "Azure OpenAI", "XYFlow", "Tailwind", "shadcn/ui"],
      github: "#",
      live: "#",
      detailedInfo: {
        role: "Full-Stack Developer • AI Engineer • UI/UX Contributor",
        team: "Solo Project",
        tools: "LangGraph, React 18, TypeScript, Python, Azure OpenAI, XYFlow, Tailwind, shadcn/ui",
        introduction: "As AI systems become increasingly complex, auditing their decision-making has never been more critical. AgentOps was built to provide unprecedented transparency into agentic workflows, enabling users to visualize, debug, and audit decisions made by multi-agent systems in real-time. Whether you're monitoring compliance, debugging workflow failures, or ensuring AI accountability, AgentOps makes the entire process clear, visual, and explainable.",
        problem: "Modern LLM-based agents handle hundreds of micro-decisions per second — from picking suppliers to optimizing multi-step business workflows. But for stakeholders, these decisions often look like a black box. Our goal was to open that box and make complex workflows understandable through interactive node-based visualizations, auditable with deterministic replay capabilities, and compliance-ready by flagging issues in real-time.",
        solution: "AgentOps provides interactive node-based visualization using XYFlow, deterministic replay & auditing capabilities, real-time compliance monitoring, automated decision reports, and benchmarking & comparison tools. The system orchestrates agents to evaluate vendors, flags compliance risks in real-time, and visualizes the reasoning behind each recommendation.",
        achievements: [
          "Built a fully functional visualization platform in record time",
          "Integrated compliance auditing for high-stakes vendor workflows",
          "Created replayable workflows for transparent AI debugging",
          "Enabled real-time monitoring of 1,200+ vendor decisions simultaneously"
        ],
        images: [
          "https://via.placeholder.com/800x600/1a1a2e/ffffff?text=Workflow+Visualization",
          "https://via.placeholder.com/800x600/16213e/ffffff?text=Replay+Panel",
          "https://via.placeholder.com/800x600/0f3460/ffffff?text=Compliance+Monitoring",
          "https://via.placeholder.com/800x600/533483/ffffff?text=Decision+Reports",
          "https://via.placeholder.com/800x600/7209b7/ffffff?text=Benchmarking+Dashboard"
        ]
      }
    },
    {
      id: 3,
      title: "0-KM",
      description: "A mobile app designed to help couples stay connected across any distance through real-time chat, shared memories, and synchronized experiences.",
      image: "https://via.placeholder.com/400x250/ff6b6b/ffffff?text=0-KM",
      category: ["Full Stack", "UI/UX"],
      technologies: ["React Native", "Supabase", "Clerk", "Tailwind", "Node.js", "Google Calendar API", "Spotify API"],
      github: "#",
      live: "#",
      detailedInfo: {
        role: "Lead Product Designer • Frontend Developer • UX Researcher",
        team: "Team Project",
        tools: "React Native, Supabase, Clerk, Tailwind, Node.js, Google Calendar API, Spotify API",
        introduction: "0-KM is a mobile app designed to help couples stay connected across any distance. We built an intuitive, feature-rich platform where partners can chat in real time, share memories, plan events, listen to music together, and sync their schedules — all in one beautifully crafted experience. This project earned us the Technical Titan Award at the VTMP Demo Day, recognizing both design excellence and engineering complexity.",
        problem: "Long-distance couples often struggle to stay emotionally connected despite physical separation, manage time zone differences and scheduling conflicts, share memories, milestones, and content seamlessly, and avoid juggling multiple apps for messaging, planning, and media. We wanted to design a single hub that fosters intimacy, enables collaboration, and brings couples closer together no matter the distance.",
        solution: "0-KM combines beautiful UI, seamless UX, and real-time technology into one connected ecosystem: personalized onboarding tailored to relationship preferences, couple pairing system to securely link partners, interactive dashboard showing live milestones, events, and Spotify/YouTube widgets, shared library & journaling for digital memories, Google Calendar sync for stress-free scheduling, and rich chat experience with media sharing, online/offline status, and dynamic notifications.",
        achievements: [
          "Won the Technical Titan Award at VTMP Demo Day",
          "Delivered a fully functional cross-platform app in 8 weeks",
          "Built a seamless, design-first experience loved by testers",
          "Implemented real-time synchronization across multiple services"
        ],
        images: [
          "https://via.placeholder.com/800x600/ff6b6b/ffffff?text=Authentication+Onboarding",
          "https://via.placeholder.com/800x600/4ecdc4/ffffff?text=Home+Dashboard",
          "https://via.placeholder.com/800x600/45b7d1/ffffff?text=Chat+Interface",
          "https://via.placeholder.com/800x600/96ceb4/ffffff?text=Shared+Library",
          "https://via.placeholder.com/800x600/ffeaa7/ffffff?text=Calendar+Integration"
        ]
      }
    },
    {
      id: 4,
      title: "JobIT",
      description: "A comprehensive job search platform that connects talented professionals with their dream opportunities.",
      image: jobit,
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "TripGuide",
      description: "An intelligent travel companion that helps users discover and plan their perfect adventures.",
      image: tripguide,
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Creative Portfolio",
      description: "A stunning showcase of creative work and artistic achievements.",
      image: creator,
      category: "Creative",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      github: "#",
      live: "#",
      videoEmbeds: [
        "https://www.youtube.com/embed/a6gjPexRWsk",
        "https://www.youtube.com/embed/z3PAeUw0Dv8", 
        "https://www.youtube.com/embed/QgAb3uKiC6Q"
      ]
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
        count: allProjects.filter(p => Array.isArray(p.category) ? p.category.includes("Full Stack") : p.category === "Full Stack").length
      },
      {
        id: "UI/UX",
        title: "UI/UX Design",
        icon: "🎨",
        count: allProjects.filter(p => Array.isArray(p.category) ? p.category.includes("UI/UX") : p.category === "UI/UX").length
      },
      {
        id: "Creative",
        title: "Creative",
        icon: "✨",
        count: allProjects.filter(p => Array.isArray(p.category) ? p.category.includes("Creative") : p.category === "Creative").length
      }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => Array.isArray(project.category) ? project.category.includes(selectedCategory) : project.category === selectedCategory);

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
