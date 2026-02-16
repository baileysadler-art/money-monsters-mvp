import { create } from 'zustand';
import { TrackId } from '../types';

interface LessonStoreState {
  lessonId: string;
  trackId: TrackId;
  currentScreen: number;
  totalScreens: number;
  hearts: number;
  correctAnswers: number;
  wrongAnswers: number;
  xpEarned: number;
  isComplete: boolean;
}

interface LessonStoreActions {
  startLesson: (lessonId: string, trackId: TrackId, totalScreens: number, hearts: number) => void;
  nextScreen: () => void;
  recordCorrect: (xp: number) => void;
  recordWrong: () => void;
  completeLessonSession: () => void;
}

export const useLessonStore = create<LessonStoreState & LessonStoreActions>()((set) => ({
  lessonId: '',
  trackId: 'money-basics',
  currentScreen: 0,
  totalScreens: 0,
  hearts: 5,
  correctAnswers: 0,
  wrongAnswers: 0,
  xpEarned: 0,
  isComplete: false,

  startLesson: (lessonId, trackId, totalScreens, hearts) =>
    set({
      lessonId,
      trackId,
      currentScreen: 0,
      totalScreens,
      hearts,
      correctAnswers: 0,
      wrongAnswers: 0,
      xpEarned: 0,
      isComplete: false,
    }),

  nextScreen: () =>
    set((state) => ({ currentScreen: state.currentScreen + 1 })),

  recordCorrect: (xp) =>
    set((state) => ({
      correctAnswers: state.correctAnswers + 1,
      xpEarned: state.xpEarned + xp,
    })),

  recordWrong: () =>
    set((state) => ({
      wrongAnswers: state.wrongAnswers + 1,
      hearts: Math.max(0, state.hearts - 1),
    })),

  completeLessonSession: () => set({ isComplete: true }),
}));
