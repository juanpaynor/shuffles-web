import type { Metadata } from 'next';
import Hero from '@/components/shuffles/hero';
import Experience from '@/components/shuffles/experience';
import Atmosphere from '@/components/shuffles/atmosphere';
import StickyCTA from '@/components/ui/sticky-cta';

export const metadata: Metadata = {
  title: 'Shuffles — Premium Entertainment Hub',
  description:
    'Bowling, billiards, darts, karaoke, bar and restaurant in Roxas City. Your ultimate nightlife destination. An Adventure Axis hub.',
};

export default function ShufflesPage() {
  return (
    <main
      data-brand="shuffles"
      className="relative flex min-h-screen flex-col bg-maroon font-sans text-white"
    >
      <Hero />
      <Experience />
      <Atmosphere />
      <StickyCTA />
    </main>
  );
}
