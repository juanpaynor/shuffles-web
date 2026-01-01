import Atmosphere from '@/components/landing/atmosphere';
import Experience from '@/components/landing/experience';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import StickyCTA from '@/components/ui/sticky-cta';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-maroon font-sans text-white selection:bg-neon-orange selection:text-white">
      <ScrollProgress />
      <main className="flex-1 relative">
        <Hero />
        <Experience />
        <Atmosphere />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
