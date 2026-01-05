"use client";

import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1a43c4] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Свържете се с нас</h2>
            <p className="text-xl text-blue-100 mb-8">
              Готови ли сте за безупречна чистота? Обадете ни се или ни пишете за безплатна оферта.
            </p>

            <div className="space-y-6">
              <a href="tel:+359899299825" className="flex items-center gap-4 text-lg hover:text-blue-200 transition-colors">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone size={24} />
                </div>
                +359 899 299 825
              </a>

              <a href="tel:+359879889800" className="flex items-center gap-4 text-lg hover:text-blue-200 transition-colors">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone size={24} />
                </div>
                +359 879 889 800
              </a>

              <a href="mailto:office@alexcleaning.com" className="flex items-center gap-4 text-lg hover:text-blue-200 transition-colors">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                office@alexcleaning.com
              </a>

              <div className="flex items-center gap-4 text-lg">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                гр. Пловдив и региона
              </div>

              <a
                href="https://www.instagram.com/alexcleaning.plovdiv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-blue-200 transition-colors"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Instagram size={24} />
                </div>
                @alexcleaning.plovdiv
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl text-gray-900 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Изпратете запитване</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Име</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a43c4] focus:border-transparent outline-none transition-all"
                  placeholder="Вашето име"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a43c4] focus:border-transparent outline-none transition-all"
                  placeholder="088..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Съобщение</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a43c4] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Здравейте, интересувам се от..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a43c4] hover:bg-[#132f8c] text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Изпрати
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
