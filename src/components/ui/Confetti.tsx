'use client';

import { useEffect, useState } from 'react';

const COLORS = ['#58CC02', '#CE82FF', '#1CB0F6', '#FF9600', '#FFC800', '#FF4B4B'];
const SHAPES = ['●', '■', '▲', '★'];

interface Particle {
  id: number;
  x: number;
  color: string;
  shape: string;
  delay: number;
  size: number;
}

export default function Confetti({ show }: { show: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!show) return;
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      delay: Math.random() * 0.5,
      size: 8 + Math.random() * 12,
    }));
    setParticles(newParticles);
  }, [show]);

  if (!show || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            color: p.color,
            fontSize: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${1.5 + Math.random()}s`,
          }}
        >
          {p.shape}
        </div>
      ))}
    </div>
  );
}
