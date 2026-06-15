"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  type: "mobile" | "web";
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <>
      <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
        >
          {/* Area luar untuk menutup modal */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
          
          {/* Konten Modal Utama */}
          <motion.div
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-7xl h-[90vh] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#222] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl transition-colors duration-500"
          >
            {/* Tombol Tutup */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 bg-gray-200 dark:bg-black/50 hover:bg-gray-300 dark:hover:bg-white/20 rounded-full flex items-center justify-center text-black dark:text-white transition-colors border border-transparent dark:border-white/10 backdrop-blur-sm"
            >
              <IoClose size={24} />
            </button>

            {/* Sisi Kiri: Info Proyek & Fitur */}
            <div className="md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 dark:border-[#222] flex flex-col z-20 bg-gray-50 dark:bg-[#0a0a0a] overflow-y-auto transition-colors duration-500">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                className="text-4xl font-bold tracking-tighter mb-4 text-black dark:text-white transition-colors duration-500"
              >
                {project.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 transition-colors duration-500"
              >
                {project.description}
              </motion.p>
              
              <div className="mt-auto pt-8 border-t border-gray-200 dark:border-[#222] transition-colors duration-500">
                <motion.h4 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 font-mono transition-colors duration-500"
                >
                  Key Features
                </motion.h4>
                <div className="flex flex-col gap-4">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-1.5 shrink-0 transition-colors duration-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug transition-colors duration-500">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Galeri Animasi 3D */}
            <div className="md:w-2/3 relative overflow-hidden bg-gray-100 dark:bg-[#050505] flex items-center justify-center transition-colors duration-500" style={{ perspective: "2000px" }}>
               {/* Ornamen Latar */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
               
               {/* Container Scroll Horizontal dengan Perspektif 3D */}
               <div 
                 className="w-full h-full overflow-x-auto overflow-y-hidden flex items-center px-12 md:px-32 py-12" 
                 style={{ 
                   transformStyle: "preserve-3d",
                   scrollbarWidth: "none", /* Firefox */
                   msOverflowStyle: "none"  /* IE 10+ */
                 }}
               >
                 <style dangerouslySetInnerHTML={{__html: `
                   ::-webkit-scrollbar { display: none; }
                 `}} />
                 
                 <div className="flex gap-16 md:gap-24 items-center min-w-max">
                   {project.images.map((img, idx) => (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, rotateY: 30, rotateZ: idx % 2 === 0 ? 5 : -5, x: 100, scale: 0.8 }}
                       animate={{ opacity: 1, rotateY: -15, rotateZ: idx % 2 === 0 ? -3 : 3, x: 0, scale: 1 }}
                       whileHover={{ scale: 1.05, rotateY: 0, rotateZ: 0, zIndex: 50, transition: { duration: 0.3 } }}
                       transition={{ 
                         duration: 0.8, 
                         delay: 0.2 + (idx * 0.15), 
                         type: "spring", 
                         bounce: 0.3 
                       }}
                       onClick={() => setSelectedImage(img)}
                       className={`relative ${
                         project.type === 'web' 
                           ? 'w-[400px] h-[250px] md:w-[750px] md:h-[450px]' 
                           : 'w-[300px] h-[550px] md:w-[350px] md:h-[700px]'
                        } rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-300 dark:border-white/5 shrink-0 bg-white dark:bg-[#111] transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)] flex items-center justify-center cursor-pointer`}
                       style={{ transformStyle: "preserve-3d" }}
                     >
                       <img 
                         src={img} 
                         alt={`${project.title} screenshot ${idx + 1}`} 
                         className={`w-full h-full ${project.type === 'web' ? 'object-contain' : 'object-cover'}`}
                       />
                     </motion.div>
                   ))}
                 </div>
               </div>
            </div>

          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <IoClose size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(0,0,0,1)] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
