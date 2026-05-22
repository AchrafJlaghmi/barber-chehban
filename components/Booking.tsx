"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, CalendarClock, User, Phone, Scissors, Clock } from "lucide-react";

export default function Booking({ dict }: { dict?: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    barber: "Peu importe",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const isEn = dict?.booking?.form?.submit?.toLowerCase().includes('confirm');
  const locale = isEn ? 'en-US' : 'fr-FR';

  const availableDays = [];
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  
  for (let i = 0; i < 14; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    
    const label = d.toLocaleDateString(locale, options);
    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
    
    const valOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const val = d.toLocaleDateString(locale, valOptions);
    
    availableDays.push({
      value: val,
      label: capitalizedLabel,
    });
  }

  const timeSlots = [
    "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", 
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", 
    "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { firstName, phone, barber, date, time } = formData;
    const message = isEn
      ? `Hello, I would like to book an appointment with ${barber} on ${date} at ${time}. Name: ${firstName}. Phone: ${phone}`
      : `Bonjour, je voudrais réserver avec ${barber} le ${date} à ${time}. Prénom: ${firstName}. Tél: ${phone}`;
    
    const whatsappUrl = `https://wa.me/212602630847?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="reserver" className="py-32 bg-dark relative overflow-hidden">
      {/* 2026 Animated Background Elements */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C9933A_1px,transparent_1px),linear-gradient(to_bottom,#C9933A_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold">Réservation Instantanée</span>
          </motion.div>
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-cream mb-6">
            Sécurisez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Créneau</span>
          </h2>
          <p className="font-body text-cream/50 font-light leading-relaxed text-lg">
            Connectez-vous directement avec notre équipe via WhatsApp pour une confirmation en temps réel. L'excellence n'attend pas.
          </p>
        </div>

        {/* 2026 Glassmorphic Form UI */}
        <motion.div
          key={mounted ? "booking-animated" : "booking-static"}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-charcoal/40 backdrop-blur-2xl border border-white/10 shadow-2xl p-8 sm:p-14 overflow-hidden"
        >
          {/* Subtle animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-30 pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Field: Prénom */}
              <div className="relative group">
                <div className={`absolute inset-0 bg-gold/5 rounded-2xl transition-all duration-500 blur-xl ${focusedField === 'firstName' ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`relative flex items-center bg-dark/60 rounded-2xl border transition-all duration-300 overflow-hidden ${focusedField === 'firstName' ? 'border-gold shadow-[0_0_20px_rgba(201,147,58,0.15)]' : 'border-white/10 hover:border-white/20'}`}>
                  <div className="pl-6 pr-4 text-gold/60">
                    <User size={20} />
                  </div>
                  <div className="flex-grow relative py-3">
                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none text-cream/50 font-medium ${formData.firstName || focusedField === 'firstName' ? 'text-[10px] -translate-y-2 uppercase tracking-wider text-gold' : 'text-sm translate-y-2'}`}>
                      Votre Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      value={formData.firstName}
                      className="w-full bg-transparent text-cream pt-4 pb-1 outline-none font-body"
                    />
                  </div>
                </div>
              </div>

              {/* Field: Téléphone */}
              <div className="relative group">
                <div className={`absolute inset-0 bg-gold/5 rounded-2xl transition-all duration-500 blur-xl ${focusedField === 'phone' ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`relative flex items-center bg-dark/60 rounded-2xl border transition-all duration-300 overflow-hidden ${focusedField === 'phone' ? 'border-gold shadow-[0_0_20px_rgba(201,147,58,0.15)]' : 'border-white/10 hover:border-white/20'}`}>
                  <div className="pl-6 pr-4 text-gold/60">
                    <Phone size={20} />
                  </div>
                  <div className="flex-grow relative py-3">
                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none text-cream/50 font-medium ${formData.phone || focusedField === 'phone' ? 'text-[10px] -translate-y-2 uppercase tracking-wider text-gold' : 'text-sm translate-y-2'}`}>
                      Téléphone (+212...)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      value={formData.phone}
                      className="w-full bg-transparent text-cream pt-4 pb-1 outline-none font-body"
                    />
                  </div>
                </div>
              </div>

              {/* Field: Choix du Barbier */}
              <div className="relative group md:col-span-2">
                <div className={`absolute inset-0 bg-gold/5 rounded-2xl transition-all duration-500 blur-xl ${focusedField === 'barber' ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`relative flex items-center bg-dark/60 rounded-2xl border transition-all duration-300 overflow-hidden ${focusedField === 'barber' ? 'border-gold shadow-[0_0_20px_rgba(201,147,58,0.15)]' : 'border-white/10 hover:border-white/20'}`}>
                  <div className="pl-6 pr-4 text-gold/60">
                    <Scissors size={20} />
                  </div>
                  <div className="flex-grow relative py-3 pr-6">
                    <label className="absolute left-0 text-[10px] -translate-y-2 uppercase tracking-wider text-gold font-medium">
                      {dict?.booking?.form?.barber || "Barbier"}
                    </label>
                    <select
                      name="barber"
                      onFocus={() => setFocusedField('barber')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      value={formData.barber}
                      className="w-full bg-transparent text-cream pt-4 pb-1 outline-none font-body appearance-none cursor-pointer"
                    >
                      <option className="bg-dark text-cream" value="Peu importe">{dict?.booking?.form?.barber_any || "Peu importe (Premier dispo)"}</option>
                      <option className="bg-dark text-cream" value="Mehdi">Mehdi</option>
                      <option className="bg-dark text-cream" value="Achraf">Achraf</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Field: Date Souhaitée */}
              <div className="relative group">
                <div className={`absolute inset-0 bg-gold/5 rounded-2xl transition-all duration-500 blur-xl ${focusedField === 'date' ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`relative flex items-center bg-dark/60 rounded-2xl border transition-all duration-300 overflow-hidden ${focusedField === 'date' ? 'border-gold shadow-[0_0_20px_rgba(201,147,58,0.15)]' : 'border-white/10 hover:border-white/20'}`}>
                  <div className="pl-6 pr-4 text-gold/60">
                    <CalendarClock size={20} />
                  </div>
                  <div className="flex-grow relative py-3 pr-6">
                    <label className="absolute left-0 text-[10px] -translate-y-2 uppercase tracking-wider text-gold font-medium">
                      {isEn ? "Desired Date" : "Date Souhaitée"}
                    </label>
                    <select
                      name="date"
                      required
                      onFocus={() => setFocusedField('date')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      value={formData.date}
                      className="w-full bg-transparent text-cream pt-4 pb-1 outline-none font-body appearance-none cursor-pointer"
                    >
                      <option className="bg-dark text-cream" value="">{isEn ? "Select a day" : "Choisir un jour"}</option>
                      {availableDays.map((day) => (
                        <option key={day.value} className="bg-dark text-cream" value={day.value}>
                          {day.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Field: Heure Souhaitée */}
              <div className="relative group">
                <div className={`absolute inset-0 bg-gold/5 rounded-2xl transition-all duration-500 blur-xl ${focusedField === 'time' ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`relative flex items-center bg-dark/60 rounded-2xl border transition-all duration-300 overflow-hidden ${focusedField === 'time' ? 'border-gold shadow-[0_0_20px_rgba(201,147,58,0.15)]' : 'border-white/10 hover:border-white/20'}`}>
                  <div className="pl-6 pr-4 text-gold/60">
                    <Clock size={20} />
                  </div>
                  <div className="flex-grow relative py-3 pr-6">
                    <label className="absolute left-0 text-[10px] -translate-y-2 uppercase tracking-wider text-gold font-medium">
                      {isEn ? "Desired Time" : "Heure Souhaitée"}
                    </label>
                    <select
                      name="time"
                      required
                      onFocus={() => setFocusedField('time')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      value={formData.time}
                      className="w-full bg-transparent text-cream pt-4 pb-1 outline-none font-body appearance-none cursor-pointer"
                    >
                      <option className="bg-dark text-cream" value="">{isEn ? "Select a time" : "Choisir l'heure"}</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} className="bg-dark text-cream" value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

            </div>

            {/* Futuristic Submit Button */}
            <div className="pt-6 mt-4 border-t border-white/5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full sm:w-auto mx-auto flex items-center justify-center gap-4 px-12 py-5 rounded-full bg-gold text-dark font-black tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,147,58,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Button hover effect */}
                <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                
                <span className="relative flex items-center gap-3">
                  <MessageSquare size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  {isSubmitting ? "Connexion WhatsApp..." : "Confirmer la Réservation"}
                </span>
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
