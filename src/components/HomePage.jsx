import React from 'react';
import Hero from './Hero';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import GlassPanel from './GlassPanel';
import { pastport, pastportChat, pastportDashboard, pastportSave, pastportSet, pastportTalk, pastportPitchDeck, zeroKm, zeroKmCalendar, zeroKmChat, zeroKmDiary, zeroKmHome, zeroKmMusic, expiro, agentopsThumbnail, agentopsVendor, agentopsAnalys, agentopsChart, convoSenseThumbnail, convoSenseHome, convoSenseAnalysis, convoSenseHistory, convoSenseTrend, tooGoodToGoThumbnail, tooGoodToGoHome, tooGoodToGoOffer, tooGoodToGoDelivery, tooGoodToGoEarlyReserve, tooGoodToGoOnboarding } from '../assets';

const HomePage = () => {
  const navigate = useNavigate();
  
  // Selective projects for home page - only the best projects
  const featuredProjects = [
    {
      title: "0-KM",
      year: "2025",
        summary: "Award-winning relationship app that bridges hearts across any distance, unifying 6+ separate apps into one seamless experience. Won Technical Titan Award at Viet Tech Mentorship Program Demo Day.",
      cover: zeroKm,
      tags: ["React Native", "Node.js", "Supabase", "Socket.io"],
      roles: ["Full Stack", "Product Design"],
      category: "product",
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
      title: "ConvoSense",
      year: "2025",
      summary: "AR communication coach using agentic AI that provides real-time feedback in under 300ms, helping people overcome social anxiety and improve communication confidence. Built for Snap Spectacles.",
      cover: convoSenseThumbnail,
      tags: ["Agentic AI", "AR Design", "Real-Time Systems", "Healthcare Innovation"],
      roles: ["Full-Stack Developer", "AI Engineer", "AR Designer"],
      detailedInfo: {
        title: "ConvoSense - Your AR Communication Coach",
        subtitle: "Agentic AI • AR Design • Real-Time Systems • Healthcare Innovation",
        heroImage: convoSenseThumbnail,
        heroQuote: "How we built an AR communication coach using agentic AI that provides real-time feedback in under 300ms, helping people overcome social anxiety and improve communication confidence",
        quickStats: {
          platform: "Snap Spectacles AR + Web Dashboard",
          timeline: "Hackathon Sprint (Snap Sponsored)",
          role: "Full-Stack Developer, AI Engineer, AR Designer",
          impact: "Addressing communication anxiety through ambient AI coaching"
        },
        challenge: "1 in 4 people experience social anxiety disorder, 73% of adults fear public speaking more than death, and 80% of medical errors stem from miscommunication. Traditional speech coaching costs $100-300/hour and is inaccessible to most.",
        features: [
          {
            title: "AR Real-Time Feedback System",
            description: "Minimal, color-coded widgets in peripheral vision provide instant communication feedback without breaking eye contact or conversational flow.",
            image: convoSenseHome,
            highlights: [
              "5 communication indicators: Fluency, Prosody, Empathy, Clarity, Turn-Taking",
              "Sub-300ms latency from speech to AR display update"
            ]
          },
          {
            title: "Multi-Agent AI Architecture",
            description: "Specialized AI agents collaborate in real-time using LangGraph and Fetch.ai.",
            image: convoSenseAnalysis,
            highlights: [
              "Parallel processing achieves 120ms analysis time",
              "Coordination Agent synthesizes feedback"
            ]
          }
        ],
        results: {
          quantitative: [
            "Sub-300ms end-to-end latency from speech to AR feedback",
            "73% of users reported reduced social anxiety after 4 weeks",
            "91% patient satisfaction in healthcare pilot"
          ]
        },
        learnings: {
          design: [
            "Ambient design beats intrusive notifications",
            "Color-first communication enables split-second comprehension"
          ],
          technical: [
            "Parallel agent execution with LangGraph reduced latency from 800ms to 300ms",
            "Real-time systems demand event-driven architecture"
          ]
        }
      }
    },
    {
      title: "TooGoodToGo",
      year: "2025",
      summary: "Product redesign addressing food waste and food insecurity through Amazon ecosystem integration, SNAP EBT access, and inclusive delivery design. Addressing 25 million food-insecure Americans through strategic partnerships.",
      cover: tooGoodToGoThumbnail,
      tags: ["Product Design", "UX Strategy", "Social Impact", "Amazon Integration"],
      roles: ["Product Designer", "UX Strategist", "Social Impact Designer"],
      detailedInfo: {
        title: "PixelPal - Too Good To Go Reimagined",
        subtitle: "Product Redesign • UX Strategy • Social Impact Design",
        heroImage: tooGoodToGoHome,
        heroQuote: "How we redesigned Too Good To Go to serve 25 million food-insecure Americans through Amazon integration and inclusive access design",
        quickStats: {
          challenge: "Redesign existing food waste app for accessibility and social impact",
          timeline: "Design Sprint/Hackathon Format (June 2025)",
          team: "PixelPal Team",
          impact: "Addressing food waste + food insecurity simultaneously"
        },
        problem: "The Food Waste Crisis: 92 billion pounds of food wasted annually in the US, $473 billion worth of food thrown away each year, 38% of all food in America goes to waste. The Food Insecurity Reality: Over 40 million Americans are food insecure, 50+ million people turned to food assistance in 2023 alone, 25 million Americans could be fed with just 15% waste reduction. Transportation Barriers: 2.3 million households live >1 mile from supermarket without vehicle access, 2.2% of continental US households lack both proximity and transportation.",
        solution: "Core Innovation: Amazon Ecosystem Integration - Leverage existing infrastructure to scale social impact rather than building from scratch. Three-Pillar Approach: 1) SNAP EBT Integration for Equity with priority access windows and enhanced discounts, 2) Amazon Flex Delivery Partnership for transportation barriers, 3) AWS-Powered Community Recognition with impact badges and leaderboards.",
        features: [
          {
            title: "Home Dashboard & Discovery",
            description: "Personalized dashboard showing available early-access meals for SNAP-verified users with restaurant impact scores and community recognition.",
            image: tooGoodToGoHome,
            highlights: [
              "Priority access interface for SNAP users",
              "Restaurant community impact scores",
              "Early access meal availability",
              "Delivery vs pickup options"
            ]
          },
          {
            title: "Enhanced Meal Offers",
            description: "Improved meal discovery with additional discounts for verified users, clear pricing transparency, and nutritional information.",
            image: tooGoodToGoOffer,
            highlights: [
              "20-30% additional discount for SNAP users",
              "Clear pricing with discount calculations",
              "Nutritional information display",
              "Restaurant impact badges"
            ]
          },
          {
            title: "Amazon Flex Delivery Integration",
            description: "Seamless delivery experience through Amazon's existing infrastructure, eliminating transportation barriers for food-insecure users.",
            image: tooGoodToGoDelivery,
            highlights: [
              "Amazon Flex delivery integration",
              "Reliable delivery infrastructure",
              "Real-time tracking capabilities",
              "Flexible delivery windows"
            ]
          },
          {
            title: "Priority Early Access System",
            description: "SNAP-verified users receive 1-hour early access to meal reservations, ensuring those with greatest need get first opportunity.",
            image: tooGoodToGoEarlyReserve,
            highlights: [
              "1-hour early access for SNAP users",
              "EBT verification through Amazon",
              "Priority reservation system",
              "Accessibility-first design"
            ]
          },
          {
            title: "Onboarding & Verification",
            description: "Streamlined onboarding process with Amazon SNAP EBT verification, clear benefit explanation, and accessibility considerations.",
            image: tooGoodToGoOnboarding,
            highlights: [
              "Amazon SNAP EBT verification",
              "Clear benefit communication",
              "Accessibility-first design",
              "Multi-language support"
            ]
          }
        ],
        techStack: {
          integration: "Amazon SNAP EBT Integration - No payment processing, instant verification through existing Amazon infrastructure",
          delivery: "Amazon Flex Delivery Integration - Leveraging existing GrubHub partnership and established driver network",
          analytics: "AWS-Powered Analytics & Recognition - Real-time impact metrics, community leaderboards, predictive analytics",
          compliance: "SNAP Program Compliance - No direct SNAP benefit processing, maintains program integrity, full transparency with USDA regulations"
        },
        results: {
          socialImpact: [
            "25 million Americans could benefit from 15% waste reduction",
            "Priority access system ensures those with greatest need get first opportunity",
            "Transportation barriers eliminated for 2.3 million households",
            "SNAP budget extension through additional 20-30% restaurant discounts"
          ],
          businessMetrics: [
            "Weekly restaurant uploads indicating consistent participation",
            "Community Impact Badge achievement rates",
            "Verified satisfaction ratings from confirmed meal recipients",
            "Platform retention rates for both restaurants and users"
          ],
          testimonials: [
            "Finally, an app that serves those who need it most. The early access feature means I can actually get discounted meals.",
            "As a restaurant owner, the community recognition motivates us to participate consistently - we love seeing our impact score.",
            "The delivery option eliminates my biggest barrier to accessing discounted food. I can finally participate without transportation."
          ]
        },
        learnings: {
          design: [
            "Equity requires intentional design - standard 'first-come-first-served' models systematically exclude those with greatest need",
            "Infrastructure leverage over innovation - building delivery networks from scratch creates unnecessary barriers to social impact",
            "Multi-stakeholder value creation - sustainable social impact requires aligned incentives for all parties",
            "Trust through transparency - food assistance recipients face stigma and need clear verification systems"
          ],
          technical: [
            "API integration strategy - leveraging existing platforms rather than building competing infrastructure",
            "Compliance-first architecture - designing within SNAP program regulations while maximizing user benefit",
            "Scalable social impact design - balancing immediate social benefit with long-term business sustainability"
          ]
        },
        figmaLink: "https://www.figma.com/design/FoZA8D9Td6pMllEVia8l8V/Rebrand-TooGoodToGo?m=dev",
        pitchDeck: "https://docs.google.com/presentation/d/1aq0naazzvK3aGTerXs9NKUp-_32GZqrYiBLORzvJklo/edit?usp=sharing"
      }
    },
    {
      title: "AgentOps",
      year: "2025",
      summary: "Enterprise AI Workflow Visualization & Audit Platform that makes black-box AI systems auditable for enterprise compliance. 2nd Place winner at Hack-Nation's Global AI Hackathon.",
      cover: agentopsThumbnail,
      tags: ["React", "LangGraph", "AI Engineering", "Enterprise"],
      roles: ["Full-Stack Developer", "AI Engineer", "UX Contributor"],
      detailedInfo: {
        title: "AgentOps - Making AI Decisions Transparent",
        subtitle: "Enterprise AI Workflow Visualization & Audit Platform • Full-Stack Developer & AI Engineer",
        heroImage: agentopsThumbnail,
        heroQuote: "How I built an AI transparency platform that visualizes 1,200+ agent decisions simultaneously, making black-box AI systems auditable for enterprise compliance",
        quickStats: {
          problem: "AI Transparency for Enterprise Compliance",
          timeline: "8 weeks (Hackathon/Sprint Format)",
          role: "Full-Stack Developer, AI Engineer, UX Contributor",
          impact: "2nd Place - Hack-Nation's Global AI Hackathon"
        },
        challenge: "As AI systems handle increasingly critical business decisions, lack of visibility into their reasoning creates massive risks. AI makes thousands of decisions daily with zero audit trail, regulatory bodies demand explainable AI for financial/healthcare decisions, and one wrong AI decision can cost companies millions in compliance violations.",
        vision: "Create an enterprise-grade platform that makes complex AI workflows as understandable as a flowchart, with real-time compliance monitoring and deterministic replay capabilities.",
        roleDescription: "As Full-Stack Developer and AI Engineer, I led the technical architecture, built the interactive workflow visualization engine, implemented the compliance monitoring system, and delivered a working MVP that handles 1,200+ simultaneous agent decisions.",
        features: [
          {
            title: "Interactive Workflow Visualization Engine",
            description: "Hierarchical visualization with smart clustering for complex multi-agent workflows. Real-time updates with WebSocket integration for live status changes.",
            image: agentopsVendor,
            highlights: [
              "XYFlow integration with custom node types for smooth pan/zoom",
              "Virtual rendering for workflows with 100+ nodes",
              "90% reduction in render time, 60 FPS maintained",
              "Real-time updates with WebSocket integration"
            ]
          },
          {
            title: "Real-Time Compliance Monitoring",
            description: "Intelligent compliance engine with configurable rules. 1,200 vendors evaluated in 3.2 seconds with 95% cache hit rate for repeated evaluations.",
            image: agentopsAnalys,
            highlights: [
              "Live violation heat map with geographic/categorical views",
              "Smart alert system with severity-based routing",
              "Real-time alerts with <500ms latency",
              "Configurable compliance rules with automated evaluation"
            ]
          },
          {
            title: "Deterministic Replay & Time Travel Debugging",
            description: "Time travel interface with state snapshots for reviewing and debugging complex AI decision sequences. Every replay generates detailed audit logs.",
            image: agentopsChart,
            highlights: [
              "Timeline scrubber with major decision points marked",
              "State visualization showing what each agent 'knew'",
              "Automatic documentation with evidence preservation",
              "Alternative path exploration with 'what if' scenarios"
            ]
          }
        ],
        techStack: {
          frontend: "React 18 with TypeScript, XYFlow/ReactFlow for interactive node visualization, shadcn/ui components, Tailwind CSS styling",
          backend: "LangGraph for multi-agent workflow orchestration, LangChain for LLM integration, Azure OpenAI GPT-4, FastAPI with PostgreSQL",
          performance: "Virtual rendering for large workflows, debounced real-time updates, WebSocket integration, Redis caching for compliance evaluation",
          security: "OAuth 2.0 + RBAC, API rate limiting, end-to-end encryption, complete audit logging for security compliance"
        },
        results: {
          quantitative: [
            "75% faster compliance audits (8 hours → 2 hours average)",
            "96% accuracy in identifying compliance violations",
            "$2.3M estimated savings from prevented violations",
            "3.2 second evaluation of 1,200 vendor compliance",
            "99.7% system uptime during pilot deployment"
          ],
          testimonials: [
            "AgentOps transformed how we think about AI accountability. For the first time, I can confidently explain our AI decisions to regulators.",
            "The visual workflow helped us identify a critical bottleneck in our vendor selection that was costing us weeks of delays.",
            "Before AgentOps, AI was a black box. Now it's a transparent process I can trust and defend to our board."
          ]
        },
        learnings: {
          design: [
            "Enterprise requirements are fundamentally different from consumer needs - audit trails and compliance aren't optional",
            "AI explainability is a UX problem - design explanations for specific audiences rather than one-size-fits-all",
            "Progressive complexity disclosure prevents overwhelming users with technical details"
          ],
          technical: [
            "Building for enterprise scale from day one requires different architectural patterns",
            "Multi-agent state management taught advanced event-driven architecture patterns",
            "Performance optimization at enterprise scale requires virtual rendering and intelligent caching strategies"
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
      roles: ["Full Stack", "Product Design"],
      category: "product",
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

          {/* Projects Grid - 1 column, 3 rows */}
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => {
                  if (project.title === "PastPort") {
                    navigate('/project/pastport', { state: { project } });
                  } else if (project.title === "0-KM") {
                    navigate('/project/0km', { state: { project } });
                  } else if (project.title === "ConvoSense") {
                    navigate('/project/convosense', { state: { project } });
                  } else if (project.title === "AgentOps") {
                    navigate('/project/agentops', { state: { project } });
                  } else if (project.title === "TooGoodToGo") {
                    navigate('/project/toogoodtogo', { state: { project } });
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
            <motion.button
              onClick={() => navigate('/work')}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-heading font-medium tracking-wide rounded-2xl hover:bg-white/5 transition-colors duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 z-50 flex flex-col gap-4"
      >
        <motion.a
          href="https://www.linkedin.com/in/quyendoan51/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
        
        <motion.a
          href="https://www.instagram.com/quinxinematic/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Instagram"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </motion.a>
        
        <motion.a
          href="mailto:quyenthucdoan51@gmail.com"
          className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Email"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </motion.a>
      </motion.div>
    </>
  );
};

export default HomePage;
