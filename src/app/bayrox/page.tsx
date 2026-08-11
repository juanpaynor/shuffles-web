import type { Metadata } from 'next';
import BayRoxHero from '@/components/bayrox/hero';
import BayRoxExperience from '@/components/bayrox/experience';
import BayRoxVisit from '@/components/bayrox/visit';

export const metadata: Metadata = {
  title: 'BayRox — Bayside Food, Music & Good Days Out',
  description:
    'The open-air bayside hub in Baybay, Roxas City. Food park, live music, family weekends and sunset views. An Adventure Axis hub.',
};

export default function BayRoxPage() {
  return (
    <main
      data-brand="bayrox"
      className="relative flex min-h-screen flex-col bg-bayrox-cream font-sans text-bayrox-ink"
    >
      <BayRoxHero />
      <BayRoxExperience />
      <BayRoxVisit />
    </main>
  );
}
