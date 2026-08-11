"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/site/logo';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { HUBS, type BrandId } from '@/lib/brands';
import { cn } from '@/lib/utils';

const links = [
  ...HUBS.map((hub) => ({ href: hub.href, label: hub.name })),
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

/** The header sits over each hub's hero, so it wears that hub's palette. */
function brandForPath(pathname: string): BrandId {
  const hub = HUBS.find((h) => pathname.startsWith(h.href));
  return hub?.id ?? 'axis';
}

export default function SiteHeader() {
  const pathname = usePathname();
  const brand = brandForPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer on navigation.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      data-brand={brand}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      {/* Lives here so it inherits the active brand's accent colour. */}
      <ScrollProgress />

      <div className="container flex items-center justify-between px-4 py-4">
        <Link href="/" aria-label="Adventure Axis home" className="shrink-0">
          <Logo brand="axis" height={scrolled ? 32 : 40} priority className="transition-all" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground/70'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden text-foreground"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="container flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-lg font-bold uppercase tracking-widest text-foreground/80 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
