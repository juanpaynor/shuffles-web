import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">
            Shuffles
          </Link>
          <div className="text-center md:text-left text-foreground/70">
            <p>Pueblo De Panay, Near Roxas City Terminal</p>
            <p>Mon - Thu: 4 PM - 12 AM | Fri - Sun: 2 PM - 2 AM</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Shuffles Entertainment. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
