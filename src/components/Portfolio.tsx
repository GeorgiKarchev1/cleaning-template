"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Simpler animation for better mobile performance
    gsap.fromTo(
      itemsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const INSTAGRAM_URL = siteConfig.instagram;

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-[#1a43c4]/10 rounded-full filter blur-3xl" />
      <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-[#1a43c4]/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-gray-200 text-[#1a43c4] font-bold text-sm mb-4 shadow-sm">
            <Camera size={16} />
            <span>Галерия</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Вижте резултатите
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Думите са излишни, когато чистотата говори сама за себе си.
            Вижте разликата преди и след нашата намеса.
          </p>
        </div>

        <div className="flex justify-center w-full">
          {/* Main Video Card - Vertical Video */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            ref={addToRefs}
            className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white block cursor-pointer hover:shadow-2xl transition-shadow max-w-sm md:max-w-md w-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
            >
              <source src="/beforeandafterVID.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <p className="text-white text-xl font-bold">Процес на дълбоко почистване</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
