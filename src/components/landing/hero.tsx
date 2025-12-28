import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--secondary)), transparent, hsl(var(--primary) / 0.5), transparent)',
            backgroundSize: '400% 400%',
            animation: 'animated-gradient 25s ease infinite',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg">
          Shuffles
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Bowling, Billiards, Darts, Karaoke, Bar & Restaurant
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#booking">Book Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#explore">Explore the Venue</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
}
