"use client";

import { BLOG_POSTS } from "@/lib/blog-data";
import BlogCard from "../components/blog-card";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <main className="bg-[#f6f7fb] min-h-screen]">
      <Navigation />

      {/* Blog Hero */}
      <section className="bg- mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl text-[#2d2d2d] text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-semibold text-primary md:text-lg"
        >
          BLOG & ARTIKEL
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-bold text-[#2d2d2d] text-3xl md:text-5xl"
        >
          Wawasan Digital
          <br />
          <span>untuk Bisnis Anda</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto max-w-2xl text-muted-foreground text-lg"
        >
          Temukan artikel menarik seputar pembuatan website, digital marketing,
          dan teknologi terkini untuk mengembangkan bisnis Anda.
        </motion.p>
      </section>

      {/* Blog Grid */}
      <section className="bg- mx-auto px-4 sm:px-6 lg:px-8 pb-32 max-w-7xl text-[#2d2d2d]">
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
