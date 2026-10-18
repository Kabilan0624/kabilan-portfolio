import React from 'react';
import { Briefcase, GraduationCap, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioContent } from '../../config/portfolioContent';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function Experience() {
  const { experience } = portfolioContent;

  return (
    <section id="experience" className="py-20 md:py-28 bg-bgDark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={experience.eyebrow}
          title={experience.heading}
          subtitle={experience.intro}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Internship & Work Experience Cards */}
          {experience.items.map((item, index) => (
            <Card
              key={index}
              className="bg-surface/80 border-borderDark p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Subtle Left Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surfaceLight border border-borderDark text-accent shrink-0 mt-0.5">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-textPrimary">
                      {item.role}
                    </h3>
                    {item.company && (
                      <div className="flex items-center gap-2 text-xs font-medium text-textSecondary mt-1">
                        <span className="text-accent font-semibold">{item.company}</span>
                        {item.location && (
                          <>
                            <span className="text-borderDark">•</span>
                            <span className="text-textMuted flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <span className="text-xs font-mono text-accent bg-accentMuted px-3 py-1 rounded-full border border-accent/20 shrink-0 self-start">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-textSecondary leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Bullet Contributions */}
              {item.bullets && item.bullets.length > 0 && (
                <div className="space-y-2 mb-6 pl-1">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-textSecondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-4 border-t border-borderDark/60">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="tech" size="xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}

          {/* Education Milestone Card */}
          {experience.education && (
            <Card className="bg-surface/60 border-borderDark p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surfaceLight border border-borderDark text-blue-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                      Education
                    </div>
                    <h3 className="text-lg font-bold text-textPrimary mt-0.5">
                      {experience.education.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-textSecondary mt-1">
                      <span className="text-textPrimary">{experience.education.institution}</span>
                      {experience.education.location && (
                        <>
                          <span className="text-borderDark">•</span>
                          <span className="text-textMuted flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {experience.education.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0 self-start">
                  <span className="text-xs font-mono text-textMuted bg-surfaceLight px-2.5 py-1 rounded-full border border-borderDark">
                    {experience.education.period}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 font-semibold">
                    {experience.education.grade}
                  </span>
                </div>
              </div>

              <p className="text-sm text-textSecondary leading-relaxed">
                {experience.education.description}
              </p>
            </Card>
          )}
        </div>

      </div>
    </section>
  );
}
