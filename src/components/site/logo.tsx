"use client";

import Image from 'next/image';
import { useState } from 'react';
import { BRANDS, type BrandId } from '@/lib/brands';
import { cn } from '@/lib/utils';

type LogoProps = {
  brand: BrandId;
  /** Rendered height in px; width follows the logo's aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Renders a brand logo from /public/images, falling back to a styled text
 * wordmark if the file isn't there yet. This keeps every page looking
 * correct before the real assets land.
 */
export default function Logo({ brand, height = 40, className, priority }: LogoProps) {
  const { name, sub, logo, logoWidth, logoHeight, wordmarkClass } = BRANDS[brand];
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={cn('inline-flex flex-col leading-none', className)}>
        <span
          className={cn('font-headline font-black uppercase tracking-widest', wordmarkClass)}
          style={{ fontSize: height * 0.55 }}
        >
          {name}
        </span>
        {sub && (
          <span
            className="mt-1 font-bold uppercase tracking-[0.3em] opacity-60"
            style={{ fontSize: Math.max(8, height * 0.16) }}
          >
            {sub}
          </span>
        )}
      </span>
    );
  }

  return (
    <Image
      src={logo}
      alt={name}
      width={logoWidth}
      height={logoHeight}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn('w-auto object-contain', className)}
      style={{ height }}
    />
  );
}
