import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/landing/fade-in';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const entertainmentOptions = [
  {
    title: 'Bowling',
    imageId: 'bowling-alley',
    description: 'State-of-the-art lanes for all skill levels.',
  },
  {
    title: 'Billiards',
    imageId: 'billiards-table',
    description: 'Classic pool tables in a vibrant, social setting.',
  },
  {
    title: 'Darts',
    imageId: 'darts-board',
    description: 'Hit the bullseye with our professional dart setups.',
  },
  {
    title: 'Karaoke Rooms',
    imageId: 'karaoke-room',
    description: 'Sing your heart out in our private, themed rooms.',
  },
  {
    title: 'Bar & Restaurant',
    imageId: 'modern-bar',
    description: 'Craft cocktails and gourmet bites to fuel your night.',
  },
  {
    title: 'Live Events',
    imageId: 'live-event',
    description: 'Experience top DJs and special events weekly.',
  }
];

export default function EntertainmentSection() {
  return (
    <section id="explore" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl font-headline">
            An Unforgettable Night Awaits
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
            Discover a world of entertainment under one roof. Your perfect night out starts here.
          </p>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {entertainmentOptions.map((item, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === item.imageId);
            return (
              <FadeIn key={item.title} delay={index * 100}>
                <Link href="#booking" className="block group">
                  <Card className="overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 h-full">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={placeholder?.imageUrl || `https://picsum.photos/seed/${item.imageId}/600/400`}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={placeholder?.imageHint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="font-headline text-2xl tracking-tight">{item.title}</CardTitle>
                      <p className="mt-2 text-foreground/70">{item.description}</p>
                      <div className="mt-4 flex items-center text-primary font-semibold">
                        <span>Book Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
