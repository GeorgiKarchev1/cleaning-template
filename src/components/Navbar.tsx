"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import gsap from "gsap";
import { siteConfig } from "@/config/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
        display: "flex",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
        display: "none",
      });
    }
  }, [isOpen]);

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? "liquid-glass shadow-lg"
        : "bg-white/70 backdrop-blur-md"
    }`}>
      {/* Top Bar for Phone Number - Mobile Only */}
      <div className="bg-[#1a43c4] text-white py-2 text-center text-sm font-medium md:hidden">
        <a href={`tel:${siteConfig.phone1Link}`} className="hover:underline flex items-center justify-center gap-2">
          <Phone size={14} className="fill-current" />
          Обадете се сега: {siteConfig.phone1}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#1a43c4]">
              {siteConfig.businessName}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 items-center">
              <Link href="#services" className="text-gray-700 hover:text-[#1a43c4] px-3 py-2 rounded-lg text-sm font-semibold transition-all">
                Услуги
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#1a43c4] px-3 py-2 rounded-lg text-sm font-semibold transition-all">
                За нас
              </Link>
              <div className="flex items-center gap-4 ml-4">
                <div className="flex flex-col text-right">
                  <a href={`tel:${siteConfig.phone1Link}`} className="text-gray-700 font-bold hover:text-[#1a43c4] transition-colors hidden lg:block text-sm">
                    {siteConfig.phone1}
                  </a>
                  <a href={`tel:${siteConfig.phone2Link}`} className="text-gray-700 font-bold hover:text-[#1a43c4] transition-colors hidden lg:block text-sm">
                    {siteConfig.phone2}
                  </a>
                </div>
                <Link href="#contact" className="bg-[#1a43c4] text-white hover:bg-[#132f8c] px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  <Phone size={16} />
                  Запази час
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1a43c4] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-white z-40 flex-col items-center justify-center space-y-8 text-2xl font-bold transform translate-x-full hidden md:hidden"
        style={{ top: "0", height: "100vh" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-gray-700 hover:text-[#1a43c4]"
        >
          <X size={32} />
        </button>

        <Link
          href="#services"
          onClick={() => setIsOpen(false)}
          ref={addToRefs}
          className="text-gray-800 hover:text-[#1a43c4] transition-all"
        >
          Услуги
        </Link>
        <Link
          href="#about"
          onClick={() => setIsOpen(false)}
          ref={addToRefs}
          className="text-gray-800 hover:text-[#1a43c4] transition-all"
        >
          За нас
        </Link>
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          ref={addToRefs}
          className="text-gray-800 hover:text-[#1a43c4] transition-all"
        >
          Контакт
        </Link>
        <div className="flex flex-col gap-4 mt-4">
          <a
            href={`tel:${siteConfig.phone1Link}`}
            ref={addToRefs}
            className="bg-[#1a43c4] text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg"
          >
            <Phone size={24} />
            {siteConfig.phone1}
          </a>
          <a
            href={`tel:${siteConfig.phone2Link}`}
            ref={addToRefs}
            className="bg-[#1a43c4] text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg"
          >
            <Phone size={24} />
            {siteConfig.phone2}
          </a>
        </div>
      </div>
    </nav>
  );
}
