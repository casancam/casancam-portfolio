"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView

const techStackData = {
  proficiencyLevels: {
    // Example: 5 (Expert), 4 (Advanced), 3 (Proficient), 2 (Intermediate), 1 (Beginner)
    languages: [
      {
        name: "JavaScript",
        level: 5,
        description: "Extensive experience with ES6+ and modern patterns.",
      },
      {
        name: "TypeScript",
        level: 5,
        description:
          "Strong grasp of types and building scalable applications.",
      },
      {
        name: "Python",
        level: 4,
        description:
          "Experienced in backend development, scripting, and data analysis.",
      },
      {
        name: "React Native",
        level: 3,
        description:
          "Strong proficiency in building complex, performant, and maintainable mobile applications for iOS and Android using React Native, including deep understanding of component lifecycle, state management (e.g., Redux, Context API), navigation, native module integration, and debugging.",
      },
      {
        name: "Flutter",
        level: 3,
        description:
          "Good working knowledge of building cross-platform mobile applications with Flutter, including understanding of widgets, state management, routing, and integration with platform-specific features.",
      },
      {
        name: "Go",
        level: 2,
        description: "Learning and building microservices.",
      },
    ],
    frameworks: [
      {
        name: "React",
        level: 5,
        description: "Built numerous complex SPAs and UIs.",
      },
      {
        name: "Next.js",
        level: 5,
        description:
          "Experience with server-side rendering and static generation.",
      },
      {
        name: "Node.js",
        level: 5,
        description: "Developed various backend services and APIs.",
      },
      {
        name: "TailwindCss",
        level: 5,
        description: "Created beautiful complex UIs.",
      },
      {
        name: "Express.js",
        level: 4,
        description: "Building RESTful APIs and web applications.",
      },
      {
        name: "GraphQL",
        level: 3,
        description: "Building RESTful APIs and middleware.",
      },
      {
        name: "Vue.js",
        level: 3,
        description: "Experience with frontend development.",
      },
      {
        name: "Django",
        level: 3,
        description: "Building web applications with Python.",
      },
    ],
    databases: [
      {
        name: "MongoDB",
        level: 5,
        description: "Designing and managing NoSQL databases.",
      },
      {
        name: "PostgreSQL",
        level: 4,
        description: "Designing relational schemas and optimizing queries.",
      },
      {
        name: "DynamoDb",
        level: 3,
        description: "Designing non-relational schemas and managing queries.",
      },
      {
        name: "Redis",
        level: 3,
        description: "Implementing caching and message queues.",
      },
    ],
    cloud: [
      {
        name: "AWS",
        level: 4,
        description: "Experience with EC2, S3, Lambda, RDS, etc.",
      },
      {
        name: "Docker",
        level: 4,
        description: "Containerizing applications for consistent environments.",
      },
      {
        name: "Kubernetes",
        level: 2,
        description: "Learning container orchestration.",
      },
    ],
    tools: [
      { name: "Git", level: 5, description: "Version control best practices." },
      {
        name: "JIRA",
        level: 5,
        description: "Project management and issue tracking.",
      },
      {
        name: "Jest / React Testing Library",
        level: 5,
        description: "Writing unit and integration tests.",
      },
      {
        name: "CI/CD (e.g., Jenkins, GitHub Actions)",
        level: 4,
        description: "Setting up automated pipelines.",
      },
      {
        name: "Webpack",
        level: 4,
        description: "Configuring build processes.",
      },
    ],
  },
  skillLearningJourney: [
    {
      year: 2019,
      description: "Started learning programming fundamentals with Python.",
    },
    {
      year: 2020,
      description:
        "Dived into web development, focusing on HTML, CSS, and JavaScript.",
    },
    {
      year: 2021,
      description: "Learned React and built my first single-page applications.",
    },
    {
      year: 2021,
      description: "Explored backend development with Node.js and Express.",
    },
    {
      year: 2022,
      description:
        "Gained experience with databases like MongoDB and PostgreSQL.",
    },
    {
      year: 2023,
      description:
        "Focused on cloud technologies, particularly AWS and Docker.",
    },
    {
      year: 2024,
      description:
        "Ventured into mobile development, starting with React Native and Flutter to build initial apps.",
    },
    {
      year: 2025,
      description:
        "Currently exploring Go and Kubernetes for microservices architecture.",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner - In Progress",
      year: "Not yet",
      link: "#",
    },
    {
      name: "Hashicorp Terraform Associate - In Progress",
      year: "Not yet",
      link: "#",
    },
  ],
};

