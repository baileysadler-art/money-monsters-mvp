'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getLessonById } from '../../data/lessons';
import { useUserStore } from '../../stores/useUserStore';
import { useProgressStore } from '../../stores/useProgressStore';
import { useLessonStore } from '../../stores/useLessonStore';
import { useHydration } from '../../lib/useHydration';
import { XP_PER_LESSON, XP_BONUS_NO_MISTAKES } from '../../lib/constants';
import { QuizScreen, ContentScreen as ContentScreenType, TrackId } from '../../types';
import ProgressBar from '../ui/ProgressBar';
import HeartsDisplay from './HeartsDisplay';
import ContentScreen from './ContentScreen';
import MultipleChoice from './MultipleChoice';
import TrueFalse from './TrueFalse';
import TapMatch from './TapMatch';
import FillBlank from './FillBlank';
import LessonComplete from './LessonComplete';
import Mascot from '../mascot/Mascot';
import Button3D from '../ui/Button3D';

interface LessonPlayerProps {
  lessonId: string;
}

export default function LessonPlayer({ lessonId }: LessonPlayerProps) {
  const router = useRouter();
  const hydrated = useHydration();
  const lesson = getLessonById(lessonId);

  const difficulty = useUserStore((s) => s.difficulty);
  const hearts = useUserStore((s) => s.hearts);
  const addXP = useUserStore((s) => s.addXP);
  const loseHeart = useUserStore((s) => s.loseHeart);
  const updateStreak = useUserStore((s) => s.updateStreak);
  const completeLesson = useProgressStore((s) => s.completeLesson);

  const session = useLessonStore();
  const startLesson = useLessonStore((s) => s.startLesson);
  const nextScreen = useLessonStore((s) => s.nextScreen);
  const recordCorrect = useLessonStore((s) => s.recordCorrect);
  const recordWrong = useLessonStore((s) => s.recordWrong);
  const completeLessonSession = useLessonStore((s) => s.completeLessonSession);

  const [showOutOfHearts, setShowOutOfHearts] = useState(false);
  const [screenKey, setScreenKey] = useState(0);

  useEffect(() => {
    if (hydrated && lesson) {
      startLesson(lessonId, lesson.trackId, lesson.screens.length, hearts);
    }
  }, [hydrated, lessonId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!hydrated || !lesson) {
    return (
      <div className="flex items-center justify-center h-full">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="text-4xl">
          🪙
        </motion.div>
      </div>
    );
  }

  const currentScreen = lesson.screens[session.currentScreen];
  const progress = ((session.currentScreen) / session.totalScreens) * 100;

  const handleCorrect = () => {
    const quizCount = lesson.screens.filter(s => s.type !== 'content').length;
    const xpForQuestion = quizCount > 0 ? Math.round(XP_PER_LESSON / quizCount) : XP_PER_LESSON;
    recordCorrect(xpForQuestion);
    advanceScreen();
  };

  const handleWrong = () => {
    recordWrong();
    loseHeart();

    if (session.hearts - 1 <= 0) {
      setShowOutOfHearts(true);
      return;
    }

    advanceScreen();
  };

  const advanceScreen = () => {
    if (session.currentScreen >= session.totalScreens - 1) {
      const bonusXP = session.wrongAnswers === 0 ? XP_BONUS_NO_MISTAKES : 0;
      const totalXP = session.xpEarned + bonusXP;
      addXP(totalXP);
      updateStreak();

      const totalQuestions = session.correctAnswers + session.wrongAnswers + 1;
      const score = Math.round(((session.correctAnswers + 1) / totalQuestions) * 100);
      completeLesson(lessonId, lesson.trackId as TrackId, score);
      completeLessonSession();
    } else {
      nextScreen();
      setScreenKey(k => k + 1);
    }
  };

  if (showOutOfHearts) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center">
        <Mascot expression="sad" size={120} className="mb-4" />
        <h2 className="text-2xl font-extrabold text-text-primary mb-2">Out of Hearts!</h2>
        <p className="text-text-secondary font-semibold mb-8">
          Hearts regenerate over time. Come back soon!
        </p>
        <Button3D variant="blue" onClick={() => router.push(`/learn/${lesson.trackId}`)}>
          Back to Track
        </Button3D>
      </div>
    );
  }

  if (session.isComplete) {
    return (
      <LessonComplete
        xpEarned={session.xpEarned}
        correctAnswers={session.correctAnswers}
        wrongAnswers={session.wrongAnswers}
        trackId={lesson.trackId}
      />
    );
  }

  const renderScreen = () => {
    if (!currentScreen) return null;

    if (currentScreen.type === 'content') {
      return (
        <ContentScreen
          key={screenKey}
          screen={currentScreen as ContentScreenType}
          onContinue={advanceScreen}
        />
      );
    }

    const quizScreen = currentScreen as QuizScreen;
    const variant = quizScreen.variants[difficulty];

    switch (quizScreen.type) {
      case 'multiple-choice':
        return <MultipleChoice key={screenKey} variant={variant} onCorrect={handleCorrect} onWrong={handleWrong} />;
      case 'true-false':
        return <TrueFalse key={screenKey} variant={variant} onCorrect={handleCorrect} onWrong={handleWrong} />;
      case 'tap-match':
        return <TapMatch key={screenKey} variant={variant} onCorrect={handleCorrect} onWrong={handleWrong} />;
      case 'fill-blank':
        return <FillBlank key={screenKey} variant={variant} onCorrect={handleCorrect} onWrong={handleWrong} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-surface-border/50">
        <button
          onClick={() => router.push(`/learn/${lesson.trackId}`)}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <X size={22} className="text-text-secondary" />
        </button>
        <ProgressBar progress={progress} className="flex-1" height={10} />
        <HeartsDisplay hearts={session.hearts} />
      </div>

      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </div>
    </div>
  );
}
