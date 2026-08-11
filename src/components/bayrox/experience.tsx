"use client";

import { motion, type Variants } from 'framer-motion';
import { UtensilsCrossed, Music, Sun, Users, Beer, PartyPopper } from 'lucide-react';

/*
 * PLACEHOLDER CONTENT — these are plausible bayside-hub offerings, not
 * confirmed BayRox details. Swap the copy for the real line-up.
 */
const offerings = [
  {
    title: 'Food Park',
    description: 'Local kitchens and street-food stalls under one open-air roof.',
    icon: UtensilsCrossed,
    accent: 'bg-bayrox-red',
    span: 'md:col-span-2',
  },
  {
    title: 'Live Music',
    description: 'Weekend sets from Capiz bands, right on the water.',
    icon: Music,
    accent: 'bg-bayrox-blue',
    span: 'md:col-span-1',
  },
  {
    title: 'Sunset Deck',
    description: 'The best west-facing view in Roxas City. Come early.',
    icon: Sun,
    accent: 'bg-bayrox-orange',
    span: 'md:col-span-1',
  },
  {
    title: 'Bayside Bar',
    description: 'Cold beer, cocktails and shareable plates till late.',
    icon: Beer,
    accent: 'bg-bayrox-green',
    span: 'md:col-span-1',
  },
  {
    title: 'Family Weekends',
    description: 'Open lawn, space to run around, all-ages by day.',
    icon: Users,
    accent: 'bg-bayrox-yellow',
    span: 'md:col-span-1',
  },
  {
    title: 'Events & Parties',
    description: 'Birthdays, launches and barkada nights — we host it.',
    icon: PartyPopper,
    accent: 'bg-bayrox-red',
    span: 'md:col-span-2',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 14 } },
};

export default function BayRoxExperience() {
  return (
    <section id="experience" className="bg-bayrox-cream py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-bayrox-red">
            What&apos;s Here
          </p>
          <h2 className="mb-6 font-display text-5xl font-black tracking-tight text-bayrox-ink sm:text-6xl">
            Everything, by the bay.
          </h2>
          <p className="mx-auto max-w-2xl text-2xl font-medium text-bayrox-ink/60">
            Eat, drink, listen and stay till the sun drops behind the water.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {offerings.map((o) => (
            <motion.div
              key={o.title}
              variants={item}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-shadow duration-300 hover:shadow-xl ${o.span}`}
            >
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md ${o.accent}`}
              >
                <o.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-3xl font-bold tracking-tight text-bayrox-ink">
                {o.title}
              </h3>
              <p className="text-lg font-medium leading-relaxed text-bayrox-ink/60">
                {o.description}
              </p>

              <div
                className={`absolute -bottom-20 -right-20 h-56 w-56 rounded-full opacity-10 blur-3xl transition-transform duration-500 group-hover:scale-125 ${o.accent}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
