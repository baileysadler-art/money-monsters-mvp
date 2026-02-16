'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'colored' | 'gradient';
  colorTint?: string;
  onClick?: () => void;
  className?: string;
}

export default function Card({
  children,
  variant = 'default',
  colorTint,
  onClick,
  className = '',
}: CardProps) {
  const baseClasses = 'rounded-3xl p-5 shadow-card border border-surface-border/60 transition-shadow';

  const variantClasses = {
    default: 'bg-white',
    colored: '',
    gradient: 'bg-gradient-card',
  };

  const style = variant === 'colored' && colorTint
    ? { backgroundColor: `${colorTint}08`, borderColor: `${colorTint}20` }
    : undefined;

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      onClick={onClick}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      style={style}
      className={`${baseClasses} ${variantClasses[variant]} ${onClick ? 'cursor-pointer hover:shadow-card-hover' : ''} ${className} text-left w-full`}
    >
      {children}
    </Component>
  );
}
