"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">
          Shuffles
        </Link>
        <nav className="hidden md:flex items-center gap-4">
           <Button asChild variant="ghost">
             <Link href="#explore">Explore</Link>
           </Button>
           <Button asChild>
             <Link href="#booking">Book Now</Link>
           </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <Link href="/" className="text-3xl font-bold tracking-tighter text-primary font-headline" onClick={closeSheet}>
                  Shuffles
                </Link>
                <Link href="#explore" className="text-xl text-foreground/80 hover:text-primary transition-colors" onClick={closeSheet}>Explore</Link>
                <Link href="#atmosphere" className="text-xl text-foreground/80 hover:text-primary transition-colors" onClick={closeSheet}>Vibe</Link>
                <Link href="#location" className="text-xl text-foreground/80 hover:text-primary transition-colors" onClick={closeSheet}>Location</Link>
                <Button asChild size="lg" className="mt-4" onClick={closeSheet}>
                  <Link href="#booking">Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
