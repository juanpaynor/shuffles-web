"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Ticket, Gamepad2, Mic2, Utensils } from 'lucide-react';

const experiences = [
    {
        id: 'bowling',
        title: 'Bowling',
        subtitle: '12 Pro Lanes',
        description: 'Interactive scoring. VIP service. The perfect strike.',
        icon: Ticket,
        color: '#FB6241', // Neon Orange
        gradient: 'from-[#FB6241] to-[#AA3A2F]' // Orange to Maroon Accent
    },
    {
        id: 'billiards',
        title: 'Billiards',
        subtitle: 'Classic & Sharp',
        description: 'Tournament grade tables for the serious player.',
        icon: Gamepad2,
        color: '#FFFFFF',
        gradient: 'from-white to-gray-400'
    },
    {
        id: 'darts',
        title: 'Darts',
        subtitle: 'Augmented Precision',
        description: 'Digital tracking meets classic competition.',
        icon: Gamepad2, // Changed icon for variety in real assets
        color: '#FB6241',
        gradient: 'from-[#AA3A2F] to-[#5E1626]'
    },
    {
        id: 'karaoke',
        title: 'Karaoke',
        subtitle: 'Private Suites',
        description: 'Soundproof luxury. 50,000+ songs. Your stage.',
        icon: Mic2,
        color: '#FFFFFF',
        gradient: 'from-gray-200 to-gray-500'
    }
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth progress for background changes
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section ref={containerRef} id="experience" className="relative bg-maroon">

            <div className="flex flex-col lg:flex-row">

                {/* Left: Scrollable Content */}
                <div className="w-full lg:w-1/2 relative z-10 px-4 md:px-12 py-20 lg:py-0">
                    <div className="lg:h-[20vh]" /> {/* Spacer */}
                    {experiences.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0.3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-50% 0px -50% 0px" }}
                            onViewportEnter={() => setActiveCard(index)}
                            className="min-h-[70vh] flex flex-col justify-center border-l-2 border-white/10 pl-8 md:pl-16 transition-all duration-500"
                        >
                            <div className="mb-4 flex items-center gap-4 text-white/50">
                                <item.icon className="h-6 w-6" />
                                <span className="font-bold tracking-widest uppercase text-sm">Experience 0{index + 1}</span>
                            </div>

                            <h2 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 transition-colors duration-500 ${activeCard === index ? 'text-white' : 'text-transparent bg-clip-text bg-stroke text-stroke-white'}`} style={{ WebkitTextStroke: activeCard === index ? '0px' : '1px rgba(255,255,255,0.2)' }}>
                                {item.title}
                            </h2>

                            <h3 className="text-2xl font-light text-neon-orange tracking-widest uppercase mb-6">
                                {item.subtitle}
                            </h3>

                            <p className="text-xl text-white/80 max-w-md font-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                    <div className="lg:h-[20vh]" /> {/* Spacer */}
                </div>

                {/* Right: Sticky Visual */}
                <div className="hidden lg:block w-1/2 h-screen sticky top-0 right-0 overflow-hidden bg-black/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Animated Background Block */}
                        <motion.div
                            className="absolute inset-0 opacity-20 blur-3xl transition-colors duration-700"
                            style={{
                                background: `linear-gradient(45deg, ${experiences[activeCard].color}, transparent)`
                            }}
                        />

                        {/* Central Visual Element (Abstract Shape) */}
                        <motion.div
                            key={activeCard}
                            initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            className="relative w-96 h-96 rounded-3xl bg-gradient-to-br shadow-2xl shadow-black/50 overflow-hidden border border-white/10"
                            style={{ backgroundImage: `linear-gradient(135deg, ${experiences[activeCard].color}40, rgba(0,0,0,0.8))` }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                {(() => {
                                    const ActiveIcon = experiences[activeCard].icon;
                                    return <ActiveIcon className="text-white w-32 h-32 opacity-20" />;
                                })()}
                            </div>

                            {/* Decorative details */}
                            <div className="absolute bottom-4 left-4 text-xs font-mono text-white/50">
                                ID: {experiences[activeCard].id.toUpperCase()}
                            </div>
                            <div className="absolute top-4 right-4 text-xs font-mono text-white/50">
                    // 0{activeCard + 1}
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
