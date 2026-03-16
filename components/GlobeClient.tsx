'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />
});

export function GlobeClient() {
  return (
    <Suspense fallback={<div className="w-full h-full bg-background" />}>
      <Globe />
    </Suspense>
  );
}
