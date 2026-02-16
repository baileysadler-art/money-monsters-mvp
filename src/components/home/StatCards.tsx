'use client';

import { motion } from 'framer-motion';
import { useUserStore } from '../../stores/useUserStore';
import { LEVELS } from '../../lib/constants';

export default function StatCards() {
  const xp = useUserStore((s) => s.xp);
  const level = useUserStore((s) => s.level);
  const streak = useUserStore((s) => s.streak);
  const hearts = useUserStore((s) => s.hearts);

  const levelName = LEVELS.find((l) => l.level === level)?.name || 'Baby Monster';
  const nextLevel = LEVELS.find((l) => l.level === level + 1);
  const xpToNext = nextLevel ? nextLevel.xpRequired - xp : 0;

  const stats = [
    {
      label: 'Total XP',
      value: xp.toString(),
      icon: '⚡',
      color: 'bg-brand-orange-light',
      textColor: 'text-brand-orange-dark',
    },
    {
      label: levelName,
      value: `Lv. ${level}`,
      icon: '🏅',
      color: 'bg-brand-purple-light',
      textColor: 'text-brand-purple-dark',
      sub: nextLevel ? `${xpToNext} XP to next` : 'Max level!',
    },
    {
      label: 'Day Streak',
      value: streak.toString(),
      icon: '🔥',
      color: 'bg-brand-red-light',
      textColor: 'text-brand-red-dark',
    },
    {
      label: 'Hearts',
      value: `${hearts}/5`,
      icon: '❤️',
      color: 'bg-brand-red-light',
      textColor: 'text-brand-red',
    },
  ];

  return (
    <div className="px-5 grid grid-cols-2 gap-3">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="bg-white rounded-2xl p-3.5 shadow-card border border-surface-border/40"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center text-base`}>
              {stat.icon}
            </div>
            <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
          <p className={`text-2xl font-extrabold ${stat.textColor}`}>{stat.value}</p>
          {stat.sub && (
            <p className="text-[10px] font-semibold text-text-secondary mt-0.5">{stat.sub}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
