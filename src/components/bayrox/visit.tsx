"use client";

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

// TODO: confirm BayRox' real address, hours and contact number.
const details = [
  { icon: MapPin, label: 'Where', value: 'Baybay, Roxas City, Capiz' },
  { icon: Clock, label: 'When', value: 'Open daily · 4:00 PM – 12:00 AM' },
  { icon: Phone, label: 'Reach us', value: '+63 900 000 0000' },
];

export default function BayRoxVisit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-bayrox-blue py-32 text-white">
      {/* Sun disc */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-bayrox-yellow/30 blur-[100px]" />

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-bayrox-yellow">
            Plan a Visit
          </p>
          <h2 className="mb-8 font-display text-5xl font-black tracking-tight md:text-7xl">
            See you by the water.
          </h2>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex flex-col items-center gap-3 rounded-[2rem] bg-white/10 p-8 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-bayrox-yellow">
                  <d.icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  {d.label}
                </span>
                <span className="text-lg font-medium leading-snug">{d.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
