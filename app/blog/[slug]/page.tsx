import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import {
  Clock,
  Calendar,
  Share2,
  Linkedin,
  ArrowRight,
  BookmarkCheck,
  Check,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Rhodium Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-white dark:bg-navy-900 pb-20">
      {/* Header */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Insights", href: "/blog" },
              { label: post.category },
            ]}
          />

          <div className="max-w-4xl mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="teal">{post.category}</Badge>
              <div className="flex items-center gap-1.5 text-xs text-rhodium-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-[1.18]">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-brass-700 dark:text-brass-400">
              {post.subtitle}
            </p>

            {/* Author info */}
            <div className="pt-4 flex items-center justify-between border-t border-rhodium-200 dark:border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-serif font-bold text-sm">
                  FO
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-[11px] text-rhodium-500">
                    {post.author.role} • Rhodium Impact
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-rhodium-500">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-10">
            {/* Lead Excerpt */}
            <p className="text-lg sm:text-xl font-serif text-rhodium-800 dark:text-rhodium-100 leading-relaxed font-medium pl-4 border-l-4 border-teal-700">
              {post.excerpt}
            </p>

            {/* Article Sections */}
            <div className="space-y-12">
              {post.content.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white leading-snug">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-base text-rhodium-700 dark:text-rhodium-200 leading-relaxed font-sans"
                    >
                      {p}
                    </p>
                  ))}

                  {sec.callout && (
                    <blockquote className="my-6 p-6 rounded-lg bg-rhodium-50 dark:bg-navy-950 border-l-4 border-brass-500 text-navy-900 dark:text-white font-serif italic text-base leading-relaxed">
                      {sec.callout}
                    </blockquote>
                  )}
                </section>
              ))}
            </div>

            {/* Article Footer Actions */}
            <div className="pt-8 border-t border-rhodium-200 dark:border-navy-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-rhodium-500">
                <BookmarkCheck className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <span>Rhodium Impact Transaction Practice Series</span>
              </div>

              {/* Share triggers */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-rhodium-500">Share:</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://rhodiumimpact.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded bg-rhodium-100 dark:bg-navy-800 text-navy-900 dark:text-white hover:bg-teal-700 hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=https://rhodiumimpact.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded bg-rhodium-100 dark:bg-navy-800 text-navy-900 dark:text-white hover:bg-teal-700 hover:text-white transition-colors text-xs font-bold w-6 h-6 flex items-center justify-center"
                  aria-label="Share on X"
                >
                  𝕏
                </a>
              </div>
            </div>

            {/* In-article Consultation Prompt */}
            <div className="bg-gradient-to-r from-navy-900 to-teal-950 text-white rounded-xl p-8 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brass-400">
                Advisory Consultation
              </span>
              <h3 className="text-xl font-serif font-bold">
                Applying These Principles to Your Transaction
              </h3>
              <p className="text-xs sm:text-sm text-rhodium-300 leading-relaxed">
                Our transaction partners structure bankable models, risk matrices, and capital stacks tailored to your project. Schedule a confidential consultation today.
              </p>
              <div className="pt-2">
                <Button href="/book" variant="accent" size="md">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Table of Contents & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            {/* Table of Contents */}
            <div className="sticky top-28 space-y-6">
              <div className="p-6 rounded-lg border border-rhodium-200 dark:border-navy-800 bg-rhodium-50/50 dark:bg-navy-950/50 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                  Table of Contents
                </h4>
                <nav className="space-y-2 text-xs">
                  {post.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-rhodium-600 dark:text-rhodium-400 hover:text-teal-700 dark:hover:text-teal-300 py-1 transition-colors"
                    >
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Newsletter Card */}
              <div className="p-6 rounded-lg border border-rhodium-200 dark:border-navy-800 bg-white dark:bg-navy-900 space-y-3">
                <h4 className="text-sm font-serif font-bold text-navy-900 dark:text-white">
                  Executive Briefings
                </h4>
                <p className="text-xs text-rhodium-600 dark:text-rhodium-400">
                  Join institutional investors and sovereign advisers receiving our deal briefs.
                </p>
                <NewsletterForm variant="stacked" />
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rhodium-500">
                    Related Articles
                  </h4>
                  <div className="space-y-3">
                    {relatedPosts.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="block p-4 rounded-lg border border-rhodium-200 dark:border-navy-800 bg-white dark:bg-navy-900 hover:border-teal-700 transition-colors group"
                      >
                        <Badge variant="teal" className="text-[10px] mb-1.5">
                          {rel.category}
                        </Badge>
                        <h5 className="text-xs font-serif font-bold text-navy-900 dark:text-white group-hover:text-teal-700 transition-colors line-clamp-2">
                          {rel.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
