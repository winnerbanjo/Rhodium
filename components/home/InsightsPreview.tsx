import React from "react";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function InsightsPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-obsidian-950 border-b border-rhodium-200/80 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rhodium-100 dark:bg-obsidian-900 border border-rhodium-200 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-coral-500 font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-coral-500" />
              <span>/ Practitioner Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-obsidian-950 dark:text-white leading-[1.12]">
              Insights & <span className="neuros-gradient-text">Deal Intelligence</span>
            </h2>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 font-sans">
              Rigorous practitioner analysis on emerging market project finance, sub-national electricity reforms, and sovereign risk allocation.
            </p>
          </div>

          <Button
            href="/blog"
            variant="neuros"
            size="md"
            className="self-start md:self-auto"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            All Research Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#F0F2F4] dark:bg-obsidian-900/60 rounded-3xl p-7 border border-rhodium-200/80 dark:border-white/10 hover:border-coral-500 hover:shadow-[0_16px_40px_rgba(241,79,68,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white dark:bg-obsidian-950 text-coral-500 border border-rhodium-200 dark:border-white/10">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-rhodium-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-obsidian-950 dark:text-white group-hover:text-coral-500 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 line-clamp-3 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-rhodium-200/60 dark:border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-coral-500 to-cobalt-500 text-white font-heading font-bold text-[10px] flex items-center justify-center">
                    FO
                  </div>
                  <span className="font-semibold text-obsidian-950 dark:text-rhodium-200 font-sans">
                    {post.author.name}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-white dark:bg-obsidian-950 border border-rhodium-200 dark:border-white/10 text-rhodium-400 group-hover:bg-coral-500 group-hover:text-white group-hover:border-coral-500 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
