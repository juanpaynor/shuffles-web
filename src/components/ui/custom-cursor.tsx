"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => document.body.classList.add("cursor-clicked");
        const handleMouseUp = () => document.body.classList.remove("cursor-clicked");

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], input, label {
          cursor: none !important;
        }
      `}</style>
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-neon-orange mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-neon-orange"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "12px",
                    translateY: "12px",
                }}
            />
        </>
    );
}
