'use client';

import { motion } from 'framer-motion';

export type MascotExpression = 'happy' | 'excited' | 'thinking' | 'sad' | 'sleeping';

interface MascotProps {
  expression?: MascotExpression;
  size?: number;
  className?: string;
}

function getEyes(expression: MascotExpression) {
  switch (expression) {
    case 'happy':
      return (
        <>
          <ellipse cx="58" cy="58" rx="7" ry="8" fill="#2D2D3D" />
          <ellipse cx="92" cy="58" rx="7" ry="8" fill="#2D2D3D" />
          <circle cx="61" cy="55" r="3" fill="white" />
          <circle cx="95" cy="55" r="3" fill="white" />
        </>
      );
    case 'excited':
      return (
        <>
          <ellipse cx="58" cy="56" rx="8" ry="10" fill="#2D2D3D" />
          <ellipse cx="92" cy="56" rx="8" ry="10" fill="#2D2D3D" />
          <circle cx="61" cy="53" r="4" fill="white" />
          <circle cx="95" cy="53" r="4" fill="white" />
          <circle cx="60" cy="52" r="1.5" fill="#FFD700" />
          <circle cx="94" cy="52" r="1.5" fill="#FFD700" />
          <text x="100" y="42" fontSize="10">✨</text>
        </>
      );
    case 'thinking':
      return (
        <>
          <ellipse cx="58" cy="58" rx="7" ry="8" fill="#2D2D3D" />
          <ellipse cx="92" cy="58" rx="7" ry="5" fill="#2D2D3D" />
          <circle cx="61" cy="55" r="3" fill="white" />
          <circle cx="95" cy="57" r="2" fill="white" />
        </>
      );
    case 'sad':
      return (
        <>
          <ellipse cx="58" cy="60" rx="7" ry="8" fill="#2D2D3D" />
          <ellipse cx="92" cy="60" rx="7" ry="8" fill="#2D2D3D" />
          <circle cx="61" cy="58" r="3" fill="white" />
          <circle cx="95" cy="58" r="3" fill="white" />
          <ellipse cx="99" cy="68" rx="2.5" ry="3.5" fill="#1CB0F6" opacity="0.7" />
        </>
      );
    case 'sleeping':
      return (
        <>
          <path d="M51 58 Q58 53 65 58" stroke="#2D2D3D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M85 58 Q92 53 99 58" stroke="#2D2D3D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="102" y="40" fontSize="10" fill="#777" fontWeight="bold">z</text>
          <text x="108" y="32" fontSize="8" fill="#777" fontWeight="bold">z</text>
          <text x="113" y="26" fontSize="6" fill="#777" fontWeight="bold">z</text>
        </>
      );
  }
}

function getMouth(expression: MascotExpression) {
  switch (expression) {
    case 'happy':
      return (
        <>
          <path d="M62 76 Q75 88 88 76" stroke="#2D2D3D" strokeWidth="2.5" fill="#FF6B8A" strokeLinecap="round" />
          <rect x="69" y="76" width="4" height="4" rx="1" fill="white" />
          <rect x="77" y="76" width="4" height="4" rx="1" fill="white" />
        </>
      );
    case 'excited':
      return (
        <>
          <ellipse cx="75" cy="78" rx="10" ry="8" fill="#2D2D3D" />
          <ellipse cx="75" cy="76" rx="8" ry="4" fill="#FF6B8A" />
          <rect x="69" y="74" width="4" height="3" rx="1" fill="white" />
          <rect x="77" y="74" width="4" height="3" rx="1" fill="white" />
        </>
      );
    case 'thinking':
      return <circle cx="82" cy="76" r="4.5" fill="#2D2D3D" />;
    case 'sad':
      return <path d="M64 80 Q75 72 86 80" stroke="#2D2D3D" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
    case 'sleeping':
      return <path d="M67 76 Q75 80 83 76" stroke="#2D2D3D" strokeWidth="2" fill="none" strokeLinecap="round" />;
  }
}

export default function Mascot({ expression = 'happy', size = 120, className = '' }: MascotProps) {
  return (
    <motion.div
      animate={expression === 'sleeping'
        ? { scale: [1, 1.03, 1] }
        : { y: [0, -6, 0], scale: [1, 1.02, 1] }
      }
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      <svg width={size} height={size} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="75" cy="82" rx="48" ry="44" fill="#58CC02" />
        <ellipse cx="75" cy="82" rx="48" ry="44" fill="url(#monsterGradient)" />
        <ellipse cx="75" cy="90" rx="30" ry="26" fill="#78E030" />
        <circle cx="75" cy="90" r="12" fill="#FFD700" opacity="0.4" />
        <text x="71" y="94" fontSize="14" fontWeight="bold" fill="#FFD700" opacity="0.6">£</text>
        <ellipse cx="52" cy="38" rx="8" ry="14" fill="#58CC02" transform="rotate(-10 52 38)" />
        <ellipse cx="52" cy="36" rx="5" ry="8" fill="#78E030" transform="rotate(-10 52 36)" />
        <circle cx="52" cy="27" r="5" fill="#FFD700" />
        <ellipse cx="98" cy="38" rx="8" ry="14" fill="#58CC02" transform="rotate(10 98 38)" />
        <ellipse cx="98" cy="36" rx="5" ry="8" fill="#78E030" transform="rotate(10 98 36)" />
        <circle cx="98" cy="27" r="5" fill="#FFD700" />
        <circle cx="32" cy="60" r="8" fill="#46A302" />
        <circle cx="118" cy="60" r="8" fill="#46A302" />
        {getEyes(expression)}
        {getMouth(expression)}
        <circle cx="46" cy="72" r="8" fill="#46A302" opacity="0.5" />
        <circle cx="104" cy="72" r="8" fill="#46A302" opacity="0.5" />
        <ellipse cx="30" cy="90" rx="10" ry="8" fill="#4EBA02" transform="rotate(-20 30 90)" />
        <ellipse cx="120" cy="90" rx="10" ry="8" fill="#4EBA02" transform="rotate(20 120 90)" />
        <ellipse cx="58" cy="122" rx="14" ry="8" fill="#46A302" />
        <ellipse cx="92" cy="122" rx="14" ry="8" fill="#46A302" />
        <circle cx="50" cy="120" r="4" fill="#3D9102" />
        <circle cx="58" cy="118" r="4" fill="#3D9102" />
        <circle cx="66" cy="120" r="4" fill="#3D9102" />
        <circle cx="84" cy="120" r="4" fill="#3D9102" />
        <circle cx="92" cy="118" r="4" fill="#3D9102" />
        <circle cx="100" cy="120" r="4" fill="#3D9102" />
        <defs>
          <radialGradient id="monsterGradient" cx="0.4" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#78E030" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#58CC02" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
