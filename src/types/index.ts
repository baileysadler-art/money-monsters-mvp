export type Difficulty = 'easy' | 'medium' | 'hard';

export interface UserProfile {
  name: string;
  avatar: string;
  createdAt: string;
}

export interface UserState {
  profile: UserProfile;
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  streakFreezes: number;
  hearts: number;
  heartsLastLost: string | null;
  difficulty: Difficulty;
  achievements: string[];
  dailyChallengeCompleted: string | null;
}

export type TrackId = 'money-basics' | 'saving-budgeting' | 'earning-money' | 'smart-spending' | 'investing';

export interface Track {
  id: TrackId;
  name: string;
  description: string;
  icon: string;
  color: string;
  colorDark: string;
  lessonCount: number;
}

export type LessonStatus = 'locked' | 'unlocked' | 'completed';

export interface LessonNode {
  id: string;
  trackId: TrackId;
  index: number;
  title: string;
  description: string;
}

export type QuizType = 'multiple-choice' | 'true-false' | 'tap-match' | 'fill-blank';

export interface QuizOption {
  id: string;
  text: string;
}

export interface DifficultyVariant {
  question: string;
  options?: QuizOption[];
  correctAnswer?: string;
  matchPairs?: { left: string; right: string }[];
  explanation?: string;
}

export interface QuizScreen {
  type: QuizType;
  variants: Record<Difficulty, DifficultyVariant>;
}

export interface ContentScreen {
  type: 'content';
  title: string;
  body: string;
  illustration?: string;
}

export type LessonScreen = ContentScreen | QuizScreen;

export interface Lesson {
  id: string;
  trackId: TrackId;
  index: number;
  title: string;
  description: string;
  screens: LessonScreen[];
  xpReward: number;
}

export interface LessonProgress {
  lessonId: string;
  trackId: TrackId;
  completed: boolean;
  bestScore: number;
  completedAt: string | null;
}

export interface TrackProgress {
  trackId: TrackId;
  lessonsCompleted: number;
  totalLessons: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: (state: UserState, progress: Record<string, LessonProgress>) => boolean;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  isUser?: boolean;
}

export interface LessonSession {
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

export type AvatarOption = {
  id: string;
  emoji: string;
  label: string;
};
