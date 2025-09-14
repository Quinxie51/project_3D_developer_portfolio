import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import GlassPanel from './GlassPanel';
import { pastport, pastportChat, pastportDashboard, pastportSave, pastportSet, pastportTalk, pastportPitchDeck, zeroKm, zeroKmCalendar, zeroKmChat, zeroKmDiary, zeroKmHome, zeroKmMusic } from '../assets';

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  // All projects data with categories
  const allProjects = [
    {
      title: "0-KM",
      year: "2025",
        summary: "Award-winning relationship app that bridges hearts across any distance, unifying 6+ separate apps into one seamless experience. Won Technical Titan Award at Viet Tech Mentorship Program Demo Day.",
      cover: zeroKm,
      tags: ["React Native", "Node.js", "Supabase", "Socket.io"],
      roles: ["Full-Stack Developer", "Product Designer", "UX Researcher"],
      category: "fullstack",
      detailedInfo: {
        title: "0-KM - Bridging Hearts Across Any Distance",
        subtitle: "Award-Winning Relationship App • Full-Stack Developer & Product Designer",
        heroImage: zeroKm,
        heroQuote: "How I designed and built a relationship app that won the Technical Titan Award by solving real intimacy challenges for long-distance couples",
        demoVideo: "https://www.youtube.com/watch?v=q9-3dKchfSk",
        figmaLink: "https://www.figma.com/design/nCpusfVWL9IAvWLzqwtFZe/0km--Demo-?node-id=0-1&t=LAiOCqGW29ASrv0c-1",
        githubLink: "https://github.com/ThanhDatVu111/0-KM",
        awardLink: "https://docs.google.com/presentation/d/1phenEYZLNmz2zYRqMbzLjSWodpU7O9BZg5SZTBPI9TA/edit?usp=sharing",
        quickStats: {
          award: "Technical Titan Award at Viet Tech Mentorship Program Demo Day",
          timeline: "3 months (April-July 2025)",
          role: "Full-Stack Developer, Product Designer, UX Researcher",
          impact: "Unified 6+ separate apps into one seamless experience"
        },
        challenge: "Long-distance relationships affect 14 million couples in the US alone, but existing solutions are fragmented and fail to address core emotional needs. After conducting user research with 23 couples across 4 countries, I discovered that 67% felt emotionally distant despite daily communication, 89% juggled 3-6 different apps, and no single platform was designed specifically for couples' unique needs.",
        features: [
          {
            title: "Ambient Awareness Dashboard",
            description: "Smart dashboard providing passive ways for partners to feel present in each other's lives with live widgets showing weather, schedule, and status.",
            image: zeroKmHome,
            highlights: [
              "Live weather sync for both locations",
              "Schedule preview with next 3 events",
              "Mood check with emoji selector",
              "Spotify integration with collaborative playlists",
              "Photo of the day with one-tap response"
            ]
          },
          {
            title: "Integrated Chat Experience",
            description: "Relationship-specific chat features with contextual messaging, rich media integration, and status intelligence.",
            image: zeroKmChat,
            highlights: [
              "Smart suggestions based on time zones",
              "Location context for weather questions",
              "Schedule awareness for availability",
              "In-line Spotify playback",
              "Enhanced typing indicators with context"
            ]
          },
          {
            title: "Calendar Coordination System",
            description: "Smart calendar overlay that simplifies scheduling without replacing existing calendar apps, with mutual availability and conflict detection.",
            image: zeroKmCalendar,
            highlights: [
              "Overlay view showing both schedules",
              "Free time highlighting in green blocks",
              "Automatic time zone conversion",
              "Conflict detection and resolution",
              "Couple-specific event templates"
            ]
          },
          {
            title: "Shared Music Experience",
            description: "Synchronized Spotify playlists and collaborative music discovery to enable couples to share activities despite physical separation.",
            image: zeroKmMusic,
            highlights: [
              "Real-time playlist synchronization",
              "Collaborative music discovery",
              "Currently playing status sharing",
              "Mood-based playlist suggestions",
              "Shared listening sessions"
            ]
          },
          {
            title: "Memory Preservation Library",
            description: "Intelligent memory organization with auto-grouping by events, locations, and people, plus collaborative tagging and anniversary detection.",
            image: zeroKmDiary,
            highlights: [
              "Smart albums by events and locations",
              "Anniversary milestone detection",
              "Collaborative tagging system",
              "Search by emotion and date",
              "Export options for anniversary videos"
            ]
          }
        ],
        techStack: {
          frontend: "React Native + Expo - Cross-platform development with native performance",
          backend: "Node.js + Express + Socket.io - Real-time capabilities for chat and live widgets",
          database: "Supabase - Real-time subscriptions with built-in auth and PostgreSQL reliability",
          authentication: "Clerk - Social login with secure session management and user metadata"
        },
        results: {
          quantitative: [
            "Technical Titan Award at Viet Tech Mentorship Program Demo Day (judges from Meta, Google, Airbnb)",
            "94% task success rate (industry average: 78%)",
            "89% daily active users during beta testing",
            "78% reduction in scheduling conflicts",
            "3.2x more shared photos/memories vs. previous tools"
          ],
          testimonials: [
            "Finally, an app that gets what long-distance couples actually need. We went from using 5 apps to just this one.",
            "The dashboard makes me feel like I'm part of his daily life again. I can see his weather and know when he's free without asking.",
            "We've created more shared memories in 2 months with 0-KM than we had in our previous 6 months long-distance."
          ]
        },
        learnings: {
          design: [
            "Emotional design requires different metrics - traditional UX metrics don't capture relationship satisfaction",
            "Context beats content in relationship apps - ambient awareness proved more valuable than chat features",
            "Privacy is personal AND relational - couples needed shared privacy settings and mutual consent"
          ],
          technical: [
            "Real-time architecture complexity - synchronizing multiple data streams across devices",
            "Cross-platform performance - balancing rich animations with battery life across iOS/Android",
            "Advanced state management - WebSocket optimization and offline-first architecture"
          ]
        }
      }
    },
    {
      title: "PastPort",
      year: "2024",
      summary: "Revolutionizing History Education with AI-powered conversations and immersive learning experiences. Built as both Product Designer and Full-Stack Engineer.",
      cover: pastport,
      tags: ["AI", "Education", "Mobile", "Flutter"],
      roles: ["Product Designer", "Full-Stack Engineer"],
      tools: ["Flutter", "Dart", "OpenAI API", "SQLite"],
      category: "fullstack",
      detailedInfo: {
        title: "PastPort - Revolutionizing History Education",
        subtitle: "Product Designer & Full-Stack Engineer",
        heroImage: pastport,
        heroQuote: "How I designed and built an AI-powered history learning app that increased student engagement by 25% in 8 weeks",
        pitchDeck: pastportPitchDeck,
        quickStats: {
          role: "Lead Product Designer & Full-Stack Engineer",
          timeline: "8 weeks (Oct-Dec 2024)",
          team: "5 members",
          impact: "25% increase in learning retention"
        },
        challenge: "Traditional history education lacks engagement - students find textbooks boring, content scattered, and learning passive.",
        vision: "Create an immersive mobile experience where students can talk to historical figures, explore interactive timelines, and learn through personalized storytelling.",
        roleDescription: "As both Product Designer and Full-Stack Engineer, I led end-to-end product strategy and UX design, built the complete technical architecture, integrated AI conversational experiences, and shipped a working MVP in 8 weeks.",
        features: [
          {
            title: "Home & Discovery",
            description: "Trending topics for immediate engagement, time period cards with rich visuals, geographic exploration options, and personalized recommendations.",
            image: pastportDashboard
          },
          {
            title: "Interactive Timelines",
            description: "Visual timeline with key events, rich media integration (images, maps), contextual information layers, and cross-period connections.",
            image: pastportSet
          },
          {
            title: "AI Historical Conversations",
            description: "Character selection with rich context, chat interface optimized for learning, response suggestions to guide conversations, and visual character representations.",
            image: pastportChat
          },
          {
            title: "Personal Learning Hub",
            description: "Integrated note-taking during chats, searchable knowledge repository, progress visualization, and achievement system.",
            image: pastportSave
          },
          {
            title: "Talk to Historical Figures",
            description: "Engage in meaningful conversations with AI-powered historical figures, learning through interactive dialogue and storytelling.",
            image: pastportTalk
          }
        ],
        techStack: {
          frontend: "Flutter (Dart) - Cross-platform native performance",
          backend: "Custom API with SQLite database",
          ai: "OpenAI GPT-3.5 with custom prompt engineering",
          architecture: "Clean architecture with repository pattern"
        },
        results: {
          quantitative: [
            "25% increase in learning retention (compared to traditional methods)",
            "8 weeks from concept to working MVP",
            "90% user satisfaction in initial testing",
            "15+ historical figures successfully implemented"
          ],
          feedback: "Finally, history doesn't feel like memorizing dates. I actually had a conversation with Gandhi! - Sarah, Beta Tester"
        },
        learnings: {
          design: [
            "Conversational UI creates deeper emotional connections than traditional content",
            "Progressive disclosure prevents overwhelming users with too much historical info",
            "Dark themes enhance immersive storytelling experiences"
          ],
          technical: [
            "AI Integration: Learned prompt engineering for educational contexts",
            "Cross-Platform Development: Mastered Flutter for rapid prototyping",
            "End-to-End Ownership: Experience building from design concept to deployed product"
          ]
        }
      }
    },
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
                onClick={() => {
                  if (project.title === "PastPort") {
                    navigate('/project/pastport', { state: { project } });
                  } else if (project.title === "0-KM") {
                    navigate('/project/0km', { state: { project } });
                  } else {
                    console.log(`Clicked on ${project.title}`);
                  }
                }}
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
