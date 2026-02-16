'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
  className?: string;
}

export default function ProgressBar({
  progress,
  color = '#58CC02',
  height = 14,
  className = '',
}: ProgressBarProps) {
  return (
    <div
      className={`w-full rounded-full bg-surface-dim overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-full rounded-full relative"
        style={{ backgroundColor: color }}
      >
        {/* Glossy gel highlight */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 50%)',
          }}
        />
      </motion.div>
    </div>
  );
}
