'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { DifficultyVariant } from '../../types';
import Mascot from '../mascot/Mascot';

interface TapMatchProps {
  variant: DifficultyVariant;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function TapMatch({ variant, onCorrect, onWrong }: TapMatchProps) {
  const pairs = variant.matchPairs || [];
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ left: number; right: number } | null>(null);

  // Shuffle the right column once
  const [shuffledRight] = useState(() => {
    const indices = pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  const handleLeftTap = (index: number) => {
    if (matched.has(index)) return;
    setSelectedLeft(index);
    setWrongPair(null);
  };

  const handleRightTap = useCallback((rightOriginalIndex: number) => {
    if (selectedLeft === null || matched.has(rightOriginalIndex)) return;

    if (selectedLeft === rightOriginalIndex) {
      // Correct match
      const newMatched = new Set(matched);
      newMatched.add(rightOriginalIndex);
      setMatched(newMatched);
      setSelectedLeft(null);

      if (newMatched.size === pairs.length) {
        setTimeout(onCorrect, 500);
      }
    } else {
      // Wrong match
      setWrongPair({ left: selectedLeft, right: rightOriginalIndex });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
        onWrong();
      }, 800);
    }
  }, [selectedLeft, matched, pairs.length, onCorrect, onWrong]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="flex flex-col h-full px-6 py-6"
    >
      <div className="flex items-start gap-3 mb-6">
        <Mascot expression="thinking" size={60} />
        <div className="flex-1 bg-surface-dim rounded-2xl rounded-tl-md p-3.5">
          <p className="text-sm font-bold text-text-primary">{variant.question}</p>
        </div>
      </div>

      <div className="flex-1 flex gap-3">
        {/* Left column */}
        <div className="flex-1 space-y-2.5">
          {pairs.map((pair, i) => {
            const isMatched = matched.has(i);
            const isSelected = selectedLeft === i;
            const isWrong = wrongPair?.left === i;

            return (
              <motion.button
                key={`left-${i}`}
                whileTap={!isMatched ? { scale: 0.96 } : undefined}
                onClick={() => handleLeftTap(i)}
                className={`w-full p-3 rounded-xl border-2 text-xs font-bold text-center transition-colors ${
                  isMatched
                    ? 'bg-brand-green-light border-brand-green text-brand-green-dark opacity-60'
                    : isWrong
                      ? 'bg-brand-red-light border-brand-red animate-shake'
                      : isSelected
                        ? 'bg-brand-blue-light border-brand-blue text-brand-blue-dark'
                        : 'bg-white border-surface-border/60 text-text-primary'
                }`}
              >
                {pair.left}
              </motion.button>
            );
          })}
        </div>

        {/* Right column (shuffled) */}
        <div className="flex-1 space-y-2.5">
          {shuffledRight.map((origIdx, displayIdx) => {
            const isMatched = matched.has(origIdx);
            const isWrong = wrongPair?.right === origIdx;

            return (
              <motion.button
                key={`right-${displayIdx}`}
                whileTap={!isMatched ? { scale: 0.96 } : undefined}
                onClick={() => handleRightTap(origIdx)}
                className={`w-full p-3 rounded-xl border-2 text-xs font-bold text-center transition-colors ${
                  isMatched
                    ? 'bg-brand-green-light border-brand-green text-brand-green-dark opacity-60'
                    : isWrong
                      ? 'bg-brand-red-light border-brand-red animate-shake'
                      : 'bg-white border-surface-border/60 text-text-primary'
                }`}
              >
                {pairs[origIdx].right}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
