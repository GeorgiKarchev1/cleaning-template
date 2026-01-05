"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CheckCircle, Zap, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Simpler animation for better mobile performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      imageRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    ).fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  const features = [
    {
      text: "Работа само с професионални машини и препарати Kärcher",
      icon: <Zap className="text-yellow-500" size={24} />,
    },
    {
      text: "Дълбоко почистване на тапицерия",
      icon: <CheckCircle className="text-[#1a43c4]" size={24} />,
    },
    {
      text: "Коректност, бързина и внимание към детайла",
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
    },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1920&auto=format&fit=crop"
              alt="Cleaning Team with Karcher"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-[#1a43c4]/10 mix-blend-multiply" />

            {/* Karcher Badge Overlay */}
            <div className="absolute bottom-6 left-6 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <Zap size={20} />
              Kärcher Техника
            </div>
          </div>

          <div ref={contentRef}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Защо да изберете <span className="text-[#1a43c4]">{siteConfig.businessName}</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ние сме екип от професионалисти, отдадени на идеята да превърнем вашия дом или офис в място,
              което блести от чистота. Разбираме, че времето ви е ценно, затова работим бързо, качествено и коректно.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 text-lg font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
