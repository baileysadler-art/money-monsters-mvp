'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useProgressStore } from '../../stores/useProgressStore';
import { TRACKS } from '../../lib/constants';
import ProgressBar from '../ui/ProgressBar';

export default function ContinueLearning() {
  const router = useRouter();
  const completedLessons = useProgressStore((s) => s.completedLessons);
  const getTrackProgress = useProgressStore((s) => s.getTrackProgress);

  // Find the first track that has progress but isn't complete
  const activeTrack = TRACKS.find((track) => {
    const progress = getTrackProgress(track.id);
    return progress.completed > 0 && progress.completed < progress.total;
  }) || TRACKS[0];

  const progress = getTrackProgress(activeTrack.id);
  const nextLessonIndex = completedLessons.filter((id) => id.startsWith(activeTrack.id)).length;
  const nextLessonId = `${activeTrack.id}-${nextLessonIndex}`;
  const percent = (progress.completed / progress.total) * 100;

  return (
    <div className="px-5">
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => router.push(`/lesson/${nextLessonId}`)}
        className="w-full bg-white rounded-3xl p-5 shadow-card border border-surface-border/40 text-left hover:shadow-card-hover transition-shadow"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${activeTrack.color}20` }}
            >
              {activeTrack.icon}
            </div>
            <div>
              <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wide">
                Continue Learning
              </p>
              <p className="font-bold text-text-primary text-sm">{activeTrack.name}</p>
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: activeTrack.color }}
          >
            <ArrowRight size={18} className="text-white" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ProgressBar progress={percent} color={activeTrack.color} height={10} className="flex-1" />
          <span className="text-xs font-bold text-text-secondary">
            {progress.completed}/{progress.total}
          </span>
        </div>
      </motion.button>
    </div>
  );
}
