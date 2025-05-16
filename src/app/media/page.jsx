"use client";

import { motion } from 'framer-motion';

const channelData = {
  name: "CasancamDev",
  description: "Sharing coding tutorials, tech reviews, and programming challenges to help you become a better developer",
  subscribers: "7",
  totalVideos: 3,
  totalViews: "30",
  bannerImage: "/images/ytBanner.jpg",
  channelLogo: "/images/casancamlogo.jpg",
  channelUrl: "https://www.youtube.com/@casancamdev",
};

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

const MediaContentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Media & Content
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Video tutorials, coding challenges, and educational content to help you level up your skills
          </motion.p>
        </div>
        
        {/* YouTube Channel Section */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-red-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            YouTube Channel
          </motion.h2>
          
          {/* Channel Banner */}
          <motion.div
            className="relative w-full h-40 sm:h-56 md:h-64 rounded-xl overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img
              src={channelData.bannerImage || "https://via.placeholder.com/1500x350/333/fff?text=YouTube+Banner"}
              alt="Channel Banner"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={channelData.channelLogo || "https://via.placeholder.com/200x200/555/fff?text=Logo"}
                  alt="Channel Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg sm:text-2xl font-bold text-white">{channelData.name}</h3>
                <div className="flex items-center text-sm text-gray-300">
                  <span>{channelData.subscribers} subscribers</span>
                  <span className="mx-2">•</span>
                  <span>{channelData.totalVideos} videos</span>
                </div>
              </div>
              <a
                href={channelData.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base transition-colors hidden sm:block"
              >
                Subscribe
              </a>
            </div>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Channel Description */}
            <motion.div
              className="lg:w-1/3 bg-gray-800 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">About the Channel</h3>
              <p className="text-gray-300 mb-6">{channelData.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-red-400">{channelData.subscribers}</div>
                  <div className="text-xs text-gray-400">Subscribers</div>
                </div>
                <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-red-400">{channelData.totalVideos}</div>
                  <div className="text-xs text-gray-400">Videos</div>
                </div>
                <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-red-400">{channelData.totalViews}</div>
                  <div className="text-xs text-gray-400">Views</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a
                  href={channelData.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors w-full text-center"
                >
                  Visit Channel
                </a>
              </div>
            </motion.div>
            
            {/* Channel Highlights */}
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-white">Channel Highlights</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredVideos.map((video, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/40 rounded-lg overflow-hidden cursor-pointer transition-transform hover:transform hover:scale-[1.02]"
                    >
                      <div className="relative">
                        <img
                          src={video.thumbnail || `https://via.placeholder.com/640x360/555/fff?text=Video+${index + 1}`}
                          alt={video.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                          {video.category}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-white mb-1 line-clamp-2">{video.title}</h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <a
                    href={channelData.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-red-400 hover:text-red-300 font-medium"
                  >
                    View all videos →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call To Action */}
        <div className="text-center mt-16">
          <motion.div
            className="bg-gradient-to-r from-red-800 to-purple-800 p-8 rounded-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
            <p className="mb-6 text-gray-200">Subscribe to my YouTube channel for weekly tutorials and coding content.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={channelData.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Subscribe on YouTube
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Contact for Collaboration
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MediaContentPage;