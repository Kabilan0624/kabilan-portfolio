import React from 'react';

export default function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
  icon: Icon,
}) {
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[10px] gap-1",
    sm: "px-2.5 py-1 text-xs gap-1.5",
    md: "px-3 py-1.5 text-sm gap-2",
  };

  const variantStyles = {
    accent: "bg-accentMuted text-accent border border-accent/30 font-medium",
    neutral: "bg-surfaceLight text-textSecondary border border-borderDark",
    tech: "bg-bgDark/80 text-textSecondary border border-borderDark font-mono text-[11px]",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
  };

  return (
    <span className={`inline-flex items-center rounded-lg font-medium transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
