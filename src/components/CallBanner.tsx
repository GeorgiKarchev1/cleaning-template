"use client";

import { Phone } from "lucide-react";

export default function CallBanner() {
  return (
    <section className="bg-[#1a43c4] py-12 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay blur-3xl" />
        <div className="absolute top-1/2 right-0 w-60 h-60 bg-white rounded-full mix-blend-overlay blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Спешна нужда от почистване?
          </h2>
          <p className="text-blue-100 text-lg">
            Нашият екип е готов да реагира веднага.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="tel:+359899299825"
            className="bg-white text-[#1a43c4] hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-xl shadow-lg transition-transform transform hover:scale-105 flex items-center gap-3"
          >
            <Phone className="animate-pulse" />
            0899 299 825
          </a>
          <a
            href="tel:+359879889800"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-2 rounded-full font-bold text-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-3"
          >
            0879 889 800
          </a>
        </div>
      </div>
    </section>
  );
}
