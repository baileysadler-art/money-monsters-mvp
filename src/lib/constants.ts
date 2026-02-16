import { Track, AvatarOption } from '../types';

export const XP_PER_LESSON = 20;
export const XP_BONUS_NO_MISTAKES = 5;
export const XP_DAILY_CHALLENGE = 15;
export const MAX_HEARTS = 5;
export const HEART_REGEN_MINUTES = 30;

export const LEVELS = [
  { level: 1, name: 'Baby Monster', xpRequired: 0 },
  { level: 2, name: 'Coin Cruncher', xpRequired: 50 },
  { level: 3, name: 'Penny Muncher', xpRequired: 120 },
  { level: 4, name: 'Budget Beast', xpRequired: 220 },
  { level: 5, name: 'Savings Creature', xpRequired: 350 },
  { level: 6, name: 'Money Muncher', xpRequired: 500 },
  { level: 7, name: 'Wealth Monster', xpRequired: 700 },
  { level: 8, name: 'Finance Fiend', xpRequired: 950 },
  { level: 9, name: 'Investing Beast', xpRequired: 1250 },
  { level: 10, name: 'Money Monster Master', xpRequired: 1600 },
];

export const TRACKS: Track[] = [
  {
    id: 'money-basics',
    name: 'Money Basics',
    description: 'Learn about coins, notes, and what money is!',
    icon: '💰',
    color: '#58CC02',
    colorDark: '#46a302',
    lessonCount: 5,
  },
  {
    id: 'saving-budgeting',
    name: "Saver Sam's Den",
    description: 'Discover how to save and plan your spending!',
    icon: '🏦',
    color: '#CE82FF',
    colorDark: '#b86ee6',
    lessonCount: 5,
  },
  {
    id: 'earning-money',
    name: 'Earning & Jobs',
    description: 'Find out different ways people earn money!',
    icon: '💼',
    color: '#1CB0F6',
    colorDark: '#1899d6',
    lessonCount: 3,
  },
  {
    id: 'smart-spending',
    name: "Budget Bear's Market",
    description: 'Learn to make wise choices with your money!',
    icon: '🛒',
    color: '#FF9600',
    colorDark: '#e08600',
    lessonCount: 3,
  },
  {
    id: 'investing',
    name: "Investor Ivy's Garden",
    description: 'Grow your money over time like magic!',
    icon: '📈',
    color: '#FF4B4B',
    colorDark: '#e04343',
    lessonCount: 3,
  },
];

export const AVATARS: AvatarOption[] = [
  { id: 'saver-sam', emoji: '👾', label: 'Saver Sam' },
  { id: 'budget-bear', emoji: '🐻', label: 'Budget Bear' },
  { id: 'investor-ivy', emoji: '🌿', label: 'Investor Ivy' },
  { id: 'coin-crunch', emoji: '🤑', label: 'Coin Crunch' },
  { id: 'penny-paws', emoji: '🐾', label: 'Penny Paws' },
  { id: 'cash-dragon', emoji: '🐲', label: 'Cash Dragon' },
  { id: 'vault-bot', emoji: '🤖', label: 'Vault Bot' },
  { id: 'gold-ghost', emoji: '👻', label: 'Gold Ghost' },
  { id: 'money-owl', emoji: '🦉', label: 'Money Owl' },
  { id: 'profit-panda', emoji: '🐼', label: 'Profit Panda' },
  { id: 'stellar-saver', emoji: '⭐', label: 'Stellar Saver' },
  { id: 'mega-monster', emoji: '👹', label: 'Mega Monster' },
];

export const MASCOT_GREETINGS = {
  morning: [
    "Good morning! Ready to feed your Money Monster?",
    "Rise and shine, money champion!",
    "Let's start the day with a money lesson!",
  ],
  afternoon: [
    "Hey there! Your Money Monster is hungry for knowledge!",
    "Great afternoon for growing your money skills!",
    "Keep that streak going, monster trainer!",
  ],
  evening: [
    "Evening study time! You're a dedicated trainer!",
    "One more lesson to level up your monster?",
    "Great job learning today, money legend!",
  ],
};

export const TAB_ROUTES = [
  { path: '/', label: 'Home', icon: 'home' as const },
  { path: '/learn', label: 'Learn', icon: 'book-open' as const },
  { path: '/awards', label: 'Awards', icon: 'trophy' as const },
  { path: '/ranks', label: 'Ranks', icon: 'bar-chart-3' as const },
  { path: '/profile', label: 'Profile', icon: 'user' as const },
];
