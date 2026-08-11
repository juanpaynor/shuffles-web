"use client";

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const stats = [
  { value: '2', label: 'Entertainment Hubs' },
  { value: '2025', label: 'Established' },
  { value: 'Roxas City', label: 'Capiz, Philippines' },
];

// TODO: replace with Adventure Axis' real contact details.
const contact = [
  { icon: MapPin, label: 'Roxas City, Capiz, Philippines' },
  { icon: Mail, label: 'hello@adventureaxis.ph' },
  { icon: Phone, label: '+63 900 000 0000' },
];

export default function AxisAbout() {
  return (
    <section id="about" className="relative overflow-hidden bg-axis-slate py-32 text-white">
      <div className="container grid gap-20 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-axis-gold">
            About Us
          </p>
          <h2 className="mb-8 font-headline text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
            One company.
            <span className="block text-axis-gold">Every kind of night out.</span>
          </h2>
          <p className="max-w-xl text-xl font-light leading-relaxed text-white/60">
            Adventure Axis Incorporated builds and operates entertainment destinations in
            Roxas City, Capiz. From late-night lanes and private karaoke suites at Shuffles
            to bayside food and live music at BayRox, we run the places this city meets in.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 bg-axis-slate p-8 transition-colors hover:bg-white/5"
              >
                <span className="font-headline text-3xl font-black text-axis-gold">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:pt-24"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-axis-gold">
            Get in Touch
          </p>
          <h3 className="mb-10 font-headline text-3xl font-black uppercase tracking-tight md:text-4xl">
            Events, partnerships & bookings
          </h3>

          <ul className="space-y-6">
            {contact.map((row) => (
              <li key={row.label} className="flex items-center gap-5 text-lg text-white/70">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-axis-gold">
                  <row.icon className="h-5 w-5" />
                </span>
                {row.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
