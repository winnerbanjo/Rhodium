import React from "react";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function InsightsPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0A0A0A] border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              <span>Practitioner Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white leading-[1.12]">
              Insights & Deal Intelligence
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
              Rigorous practitioner analysis on emerging market project finance, sub-national electricity reforms, and sovereign risk allocation.
            </p>
          </div>

          <Button
            href="/blog"
            variant="primary"
            size="md"
            className="self-start md:self-auto bg-neutral-900 text-white hover:bg-black font-medium"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            All Research Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-neutral-50 dark:bg-neutral-900/60 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-white leading-snug mb-2 group-hover:underline">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 dark:bg-neutral-800 text-white font-heading font-medium text-[10px] flex items-center justify-center">
                    FO
                  </div>
                  <span className="font-medium text-neutral-800 dark:text-neutral-300 font-sans">
                    {post.author.name}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
