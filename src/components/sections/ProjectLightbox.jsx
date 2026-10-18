import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Smartphone } from 'lucide-react';
import Modal from '../ui/Modal';
import Badge from '../ui/Badge';

export default function ProjectLightbox({ project, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || !project || !project.screenshots) return;
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, currentIndex]);

  if (!project || !project.screenshots || project.screenshots.length === 0) {
    return null;
  }

  const screenshots = project.screenshots;
  const current = screenshots[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      maxWidth="max-w-5xl"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
        
        {/* Left Side: Mobile Phone Frame Simulator */}
        <div className="relative shrink-0 flex items-center justify-center">
          
          {/* Phone Mockup Body */}
          <div className="relative w-[280px] sm:w-[320px] aspect-[9/19.5] rounded-[44px] p-3 bg-[#11131A] border-4 border-[#262938] shadow-2xl flex flex-col items-center">
            
            {/* Dynamic Island / Speaker notch */}
            <div className="w-28 h-5 bg-black rounded-full mb-2 flex items-center justify-center z-20">
              <div className="w-3 h-3 rounded-full bg-[#1C1F2B] mr-2" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#0A192F]" />
            </div>

            {/* Screen Content */}
            <div className="relative w-full flex-1 rounded-[32px] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={current.url}
                alt={current.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom Bar Indicator */}
            <div className="w-32 h-1 bg-white/20 rounded-full mt-2" />
          </div>

          {/* Previous Button */}
          {screenshots.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-surface border border-borderDark text-textPrimary hover:text-accent hover:border-accent transition-colors shadow-xl z-20"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Button */}
          {screenshots.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-surface border border-borderDark text-textPrimary hover:text-accent hover:border-accent transition-colors shadow-xl z-20"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

        </div>

        {/* Right Side: Details, Feature Overview & Thumbnails */}
        <div className="flex-1 w-full flex flex-col justify-between self-stretch">
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="accent" size="xs">
                {project.category}
              </Badge>
              <span className="text-xs font-mono text-textMuted">
                Screen {currentIndex + 1} of {screenshots.length}
              </span>
            </div>

            <h4 className="text-xl font-bold text-textPrimary mb-3">
              {current.title}
            </h4>

            <p className="text-sm text-textSecondary leading-relaxed mb-6">
              {project.overview}
            </p>

            <div className="mb-6 p-4 rounded-xl bg-surfaceLight/50 border border-borderDark">
              <h5 className="text-xs font-semibold text-textPrimary uppercase tracking-wider mb-2">
                Implemented Features Highlighted:
              </h5>
              <ul className="space-y-1.5">
                {project.myContributions.map((c, i) => (
                  <li key={i} className="text-xs text-textSecondary flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div>
            <span className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-2.5 block">
              All Screenshots ({screenshots.length}):
            </span>
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
              {screenshots.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-14 h-24 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    idx === currentIndex
                      ? 'border-accent scale-105 shadow-glow-orange-sm'
                      : 'border-borderDark opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={s.url}
                    alt={s.title}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Modal>
  );
}
