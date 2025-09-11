import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GlassPanel from './GlassPanel';
import Tag from './Tag';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"] },
    { category: "3D & Graphics", items: ["Three.js", "WebGL", "Blender", "Unity", "Shader Programming"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Postman"] }
  ];

  const awards = [
    { title: "Technical Titan Award", organization: "VTMP Demo Day", year: "2024" },
    { title: "Best UI/UX Design", organization: "Hackathon 2023", year: "2023" },
    { title: "Innovation Award", organization: "Tech Conference", year: "2023" }
  ];

  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title="About Me"
          subtitle="Who I Am"
          align="center"
          className="mb-20"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                Full Stack Developer & Creative Technologist
              </h3>
              
              <div className="space-y-4 text-gray-200 font-text leading-relaxed">
                <p>
                  I'm a passionate developer who bridges the gap between technology and creativity. 
                  With over 3 years of experience building digital experiences, I specialize in 
                  creating intuitive interfaces and robust backend systems.
                </p>
                
                <p>
                  My approach combines technical expertise with design thinking, ensuring that 
                  every project not only functions flawlessly but also delivers an exceptional 
                  user experience. I believe in writing clean, maintainable code and staying 
                  current with emerging technologies.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new design trends, experimenting 
                  with 3D graphics, or contributing to open-source projects that push the boundaries 
                  of what's possible on the web.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "3+", label: "Years" },
                { number: "20+", label: "Projects" },
                { number: "15+", label: "Technologies" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-2xl font-heading font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-text">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl font-heading font-bold text-white tracking-tight mb-6">
              Skills & Technologies
            </h4>
            
            <div className="space-y-6">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                >
                  <h5 className="text-sm font-text font-medium text-gray-300 uppercase tracking-wide">
                    {skillGroup.category}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Tag
                        key={skill}
                        variant="default"
                        size="sm"
                        interactive={false}
                      >
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Awards & Recognition */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            title="Awards & Recognition"
            subtitle="Achievements"
            align="center"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassPanel variant="light" hasInnerStroke className="p-6 text-center">
                  <div className="space-y-3">
                    <h4 className="text-lg font-heading font-bold text-white">
                      {award.title}
                    </h4>
                    <p className="text-gray-300 font-text">
                      {award.organization}
                    </p>
                    <p className="text-sm text-gray-400 font-text">
                      {award.year}
                    </p>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassPanel variant="dark" hasInnerStroke className="p-12 max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                Let's Work Together
              </h3>
              
              <p className="text-gray-200 font-text leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:hello@example.com"
                  className="px-6 py-3 bg-white text-black font-heading font-bold tracking-wide rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-white font-heading font-medium tracking-wide rounded-2xl hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View GitHub
                </motion.a>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
