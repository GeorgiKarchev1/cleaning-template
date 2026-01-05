"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Search, Sparkles, Smile } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <Phone size={32} />,
    title: "Свържете се с нас",
    description: "Обадете се на 0899 299 825 или 0879 889 800 за консултация.",
  },
  {
    icon: <Search size={32} />,
    title: "Безплатен оглед",
    description: "Нашият екип ще направи оглед, за да определи точната цена.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Професионално почистване",
    description: "Използваме висок клас машини Kärcher за безупречни резултати.",
  },
  {
    icon: <Smile size={32} />,
    title: "Насладете се на чистотата",
    description: "Вие получавате чист и свеж дом, без никакви усилия.",
  },
];

export default function WorkProcess() {
  const sectionRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Simpler animation for better mobile performance
    gsap.fromTo(
      stepsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Как работим?
          </h2>
          <p className="text-xl text-gray-600">
            Лесен и прозрачен процес в 4 стъпки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-[#1a43c4]/10 -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border-4 border-[#1a43c4]/20 rounded-full flex items-center justify-center text-[#1a43c4] mb-6 shadow-sm group-hover:border-[#1a43c4] group-hover:bg-[#1a43c4] group-hover:text-white transition-all duration-300 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1a43c4] text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white group-hover:bg-white group-hover:text-[#1a43c4] transition-colors">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-[#1a43c4]/5 p-6 rounded-xl border border-[#1a43c4]/10">
          <p className="text-lg text-[#1a43c4] font-medium">
            Важно: Цената се определя след <span className="font-bold underline">безплатен оглед</span> на място!
          </p>
        </div>
      </div>
    </section>
  );
}
