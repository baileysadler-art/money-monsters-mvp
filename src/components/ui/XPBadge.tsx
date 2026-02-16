'use client';

import { motion } from 'framer-motion';

interface XPBadgeProps {
  amount: number;
  animate?: boolean;
}

export default function XPBadge({ amount, animate = true }: XPBadgeProps) {
  return (
    <motion.div
      initial={animate ? { scale: 0 } : false}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className="inline-flex items-center gap-1 bg-brand-orange-light px-3 py-1.5 rounded-full"
    >
      <span className="text-sm">⚡</span>
      <span className="font-bold text-brand-orange-dark text-sm">+{amount} XP</span>
    </motion.div>
  );
}
