"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero({ dict }: { dict: any }) {
  const [mounted, setMounted] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const heroImages = [
    "/Screenshot_20260424-075335_Instagram.jpg",
    "/Screenshot_20260424-075357_Instagram.jpg",
    "/Screenshot_20260424-075434_Instagram.jpg",
    "/Screenshot_20260424-075445_Instagram.jpg",
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const headlineWords = dict.headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden pt-24 pb-16 md:py-32">
      {/* Dynamic Gold Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,147,58,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(26,26,26,0.6),transparent_60%)] pointer-events-none" />

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#C9933A_1px,transparent_1px),linear-gradient(to_bottom,#C9933A_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography & CTAs (Left Side) */}
          <motion.div
            key={mounted ? "hero-left-animated" : "hero-left-static"}
            variants={containerVariants}
            initial={mounted ? "hidden" : false}
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="h-[1px] w-8 bg-gold" />
              <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold">
                {dict.tagline}
              </p>
            </motion.div>

            {/* Headline with staggered word reveal */}
            <div className="overflow-hidden mb-6">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-cream leading-[1.05] flex flex-wrap gap-x-2 sm:gap-x-4">
                {headlineWords.map((word: string, idx: number) => (
                  <span key={idx} className="overflow-hidden inline-block pb-2">
                    <motion.span
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-lg sm:text-xl text-cream/70 max-w-lg mb-10 leading-relaxed font-light"
            >
              {dict.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="https://wa.me/212602630847"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-dark font-bold tracking-widest uppercase text-xs hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 transform hover:-translate-y-1 gap-2"
              >
                {dict.cta_whatsapp}
                <ArrowRight size={14} />
              </a>
              <a
                href="#prestations"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gold/40 text-cream font-bold tracking-widest uppercase text-xs hover:bg-white/5 hover:border-gold transition-all duration-300 transform hover:-translate-y-1"
              >
                {dict.cta_prestations}
              </a>
            </motion.div>

            {/* Decorative Scissors Icon */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center gap-4 text-gold/30"
            >
              <Scissors size={24} className="transform rotate-45 animate-pulse-slow" />
              <div className="h-[1px] w-24 bg-gold/10" />
            </motion.div>
          </motion.div>

          {/* Portrait Showcase & Floating Price Badges (Right Side) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Decorative Gold Frame under portrait */}
            <div className="absolute inset-0 -m-4 border border-gold/10 rounded-2xl transform rotate-2 pointer-events-none" />
            <div className="absolute inset-0 -m-2 border border-gold/20 rounded-2xl transform -rotate-1 pointer-events-none" />

            {/* Main Portrait frame */}
            <motion.div
              key={mounted ? "hero-portrait-animated" : "hero-portrait-static"}
              initial={mounted ? { scale: 0.95, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden gold-border-glow bg-charcoal"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIdx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImageIdx]}
                    alt="Barber Chehban Premium Styling"
                    fill
                    sizes="(max-w-768px) 100vw, 420px"
                    className="object-cover filter brightness-95 contrast-105"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>

            {/* Floating Price badges */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* Badge 1: Coupe */}
              <motion.div
                key={mounted ? "badge1-animated" : "badge1-static"}
                variants={badgeVariants}
                initial={mounted ? "hidden" : false}
                animate="visible"
                className="absolute top-[15%] -left-2 sm:-left-[15%] bg-dark/90 backdrop-blur-md border border-gold/30 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl flex flex-col items-start shadow-xl z-20 pointer-events-auto"
                style={{ y: "-50%" }}
                whileHover={{ scale: 1.05, borderColor: "#C9933A" }}
              >
                <span className="text-[10px] tracking-widest text-gold font-bold uppercase">{dict.badge_coupe}</span>
                <span className="text-lg font-display font-bold text-cream">30 {dict.currency}</span>
              </motion.div>

              {/* Badge 2: Barbe */}
              <motion.div
                key={mounted ? "badge2-animated" : "badge2-static"}
                variants={badgeVariants}
                initial={mounted ? "hidden" : false}
                animate="visible"
                className="absolute bottom-[20%] -right-2 sm:-right-[10%] bg-dark/90 backdrop-blur-md border border-gold/30 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl flex flex-col items-start shadow-xl z-20 pointer-events-auto"
                style={{ y: "50%" }}
                whileHover={{ scale: 1.05, borderColor: "#C9933A" }}
              >
                <span className="text-[10px] tracking-widest text-gold font-bold uppercase">{dict.badge_barbe}</span>
                <span className="text-lg font-display font-bold text-cream">20 {dict.currency}</span>
              </motion.div>

              {/* Badge 3: Pack Spécial */}
              <motion.div
                key={mounted ? "badge3-animated" : "badge3-static"}
                variants={badgeVariants}
                initial={mounted ? "hidden" : false}
                animate="visible"
                className="absolute -bottom-[5%] left-4 sm:-left-[5%] bg-gold text-dark px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl flex flex-col items-start shadow-2xl z-20 pointer-events-auto"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-[9px] tracking-widest font-black uppercase text-dark/70">{dict.badge_pack}</span>
                <span className="text-xl font-display font-black">200 {dict.currency}</span>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
