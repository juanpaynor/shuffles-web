"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '@/components/site/logo';
import { Button } from '@/components/ui/button';

export default function BayRoxHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-bayrox-cream text-center">
      {/* Sun + sky wash */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-bayrox-yellow/40 blur-[110px]" />
        <div className="absolute bottom-[-10%] left-[5%] h-[380px] w-[380px] rounded-full bg-bayrox-blue/25 blur-[110px]" />
        <div className="absolute bottom-[5%] right-[5%] h-[340px] w-[340px] rounded-full bg-bayrox-orange/25 blur-[110px]" />
      </motion.div>

      {/* Bay waves along the bottom edge */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 w-full text-bayrox-blue/20"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 96c120-32 240-32 360 0s240 32 360 0 240-32 360 0 240 32 360 0v64H0Z"
        />
      </svg>

      <motion.div
        style={{ opacity }}
        className="container relative z-10 flex flex-col items-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="sr-only">BayRox — Baybay, Roxas City</h1>
          <Logo brand="bayrox" height={130} priority className="mx-auto md:!h-[190px]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 max-w-2xl text-2xl font-medium leading-relaxed text-bayrox-ink/80 md:text-4xl"
        >
          Bayside food, music and good days out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.3em] text-bayrox-ink/50"
        >
          <span>Baybay</span>
          <span className="text-bayrox-red">•</span>
          <span>Roxas City</span>
          <span className="text-bayrox-red">•</span>
          <span>Open Daily</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 flex w-full max-w-xs flex-col gap-5 sm:max-w-lg sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-14 w-full rounded-full border-0 bg-bayrox-red text-lg font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-bayrox-red/90"
          >
            <Link href="#visit">Plan a Visit</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 w-full rounded-full border-2 border-bayrox-ink/20 bg-transparent text-lg font-bold uppercase tracking-wider text-bayrox-ink transition-all hover:-translate-y-1 hover:border-bayrox-ink hover:bg-bayrox-ink/5 hover:text-bayrox-ink"
          >
            <Link href="#experience">What&apos;s Here</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-bayrox-ink/40"
        >
          An{' '}
          <Link href="/" className="text-bayrox-ink/70 transition-colors hover:text-bayrox-red">
            Adventure Axis
          </Link>{' '}
          Hub
        </motion.div>
      </motion.div>
    </section>
  );
}
