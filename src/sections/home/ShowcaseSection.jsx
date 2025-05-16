"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my professional client work and personal projects,
            showcasing my expertise and passion for development.
          </p>
        </div>
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/pathfinding.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <a href="https://dijkstra-s-pathfinding-algorithm.vercel.app/">
                <h2 className="hover:text-purple-500">
                  Pathfinding Algorithm Visualizer
                </h2>
              </a>

              <p className="text-white-50 md:text-xl">
                A website built to visualize and learn different pathfinding
                algorithms and have some fun!
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/pokedex.png"
                  alt="Library Management Platform"
                />
              </div>
              <a href="https://pokedex-drab-omega.vercel.app/">
                <h2 className="hover:text-purple-500">
                  My Full Pokedex Showcase (PokeAPI)
                </h2>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/ecopadel.png" alt="YC Directory App" />
              </div>
              <a href="https://www.ecopadel.co.uk/">
                {" "}
                <h2 className="hover:text-purple-500">
                  EcoPadel - A Startup Bringing Innovation to the Padel in UK
                </h2>
              </a>
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
              link="/projects"
              className="inline-block text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              text="Explore all projects"
              colour="bg-gradient-to-r from-red-500 to-purple-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
