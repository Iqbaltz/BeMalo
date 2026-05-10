"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const offerings = [
  "Pembuatan\nWebsite & Aplikasi",
  "Konsultasi IT &\ndigital transformation",
  "E-Solusi CRM &\nsistem bisnis",
  "Digital marketing &\nbranding berbasis teknologi",
  "Keamanan Siber\n(Cybersecurity)",
  "Keamanan data &\nintegrasi sistem",
];

export default function VisionSection() {
  return (
    <section
      id="about"
      aria-label="Tentang BeMalo - Jasa Web Medan"
      className="bg-white py-24 text-gray-900"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-gray-900 text-xl"
        >
          Tentang kami
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-bold text-4xl md:text-5xl tracking-tight"
        >
          Solusi TI Untuk Mengembangkan Bisnis Anda
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl text-gray-800 text-lg md:text-xl leading-relaxed mb-8 font-medium"
        >
          <span className="font-bold">beMalo</span> adalah sebuah perusahaan
          teknologi informasi (IT) yang membantu bisnis-bisnis dalam penerapan
          digitalisasi dan inovasi teknologi yang selaras dengan proses bisnis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <Link
            href="#about-more"
            className="bg-[#2D2A2A] hover:bg-black text-white px-8 py-3 rounded-xl text-sm font-medium transition-colors"
          >
            More
          </Link>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4"
        >
          {offerings.map((item, index) => (
            <div
              key={index}
              className="border-2 border-black rounded-full px-6 py-4 flex items-center justify-start min-h-[80px]"
            >
              <p className="font-medium text-black whitespace-pre-line text-sm sm:text-base leading-tight">
                {item}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
