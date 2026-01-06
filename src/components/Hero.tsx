"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Simpler initial states for better performance
      gsap.set([badgeRef.current, titleRef.current, descRef.current, buttonsRef.current, statsRef.current], {
        y: 30,
        opacity: 0,
      });
      gsap.set(imageContainerRef.current, {
        y: 30,
        opacity: 0,
      });

      // Faster, simpler animations
      tl.to(badgeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      })
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }, "-=0.3")
      .to(descRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
      }, "-=0.3")
      .to(buttonsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
      }, "-=0.2")
      .to(statsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
      }, "-=0.2")
      .to(imageContainerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }, "-=0.4");

      // Only enable floating animation on desktop
      if (window.innerWidth >= 1024) {
        gsap.to(imageContainerRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decorative elements - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 right-20 w-72 h-72 bg-[#1a43c4]/10 rounded-full blur-3xl z-0" />
      <div className="hidden md:block absolute bottom-20 left-20 w-96 h-96 bg-[#1a43c4]/5 rounded-full blur-3xl z-0" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1a43c4]/5 to-transparent rounded-full blur-3xl z-0" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-12 md:pt-28 md:pb-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <div ref={badgeRef} className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-[#1a43c4] rounded-full" />
              <span className="text-[#1a43c4] tracking-widest text-sm font-bold uppercase">
                {siteConfig.tagline}
              </span>
            </div>

            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-[1.1] tracking-tight">
              Безупречна <br />
              <span className="text-[#1a43c4]">
                Чистота & Стил
              </span>
            </h1>

            <p ref={descRef} className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-xl leading-relaxed">
              {siteConfig.description}
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="group relative px-8 py-4 bg-[#1a43c4] text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:shadow-[0_10px_40px_-10px_rgba(26,67,196,0.5)] hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 w-full h-full bg-[#132f8c] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-3">
                  Запази Час
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <a
                href={`tel:${siteConfig.phone1Link}`}


                
                className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold text-lg rounded-full hover:border-[#1a43c4] hover:text-[#1a43c4] transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <Phone size={20} className="text-[#1a43c4]" />
                <span>{siteConfig.phone1}</span>
              </a>
            </div>

            <div ref={statsRef} className="mt-10 lg:mt-16 flex flex-wrap items-center gap-6 lg:gap-8 text-gray-500">
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-gray-900">{siteConfig.clientsCount}</span>
                <span className="text-sm">Доволни клиенти</span>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-gray-900">100%</span>
                <span className="text-sm">Гаранция</span>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1">
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
                <Star className="fill-yellow-400 text-yellow-400" size={18} />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div ref={imageContainerRef} className="relative will-change-transform">
              {/* Decorative circle behind image - simplified on mobile */}
              <div className="hidden md:block absolute -inset-4 lg:-inset-8 bg-gradient-to-br from-[#1a43c4]/20 to-[#3b5ed9]/10 rounded-full blur-2xl" />

              {/* Main image container */}
              <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[440px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[560px] xl:w-[500px] xl:h-[620px]">
                {/* Decorative border - hidden on mobile for performance */}
                <div className="hidden md:block absolute -inset-2 lg:-inset-4 border-2 border-[#1a43c4]/20 rounded-3xl rotate-3" />
                <div className="hidden md:block absolute -inset-2 lg:-inset-4 border-2 border-[#1a43c4]/10 rounded-3xl -rotate-3" />

                {/* Image */}
                <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl md:shadow-[#1a43c4]/20">
                  <Image
                    src="/cleaningguy123.png"
                    alt="Професионално почистване"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 500px"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 bg-white rounded-2xl p-3 sm:p-4 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a43c4] rounded-xl flex items-center justify-center">
                      <Star className="text-white fill-white" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">{siteConfig.rating} Рейтинг</p>
                      <p className="text-xs sm:text-sm text-gray-500">Google Reviews</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
