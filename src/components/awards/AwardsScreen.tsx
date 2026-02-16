'use client';

import { motion } from 'framer-motion';
import { useUserStore } from '../../stores/useUserStore';
import { useHydration } from '../../lib/useHydration';
import { ACHIEVEMENTS } from '../../data/achievements';
import ProgressBar from '../ui/ProgressBar';

export default function AwardsScreen() {
  const hydrated = useHydration();
  const achievements = useUserStore((s) => s.achievements);
  const unlockedCount = achievements.length;
  const totalCount = ACHIEVEMENTS.length;
  const percent = (unlockedCount / totalCount) * 100;

  if (!hydrated) return null;

  return (
    <div className="py-6 px-5 bg-gradient-warm min-h-full">
      <h1 className="text-2xl font-extrabold text-text-primary mb-1">Awards</h1>
      <p className="text-sm text-text-secondary font-semibold mb-4">
        {unlockedCount} of {totalCount} achievements unlocked
      </p>

      <div className="mb-6 flex items-center gap-3">
        <ProgressBar progress={percent} color="#FFC800" height={12} className="flex-1" />
        <span className="text-sm font-bold text-brand-yellow-dark">{Math.round(percent)}%</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {ACHIEVEMENTS.map((achievement, index) => {
          const isUnlocked = achievements.includes(achievement.id);

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`flex flex-col items-center text-center p-3 rounded-2xl border transition-all ${
                isUnlocked
                  ? 'bg-white border-brand-yellow/40 shadow-card'
                  : 'bg-surface-dim border-surface-border/40 opacity-40'
              }`}
            >
              <div className={`text-3xl mb-1.5 ${isUnlocked ? '' : 'grayscale'}`}>
                {isUnlocked ? achievement.icon : '🔒'}
              </div>
              <p className="text-[10px] font-bold text-text-primary leading-tight">
                {achievement.name}
              </p>
              <p className="text-[9px] font-semibold text-text-secondary mt-0.5 leading-tight">
                {achievement.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
