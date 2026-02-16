'use client';

import { useState, useEffect } from 'react';
import Mascot from '../mascot/Mascot';
import { useUserStore } from '../../stores/useUserStore';
import { MASCOT_GREETINGS } from '../../lib/constants';

export default function MascotGreeting() {
  const name = useUserStore((s) => s.profile.name);
  const [displayText, setDisplayText] = useState('');
  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    const period = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
    const greetings = MASCOT_GREETINGS[period];
    return greetings[Math.floor(Math.random() * greetings.length)];
  });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(greeting.slice(0, i + 1));
      i++;
      if (i >= greeting.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [greeting]);

  return (
    <div className="px-5 flex items-start gap-3">
      <Mascot expression="happy" size={80} />
      <div className="flex-1 bg-white rounded-2xl rounded-tl-md p-3.5 shadow-card border border-surface-border/40 mt-2">
        <p className="text-sm font-semibold text-text-secondary">
          Hi <span className="text-brand-green font-bold">{name}</span>! 👋
        </p>
        <p className="text-sm font-semibold text-text-primary mt-0.5 min-h-[40px]">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </div>
  );
}
