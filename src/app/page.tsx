import AtmosphereSection from '@/components/landing/atmosphere';
import EntertainmentSection from '@/components/landing/entertainment';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero';
import LocationSection from '@/components/landing/location';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <EntertainmentSection />
        <AtmosphereSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
