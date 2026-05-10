import { notFound } from "next/navigation";
import styles from "./blog-content.module.css";
import { BLOG_POSTS } from "@/lib/blog-data";
import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan - BeMalo",
    };
  }

  return {
    title: `${post.title} - BeMalo Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f6f7fb] min-h-screen">
      <Navigation />

      <article className="bg-[#f6f7fb] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-4xl text-[#2d2d2d]">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="group inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Blog
        </Link>

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="bg-muted-foreground rounded-full w-1 h-1" />
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="mb-6 font-bold text-3xl md:text-5xl leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full font-medium text-primary text-sm"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="shadow-2xl mb-12 rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div
          className={styles["blog-content"]}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <Footer />
    </main>
  );
}
