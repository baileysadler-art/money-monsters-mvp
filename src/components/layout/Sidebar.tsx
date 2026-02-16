'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, BookOpen, Trophy, BarChart3, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { TAB_ROUTES } from '../../lib/constants';
import { useUserStore } from '../../stores/useUserStore';
import { useHydration } from '../../lib/useHydration';

const ICONS = {
  home: Home,
  'book-open': BookOpen,
  trophy: Trophy,
  'bar-chart-3': BarChart3,
  user: User,
} as const;

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const hydrated = useHydration();
  const profile = useUserStore((s) => s.profile);
  const xp = useUserStore((s) => s.xp);
  const streak = useUserStore((s) => s.streak);

  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[220px] bg-white border-r border-surface-border/60 flex-col z-40">
      {/* Brand header */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-xl font-extrabold">
          <span className="text-brand-green">Money</span>
          {' '}
          <span className="text-brand-purple">Monsters</span>
        </h1>
        <p className="text-[11px] font-bold text-text-secondary mt-0.5 uppercase tracking-wide">
          Learn. Play. Master Money.
        </p>
      </div>

      {/* User card */}
      {hydrated && (
        <div className="mx-4 mb-4 p-3 bg-surface-dim rounded-2xl">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-brand-green-light rounded-full flex items-center justify-center text-xl">
              {profile.avatar}
            </div>
            <div>
              <p className="font-bold text-sm text-text-primary">{profile.name}</p>
              <div className="flex items-center gap-2 text-[11px] font-bold text-text-secondary">
                <span>⚡ {xp} XP</span>
                <span>🔥 {streak}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {TAB_ROUTES.map((tab) => {
          const Icon = ICONS[tab.icon];
          const isActive = pathname === tab.path ||
            (tab.path !== '/' && pathname.startsWith(tab.path));

          return (
            <button
              key={tab.path}
              onClick={() => router.push(tab.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all relative ${
                isActive
                  ? 'bg-brand-green-light text-brand-green'
                  : 'text-text-secondary hover:bg-surface-dim'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-brand-green rounded-r-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-sm ${isActive ? 'font-bold' : 'font-semibold'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-surface-border/60">
        <p className="text-[10px] font-semibold text-text-secondary/60 text-center">
          Money Monsters MVP Demo
        </p>
      </div>
    </aside>
  );
}
