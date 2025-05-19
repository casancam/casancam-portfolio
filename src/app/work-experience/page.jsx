"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const workExperienceData = {
  companies: [
    {
      id: 1,
      name: "Krowd Innovation",
      logo: "/images/krowdLogo.png",
      description:
        "Tech startup focusing on disrupting the ticketing industry using Blockchain and NFT solutions.",
      period: "2021 - 2023",
      location: "Manchester, UK",
      roles: [
        {
          title: "Founder",
          period: "2021 - 2023",
          responsibilities: [
            "Managed and led a team of developers, designers, and marketing professionals to deliver blockchain-based solutions on time and within budget",
            "Conducted code reviews, provided mentorship, and established development best practices to improve team productivity and quality of work",
            "Collaborated with event organizers to streamline ticket validation using QR codes linked to blockchain-verified tickets",
            "Oversaw technical development, leading cross-functional teams and ensuring successful delivery of customer-centric blockchain solutions",
          ],
          achievements: [
            "Engineered a scalable API system for recording and verifying Non-Fungible Tickets (NFTs), improving ticket authentication and preventing resales",
            "Managed in-person event “Non-Fungible Talks” (March 2022) in Manchester, showcasing innovative ticketing solutions and driving industry interest",
            "Delivered a presentation at Fintech North Manchester (November 2022), sharing insights on the role of blockchain in ticketing and event management",
            "Secured partnerships through AccelerateME (University of Manchester) and Exchange Enterprise City, leveraging growth opportunities and industry mentorship",
          ],
          skills: [
            "React",
            "Node.js",
            "AWS",
            "Solidity",
            "TypeScript",
            "MongoDB",
          ],
        },
      ],
      companyAchievements: [
        "Engineered a scalable API system for recording and verifying Non-Fungible Tickets (NFTs), improving ticket authentication and preventing resales",
        "Managed in-person event “Non-Fungible Talks” (March 2022) in Manchester, showcasing innovative ticketing solutions and driving industry interest",
        "Delivered a presentation at Fintech North Manchester (November 2022), sharing insights on the role of blockchain in ticketing and event management",
        "Secured partnerships through AccelerateME (University of Manchester) and Exchange Enterprise City, leveraging growth opportunities and industry mentorship",
      ],
    },
    {
      id: 2,
      name: "DTN",
      logo: "/images/dtnLogo.png",
      website: "https://www.dtn.com/",
      description:
        "DTN is a data analytics and technology company that provides actionable intelligence through real-time weather forecasting, agricultural information, and energy market data to help organizations with complex supply chains make better business decisions.",
      period: "2023 - Current",
      location: "London, UK",
      roles: [
        {
          title: "Software Engineer II",
          period: "2023 - Current",
          responsibilities: [
            "Designed and executed automated testing frameworks using Jest and React Testing Library, increasing test coverage and code reliability",
            "Integrated real-time monitoring and alerting with Datadog, reducing production incidents by proactively addressing potential failures",
            "Collaborated with cross-functional teams—including product, QA, and DevOps teams—to prioritize feature development and ensure smooth deployments",
            "Facilitated effective communication between engineering and business stakeholders, improving alignment on technical solutions and business goals",
          ],
          achievements: [
            "Developed and maintained new features for the platform’s frontend using React and Next.js, enhancing performance and user experience",
            "Improved backend services using microservices architecture with Node.js, Docker, and MongoDB, boosting system scalability and reliability",
            "Spearheaded an initiative to streamline and automate the process of building new UIs by integrating Storybook and GitHub Copilot, reducing development time and improving component reusability",
            "Strengthened platform stability by implementing robust CI/CD pipelines and infrastructure management through Terraform and AWS",
          ],
          skills: [
            "NextJs",
            "Express",
            "Typescript",
            "JavaScript",
            "Docker",
            "AWS",
            "Terraform",
          ],
        },
      ],
      companyAchievements: [
        "August 2023, DTN launched EcoField Data, a new solution designed to help connect farmers and agribusinesses in sustainable farming practices showing their commitment to agricultural sustainability",
        "DTN won two FTTH (Fiber-to-the-Home) Innovation Awards for their fiber technologies, positioning them as an industry leader in this space and demonstrating their technological innovation capabilities",
      ],
    },
    {
      id: 3,
      name: "CasancamDev",
      logo: "/images/casancamlogo.jpg",
      website: "https://casancam.com",
      description:
        "A software engineering side hustle focused on building custom websites and web applications, alongside creating educational content on LeetCode problems, tutorials, and tech reviews on YouTube.",
      period: "2024 - Current",
      location: "Remote",
      roles: [
        {
          title: "Software Engineer & Content Creator",
          period: "2024 - Current",
          responsibilities: [
            "Developing and deploying responsive websites and web applications using technologies like React, Node.js, and other relevant frameworks.",
            "Creating engaging video content for YouTube, including LeetCode problem explanations, software development tutorials, and tech reviews.",
            "Designing and implementing efficient and scalable solutions for client projects.",
            "Maintaining and updating existing web applications and ensuring optimal performance.",
            "Exploring and experimenting with new technologies and sharing learnings through tutorials and reviews.",
          ],
          achievements: [
            "Successfully delivered +15 websites for clients.",
            "Built a YouTube channel, providing valuable insights and solutions to the developer community.",
            "Developed reusable code components and templates to accelerate development workflows.",
            "Received positive feedback from clients on the site view increase due to high-standard level technical SEO.",
          ],
          skills: [
            "SEO",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "Data Structures and Algorithms",
            "Problem Solving",
            "Technical Communication",
            "Video Editing",
            "Content Creation",
          ],
        },
      ],
      companyAchievements: [
        "Established a consistent pipeline for delivering high-quality web development solutions.",
        "Built a reputation for providing clear and effective explanations of complex technical concepts through YouTube content.",
        "Built a reputation for improving and optimizing technical SEO across my client websites.",
        "Expanded network and connected with other developers and tech enthusiasts through online presence.",
      ],
    },
  ],
};

