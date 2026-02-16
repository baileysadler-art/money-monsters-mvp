'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button3D from '../ui/Button3D';
import XPBadge from '../ui/XPBadge';
import Confetti from '../ui/Confetti';
import Mascot from '../mascot/Mascot';

interface LessonCompleteProps {
  xpEarned: number;
  correctAnswers: number;
  wrongAnswers: number;
  trackId: string;
}

export default function LessonComplete({ xpEarned, correctAnswers, wrongAnswers, trackId }: LessonCompleteProps) {
  const router = useRouter();
  const totalQuestions = correctAnswers + wrongAnswers;
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 100;
  const isPerfect = wrongAnswers === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-full px-6 text-center"
      style={{ background: 'linear-gradient(180deg, #E6F9D4 0%, #FFFFFF 40%)' }}
    >
      <Confetti show={true} />

      <Mascot expression={isPerfect ? 'excited' : 'happy'} size={120} className="mb-4" />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.3 }}
        className="text-3xl font-extrabold text-text-primary mb-2"
      >
        {isPerfect ? 'Perfect!' : 'Lesson Complete!'}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-text-secondary font-semibold mb-6"
      >
        {isPerfect ? 'No mistakes — amazing!' : 'Great work, keep it up!'}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-xs space-y-3 mb-8"
      >
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-surface-border/50 shadow-card">
          <span className="font-bold text-text-secondary">XP Earned</span>
          <XPBadge amount={xpEarned} animate={false} />
        </div>

        <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-surface-border/50 shadow-card">
          <span className="font-bold text-text-secondary">Accuracy</span>
          <span className={`font-bold text-lg ${accuracy >= 80 ? 'text-brand-green' : 'text-brand-orange'}`}>
            {accuracy}%
          </span>
        </div>

        <div className="flex gap-3">
          <div className="flex-1 bg-brand-green/10 rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-brand-green">{correctAnswers}</p>
            <p className="text-xs font-bold text-brand-green">CORRECT</p>
          </div>
          <div className="flex-1 bg-brand-red/10 rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-brand-red">{wrongAnswers}</p>
            <p className="text-xs font-bold text-brand-red">WRONG</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-xs space-y-3"
      >
        <Button3D fullWidth variant="green" onClick={() => router.push(`/learn/${trackId}`)}>
          Continue
        </Button3D>
        <Button3D fullWidth variant="gray" size="sm" onClick={() => router.push('/')}>
          Back to Home
        </Button3D>
      </motion.div>
    </motion.div>
  );
}
