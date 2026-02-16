'use client';

import { motion } from 'framer-motion';
import { ContentScreen as ContentScreenType } from '../../types';
import Mascot from '../mascot/Mascot';
import Button3D from '../ui/Button3D';

interface ContentScreenProps {
  screen: ContentScreenType;
  onContinue: () => void;
}

export default function ContentScreen({ screen, onContinue }: ContentScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="flex flex-col h-full px-6 py-6"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <Mascot expression="happy" size={100} className="mb-4" />
        <h2 className="text-xl font-extrabold text-text-primary mb-3">{screen.title}</h2>
        <p className="text-sm font-semibold text-text-secondary leading-relaxed max-w-sm">
          {screen.body}
        </p>
      </div>
      <div className="pt-4">
        <Button3D fullWidth variant="green" onClick={onContinue}>
          Continue
        </Button3D>
      </div>
    </motion.div>
  );
}
