"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Jasa Pembuatan Website",
      description:
        "Bikin website profesional yang cepat, aman, dan siap mendukung pertumbuhan bisnis Anda. Cocok untuk company profile, toko online, dan landing page.",
      image: "/images/service1.jpg",
      alt: "Jasa pembuatan website profesional di Medan - BeMalo web development",
    },
    {
      title: "Jasa Desain Web",
      description:
        "Desain website modern, responsif, dan menarik yang dioptimalkan untuk semua perangkat. UI/UX design yang user-friendly untuk pengalaman terbaik.",
      image: "/images/service2.jpg",
      alt: "Jasa desain web modern dan responsif - BeMalo web design Medan",
    },
    {
      title: "Konsultasi Web",
      description:
        "Dapatkan panduan strategis tentang struktur website, teknologi, dan performa untuk memaksimalkan potensi digital bisnis Anda.",
      image: "/images/service3.jpg",
      alt: "Konsultasi pembuatan website untuk bisnis - BeMalo digital agency",
    },
  ];

  return (
    <section id="services" aria-label="Layanan Jasa Web BeMalo" className="bg-background py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-semibold text-primary md:text-lg"
          >
            LAYANAN KAMI
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 font-bold text-foreground text-3xl md:text-5xl"
          >
            Jasa Bikin Website
            <br />
            <span>untuk Bisnis Anda</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl text-muted-foreground text-lg"
          >
            Kami menyediakan jasa pembuatan website lengkap mulai dari desain hingga development. Solusi digital terbaik untuk UMKM dan perusahaan di Medan dan seluruh Indonesia.
          </motion.p>
        </div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="group bg-card bg-white shadow-lg hover:shadow-2xl border-none rounded-2xl h-full overflow-hidden transition-shadow duration-300 cursor-pointer service-card">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-background text-lg md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-background leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
