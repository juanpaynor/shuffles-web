import AxisHero from '@/components/axis/hero';
import AxisHubs from '@/components/axis/hubs';
import AxisAbout from '@/components/axis/about';

export default function Home() {
  return (
    <main data-brand="axis" className="flex min-h-screen flex-col bg-axis-ink font-sans text-white">
      <AxisHero />
      <AxisHubs />
      <AxisAbout />
    </main>
  );
}
