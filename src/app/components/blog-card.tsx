"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { BlogPost } from "@/lib/blog-data";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Link href={`/blogs/${post.slug}`}>
        <Card className="group flex flex-col bg-[#f6f7fb] bg-card shadow-lg hover:shadow-2xl border-none rounded-2xl h-full overflow-hidden transition-shadow duration-300 cursor-pointer">
          <div className="relative bg-gray-200 w-full h-48 overflow-hidden">
            {/* Placeholder for actual image if not available or using a real Next/Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src =
                  "https://placehold.co/600x400?text=BeMalo+Blog";
              }}
            />
          </div>
          <CardHeader className="p-6 pb-2">
            <div className="flex items-center gap-4 mb-2 text-muted-foreground text-xs">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{post.author}</span>
              </div>
            </div>
            <h3 className="font-semibold text-background group-hover:text-primary text-lg md:text-xl line-clamp-2 transition-colors">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent className="flex-grow p-6 pt-2">
            <p className="text-muted-foreground text-sm line-clamp-3">
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter className="mt-auto p-6 pt-0">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 px-2 py-1 rounded-full text-gray-600 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
