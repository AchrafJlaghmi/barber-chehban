"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const nextLang = currentLang === "fr" ? "en" : "fr";

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-6 z-[90]"
    >
      <Link href={redirectedPathName(nextLang)}>
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-charcoal/80 backdrop-blur-xl border border-gold/20 shadow-[0_0_25px_rgba(201,147,58,0.15)] hover:border-gold hover:shadow-[0_0_30px_rgba(201,147,58,0.3)] transition-all duration-300 hover:scale-110 cursor-pointer group">
          <span className="font-display font-black text-cream group-hover:text-gold uppercase tracking-widest text-sm transition-colors duration-300">
            {nextLang}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
