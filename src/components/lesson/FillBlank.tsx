'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DifficultyVariant } from '../../types';
import Mascot from '../mascot/Mascot';

interface FillBlankProps {
  variant: DifficultyVariant;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function FillBlank({ variant, onCorrect, onWrong }: FillBlankProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionId: string) => {
    if (showResult) return;
    setSelected(optionId);
    setShowResult(true);

    const isCorrect = optionId === variant.correctAnswer;
    setTimeout(() => {
      if (isCorrect) onCorrect();
      else onWrong();
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="flex flex-col h-full px-6 py-6"
    >
      <div className="flex items-start gap-3 mb-6">
        <Mascot expression={showResult && selected === variant.correctAnswer ? 'excited' : 'thinking'} size={60} />
        <div className="flex-1 bg-surface-dim rounded-2xl rounded-tl-md p-3.5">
          <p className="text-sm font-bold text-text-primary">{variant.question}</p>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-3">
          Choose the correct answer:
        </p>
        <div className="flex flex-wrap gap-2.5">
          {variant.options?.map((option) => {
            const isSelected = selected === option.id;
            const isCorrectOption = option.id === variant.correctAnswer;
            let bgColor = 'bg-white border-surface-border/60';

            if (showResult) {
              if (isCorrectOption) bgColor = 'bg-brand-green-light border-brand-green';
              else if (isSelected) bgColor = 'bg-brand-red-light border-brand-red animate-shake';
            }

            return (
              <motion.button
                key={option.id}
                whileTap={!showResult ? { scale: 0.95 } : undefined}
                onClick={() => handleSelect(option.id)}
                className={`px-4 py-2.5 rounded-xl border-2 font-bold text-sm transition-colors ${bgColor}`}
              >
                {option.text}
              </motion.button>
            );
          })}
        </div>
      </div>

      {showResult && variant.explanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3.5 rounded-2xl text-sm font-semibold ${
            selected === variant.correctAnswer
              ? 'bg-brand-green-light text-brand-green-dark'
              : 'bg-brand-red-light text-brand-red-dark'
          }`}
        >
          {variant.explanation}
        </motion.div>
      )}
    </motion.div>
  );
}
