"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/site/logo';
import { HUBS } from '@/lib/brands';

/** Per-hub surface treatment, so each card reads in its own brand colours. */
const surfaces: Record<string, { wrap: string; body: string; cta: string; glow: string }> = {
  shuffles: {
    wrap: 'bg-shuffles-maroon',
    body: 'text-white/70',
    cta: 'text-shuffles-coral',
    glow: 'bg-shuffles-coral/20',
  },
  bayrox: {
    wrap: 'bg-bayrox-cream',
    body: 'text-bayrox-ink/70',
    cta: 'text-bayrox-red',
    glow: 'bg-bayrox-blue/20',
  },
};

export default function AxisHubs() {
  return (
    <section id="hubs" className="relative bg-axis-ink py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-axis-gold">
            Our Hubs
          </p>
          <h2 className="font-headline text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Two ways to spend a night
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {HUBS.map((hub, i) => {
            const s = surfaces[hub.id];
            return (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <Link
                  href={hub.href}
                  data-brand={hub.id}
                  className={`group relative flex h-full flex-col justify-between gap-12 overflow-hidden border border-white/10 p-10 transition-transform duration-300 hover:-translate-y-2 md:p-14 ${s.wrap}`}
                >
                  <div className="relative z-10">
                    <Logo brand={hub.id} height={72} className="mb-10" />
                    <p className={`max-w-md text-lg font-light leading-relaxed ${s.body}`}>
                      {hub.description}
                    </p>
                  </div>

                  <span
                    className={`relative z-10 inline-flex items-center text-base font-bold uppercase tracking-widest ${s.cta}`}
                  >
                    Explore {hub.name}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>

                  {/* Decorative glow */}
                  <div
                    className={`absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110 ${s.glow}`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
