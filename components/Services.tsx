"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services({ dict }: { dict: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const servicesData = [
    {
      id: "pack-complet",
      name: "Pack Complet",
      price: "200 DH",
      desc: "Soin Protéine + Coupe Stylée + Gommage Visage. Notre forfait signature pour un relooking et un soin complet.",
      badge: "Recommandé",
      image: "/Screenshot_20260424-075335_Instagram.jpg",
    },
    {
      id: "coupe",
      name: dict.list.coupe.name,
      description: dict.list.coupe.desc,
      price: "30 DH",
      duration: "45 MIN",
      image: "/Screenshot_20260424-075357_Instagram.jpg",
    },
    {
      id: "barbe",
      name: dict.list.barbe.name,
      description: dict.list.barbe.desc,
      price: "20 DH",
      duration: "30 MIN",
      image: "/Screenshot_20260424-075434_Instagram.jpg",
    },
    {
      id: "proteine",
      name: dict.list.proteine.name,
      description: dict.list.proteine.desc,
      price: "150 DH",
      duration: "60 MIN",
      image: "/Screenshot_20260424-075335_Instagram.jpg",
    },
    {
      id: "gommage",
      name: dict.list.gommage.name,
      description: dict.list.gommage.desc,
      price: "70 DH",
      duration: "30 MIN",
      image: "/Screenshot_20260424-075323_Instagram.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="prestations" className="py-24 bg-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gold">
              {dict.subtitle}
            </span>
            <span className="h-[1px] w-12 bg-gold" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-6"
          >
            {dict.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-cream/60 max-w-2xl mx-auto text-lg"
          >
            {dict.desc}
          </motion.p>
        </div>

        {/* Dynamic Stagger Grid */}
        <motion.div
          key={mounted ? "services-animated" : "services-static"}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, idx) => {
            const isPack = service.id === "pack-complet";
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col group cursor-pointer ${
                  isPack
                    ? "bg-charcoal border-gold/30 hover:border-gold md:col-span-2 lg:col-span-1 shadow-xl shadow-gold/5"
                    : "bg-charcoal/50 border-white/5 hover:border-gold/30"
                }`}
                whileHover={{ y: -8 }}
              >
                {/* Glow Highlight behind service cards */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.02] transition-colors duration-500 pointer-events-none z-0" />

                {/* Badge if present */}
                {service.badge && (
                  <span className="absolute top-6 right-6 bg-gold text-dark text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md z-20">
                    {service.badge}
                  </span>
                )}

                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-dark will-change-transform">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow relative z-10">
                  <div>
                    {/* Title & Description */}
                    <h3 className="font-display text-2xl font-bold text-cream group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm text-cream/60 mt-4 leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                {/* Pricing & CTA link */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-2xl font-display font-extrabold text-gold tracking-tight">
                    {service.price}
                  </span>
                  
                  <a
                    href={`https://wa.me/212602630847?text=Bonjour,%20je%20souhaite%20réserver%20la%20prestation%20"${encodeURIComponent(service.name)}"%20chez%20Barber%20Chehban.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-widest uppercase text-cream/70 hover:text-gold flex items-center gap-1.5 group/link transition-colors duration-300"
                  >
                    Réserver
                    <svg
                      className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
