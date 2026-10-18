import React from 'react';
import { ArrowDown, Mail, FileDown, Phone } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { portfolioContent } from '../../config/portfolioContent';
import Button from '../ui/Button';

export default function Hero() {
  const { personal } = portfolioContent;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-borderDark text-accent text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>{personal.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-textPrimary leading-[1.1] mb-6">
              {personal.headlineLine1}{" "}
              <span className="text-gradient-orange block sm:inline">
                {personal.headlineLine2}
              </span>
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-textSecondary max-w-2xl mb-8 leading-relaxed">
              {personal.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={ArrowDown}
                iconPosition="right"
                className="w-full sm:w-auto justify-center"
              >
                {personal.primaryCta}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto justify-center"
              >
                {personal.secondaryCta}
              </Button>
              {personal.hasRealResume && (
                <Button
                  variant="outline"
                  size="lg"
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={FileDown}
                  iconPosition="left"
                  className="w-full sm:w-auto justify-center border-accent/40 text-accent hover:bg-accent/10"
                >
                  Resume (PDF)
                </Button>
              )}
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-6 pt-4 border-t border-borderDark/60 w-full">
              <span className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface hover:bg-surfaceLight border border-borderDark text-textSecondary hover:text-accent transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface hover:bg-surfaceLight border border-borderDark text-textSecondary hover:text-accent transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-2 rounded-lg bg-surface hover:bg-surfaceLight border border-borderDark text-textSecondary hover:text-accent transition-colors"
                    aria-label="Email Me"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {personal.phone && (
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="p-2 rounded-lg bg-surface hover:bg-surfaceLight border border-borderDark text-textSecondary hover:text-accent transition-colors"
                    aria-label="Call Me"
                    title={personal.phone}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Exact Figma Circle Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center group">
              
              {/* Subtle Ambient Backlight Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 bg-accent/15 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/25 transition-all duration-500" />

              {/* Master Figma Circle Portrait Frame */}
              <div className="relative w-full aspect-[3/4] flex items-center justify-center overflow-visible">
                
                {/* Portrait with Circle Backdrop */}
                <img
                  src={personal.profileImage}
                  alt={personal.profileImageAlt}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
