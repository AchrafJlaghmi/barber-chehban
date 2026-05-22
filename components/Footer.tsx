"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Smartphone } from "lucide-react";

export default function Footer({ dict }: { dict?: any }) {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-dark border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" aria-label="Home" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold transition-all duration-300">
                <Image
                  src="/670955404_18083263373105000_3784697678322248313_n.jpg"
                  alt="Barber Chehban Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="font-display text-2xl tracking-[0.2em] uppercase text-cream group-hover:text-gold transition-colors duration-300">
                Chehban
              </span>
            </a>
            
            <p className="font-display italic text-gold text-sm tracking-wider mb-4">
              "L'art du détail. Your premium grooming experience."
            </p>
            <p className="font-body text-xs text-cream/40 font-light max-w-sm leading-relaxed">
              Salon de coiffure et barbier haut de gamme à Marrakech. Nous mettons l'excellence et la précision au service de votre style.
            </p>
          </div>

          {/* Navigation Links Col */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-cream mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "#" },
                { name: "Services & Tarifs", href: "#prestations" },
                { name: "Offres Spéciales", href: "#offres" },
                { name: "Notre Équipe", href: "#equipe" },
                { name: "Galerie Photos", href: "#galerie" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-cream/60 hover:text-gold tracking-widest uppercase transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-cream mb-6">Suivez-nous</h3>
              <div className="flex flex-col gap-4">
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/barber____chehbaan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-3 text-xs text-cream/70 hover:text-gold transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                    <Instagram size={14} />
                  </div>
                  <span className="font-body font-light tracking-wide">@barber____chehbaan</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@mahdi_jm1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex items-center gap-3 text-xs text-cream/70 hover:text-gold transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                    {/* SVG for TikTok */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.85.92 1.95 1.59 3.16 1.97.05.58.04 1.15.02 1.73-.02.4-.02.81-.04 1.21-1.25-.03-2.48-.38-3.57-1.02-.91-.53-1.68-1.29-2.22-2.19v7.94c.03 2.06-.55 4.12-1.74 5.74-1.39 1.86-3.63 2.97-5.96 2.97-2.33.01-4.57-1.1-5.97-2.95-1.19-1.61-1.78-3.66-1.76-5.71.02-2.07.61-4.11 1.8-5.74 1.4-1.89 3.65-3.02 6.01-3.02.16-.01.32.01.48.01v3.91c-.16 0-.32-.01-.48-.01-1.17-.03-2.31.5-3.04 1.42-.64.83-.96 1.89-.95 2.96-.01 1.07.3 2.12.93 2.96.72.93 1.84 1.48 3.02 1.46 1.18.01 2.3-.53 3.01-1.47.63-.84.95-1.9.93-2.97V0h.01z" />
                    </svg>
                  </div>
                  <span className="font-body font-light tracking-wide">@mahdi_jm1</span>
                </a>

              </div>
            </div>

            {/* Fast WhatsApp redirect */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-cream/40">
              <Smartphone size={14} className="text-gold" />
              <span>Contact direct : +212 602-630847</span>
            </div>
          </div>

        </div>

        {/* Copyright info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-widest uppercase text-cream/30 font-light text-center sm:text-left">
            © {currentYear} Barber Chehban. Tous droits réservés.
          </p>
          <p className="text-[10px] tracking-widest uppercase text-cream/30 font-light text-center sm:text-right">
            Conçu avec passion · Marrakech, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
