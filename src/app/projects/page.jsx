"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("client");
  const [selectedTags, setSelectedTags] = useState([]);
  const clientRef = useRef(null);
  const personalRef = useRef(null);

  const clientProjects = [
    {
      id: 1,
      title: "Business Website Creation",
      client: "Bodyshop Manchester",
      requirements:
        "Create SEO-optimized and loading-efficient website, integrate bookings, Maps API and contact forms.",
      technologies: ["React", "NextJs", "MongoDB", "EmailJs", "GoogleMapsAPI", "Tailwind"],
      tags: ["Frontend", "API", "Automobile"],
      description:
        "Complete design and creation of a website for a vehicle bodyshop company operating in Manchester. Website should be fast and be professional.",
      achievements: [
        "Increased mobile calls to the bodyshop by 40% in 2 weeks",
        "SEO lighthouse score of 100%",
        "Performance lighthouse score of 100%",
        "Accessibility & Best Practices Lighthouse score +95%",
      ],
      challenges:
        "Making a website with many images and pages as efficient as possible, bookings, nice UI but keeping it professional.",
      learnings:
        "Improved UI development and tailwind v4. Learnt new ways of using framer-motion. Tried alternatives but ended up stucking to emailjs for emails",
      image: "/images/bodyshop.png",
      links: {
        demo: "https://www.bodyshopmanchester.co.uk/",
      },
    },
    {
      id: 2,
      title: "Business Website Creation & SEO improvement",
      client: "BMManchester",
      requirements:
        "Create SEO-optimized and loading-efficient website, Maps API, integrate bookings and complex contact form to sell a car.",
      technologies: ["React", "NextJs", "MongoDB", "EmailJs", "GoogleMapsAPI", "Tailwind"],
      tags: ["Frontend", "API", "Automobile"],
      description:
        "Complete redesign and creation of a website for a BMW Garage business operating in Manchester. Website should be fast and be professional and SEO reliable over time (good content).",
      achievements: [
        "Increased organic site traffic by 20% in 1st month",
        "SEO lighthouse score of 100%",
        "Performance lighthouse score of 98%",
        "Accessibility & Best Practices Lighthouse score +85%",
      ],
      challenges:
        "UI responsiveness for different image backgrounds and style structures with framer motion",
      learnings:
        "Gained in-depth experience with framer motion and performance best practices when loading animations.",
      image: "/images/bmmanchester.png",
      links: {
        demo: "https://www.bmmanchester.co.uk/",
      },
    },
    {
      id: 3,
      title: "Padel Business Website and E-commerce",
      client: "EcoPadel UK",
      requirements:
        "Business website creation, SEO strategy and future e-commerce integration",
      technologies: [
        "React",
        "NextJs",
        "EmailJs",
        "GoogleMapsAPI",
        "ThreeJs",
        "React Three Fiber",
        "Tailwind"
      ],
      tags: ["Frontend", "API", "Sports", "3D"],
      description:
        "Created a 3D website for EcoPadel UK, integrated contact forms, Maps APIs, created SEO content strategy and future e-commerce and court booking integration",
      achievements: [
        "SEO lighthouse score of 100%",
        "Performance lighthouse score of +85% (due to heavy 3D rendering)",
        "Accessibility Lighthouse score 92%",
      ],
      challenges:
        "Creating a high-performing 3D website with heavy animations. Adapting e-commerce strategy to 3rd party suppliers and their APIs",
      learnings:
        "Developed and improved ThreeJs performance best practices, dealt with third party APIs for e-commerce integration, learnt about booking systems and how to make them efficient.",
      image: "/images/ecopadel.png",
      links: {
        demo: "https://www.ecopadel.co.uk/",
      },
    },
    {
      id: 4,
      title: "Website creation and SEO content strategy",
      client: "Alloy Refurb Salford",
      requirements:
        "Business website creation, SEO strategy and booking system",
      technologies: ["React", "NextJs", "EmailJs", "MongoDb", "GoogleMapsAPI", "Tailwind"],
      tags: ["Frontend", "API", "Automobile"],
      description:
        "Created a website for ARS, integrated contact forms, booking system with MongoDb and Maps APIs and created SEO content strategy",
      achievements: [
        "SEO lighthouse score of +95%",
        "Performance lighthouse score of 100%",
        "Accessibility Lighthouse score +85%",
      ],
      challenges:
        "First time integrating bookings with MongoDb, first client, had to improve managing deadline expectations",
      learnings:
        "Things take longer than expected, learnt how to integrate bookings via MongoDb, first time using emailJs",
      image: "/images/ars.png",
      links: {
        demo: "https://www.alloyrefurbsalford.co.uk/",
      },
    },
    {
      id: 5,
      title: "Website creation and SEO content strategy",
      client: "Window Tints Manchester",
      requirements:
        "Business website creation, SEO strategy and quoting system",
      technologies: ["React", "NextJs", "EmailJs", "GoogleMapsAPI", "Tailwind"],
      tags: ["Frontend", "API", "Automobile"],
      description:
        "Created a website for a window tinting business, integrated quoting forms, Maps APIs and created SEO content strategy",
      achievements: [
        "SEO lighthouse score of +95%",
        "Performance lighthouse score of 100%",
        "Accessibility Lighthouse score +90%",
      ],
      challenges:
        "First time using a video as a hero background, complex contact quoting form",
      learnings:
        "Easier than I thought adding a video in the background in a efficient way, played around angles in the gallery to make it more interesting",
      image: "/images/windowTints.png",
      links: {
        demo: "https://www.windowtintsmanchester.co.uk/",
      },
    },
    {
      id: 6,
      title: "3D Website creation and SEO content strategy",
      client: "JagManchester",
      requirements:
        "Business website creation and SEO strategy with 3D model for a jaguar garage in Manchester",
      technologies: [
        "React",
        "NextJs",
        "EmailJs",
        "GoogleMapsAPI",
        "ThreeJs",
        "React Three Fiber",
        "Tailwind"
      ],
      tags: ["Frontend", "API", "Automobile", "3D"],
      description:
        "Created a website for a window tinting business, integrated quoting forms, Maps APIs and created SEO content strategy",
      achievements: [
        "SEO lighthouse score of +95%",
        "Performance lighthouse score of 100%",
        "Accessibility Lighthouse score +95%",
        "Best Practices Lighthouse score of 100%",
      ],
      challenges: "First time adding a 3D model to a website",
      learnings:
        "Learnt how to render 3D models in an efficient way and learnt best practices in how to animate them.",
      image: "/images/jagmanchester.png",
      links: {
        demo: "https://www.jagmanchester.co.uk/",
      },
    },
    {
      id: 7,
      title: "3D Website creation and SEO content strategy",
      client: "Alloy Refurb Bolton",
      requirements:
        "Business website creation and SEO strategy with 3D model for an alloy refurbishment business in Bolton",
      technologies: [
        "React",
        "NextJs",
        "EmailJs",
        "GoogleMapsAPI",
        "ThreeJs",
        "React Three Fiber",
        "Tailwind"
      ],
      tags: ["Frontend", "API", "Automobile", "3D"],
      description:
        "Created a website for an alloy refurbishment business, integrated quoting forms, Maps APIs and created SEO content strategy",
      achievements: [
        "SEO lighthouse score of +95%",
        "Performance lighthouse score of +90%",
        "Accessibility Lighthouse score +90%",
      ],
      challenges:
        "Keeping high efficiency and fast load time while loading a heavy 3D model",
      learnings:
        "Learnt how to improve 3D model loading times in an efficient way.",
      image: "/images/arbolton.png",
      links: {
        demo: "https://www.alloyrefurbbolton.co.uk/",
      },
    },
    {
      id: 8,
      title: "3D Website creation and SEO content strategy",
      client: "Alloy Refurb Cheshire",
      requirements:
        "Business website creation and SEO strategy with 3D model for an alloy refurbishment business in Cheshire",
      technologies: [
        "React",
        "NextJs",
        "EmailJs",
        "GoogleMapsAPI",
        "ThreeJs",
        "React Three Fiber",
        "Tailwind"
      ],
      tags: ["Frontend", "API", "Automobile", "3D"],
      description:
        "Created a website for an alloy refurbishment business, integrated quoting forms, Maps APIs and created SEO content strategy",
      achievements: [
        "SEO lighthouse score of +95%",
        "Performance lighthouse score of +95%",
        "Accessibility Lighthouse score +85%",
      ],
      challenges:
        "Website was for the same client as alloy refurb bolton and he wanted to keep a similar design so not clashing in UI and making the websites look different but similar at the same time",
      learnings:
        "I added quite framer-motion functions to this website so gained some knowledge in how to render components on scroll",
      image: "/images/archeshire.png",
      links: {
        demo: "https://www.alloyrefurbcheshire.co.uk/",
      },
    },
  ];

  const personalProjects = [
    {
      id: 1,
      title: "Pathfinding Visualizer",
      requirements: "Personal project to explore pathfinding visualization",
      technologies: ["Javascript", "Css", "Algorithms", "React"],
      tags: ["Algorithms", "Personal", "UX/UI", "Frontend"],
      description:
        "Developed an interface that lets you visualize different pathfinding algorithms in a grid.",
      achievements: [
        "Integrated 5 different pathfinding algorithms",
        "Implemented 3 different maze generators",
        "Smooth UI and algorithm visualization",
      ],
      challenges:
        "Implementing different algorithm, maze generators that make sense, UI experience",
      learnings:
        "Learnt deeply about different pathfinding algorithms, one of my first projects so deep css work",
      image: "/images/pathfinding.png",
      links: {
        demo: "https://dijkstra-s-pathfinding-algorithm.vercel.app/",
        github: "https://github.com/casancam/Dijkstra-s-Pathfinding-Algorithm",
      },
    },
    {
      id: 2,
      title: "Mobile Meditation App",
      requirements:
        "Create a meditation app that plays music for the selected duration and type",
      technologies: ["Typescript", "React Native", "Expo", "NativeUI"],
      tags: ["Mobile", "Personal", "Frontend"],
      description:
        "Built a mobile app that plays music depending on which scenery and countdown amount you choose. (Deprecated SDK version in 2025)",
      achievements: ["1st Mobile App", "Used it myself"],
      challenges:
        "Understanding how to use react-native and the different mobile interfaces and components",
      learnings:
        "Learned best practices for react native and expo and how mobile development works",
      image: "/images/meditation.png",
      links: {
        github: "https://github.com/casancam/MeditationApp",
      },
    },
    {
      id: 3,
      title: "Complete Pokedex (PokeAPI)",
      requirements:
        "Create a complete pokedex that loads efficiently and displays all pokemon and their shiny version.",
      technologies: ["Javascript", "React", "SCSS", "Figma"],
      tags: ["Personal", "Frontend", "API"],
      description:
        "Built a pokedex that loads pokemon in batches of 20 and displays their shiny version. Can display +1000 pokemon",
      achievements: [
        "Able to display +1000 pokemon and their shiny version in an efficient way",
        "Effectively used PokeAPI",
      ],
      challenges:
        "Optimizing loading +1000 pokemon images and their shiny version all at once, UI design was complex",
      learnings:
        "One of my first personal projects using an external API. Used Figma for initial Pokedex design",
      image: "/images/pokedex.png",
      links: {
        demo: "https://pokedex-drab-omega.vercel.app/",
        github: "https://github.com/casancam/Pokedex",
      },
    },
    {
      id: 4,
      title: "Softwaregram (Instagram Clone)",
      requirements:
        "Create a simple Instagram clone for developers, add session management, image storage, likes, comments, profiles and following features.",
      technologies: ["Javascript", "React", "Tailwind", "Figma", "Firebase"],
      tags: ["Personal", "Frontend", "API", "Clone", "Backend"],
      description:
        "Built a basic instagram clone that allows you to follow your friends, see their profiles, like and comment pictures.",
      achievements: [
        "1st Full-Stack Project",
        "Successfully designed UI and implemented Firebase integration",
        "Successfully onboarded 3 users and gathered feedback on how could I have done better UX-wise"
      ],
      challenges:
        "Using Firebase for the first time in a full-stack project, user management, like feature and following and filtering content",
      learnings:
        "My first successful full-stack project. Learnt how to connect and use Firebase and how to do session management from scratch.",
      image: "/images/softwaregram.png",
      links: {
        demo: "https://softwaregram.vercel.app/login",
        github: "https://github.com/casancam/Instagram-clone",
      },
    },
  ];

  // Get all unique tags from projects
  const getAllTags = () => {
    const allTags = new Set();

    clientProjects.forEach((project) => {
      project.tags.forEach((tag) => allTags.add(tag));
    });

    personalProjects.forEach((project) => {
      project.tags.forEach((tag) => allTags.add(tag));
    });

    return Array.from(allTags).sort();
  };

  const allTags = getAllTags();

  // Filter projects based on selected tags
  const filterProjects = (projects) => {
    if (selectedTags.length === 0) return projects;

    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    );
  };

  const filteredClientProjects = filterProjects(clientProjects);
  const filteredPersonalProjects = filterProjects(personalProjects);

  // Toggle tag selection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Clear all selected tags
  const clearTags = () => {
    setSelectedTags([]);
  };

  const scrollToSection = (ref) => {
    // Add a small offset to the scroll position to account for a fixed header if you have one
    const offset = 80; // Adjust this value as needed
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of my professional client work and personal projects,
            showcasing my expertise and passion for development.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => {
                setActiveTab("client");
                scrollToSection(clientRef);
              }}
              className={`px-6 py-3 rounded-md text-lg transition-all duration-300 ${
                activeTab === "client"
                  ? "bg-purple-600 text-white font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Client Projects
            </button>
            <button
              onClick={() => {
                setActiveTab("personal");
                scrollToSection(personalRef);
              }}
              className={`px-6 py-3 rounded-md text-lg transition-all duration-300 ${
                activeTab === "personal"
                  ? "bg-pink-600 text-white font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div>

        {/* Filter Tags */}
        <motion.div
          className="mb-12 max-w-5xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-medium text-white">Filter by tags:</h3>
            {selectedTags.length > 0 && (
              <button
                onClick={clearTags}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {selectedTags.length > 0 && (
            <div className="mt-4 text-sm text-gray-400">
              Showing projects with tags:{" "}
              <span className="font-medium">{selectedTags.join(", ")}</span>
            </div>
          )}
        </motion.div>

        {/* Client Projects Section */}
        <section ref={clientRef} className="mb-20 px-2">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-purple-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Client Projects
          </motion.h2>

          {filteredClientProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredClientProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isClient={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No client projects match your selected filters.
              </p>
              <button
                onClick={clearTags}
                className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Clear filters to see all projects
              </button>
            </div>
          )}
        </section>

        {/* Personal Projects Section */}
        <section ref={personalRef} className="mb-20 px-2">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-pink-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Personal Projects
          </motion.h2>

          {filteredPersonalProjects.length > 0 ? (
            // Ensure the grid container itself is centered if needed, or let the parent container handle it
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center lg:justify-center">
              {" "}
              {/* Added lg:justify-center */}
              {filteredPersonalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isClient={false}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No personal projects match your selected filters.
              </p>
              <button
                onClick={clearTags}
                className="mt-4 text-pink-400 hover:text-pink-300 transition-colors"
              >
                Clear filters to see all projects
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
            <h3 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="mb-6 text-gray-200">
              I'm always open to discussing new projects or partnership
              opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-purple-900 font-bold py-3 px-8 rounded-lg hover:bg-purple-100 transition-colors duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component (remains the same as the previous version)
const ProjectCard = ({ project, index, isClient }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className={`rounded-xl overflow-hidden bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 ${
        isExpanded ? "scale-105 z-10" : ""
      } w-full h-full flex flex-col`}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      custom={index}
    >
      {/* Project Image or Video Placeholder */}
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 z-10" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            className={`w-full h-full ${
              project.title === "Mobile Meditation App" ? "object-cover" : ""
            }`}
            width={400}
            height={100}
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}

        {/* Badge for project type */}
        <span
          className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full z-20 ${
            isClient ? "bg-purple-600" : "bg-pink-600"
          }`}
        >
          {isClient ? "Client Project" : "Personal Project"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">
          {project.title}
        </h3>
        {isClient && project.client && (
          <p className="text-gray-400 text-sm mb-3">Client: {project.client}</p>
        )}

        {project.requirements && (
          <div className="mb-3 sm:mb-4">
            <h4 className="text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              Requirements:
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
              {project.requirements}
            </p>
          </div>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <h4 className="text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    isClient
                      ? "bg-purple-900/60 text-purple-200"
                      : "bg-pink-900/60 text-pink-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.description && (
          <div className="mb-3 sm:mb-4">
            <p className="text-gray-300 text-xs sm:text-sm line-clamp-3">
              {project.description}
            </p>
          </div>
        )}

        {/* Tags - Improved styling */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <h4 className="text-gray-300 text-xs font-medium mb-1 sm:mb-2">
              Tags:
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-1.5 py-0.5 text-xs rounded ${
                    isClient
                      ? "bg-purple-900/40 text-purple-300 border border-purple-700/30"
                      : "bg-pink-900/40 text-pink-300 border border-pink-700/30"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Expandable Section (Achievements, Challenges, Learnings) */}
        <div className={`mb-3 sm:mb-4 ${isExpanded ? "block" : "hidden"}`}>
          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-3">
              <h4 className="text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                Key Achievements:
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-xs sm:text-sm">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div className="mb-3">
              <h4 className="text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                Challenges:
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                {project.challenges}
              </p>
            </div>
          )}

          {project.learnings && (
            <div>
              <h4 className="text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                Learnings:
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                {project.learnings}
              </p>
            </div>
          )}
        </div>

        {/* Links */}
        {/* Used mt-auto to push links to the bottom if content above varies in height */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 sm:pt-6">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors duration-300 ${
                isClient
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-pink-600 hover:bg-pink-700 text-white"
              }`}
            >
              Live Website
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300"
            >
              GitHub Repo
            </a>
          )}
        </div>

        {/* Expand/Collapse Button */}
        {((project.achievements && project.achievements.length > 0) ||
          project.challenges ||
          project.learnings) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`mt-4 text-xs font-medium ${
              isClient ? "text-purple-400" : "text-pink-400"
            } hover:underline flex items-center justify-center w-full`}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Show More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
