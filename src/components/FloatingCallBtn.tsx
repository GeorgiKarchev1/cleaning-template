"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, X } from "lucide-react";
import gsap from "gsap";
import { siteConfig } from "@/config/siteConfig";

export default function FloatingCallBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    gsap.to(ringRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: "power1.out",
    });

    const wiggle = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    wiggle
      .to(buttonRef.current, { rotation: 10, duration: 0.1 })
      .to(buttonRef.current, { rotation: -10, duration: 0.1 })
      .to(buttonRef.current, { rotation: 10, duration: 0.1 })
      .to(buttonRef.current, { rotation: -10, duration: 0.1 })
      .to(buttonRef.current, { rotation: 0, duration: 0.1 });

    return () => {
      wiggle.kill();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Pop-up Card */}
      {isOpen && (
        <div
          ref={popupRef}
          className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 mb-2 w-72 origin-bottom-right relative"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Имате въпроси?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Свържете се с нас директно за консултация или оферта.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phone1Link}`}
              className="flex items-center justify-center gap-3 w-full bg-[#1a43c4] hover:bg-[#132f8c] text-white font-bold py-3 rounded-xl transition-colors text-lg"
            >
              <Phone size={20} />
              {siteConfig.phone1}
            </a>
            <a
              href={`tel:${siteConfig.phone2Link}`}
              className="flex items-center justify-center gap-3 w-full bg-white border-2 border-[#1a43c4] hover:bg-blue-50 text-[#1a43c4] font-bold py-3 rounded-xl transition-colors text-lg"
            >
              <Phone size={20} />
              {siteConfig.phone2}
            </a>
          </div>
        </div>
      )}

      {/* Button Container */}
      <div className="relative group">
        {/* Pulsing Ring */}
        <div
          ref={ringRef}
          className="absolute inset-0 bg-[#3b5ed9] rounded-full z-0"
        />

        {/* Main Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 bg-[#1a43c4] hover:bg-[#132f8c] text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center w-16 h-16"
        >
          {isOpen ? <X size={28} /> : <Phone size={28} />}
        </button>
      </div>
    </div>
  );
}
