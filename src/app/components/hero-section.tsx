"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const services = [
  "Pembuatan\nWebsite & Aplikasi",
  "UI/UX\nDesign & Branding",
  "Digital\nMarketing & SEO",
  "Social Media\nManagement",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const prev = (currentIndex - 1 + services.length) % services.length;
    const next = (currentIndex + 1) % services.length;
    return [prev, currentIndex, next];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // Autoplay every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Jasa Pembuatan Website Medan - BeMalo"
      className="relative flex justify-center items-center bg-[url('/images/bg-hero.png')] bg-cover bg-center pt-16 min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60 md:bg-black/40 backdrop-blur-[2px]"></div>

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl w-full flex flex-col lg:flex-row items-end justify-between gap-12 text-white">
        {/* Left Content */}
        <div className="lg:text-left text-center lg:w-1/2 flex flex-col items-center lg:items-start text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-bold text-6xl md:text-8xl lg:text-[100px] leading-tight tracking-tight"
          >
            beMalo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-md text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            helping your business through company digitalization with creativity
            and innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-8 py-3 rounded-full font-medium text-white transition-all"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#services"
              className="bg-[#2D2A4A] hover:bg-[#3D3A5A] px-8 py-3 rounded-full font-medium text-white transition-all shadow-[0_0_15px_rgba(45,42,74,0.5)]"
            >
              Lihat Layanan
            </a>
          </motion.div>
        </div>

        {/* Right Content - Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:w-1/2 flex flex-col items-center lg:items-end justify-center gap-6 mt-12 lg:mt-0"
        >
          <div className="w-full flex flex-col items-center gap-4 lg:mr-12">
            <button
              onClick={handlePrev}
              className="text-white/50 hover:text-white transition-colors cursor-pointer p-2"
              aria-label="Previous service"
            >
              <ChevronUp className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center w-full max-w-[24rem] h-[350px] relative justify-center">
              <AnimatePresence mode="popLayout">
                {getVisibleServices().map((index, i) => {
                  const isActive = i === 1;
                  const isTop = i === 0;
                  const isBottom = i === 2;

                  return (
                    <motion.div
                      key={`${index}-${i}`} // Use i in key to trigger re-renders properly on position change if needed, but actually best to use unique id based on content for AnimatePresence. Given we want them to swap, we can use the index.
                      layout
                      initial={{
                        opacity: 0,
                        y: isTop ? -80 : isBottom ? 80 : 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        y: isTop ? -100 : isBottom ? 100 : 0,
                        scale: isActive ? 1 : 0.85,
                        zIndex: isActive ? 10 : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: { duration: 0.2 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className={`
                        whitespace-pre-line text-center absolute flex flex-col justify-center items-center rounded-full
                        ${
                          isActive
                            ? "bg-white/10 backdrop-blur-xl border border-white/30 px-8 sm:px-12 py-6 text-white text-lg sm:text-xl font-medium shadow-[0_0_30px_rgba(255,255,255,0.05)] w-full max-w-[340px]"
                            : "bg-black/20 backdrop-blur-md border border-white/5 px-6 py-4 text-white/50 text-sm sm:text-base w-3/4 max-w-[280px]"
                        }
                      `}
                      style={{
                        top: "50%",
                        marginTop: isActive
                          ? "-44px"
                          : isTop
                            ? "-36px"
                            : "-36px", // adjust based on height to center
                      }}
                    >
                      {isActive && (
                        <>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_white]"></div>
                        </>
                      )}
                      <span className="relative z-10 leading-tight block">
                        {services[index]}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <button
              onClick={handleNext}
              className="text-white/50 hover:text-white transition-colors cursor-pointer p-2"
              aria-label="Next service"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
