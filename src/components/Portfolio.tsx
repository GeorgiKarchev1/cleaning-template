"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Star } from "lucide-react";

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

  const INSTAGRAM_URL = "https://www.instagram.com/alexcleaning.plovdiv/";

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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

          {/* Main Video Card - Vertical Video */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            ref={addToRefs}
            className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white block cursor-pointer break-inside-avoid hover:shadow-2xl transition-shadow"
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

          {/* Image 1 - Before/After (Landscape) */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            ref={addToRefs}
            className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white block cursor-pointer break-inside-avoid hover:shadow-2xl transition-shadow"
          >

            <img
              src="/beforeandafter.jpg"
              alt="Before and After Cleaning Result"
              className="w-full h-auto block"
            />
          </a>

          {/* Image 2 - Sofa/Detail (Square-ish) */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            ref={addToRefs}
            className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white block cursor-pointer break-inside-avoid hover:shadow-2xl transition-shadow"
          >
            <div className="absolute top-4 right-4 z-20 bg-yellow-400 text-[#132f8c] px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <Star size={12} fill="currentColor" />
              Топ Резултат
            </div>
            <img
              src="/andbitmore.jpg"
              alt="Deep Cleaning Detail"
              className="w-full h-auto block"
            />
          </a>

          {/* Image 3 - More (Square-ish) */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            ref={addToRefs}
            className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white block cursor-pointer break-inside-avoid hover:shadow-2xl transition-shadow"
          >
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="text-[#1a43c4] font-bold text-center text-sm">Безупречна чистота за вашия дом</p>
            </div>
            <img
              src="/more.jpg"
              alt="Cleaning Service Example"
              className="w-full h-auto block"
            />
          </a>

        </div>
      </div>
    </section>
  );
}
