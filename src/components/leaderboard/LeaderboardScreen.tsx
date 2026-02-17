'use client';

import { motion } from 'framer-motion';
import { useHydration } from '../../lib/useHydration';
import { useUserStore } from '../../stores/useUserStore';
import { MOCK_LEADERBOARD } from '../../data/leaderboard';

const PODIUM_COLORS = ['#FFC800', '#C0C0C0', '#CD7F32'];
const PODIUM_HEIGHTS = [120, 96, 80];

export default function LeaderboardScreen() {
  const hydrated = useHydration();
  const userXP = useUserStore((s) => s.xp);
  const userName = useUserStore((s) => s.profile.name);
  const userAvatar = useUserStore((s) => s.profile.avatar);

  if (!hydrated) return null;

  // Build leaderboard with dynamic user position
  const leaderboard = MOCK_LEADERBOARD.map((entry) => {
    if (entry.isUser) {
      return { ...entry, name: userName, avatar: userAvatar, xp: userXP };
    }
    return entry;
  });

  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div className="py-6 bg-gradient-warm min-h-full">
      <div className="px-5 mb-6">
        <h1 className="text-2xl font-extrabold text-text-primary mb-1">Leaderboard</h1>
        <p className="text-sm text-text-secondary font-semibold">Top monster trainers this week</p>
      </div>

      {/* Top 3 Podium */}
      <div className="px-5 mb-6">
        <div className="flex items-end justify-center gap-2 max-w-sm mx-auto">
          {[1, 0, 2].map((podiumIdx) => {
            const entry = top3[podiumIdx];
            if (!entry) return null;
            const barHeight = [80, 56, 44][podiumIdx];

            return (
              <div key={entry.rank} className="flex-1 flex flex-col items-center min-w-0">
                <div className="text-2xl mb-1">{entry.avatar}</div>
                <p className="text-[11px] font-bold text-text-primary mb-0.5 truncate w-full text-center">{entry.name}</p>
                <p className="text-[10px] font-bold text-text-secondary mb-1.5">⚡ {entry.xp}</p>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: barHeight }}
                  transition={{ delay: 0.2 + podiumIdx * 0.15, type: 'spring', stiffness: 200 }}
                  className="w-full rounded-t-xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: PODIUM_COLORS[podiumIdx] }}
                >
                  <span className="text-white font-extrabold text-lg">#{entry.rank}</span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Remaining entries */}
      <div className="px-5 space-y-2">
        {rest.map((entry, index) => (
          <motion.div
            key={entry.rank}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            className={`flex items-center gap-3 p-3 rounded-2xl border transition-colors ${
              entry.isUser
                ? 'bg-brand-green-light border-brand-green/40 shadow-card'
                : 'bg-white border-surface-border/40'
            }`}
          >
            <span className="w-8 text-center font-bold text-sm text-text-secondary">
              #{entry.rank}
            </span>
            <div className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center text-lg">
              {entry.avatar}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-bold ${entry.isUser ? 'text-brand-green-dark' : 'text-text-primary'}`}>
                {entry.name} {entry.isUser && '(You)'}
              </p>
            </div>
            <span className="text-sm font-bold text-text-secondary">⚡ {entry.xp}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
