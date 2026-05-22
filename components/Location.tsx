"use client";

import { MapPin, Phone, Clock, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function Location({ dict }: { dict?: any }) {
  const schedule = [
    { days: "Lundi – Samedi", hours: "11:00 – 00:00" },
    { days: "Dimanche", hours: "10:00 – 01:00" },
  ];

  return (
    <section id="location" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Business Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">
              Nous Trouver
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cream mb-8">
              Salon & Horaires
            </h2>
            <div className="w-20 h-[1px] bg-gold mb-10" />

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-charcoal border border-white/5 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-cream">Notre Adresse</h3>
                  <p className="font-body text-sm text-cream/60 mt-1 font-light leading-relaxed">
                    Near Dar Chifaa, Massira 2,<br />
                    Marrakech 40140, Maroc
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-charcoal border border-white/5 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-cream">Téléphone / WhatsApp</h3>
                  <a
                    href="https://wa.me/212602630847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-gold hover:text-gold-light mt-1 font-semibold block transition-colors"
                  >
                    +212 602-630847
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-charcoal border border-white/5 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div className="w-full">
                  <h3 className="font-display text-lg font-bold text-cream">Horaires d'Ouverture</h3>
                  <div className="mt-3 space-y-2 max-w-xs">
                    {schedule.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm py-1 border-b border-white/5">
                        <span className="font-body text-cream/60 font-light">{item.days}</span>
                        <span className="font-body text-gold font-semibold">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation CTA */}
            <div className="mt-10">
              <a
                href="https://maps.google.com/?q=31.6155551,-8.0617945"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cream/70 hover:text-gold transition-colors group"
              >
                <Compass size={16} className="group-hover:rotate-45 transition-transform duration-500 text-gold" />
                Obtenir l'itinéraire sur Google Maps
              </a>
            </div>
          </div>

          {/* Map Embed (Right Column) */}
          <div className="lg:col-span-7 w-full h-[450px] relative rounded-3xl overflow-hidden gold-border-glow bg-charcoal">
            {/* Google Maps embed iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.6575791334863!2d-8.0673322!3d31.6158223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM2JzU3LjAiTiA4wrAwNCcwMi40Ilc!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full filter invert-[90%] hue-rotate-[180deg] contrast-[105%] brightness-[85%] grayscale-[40%]"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
