"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants for text elements
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.7 
    }
  }
};

export default function TailwindV4Blog() {
  const [isReady, setIsReady] = useState(false);
  
  // Set animation ready after page loads
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <p className="text-blue-200 font-medium mb-3">FRONTEND INSIGHTS</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Deep Dive into Tailwind CSS v4: What's New and Why It Matters
                </h1>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <p className="text-xl text-blue-100 mt-6">
                  Exploring the next evolution of the utility-first CSS framework that's changing how we build for the web.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-center space-x-4 pt-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-blue-700">
                  <Image 
                    src="/images/casancamlogo.jpg" 
                    alt="Author" 
                    width={48} 
                    height={48} 
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Carlos Sanchez</p>
                  <p className="text-blue-200 text-sm">May 7, 2025 • 6 min read</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg lg:prose-xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isReady ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="relative w-full h-80 md:h-[500px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/tailwindv4.png" 
                alt="Tailwind CSS v4 Preview" 
                layout="fill"
              />
            </motion.div>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              Tailwind CSS has revolutionized how many of us approach front-end development, offering a utility-first approach that prioritizes speed and developer experience. With the anticipated release of Tailwind CSS v4, the framework is set to evolve further, introducing changes that promise improved performance, a smaller footprint, and potentially new ways of working with styles.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              As Software Engineer IIs, understanding these upcoming changes is crucial for preparing our projects, leveraging new features, and optimizing our build processes. Let's take a deep dive into what we know about Tailwind CSS v4 and what it might mean for your development workflow.
            </motion.p>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              The Evolution of Tailwind CSS
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              Since its inception, Tailwind CSS has focused on providing low-level utility classes that let you build complex interfaces directly in your HTML. This contrasts with traditional CSS methodologies (like BEM) or component-based frameworks, offering a different paradigm that resonates with many developers for its speed and flexibility.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              Each major version has brought significant improvements, from the introduction of the JIT engine in v2 (which became the default in v3) for incredibly fast build times and arbitrary value support, to smaller file sizes and enhanced features. Tailwind v4 is expected to continue this trajectory, with a focus on core engine improvements and potentially new features that streamline styling even further.
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-90"></div>
                <div className="relative p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Tailwind v1</h3>
                  <p className="text-blue-100">The utility-first approach that started it all</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-90"></div>
                <div className="relative p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Tailwind v2/v3</h3>
                  <p className="text-blue-100">JIT engine revolution with faster builds and arbitrary values</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-90"></div>
                <div className="relative p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Tailwind v4</h3>
                  <p className="text-blue-100">New architecture, better performance, and future innovations</p>
                </div>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              Anticipated Changes and Features in v4
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              While specific details can evolve before the official release, discussions and previews from the Tailwind Labs team point towards several key areas of change in v4:
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-4 my-8">
              <motion.div variants={slideIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rearchitected Engine</h3>
                <p className="text-gray-700">A major focus is on a completely new engine. This isn't just an incremental update; it's a rewrite aimed at improving performance and potentially enabling new capabilities. This could lead to even faster build times and more efficient CSS output.</p>
              </motion.div>
              
              <motion.div variants={slideIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smaller Core Library</h3>
                <p className="text-gray-700">The goal is often to reduce the core library size, and v4 is expected to make strides here, potentially by being more efficient in how it processes and generates CSS.</p>
              </motion.div>
              
              <motion.div variants={slideIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Potential for New Syntax or Directives</h3>
                <p className="text-gray-700">While not confirmed, a rearchitected engine opens the possibility for new @-directives or syntax that could simplify common patterns or enable more advanced use cases directly within your CSS or configuration.</p>
              </motion.div>
              
              <motion.div variants={slideIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Improved Tooling Integration</h3>
                <p className="text-gray-700">Closer integration with build tools and development environments is always a priority, and v4 may bring enhanced support for PostCSS, build tools like Vite and Webpack, and potentially better IDE integration.</p>
              </motion.div>
              
              <motion.div variants={slideIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus on Modern CSS Features</h3>
                <p className="text-gray-700">Tailwind often leverages modern CSS capabilities. V4 may further embrace features like CSS variables in new ways or provide utilities that map more directly to recent CSS additions.</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} className="my-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Example: Tailwind CSS in Action</h3>
              <p className="text-gray-700 mb-4">Here's a simple component example using common Tailwind utility classes:</p>
              
              <div className="bg-gray-900 text-gray-100 p-5 rounded-lg overflow-auto">
                <pre className="language-html"><code>{`<div class="bg-blue-500 text-white p-4 rounded-lg shadow-xl">
  <h2 class="text-2xl font-bold mb-2">Welcome to Tailwind v4!</h2>
  <p>This is a simple example using common utility classes.</p>
</div>`}</code></pre>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500 text-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-2">Welcome to Tailwind v4!</h2>
                <p>This is a simple example using common utility classes.</p>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              Why These Changes Matter
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              For Software Engineer IIs managing existing projects or starting new ones, the changes in v4 are significant:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-700">Faster builds mean quicker feedback loops during development and faster deployment times. Smaller CSS bundles mean faster loading times for users.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintainability</h3>
                <p className="text-gray-700">While the core utility-first philosophy remains, potential new syntax or directives could offer cleaner ways to handle complex styling patterns.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Proofing</h3>
                <p className="text-gray-700">Understanding the direction of the framework helps in making informed decisions about project architecture and tooling.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leveraging New Capabilities</h3>
                <p className="text-gray-700">New features might enable more efficient or elegant solutions to common front-end challenges.</p>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              Preparing for Tailwind CSS v4
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              While the official release is pending, you can start thinking about how to transition:
            </motion.p>

            <motion.div variants={fadeIn} className="my-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Keep Dependencies Updated</h3>
                  <p className="text-gray-700">Ensure your project's PostCSS and other build tool dependencies are relatively current, as v4 will likely require newer versions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Follow Release Candidates and Betas</h3>
                  <p className="text-gray-700">Pay attention to pre-release versions to get a head start on testing and understanding changes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Review the Documentation</h3>
                  <p className="text-gray-700">Once released, thoroughly read the official documentation and migration guide.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Test Thoroughly</h3>
                  <p className="text-gray-700">Major version upgrades can introduce breaking changes. Test your application comprehensively after upgrading.</p>
                </div>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              Looking Ahead
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              Tailwind CSS v4 represents an exciting step forward for the framework. The focus on a rearchitected engine suggests a commitment to performance and setting the stage for future innovations. By staying informed and preparing for the changes, you can ensure your projects continue to benefit from the speed and efficiency that Tailwind CSS provides.
            </motion.p>
          </motion.div>
        </article>
      </main>
    </div>
  );
}