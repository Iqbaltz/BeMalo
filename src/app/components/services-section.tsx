"use client";
import { motion } from "framer-motion";
import { PenTool, Code2, Users } from "lucide-react";

export default function ServicesSection() {
  const steps = [
    {
      title: "Design",
      description: "Merancang solusi atau sistem sesuai kebutuhan pengguna.",
      icon: <PenTool className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
    {
      title: "Develop",
      description:
        "Mengembangkan atau membangun solusi tersebut menjadi produk nyata.",
      icon: <Code2 className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
    {
      title: "Deliver",
      description:
        "Menyampaikan hasil akhir kepada pengguna agar bisa digunakan dan memberi manfaat.",
      icon: <Users className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-label="Cara Kerja Kami BeMalo"
      className="bg-white py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
        {/* Subtle gradient background on the right */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-950/40 to-transparent pointer-events-none rounded-r-[2.5rem]"></div>

        <div className="relative z-10 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-bold text-white text-4xl md:text-5xl lg:text-[64px]"
          >
            Cara Kerja Kami
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-lg md:text-xl font-medium"
          >
            <p>Design. Develop. Deliver</p>
            <p>Grow with Purpose</p>
          </motion.div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 border-white rounded-[3rem] p-6 lg:p-8 flex flex-row items-center gap-6 bg-black/20 backdrop-blur-sm"
            >
              <div className="flex-shrink-0">{step.icon}</div>
              <div className="flex flex-col text-left">
                <h3 className="font-bold text-white text-xl mb-1">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm leading-snug">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
