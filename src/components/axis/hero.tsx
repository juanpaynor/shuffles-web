"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '@/components/site/logo';
import { Button } from '@/components/ui/button';
import { HUBS } from '@/lib/brands';

export default function AxisHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-axis-ink text-center">
      {/* Ambient gradient wash */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute left-[15%] top-[15%] h-[420px] w-[420px] rounded-full bg-axis-gold/20 blur-[120px]" />
        <div className="absolute bottom-[15%] right-[10%] h-[480px] w-[480px] rounded-full bg-axis-amber/10 blur-[130px]" />
      </motion.div>

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <motion.div
        style={{ opacity }}
        className="container relative z-10 flex flex-col items-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <Logo brand="axis" height={120} priority className="mx-auto md:!h-[160px]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 max-w-2xl text-2xl font-light leading-relaxed text-white/70 md:text-4xl"
        >
          Where Roxas City comes to play.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-6 text-xs font-bold uppercase tracking-[0.5em] text-axis-gold"
        >
          Two Hubs • One City
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-14 flex w-full max-w-xs flex-col gap-5 sm:max-w-lg sm:flex-row"
        >
          {HUBS.map((hub, i) => (
            <Button
              key={hub.id}
              asChild
              size="lg"
              className={
                i === 0
                  ? 'h-14 w-full rounded-none border-0 bg-axis-gold text-lg font-bold uppercase tracking-wider text-axis-ink shadow-lg transition-all hover:-translate-y-1 hover:bg-axis-gold/90'
                  : 'h-14 w-full rounded-none border border-white/20 bg-transparent text-lg font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/5'
              }
            >
              <Link href={hub.href}>{hub.name}</Link>
            </Button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-white/40">
            Scroll to Explore
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-axis-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
