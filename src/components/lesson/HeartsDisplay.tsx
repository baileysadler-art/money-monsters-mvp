'use client';

import { Heart } from 'lucide-react';

export default function HeartsDisplay({ hearts }: { hearts: number }) {
  return (
    <div className="flex items-center gap-0.5">
      <Heart
        size={20}
        className="text-brand-red"
        fill={hearts > 0 ? '#FF4B4B' : 'none'}
        strokeWidth={2}
      />
      <span className="text-sm font-bold text-brand-red">{hearts}</span>
    </div>
  );
}
