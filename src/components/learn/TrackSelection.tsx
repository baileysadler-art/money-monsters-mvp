'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { TRACKS } from '../../lib/constants';
import { useProgressStore } from '../../stores/useProgressStore';
import { useHydration } from '../../lib/useHydration';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import DifficultySelector from './DifficultySelector';

export default function TrackSelection() {
  const router = useRouter();
  const hydrated = useHydration();
  const getTrackProgress = useProgressStore((s) => s.getTrackProgress);

  if (!hydrated) return null;

  return (
    <div className="py-6 px-5 space-y-5 bg-gradient-warm min-h-full">
      <div>
        <h1 className="text-2xl font-extrabold text-text-primary mb-1">Learn</h1>
        <p className="text-sm text-text-secondary font-semibold">Choose a learning track</p>
      </div>

      <DifficultySelector />

      <div className="space-y-3">
        {TRACKS.map((track, index) => {
          const progress = getTrackProgress(track.id);
          const percent = progress.total > 0
            ? (progress.completed / progress.total) * 100
            : 0;
          const isComplete = progress.completed === progress.total && progress.total > 0;

          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card variant="colored" colorTint={track.color} onClick={() => router.push(`/learn/${track.id}`)}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${track.color}20` }}
                  >
                    {track.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-text-primary text-sm">{track.name}</p>
                      {isComplete && <span className="text-sm">✅</span>}
                    </div>
                    <p className="text-xs text-text-secondary mt-0.5">{track.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <ProgressBar
                        progress={percent}
                        color={track.color}
                        height={8}
                        className="flex-1"
                      />
                      <span className="text-xs font-bold text-text-secondary whitespace-nowrap">
                        {progress.completed}/{progress.total}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="h-4" />
    </div>
  );
}
