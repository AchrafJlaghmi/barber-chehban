"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar({ dict }: { dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.prestations, href: "#prestations" },
    { name: dict.offres, href: "#offres" },
    { name: dict.equipe, href: "#equipe" },
    { name: dict.galerie, href: "#galerie" },
    { name: dict.reserver, href: "#reserver" },
  ];

  return (
    <>
      <motion.nav
        key={mounted ? "nav-animated" : "nav-static"}
        initial={mounted ? { y: -100, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-gold/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" aria-label="Home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold transition-all duration-300">
                <Image
                  src="/670955404_18083263373105000_3784697678322248313_n.jpg"
                  alt="Barber Chehban Logo"
                  fill
                  sizes="48px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              <span className="font-display text-xl tracking-[0.2em] uppercase text-cream group-hover:text-gold transition-colors duration-300">
                Chehban
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-[0.15em] uppercase text-cream/80 hover:text-gold transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/212602630847"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gold text-dark font-semibold tracking-wider uppercase text-xs hover:bg-gold-light transition-all duration-300 shadow-md shadow-gold/15 hover:shadow-gold/25 transform hover:-translate-y-0.5 gap-2"
              >
                <Phone size={14} />
                Réserver
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-cream hover:text-gold p-2 transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-dark/98 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display tracking-widest uppercase text-cream hover:text-gold transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/212602630847"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-4 rounded-full bg-gold text-dark font-bold tracking-widest uppercase text-sm hover:bg-gold-light transition-colors gap-3"
              >
                <Phone size={18} />
                Réserver sur WhatsApp
              </a>
              <p className="text-center text-xs tracking-widest text-cream/40 uppercase">
                Marrakech, Massira 2
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
