import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest text-accent uppercase ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-textSecondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
