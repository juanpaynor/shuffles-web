"use client";

import { ArrowRight, Ticket, Music, UtensilsCrossed, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Pro Bowling",
        description: "12 state-of-the-art lanes with interactive scoring and VIP service.",
        icon: Ticket,
        color: "bg-blue-600",
        gradient: "from-blue-600 to-blue-400",
        colSpan: "md:col-span-2",
    },
    {
        title: "Karaoke Pods",
        description: "Soundproof private rooms with over 50,000 songs.",
        icon: Music,
        color: "bg-purple-600",
        gradient: "from-purple-600 to-purple-400",
        colSpan: "md:col-span-1",
    },
    {
        title: "Gourmet Eats",
        description: "Chef-crafted burgers, pizzas, and shareable platters.",
        icon: UtensilsCrossed,
        color: "bg-orange-600",
        gradient: "from-orange-600 to-orange-400",
        colSpan: "md:col-span-1",
    },
    {
        title: "Darts & Games",
        description: "Augmented reality darts and classic arcade games.",
        icon: Target,
        color: "bg-emerald-600",
        gradient: "from-emerald-600 to-emerald-400",
        colSpan: "md:col-span-2",
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function Features() {
    return (
        <section id="activities" className="py-32 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 md:text-center"
                >
                    <h2 className="font-headline text-5xl font-black tracking-tight text-foreground sm:text-6xl mb-6">
                        More than just bowling.
                    </h2>
                    <p className="text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
                        Explore a playground built for adults (and kids who verify their age).
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`group relative overflow-hidden rounded-[2rem] bg-secondary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 transform-gpu ${feature.colSpan}`}
                        >
                            <div className="relative z-10 flex h-full flex-col justify-between gap-10 p-10">
                                <div>
                                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg text-white`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="mb-3 font-headline text-3xl font-bold text-foreground tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                <Link
                                    href="#book"
                                    className="inline-flex items-center text-base font-bold text-primary group-hover:underline decoration-2 underline-offset-4"
                                >
                                    Book Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            {/* Decorative Circle with Blur */}
                            <div className={`absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-110`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
