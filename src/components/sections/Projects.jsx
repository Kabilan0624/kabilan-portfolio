import React, { useState } from 'react';
import { portfolioContent } from '../../config/portfolioContent';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectLightbox from './ProjectLightbox';

export default function Projects() {
  const { projects } = portfolioContent;
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const filterTabs = [
    { label: 'All', count: projects.length },
    { label: 'Education', count: projects.filter(p => p.category.includes('Education')).length },
    { label: 'Healthcare', count: projects.filter(p => p.category.includes('Healthcare')).length },
    { label: 'Agriculture', count: projects.filter(p => p.category.includes('Agriculture')).length },
    { label: 'Reading & Media', count: projects.filter(p => p.category.includes('Reading & Media')).length },
    { label: 'Field Data', count: projects.filter(p => p.category.includes('Field Data') || p.category.includes('Community')).length },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Field Data') {
      return project.category.includes('Field Data') || project.category.includes('Community');
    }
    return project.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-bgDark/60 relative border-t border-borderDark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="PORTFOLIO SHOWCASE"
          title="Featured Mobile Applications"
          subtitle="Real cross-platform applications engineered across healthcare, agritech, school ERP, and field data collection."
        />

        {/* Enhanced Category Filter Tabs with Counts */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 lg:mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setFilter(tab.label)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                filter === tab.label
                  ? 'bg-accent text-white shadow-glow-orange-sm'
                  : 'bg-surface/80 border border-borderDark text-textSecondary hover:text-textPrimary hover:bg-surfaceLight'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                filter === tab.label 
                  ? 'bg-black/30 text-white' 
                  : 'bg-surfaceLight text-textMuted'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Showcase Layout: Full-Width Alternating Project Cards */}
        <div className="flex flex-col gap-10 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenScreenshots={(p) => setActiveProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeProject && (
        <ProjectLightbox
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
