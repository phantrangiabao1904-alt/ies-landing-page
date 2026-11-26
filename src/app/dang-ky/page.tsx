'use server';

import { getResolvedSiteMedia } from '@/lib/media/site-media-urls';
import DangKyClient from './DangKyClient';

export default async function DangKyPage() {
  const media = await getResolvedSiteMedia();

  return <DangKyClient media={media} />;
}
