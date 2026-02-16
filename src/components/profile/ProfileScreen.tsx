'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '../../stores/useUserStore';
import { useProgressStore } from '../../stores/useProgressStore';
import { useHydration } from '../../lib/useHydration';
import { LEVELS, TRACKS, AVATARS } from '../../lib/constants';
import ProgressBar from '../ui/ProgressBar';
import Button3D from '../ui/Button3D';

export default function ProfileScreen() {
  const hydrated = useHydration();
  const profile = useUserStore((s) => s.profile);
  const xp = useUserStore((s) => s.xp);
  const level = useUserStore((s) => s.level);
  const streak = useUserStore((s) => s.streak);
  const setName = useUserStore((s) => s.setName);
  const setAvatar = useUserStore((s) => s.setAvatar);
  const resetUserDemo = useUserStore((s) => s.resetToDemo);
  const resetProgressDemo = useProgressStore((s) => s.resetToDemo);
  const getTrackProgress = useProgressStore((s) => s.getTrackProgress);
  const completedLessons = useProgressStore((s) => s.completedLessons);

  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  const levelName = LEVELS.find((l) => l.level === level)?.name || 'Baby Monster';
  const nextLevel = LEVELS.find((l) => l.level === level + 1);
  const xpProgress = nextLevel
    ? ((xp - (LEVELS[level - 1]?.xpRequired || 0)) / (nextLevel.xpRequired - (LEVELS[level - 1]?.xpRequired || 0))) * 100
    : 100;

  if (!hydrated) return null;

  const handleReset = () => {
    resetUserDemo();
    resetProgressDemo();
  };

  return (
    <div className="py-6 px-5 space-y-5 bg-gradient-warm min-h-full">
      <h1 className="text-2xl font-extrabold text-text-primary">Profile</h1>

      {/* Avatar & Name */}
      <div className="flex flex-col items-center py-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAvatarPicker(!showAvatarPicker)}
          className="w-20 h-20 bg-brand-green-light rounded-full flex items-center justify-center text-4xl mb-3 shadow-card border-2 border-brand-green/30"
        >
          {profile.avatar}
        </motion.button>

        {showAvatarPicker && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex flex-wrap gap-2 justify-center mb-3 bg-white p-3 rounded-2xl shadow-card border border-surface-border/40"
          >
            {AVATARS.map((av) => (
              <button
                key={av.id}
                onClick={() => { setAvatar(av.emoji); setShowAvatarPicker(false); }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-colors ${
                  profile.avatar === av.emoji ? 'bg-brand-green-light border-2 border-brand-green' : 'bg-surface-dim'
                }`}
              >
                {av.emoji}
              </button>
            ))}
          </motion.div>
        )}

        {isEditingName ? (
          <div className="flex items-center gap-2">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onBlur={() => { setName(nameInput); setIsEditingName(false); }}
              onKeyDown={(e) => { if (e.key === 'Enter') { setName(nameInput); setIsEditingName(false); } }}
              className="text-lg font-extrabold text-text-primary text-center bg-surface-dim rounded-xl px-3 py-1.5 border border-surface-border outline-none focus:border-brand-green"
              autoFocus
            />
          </div>
        ) : (
          <button
            onClick={() => setIsEditingName(true)}
            className="text-lg font-extrabold text-text-primary hover:text-brand-green transition-colors"
          >
            {profile.name} ✏️
          </button>
        )}
        <p className="text-sm font-bold text-brand-purple mt-1">{levelName}</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Total XP', value: xp.toString(), icon: '⚡' },
          { label: 'Level', value: level.toString(), icon: '🏅' },
          { label: 'Streak', value: `${streak} days`, icon: '🔥' },
          { label: 'Lessons', value: completedLessons.length.toString(), icon: '📚' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-3 shadow-card border border-surface-border/40 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <p className="text-lg font-extrabold text-text-primary">{stat.value}</p>
            <p className="text-[10px] font-bold text-text-secondary uppercase">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Level progress */}
      <div className="bg-white rounded-2xl p-4 shadow-card border border-surface-border/40">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-text-secondary">Level {level}</span>
          {nextLevel && <span className="text-xs font-bold text-text-secondary">Level {level + 1}</span>}
        </div>
        <ProgressBar progress={xpProgress} color="#CE82FF" height={10} />
        {nextLevel && (
          <p className="text-[10px] font-semibold text-text-secondary text-center mt-1.5">
            {nextLevel.xpRequired - xp} XP to {LEVELS[level]?.name}
          </p>
        )}
      </div>

      {/* Track progress */}
      <div>
        <h2 className="text-sm font-extrabold text-text-primary mb-3">Track Progress</h2>
        <div className="space-y-2.5">
          {TRACKS.map((track) => {
            const progress = getTrackProgress(track.id);
            const percent = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

            return (
              <div key={track.id} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{ backgroundColor: `${track.color}20` }}
                >
                  {track.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-text-primary">{track.name}</span>
                    <span className="text-[10px] font-bold text-text-secondary">
                      {progress.completed}/{progress.total}
                    </span>
                  </div>
                  <ProgressBar progress={percent} color={track.color} height={6} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset demo button */}
      <div className="pt-2">
        <Button3D fullWidth variant="gray" size="sm" onClick={handleReset}>
          🔄 Reset Demo
        </Button3D>
        <p className="text-[10px] font-semibold text-text-secondary text-center mt-2">
          Resets all progress back to demo state
        </p>
      </div>

      <div className="h-4" />
    </div>
  );
}
