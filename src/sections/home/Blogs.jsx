"use client";

import { motion } from 'framer-motion';
import Button from '@/components/Button';

const recentBlogPosts = [
  {
    slug: 'storybook-components',
    title: 'Building your own component library using Storybook',
    excerpt: 'Step by step guide on how to create your UI library using Storybook.',
    date: 'May 13th, 2025',
    categories: ['Technical Tutorials', 'JavaScript', 'Web Development'],
    image: '/images/storybook.png',
  },
  {
    slug: 'tailwind-v4',
    title: 'Understanding Tailwind v4',
    excerpt: 'Tailwind v4 is live! Make sure to read to understand all new features and get the most out of tailwind!',
    date: 'May 7th, 2025',
    categories: ['Web Development', 'JavaScript'],
    image: '/images/tailwindv4.png',
  },
  {
    slug: 'ai-productivity',
    title: 'Is AI really useful for developers?',
    excerpt: 'In a world where developers have thousands of AI tools available to increase productivity, are they really useful? My takes here!',
    date: 'April 30th, 2025',
    categories: ['Productivity', 'AI'],
    image: '/images/ai-for-developers.png',
  },
];

const BlogPreview = () => {
  return (
    <section className="mt-12 pt-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest Articles
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thoughts and insights on development, technology, and more
          </motion.p>
        </div>

        {/* Recent Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {recentBlogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {post.image && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 transition-transform hover:scale-105 duration-300"
                  />
                </div>
              )}
              <div className="p-5 flex-1 flex flex-col">
                <a href={`/blog/${post.slug}`}>                <h3 className="text-lg font-bold mb-2 text-white line-clamp-2">{post.title}</h3>
                </a>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {post.categories.slice(0, 2).map((category, i) => (
                    <span key={i} className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              link="/blog"
              className="inline-block text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              text="Read my Blogs"
              colour="bg-gradient-to-r from-teal-400 to-cyan-600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;