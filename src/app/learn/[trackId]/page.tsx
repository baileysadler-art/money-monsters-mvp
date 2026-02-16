'use client';

import { use } from 'react';
import LessonPath from '../../../components/learn/LessonPath';
import { TrackId } from '../../../types';

export default function TrackPage({ params }: { params: Promise<{ trackId: string }> }) {
  const { trackId } = use(params);
  return <LessonPath trackId={trackId as TrackId} />;
}
