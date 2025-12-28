import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/landing/fade-in';
import { Clock, MapPin } from 'lucide-react';

export default function LocationSection() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'city-map');

  return (
    <section id="booking" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                Find Your Fun
              </h2>
              
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold font-headline">Location</h3>
                    <p className="text-foreground/80">
                      Pueblo De Panay <br />
                      Near Roxas City Terminal
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold font-headline">Hours</h3>
                    <p className="text-foreground/80">
                      <strong>Mon - Thu:</strong> 4 PM - 12 AM <br />
                      <strong>Fri - Sun:</strong> 2 PM - 2 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl border-4 border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20">
              <Image
                src={mapImage?.imageUrl || 'https://picsum.photos/seed/map/800/800'}
                alt="Map to Shuffles"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                data-ai-hint={mapImage?.imageHint}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
