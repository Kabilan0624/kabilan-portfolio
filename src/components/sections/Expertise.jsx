import React from 'react';
import { 
  Smartphone, 
  Network, 
  Layers, 
  Search, 
  Flame, 
  MessageSquare 
} from 'lucide-react';
import { portfolioContent } from '../../config/portfolioContent';

const iconMap = {
  Smartphone,
  Network,
  Layers,
  Search,
  Flame,
  MessageSquare,
};

export default function Expertise() {
  const { whatIBuild } = portfolioContent;

  return (
    <section id="expertise" className="py-20 md:py-28 bg-bgDark/80 relative border-t border-borderDark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Figma: "What I Build" */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-textPrimary">
            {whatIBuild.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-textMuted">
            {whatIBuild.subtitle}
          </p>
        </div>

        {/* Asymmetric Cards Grid matching Figma Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {whatIBuild.cards.map((card) => {
            const Icon = iconMap[card.icon] || Smartphone;

            return (
              <div
                key={card.id}
                className={`${card.span} bg-surface/90 hover:bg-surface border border-borderDark hover:border-accent/40 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-card-dark`}
              >
                <div>
                  {/* Top Row: Icon & Optional "Core skill" Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-surfaceLight border border-borderDark flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {card.isCore && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accentMuted border border-accent/25">
                        Core skill
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-textPrimary group-hover:text-accent transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-textSecondary leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Sub-tags at bottom matching Figma pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-borderDark/50">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-bgDark/70 border border-borderDark text-xs font-medium text-textSecondary group-hover:text-textPrimary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
