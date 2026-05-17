"use client";
import { motion } from "framer-motion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

export default function TestimonialsSection() {
  const opinions = [
    { name: "Iqbal", icon: "Iqbal" },
    { name: "Candra", icon: "Candras" },
    { name: "Mia", icon: "Mia" },
    { name: "Eva", icon: "Vina" },
    { name: "Yansen", icon: "Jansen" },
    { name: "Yuda", icon: "Yudha" },
  ];

  return (
    <section className="bg-white py-24 sm:pt-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 font-semibold text-[#6E1C1C] md:text-xl"
          >
            Mengapa digitalisasi penting?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-black text-3xl md:text-4xl lg:text-5xl"
          >
            Baca pendapat kami disini!
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opinions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] p-3 relative pt-10 mt-8"
            >
              {/* Avatar overlapping top edge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="rounded-full p-1 bg-white">
                  <Avatar className="w-14 h-14 border border-gray-200">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${item.icon}&backgroundColor=e2e8f0`}
                      alt={item.name}
                    />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Inner dark card */}
              <div className="bg-[#111] rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                {/* Red subtle gradient top right */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/40 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

                <div className="relative z-10 flex-1">
                  <p className="text-white/90 text-sm leading-relaxed mb-8 font-medium">
                    Transformasi ke digital sebuah proses bisnis salah satu awal
                    mengikuti perkembangan zaman
                  </p>
                </div>

                <div className="relative z-10 flex justify-between items-end mt-auto text-white/50">
                  <div className="flex font-bold text-lg tracking-tighter">
                    <img
                      src="/images/bm-outline.svg"
                      className="-ml-3 -mb-3 w-16"
                      alt="bemalo-icon"
                    />
                  </div>
                  <span className="text-white font-medium text-sm">
                    {item.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
