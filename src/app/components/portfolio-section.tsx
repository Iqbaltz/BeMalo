"use client";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Foundasi Agency",
      description: "Brand identity and website design for a digital agency",
      image: "/images/project1.png",
      alt: "Foundasi Agency website design showcasing brand identity",
      url: "https://foundasi-landing-page.vercel.app/",
    },
    {
      title: "SUGARBOMB Waxing & Beauty",
      description:
        "Website design for a beauty salon specializing in waxing and eyebrow services",
      image: "/images/project2.png",
      alt: "SUGARBOMB Eyelash & Eyebrow salon website design",
      url: "https://sugarbombwax.com/",
    },
    {
      title: "SBS Cosmetics",
      description: "Makeup products manufacturing company website",
      image: "/images/project3.png",
      alt: "SBS Cosmetics website design for makeup products",
      url: "https://sbs-cosmetics.com/",
    },
  ];

  return (
    <section id="work" className="bg-primary py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-semibold md:text-lg"
          >
            CREATIVE PORTFOLIO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 font-bold text-white text-3xl md:text-5xl"
          >
            Recent Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-3xl text-blue-100 text-lg md:text-xl"
          >
            These are our recent examples of packages or entire business
            websites that we built around the world and it&apos;s becoming
            better and better.
          </motion.p>
        </div>

        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden transition-shadow duration-300 cursor-pointer portfolio-item"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="right-6 bottom-6 left-6 absolute">
                  <h3 className="mb-2 font-semibold text-white text-xl">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
