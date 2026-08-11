"use client";

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

export default function Atmosphere() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="relative py-40 overflow-hidden bg-black text-white group"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 98, 65, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-neon-orange uppercase tracking-[0.3em] text-sm font-bold mb-4">
                        The Vibe
                    </p>
                    <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-widest mb-8">
                        Electric Air
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                        From the crack of the cue ball to the bass in the lounge.
                        <span className="text-white block mt-2">Every moment resonates.</span>
                    </p>

                    {/* Abstract Grid that reveals on hover */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
                        {['Rhythm', 'Taste', 'Sound', 'Light'].map((word, i) => (
                            <div key={word} className="bg-black py-12 flex flex-col items-center justify-center gap-4 group/item hover:bg-white/5 transition-colors duration-500">
                                <div className="w-2 h-2 rounded-full bg-neon-orange opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                <span className="uppercase tracking-[0.2em] text-sm text-white/40 group-hover/item:text-white transition-colors">{word}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