const TechStackPage = () => {
  const getSkillBarColor = (level) => {
    if (level >= 5) return "bg-green-500";
    if (level >= 4) return "bg-blue-500";
    if (level >= 3) return "bg-purple-500";
    if (level >= 2) return "bg-yellow-500";
    return "bg-gray-500";
  };

  const AnimatedSkillBar = ({ skill }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const barWidth = `${(skill.level / 5) * 100}%`; // Assuming a max level of 5

    return (
      <div ref={ref} className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-gray-300">
            {skill.name}
          </span>
          <span className="text-sm font-medium text-gray-400">
            {skill.level}/5
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div
            className={`h-2.5 rounded-full ${getSkillBarColor(skill.level)}`}
            initial={{ width: 0 }}
            animate={{ width: inView ? barWidth : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
        </div>
        <p className="text-gray-400 text-xs mt-1">{skill.description}</p>
      </div>
    );
  };

  // Component for a timeline item with alternating left/right layout
  const TimelineItem = ({ year, description, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

    const isEven = index % 2 === 0;

    return (
      <motion.div
        ref={ref}
        className={`flex items-center mb-12 relative ${
          isEven ? "justify-end" : "justify-start"
        }`}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Timeline content - positioned differently based on even/odd index */}
        <div
          className={`w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}
        >
          <p className="text-sm text-gray-400">{year}</p>
          <p className="text-white text-lg font-medium">{description}</p>
        </div>

        {/* Center dot marker */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
          <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-900"></div>
          </div>
          {/* We don't need the vertical line here since it's in the parent container */}
        </div>
      </motion.div>
    );
  };

  // The section component that uses TimelineItem (for reference)
  {
    /* Skill Learning Journey */
  }
  <section className="mb-20 max-w-4xl mx-auto">
    <motion.h2
      className="text-3xl font-bold mb-10 pl-4 border-l-4 border-teal-500"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      My Learning Journey
    </motion.h2>

    <div className="relative">
      {/* Centered vertical line for timeline aesthetic */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2"></div>

      {techStackData.skillLearningJourney.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  </section>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-20">
      {/* This div is for spacing below the navbar - adjust pt-24 as needed */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600" // Changed gradient color
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Tech Stack
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive look at the technologies I work with and my journey
            in mastering them.
          </motion.p>
        </div>

        {/* Skill Proficiency Levels - Interactive Visualization (Animated Bars) */}
        <section className="mb-20 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-green-500" // Changed border color
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skill Proficiency
          </motion.h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Languages
              </h3>
              {techStackData.proficiencyLevels.languages.map((skill, index) => (
                <AnimatedSkillBar key={index} skill={skill} />
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Frameworks & Libraries
              </h3>
              {techStackData.proficiencyLevels.frameworks.map(
                (skill, index) => (
                  <AnimatedSkillBar key={index} skill={skill} />
                )
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Databases
              </h3>
              {techStackData.proficiencyLevels.databases.map((skill, index) => (
                <AnimatedSkillBar key={index} skill={skill} />
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Cloud & DevOps
              </h3>
              {techStackData.proficiencyLevels.cloud.map((skill, index) => (
                <AnimatedSkillBar key={index} skill={skill} />
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Tools & Other
              </h3>
              {techStackData.proficiencyLevels.tools.map((skill, index) => (
                <AnimatedSkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Skill Learning Journey */}
        <section className="mb-20 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-teal-500" // Changed border color
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Learning Journey
          </motion.h2>

          <div className="relative">
            {/* Centered vertical line for timeline aesthetic */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2"></div>

            {techStackData.skillLearningJourney.map((item, index) => (
              // Centered timeline items around the vertical line
              <TimelineItem
                key={index}
                year={item.year}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Certification Highlights */}
        <section className="mb-20 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-blue-500" // Changed border color
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techStackData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {cert.name}
                </h3>
                <p className="text-gray-400 mb-3">Awarded: {cert.year}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto text-blue-400 hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Optional: A section about your philosophy or approach */}
        <section className="mb-20 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500" // Changed gradient
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Development Philosophy
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I believe in writing clean, maintainable code, continuous learning,
            and building solutions that are both functional and user-friendly. I
            enjoy tackling challenging problems and collaborating effectively
            with teams to deliver high-quality software.
          </motion.p>
        </section>
      </div>
    </div>
  );
};

export default TechStackPage;
