"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Building2, Utensils, PaintRoller, Maximize, Armchair, Car, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const generalCleaning = [
  {
    icon: <Home size={32} />,
    title: "Домове и апартаменти",
    description: "Цялостно почистване на вашето жилище.",
  },
  {
    icon: <Building2 size={32} />,
    title: "Офиси и бизнес помещения",
    description: "Поддръжка на чистота за по-продуктивна среда.",
  },
  {
    icon: <Utensils size={32} />,
    title: "Заведения",
    description: "Хигиена според всички санитарни изисквания.",
  },
  {
    icon: <PaintRoller size={32} />,
    title: "Почистване след ремонт",
    description: "Премахване на фин прах, петна и строителни остатъци.",
  },
  {
    icon: <Maximize size={32} />,
    title: "Професионално почистване на прозорци",
    description: "Кристално чисти прозорци и витрини без следи.",
  },
];

const extractorCleaning = [
  {
    icon: <Armchair size={32} />,
    title: "Мека мебел и дивани",
    description: "Дълбоко изпиране и освежаване на дамаските.",
  },
  {
    icon: <Layers size={32} />,
    title: "Матраци",
    description: "Премахване на акари и петна за по-добър сън.",
  },
  {
    icon: <Layers size={32} />,
    title: "Килими и мокети",
    description: "Пране на място с професионални екстрактори.",
  },
  {
    icon: <Car size={32} />,
    title: "Автомобили и камиони",
    description: "Пране на тапицерия и седалки на превозни средства.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState<'general' | 'extractor'>('general');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current = [];
  }, [activeTab]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [activeTab]);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Нашите Услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Изберете категория, за да видите какво предлагаме
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('general')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
                activeTab === 'general'
                  ? "bg-[#1a43c4] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Основно и цялостно почистване
            </button>
            <button
              onClick={() => setActiveTab('extractor')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
                activeTab === 'extractor'
                  ? "bg-[#1a43c4] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Пране с екстрактор
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {activeTab === 'general' ? (
            generalCleaning.map((service, index) => (
              <div
                key={`gen-${index}`}
                ref={addToRefs}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex items-start gap-4 group hover:-translate-y-1"
              >
                <div className="bg-[#1a43c4]/10 p-3 rounded-xl text-[#1a43c4] group-hover:bg-[#1a43c4] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))
          ) : (
            extractorCleaning.map((service, index) => (
              <div
                key={`ext-${index}`}
                ref={addToRefs}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex items-start gap-4 group hover:-translate-y-1"
              >
                <div className="bg-[#1a43c4]/10 p-3 rounded-xl text-[#1a43c4] group-hover:bg-[#1a43c4] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
