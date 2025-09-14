import React from 'react';
import Hero from './Hero';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import GlassPanel from './GlassPanel';
import { pastport, pastportChat, pastportDashboard, pastportSave, pastportSet, pastportTalk, pastportPitchDeck, zeroKm, zeroKmCalendar, zeroKmChat, zeroKmDiary, zeroKmHome, zeroKmMusic } from '../assets';

const HomePage = () => {
  const navigate = useNavigate();
  
  // Selective projects for home page - only the best 3-4 projects
  const featuredProjects = [
    {
      title: "0-KM",
      year: "2025",
        summary: "Award-winning relationship app that bridges hearts across any distance, unifying 6+ separate apps into one seamless experience. Won Technical Titan Award at Viet Tech Mentorship Program Demo Day.",
      cover: zeroKm,
      tags: ["React Native", "Node.js", "Supabase", "Socket.io"],
      roles: ["Full-Stack Developer", "Product Designer", "UX Researcher"],
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
      tools: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "AI Chat Application",
      year: "2024",
      summary: "An intelligent chat application powered by OpenAI's GPT model. Built with real-time messaging, conversation history, and smart responses.",
      cover: "/src/assets/chat.png",
      tags: ["AI", "Real-time", "Chat"],
      roles: ["Backend Developer", "AI Integration"],
      tools: ["Python", "OpenAI API", "WebSocket", "React", "FastAPI"]
    },
    {
      title: "Portfolio Website",
      year: "2024",
      summary: "A minimalist portfolio website showcasing creative work and professional experience. Built with modern web technologies and smooth animations.",
      cover: "/src/assets/creator.png",
      tags: ["Portfolio", "Creative", "Modern"],
      roles: ["Frontend Developer", "Designer"],
      tools: ["React", "Framer Motion", "Tailwind CSS", "Three.js"]
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Featured Projects Section */}
      <section id="featured-work" className="py-32 bg-black relative">
        <div className="max-w-8xl mx-auto px-6">
          {/* Section Header */}
          <SectionHeader
            title="Featured Work"
            subtitle="Selected Projects"
            align="center"
            className="mb-20"
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
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
              href="/work"
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
        </div>
      </section>
    </>
  );
};

export default HomePage;
