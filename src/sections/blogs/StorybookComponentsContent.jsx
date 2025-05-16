"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for text elements
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const codeBlockReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      duration: 0.8,
    },
  },
};

export default function StorybookComponentLibraryBlog() {
  const [isReady, setIsReady] = useState(false);

  // Set animation ready after page loads
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-gradient-to-r from-pink-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <p className="text-pink-200 font-medium mb-3">
                  FRONTEND DEVELOPMENT
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building Your Own Component Library with Storybook
                </h1>
              </motion.div>

              <motion.div variants={fadeIn}>
                <p className="text-xl text-pink-100 mt-6">
                  Create a consistent, reusable UI system that accelerates
                  development and improves team collaboration.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex items-center space-x-4 pt-4"
              >
                <div className="h-12 w-12 rounded-full overflow-hidden bg-pink-700">
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
                  <p className="text-pink-200 text-sm">
                    May 13, 2025 • 8 min read
                  </p>
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
            <motion.div
              variants={fadeIn}
              className="relative w-full h-80 md:h-[500px] my-8 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/storybook.png"
                alt="Storybook Component Library"
                layout="fill"
              />
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              As software projects grow, maintaining consistency in UI and UX
              across different features and teams becomes increasingly
              challenging. This is where component libraries shine. A
              well-designed component library provides a single source of truth
              for your application's building blocks, ensuring a consistent look
              and feel, promoting reusability, and accelerating development.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Storybook is an open-source tool that has become the standard for
              developing, documenting, and testing UI components in isolation.
              It provides a dedicated environment where you can build components
              without needing to run your main application, making development
              faster and more focused. In this post, we'll walk through the
              process of creating your own component library and using Storybook
              to manage and showcase your components.
            </motion.p>

            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 mt-10"
            >
              Why Build a Component Library?
            </motion.h2>

            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
            >
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Consistency
                </h3>
                <p className="text-gray-700">
                  Ensures a uniform look and feel throughout your application.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Reusability
                </h3>
                <p className="text-gray-700">
                  Components can be used across different pages and projects,
                  reducing duplicate code.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Faster Development
                </h3>
                <p className="text-gray-700">
                  Developers can grab pre-built, tested components instead of
                  building from scratch.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Improved Collaboration
                </h3>
                <p className="text-gray-700">
                  Provides a clear overview and documentation of available
                  components for the whole team.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easier Maintenance
                </h3>
                <p className="text-gray-700">
                  Updating a component in the library propagates the changes
                  everywhere it's used.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Developer Experience
                </h3>
                <p className="text-gray-700">
                  Improves onboarding and reduces cognitive load for engineers
                  working on the codebase.
                </p>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 mt-10"
            >
              Introducing Storybook
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Storybook is a UI development environment that allows you to
              visualize components in different states. Each "story" is a
              specific state of a component, allowing you to see how it renders
              with different props, data, or configurations.
            </motion.p>

            <motion.div variants={fadeIn} className="my-6">
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key features of Storybook include:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Isolated Development:</strong> Build components
                      independently from your main application logic.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Documentation:</strong> Automatically generates
                      documentation based on your stories and component code.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Addons:</strong> A rich ecosystem of addons for
                      testing, accessibility checking, design token integration,
                      and more.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Interactive Playground:</strong> Adjust component
                      props and see the changes live.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 mt-10"
            >
              Steps to Create Your Component Library with Storybook
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Let's outline the general steps involved:
            </motion.p>

            <motion.div variants={fadeIn} className="space-y-8 my-8">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Project Setup
                    </h3>
                    <p className="text-gray-700">
                      You'll typically start with a new project for your
                      component library. This could be a separate repository or
                      a monorepo structure. You'll need a package manager (npm
                      or yarn) and build tools (like Babel and webpack, often
                      configured by tools like Create React App, Vue CLI, or
                      directly if using Next.js in a monorepo setup).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Install Storybook
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Storybook provides a command-line interface (CLI) to help
                      you set up. Navigate to your project directory and run:
                    </p>
                    <motion.div
                      variants={codeBlockReveal}
                      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"
                    >
                      <pre className="whitespace-pre-wrap break-words">
                        <code>npx storybook init</code>
                      </pre>
                    </motion.div>
                    <p className="text-gray-700 mt-4">
                      This command will detect your project's front-end
                      framework (React, Vue, Angular, etc.) and set up the
                      necessary dependencies and configuration files.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Create Your First Component
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Let's create a simple Button component as an example.
                    </p>
                    <motion.div
                      variants={codeBlockReveal}
                      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"
                    >
                      <pre className="whitespace-pre-wrap break-words">
                        <code>{`// src/components/Button.jsx (Using React)
import React from 'react';

const Button = ({ 
  label, 
  onClick, 
  primary = false, 
  disabled = false 
}) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none";
  const primaryStyles = primary 
    ? "bg-blue-500 text-white hover:bg-blue-600" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={\`\${baseStyles} \${primaryStyles} \${disabledStyles}\`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;`}</code>
                      </pre>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Write Stories for the Component
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Create a stories file for your component. This file will
                      define the different states of your Button.
                    </p>
                    <motion.div
                      variants={codeBlockReveal}
                      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"
                    >
                      <pre className="whitespace-pre-wrap break-words">
                        <code>{`// src/components/Button.stories.jsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button', // Categorizes your component in Storybook UI
  component: Button,
  tags: ['autodocs'], // Automatically generates documentation
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' }, // Logs interactions in the actions panel
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

// Define different states of the button
export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};`}</code>
                      </pre>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Run Storybook
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Start the Storybook development server:
                    </p>
                    <motion.div
                      variants={codeBlockReveal}
                      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"
                    >
                      <pre className="whitespace-pre-wrap break-words">
                        <code>{`npm run storybook
# or
yarn storybook`}</code>
                      </pre>
                    </motion.div>
                    <p className="text-gray-700 mt-4">
                      This will open Storybook in your browser, where you can
                      see your Button component rendered in its different states
                      (Primary, Secondary, Disabled). You can interact with the
                      controls panel to change props and see how the component
                      updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Develop and Document More Components
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Continue building your components, creating stories for
                      each one. As you add more components, your Storybook will
                      grow into a comprehensive visual library. Utilize the
                      argTypes and tags: ['autodocs'] features to automatically
                      generate documentation within Storybook.
                    </p>
                    <motion.div
                      variants={codeBlockReveal}
                      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"
                    >
                      <pre className="whitespace-pre-wrap break-words">
                        <code>{`// Example of another component story structure
import React from 'react';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

export const Info = {
  args: {
    message: 'This is an informational alert.',
    type: 'info',
  },
};

export const Success = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
  },
};`}</code>
                      </pre>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual representation of the components */}
            <motion.div variants={fadeIn} className="my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                How components appear in Storybook:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Primary Button
                  </h4>
                  <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
                    <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
                      Primary Button
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Secondary Button
                  </h4>
                  <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
                    <button className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none">
                      Secondary Button
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Info Alert
                  </h4>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded">
                      <p>This is an informational alert.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Success Alert
                  </h4>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                      <p>Operation completed successfully!</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 mt-10"
            >
              Integrating with Your Next.js Project
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Once your component library is established, you can integrate it
              into your Next.js application.
            </motion.p>

            <motion.h3
              variants={fadeIn}
              className="text-xl font-semibold text-gray-900 mt-6 mb-4"
            >
              Install the Component Library
            </motion.h3>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed mb-4"
            >
              If your library is in a separate repository or published as an npm
              package, install it in your Next.js project. If it's in a
              monorepo, you can usually reference it directly depending on your
              monorepo tooling (like npm workspaces or pnpm workspaces).
            </motion.p>

            <motion.div
              variants={codeBlockReveal}
              className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"
            >
              <pre className="whitespace-pre-wrap break-words">
                <code>{`cd your-nextjs-project
npm install your-component-library
# or
yarn add your-component-library`}</code>
              </pre>
            </motion.div>

            <motion.h3
              variants={fadeIn}
              className="text-xl font-semibold text-gray-900 mt-6 mb-4"
            >
              Import and Use Components
            </motion.h3>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed mb-4"
            >
              You can now import components from your library into your Next.js
              pages and components.
            </motion.p>

            <motion.div
              variants={codeBlockReveal}
              className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"
            >
              <pre>
                <code>{`// pages/index.js (in your Next.js project)
import Button from 'your-component-library/components/Button'; // Adjust path based on library structure

export default function Home() {
  return (
    <div>
      <h1>My App</h1>
      <Button label="Click Me!" onClick={() => alert('Button clicked')} primary />
    </div>
  );
}`}</code>
              </pre>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 mt-10"
            >
              Maintenance and Collaboration
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Maintain your component library as a separate, versioned entity.
              Encourage team members to develop new components or update
              existing ones within the library and their respective stories.
              Storybook serves as a fantastic collaboration tool, allowing
              designers and other stakeholders to see and interact with
              components without needing a full development environment setup.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="my-10 relative rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-90"></div>
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Development Workflow Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Before Component Library
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-300 mr-2">✗</span>
                        <span>Scattered component definitions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-300 mr-2">✗</span>
                        <span>Inconsistent styling and behavior</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-300 mr-2">✗</span>
                        <span>Reinventing components for each project</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-300 mr-2">✗</span>
                        <span>Poor documentation and discoverability</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      With Component Library
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-300 mr-2">✓</span>
                        <span>Centralized component source of truth</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-300 mr-2">✓</span>
                        <span>Consistent UI across all applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-300 mr-2">✓</span>
                        <span>Reuse components across multiple projects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-300 mr-2">✓</span>
                        <span>Self-documenting with interactive examples</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-gray-900 mt-10"
            >
              Conclusion
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Building a component library is a valuable investment for any
              growing front-end project, and Storybook makes the process
              efficient and enjoyable. By developing components in isolation and
              documenting them effectively, you create a robust, reusable, and
              maintainable UI system that will accelerate your development
              process and improve consistency across your applications. Start
              building your library today and experience the benefits firsthand!
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="my-10 p-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl text-white shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">
                Ready to Build Your Component Library?
              </h3>
              <p className="mb-4 text-pink-50">
                Get started with Storybook today and revolutionize your
                development workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://storybook.js.org/">
                  <button className="bg-white text-pink-600 hover:bg-pink-50 font-medium py-2 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                    Get Started with Storybook →
                  </button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </article>
      </main>
    </div>
  );
}
