"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

// Featured videos data (showing just top 3)
const featuredVideos = [
  {
    title: "LeetCode 1 - Two Sum - JavaScript / Python Solution",
    thumbnail: "/images/leetcode1.png",
    duration: "8:50",
    views: "15",
    category: "LeetCode Solutions",
    link:"https://youtu.be/GYWSO7JavTM"
  },
  {
    title: "LeetCode 2 - Add Two Numbers - JavaScript / Python Solution",
    thumbnail: "/images/leetcode2.png",
    duration: "11:59",
    views: "10",
    category: "LeetCode Solutions",
    link:"https://youtu.be/-E3Al5Z8otw"
  },
  {
    title:
      "LeetCode 3 - Longest Substring Without Repeating Characters - JavaScript / Python Solution",
    thumbnail: "/images/leetcode3.png",
    duration: "10:12",
    views: "5",
    category: "LeetCode Solutions",
    link:"https://youtu.be/zwGRfKFY1FU"
  },
];

// Video categories for the badges
const categories = [
  { name: "Project Tutorials", color: "bg-green-600" },
  { name: "LeetCode Solutions", color: "bg-blue-600" },
  { name: "Coding Challenges", color: "bg-purple-600" },
  { name: "Tech Reviews", color: "bg-yellow-600" },
];

const MediaPreview = () => {
  return (
    <section className="mt-12 pt-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            YouTube Content
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tutorials, coding challenges and tech reviews to level up your
            skills
          </motion.p>
        </div>

        {/* Category Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <motion.span
              key={index}
              className={`${category.color} text-white text-xs px-3 py-1.5 rounded-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category.name}
            </motion.span>
          ))}
        </div>

        {/* Featured Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a href={video.link}>
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    {video.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-white mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>{video.views} views</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Channel Stats */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-6 bg-gray-800/50 rounded-xl p-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-red-400">
                2
              </div>
              <div className="text-xs text-gray-400">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-red-400">
                3
              </div>
              <div className="text-xs text-gray-400">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-red-400">
                30
              </div>
              <div className="text-xs text-gray-400">Views</div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              link="/media"
              className="inline-block text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              text="Check out my content"
              colour="bg-gradient-to-r from-red-400 to-purple-600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaPreview;
