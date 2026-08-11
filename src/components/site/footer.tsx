"use client";

import Link from 'next/link';
import Logo from '@/components/site/logo';
import { AXIS, HUBS } from '@/lib/brands';

export default function SiteFooter() {
  return (
    <footer
      data-brand="axis"
      className="border-t border-white/5 bg-axis-ink py-20 text-white"
    >
      <div className="container grid gap-16 px-4 md:grid-cols-3">
        {/* Parent brand */}
        <div className="flex flex-col items-start gap-6">
          <Link href="/" aria-label="Adventure Axis home">
            <Logo brand="axis" height={48} />
          </Link>
          <p className="max-w-xs font-light leading-relaxed text-white/60">
            {AXIS.description}
          </p>
        </div>

        {/* Hubs */}
        {HUBS.map((hub) => (
          <div key={hub.id} className="flex flex-col items-start gap-4">
            <Link
              href={hub.href}
              className="font-headline text-2xl font-black uppercase tracking-widest transition-colors hover:text-axis-gold"
            >
              {hub.name}
            </Link>
            <p className="text-sm font-light leading-relaxed text-white/50">
              {hub.tagline}
            </p>
            <Link
              href={hub.href}
              className="text-sm font-bold uppercase tracking-widest text-axis-gold hover:underline"
            >
              Visit {hub.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="container mt-20 flex flex-col justify-between border-t border-white/5 px-4 pt-8 text-xs uppercase tracking-widest text-white/30 md:flex-row">
        <p>© {new Date().getFullYear()} Adventure Axis Incorporated. All rights reserved.</p>
        <div className="mt-4 flex gap-4 md:mt-0">
          <Link href="#" className="hover:text-white">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white">
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
