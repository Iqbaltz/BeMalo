"use client";
import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section id="about" aria-label="Tentang BeMalo - Jasa Web Medan" className="bg-white py-32 text-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-semibold text-primary md:text-lg"
        >
          TENTANG KAMI
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-bold text-3xl md:text-5xl"
        >
          Software House Terpercaya
          <br />
          <span>di Medan & Indonesia</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl text-gray-600 text-lg md:text-xl leading-relaxed"
        >
          BeMalo adalah jasa pembuatan website profesional yang berfokus pada kualitas dan hasil nyata. 
          Kami membantu bisnis di Medan dan seluruh Indonesia untuk berkembang melalui solusi digital 
          yang inovatif. Dari jasa desain web hingga web development, kami siap menjadi partner 
          digital Anda untuk mencapai kesuksesan online.
        </motion.p>
        
        {/* SEO-friendly feature list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="gap-6 grid md:grid-cols-3 mt-12"
        >
          <div className="p-6 border rounded-lg">
            <h3 className="mb-2 font-semibold text-lg">Website Profesional</h3>
            <p className="text-gray-600">Bikin website yang cepat, aman, dan SEO-friendly untuk bisnis Anda</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="mb-2 font-semibold text-lg">Desain Modern</h3>
            <p className="text-gray-600">Jasa desain web responsif yang menarik di semua perangkat</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="mb-2 font-semibold text-lg">Support 24/7</h3>
            <p className="text-gray-600">Layanan support dan maintenance website yang responsif</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
