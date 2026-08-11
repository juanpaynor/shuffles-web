"use client";

import { Button } from '@/components/ui/button';
import Logo from '@/components/site/logo';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Parallax Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const mouseX = useSpring(mousePosition.x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(mousePosition.y, { stiffness: 100, damping: 30 });

  return (
    <section ref={ref} className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-maroon text-center perspective-1000">

      {/* Parallax Background Layers */}
      <motion.div style={{ y: y1, x: mouseX }} className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-neon-secondary/20 blur-[100px]" />
      </motion.div>

      <motion.div style={{ y: y2, x: useTransform(mouseX, val => val * -1.5) }} className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-neon-orange/10 blur-[120px]" />
      </motion.div>

      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <motion.div style={{ opacity }} className="container relative z-10 flex flex-col items-center px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Glowing Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-neon-orange mb-8 mx-auto shadow-[0_0_20px_rgba(251,98,65,0.8)]"
          />

          <h1 className="sr-only">Shuffles Roxas City</h1>
          <Logo brand="shuffles" height={140} priority className="mx-auto drop-shadow-2xl md:!h-[200px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-sm font-bold tracking-[0.4em] text-neon-orange uppercase"
          >
            Est. 2025 • Roxas City
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40"
          >
            An{' '}
            <Link href="/" className="text-white/70 transition-colors hover:text-axis-gold">
              Adventure Axis
            </Link>{' '}
            Hub
          </motion.div>
        </motion.div>

        {/* Buttons with Hover Lift */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col w-full max-w-xs gap-6 sm:flex-row sm:max-w-md mt-12"
        >
          <Button asChild size="lg" className="h-14 w-full rounded-none bg-neon-orange text-lg font-bold uppercase tracking-wider text-white hover:bg-neon-orange/90 transition-all hover:-translate-y-1 shadow-lg hover:shadow-neon-orange/20 border-0">
            <Link href="#book">Book Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 w-full rounded-none border-white/20 bg-transparent text-lg font-bold uppercase tracking-wider text-white hover:bg-white/5 hover:text-white hover:border-white transition-all hover:-translate-y-1">
            <Link href="#experience">Explore</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll to Explore</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-neon-orange to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
