"use client";

import { motion } from "framer-motion";

export default function AnimatedDots() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Radial mask to fade the dots towards the edges so it blends beautifully */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f9fafb_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] transition-colors duration-500" />
    </div>
  );
}
