"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20 border-t border-white/5">
            <div className="container px-4 grid md:grid-cols-2 gap-16 items-start">

                {/* Brand */}
                <div className="flex flex-col items-start gap-8">
                    <Link href="/" className="font-headline text-4xl font-black uppercase tracking-widest">
                        Shuffles
                    </Link>
                    <div className="space-y-2 text-white/60 font-light">
                        <p>Pueblo De Panay</p>
                        <p>Near Roxas City Terminal</p>
                        <p>Roxas City, Capiz</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-neon-orange uppercase tracking-wider text-sm font-bold">Open Daily</p>
                        <p className="text-white/80">10:00 AM - 2:00 AM</p>
                    </div>
                </div>

                {/* Minimal Nav */}
                <div className="flex flex-col md:items-end gap-6 text-2xl font-bold uppercase tracking-tighter">
                    <Link href="#book" className="hover:text-neon-orange transition-colors">Book a Table</Link>
                    <Link href="#experience" className="hover:text-neon-orange transition-colors">Experience</Link>
                    <Link href="#" className="hover:text-neon-orange transition-colors">Contact</Link>
                </div>

            </div>

            <div className="container px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-white/30 uppercase tracking-widest">
                <p>© 2025 Shuffles. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white">Instagram</Link>
                    <Link href="#" className="hover:text-white">Facebook</Link>
                </div>
            </div>
        </footer>
    );
}