const WorkExperiencePage = () => {
  // State for selected company
  const [selectedCompany, setSelectedCompany] = useState(0);

  // References for scrolling
  const timelineRef = useRef(null);
  const detailsRef = useRef(null);

  // Function to handle company selection
  const handleSelectCompany = (index) => {
    setSelectedCompany(index);
    // Scroll to details section on mobile
    if (window.innerWidth < 768) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function for progress bar color based on date
  const getProgressBarColor = (index) => {
    const colors = [
      "bg-teal-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My professional journey, key accomplishments, and the impact I've
            made
          </motion.p>
        </div>

        {/* Professional Timeline */}
        <section ref={timelineRef} className="mb-20">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-teal-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Timeline
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {workExperienceData.companies.map((company, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCompany === index
                    ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-lg transform scale-105"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
                onClick={() => handleSelectCompany(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {company.name}
                <span className="block text-xs mt-1 opacity-80">
                  {company.period}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Timeline Visualization */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute h-1 bg-gray-700 top-4 left-0 right-0 z-0"></div>

              {/* Timeline dots */}
              <div className="relative flex justify-between z-10">
                {workExperienceData.companies.map((company, index) => {
                  const isActive = index <= selectedCompany;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-teal-500 shadow-lg shadow-teal-500/20"
                            : "bg-gray-700"
                        }`}
                        onClick={() => handleSelectCompany(index)}
                      >
                        <div
                          className={`w-4 h-4 rounded-full ${
                            isActive ? "bg-white" : "bg-gray-800"
                          }`}
                        ></div>
                      </div>
                      <div className="mt-2 text-center">
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-teal-400" : "text-gray-500"
                          }`}
                        >
                          {company.period.split(" - ")[0]}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Present dot */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs font-medium text-teal-400">
                      Present
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details & Role Progression */}
        <motion.section
          ref={detailsRef}
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={selectedCompany} // Re-animate when company changes
        >
          {/* Company Info */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl mb-12">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Company Logo */}
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-full aspect-square bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={workExperienceData.companies[selectedCompany].logo}
                      alt={`${workExperienceData.companies[selectedCompany].name} logo`}
                      width={200}
                      height={200}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Company Description */}
                <div className="md:w-3/4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {workExperienceData.companies[selectedCompany].name}
                    </h3>
                    <span className="text-teal-400 font-medium">
                      {workExperienceData.companies[selectedCompany].period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">
                    {workExperienceData.companies[selectedCompany].description}
                  </p>

                  <div className="flex items-center text-sm mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-400">
                      {workExperienceData.companies[selectedCompany].location}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2 text-white">
                      Company Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {workExperienceData.companies[
                        selectedCompany
                      ].companyAchievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {workExperienceData.companies[selectedCompany].website && (
                    <a
                      href={
                        workExperienceData.companies[selectedCompany].website
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <span>Visit Company Website</span>
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Role Progression */}
          <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-blue-500">
            Role Progression
          </h3>

          <div className="space-y-8">
            {workExperienceData.companies[selectedCompany].roles.map(
              (role, index) => {
                // Setup intersection observer for animation
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg border border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {/* Role Header */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h4 className="text-xl font-bold text-white">
                          {role.title}
                        </h4>
                        <span className="text-gray-300 text-sm mt-1 sm:mt-0">
                          {role.period}
                        </span>
                      </div>
                    </div>

                    {/* Role Content */}
                    <div className="p-4 sm:p-6">
                      <div className="mb-6">
                        <h5 className="text-lg font-medium mb-3 text-teal-400">
                          Responsibilities
                        </h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          {role.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="pl-2">
                              <span className="pl-2">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h5 className="text-lg font-medium mb-3 text-teal-400">
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {role.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex">
                              <div className="mr-4 mt-1 flex-shrink-0">
                                <div
                                  className={`w-4 h-4 rounded-full ${getProgressBarColor(
                                    idx
                                  )}`}
                                ></div>
                              </div>
                              <p className="text-gray-300">{achievement}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-medium mb-3 text-teal-400">
                          Technologies & Skills
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </motion.section>

        {/* Skills Growth Section */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-green-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Growth
          </motion.h2>

          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-center">
              Skills Acquired Through Experience
            </h3>

            <div className="space-y-6">
              {/* Technical Skills */}
              <div>
                <h4 className="text-lg font-medium mb-3 text-teal-400">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "AWS",
                    "MongoDB",
                    "PostgreSQL",
                    "RESTful APIs",
                    "Microservices",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 rounded-lg p-3 text-center"
                    >
                      <span className="text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-lg font-medium mb-3 text-teal-400">
                  Soft Skills
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    "Team Leadership",
                    "Mentoring",
                    "Project Management",
                    "Client Communication",
                    "Problem Solving",
                    "Time Management",
                    "Technical Writing",
                    "Code Reviews",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 rounded-lg p-3 text-center"
                    >
                      <span className="text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/References Section - Optional */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold mb-10 pl-4 border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional References
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Jakub Lenski",
                position: "Co-Founder at Saber",
                quote:
                  "Hard-working and extremely driven, whilst being open minded to new approaches and happy to jump outside of his comfort zone to learn new skills is what makes Carlos unique and a great asset for any start-up.",
              },
              {
                name: "George Siddens",
                position: "Ex Senior Engineer at DTN",
                quote:
                  "Carlos is consistently willing to take on any technical challenges and push his boundaries. He is always learning and works hard to ensure he's completing his tasks. Carlos has done a lot of work on the Digital Commerce frontend, keeping the platform up to date with product requirements.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                      <span className="text-xl font-bold text-teal-400">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <div className="text-center mt-16">
          <motion.div
            className="bg-gradient-to-r from-teal-800 to-blue-800 p-8 rounded-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="mb-6 text-gray-200">
              Interested in leveraging my experience for your next project? I'm
              open to new opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-white text-teal-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-100 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
