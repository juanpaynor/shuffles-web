import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/landing/fade-in';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function AtmosphereSection() {
  const crowdImage = PlaceHolderImages.find(p => p.id === 'nightlife-crowd');
  const cocktailImage = PlaceHolderImages.find(p => p.id === 'cocktail-drink');

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] z-10">
                <Image
                  src={crowdImage?.imageUrl || `https://picsum.photos/seed/crowd/800/1000`}
                  alt="Nightlife at Shuffles"
                  width={800}
                  height={1000}
                  className="object-cover rounded-2xl shadow-2xl"
                  data-ai-hint={crowdImage?.imageHint}
                />
              </div>
              <div className="hidden md:block absolute -bottom-8 -right-8 w-2/3 aspect-square z-0 transform rotate-6">
                 <Image
                  src={cocktailImage?.imageUrl || `https://picsum.photos/seed/cocktail/800/800`}
                  alt="Craft cocktail"
                  width={800}
                  height={800}
                  className="object-cover rounded-2xl shadow-xl"
                  data-ai-hint={cocktailImage?.imageHint}
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl font-headline">
                The Vibe is <br className="hidden lg:block" /><span className="text-primary" style={{ textShadow: '0 0 12px hsl(var(--primary) / 0.7), 0 0 20px hsl(var(--primary) / 0.5)'}}>Electric</span>
              </h2>
              <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-foreground/80">
                Immerse yourself in the energy. From the pulsing music to the craft cocktails, every detail is curated to create an unforgettable atmosphere. This is where memories are made and nights come alive.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="#booking">Book Your Experience</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
