import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-surface rounded-2xl border border-borderDark p-6 
        transition-all duration-300
        ${hoverEffect ? 'hover:border-accent/50 hover:bg-surfaceLight/80 hover:shadow-card-dark' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
