import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PackSpecial from "@/components/PackSpecial";
import Philosophy from "@/components/Philosophy";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-dark">
      <LanguageSwitcher currentLang={lang} />
      <Navbar dict={dict.navigation} />
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <PackSpecial dict={dict.pack} />
      <Philosophy dict={dict.philosophy} />
      <Team dict={dict.team} />
      <Gallery dict={dict.gallery} />
      <Location dict={dict.location} />
      <Booking dict={dict.booking} />
      <Footer dict={dict.footer} />
      <WhatsAppButton />
    </main>
  );
}
