"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Tag, Sparkles } from "lucide-react";

export default function SpecialOffer() {
  const badgeRef = useRef(null);

  useEffect(() => {
    // Only run animation on desktop for better mobile performance
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      gsap.to(badgeRef.current, {
        rotation: 15,
        scale: 1.05,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#1a43c4] to-[#132f8c] py-16 text-white overflow-hidden relative">
      {/* Background patterns - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-[#132f8c] px-4 py-1 rounded-full font-bold text-sm mb-4 uppercase tracking-wider">
              <Sparkles size={16} />
              Специално предложение
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Нов клиент? <br/>
              <span className="text-yellow-400">Вземи -20% отстъпка!</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-xl">
              Възползвайте се от нашата оферта за добре дошли. Важи при първо ползване на услугата за всички видове почистване.
            </p>
          </div>

          <div className="relative flex-shrink-0">
            <div
              ref={badgeRef}
              className="w-40 h-40 md:w-48 md:h-48 bg-yellow-400 rounded-full flex flex-col items-center justify-center text-[#132f8c] font-black shadow-lg border-4 border-white transform rotate-12"
            >
              <span className="text-5xl md:text-6xl leading-none">-20%</span>
              <span className="text-sm md:text-base uppercase tracking-wide">Отстъпка</span>
            </div>
          </div>

          <div className="flex-1 text-center md:text-right">
            <p className="text-sm text-blue-200 mb-4">Обадете се сега и попитайте за офертата</p>
            <a
              href="tel:+359899299825"
              className="inline-flex items-center gap-3 bg-white text-[#1a43c4] hover:bg-blue-50 text-xl font-bold px-8 py-4 rounded-full transition-all shadow-lg transform hover:scale-105"
            >
              <Tag className="rotate-90" />
              Искам отстъпка
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
