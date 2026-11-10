"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { blogPosts, blogCategories } from "@/content/blog";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Search, Clock, Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white dark:bg-navy-900 pb-20">
      {/* Header */}
      <div className="bg-rhodium-50 dark:bg-navy-950 border-b border-rhodium-200 dark:border-navy-800 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Insights" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Transaction Research & Market Intelligence
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 dark:text-white leading-tight">
              Insights & Advisory Analysis
            </h1>
            <p className="text-base sm:text-lg text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              Practitioner perspectives on emerging market project finance, sub-national electricity reforms, local currency bond structuring, and PPP risk allocation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-rhodium-200 dark:border-navy-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
                  selectedCategory === cat
                    ? "bg-teal-700 text-white font-semibold shadow-sm"
                    : "bg-rhodium-100 dark:bg-navy-800 text-rhodium-700 dark:text-rhodium-300 hover:bg-rhodium-200 dark:hover:bg-navy-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-rhodium-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white placeholder:text-rhodium-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <p className="text-base font-serif font-bold text-navy-900 dark:text-white">
              No articles match your search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs text-teal-700 dark:text-teal-400 underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.slug}
                hoverEffect
                className="flex flex-col justify-between border-rhodium-200 dark:border-navy-800 p-7 bg-white dark:bg-navy-900 shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="teal">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-rhodium-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="group block mb-2">
                    <CardTitle className="text-xl font-serif leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {post.title}
                    </CardTitle>
                  </Link>

                  <p className="text-xs font-semibold text-brass-600 dark:text-brass-400 mb-3">
                    {post.subtitle}
                  </p>

                  <CardDescription className="text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </div>

                <div className="pt-6 mt-6 border-t border-rhodium-100 dark:border-navy-800 flex items-center justify-between text-xs text-rhodium-500">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy-100 dark:bg-navy-800 text-navy-900 dark:text-teal-300 flex items-center justify-center font-bold text-[10px]">
                      FO
                    </div>
                    <span>{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-teal-700 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Newsletter Callout Banner */}
        <section className="bg-rhodium-50 dark:bg-navy-950 rounded-xl p-8 sm:p-12 border border-rhodium-200 dark:border-navy-800">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-serif font-bold text-navy-900 dark:text-white">
              Stay Ahead of Emerging Market Deal Structures
            </h3>
            <p className="text-xs sm:text-sm text-rhodium-600 dark:text-rhodium-300 leading-relaxed">
              We publish quarterly practitioner whitepapers and deal briefs on Africa infrastructure, energy market design, and project bankability.
            </p>
            <div className="pt-2 max-w-md mx-auto">
              <NewsletterForm variant="inline" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
