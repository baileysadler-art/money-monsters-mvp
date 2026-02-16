import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LessonProgress, TrackId } from '../types';
import { TRACKS } from '../lib/constants';

interface ProgressState {
  lessonProgress: Record<string, LessonProgress>;
  completedLessons: string[];
}

interface ProgressActions {
  completeLesson: (lessonId: string, trackId: TrackId, score: number) => void;
  getLessonStatus: (lessonId: string, trackId: TrackId, index: number) => 'locked' | 'unlocked' | 'completed';
  getTrackProgress: (trackId: TrackId) => { completed: number; total: number };
  resetToDemo: () => void;
}

function getDemoProgress(): ProgressState {
  const demoCompleted = ['money-basics-0', 'money-basics-1', 'money-basics-2', 'saving-budgeting-0'];
  const lessonProgress: Record<string, LessonProgress> = {};

  demoCompleted.forEach((id) => {
    const trackId = id.startsWith('saving') ? 'saving-budgeting' : 'money-basics';
    lessonProgress[id] = {
      lessonId: id,
      trackId: trackId as TrackId,
      completed: true,
      bestScore: 85 + Math.floor(Math.random() * 16),
      completedAt: new Date(Date.now() - Math.random() * 5 * 86400000).toISOString(),
    };
  });

  return {
    lessonProgress,
    completedLessons: demoCompleted,
  };
}

export const useProgressStore = create<ProgressState & ProgressActions>()(
  persist(
    (set, get) => ({
      ...getDemoProgress(),

      completeLesson: (lessonId, trackId, score) => set((state) => {
        const existing = state.lessonProgress[lessonId];
        const newProgress: LessonProgress = {
          lessonId,
          trackId,
          completed: true,
          bestScore: existing ? Math.max(existing.bestScore, score) : score,
          completedAt: new Date().toISOString(),
        };

        return {
          lessonProgress: { ...state.lessonProgress, [lessonId]: newProgress },
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        };
      }),

      getLessonStatus: (lessonId, trackId, index) => {
        const state = get();
        if (state.completedLessons.includes(lessonId)) return 'completed';
        if (index === 0) return 'unlocked';

        const prevId = `${trackId}-${index - 1}`;
        if (state.completedLessons.includes(prevId)) return 'unlocked';

        return 'locked';
      },

      getTrackProgress: (trackId) => {
        const state = get();
        const track = TRACKS.find((t) => t.id === trackId);
        if (!track) return { completed: 0, total: 0 };

        const completed = state.completedLessons.filter((id) =>
          id.startsWith(trackId)
        ).length;

        return { completed, total: track.lessonCount };
      },

      resetToDemo: () => set(getDemoProgress()),
    }),
    {
      name: 'money-monsters-progress',
    }
  )
);
