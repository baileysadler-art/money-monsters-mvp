import LessonPath from '../../../components/learn/LessonPath';
import { TrackId } from '../../../types';

export default function TrackPage({ params }: { params: { trackId: string } }) {
  return <LessonPath trackId={params.trackId as TrackId} />;
}
