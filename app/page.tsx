"use client";

import { useState } from "react";
import ProjectModal, { Project } from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import LightLeaks from "@/components/LightLeaks";
import AnimatedDots from "@/components/AnimatedDots";
import GalleryImage from "@/components/GalleryImage";
import { motion } from "framer-motion";
import { SiKotlin, SiCss, SiNodedotjs, SiSpringboot, SiGooglesheets, SiMysql, SiAndroidstudio, SiThymeleaf, SiWhatsapp, SiInstagram } from "react-icons/si";
import { BsFiletypeXlsx, BsSun, BsMoon } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const projectsData: Record<string, Project> = {
    "zkn-log": {
      id: "zkn-log",
      title: "ZKN LOG Mobile",
      description: "Aplikasi mobile untuk manajemen gudang & logistik dengan sinkronisasi waktu nyata.",
      features: [
        "Real-time Inventory Sync",
        "Fast Barcode Scanning Engine",
        "Putaway & Picking Workflow",
        "Offline Mode Support"
      ],
      type: "mobile",
      images: ["/mockups/zknlog1.png", "/mockups/zknlog2.png", "/mockups/zknlog3.png"]
    },
    "mapan": {
      id: "mapan",
      title: "MAPAN Dashboard",
      description: "Dashboard finansial interaktif untuk memonitor laporan dan performa perusahaan.",
      features: [
        "Interactive Financial Charts",
        "Real-time Data Processing",
        "Customizable Reporting",
        "Secure Export to PDF/Excel"
      ],
      type: "web",
      images: ["/mockups/mapan.png", "/mockups/mapan.png", "/mockups/mapan.png", "/mockups/mapan.png"]
    },
    "drive-sync": {
      id: "drive-sync",
      title: "Drive Sync (VBA Macro)",
      description: "Otomatisasi pengolahan data WMS menggunakan integrasi GAS, Spreadsheet dan Excel.",
      features: [
        "Automated Data Comparison (Alat Compare)",
        "Stock Opname",
        "Cycle Count"
      ],
      type: "web",
      images: ["/mockups/vba1.png"]
    },
    "erp-integration": {
      id: "erp-integration",
      title: "ZKN LOG WEB (ERP)",
      description: "Suport Sistem.",
      features: [
        "Logistics Admin Panel",
        "Manifest Flow Tracking",
        "Corporate Systems Integration",
        "Transaction Reporting",
        "Compare Tools"
      ],
      type: "web",
      images: ["/mockups/web1.png", "/mockups/web2.png", "/mockups/web3.png", "/mockups/web4.png", "/mockups/web5.png"]
    },
    "streambox": {
      id: "streambox",
      title: "StreamBox Player",
      description: "Aplikasi pemutar musik gratis dengan fitur streaming tanpa batas dan offline caching.",
      features: [
        "Unlimited Free Streaming",
        "Offline Playback / Caching",
        "Smart Playlist Management",
        "Import Playlist From YoutubeMusic"
      ],
      type: "mobile",
      images: [
        "/mockups/streambox1.png", "/mockups/streambox2.png", "/mockups/streambox3.png", 
        "/mockups/streambox4.png", "/mockups/streambox5.png", "/mockups/streambox6.png",
        "/mockups/streambox7.png", "/mockups/streambox8.png", "/mockups/streambox9.png"
      ]
    }
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
    <main className="relative min-h-screen text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500 overflow-x-hidden">
      <AnimatedDots />
      <LightLeaks />
      
      {/* NAVBAR MINIMALIS (Referensi Gambar 1) */}
      <nav className="relative z-50 flex justify-between items-start p-8 text-xs md:text-sm font-medium tracking-wide">
        <div className="uppercase text-black dark:text-white font-bold tracking-widest transition-colors duration-500">Portfolio</div>
        <div className="hidden md:flex flex-col text-center space-y-1 text-gray-500 dark:text-gray-200 transition-colors duration-500">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {isDarkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>
          <button onClick={() => setIsContactOpen(true)} className="uppercase text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-widest font-bold">
            Contact
          </button>
        </div>
      </nav>

      {/* HERO SECTION (Mixed Typography) */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden">
        
        {/* Mixed Typography Foreground */}
        <div className="z-10 flex flex-col items-center justify-center text-center mt-[-10vh]">
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[16vw] md:text-[11vw] leading-[0.75] font-black tracking-tighter text-black dark:text-white transition-colors duration-500"
          >
            HI THERE
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="z-20 my-4 md:my-2"
          >
            <span className={`${dancing.className} text-[18vw] md:text-[12vw] leading-[0.4] text-[#D8FF00] drop-shadow-2xl lowercase pr-4`}>
              i make
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-[16vw] md:text-[11vw] leading-[0.8] font-black tracking-tighter text-black dark:text-white mt-4 md:mt-2 transition-colors duration-500"
          >
            EVERYTHING
          </motion.h1>

        </div>

        {/* Elemen Dekoratif / Glassmorphism / Info Tambahan */}
        <div className="absolute bottom-12 right-8 md:right-12 flex flex-col items-end max-w-xs text-right">
          <div className="flex gap-2 mb-4">
            {/* Placeholder untuk Icon Social Media */}
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">GH</div>
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">LI</div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            I craft powerful web experiences and scalable ERP systems. Bridging the gap between raw data logic and sleek, modern interfaces.
          </p>
        </div>
      </section>
{/* GALLERY / PROJECTS (Bento Grid) */}
      <section id="projects" className="px-8 md:px-12 py-24">

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between md:items-end mb-12 border-b border-gray-300 dark:border-gray-800 pb-8 gap-6 transition-colors duration-500"
        >
          <h2 className="text-[10vw] md:text-[7vw] leading-none font-bold tracking-tighter flex flex-col md:flex-row items-baseline gap-2 md:gap-4">
            <span className="text-black dark:text-white md:text-gray-500 md:dark:text-gray-500 mt-2 md:mt-0 transition-colors duration-500">MY</span>
            <span className={`${dancing.className} text-orange-500 dark:text-[#D8FF00] lowercase text-[14vw] md:text-[9vw] font-normal tracking-normal -rotate-2 drop-shadow-lg transition-colors duration-500`}>gallery</span>
          </h2>
          <p className="max-w-sm md:text-right text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">
            A selection of recent works, from warehouse management mobile applications to financial dashboards and automation scripts.
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">

          {/* Kotak 1: Paling Besar (2 Kolom, 2 Baris) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedProject(projectsData["zkn-log"])}
            className="md:col-span-2 md:row-span-2 bg-[#fafafa] dark:bg-[#111] border border-gray-300 dark:border-transparent p-6 flex flex-col justify-between group hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer relative overflow-hidden shadow-none"
          >
            <div className="absolute inset-0 bg-white/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-40 flex items-center justify-center backdrop-blur-sm pointer-events-none">
              <span className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Lihat Selengkapnya</span>
            </div>
            <div className="relative w-full h-full bg-gray-100 dark:bg-[#0a0a0a] mb-6 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity flex items-center justify-center overflow-hidden">
              <GalleryImage src={projectsData["zkn-log"].images[0]} alt="ZKN" type="mobile" />
            </div>
            <div className="relative z-20">
              <h3 className="text-2xl font-bold">ZKN LOG Mobile</h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Warehouse Management & Barcode Scanning</p>
            </div>
          </motion.div>

          {/* Kotak 2: Standar (1 Kolom) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedProject(projectsData["mapan"])}
            className="bg-[#fafafa] dark:bg-[#111] border border-gray-300 dark:border-transparent p-6 flex flex-col justify-between group hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer relative overflow-hidden shadow-none"
          >
            <div className="absolute inset-0 bg-white/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-40 flex items-center justify-center backdrop-blur-sm pointer-events-none">
              <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-xs rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">Lihat Selengkapnya</span>
            </div>
            <div className="relative w-full h-full bg-gray-100 dark:bg-[#0a0a0a] mb-6 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity flex items-center justify-center overflow-hidden">
              <GalleryImage src={projectsData["mapan"].images[0]} alt="MAPAN" type="web" />
            </div>
            <div className="relative z-20">
              <h3 className="text-lg font-bold">MAPAN</h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Financial Dashboard</p>
            </div>
          </motion.div>

          {/* Kotak 3: Standar dengan Warna Kontras agar 'nge-pop' */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedProject(projectsData["drive-sync"])}
            className="bg-[#111] dark:bg-white text-white dark:text-black border border-transparent dark:border-gray-300 p-6 flex flex-col justify-between group hover:bg-[#1a1a1a] dark:hover:bg-gray-100 transition-all duration-500 cursor-pointer relative overflow-hidden shadow-none"
          >
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-40 flex items-center justify-center backdrop-blur-sm pointer-events-none">
              <span className="px-4 py-2 bg-white dark:bg-black text-black dark:text-white font-bold text-xs rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">Lihat Selengkapnya</span>
            </div>
            <div className="relative w-full h-full bg-[#222] dark:bg-[#0a0a0a] mb-6 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center overflow-hidden">
              <GalleryImage src={projectsData["drive-sync"].images[0]} alt="VBA" type="web" />
            </div>
            <div className="relative z-20">
              <h3 className="text-lg font-bold">Drive Sync</h3>
              <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">GAS & Sheets Automation</p>
            </div>
          </motion.div>

          {/* Kotak 4: Melebar (2 Kolom) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedProject(projectsData["erp-integration"])}
            className="md:col-span-2 bg-[#fafafa] dark:bg-[#111] border border-gray-300 dark:border-transparent p-6 flex flex-col justify-between group hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer relative overflow-hidden shadow-none"
          >
            <div className="absolute inset-0 bg-white/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-40 flex items-center justify-center backdrop-blur-sm pointer-events-none">
              <span className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Lihat Selengkapnya</span>
            </div>
            <div className="relative w-full h-full bg-gray-100 dark:bg-[#0a0a0a] mb-6 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity flex items-center justify-center overflow-hidden">
              <GalleryImage src={projectsData["erp-integration"].images[0]} alt="ERP" type="web" />
            </div>
            <div className="relative z-20">
              <h3 className="text-lg font-bold">ERP Integration</h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Spring Boot Backend API</p>
            </div>
          </motion.div>

          {/* Kotak 5: StreamBox */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}
            whileHover={{ scale: 1.01, y: -5 }}
            onClick={() => setSelectedProject(projectsData["streambox"])}
            className="md:col-span-4 bg-[#fafafa] dark:bg-[#111] border border-gray-300 dark:border-transparent p-6 flex flex-col justify-between group hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer relative overflow-hidden shadow-none"
          >
            <div className="absolute inset-0 bg-white/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-40 flex items-center justify-center backdrop-blur-sm pointer-events-none">
              <span className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Lihat Selengkapnya</span>
            </div>
            <div className="relative w-full h-full min-h-[150px] bg-gray-100 dark:bg-[#0a0a0a] mb-6 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity flex items-center justify-center overflow-hidden">
              <GalleryImage src={projectsData["streambox"].images[0]} alt="StreamBox" type="mobile" />
            </div>
            <div className="relative z-20">
              <h3 className="text-xl font-bold">StreamBox</h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Free Music Player Application</p>
            </div>
          </motion.div>

        </div>
      </section>
            {/* SKILLS SECTION */}
                  <section id="skills" className="px-8 md:px-12 py-24 border-t border-gray-300 dark:border-gray-900 transition-colors duration-500">
                    <div className="flex flex-col md:flex-row gap-12 md:items-start">

                      {/* Judul Kiri */}
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="md:w-1/3 relative md:sticky md:top-12 z-10"
                      >
                        <h2 className="text-[10vw] md:text-[7vw] leading-none font-bold tracking-tighter flex flex-col md:flex-row items-baseline gap-2 md:gap-4">
                          <span className="text-black dark:text-white md:text-gray-500 md:dark:text-gray-500 mt-2 md:mt-0 transition-colors duration-500">TECH</span>
                          <span className={`${dancing.className} text-orange-500 dark:text-[#D8FF00] lowercase text-[14vw] md:text-[9vw] font-normal tracking-normal -rotate-2 drop-shadow-lg transition-colors duration-500`}>stack</span>
                        </h2>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500 max-w-xs">
                          Membangun fondasi aplikasi mobile, logika backend ERP, hingga otomatisasi pengolahan data.
                        </p>
                      </motion.div>

                      {/* Grid Kanan (Ikon) */}
                      <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">

                        {/* Kotlin */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <SiKotlin className="text-4xl text-gray-600 group-hover:text-[#7F52FF] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">Kotlin</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Jetpack Compose</span>
                        </div>

                        {/* Spring Boot */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <SiSpringboot className="text-4xl text-gray-600 group-hover:text-[#6DB33F] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">Spring Boot</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Backend ERP</span>
                        </div>

                        {/* Node.js */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <SiNodedotjs className="text-4xl text-gray-600 group-hover:text-[#339933] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">Node.js</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Server / Logic</span>
                        </div>

                        {/* CSS / Tailwind */}
                                    <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                                      <SiCss className="text-4xl text-gray-600 group-hover:text-[#1572B6] transition-colors duration-300 mb-4" />
                                      <span className="text-sm font-bold tracking-wide">CSS</span>
                                      <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Tailwind Styling</span>
                                    </div>

                        {/* SQL */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <SiMysql className="text-4xl text-gray-600 group-hover:text-[#4479A1] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">SQL</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Database</span>
                        </div>

                        {/* Google Apps Script */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <SiGooglesheets className="text-4xl text-gray-600 group-hover:text-[#34A853] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">GAS</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Automation</span>
                        </div>

                        {/* Excel VBA */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <BsFiletypeXlsx className="text-4xl text-gray-600 group-hover:text-[#217346] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">VBA</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">WMS Macros</span>
                        </div>

                        {/* Tools (VS Code / IDEA) */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <VscVscode className="text-4xl text-gray-600 group-hover:text-[#007ACC] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">Tools</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">VS Code & IDEA</span>
                        </div>

                        {/* Android Studio */}
                        <div className="flex flex-col items-center justify-center p-8 bg-[#fafafa] dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] border border-gray-300 dark:border-[#222] transition-colors group shadow-none">
                          <SiAndroidstudio className="text-4xl text-gray-600 group-hover:text-[#3DDC84] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">IDE</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Android Studio</span>
                        </div>

                        {/* Thymeleaf */}
                        <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#111] hover:bg-gray-50 dark:hover:bg-[#1a1a1a] border border-gray-200 dark:border-[#222] transition-colors group shadow-sm dark:shadow-none">
                          <SiThymeleaf className="text-4xl text-gray-600 group-hover:text-[#005F0F] transition-colors duration-300 mb-4" />
                          <span className="text-sm font-bold tracking-wide">Template</span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Thymeleaf</span>
                        </div>

                      </div>
                    </div>
                  </section>
                  {/* EXPERIENCE SECTION */}
                        <section id="experience" className="relative z-10 px-8 md:px-12 py-24 border-t border-gray-300 dark:border-gray-900 bg-white dark:bg-[#070707] transition-colors duration-500">
                          <div className="flex flex-col md:flex-row gap-12 md:items-start">

                            {/* Judul Kiri */}
                            <motion.div 
                              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                              className="md:w-1/3 relative md:sticky md:top-12 z-10"
                            >
                              <h2 className="text-[10vw] md:text-[7vw] leading-none font-bold tracking-tighter flex flex-col">
                                <span className={`${dancing.className} text-orange-500 dark:text-[#D8FF00] lowercase text-[14vw] md:text-[9vw] font-normal tracking-normal -rotate-2 drop-shadow-lg leading-[0.6] ml-[-10px] transition-colors duration-500`}>work</span>
                                <span className="text-black dark:text-white md:text-gray-500 md:dark:text-gray-500 mt-4 md:mt-2 transition-colors duration-500">HISTORY</span>
                              </h2>
                              <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500 max-w-xs">
                                Berfokus pada pengembangan sistem otomatisasi dan aplikasi internal untuk efisiensi operasional logistik.
                              </p>
                            </motion.div>

                            {/* Daftar Pengalaman Kanan */}
                            <div className="md:w-2/3 flex flex-col">

                              {/* Pengalaman 1: Aplikasi Mobile */}
                              <motion.div 
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                                className="border-b border-gray-300 dark:border-gray-800 pb-12 mb-12 group transition-colors duration-500"
                              >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                  <div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-gray-300 transition-colors">
                                      Application Developer (Logistics Support)
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">Independent Developer</p>
                                  </div>
                                  <span className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-[#111] px-3 py-1 border border-gray-300 dark:border-[#222] transition-colors duration-500">
                                    2026 - Present
                                  </span>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                                  Merancang dan mengembangkan aplikasi *mobile* berbasis Android untuk manajemen stok gudang dan integrasi pemindaian *barcode*. Mengimplementasikan fitur sinkronisasi data *real-time* untuk meminimalkan selisih inventaris antara fisik di lapangan dengan sistem internal.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                                  <span>• Kotlin</span>
                                  <span>• Jetpack Compose</span>
                                  <span>• Mobile Scanning</span>
                                </div>
                              </motion.div>

                              {/* Pengalaman 2: Web Support Tools */}
                              <motion.div 
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
                                className="border-b border-gray-300 dark:border-gray-800 pb-12 mb-12 group transition-colors duration-500"
                              >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                  <div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-gray-300 transition-colors">
                                      Web & Backend Developer
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">Internal Systems Integration</p>
                                  </div>
                                  <span className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-[#111] px-3 py-1 border border-gray-300 dark:border-[#222] transition-colors duration-500">
                                    2025 - 2026
                                  </span>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                                  Membangun *web support tools* dan *dashboard* interaktif yang berfungsi sebagai sistem pelengkap. Mengembangkan arsitektur *backend* API untuk memproses data logistik lokal, mengelola pelaporan, compare tools, serta menyelaraskan alur manifes pengiriman.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                                  <span>• Next.js</span>
                                  <span>• Spring Boot</span>
                                  <span>• SQL Database</span>
                                </div>
                              </motion.div>

                              {/* Pengalaman 3: Macro Excel / Automation */}
                              <motion.div 
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                                className="pb-4 group"
                              >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                  <div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-gray-300 transition-colors">
                                      Logistics Automation Specialist
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">Data Administration & Workflow Automation</p>
                                  </div>
                                  <span className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-[#111] px-3 py-1 border border-gray-300 dark:border-[#222] transition-colors duration-500">
                                    2025
                                  </span>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                                  Otomatisasi pengolahan data mentah dari *Warehouse Management System* (WMS) menggunakan Excel VBA Macro dan Google Apps Script. Berhasil memangkas waktu pembuatan laporan operasional harian (seperti analisis stok harian dan laporan *putaway*) secara signifikan serta menyinkronkan katalog data secara otomatis.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                                  <span>• Excel VBA</span>
                                  <span>• Google Apps Script</span>
                                  <span>• WMS Data</span>
                                </div>
                              </motion.div>

                            </div>
                          </div>
                        </section>
                        {/* CONTACT / FOOTER SECTION */}
                              <footer id="contact" className="relative z-10 px-8 md:px-12 pt-24 pb-4 border-t border-gray-300 dark:border-gray-900 bg-gray-50 dark:bg-[#050505] transition-colors duration-500">

                                {/* Baris Utama Hubungi Saya */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-300 dark:border-gray-800 pb-16 transition-colors duration-500">
                                  <div>
                                    <h2 className="text-[10vw] md:text-[7vw] leading-none font-bold tracking-tighter uppercase flex flex-col items-start relative">
                                      <span className="z-10 text-black dark:text-white transition-colors duration-500">WORK</span>
                                      <span className={`${dancing.className} text-orange-500 dark:text-[#D8FF00] lowercase absolute top-[35%] left-[10%] md:left-[15%] transform -rotate-3 text-[14vw] md:text-[8vw] drop-shadow-xl z-20 transition-colors duration-500`}>with</span>
                                      <span className="text-gray-500 z-10 mt-2 md:ml-4">ME</span>
                                    </h2>
                                  </div>
                                  <div className="text-left md:text-right">
                                    <a
                                      href="mailto:andysilvano2406@gmail.com"
                                      className="text-xl md:text-3xl font-medium tracking-tight text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors underline decoration-1 underline-offset-8"
                                    >
                                      andysilvano2406@gmail.com
                                    </a>
                                  </div>
                                </div>

                                {/* Baris Link Navigasi & Sosial Media */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 gap-8">
                                  <div className="flex gap-16 text-xs md:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">

                                    {/* Sitemap / Navigasi Internal */}
                                    <div className="flex flex-col space-y-2">
                                      <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 font-mono mb-2">Site Map</span>
                                      <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
                                      <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
                                      <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
                                      <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
                                    </div>

                                    {/* Sosial Media & Chat */}
                                    <div className="flex flex-col space-y-2">
                                      <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 font-mono mb-2">Social</span>
                                      <a
                                        href="https://wa.me/6285648433765"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
                                      >
                                        <SiWhatsapp className="text-green-600 dark:text-green-500" /> WhatsApp
                                      </a>
                                      <a
                                        href="https://www.instagram.com/andysvnn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
                                      >
                                        <SiInstagram className="text-pink-600 dark:text-pink-500" /> Instagram
                                      </a>
                                    </div>
                                  </div>

                                  {/* Copyright teks kecil */}
                                  <div className="text-[10px] text-gray-600 font-mono md:text-right">
                                    © {new Date().getFullYear()} ANDY SILVANO. ALL RIGHTS RESERVED.
                                  </div>
                                </div>
                              </footer>

      {/* Project Modal Overlay */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
    </div>
  );
}