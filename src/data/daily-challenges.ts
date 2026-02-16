import { QuizScreen } from '../types';

export const DAILY_CHALLENGES: QuizScreen[] = [
  {
    type: 'multiple-choice',
    variants: {
      easy: {
        question: 'Which coin is worth the most?',
        options: [
          { id: 'a', text: '£1 coin' },
          { id: 'b', text: '50p coin' },
          { id: 'c', text: '20p coin' },
        ],
        correctAnswer: 'a',
        explanation: 'A £1 coin is worth 100 pence — the most of these coins!',
      },
      medium: {
        question: 'How many 50p coins make one pound?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '5' },
          { id: 'c', text: '10' },
        ],
        correctAnswer: 'a',
        explanation: '2 × 50p = 100p = £1.00',
      },
      hard: {
        question: 'What is the term for money losing value over time?',
        options: [
          { id: 'a', text: 'Inflation' },
          { id: 'b', text: 'Deflation' },
          { id: 'c', text: 'Recession' },
        ],
        correctAnswer: 'a',
        explanation: 'Inflation means prices go up over time, so each pound buys less.',
      },
    },
  },
  {
    type: 'true-false',
    variants: {
      easy: {
        question: 'A money jar helps you save money.',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true',
        explanation: 'Yes! A money jar or monster vault is a great way to save your coins and notes!',
      },
      medium: {
        question: 'You should spend all your pocket money right away.',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false',
        explanation: 'It\'s smart to save some of your pocket money for later!',
      },
      hard: {
        question: 'Compound interest means you earn interest on your interest.',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true',
        explanation: 'Compound interest grows your money faster because you earn interest on both your original money AND the interest it earned!',
      },
    },
  },
  {
    type: 'multiple-choice',
    variants: {
      easy: {
        question: 'What do you use money to buy?',
        options: [
          { id: 'a', text: 'Things we need and want' },
          { id: 'b', text: 'Only toys' },
          { id: 'c', text: 'Only food' },
        ],
        correctAnswer: 'a',
        explanation: 'We use money to buy all sorts of things we need (like food) and want (like toys)!',
      },
      medium: {
        question: 'What is a budget?',
        options: [
          { id: 'a', text: 'A plan for how to use your money' },
          { id: 'b', text: 'A type of bank account' },
          { id: 'c', text: 'A way to borrow money' },
        ],
        correctAnswer: 'a',
        explanation: 'A budget is a plan that helps you decide how to spend and save your money wisely!',
      },
      hard: {
        question: 'What is diversification in investing?',
        options: [
          { id: 'a', text: 'Spreading money across different investments' },
          { id: 'b', text: 'Putting all money in one stock' },
          { id: 'c', text: 'Only investing in banks' },
        ],
        correctAnswer: 'a',
        explanation: 'Diversification means not putting all your eggs in one basket — spreading investments reduces risk!',
      },
    },
  },
  {
    type: 'fill-blank',
    variants: {
      easy: {
        question: 'We keep money safe in a ___.',
        correctAnswer: 'bank',
        explanation: 'Banks are safe places to keep your money!',
      },
      medium: {
        question: 'The money you earn from a job is called your ___.',
        correctAnswer: 'income',
        explanation: 'Income is the money you receive from working or other sources!',
      },
      hard: {
        question: 'The stock ___ is where people buy and sell shares of companies.',
        correctAnswer: 'market',
        explanation: 'The stock market is a place where investors trade shares of publicly listed companies.',
      },
    },
  },
  {
    type: 'true-false',
    variants: {
      easy: {
        question: 'You can earn pocket money by helping with chores.',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true',
        explanation: 'Many kids earn pocket money by doing chores around the house!',
      },
      medium: {
        question: 'A credit card gives you free money.',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'false',
        explanation: 'A credit card is borrowed money that you must pay back, usually with interest!',
      },
      hard: {
        question: 'Government bonds are generally considered lower risk than stocks.',
        options: [{ id: 'true', text: 'True' }, { id: 'false', text: 'False' }],
        correctAnswer: 'true',
        explanation: 'Government bonds are backed by the government, making them generally safer (but with lower returns) than stocks.',
      },
    },
  },
];

export function getDailyChallenge(): QuizScreen {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return DAILY_CHALLENGES[dayOfYear % DAILY_CHALLENGES.length];
}
