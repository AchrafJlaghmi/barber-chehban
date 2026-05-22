"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy({ dict }: { dict: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="philosophie" className="py-20 bg-dark overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Left Column) */}
          <motion.div
            key={mounted ? "phil-left-animated" : "phil-left-static"}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden gold-border-glow bg-charcoal"
          >
            <Image
              src="/Screenshot_20260424-075323_Instagram.jpg"
              alt="L'art du rasage traditionnel chez Barber Chehban"
              fill
              sizes="(max-w-768px) 100vw, 500px"
              className="object-cover brightness-95 contrast-[102%]"
            />
          </motion.div>

          {/* Copy (Right Column) */}
          <motion.div
            key={mounted ? "phil-right-animated" : "phil-right-static"}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-gold" />
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gold">
                {dict.subtitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-8 leading-tight">
              {dict.title}
            </h2>
            
            <div className="space-y-6 text-cream/70 text-lg font-light leading-relaxed">
              <p>
                {dict.desc1}
              </p>
              <p>
                {dict.desc2}
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#equipe"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gold text-gold font-bold tracking-widest uppercase text-xs hover:bg-gold hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(201,147,58,0.2)] hover:shadow-[0_0_25px_rgba(201,147,58,0.4)]"
              >
                {dict.cta}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
