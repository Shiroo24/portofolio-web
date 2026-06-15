"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
        >
          {/* Area luar untuk menutup modal */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
          
          {/* Konten Modal Utama */}
          <motion.div
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-2xl overflow-hidden flex flex-col shadow-2xl p-8 md:p-12 transition-colors duration-500"
          >
            {/* Tombol Tutup */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 bg-gray-200 dark:bg-black/50 hover:bg-gray-300 dark:hover:bg-white/20 rounded-full flex items-center justify-center text-black dark:text-white transition-colors border border-transparent dark:border-white/10 backdrop-blur-sm"
            >
              <IoClose size={24} />
            </button>

            <motion.h2 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-black dark:text-white transition-colors duration-500"
            >
              Let's <span className="text-orange-500 dark:text-[#D8FF00] transition-colors duration-500">Connect</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-md transition-colors duration-500"
            >
              Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
                href="mailto:andysilvano2406@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-200 dark:border-[#222] rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors text-black dark:text-white">
                  <BsEnvelope size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Email</p>
                  <p className="text-sm font-medium text-black dark:text-white transition-colors duration-500">andysilvano2406</p>
                </div>
              </motion.a>

              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                href="https://wa.me/6285748805963" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-200 dark:border-[#222] rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors text-black dark:text-white">
                  <SiWhatsapp size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">WhatsApp</p>
                  <p className="text-sm font-medium text-black dark:text-white transition-colors duration-500">+62 857 4880 5963</p>
                </div>
              </motion.a>

              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
                href="https://linkedin.com/in/andysilvano" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-200 dark:border-[#222] rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-colors text-black dark:text-white">
                  <BsLinkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">LinkedIn</p>
                  <p className="text-sm font-medium text-black dark:text-white transition-colors duration-500">Andy Silvano</p>
                </div>
              </motion.a>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
