import React from 'react';
import { 
  Code, 
  Layers, 
  Cpu, 
  Database, 
  Wrench, 
  BarChart3 
} from 'lucide-react';
import { portfolioContent } from '../../config/portfolioContent';

const categoryIcons = {
  "Programming Languages": Code,
  "UI / State Management": Layers,
  "Machine Learning": Cpu,
  "Databases / Storage": Database,
  "Developer Tools / IDEs": Wrench,
  "Analytical Tools": BarChart3,
};

// Reusable 3-dot proficiency indicator
function RatingDots({ level }) {
  // level 3 = Strong (3 orange)
  // level 2 = Working (2 orange, 1 grey)
  // level 1 = Learning (1 orange, 2 grey)
  return (
    <span className="inline-flex items-center gap-1 shrink-0 ml-1">
      <span className={`w-1.5 h-1.5 rounded-full ${level >= 1 ? 'bg-accent shadow-[0_0_4px_#FF5E1E]' : 'bg-borderDark'}`} />
      <span className={`w-1.5 h-1.5 rounded-full ${level >= 2 ? 'bg-accent shadow-[0_0_4px_#FF5E1E]' : 'bg-borderDark'}`} />
      <span className={`w-1.5 h-1.5 rounded-full ${level >= 3 ? 'bg-accent shadow-[0_0_4px_#FF5E1E]' : 'bg-borderDark'}`} />
    </span>
  );
}

export default function Skills() {
  const { technicalSkills } = portfolioContent;

  return (
    <section id="skills" className="py-20 md:py-28 bg-bgDark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Figma: Title on Left, Dot Legend on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-textPrimary">
              {technicalSkills.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-textMuted">
              {technicalSkills.subtitle}
            </p>
          </div>

          {/* 3-Dot Rating Legend */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-textSecondary bg-surface/70 border border-borderDark px-4 py-2 rounded-xl backdrop-blur-sm self-start md:self-auto font-mono">
            <div className="flex items-center gap-2">
              <RatingDots level={3} />
              <span>Strong</span>
            </div>
            <div className="flex items-center gap-2">
              <RatingDots level={2} />
              <span>Working</span>
            </div>
            <div className="flex items-center gap-2">
              <RatingDots level={1} />
              <span>Learning</span>
            </div>
          </div>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.categories.map((cat) => {
            const Icon = categoryIcons[cat.name] || Code;

            return (
              <div
                key={cat.name}
                className="bg-surface/90 hover:bg-surface border border-borderDark hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-card-dark"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surfaceLight border border-borderDark flex items-center justify-center text-accent shrink-0 group-hover:border-accent/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-textPrimary group-hover:text-accent transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-textMuted mt-0.5 line-clamp-1">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Count Badge */}
                    <span className="w-6 h-6 rounded-full bg-surfaceLight border border-borderDark text-textMuted text-xs flex items-center justify-center font-mono shrink-0">
                      {cat.skills.length}
                    </span>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surfaceLight/80 border border-borderDark hover:border-borderLight text-xs font-medium text-textPrimary transition-colors"
                      >
                        <span>{skill.name}</span>
                        <RatingDots level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Primary Stack Pill */}
                {cat.isPrimary && (
                  <div className="mt-6 pt-4 border-t border-borderDark/50">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium text-accent bg-accentMuted border border-accent/20">
                      Primary stack
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-xs font-mono text-textMuted">
          {technicalSkills.caption}
        </p>

      </div>
    </section>
  );
}
