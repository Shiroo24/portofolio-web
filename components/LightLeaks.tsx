"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LightLeaks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white dark:bg-[#050505] transition-colors duration-500">
      {/* Leak 1 (Follows Mouse slowly) */}
      <motion.div 
        animate={{ 
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 2 }}
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-indigo-300/30 dark:bg-indigo-600/10 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
      />
      
      {/* Static Animated Leaks */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-300/30 dark:bg-purple-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-300/30 dark:bg-blue-900/20 blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
      />
      
      <motion.div 
        animate={{ 
          x: ["0%", "10%", "0%"],
          y: ["0%", "20%", "0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-emerald-300/20 dark:bg-emerald-900/10 blur-[130px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
      />
    </div>
  );
}
