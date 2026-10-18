import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bgDark disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary: "bg-accent hover:bg-accentHover text-white shadow-glow-orange-sm hover:shadow-glow-orange active:scale-[0.98]",
    secondary: "bg-surface hover:bg-surfaceLight text-textPrimary border border-borderDark hover:border-accent active:scale-[0.98]",
    outline: "bg-transparent text-accent border border-accent/40 hover:border-accent hover:bg-accent/10 active:scale-[0.98]",
    ghost: "bg-transparent text-textSecondary hover:text-textPrimary hover:bg-surface active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
