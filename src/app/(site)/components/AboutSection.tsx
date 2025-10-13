"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "Figma", icon: "/images/white-logos/figma_white.png" },
  { name: "Framer", icon: "/images/white-logos/framer_white.png" },
  { name: "Cursor", icon: "/images/white-logos/cursor_white.png" },
  { name: "Plasmic", icon: "/images/white-logos/plasmic_white.png" },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};


const cardIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-80px",
  });
  const [isDark, setIsDark] = useState(false);

  // Track theme based on documentElement class changes
  useEffect(() => {
    const update = () => {
      if (typeof document !== "undefined") {
        setIsDark(document.documentElement.classList.contains("dark"));
      }
    };
    update();
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-background pt-32 md:pt-40 pb-20 md:pb-20 overflow-hidden"
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
              <h2 className="text-center text-[24px] md:text-[40px] font-serif font-bold uppercase tracking-[0] leading-tight text-primary md:text-left">
                ABOUT
              </h2>
              <div className="hidden flex-1 md:block">
                <div className="h-[3px] w-full rounded-full bg-[oklch(0.88_0.01_250)] dark:bg-foreground/20 relative">
                  <div className="absolute right-0 top-0 h-full w-8 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Below: two-column layout (left: journey, right: icons) */}
  <div className="mt-12 grid gap-12 md:gap-16 lg:gap-20 lg:grid-cols-2">
          {/* Left: journey paragraph (1) */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg text-foreground leading-[1.7] text-center lg:text-left">
              I began with a Bachelor of Architecture, where I honed design thinking and collaboration. Curiosity led me into digital design through a UI/UX certification and early UX work. Today, as Product Designer & Manager at Vidyayatan Technologies, I craft impactful platforms, guide teams, and mentor emerging designers.
            </p>
          </motion.div>

          {/* Right: tools cards in a single line, animated in required order (2..5) */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-5">
              {tools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardIn}
                  transition={{ duration: 0.45, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center justify-center rounded-md bg-primary h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 p-3 shadow-[0_12px_36px_rgba(30,101,237,0.2)] dark:shadow-[0_12px_36px_rgba(224,241,31,0.2)]"
                  title={tool.name}
                >
                  <Image
                    src={
                      isDark
                        ? tool.icon
                            .replace("/images/white-logos/", "/images/black-logos/")
                            .replace("_white", "_black")
                        : tool.icon
                    }
                    alt={tool.name}
                    width={28}
                    height={28}
                    unoptimized
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to white icon if black variant not found
                      const img = e.currentTarget as HTMLImageElement;
                      img.src = tool.icon;
                    }}
                    className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 object-contain"
                  />
                  <div className="mt-1 text-[10px] md:text-xs font-medium text-primary-foreground text-center leading-tight">
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline appears last (6) */}
        <motion.div
          className="mt-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed text-foreground/80">
            I make pixels purposeful, turning ideas into digital experiences that are intuitive and meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


