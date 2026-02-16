'use client';

import { motion } from 'framer-motion';
import { useUserStore } from '../../stores/useUserStore';
import Button3D from '../ui/Button3D';

export default function DailyChallenge() {
  const dailyChallengeCompleted = useUserStore((s) => s.dailyChallengeCompleted);
  const completeDailyChallenge = useUserStore((s) => s.completeDailyChallenge);
  const addXP = useUserStore((s) => s.addXP);

  const today = new Date().toISOString().split('T')[0];
  const isCompleted = dailyChallengeCompleted === today;

  const handleComplete = () => {
    if (!isCompleted) {
      addXP(15);
      completeDailyChallenge();
    }
  };

  return (
    <div className="px-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-brand-yellow-light to-brand-orange-light rounded-3xl p-5 border border-brand-yellow/30"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl animate-flame-flicker">🏆</span>
          <h3 className="font-extrabold text-text-primary text-sm">Daily Challenge</h3>
        </div>
        <p className="text-xs font-semibold text-text-secondary mb-3">
          {isCompleted
            ? "Great work! You've completed today's challenge."
            : "Quick quiz: What's the difference between saving and investing?"
          }
        </p>
        {isCompleted ? (
          <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
            <span>✅</span> Completed — +15 XP earned!
          </div>
        ) : (
          <Button3D variant="yellow" size="sm" onClick={handleComplete}>
            Take Challenge — Earn 15 XP
          </Button3D>
        )}
      </motion.div>
    </div>
  );
}
