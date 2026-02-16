import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-lesson',
    name: 'First Hatch',
    description: 'Complete your first lesson',
    icon: '🥚',
    requirement: (_, progress) =>
      Object.values(progress).some(p => p.completed),
  },
  {
    id: 'streak-3',
    name: 'On Fire!',
    description: 'Reach a 3-day streak',
    icon: '🔥',
    requirement: (state) => state.streak >= 3,
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Reach a 7-day streak',
    icon: '⚡',
    requirement: (state) => state.streak >= 7,
  },
  {
    id: 'streak-30',
    name: 'Monster Master',
    description: 'Reach a 30-day streak',
    icon: '👑',
    requirement: (state) => state.streak >= 30,
  },
  {
    id: 'xp-100',
    name: 'Century Club',
    description: 'Earn 100 XP',
    icon: '💯',
    requirement: (state) => state.xp >= 100,
  },
  {
    id: 'xp-500',
    name: 'XP Beast',
    description: 'Earn 500 XP',
    icon: '🏆',
    requirement: (state) => state.xp >= 500,
  },
  {
    id: 'xp-1000',
    name: 'XP Legend',
    description: 'Earn 1000 XP',
    icon: '🌟',
    requirement: (state) => state.xp >= 1000,
  },
  {
    id: 'track-complete-1',
    name: 'Track Tamer',
    description: 'Complete your first learning track',
    icon: '⭐',
    requirement: (_, progress) => {
      const trackCounts: Record<string, number> = {};
      const trackTotals: Record<string, number> = {
        'money-basics': 5,
        'saving-budgeting': 5,
        'earning-money': 3,
        'smart-spending': 3,
        'investing': 3,
      };
      Object.values(progress).forEach(p => {
        if (p.completed) {
          trackCounts[p.trackId] = (trackCounts[p.trackId] || 0) + 1;
        }
      });
      return Object.entries(trackCounts).some(
        ([trackId, count]) => count >= (trackTotals[trackId] || 0)
      );
    },
  },
  {
    id: 'perfect-lesson',
    name: 'Flawless Monster',
    description: 'Complete a lesson with no mistakes',
    icon: '💎',
    requirement: (_, progress) =>
      Object.values(progress).some(p => p.completed && p.bestScore === 100),
  },
  {
    id: 'level-5',
    name: 'Halfway Hero',
    description: 'Reach level 5',
    icon: '🚀',
    requirement: (state) => state.level >= 5,
  },
  {
    id: 'level-10',
    name: 'Money Monster Master',
    description: 'Reach the highest level',
    icon: '🎓',
    requirement: (state) => state.level >= 10,
  },
  {
    id: 'five-lessons',
    name: 'Monster Trainer',
    description: 'Complete 5 lessons',
    icon: '📚',
    requirement: (_, progress) =>
      Object.values(progress).filter(p => p.completed).length >= 5,
  },
  {
    id: 'ten-lessons',
    name: 'Knowledge Beast',
    description: 'Complete 10 lessons',
    icon: '🧠',
    requirement: (_, progress) =>
      Object.values(progress).filter(p => p.completed).length >= 10,
  },
  {
    id: 'all-tracks-started',
    name: 'Explorer Monster',
    description: 'Start all 5 learning tracks',
    icon: '🗺️',
    requirement: (_, progress) => {
      const tracks = new Set(
        Object.values(progress).filter(p => p.completed).map(p => p.trackId)
      );
      return tracks.size >= 5;
    },
  },
  {
    id: 'daily-challenge',
    name: 'Daily Hero',
    description: 'Complete a daily challenge',
    icon: '🌈',
    requirement: (state) => state.dailyChallengeCompleted !== null,
  },
];
