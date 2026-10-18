import React from 'react';
import { CheckCircle2, Code2, Sparkles } from 'lucide-react';
import { portfolioContent } from '../../config/portfolioContent';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

export default function About() {
  const { about, personal } = portfolioContent;

  return (
    <section id="about" className="py-20 md:py-28 bg-bgDark/50 relative border-t border-borderDark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.heading}
          subtitle="A dedicated approach to crafting practical, maintainable mobile applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo & Stats Card (order-1 on mobile so image shows first) */}
          <div className="lg:col-span-5 order-1 lg:order-1">
            <div className="relative group max-w-md mx-auto">
              
              {/* Subtle orange border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-blue-500/20 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-300" />
              
              <div className="relative bg-surface rounded-2xl border border-borderDark overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden bg-bgDark">
                  <img
                    src={personal.profileImage}
                    alt={personal.profileImageAlt}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative & Engineering Tenets */}
          <div className="lg:col-span-7 order-2 lg:order-2 space-y-6">
            
            <Card className="bg-surface/60 border-borderDark p-8">
              <p className="text-base sm:text-lg text-textPrimary leading-relaxed font-normal mb-6">
                {about.copy}
              </p>

              <div className="pt-6 border-t border-borderDark/60">
                <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Core Engineering Principles
                </h4>

                <div className="space-y-3.5">
                  {about.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-textSecondary">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface border border-borderDark">
                <div className="text-xs text-textMuted uppercase font-mono">Specialization</div>
                <div className="text-sm font-semibold text-textPrimary mt-1">Flutter & Dart</div>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-borderDark">
                <div className="text-xs text-textMuted uppercase font-mono">Approach</div>
                <div className="text-sm font-semibold text-textPrimary mt-1">Clean Architecture</div>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-borderDark col-span-2 sm:col-span-1">
                <div className="text-xs text-textMuted uppercase font-mono">Mindset</div>
                <div className="text-sm font-semibold text-textPrimary mt-1">Adaptive State Mgmt</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
