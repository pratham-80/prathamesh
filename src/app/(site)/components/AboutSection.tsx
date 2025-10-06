"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  {
    name: "Figma",
    description: "Collaborative product design system",
    proficiency: 94,
  },
  {
    name: "Framer",
    description: "No-code interactive prototyping",
    proficiency: 92,
  },
  {
    name: "Cursor",
    description: "AI-assisted design and code handoff",
    proficiency: 88,
  },
  {
    name: "Plasmic",
    description: "Visual builder for production sites",
    proficiency: 86,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-80px",
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-background py-32 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <h2 className="text-center text-[24px] md:text-[40px] font-[var(--font-display)] font-bold uppercase tracking-[0] leading-tight text-[#1E65ED] md:text-left">
                ABOUT
              </h2>
              <div className="hidden flex-1 md:block">
                <div className="h-[3px] w-full rounded-full bg-[oklch(0.88_0.01_250)] relative">
                  <div className="absolute right-0 top-0 h-full w-8 bg-[#1E65ED]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xl md:text-2xl leading-relaxed text-[oklch(0.5_0_0)] font-[var(--font-sans)]">
              I make pixels purposeful, turning ideas into digital experiences that are intuitive and meaningful.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-base md:text-lg text-black font-[var(--font-sans)] leading-[1.7]">
              I began with a Bachelor of Architecture, where I honed design thinking and collaboration. Curiosity led me into digital design through a UI/UX certification and early UX work. Today, as Product Designer & Manager at Vidyayatan Technologies, I craft impactful platforms, guide teams, and mentor emerging designers.
            </p>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="relative mt-6 space-y-4"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col gap-6 rounded-md bg-[#1E65ED] px-8 py-8 text-white shadow-[0_24px_80px_rgba(30,101,237,0.22)] md:flex-row md:items-center md:justify-between md:py-10 md:sticky md:top-32"
                  style={{ zIndex: 20 + index * 5 }}
                >
                  <div className="flex-1 space-y-1">
                    <h3 className="text-2xl md:text-3xl font-semibold font-[var(--font-sans)]">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-white/80 font-[var(--font-sans)]">
                      {tool.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 md:pl-6">
                    <div className="hidden h-12 w-px bg-white/20 md:block" />
                    <span className="text-3xl md:text-4xl font-bold text-white/60 font-[var(--font-sans)]">
                      {tool.proficiency}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


