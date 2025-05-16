"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Assuming you are using Next.js Link

const blogPosts = [
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

const BlogPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Get all unique categories/tags from blog posts
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => {
      post.categories.forEach(category => tags.add(category));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter blog posts based on selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return blogPosts;
    }
    return blogPosts.filter(post =>
      selectedTags.some(tag => post.categories.includes(tag))
    );
  }, [selectedTags]);

  // Toggle tag selection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Clear all selected tags
  const clearTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-20">
      {/* This div is for spacing below the navbar - adjust pt-24 as needed */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600" // Consistent gradient style
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Blog
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thoughts, tutorials, and insights on software development and technology.
          </motion.p>
        </div>

        {/* Filter Tags */}
        <motion.div
          className="mb-12 max-w-5xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium text-white">Filter by category:</h3>
            {selectedTags.length > 0 && (
              <button
                onClick={clearTags}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2"> {/* Adjusted gap */}
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-teal-600 text-white' // Accent color for selected tags
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {selectedTags.length > 0 && (
            <motion.div
               className="mt-4 text-sm text-gray-400"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
            >
              Showing posts in categories: <span className="font-medium">{selectedTags.join(', ')}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Blog Post List */}
        <section>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden h-full flex flex-col" // Ensure cards have equal height
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {post.image && (
                     <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10" />
                        <img
                           src={post.image}
                           alt={post.title}
                           className="w-full h-64"
                        />
                     </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p> {/* Added flex-grow */}
                    <div className="flex flex-wrap gap-2 mb-4">
                       {post.categories.map((category, i) => (
                         <span key={i} className="text-xs bg-gray-700/60 border border-gray-600 px-2 py-1 rounded-full text-gray-300">
                           {category}
                         </span>
                       ))}
                    </div>
                    <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                    <Link href={`/blog/${post.slug}`} className="inline-block mt-auto text-teal-400 hover:underline font-medium"> {/* Added mt-auto */}
                       Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No blog posts match your selected filters.</p>
              <button
                onClick={clearTags}
                className="mt-4 text-teal-400 hover:text-teal-300 transition-colors"
              >
                Clear filters to see all posts
              </button>
            </div>
          )}
        </section>

        {/* Call To Action */}
        <div className="text-center mt-16">
          <motion.div
            className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Have a topic suggestion or question?</h3>
            <p className="mb-6 text-gray-200">Feel free to reach out or connect with me.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="/contact"
                    className="inline-block bg-white text-purple-900 font-bold py-3 px-8 rounded-lg hover:bg-purple-100 transition-colors duration-300"
                >
                    Contact Me
                </Link>
                 <a
                    href="https://x.com/casancamdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                    Follow me on X
                </a>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;