import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  edge,
  augustana,
  skimble,
  pastport,
  pastportChat,
  pastportDashboard,
  pastportSave,
  pastportSet,
  pastportTalk,
  pastportPitchDeck,
  zeroKm,
  zeroKmCalendar,
  zeroKmChat,
  zeroKmDiary,
  zeroKmHome,
  zeroKmMusic,
  expiro,
  orbit,
  threejs,
} from "../assets";

// constants.js
export const navLinks = [
  {
    id: "/work",
    title: "Work",
  },
  {
    id: "/about",
    title: "About",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: " Software Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Edge Center",
    icon: edge,
    iconBg: "#383E56",
    date: "Sept 2022 - March 2023",
    points: [
      "Spearheaded a team of 6 software developers to craft 8 responsive websites using React, TypeScript, and Tailwind.",
      "Partnered with over 10 clients, using Agile methodology to refine design prototypes based on iterative feedback, improving project turnover times.",
    ],
  },
  {
    title: "AI Research Assistant",
    company_name: "Augustana College",
    icon: augustana,
    iconBg: "#E6DEDD",
    date: "April 2023 - July 2023",
    points: [
      "Played a key role in a published study in the International Journal of Computer Science & Information Technology (Impact factor: 1.9), comparing text comprehension in IELTS Reading using GPT-3.5.",
      "Executed experiments and collected data, improved the accuracy to 65.38% on 50 IELTS Reading tests by using the RAG model, Database FAISS and Langchain.",
    ],
  },
  {
    title: "AI Project Management Intern",
    company_name: "Skimble",
    icon: skimble,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Led AI project management initiatives to implement new AI features in the workout app, delivered the updated version for 20M users 1 week ahead of time.",
      "Enhanced AI 1:1 Chat feature to give better workout recommendations, increasing user satisfaction by 15%.",
      "Conducted QA testing across Android and iOS, reporting 5 critical bugs and improving overall user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "0-KM",
    description:
      "Award-winning relationship app that bridges hearts across any distance, unifying 6+ separate apps into one seamless experience",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "purple-text-gradient",
      },
    ],
    image: zeroKm,
    source_code_link: "https://github.com/ThanhDatVu111/0-KM",
    // Additional project details for detailed view
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
    name: "PastPort",
    description:
      "Revolutionizing History Education with AI-powered conversations and immersive learning experiences",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
      {
        name: "SQLite",
        color: "purple-text-gradient",
      },
    ],
    image: pastport,
    source_code_link: "https://devpost.com/software/pastport-ihxy6p",
    // Additional project details for detailed view
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
    name: "Expiro",
    description:
      "Award-winning sustainability app that helps users reduce food waste through smart tracking and notifications",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "ML Kit",
        color: "pink-text-gradient",
      },
      {
        name: "Design",
        color: "purple-text-gradient",
      },
    ],
    image: expiro,
    source_code_link: "https://github.com/Quinxie51/ExpiRo-App",
    demoVideo: "https://drive.google.com/file/d/1EMUVnpkdRoA88RSh4-Jh9z9p7MlQRxmv/view?resourcekey",
    figmaLink: "https://www.figma.com/design/6T384Ps3lKP51BUjwXAVsG/Hackathon?node-id=0-1&t=B6JOiwY5mOgCRoEp-1",
    pitchDeck: "https://docs.google.com/presentation/d/163TyuhHehFlLheRFHTREbNeB-dsO74dY72ifkgCxSbc/edit?usp=sharing",
    // Additional project details for detailed view
    detailedInfo: {
      title: "ExpiRo - Track Food. Cut Waste. Eat Better.",
      subtitle: "Award-Winning Sustainability App • Product Designer & Flutter Developer",
      heroImage: expiro,
      heroQuote: "How I designed a food tracking app that won 2nd place at CCSC Midwest Regional Competition by solving real household food waste problems",
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
    name: "Orbit Guardian",
    description:
      "Fiction world: an application to help the citizens of Hackunia survive the harsh alien invasion",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "leaflet.js",
        color: "pink-text-gradient",
      },
    ],
    image: orbit,
    source_code_link: "https://devpost.com/software/orbit-guardians",
  },
];

export { services, technologies, experiences, testimonials, projects };
