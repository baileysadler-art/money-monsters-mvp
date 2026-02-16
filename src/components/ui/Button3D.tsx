'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'gray' | 'yellow';
type ButtonSize = 'sm' | 'md' | 'lg';

interface Button3DProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  green: 'bg-brand-green border-brand-green-dark text-white',
  blue: 'bg-brand-blue border-brand-blue-dark text-white',
  orange: 'bg-brand-orange border-brand-orange-dark text-white',
  purple: 'bg-brand-purple border-brand-purple-dark text-white',
  red: 'bg-brand-red border-brand-red-dark text-white',
  yellow: 'bg-brand-yellow border-brand-yellow-dark text-text-primary',
  gray: 'bg-surface-dim border-surface-border text-text-secondary',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-5 text-lg',
};

export default function Button3D({
  children,
  variant = 'green',
  size = 'md',
  onClick,
  fullWidth = false,
  disabled = false,
}: Button3DProps) {
  return (
    <motion.button
      whileTap={disabled ? undefined : { y: 3 }}
      onClick={disabled ? undefined : onClick}
      className={`
        btn-3d rounded-2xl font-bold border-b-4
        ${VARIANT_STYLES[variant]}
        ${SIZE_STYLES[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:border-b-2 active:translate-y-[2px]'}
        transition-all
      `}
    >
      {children}
    </motion.button>
  );
}
