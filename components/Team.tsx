"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarRange } from "lucide-react";

export default function Team({ dict }: { dict?: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const teamData = [
    {
      id: "mehdi",
      name: "Mehdi",
      role: "Maître Barbier / Styliste",
      image: "/IMG-20260425-WA0002.jpg",
    },
    {
      id: "achraf",
      name: "Achraf",
      role: "Artiste Barbier / Expert Rasage",
      image: "/505956958_18054089456601412_797208376682842370_n.jpg",
    },
  ];

  return (
    <section id="equipe" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">
            Les Artistes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cream mt-3 mb-6">
            Notre Équipe
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
          <p className="font-body text-cream/60 font-light leading-relaxed">
            Rencontrez des passionnés dévoués à l'excellence. Nos barbiers combinent techniques traditionnelles et tendances modernes pour sculpter votre signature visuelle.
          </p>
        </div>

        {/* Barbers Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {teamData.map((barber, idx) => (
            <motion.div
              key={mounted ? `${barber.id}-animated` : `${barber.id}-static`}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
              className="relative rounded-3xl overflow-hidden bg-dark border border-white/5 flex flex-col group shadow-xl"
              whileHover={{ y: -8 }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal will-change-transform">
                <Image
                  src={barber.image}
                  alt={`Barbier ${barber.name}`}
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 transition-all will-change-transform"
                />
                
                {/* Gold vignette highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90" />
                
                {/* Interactive role tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-[0.25em] font-extrabold uppercase text-gold">
                    {barber.role}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-cream mt-1 group-hover:text-gold transition-colors duration-300">
                    {barber.name}
                  </h3>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 flex flex-col justify-end flex-grow">
                <a
                  href={`https://wa.me/212602630847?text=Bonjour,%20je%20souhaite%20réserver%20un%20créneau%20spécifiquement%20avec%20${encodeURIComponent(barber.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-gold/40 text-cream text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300 gap-2"
                >
                  <CalendarRange size={14} />
                  Réserver avec {barber.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
