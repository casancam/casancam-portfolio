"use client"

import { useState, useEffect } from 'react';
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

export default function AIProductivityBlog() {
  const [isReady, setIsReady] = useState(false);
  
  // Set animation ready after page loads
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <p className="text-indigo-300 font-medium mb-3">TECH INSIGHTS</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Supercharge Your Workflow: AI Productivity for Software Engineers
                </h1>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <p className="text-xl text-indigo-100 mt-6">
                  AI isn't just changing the world; it's actively reshaping the daily life of software engineers (or it tries).
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-center space-x-4 pt-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-indigo-700">
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
                  <p className="text-indigo-300 text-sm">April 30, 2025 • 5 min read</p>
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
                src="/images/ai-for-developers.png" 
                alt="AI and Software Development" 
                layout="fill"
              />
            </motion.div>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              Gone are the days when AI felt like a futuristic concept disconnected from practical coding. Today, AI-powered tools are powerful co-pilots, helping us write code faster, squash bugs more effectively, and even understand complex systems. As Software Engineers, embracing these tools isn't just about staying current; it's about significantly boosting your productivity and focusing on the higher-level, creative aspects of your work.
            </motion.p>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-8">
              The AI Evolution in Software Development
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              Historically, software development was a highly manual process. While automation has always been a goal (think compilers, build tools, CI/CD), AI introduces a new level of intelligence and capability. AI can analyze vast amounts of code, understand context, and generate novel solutions or identify subtle issues that might escape human eyes.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              This shift means less time spent on repetitive tasks like writing boilerplate code, searching for syntax in documentation, or debugging common errors. It frees up cognitive load, allowing engineers to concentrate on architectural design, complex problem-solving, feature innovation, and understanding user needs.
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Before AI</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Manual boilerplate code writing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Time-consuming documentation searches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Tedious debugging processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Limited context for error resolution</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
                <h3 className="text-xl font-semibold text-green-900 mb-3">With AI</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated code generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Instant documentation access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Intelligent error detection & resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Contextual understanding of codebases</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              Key Areas Where AI Boosts Productivity
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              AI is impacting various stages of the software development lifecycle:
            </motion.p>

            <motion.div variants={fadeIn} className="space-y-6 my-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Code Generation and Completion</h3>
                <p className="text-gray-700">This is perhaps the most visible impact. Tools can suggest lines of code, complete functions based on comments or context, and even generate entire components from natural language descriptions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Debugging and Error Detection</h3>
                <p className="text-gray-700">AI can analyze error messages and code context to suggest potential fixes, identify the root cause of issues, and even predict potential bugs before code is run.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Code Review</h3>
                <p className="text-gray-700">AI assistants can perform initial code reviews, checking for style guide adherence, potential bugs, and security vulnerabilities, providing instant feedback to the developer.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation Generation</h3>
                <p className="text-gray-700">Automatically generating documentation or clarifying existing code snippets saves significant time.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-700">AI can help generate test cases, analyze test results, and identify areas of the codebase that need better test coverage.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Searching and Information Retrieval</h3>
                <p className="text-gray-700">AI-powered search tools and conversational assistants can quickly provide relevant code snippets, explanations of concepts, or solutions to problems, often faster than traditional search engines.</p>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              Popular AI Tools for Software Engineers
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              The landscape of AI tools for developers is growing rapidly. Here are a few prominent examples:
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl shadow-sm border border-indigo-100 flex flex-col">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">GitHub Copilot</h3>
                <p className="text-sm text-gray-700 flex-grow">An AI pair programmer that provides code suggestions as you type, drawing from a vast dataset of public code.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl shadow-sm border border-blue-100 flex flex-col">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Tabnine</h3>
                <p className="text-sm text-gray-700 flex-grow">Similar to Copilot, offering AI-driven code completion and generation across many languages and IDEs.</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl shadow-sm border border-emerald-100 flex flex-col">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">LLMs (ChatGPT/Claude)</h3>
                <p className="text-sm text-gray-700 flex-grow">Not strictly coding-only tools, but invaluable for understanding concepts, debugging logic, and generating code snippets.</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl shadow-sm border border-amber-100 flex flex-col">
                <div className="w-12 h-12 bg-amber-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Cursor</h3>
                <p className="text-sm text-gray-700 flex-grow">AI-native code editor that integrates AI capabilities directly into the editing experience.</p>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-xl shadow-sm border border-rose-100 flex flex-col">
                <div className="w-12 h-12 bg-rose-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h3 className="text-lg font-semibold text-rose-900 mb-2">Warp</h3>
                <p className="text-sm text-gray-700 flex-grow">Terminal with AI assistance, allowing natural language interactions with your environment.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🧰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Tools</h3>
                <p className="text-sm text-gray-700 flex-grow">Tools like v0.dev for UI generation, Mintlify for documentation, and more.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="my-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Example: AI-assisted Code Completion</h3>
              <p className="text-gray-700 mb-4">Imagine typing a comment and having the AI suggest the implementation:</p>
              
              <div className="bg-gray-900 text-gray-100 p-5 rounded-lg overflow-auto">
                <pre className="language-javascript"><code>{`// Function to calculate the factorial of a number
function calculateFactorial(n) {
  // AI might suggest the following loop and logic
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  } else if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}`}</code></pre>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-10">
              Best Practices for Integrating AI
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              While AI is powerful, it's a tool to augment, not replace, human engineers. Here are some best practices:
            </motion.p>

            <motion.div variants={fadeIn} className="my-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Treat AI suggestions as a starting point</h3>
                  <p className="text-gray-700">Always review and understand the code generated by AI. Don't blindly copy and paste.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Provide clear and specific prompts</h3>
                  <p className="text-gray-700">The quality of AI output heavily depends on the input. Learn to craft detailed prompts that give the AI necessary context.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Understand the limitations</h3>
                  <p className="text-gray-700">AI can sometimes generate incorrect, inefficient, or insecure code. Critical thinking and domain knowledge remain essential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Focus on higher-value tasks</h3>
                  <p className="text-gray-700">Leverage AI to automate the mundane, freeing yourself to focus on architecture, complex logic, and strategic thinking.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Stay updated</h3>
                  <p className="text-gray-700">The AI landscape is evolving rapidly. Continuously learn about new tools and techniques.</p>
                </div>
              </div>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-2xl font-bold text-gray-900 mt-8">
              The Future is Collaborative
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-gray-700 leading-relaxed">
              The future of software engineering involves a close collaboration between humans and AI. By strategically integrating AI into our workflows, we can become significantly more productive, deliver higher-quality software, and unlock new levels of creativity and innovation. It's an exciting time to be a software engineer, and AI is poised to be our most powerful ally yet.
            </motion.p>
          </motion.div>
        </article>
      </main>
    </div>
  );
}