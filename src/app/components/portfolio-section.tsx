"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioSection() {
  const clients = [
    {
      name: "DIRGA WIJAWA FARM",
      description:
        "Sebuah bisnis yang begerak dibidang peternakan ayam didaerah Asahan, Medan.\nKami memberikan solusi pembuatan website untuk meperkenalkan usaha kepada masyarakat Indonesia bahwa DIRGA WIJAYA FARM peternakan yang memiliki integritas dan berkualitas dalam peternakan ayam.",
      logo: "/images/dirga.webp", // Fallback to existing image name from previous array if applicable
    },
    {
      name: "AN BEAUTY CARE",
      description:
        "Sebuah bisnis yang begerak dibidang klinik kecantikan didaerah ITC BSD.\nKami memberikan solusi Digital Marketing dan Branding berbasis teknologi untuk memperkenalkan AN BEAUTY CARE kepada masyarakat.\nKami juga membantu membuat sistem yang membantu menjaga hubungan pelanggan.",
      logo: "/images/project1.png", // Fallback, recommend changing path to correct logo
    },
  ];

  return (
    <section id="work" className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      {/* Subtle red/dark gradient on the right to match the dark aesthetic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-950/20 to-transparent pointer-events-none"></div>

      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-white text-4xl md:text-5xl lg:text-[56px] tracking-wide uppercase"
          >
            OUR CLIENT
          </motion.h2>
        </div>

        <div className="gap-6 grid lg:grid-cols-2 mb-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start"
            >
              <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    // Fallback visually if logo isn't present in public/images yet
                    (e.target as HTMLImageElement).src =
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23f3f4f6" width="100" height="100"/><text fill="rgba(0,0,0,0.5)" x="50" y="50" font-family="sans-serif" font-size="12" text-anchor="middle" dominant-baseline="middle">LOGO</text></svg>';
                  }}
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="mb-2 font-bold text-black text-lg">
                  {client.name}
                </h3>
                <p className="text-black/80 text-sm whitespace-pre-line leading-relaxed font-medium">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-start ml-2"
        >
          <Link
            href="#more-clients"
            className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-3 rounded-full font-bold text-sm tracking-widest transition-colors duration-300 uppercase"
          >
            MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
