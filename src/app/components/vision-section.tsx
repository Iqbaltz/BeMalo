"use client";
import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section id="about" className="bg-white py-32 text-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-semibold text-primary md:text-lg"
        >
          OUR VISION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-bold text-3xl md:text-5xl"
        >
          Design. Develop. Deliver.
          <br />
          <span>Grow with Purpose</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl text-gray-600 text-lg md:text-xl leading-relaxed"
        >
          Every great digital product begins with understanding. We focus on
          real user insights, helping your business grow with purpose and scale
          quickly. Together, we create digital solutions that are not just
          pixel-perfect, looking for truly impactful.
        </motion.p>
      </div>
    </section>
  );
}
