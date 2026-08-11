/**
 * Single source of truth for the Adventure Axis brand family.
 *
 * Logo files are expected in /public/images. Until they exist, <Logo />
 * renders a styled text wordmark instead — drop the files in and they
 * take over with no code change.
 */

export type BrandId = 'axis' | 'shuffles' | 'bayrox';

export type Brand = {
  id: BrandId;
  /** Wordmark text, used as the image alt and as the fallback render. */
  name: string;
  /** Short line under the name in the fallback wordmark. */
  sub?: string;
  href: string;
  logo: string;
  /** Intrinsic logo dimensions, so next/image reserves the right space. */
  logoWidth: number;
  logoHeight: number;
  tagline: string;
  description: string;
  /** Tailwind class for the fallback wordmark colour. */
  wordmarkClass: string;
};

export const AXIS: Brand = {
  id: 'axis',
  name: 'Adventure Axis',
  sub: 'Incorporated',
  href: '/',
  logo: '/images/adventure-axis.png',
  logoWidth: 2342,
  logoHeight: 1008,
  tagline: 'Where Roxas City comes to play.',
  description:
    'Adventure Axis Incorporated builds and runs entertainment destinations across Roxas City, Capiz.',
  wordmarkClass: 'text-axis-gold',
};

export const SHUFFLES: Brand = {
  id: 'shuffles',
  name: 'Shuffles',
  sub: 'Roxas City',
  href: '/shuffles',
  logo: '/images/shuffles.png',
  logoWidth: 2334,
  logoHeight: 1084,
  tagline: 'Bowling, billiards, darts, karaoke, bar & restaurant.',
  description:
    'The premium nightlife hub. Twelve pro lanes, tournament-grade tables, private karaoke suites and a full bar — open late, every night.',
  wordmarkClass: 'text-shuffles-coral',
};

export const BAYROX: Brand = {
  id: 'bayrox',
  name: 'BayRox',
  sub: 'Baybay, Roxas City',
  href: '/bayrox',
  logo: '/images/bayrox.png',
  logoWidth: 2264,
  logoHeight: 1090,
  tagline: 'Bayside food, music and good days out.',
  description:
    'The open-air bayside hub. Food park, live music, family weekends and sunset views over Baybay — bright, loud and made for daylight.',
  wordmarkClass: 'text-bayrox-red',
};

/** The two consumer-facing venues, in display order. */
export const HUBS: Brand[] = [SHUFFLES, BAYROX];

export const BRANDS: Record<BrandId, Brand> = {
  axis: AXIS,
  shuffles: SHUFFLES,
  bayrox: BAYROX,
};
