    import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Images, 
  Sparkles, 
  Layers, 
  Hammer, 
  ArrowUpRight, 
  Smartphone, 
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectCard({ project, index, onOpenScreenshots }) {
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const isEven = index % 2 === 0;
  const currentScreen = hasScreenshots ? project.screenshots[activeScreenIndex] : null;

  const nextScreen = (e) => {
    e.stopPropagation();
    if (!hasScreenshots) return;
    setActiveScreenIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevScreen = (e) => {
    e.stopPropagation();
    if (!hasScreenshots) return;
    setActiveScreenIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <div className="bg-surface/80 hover:bg-surface border border-borderDark hover:border-accent/50 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-sm hover:shadow-card-dark relative overflow-hidden group">
      
      {/* Top Subtle Orange Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
        
        {/* =========================================================================
            PHONE MOCKUP PREVIEW WITH INTERACTIVE SCREEN SWITCHING
           ========================================================================= */}
        <div className="w-full lg:w-5/12 flex flex-col items-center shrink-0">
          
          {hasScreenshots ? (
            <div className="w-full max-w-[280px] sm:max-w-[300px] flex flex-col items-center">
              
              {/* Phone Frame */}
              <div 
                onClick={() => onOpenScreenshots(project)}
                className="relative w-full aspect-[9/18.5] rounded-[40px] p-2.5 bg-[#10121A] border-4 border-[#25293A] shadow-2xl flex flex-col items-center cursor-pointer group/device transition-transform duration-300 hover:scale-[1.02]"
                title="Click to view fullscreen gallery"
              >
                {/* Dynamic Island Notch */}
                <div className="w-24 h-4 bg-black rounded-full mb-1.5 flex items-center justify-center z-20 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#181B28] mr-2" />
                  <div className="w-2 h-2 rounded-full bg-[#0C1B33]" />
                </div>

                {/* Screen Image with Smooth Crossfade */}
                <div className="relative w-full flex-1 rounded-[30px] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    key={activeScreenIndex}
                    src={currentScreen.url}
                    alt={currentScreen.title}
                    className="w-full h-full object-cover object-top animate-in fade-in duration-300"
                    loading="lazy"
                  />

                  {/* Glossy Reflection Gradient */}
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" /> */}

                  {/* Hover Expand Overlay */}
                  {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/device:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <span className="p-3 rounded-full bg-accent text-white shadow-glow-orange-sm">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Fullscreen Lightbox
                    </span>
                  </div> */}

                  {/* In-Frame Left/Right Arrow Controls */}
                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevScreen}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover/device:opacity-100"
                        aria-label="Previous screen"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextScreen}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover/device:opacity-100"
                        aria-label="Next screen"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-24 h-1 bg-white/20 rounded-full my-1.5 shrink-0" />
              </div>

              {/* Screen Title Caption & Mini Thumbnails Strip */}
              <div className="mt-4 w-full text-center">
                <div className="text-xs font-medium text-textPrimary truncate mb-2">
                  {currentScreen.title}
                </div>

                {/* Interactive Screen Dots / Thumbnails */}
                <div className="flex items-center justify-center gap-1.5">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeScreenIndex 
                          ? 'w-6 bg-accent shadow-[0_0_8px_#FF5E1E]' 
                          : 'w-2 bg-borderDark hover:bg-textSecondary'
                      }`}
                      title={s.title}
                      aria-label={`Go to screen ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="w-full max-w-[280px] sm:max-w-[300px] aspect-[9/18.5] rounded-[40px] border-2 border-dashed border-borderDark/80 bg-surfaceLight/20 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-surfaceLight border border-borderDark flex items-center justify-center text-accent mb-4">
                <Layers className="w-7 h-7" />
              </div>
              <span className="text-sm font-bold text-textPrimary">
                Field Architecture
              </span>
              <span className="text-xs text-textMuted mt-1">
                Data collection & administrative platform currently in active development
              </span>
            </div>
          )}

        </div>

        {/* =========================================================================
            PROJECT DETAILS, CONTRIBUTIONS & ARCHITECTURE
           ========================================================================= */}
        <div className="w-full lg:w-7/12 flex flex-col justify-between">
          
          <div>
            {/* Meta Row: Project Index + Category + Status */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold text-accent tracking-wider">
                0{index + 1} / 07
              </span>
              <span className="w-1 h-1 rounded-full bg-borderDark" />
              
              <Badge variant="accent" size="xs">
                {project.category}
              </Badge>

              {project.inDevelopment ? (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/25">
                  <Hammer className="w-3 h-3" />
                  In Active Development
                </span>
              ) : (
                <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-textPrimary group-hover:text-accent transition-colors mb-3 leading-snug">
              {project.title}
            </h3>

            {/* Overview */}
            <p className="text-sm sm:text-base text-textSecondary leading-relaxed mb-6">
              {project.overview}
            </p>

            {/* "Key Implemented Contributions" Card */}
            <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-surfaceLight/50 border border-borderDark">
              <h4 className="text-xs font-mono font-semibold text-textPrimary uppercase tracking-wider mb-3.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Key Implemented Contributions
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.myContributions.map((contribution, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-textSecondary leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{contribution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer: Tech Stack Chips & Action Buttons */}
          <div className="pt-4 border-t border-borderDark/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="tech" size="xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Primary Action Button */}
            {hasScreenshots ? (
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenScreenshots(project)}
                icon={ArrowUpRight}
                iconPosition="right"
                className="shrink-0"
              >
                Explore Screenshots ({project.screenshots.length})
              </Button>
            ) : (
              <span className="text-xs font-mono text-textMuted italic shrink-0">
                In Active Development
              </span>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
