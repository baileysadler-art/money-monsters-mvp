'use client';

import { useEffect } from 'react';
import { useUserStore } from '../../stores/useUserStore';
import { useHydration } from '../../lib/useHydration';
import MascotGreeting from './MascotGreeting';
import StatCards from './StatCards';
import ContinueLearning from './ContinueLearning';
import DailyChallenge from './DailyChallenge';
import { motion } from 'framer-motion';

export default function HomeScreen() {
  const hydrated = useHydration();
  const updateStreak = useUserStore((s) => s.updateStreak);
  const regenerateHearts = useUserStore((s) => s.regenerateHearts);
  const streak = useUserStore((s) => s.streak);

  useEffect(() => {
    if (hydrated) {
      updateStreak();
      regenerateHearts();
    }
  }, [hydrated, updateStreak, regenerateHearts]);

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center h-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="text-4xl"
        >
          👾
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-6 space-y-6 bg-gradient-warm min-h-full">
      {/* Header */}
      <div className="px-5 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-text-primary md:hidden">
          <span className="text-brand-green">Money</span>
          {' '}
          <span className="text-brand-purple">Monsters</span>
        </h1>
        <h1 className="text-2xl font-extrabold text-text-primary hidden md:block">
          Welcome back! 👋
        </h1>
        <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-card border border-surface-border/40">
          <span className="text-base animate-flame-flicker">🔥</span>
          <span className="font-extrabold text-brand-orange text-sm">{streak}</span>
        </div>
      </div>

      <MascotGreeting />
      <StatCards />
      <ContinueLearning />
      <DailyChallenge />

      <div className="h-4" />
    </div>
  );
}
