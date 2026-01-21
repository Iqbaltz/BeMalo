"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Jasa Pembuatan Website Medan - BeMalo"
      className="relative flex justify-center items-center bg-[url('/images/bg-hero.jpg')] bg-cover bg-center pt-16 min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background opacity-50"></div>

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Content */}
        <header className="lg:text-left text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-bold text-4xl md:text-6xl lg:text-7xl text-center leading-tight"
          >
            Jasa Pembuatan Website
            <span className="block text-[#8ca5ff]">Profesional di Medan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-muted-foreground text-lg md:text-xl text-center leading-relaxed"
          >
            Bikin website impian Anda bersama BeMalo. Jasa desain web dan web
            development terpercaya untuk mengembangkan bisnis Anda secara
            digital.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold text-primary-foreground transition-colors"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#services"
              className="hover:bg-primary/10 px-8 py-3 border-2 border-primary rounded-lg font-semibold text-primary transition-colors"
            >
              Lihat Layanan
            </a>
          </motion.div>
        </header>
      </div>
    </section>
  );
}
