'use client';

import { motion } from 'framer-motion';
import { useUserStore } from '../../stores/useUserStore';
import { Difficulty } from '../../types';

const DIFFICULTIES: { value: Difficulty; label: string; icon: string }[] = [
  { value: 'easy', label: 'Easy', icon: '🌱' },
  { value: 'medium', label: 'Medium', icon: '🌿' },
  { value: 'hard', label: 'Hard', icon: '🌳' },
];

export default function DifficultySelector() {
  const difficulty = useUserStore((s) => s.difficulty);
  const setDifficulty = useUserStore((s) => s.setDifficulty);

  return (
    <div className="flex bg-surface-dim rounded-2xl p-1 relative">
      {DIFFICULTIES.map((d) => {
        const isActive = difficulty === d.value;
        return (
          <button
            key={d.value}
            onClick={() => setDifficulty(d.value)}
            className={`flex-1 relative z-10 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              isActive ? 'text-text-primary' : 'text-text-secondary'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="difficulty-bg"
                className="absolute inset-0 bg-white rounded-xl shadow-card"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{d.icon}</span>
            <span className="relative z-10">{d.label}</span>
          </button>
        );
      })}
    </div>
  );
}
