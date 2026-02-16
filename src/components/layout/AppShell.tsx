'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import BottomTabBar from './BottomTabBar';
import Sidebar from './Sidebar';
import PageTransition from './PageTransition';

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLessonPage = pathname.startsWith('/lesson/');

  return (
    <div className="h-[100dvh] bg-surface-dim overflow-hidden">
      {/* Desktop sidebar */}
      {!isLessonPage && <Sidebar />}

      {/* Main content */}
      <main
        className={`h-full overflow-y-auto overflow-x-hidden ${
          isLessonPage ? '' : 'pb-[68px] md:pb-0 md:ml-[220px]'
        }`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Mobile bottom bar */}
      {!isLessonPage && <BottomTabBar />}
    </div>
  );
}
