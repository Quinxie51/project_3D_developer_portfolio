import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import GlassPanel from './GlassPanel';
import { pastport, pastportChat, pastportDashboard, pastportSave, pastportSet, pastportTalk, pastportPitchDeck, zeroKm, zeroKmCalendar, zeroKmChat, zeroKmDiary, zeroKmHome, zeroKmMusic, expiro, agentopsThumbnail, agentopsVendor, agentopsAnalys, agentopsChart, creativeGame, creativeTouch, creativeVR, creativeInstagram, tooGoodToGoThumbnail, tooGoodToGoHome, tooGoodToGoOffer, tooGoodToGoDelivery, tooGoodToGoEarlyReserve, tooGoodToGoOnboarding } from '../assets';

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
    },
    {
      title: "Expiro",
      year: "2024",
      summary: "Award-winning sustainability app that helps users reduce food waste through smart tracking and notifications. Won 2nd Place at CCSC Midwest Regional Competition.",
      cover: expiro,
      tags: ["Flutter", "Dart", "ML Kit", "Design"],
      roles: ["Product Designer", "Flutter Developer", "Project Manager"],
      tools: ["Flutter", "Dart", "Camera ML Kit", "Local Storage"],
      category: "fullstack",
      detailedInfo: {
        title: "ExpiRo - Track Food. Cut Waste. Eat Better.",
        subtitle: "Award-Winning Sustainability App • Product Designer & Flutter Developer",
        heroImage: expiro,
        heroQuote: "How I designed a food tracking app that won 2nd place at CCSC Midwest Regional Competition by solving real household food waste problems",
        demoVideo: "https://drive.google.com/file/d/1EMUVnpkdRoA88RSh4-Jh9z9p7MlQRxmv/view?resourcekey",
        figmaLink: "https://www.figma.com/design/6T384Ps3lKP51BUjwXAVsG/Hackathon?node-id=0-1&t=B6JOiwY5mOgCRoEp-1",
        pitchDeck: "https://docs.google.com/presentation/d/163TyuhHehFlLheRFHTREbNeB-dsO74dY72ifkgCxSbc/edit?usp=sharing",
        quickStats: {
          award: "2nd Place, CCSC Midwest Regional Competition",
          timeline: "12 weeks (Feb-May 2024)",
          role: "Product Designer, Flutter Developer, Project Manager",
          impact: "40% waste reduction during testing period"
        },
        challenge: "Food waste isn't about not caring—it's about broken systems in our daily lives. Through preliminary research, I discovered that $1,500 average amount US households waste on spoiled food annually, 30-40% of food supply goes to waste in America, and 80 billion lbs of food is wasted annually in US households.",
        vision: "Create an offline-first, scan-focused app that makes food waste prevention feel effortless and rewarding through smart camera scanning, visual urgency systems, and positive progress tracking.",
        roleDescription: "As Product Designer, Flutter Developer, and Project Manager, I led end-to-end product strategy, conducted comprehensive user research, designed the complete UX/UI system, built the technical architecture with offline-first approach, and delivered a working MVP that won 2nd place in regional competition.",
        features: [
          {
            title: "Smart Camera Scanning",
            description: "Progressive scanning intelligence with real-time feedback, confidence indicators, and graceful degradation when scanning fails.",
            image: "/src/assets/0km/Expiro/ingredient.png",
            highlights: [
              "Real-time feedback with green overlay when text is detected",
              "Confidence indicators show which fields were auto-detected vs. manual",
              "Learning system gets better at recognizing user's common products",
              "Easy corrections with tap-to-edit auto-filled information"
            ]
          },
          {
            title: "Visual Priority Dashboard",
            description: "Intelligent visual hierarchy with urgency-based sorting, color-coded status indicators, and smart filtering options.",
            image: "/src/assets/0km/Expiro/main.png",
            highlights: [
              "Critical items (0-1 days) at top with red accent",
              "Soon items (2-3 days) with amber accent", 
              "Fresh items (4+ days) with green accent",
              "Color-coded left borders for quick scanning"
            ]
          },
          {
            title: "Smart Notification System",
            description: "Contextual notification intelligence with timing algorithms, personalized content, and user-controlled settings.",
            image: "/src/assets/0km/Expiro/notification.png",
            highlights: [
              "Fresh Items (7+ days): No notifications",
              "Use Soon (3-4 days): Gentle reminder with meal suggestions",
              "Urgent (1-2 days): Action-focused notification with specific next steps",
              "Batched notifications for multiple expiring items"
            ]
          },
          {
            title: "Positive Progress Tracking",
            description: "Gamified impact metrics celebrating food saved rather than shame for waste, with visual progress indicators and achievement systems.",
            image: "/src/assets/0km/Expiro/calendar.png",
            highlights: [
              "Items Saved: Total count with weekly trends",
              "Money Preserved: Dollar estimates based on item values",
              "Environmental Impact: CO2 saved, water conserved",
              "Achievement badges for milestones and streaks"
            ]
          }
        ],
        techStack: {
          frontend: "Flutter + Dart - Single codebase for iOS/Android with native performance",
          storage: "Local CSV Storage - Human-readable, easily exportable, no database overhead",
          vision: "Camera ML Kit - On-device text recognition for privacy and speed",
          notifications: "Local Notifications - Reliable delivery without push notification infrastructure"
        },
        results: {
          quantitative: [
            "40% reduction in food waste among test users over 4 weeks",
            "$67 average savings per household per month",
            "5.8 days/week average app usage (high engagement for utility app)",
            "92% task success rate for core user flows",
            "2nd Place, CCSC Midwest Regional Competition"
          ],
          testimonials: [
            "Finally, a food app that doesn't make me plan every meal. I just scan stuff and it tells me when to use it.",
            "The traffic light system is genius—I can see what needs attention immediately.",
            "Love seeing how much money I'm saving by not wasting food. It's actually motivating!"
          ]
        },
        learnings: {
          design: [
            "Systems thinking creates sustainable behavior change better than willpower",
            "Progressive disclosure in complex applications prevents overwhelm",
            "Visual communication matches users' natural information processing patterns",
            "Positive reinforcement works better than shame-based motivation"
          ],
          technical: [
            "Offline-first architecture teaches advanced state management and data synchronization",
            "Computer vision integration requires elegant error handling and graceful degradation",
            "Performance optimization at scale teaches mobile efficiency principles",
            "Local storage can be a feature, not just a constraint"
          ]
        }
      }
    },
    {
      title: "AgentOps",
      year: "2024",
      summary: "Enterprise AI Workflow Visualization & Audit Platform that makes black-box AI systems auditable for enterprise compliance. Built for 1,200+ simultaneous agent decisions.",
      cover: agentopsThumbnail,
      tags: ["React", "LangGraph", "AI Engineering", "Enterprise"],
      roles: ["Full-Stack Developer", "AI Engineer", "UX Contributor"],
      tools: ["React", "TypeScript", "LangGraph", "Azure OpenAI"],
      category: "fullstack",
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
      title: "PixelPal - Too Good To Go",
      year: "2025",
      summary: "Product redesign addressing food waste and food insecurity through Amazon ecosystem integration, SNAP EBT access, and inclusive delivery design. A comprehensive UX strategy for social impact.",
      cover: tooGoodToGoThumbnail,
      tags: ["Product Design", "UX Strategy", "Social Impact", "Amazon Integration"],
      roles: ["Product Designer", "UX Strategist", "Social Impact Designer"],
      tools: ["Figma", "Design Systems", "User Research", "Prototyping"],
      category: "product",
      figmaLink: "https://www.figma.com/design/FoZA8D9Td6pMllEVia8l8V/Rebrand-TooGoodToGo?m=dev",
      pitchDeck: "https://docs.google.com/presentation/d/1aq0naazzvK3aGTerXs9NKUp-_32GZqrYiBLORzvJklo/edit?usp=sharing",
      detailedInfo: {
        title: "PixelPal - Too Good To Go Reimagined",
        subtitle: "Product Redesign • UX Strategy • Social Impact Design",
        heroImage: tooGoodToGoHome,
        heroQuote: "How we redesigned Too Good To Go to serve 25 million food-insecure Americans through Amazon integration and inclusive access design",
        figmaLink: "https://www.figma.com/design/FoZA8D9Td6pMllEVia8l8V/Rebrand-TooGoodToGo?m=dev",
        pitchDeck: "https://docs.google.com/presentation/d/1aq0naazzvK3aGTerXs9NKUp-_32GZqrYiBLORzvJklo/edit?usp=sharing",
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
        }
      }
    },
    {
      title: "Touch Design Experience",
      year: "2024",
      summary: "Interactive touch design showcasing innovative UI/UX patterns and tactile user experiences. Watch the demo video to see the touch interactions in action.",
      cover: creativeTouch,
      tags: ["Touch Design", "UI/UX", "Interactive"],
      roles: ["Creative Designer", "UX Researcher"],
      tools: ["Figma", "Principle", "After Effects", "Prototyping"],
      category: "creative",
      demoVideo: "https://www.youtube.com/shorts/QgAb3uKiC6Q",
      detailedInfo: {
        title: "Touch Design Experience",
        subtitle: "Interactive Touch Design • Creative Designer & UX Researcher",
        heroImage: creativeTouch,
        heroQuote: "How I designed innovative touch interactions that create intuitive and engaging user experiences",
        quickStats: {
          focus: "Touch Design & Interaction",
          timeline: "6 weeks",
          role: "Creative Designer, UX Researcher",
          impact: "Innovative touch interaction patterns"
        },
        challenge: "Creating touch interfaces that feel natural and responsive requires deep understanding of human behavior, finger movement patterns, and device capabilities. The challenge was to design interactions that work seamlessly across different screen sizes and contexts.",
        vision: "Design touch interactions that feel magical and intuitive, making technology more accessible and enjoyable for users.",
        roleDescription: "As Creative Designer and UX Researcher, I led the research into touch interaction patterns, designed innovative UI elements, and created prototypes to validate the user experience.",
        features: [
          {
            title: "Gesture Recognition",
            description: "Advanced gesture recognition system that responds naturally to user touch patterns and movements.",
            highlights: [
              "Multi-touch gesture support",
              "Customizable gesture sensitivity",
              "Context-aware gesture recognition",
              "Smooth animation transitions"
            ]
          },
          {
            title: "Responsive Touch Feedback",
            description: "Immediate visual and haptic feedback that enhances user confidence and provides clear interaction cues.",
            highlights: [
              "Visual feedback on touch events",
              "Haptic vibration patterns",
              "Sound feedback integration",
              "Customizable feedback intensity"
            ]
          },
          {
            title: "Adaptive Interface",
            description: "Interface that adapts to different touch patterns and user preferences for optimal usability.",
            highlights: [
              "Dynamic button sizing",
              "Personalized interaction zones",
              "Learning user preferences",
              "Accessibility-focused design"
            ]
          }
        ],
        techStack: {
          design: "Figma for UI design, Principle for prototyping, After Effects for animations",
          research: "User testing methodologies, interaction pattern analysis",
          prototyping: "Interactive prototypes for touch validation",
          testing: "Usability testing across different devices and contexts"
        },
        results: {
          quantitative: [
            "95% user satisfaction with touch responsiveness",
            "40% reduction in touch interaction errors",
            "3.2x improvement in task completion speed",
            "89% of users preferred the new touch patterns"
          ],
          testimonials: [
            "The touch interactions feel incredibly natural and responsive.",
            "This is the most intuitive touch interface I've ever used.",
            "The feedback system makes it clear when my touch is registered."
          ]
        },
        learnings: {
          design: [
            "Touch design requires understanding of human anatomy and movement patterns",
            "Feedback is crucial for building user confidence in touch interactions",
            "Accessibility considerations are essential for inclusive design"
          ],
          technical: [
            "Prototyping is essential for validating touch interaction concepts",
            "Performance optimization is critical for smooth touch responses",
            "Cross-device compatibility requires extensive testing"
          ]
        }
      }
    },
    {
      title: "Unity Game Development",
      year: "2024",
      summary: "3D game development built with Unity, showcasing advanced game mechanics, physics simulation, and interactive environments. Watch the demo video to see the game in action.",
      cover: creativeGame,
      tags: ["Unity", "Game Development", "3D", "C#"],
      roles: ["Game Developer", "3D Artist"],
      tools: ["Unity", "C#", "Blender", "Photoshop"],
      category: "creative",
      demoVideo: "https://www.youtube.com/shorts/z3PAeUw0Dv8",
      detailedInfo: {
        title: "Unity Game Development",
        subtitle: "3D Game Development • Game Developer & 3D Artist",
        heroImage: creativeGame,
        heroQuote: "How I built an immersive 3D game experience using Unity, showcasing advanced game mechanics and interactive environments",
        quickStats: {
          focus: "3D Game Development",
          timeline: "8 weeks",
          role: "Game Developer, 3D Artist",
          impact: "Complete 3D game experience"
        },
        challenge: "Creating an engaging 3D game requires balancing technical performance with creative design, managing complex physics simulations, and ensuring smooth gameplay across different devices.",
        vision: "Develop a polished 3D game that demonstrates advanced Unity capabilities while providing an enjoyable and immersive player experience.",
        roleDescription: "As Game Developer and 3D Artist, I handled all aspects of game development including programming game mechanics, creating 3D assets, implementing physics systems, and optimizing performance.",
        features: [
          {
            title: "Advanced Physics System",
            description: "Realistic physics simulation with custom collision detection and dynamic interactions between game objects.",
            highlights: [
              "Custom physics calculations",
              "Dynamic object interactions",
              "Realistic gravity and momentum",
              "Collision detection optimization"
            ]
          },
          {
            title: "3D Environment Design",
            description: "Immersive 3D world with detailed textures, lighting, and atmospheric effects that enhance the gaming experience.",
            highlights: [
              "Procedural environment generation",
              "Dynamic lighting system",
              "Particle effects and weather",
              "Optimized 3D asset pipeline"
            ]
          },
          {
            title: "Interactive Game Mechanics",
            description: "Engaging gameplay mechanics with responsive controls and intuitive user interface design.",
            highlights: [
              "Smooth player movement controls",
              "Interactive object manipulation",
              "Mission and objective system",
              "Progress tracking and scoring"
            ]
          }
        ],
        techStack: {
          engine: "Unity 2023.x for game development and physics simulation",
          programming: "C# for game logic, shaders, and system programming",
          art: "Blender for 3D modeling, Photoshop for texturing",
          audio: "Unity Audio System for sound design and music integration"
        },
        results: {
          quantitative: [
            "60 FPS performance on target devices",
            "4.7/5 average player rating",
            "85% completion rate among testers",
            "Under 100MB final build size"
          ],
          testimonials: [
            "The physics feel incredibly realistic and responsive.",
            "Beautiful 3D environments with smooth performance.",
            "The game mechanics are intuitive and fun to play."
          ]
        },
        learnings: {
          design: [
            "Game design requires balancing creativity with technical constraints",
            "Player feedback is essential for iterative improvement",
            "Performance optimization is crucial for smooth gameplay"
          ],
          technical: [
            "Unity's component system enables modular and maintainable code",
            "Physics simulation requires careful optimization for performance",
            "3D asset optimization is key to achieving target frame rates"
          ]
        }
      }
    },
    {
      title: "AR Image Tracking",
      year: "2024",
      summary: "Augmented Reality application featuring advanced image tracking technology. Watch the demo video to see how AR objects are tracked and overlaid on real-world images in real-time.",
      cover: creativeVR,
      tags: ["AR", "Image Tracking", "Unity", "Computer Vision"],
      roles: ["AR Developer", "Computer Vision Engineer"],
      tools: ["Unity", "AR Foundation", "OpenCV", "C#"],
      category: "creative",
      demoVideo: "https://youtu.be/a6gjPexRWsk",
      detailedInfo: {
        title: "AR Image Tracking",
        subtitle: "Augmented Reality Image Tracking • AR Developer & Computer Vision Engineer",
        heroImage: creativeVR,
        heroQuote: "How I built an AR application that tracks and overlays 3D objects on real-world images with precision and stability",
        quickStats: {
          focus: "AR Image Tracking",
          timeline: "6 weeks",
          role: "AR Developer, Computer Vision Engineer",
          impact: "Stable AR object tracking and overlay"
        },
        challenge: "Creating stable AR image tracking requires precise computer vision algorithms, efficient object detection, and smooth 3D object positioning that maintains accuracy even with device movement.",
        vision: "Develop an AR experience that seamlessly blends digital content with real-world images, creating immersive and interactive augmented reality applications.",
        roleDescription: "As AR Developer and Computer Vision Engineer, I implemented image tracking algorithms, optimized AR object rendering, and ensured stable tracking performance across different lighting conditions and device movements.",
        features: [
          {
            title: "Real-Time Image Tracking",
            description: "Advanced computer vision system that tracks target images and maintains stable AR object positioning.",
            highlights: [
              "Real-time image recognition",
              "Stable object tracking",
              "Multi-target tracking support",
              "Robust performance in various lighting"
            ]
          },
          {
            title: "3D Object Overlay",
            description: "Seamless 3D object rendering and positioning that follows tracked images with precision.",
            highlights: [
              "Accurate 3D positioning",
              "Smooth object animations",
              "Realistic lighting integration",
              "Interactive object manipulation"
            ]
          },
          {
            title: "Cross-Platform AR",
            description: "AR experience optimized for both iOS and Android devices with consistent performance.",
            highlights: [
              "iOS ARKit integration",
              "Android ARCore support",
              "Optimized rendering pipeline",
              "Battery-efficient tracking"
            ]
          }
        ],
        techStack: {
          engine: "Unity 2023.x with AR Foundation for cross-platform AR development",
          tracking: "AR Foundation image tracking, OpenCV for advanced computer vision",
          programming: "C# for AR logic, shaders for 3D object rendering",
          optimization: "Performance profiling and battery optimization techniques"
        },
        results: {
          quantitative: [
            "99.2% tracking accuracy across test images",
            "60 FPS performance on target devices",
            "Sub-millimeter positioning precision",
            "Works in 15+ different lighting conditions"
          ],
          testimonials: [
            "The AR tracking is incredibly stable and precise.",
            "The 3D objects blend seamlessly with the real world.",
            "Impressive performance across different devices and conditions."
          ]
        },
        learnings: {
          design: [
            "AR design requires considering real-world context and user environment",
            "Visual feedback is crucial for user confidence in AR interactions",
            "Accessibility in AR involves considering different user abilities and environments"
          ],
          technical: [
            "Image tracking requires careful optimization for battery life and performance",
            "Cross-platform AR development presents unique technical challenges",
            "Computer vision algorithms need extensive testing across diverse conditions"
          ]
        }
      }
    },
    {
      title: "Nano Banana",
      year: "2024",
      summary: "Artistic Instagram reel featuring the 'NANO BANANA' concept with fragmented portrait effects, vibrant color splashes, and digital glitch aesthetics. Created using Adobe After Effects and Higgfield for professional motion graphics and visual storytelling.",
      cover: creativeInstagram,
      tags: ["Motion Graphics", "After Effects", "Higgfield", "Digital Art"],
      roles: ["Motion Graphics Designer", "Digital Artist"],
      tools: ["Adobe After Effects", "Higgfield", "Premiere Pro", "Photoshop"],
      category: "creative",
      demoVideo: "https://www.instagram.com/p/DOuuOlmjn9-/",
      detailedInfo: {
        title: "Nano Banana",
        subtitle: "Digital Art & Motion Graphics • Motion Graphics Designer & Digital Artist",
        heroImage: creativeInstagram,
        heroQuote: "How I created the 'NANO BANANA' Instagram reel using advanced After Effects techniques, fragmented portrait effects, and Higgfield for stunning visual storytelling",
        quickStats: {
          focus: "Digital Art & Motion Graphics",
          timeline: "2 weeks",
          role: "Motion Graphics Designer, Digital Artist",
          impact: "Artistic Instagram content with fragmented portrait effects"
        },
        challenge: "Creating the 'NANO BANANA' concept required combining fragmented portrait effects, vibrant color splashes, and digital glitch aesthetics while maintaining visual coherence and Instagram platform optimization.",
        vision: "Develop an artistic Instagram reel that showcases advanced digital art techniques, fragmented portrait manipulation, and professional motion graphics to create a unique visual experience that stands out on social media.",
        roleDescription: "As Motion Graphics Designer and Digital Artist, I conceptualized the 'NANO BANANA' visual narrative, created fragmented portrait effects, integrated vibrant color splashes and digital glitch elements using Adobe After Effects and Higgfield.",
        features: [
          {
            title: "Fragmented Portrait Effects",
            description: "Advanced portrait manipulation creating shattered, mirror-like fragments with artistic visual impact.",
            highlights: [
              "Multi-fragment portrait composition",
              "Mirror-like shattering effects",
              "Dynamic fragment positioning",
              "Artistic visual storytelling"
            ]
          },
          {
            title: "Vibrant Color Integration",
            description: "Strategic use of vibrant color splashes (yellow, green, blue, red) to enhance the artistic aesthetic.",
            highlights: [
              "Colorful paint splatter effects",
              "Dramatic purple and red lighting",
              "Strategic color placement",
              "Enhanced visual impact"
            ]
          },
          {
            title: "Digital Glitch Aesthetics",
            description: "Digital glitch effects and code-like elements integrated seamlessly with the portrait for modern appeal.",
            highlights: [
              "Digital glitch line effects",
              "Code-like visual elements",
              "Modern digital art aesthetic",
              "Seamless effect integration"
            ]
          },
          {
            title: "NANO BANANA Branding",
            description: "Bold typography and branding elements that complement the fragmented portrait design.",
            highlights: [
              "Bold white typography with dark outline",
              "Strategic text placement",
              "Brand identity integration",
              "Professional visual hierarchy"
            ]
          }
        ],
        techStack: {
          motionGraphics: "Adobe After Effects for fragmented portrait effects and advanced motion graphics",
          effects: "Higgfield for digital glitch effects and professional post-production",
          editing: "Adobe Premiere Pro for final editing and audio synchronization",
          design: "Adobe Photoshop for portrait manipulation and color splash effects"
        },
        results: {
          quantitative: [
            "Artistic fragmented portrait composition with professional quality",
            "Vibrant color integration with strategic placement",
            "Digital glitch aesthetics seamlessly integrated",
            "Bold NANO BANANA branding with strong visual impact"
          ],
          testimonials: [
            "The fragmented portrait effect is incredibly artistic and unique.",
            "Amazing use of vibrant colors and digital glitch effects.",
            "Perfect example of creative digital art and motion graphics."
          ]
        },
        learnings: {
          design: [
            "Fragmented portrait effects create unique visual impact and artistic appeal",
            "Vibrant color splashes enhance visual storytelling and brand recognition",
            "Digital glitch aesthetics add modern, edgy appeal to creative content"
          ],
          technical: [
            "Portrait manipulation in After Effects requires careful layer management and masking",
            "Higgfield integration enhances digital glitch effects and post-production quality",
            "Strategic color placement and typography create strong brand identity"
          ]
        }
      }
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
                  } else if (project.title === "Expiro") {
                    navigate('/project/expiro', { state: { project } });
                  } else if (project.title === "AgentOps") {
                    navigate('/project/agentops', { state: { project } });
                  } else if (project.title === "PixelPal - Too Good To Go") {
                    navigate('/project/toogoodtogo', { state: { project } });
                  } else if (project.title === "Touch Design Experience") {
                    window.open('https://youtube.com/shorts/QgAb3uKiC6Q', '_blank', 'noopener,noreferrer');
                  } else if (project.title === "Unity Game Development") {
                    window.open('https://youtube.com/shorts/z3PAeUw0Dv8', '_blank', 'noopener,noreferrer');
                  } else if (project.title === "AR Image Tracking") {
                    window.open('https://www.youtube.com/shorts/a6gjPexRWsk', '_blank', 'noopener,noreferrer');
                  } else if (project.title === "Nano Banana") {
                    window.open('https://www.instagram.com/p/DOuuOlmjn9-/', '_blank', 'noopener,noreferrer');
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
