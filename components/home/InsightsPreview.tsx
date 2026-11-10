import React from "react";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Clock, ArrowRight, ChevronRight, BookOpen } from "lucide-react";

export function InsightsPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-navy-950 border-b border-rhodium-100 dark:border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Practitioner Analysis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 dark:text-white leading-[1.15]">
              Insights & Intelligence
            </h2>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300">
              Rigorous practitioner analysis on emerging market project finance, sub-national electricity reforms, and sovereign risk allocation.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rhodium-50 dark:bg-navy-900 border border-rhodium-200 dark:border-navy-700 text-sm font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-navy-800 transition-all shadow-sm self-start md:self-auto"
          >
            <span>Browse All Research Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-rhodium-50/50 dark:bg-navy-900/40 rounded-3xl p-7 border border-rhodium-200/80 dark:border-navy-800 hover:bg-white dark:hover:bg-navy-900 hover:border-teal-500/40 hover:shadow-[0_16px_40px_rgba(11,31,58,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-rhodium-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-950 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-rhodium-200/60 dark:border-navy-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-teal-700 text-white font-bold text-[10px] flex items-center justify-center">
                    FO
                  </div>
                  <span className="font-medium text-navy-900 dark:text-rhodium-200">
                    {post.author.name}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-rhodium-100 dark:bg-navy-800 group-hover:bg-teal-50 dark:group-hover:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
