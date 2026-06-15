"use client";
import { useState } from "react";
import { BsImages } from "react-icons/bs";

export default function GalleryImage({ src, alt, type }: { src: string, alt: string, type: "mobile" | "web" }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 dark:from-[#111] to-gray-200 dark:to-[#222] transition-colors duration-500">
        <BsImages className="text-5xl text-gray-700 mb-4 drop-shadow-lg" />
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase text-center">
          No Preview<br/>Available
        </span>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full bg-gray-100 dark:bg-[#050505] overflow-hidden transition-colors duration-500">
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover ${type === 'web' ? 'object-top' : 'object-center'} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out`} 
        onError={() => setError(true)}
      />
    </div>
  );
}
