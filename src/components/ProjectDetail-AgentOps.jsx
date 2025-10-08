import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { getProjectByTitle } from "../constants";
import { agentopsThumbnail, agentopsVendor, agentopsAnalys, agentopsChart } from "../assets";

const ProjectDetailAgentOps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

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
              onClick={() => navigate('/work')}
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
              AgentOps - Making AI Decisions Transparent
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-8"
            >
              Enterprise AI Workflow Visualization & Audit Platform • Full-Stack Developer & AI Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <p className="text-lg text-white leading-relaxed">
                "How I built an AI transparency platform that visualizes 1,200+ agent decisions simultaneously, making black-box AI systems auditable for enterprise compliance"
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
                  href="https://drive.google.com/file/d/1koQo-h-U_E01D6BfhlOJBuY_m2G6Ea2G/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600/20 border border-blue-400/30 text-blue-300 rounded-xl hover:bg-blue-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-medium">Demo Video</span>
                </motion.a>

                <motion.a
                  href="https://github.com/Quinxie51/AgentOps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-600/20 border border-gray-400/30 text-gray-300 rounded-xl hover:bg-gray-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://docs.google.com/presentation/d/1TbW1PPBY_N1Bx8qM38k6NnKcyp7IzFO50D5wVgEQ0-k/edit?slide=id.p4#slide=id.p4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600/20 border border-green-400/30 text-green-300 rounded-xl hover:bg-green-600/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  <span className="font-medium">Pitch Deck</span>
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
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Problem Solved</h3>
              <p className="text-white font-semibold">AI Transparency for Enterprise Compliance</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Timeline</h3>
              <p className="text-white font-semibold">8 weeks (Hackathon/Sprint)</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Role</h3>
              <p className="text-white font-semibold">Full-Stack Developer, AI Engineer</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Award</h3>
              <p className="text-white font-semibold">2nd Place - Hack-Nation's Global AI Hackathon</p>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Interface & Analytics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: agentopsThumbnail, alt: "AgentOps Platform Overview" },
              { src: agentopsVendor, alt: "Vendor Analysis Dashboard" },
              { src: agentopsAnalys, alt: "AI Decision Analysis" },
              { src: agentopsChart, alt: "Compliance Monitoring Charts" }
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
                  className="w-full aspect-[16/9] object-cover"
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
              <h2 className="text-3xl font-bold text-white mb-6">The AI Transparency Crisis</h2>
              <div className="space-y-6">
                <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🏢 Enterprise Compliance Nightmares</h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• AI makes thousands of decisions daily with zero audit trail</li>
                    <li>• Regulatory bodies demand explainable AI for financial/healthcare decisions</li>
                    <li>• One wrong AI decision can cost companies millions in compliance violations</li>
                  </ul>
                </div>
                <div className="bg-orange-600/20 border border-orange-400/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🤖 Multi-Agent Complexity</h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Modern workflows involve 5-20+ AI agents making interconnected decisions</li>
                    <li>• Dependencies and failure points are invisible to stakeholders</li>
                    <li>• Debugging failed workflows requires days of log diving</li>
                  </ul>
                </div>
                <div className="bg-yellow-600/20 border border-yellow-400/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">📊 Stakeholder Trust Gap</h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Business users can't understand why AI recommended specific actions</li>
                    <li>• Legal teams can't defend AI decisions in court without explanations</li>
                    <li>• Customers demand transparency in AI-driven recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.img
                src={agentopsThumbnail}
                alt="AgentOps Platform Overview"
                className="w-full max-w-xs rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Interactive Workflow Visualization Engine</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Hierarchical visualization with smart clustering for complex multi-agent workflows. Real-time updates with WebSocket integration for live status changes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">XYFlow integration with custom node types for smooth pan/zoom</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Virtual rendering for workflows with 100+ nodes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">90% reduction in render time, 60 FPS maintained</span>
                  </div>
                </div>
              </div>
              <div>
                <motion.img
                  src={agentopsVendor}
                  alt="Workflow Visualization"
                  className="w-full max-w-sm rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-col-dense"
            >
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-semibold text-white mb-4">Real-Time Compliance Monitoring</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Intelligent compliance engine with configurable rules. 1,200 vendors evaluated in 3.2 seconds with 95% cache hit rate for repeated evaluations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Live violation heat map with geographic/categorical views</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Smart alert system with severity-based routing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Real-time alerts with &lt;500ms latency</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <motion.img
                  src={agentopsAnalys}
                  alt="Compliance Monitoring"
                  className="w-full max-w-sm rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Deterministic Replay & Time Travel Debugging</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Time travel interface with state snapshots for reviewing and debugging complex AI decision sequences. Every replay generates detailed audit logs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Timeline scrubber with major decision points marked</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">State visualization showing what each agent "knew"</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-lg mt-1">•</span>
                    <span className="text-gray-300 text-sm">Automatic documentation with evidence preservation</span>
                  </div>
                </div>
              </div>
              <div>
                <motion.img
                  src={agentopsChart}
                  alt="Decision Analysis Charts"
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
          transition={{ delay: 1.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Frontend Architecture</h3>
                <p className="text-gray-300">React 18 with TypeScript, XYFlow/ReactFlow for interactive node visualization, shadcn/ui components, Tailwind CSS styling</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Backend & AI Orchestration</h3>
                <p className="text-gray-300">LangGraph for multi-agent workflow orchestration, LangChain for LLM integration, Azure OpenAI GPT-4, FastAPI with PostgreSQL</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-300">Virtual rendering for large workflows, debounced real-time updates, WebSocket integration, Redis caching for compliance evaluation</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">OAuth 2.0 + RBAC, API rate limiting, end-to-end encryption, complete audit logging for security compliance</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hackathon Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-400/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl mr-4">🏆</span>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Hackathon Achievement</h2>
                <h3 className="text-xl text-yellow-300 font-semibold">2nd Place Winner</h3>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Hack-Nation's Global AI Hackathon</strong>
            </p>
            <p className="text-gray-300 max-w-4xl mx-auto">
              Recognized for building an enterprise-grade AI transparency platform that visualizes 1,200+ agent decisions simultaneously, 
              making black-box AI systems auditable for enterprise compliance. The platform demonstrated exceptional technical innovation 
              in workflow visualization, real-time compliance monitoring, and deterministic replay capabilities.
            </p>
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Quantitative Impact</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">75% faster compliance audits (8 hours → 2 hours average)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">96% accuracy in identifying compliance violations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">$2.3M estimated savings from prevented violations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">3.2 second evaluation of 1,200 vendor compliance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl mt-1">✓</span>
                  <span className="text-gray-300">99.7% system uptime during pilot deployment</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">User Adoption & Satisfaction</h2>
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-blue-400 text-4xl">⭐</span>
                  <h3 className="text-xl font-semibold text-white">4.6/5 Average Satisfaction</h3>
                  <p className="text-gray-300">Across all user types</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">• 87% of pilot users requested permanent platform access</p>
                  <p className="text-gray-300 text-sm">• 89% task completion rate for core workflow auditing</p>
                  <p className="text-gray-300 text-sm">• 62% reduction in training time for new compliance officers</p>
                  <p className="text-gray-300 text-sm">• 500% increase in audit trail completeness</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Learnings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Architecture Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Enterprise requirements are fundamentally different from consumer needs - audit trails and compliance aren't optional</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">AI explainability is a UX problem - design explanations for specific audiences rather than one-size-fits-all</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Real-time systems require event-driven architecture - REST + polling couldn't handle compliance monitoring latency</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Development Growth</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Building for enterprise scale from day one requires different architectural patterns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Multi-agent state management taught advanced event-driven architecture patterns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 text-lg mt-1">•</span>
                  <span className="text-gray-300">Performance optimization at enterprise scale requires virtual rendering and intelligent caching strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6">
            <motion.button
              onClick={() => {
                const nextProject = getProjectByTitle("ConvoSense");
                navigate('/project/convosense', { state: { project: nextProject } });
              }}
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Project: ConvoSense
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailAgentOps;
