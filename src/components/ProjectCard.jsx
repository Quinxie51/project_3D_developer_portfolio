import React from 'react';
import { motion } from 'framer-motion';
import Tag from './Tag';
import GlassPanel from './GlassPanel';

const ProjectCard = ({ 
  project, 
  className = "",
  onClick 
}) => {
  const { 
    title, 
    year, 
    summary, 
    cover, 
    tags = [], 
    roles = [],
    tools = []
  } = project;

  return (
    <motion.div
      className={`group cursor-pointer ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <GlassPanel 
        variant="dark" 
        hasInnerStroke 
        className="h-full overflow-hidden"
        hover={false}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl mb-6 bg-black" style={{height: '16rem'}}>
          <motion.img
            src={cover}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                {title}
              </h3>
              <span className="text-sm text-gray-400 font-text">
                {year}
              </span>
            </div>
            
            {roles.length > 0 && (
              <p className="text-sm text-gray-300 font-text">
                {roles.join(' • ')}
              </p>
            )}
          </div>

          {/* Summary */}
          <p className="text-gray-200 font-text leading-relaxed">
            {summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag 
                key={index} 
                variant="default" 
                size="sm"
                interactive={false}
              >
                {tag}
              </Tag>
            ))}
          </div>

          {/* Tools */}
          {tools.length > 0 && (
            <div className="pt-2">
              <p className="text-xs text-gray-400 font-text uppercase tracking-wide mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-1">
                {tools.map((tool, index) => (
                  <Tag 
                    key={index} 
                    variant="secondary" 
                    size="sm"
                    interactive={false}
                  >
                    {tool}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </GlassPanel>
    </motion.div>
  );
};

export default ProjectCard;
