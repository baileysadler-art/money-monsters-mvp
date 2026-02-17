import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState, Difficulty } from '../types';
import { LEVELS, MAX_HEARTS, HEART_REGEN_MINUTES } from '../lib/constants';

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

function calculateLevel(xp: number): number {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) return LEVELS[i].level;
  }
  return 1;
}

interface UserActions {
  addXP: (amount: number) => void;
  loseHeart: () => void;
  regenerateHearts: () => void;
  updateStreak: () => void;
  useStreakFreeze: () => void;
  setDifficulty: (d: Difficulty) => void;
  setName: (name: string) => void;
  setAvatar: (avatar: string) => void;
  unlockAchievement: (id: string) => void;
  completeDailyChallenge: () => void;
  resetToDemo: () => void;
}

function getDemoState(): UserState {
  return {
    profile: { name: 'Bailey', avatar: '🐲', createdAt: getTodayStr() },
    xp: 245,
    level: 3,
    streak: 5,
    lastActiveDate: getTodayStr(),
    streakFreezes: 2,
    hearts: 4,
    heartsLastLost: null,
    difficulty: 'medium',
    achievements: ['first-lesson', 'streak-3', 'xp-100'],
    dailyChallengeCompleted: null,
  };
}

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set) => ({
      ...getDemoState(),

      addXP: (amount) => set((state) => {
        const newXP = state.xp + amount;
        return { xp: newXP, level: calculateLevel(newXP) };
      }),

      loseHeart: () => set((state) => ({
        hearts: Math.max(0, state.hearts - 1),
        heartsLastLost: new Date().toISOString(),
      })),

      regenerateHearts: () => set((state) => {
        if (state.hearts >= MAX_HEARTS) return state;
        if (!state.heartsLastLost) return { hearts: MAX_HEARTS };

        const elapsed = Date.now() - new Date(state.heartsLastLost).getTime();
        const regenCount = Math.floor(elapsed / (HEART_REGEN_MINUTES * 60 * 1000));
        const newHearts = Math.min(MAX_HEARTS, state.hearts + regenCount);

        return {
          hearts: newHearts,
          heartsLastLost: newHearts >= MAX_HEARTS ? null : state.heartsLastLost,
        };
      }),

      updateStreak: () => set((state) => {
        const today = getTodayStr();
        if (state.lastActiveDate === today) return state;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (state.lastActiveDate === yesterdayStr) {
          return { streak: state.streak + 1, lastActiveDate: today };
        }

        if (state.lastActiveDate && state.lastActiveDate !== today) {
          if (state.streakFreezes > 0) {
            return {
              streak: state.streak,
              lastActiveDate: today,
              streakFreezes: state.streakFreezes - 1,
            };
          }
          return { streak: 1, lastActiveDate: today };
        }

        return { streak: 1, lastActiveDate: today };
      }),

      useStreakFreeze: () => set((state) => ({
        streakFreezes: Math.max(0, state.streakFreezes - 1),
      })),

      setDifficulty: (d) => set({ difficulty: d }),
      setName: (name) => set((state) => ({
        profile: { ...state.profile, name },
      })),
      setAvatar: (avatar) => set((state) => ({
        profile: { ...state.profile, avatar },
      })),

      unlockAchievement: (id) => set((state) => ({
        achievements: state.achievements.includes(id)
          ? state.achievements
          : [...state.achievements, id],
      })),

      completeDailyChallenge: () => set({ dailyChallengeCompleted: getTodayStr() }),

      resetToDemo: () => set(getDemoState()),
    }),
    {
      name: 'money-monsters-user',
    }
  )
);
