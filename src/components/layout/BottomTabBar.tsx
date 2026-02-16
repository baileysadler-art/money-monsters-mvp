'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, BookOpen, Trophy, BarChart3, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { TAB_ROUTES } from '../../lib/constants';

const ICONS = {
  home: Home,
  'book-open': BookOpen,
  trophy: Trophy,
  'bar-chart-3': BarChart3,
  user: User,
} as const;

export default function BottomTabBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-bottom-bar z-40 md:hidden">
      <div className="flex items-center justify-around h-[68px] px-2 pb-safe">
        {TAB_ROUTES.map((tab) => {
          const Icon = ICONS[tab.icon];
          const isActive = pathname === tab.path ||
            (tab.path !== '/' && pathname.startsWith(tab.path));

          return (
            <button
              key={tab.path}
              onClick={() => router.push(tab.path)}
              className="flex flex-col items-center justify-center w-16 h-full gap-0.5 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute -top-[1px] left-3 right-3 h-[3px] bg-brand-green rounded-b-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                size={26}
                className={isActive ? 'text-brand-green' : 'text-gray-400'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[11px] font-bold ${isActive ? 'text-brand-green' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
