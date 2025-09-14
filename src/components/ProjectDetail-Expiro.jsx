import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const ProjectDetailExpiro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !project.detailedInfo) {
    return (
      <div className="relative w-full min-h-screen bg-black">
        <div className="relative z-0 container mx-auto px-8 pt-24 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Project Not Found
            </h1>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { detailedInfo } = project;

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <div className="relative z-0 container mx-auto px-8 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-4"
            >
              ExpiRo - Track Food. Cut Waste. Eat Better.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-8"
            >
              Award-Winning Sustainability App • Product Designer & Flutter Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <p className="text-lg text-white leading-relaxed">
                "How I designed a food tracking app that won 2nd place at CCSC Midwest Regional Competition by solving real household food waste problems"
              </p>
            </motion.div>
          </div>

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Project Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.a
                  href="https://docs.google.com/presentation/d/163TyuhHehFlLheRFHTREbNeB-dsO74dY72ifkgCxSbc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-yellow-600/20 border border-yellow-400/30 text-yellow-300 rounded-xl hover:bg-yellow-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                  </svg>
                  <span className="font-medium">Pitch Deck</span>
                </motion.a>

                <motion.a
                  href="https://www.figma.com/design/6T384Ps3lKP51BUjwXAVsG/Hackathon?node-id=0-1&t=B6JOiwY5mOgCRoEp-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-purple-600/20 border border-purple-400/30 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.852 8.981h-4.588v-2.04c0-1.04.52-1.57 1.57-1.57 1.04 0 1.57.53 1.57 1.57v2.04h1.448v-2.04c0-1.04.52-1.57 1.57-1.57s1.57.53 1.57 1.57v2.04h1.448v-2.04c0-1.04-.52-1.57-1.57-1.57s-1.57.53-1.57 1.57v2.04zm-4.588 0H9.816v-2.04c0-1.04-.52-1.57-1.57-1.57s-1.57.53-1.57 1.57v2.04H5.228v-2.04c0-1.04.52-1.57 1.57-1.57s1.57.53 1.57 1.57v2.04zm0 0v2.04c0 1.04.52 1.57 1.57 1.57s1.57-.53 1.57-1.57v-2.04zm0 0H9.816v2.04c0 1.04.52 1.57 1.57 1.57s1.57-.53 1.57-1.57v-2.04z"/>
                  </svg>
                  <span className="font-medium">Figma Design</span>
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1EMUVnpkdRoA88RSh4-Jh9z9p7MlQRxmv/view?resourcekey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-red-600/20 border border-red-400/30 text-red-300 rounded-xl hover:bg-red-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                  <span className="font-medium">Demo Video</span>
                </motion.a>

                <motion.a
                  href="https://github.com/Quinxie51/ExpiRo-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-600/20 border border-gray-400/30 text-gray-300 rounded-xl hover:bg-gray-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Award</h3>
              <p className="text-white font-semibold">2nd Place, CCSC Midwest</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Timeline</h3>
              <p className="text-white font-semibold">12 weeks (Feb-May 2024)</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Role</h3>
              <p className="text-white font-semibold">Product Designer, Flutter Developer</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Impact</h3>
              <p className="text-white font-semibold">40% waste reduction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">App Interface & Award</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: "/src/assets/0km/Expiro/thumbnail.png", alt: "ExpiRo App Thumbnail" },
              { src: "/src/assets/0km/Expiro/main.png", alt: "Main Dashboard" },
              { src: "/src/assets/0km/Expiro/ingredient.png", alt: "Ingredient Tracking" },
              { src: "/src/assets/0km/Expiro/notification.png", alt: "Smart Notifications" },
              { src: "/src/assets/0km/Expiro/presentation.jpg", alt: "2nd Place Award Certificate" }
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="rounded-xl overflow-hidden bg-white/5 border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[9/16] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Scale of Food Waste</h2>
              <div className="space-y-6">
                <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">💰 Financial Impact</h3>
                  <p className="text-gray-300 text-2xl font-bold mb-2">$1,500</p>
                  <p className="text-gray-300 text-sm">Average amount US households waste on spoiled food annually</p>
                </div>
                <div className="bg-orange-600/20 border border-orange-400/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">📊 Waste Statistics</h3>
                  <p className="text-gray-300 text-2xl font-bold mb-2">30-40%</p>
                  <p className="text-gray-300 text-sm">Percentage of food supply that goes to waste in America</p>
                </div>
                <div className="bg-yellow-600/20 border border-yellow-400/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🌍 Environmental Impact</h3>
                  <p className="text-gray-300 text-2xl font-bold mb-2">80 billion lbs</p>
                  <p className="text-gray-300 text-sm">Food wasted annually in US households</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.img
                src="/src/assets/0km/Expiro/main.png"
                alt="ExpiRo Main Interface"
                className="w-full max-w-xs rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Personal Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Personal Problem</h2>
          <p className="text-gray-300 text-lg text-center mb-8 max-w-3xl mx-auto">
            Through preliminary research, I discovered that food waste isn't about not caring—it's about broken systems in our daily lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">😔 The "Fridge Black Hole" Effect</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">• Items get pushed to the back and forgotten</li>
                <li className="text-gray-300 text-sm">• Expiration dates are tiny and hard to read</li>
                <li className="text-gray-300 text-sm">• People lose track of what they actually own</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">⏰ Reminder Failure</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">• Generic calendar reminders come too late</li>
                <li className="text-gray-300 text-sm">• Multiple apps create notification fatigue</li>
                <li className="text-gray-300 text-sm">• No context for what to do with expiring items</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">🏠 Household Coordination Chaos</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">• Roommates/family members buy duplicates</li>
                <li className="text-gray-300 text-sm">• No shared visibility into pantry inventory</li>
                <li className="text-gray-300 text-sm">• Guilt and blame when food goes bad</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Research & Discovery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Research & Discovery</h2>
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">Research Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-4">
                  <p className="text-blue-300 text-2xl font-bold">15</p>
                  <p className="text-gray-300 text-sm">User Interviews</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-600/20 border border-green-400/30 rounded-lg p-4">
                  <p className="text-green-300 text-2xl font-bold">1-week</p>
                  <p className="text-gray-300 text-sm">Diary Studies</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-purple-300 text-2xl font-bold">8</div>
                <p className="text-gray-300 text-sm">Competitive Analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600/20 border border-yellow-400/30 rounded-lg p-4">
                  <p className="text-yellow-300 text-2xl font-bold">3</p>
                  <p className="text-gray-300 text-sm">Household Observations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Research Insights</h3>
              <div className="space-y-6">
                <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">💡 Insight #1: The "Scan-First" Mental Model</h4>
                  <p className="text-gray-300 text-sm mb-2">"I just want to quickly add stuff when I get home from the store"</p>
                  <p className="text-blue-300 text-xs">Evidence: 87% of users abandoned apps that required extensive manual entry</p>
                </div>
                <div className="bg-green-600/20 border border-green-400/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">💡 Insight #2: Visual Urgency Over Text</h4>
                  <p className="text-gray-300 text-sm mb-2">"I don't read dates—I just look at colors in my fridge"</p>
                  <p className="text-green-300 text-xs">Evidence: Users made food decisions based on visual cues 73% of the time</p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-purple-600/20 border border-purple-400/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">💡 Insight #3: Progress, Not Guilt</h4>
                  <p className="text-gray-300 text-sm mb-2">"Other apps make me feel bad about wasting food. I just want to do better."</p>
                  <p className="text-purple-300 text-xs">Evidence: 92% preferred "food saved" messaging over "waste prevented"</p>
                </div>
                <div className="bg-orange-600/20 border border-orange-400/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">💡 Insight #4: Micro-Actions at Decision Moments</h4>
                  <p className="text-gray-300 text-sm mb-2">"I need to know what to do with something right when I see it's expiring"</p>
                  <p className="text-orange-300 text-xs">Evidence: Users most likely to take action within 30 seconds of receiving notifications</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Design Strategy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Design Strategy & Principles</h2>
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Design Philosophy</h3>
            <p className="text-xl text-center text-gray-300 italic">"Make the right choice the easy choice"</p>
            <p className="text-gray-300 text-center mt-4">
              Instead of relying on willpower or behavior change, design systems that make food waste prevention feel effortless and rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">1. Scan-First Philosophy</h3>
              <p className="text-gray-300 text-sm mb-3">Prioritize speed of input over completeness of data</p>
              <p className="text-blue-300 text-xs">Camera scanning is the primary button, manual entry is fallback</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">2. Visual Urgency System</h3>
              <p className="text-gray-300 text-sm mb-3">Use color psychology and visual hierarchy to communicate priority</p>
              <p className="text-green-300 text-xs">Traffic light system (green/amber/red) with clear iconography</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">3. Positive Progress Framework</h3>
              <p className="text-gray-300 text-sm mb-3">Celebrate food saved rather than shame for waste</p>
              <p className="text-purple-300 text-xs">"Items Saved," "Money Preserved," "Environmental Impact" metrics</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">4. Contextual Action Design</h3>
              <p className="text-gray-300 text-sm mb-3">Provide specific next steps at moment of decision</p>
              <p className="text-orange-300 text-xs">"Use Today," "Freeze Now," "Share with Roommate" buttons</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">5. Offline-First Reliability</h3>
              <p className="text-gray-300 text-sm mb-3">Work regardless of connectivity status</p>
              <p className="text-yellow-300 text-xs">Local CSV storage with optional cloud sync</p>
            </div>
          </div>
        </motion.div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Smart Camera Scanning Experience</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Progressive scanning intelligence with real-time feedback, confidence indicators, and graceful degradation when scanning fails.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Real-time feedback with green overlay when text is detected</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Confidence indicators show which fields were auto-detected vs. manual</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Learning system gets better at recognizing user's common products</span>
                  </div>
                </div>
              </div>
              <div>
                <motion.img
                  src="/src/assets/0km/Expiro/ingredient.png"
                  alt="Smart Camera Scanning"
                    className="w-full max-w-sm rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-col-dense"
            >
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-semibold text-white mb-4">Inventory Dashboard - Visual Priority System</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Intelligent visual hierarchy with urgency-based sorting, color-coded status indicators, and smart filtering options.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Critical items (0-1 days) at top with red accent</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Soon items (2-3 days) with amber accent</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Fresh items (4+ days) with green accent</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <motion.img
                  src="/src/assets/0km/Expiro/main.png"
                  alt="Inventory Dashboard"
                    className="w-full max-w-sm rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Smart Notification System</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Contextual notification intelligence with timing algorithms, personalized content, and user-controlled settings.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Fresh Items (7+ days): No notifications</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Use Soon (3-4 days): Gentle reminder with meal suggestions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Urgent (1-2 days): Action-focused notification with specific next steps</span>
                  </div>
                </div>
              </div>
              <div>
                <motion.img
                  src="/src/assets/0km/Expiro/notification.png"
                  alt="Smart Notifications"
                    className="w-full max-w-sm rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
                <p className="text-gray-300">Flutter + Dart - Single codebase for iOS/Android with native performance</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Storage</h3>
                <p className="text-gray-300">Local CSV Storage - Human-readable, easily exportable, no database overhead</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Computer Vision</h3>
                <p className="text-gray-300">Camera ML Kit - On-device text recognition for privacy and speed</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Notifications</h3>
                <p className="text-gray-300">Local Notifications - Reliable delivery without push notification infrastructure</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">40% reduction in food waste among test users over 4 weeks</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">$67 average savings per household per month</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">5.8 days/week average app usage (high engagement for utility app)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">92% task success rate for core user flows</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Competition Success</h2>
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <span className="text-yellow-400 text-4xl">🥈</span>
                  <h3 className="text-xl font-semibold text-white">2nd Place Overall</h3>
                  <p className="text-gray-300">CCSC Midwest Regional Competition</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">• Recognized for "Practical Innovation and Technical Excellence"</p>
                  <p className="text-gray-300 text-sm">• "Addresses a real problem with elegant design"</p>
                  <p className="text-gray-300 text-sm">• "Clear evidence of user research driving design decisions"</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Learnings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Product Design Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Systems thinking creates sustainable behavior change better than willpower</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Progressive disclosure in complex applications prevents overwhelm</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Visual communication matches users' natural information processing patterns</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Development Growth</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Offline-first architecture teaches advanced state management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Computer vision integration requires elegant error handling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Performance optimization at scale teaches mobile efficiency principles</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailExpiro;
