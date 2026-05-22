"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <a
        href="https://wa.me/212602630847"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-dark hover:bg-gold-light transition-colors duration-300 shadow-[0_0_20px_rgba(201,147,58,0.4)] group"
      >
        {/* Pulsing Backwaves */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.6, 1],
            opacity: [0.6, 0.4, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-gold -z-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1.4, 1],
            opacity: [0.8, 0.5, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-0 rounded-full bg-gold -z-10"
        />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 fill-current group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.968.01c3.182.001 6.176 1.24 8.423 3.493 2.247 2.253 3.482 5.25 3.48 8.434-.004 6.62-5.34 11.958-11.91 11.958-2.008-.002-3.982-.51-5.731-1.472L0 24zm6.59-4.846c1.666.988 3.311 1.492 5.321 1.493 5.405 0 9.803-4.383 9.805-9.773.001-2.584-1.003-5.015-2.829-6.841-1.825-1.826-4.253-2.83-6.845-2.83-5.411 0-9.813 4.385-9.817 9.775-.001 2.055.54 4.055 1.567 5.79l-.999 3.647 3.792-.986zM17.47 14.887c-.313-.156-1.854-.914-2.141-1.018-.287-.104-.497-.156-.707.156-.21.313-.81.104-1.018.156-.208.053-.417.053-.73-.104-.313-.156-1.325-.489-2.523-1.556-.931-.83-1.56-1.854-1.743-2.167-.183-.313-.02-.482.137-.638.141-.141.313-.365.469-.547.156-.183.208-.313.313-.521.104-.208.053-.391-.026-.547-.079-.156-.707-1.706-.969-2.333-.255-.613-.515-.529-.707-.539-.183-.01-.392-.01-.6-.01-.208 0-.547.079-.834.391-.287.313-1.096 1.07-1.096 2.607 0 1.537 1.121 3.024 1.278 3.232.156.208 2.207 3.37 5.347 4.726.747.323 1.33.516 1.785.66.752.239 1.437.205 1.978.125.602-.09 1.854-.757 2.115-1.486.261-.729.261-1.356.183-1.486-.079-.13-.287-.208-.6-.364z" />
        </svg>

        {/* Dynamic Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-dark/95 border border-gold/20 text-cream px-4 py-2 rounded-xl text-xs tracking-widest uppercase font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg shadow-black/40">
          Discutez avec nous
        </span>
      </a>
    </div>
  );
}
