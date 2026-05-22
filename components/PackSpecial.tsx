"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, PhoneCall } from "lucide-react";

export default function PackSpecial({ dict }: { dict: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section
      id="offres"
      ref={ref}
      className="relative py-24 bg-charcoal border-y border-gold/10 overflow-hidden"
    >
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          key={mounted ? "pack-animated" : "pack-static"}
          variants={containerVariants}
          initial={mounted ? "hidden" : false}
          animate={!mounted || isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Typography & Price Callout (Left Column) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-6"
            >
              <Sparkles size={16} className="text-gold animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
                {dict.tagline}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cream mb-4"
            >
              {dict.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-body text-cream/70 font-light max-w-md mb-8 leading-relaxed"
            >
              {dict.desc}
            </motion.p>

            {/* Giant Gold Price tag */}
            <motion.div
              variants={itemVariants}
              className="relative py-4 px-8 bg-dark border border-gold/30 rounded-3xl shadow-xl flex items-baseline gap-2 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="font-display text-6xl sm:text-7xl font-black text-gold">{dict.price.split(' ')[0]}</span>
              <span className="font-display text-2xl font-bold text-cream">{dict.price.split(' ')[1] || 'DH'}</span>
              
              {/* Crossed price placeholder to show savings */}
              <div className="absolute -top-3 -right-3 bg-red-950/80 border border-red-500/30 px-3 py-1 rounded-full text-xs font-semibold text-red-300 line-through">
                270 DH
              </div>
            </motion.div>
          </div>

          {/* Included Features & CTA (Right Column) */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <motion.ul variants={itemVariants} className="space-y-4 mb-10">
                {[
                  dict.includes[0],
                  dict.includes[1],
                  dict.includes[2]
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 bg-dark/50 border border-white/5 rounded-2xl">
                    <div className="w-8 h-8 rounded-full border border-gold/20 bg-gold/10 flex items-center justify-center">
                      <Sparkles size={14} className="text-gold" />
                    </div>
                    <span className="text-cream/90 font-light">{item}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Special CTA */}
              <motion.div variants={itemVariants} className="pt-4">
                <a
                  href="https://wa.me/212602630847?text=Bonjour,%20je%20voudrais%20r%C3%A9server%20le%20Pack%20Complet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-dark font-bold tracking-widest uppercase text-xs hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(201,147,58,0.3)] hover:shadow-[0_0_30px_rgba(201,147,58,0.5)] transform hover:-translate-y-1 w-full sm:w-auto gap-2"
                >
                  <PhoneCall size={14} />
                  {dict.cta}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
