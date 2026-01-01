"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StickyCTA() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsVisible(latest > 500);
        });
    }, [scrollY]);

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:hidden"
        >
            <Link
                href="#book"
                className="w-full max-w-sm bg-neon-orange text-white font-bold uppercase tracking-widest py-4 text-center shadow-2xl shadow-neon-orange/20 rounded-none"
            >
                Book Now
            </Link>
        </motion.div>
    );
}
