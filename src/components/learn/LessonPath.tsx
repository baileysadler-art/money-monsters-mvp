'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Check, Play } from 'lucide-react';
import { useProgressStore } from '../../stores/useProgressStore';
import { useHydration } from '../../lib/useHydration';
import { TRACKS } from '../../lib/constants';
import { TrackId } from '../../types';
import { getLessonsByTrack } from '../../data/lessons';

interface LessonPathProps {
  trackId: TrackId;
}

export default function LessonPath({ trackId }: LessonPathProps) {
  const router = useRouter();
  const hydrated = useHydration();
  const getLessonStatus = useProgressStore((s) => s.getLessonStatus);

  const track = TRACKS.find((t) => t.id === trackId);
  const lessons = getLessonsByTrack(trackId);

  if (!hydrated || !track) return null;

  return (
    <div className="py-6 px-5 bg-gradient-warm min-h-full">
      <button
        onClick={() => router.push('/learn')}
        className="text-sm font-bold text-text-secondary mb-4 hover:text-text-primary transition-colors"
      >
        ← Back to Tracks
      </button>

      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${track.color}20` }}
        >
          {track.icon}
        </div>
        <div>
          <h1 className="text-xl font-extrabold text-text-primary">{track.name}</h1>
          <p className="text-xs font-semibold text-text-secondary">{track.description}</p>
        </div>
      </div>

      {/* Lesson nodes */}
      <div className="relative flex flex-col items-center gap-4">
        {lessons.map((lesson, index) => {
          const status = getLessonStatus(lesson.id, trackId, index);
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Node circle */}
              <button
                onClick={() => status !== 'locked' ? router.push(`/lesson/${lesson.id}`) : undefined}
                disabled={status === 'locked'}
                className={`
                  w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0
                  border-4 transition-all
                  ${status === 'completed'
                    ? 'border-brand-green bg-brand-green-light'
                    : status === 'unlocked'
                      ? 'border-brand-blue bg-brand-blue-light animate-pulse-glow cursor-pointer'
                      : 'border-surface-border bg-surface-dim opacity-50'
                  }
                `}
                style={status !== 'locked' ? { borderColor: track.color } : undefined}
              >
                {status === 'completed' ? (
                  <Check size={28} className="text-brand-green" strokeWidth={3} />
                ) : status === 'unlocked' ? (
                  <Play size={28} style={{ color: track.color }} strokeWidth={2.5} />
                ) : (
                  <Lock size={22} className="text-text-secondary/40" />
                )}
              </button>

              {/* Lesson info */}
              <div className={`flex-1 ${status === 'locked' ? 'opacity-40' : ''}`}>
                <p className="font-bold text-sm text-text-primary">{lesson.title}</p>
                <p className="text-xs text-text-secondary mt-0.5">{lesson.description}</p>
                {status === 'completed' && (
                  <span className="text-[10px] font-bold text-brand-green uppercase">Completed</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
