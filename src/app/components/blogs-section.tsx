"use client";
import { BLOG_POSTS } from "@/lib/blog-data";
import { motion } from "framer-motion";
import BlogCard from "./blog-card";

export default function BlogsSection() {
  return (
    <section className="bg-white py-24 sm:pb-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-bold text-gray-900 text-3xl md:text-5xl"
          >
            Blog & Artikel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-2xl text-gray-600 text-lg md:text-xl"
          >
            Temukan artikel menarik seputar pembuatan website, digital
            marketing, dan teknologi terkini untuk mengembangkan bisnis Anda.
          </motion.p>
        </div>
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 text-gray-900">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
