"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye } from "lucide-react";

export default function Gallery({ dict }: { dict?: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryItems = [
    { id: 1, title: "Coupe Texture", image: "/Screenshot_20260424-075335_Instagram.jpg" },
    { id: 2, title: "Dégradé Précision", image: "/Screenshot_20260424-075357_Instagram.jpg" },
    { id: 3, title: "Art du Tracé", image: "/Screenshot_20260424-075434_Instagram.jpg" },
    { id: 4, title: "Finitions Soignées", image: "/Screenshot_20260424-075445_Instagram.jpg" },
    { id: 6, title: "Soin & Élégance", image: "/Screenshot_20260424-075323_Instagram.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="galerie" className="py-24 bg-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">
            Le Carnet
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cream mt-3 mb-6">
            Galerie de Réalisations
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
          <p className="font-body text-cream/60 font-light leading-relaxed">
            Un aperçu du savoir-faire de nos barbiers. Chaque coupe et traitement est réalisé avec une précision chirurgicale pour un résultat sans concession.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={mounted ? "gallery-animated" : "gallery-static"}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group bg-charcoal border border-white/5 shadow-lg will-change-transform"
            >
              {/* Image element */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-w-768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-75 transition-all will-change-transform"
              />

              {/* Gold Overlay & "Voir" Trigger */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 pointer-events-none">
                
                {/* Visual Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="w-12 h-12 rounded-full bg-gold/90 text-dark flex items-center justify-center shadow-lg backdrop-blur-sm"
                  >
                    <Eye size={20} strokeWidth={2.5} />
                  </motion.div>
                </div>

                <span className="text-[10px] tracking-widest font-extrabold uppercase text-gold">
                  Création
                </span>
                <h3 className="font-display text-xl font-bold text-cream mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
