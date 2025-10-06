"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { Mail } from "lucide-react";
import AboutSection from "./(site)/components/AboutSection";
import { toSlug } from "./(site)/components/projects-data";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  // Hero image cursor-follow motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imageX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.2 });
  const imageY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.2 });
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const xFromCenter = e.clientX - (rect.left + rect.width / 2);
    const yFromCenter = e.clientY - (rect.top + rect.height / 2);
    // Scale to small offset (±12px max approximately)
    mouseX.set((xFromCenter / rect.width) * 24);
    mouseY.set((yFromCenter / rect.height) * 24);
  };
  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  const projectsRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: experienceScrollProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"]
  });
  const projectsIndicatorLeft = useTransform(
    projectsScrollProgress,
    [0, 0.15],
    ["0%", "calc(100% - 48px)"]
  );
  const projectsIndicatorWidth = useTransform(
    projectsScrollProgress,
    [0, 1],
    ["48px", "48px"]
  );
  const experienceIndicatorLeft = useTransform(
    experienceScrollProgress,
    [0, 0.15],
    ["0%", "calc(100% - 48px)"]
  );
  const experienceIndicatorWidth = useTransform(
    experienceScrollProgress,
    [0, 1],
    ["48px", "48px"]
  );

  const professionalProjects = [
    // {
    //   title: "Vacademy",
    //   image: "/images/edtech platforms.png",
    //   logo: "/images/white-logos/vacademy_logo.png"
    // },
    // {
    //   title: "Satvaa",
    //   image: "/images/agricultural platforms.png",
    //   logo: "/images/white-logos/satvaa_logo.png"
    // },
    // {
    //   title: "Vidyayatan Website",
    //   image: "/images/portfolio thumbnails/vidyayatan_thumnail.png",
    //   logo: "/images/white-logos/Vidyayatan_Technologies_logo.png"
    // },
    // {
    //   title: "Krazy Kreators Website",
    //   image: "/images/portfolio thumbnails/krazy_kreators.png",
    //   logo: "/images/white-logos/krazy_kreators_logo.png"
    // },
    {
      title: "Fashion Flip",
      image: "/images/fashion platforms.png",
      logo: "/images/white-logos/Fashion_flip_logo.png"
    },
    {
      title: "Grocery Guru",
      image: "/images/portfolio thumbnails/grocery_guru_thumbnail.png",
      logo: "/images/white-logos/grocery_guru_logo.png"
    },
    {
      title: "Woof n Wiskers",
      image: "/images/portfolio thumbnails/4. Woof and Wiskers thumbnail.png",
      logo: "/images/white-logos/woof_n_wiskers_logo.png"
    },
    {
      title: "Wildscape",
      image: "/images/portfolio thumbnails/wildscape_hero_image.png",
      logo: "/images/white-logos/wildscape_logo.png"
    }
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase
        .from("contacts")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setMessage("Thank you for your message! I&apos;ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F8F9FB]">
      {/* Hero Section */}
      <section
        id="hero"
        className="h-[80vh] sm:min-h-screen flex items-center justify-center bg-background px-3 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-8"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div className="mx-auto max-w-4xl text-center w-full px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-24 sm:gap-20 md:gap-[160px]"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
              className="uppercase tracking-[0.45em] text-xs md:text-sm text-[oklch(0.35_0_0)] mb-2 sm:-mb-12 md:-mb-16"
            >
              Design is the only constant
            </motion.p>

            <div className="relative flex flex-col items-center w-full max-w-full overflow-visible">
              <div className="relative w-full px-2 sm:px-4 md:px-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[48px] sm:text-[60px] md:text-[100px] lg:text-[128px] font-[var(--font-display)] font-bold uppercase tracking-[0] leading-[0.8] text-[#1E65ED]"
                >
                  <span className="block">Prathamesh</span>
                  <span className="block">Ingale</span>
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ x: imageX, y: imageY }}
                >
                  <div className="relative w-[4rem] h-[6rem] sm:w-[5rem] sm:h-[7.5rem] md:w-[8rem] md:h-[12rem] lg:w-[7.5rem] lg:h-[11.25rem] rounded-full overflow-hidden shadow-[0_18px_46px_rgba(30,101,237,0.25)]">
                    <Image
                      src="/images/profile.png"
                      alt="Prathamesh Ingale portrait"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-8 mt-2 sm:-mt-12 md:-mt-16">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <span className="text-[30px] text-[#1E65ED] drop-shadow-[0_8px_20px_rgba(30,101,237,0.28)]" aria-hidden="true">✦</span>
                </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                className="text-lg md:text-xl text-[oklch(0.35_0_0)] font-[var(--font-sans)] max-w-2xl text-center"
              >
                I&apos;m Prathamesh Ingale — a product designer crafting digital products that balance creativity, logic, and usability.
              </motion.p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      

      {/* Work Section */}
      <section id="work" ref={projectsRef} className="pt-48 pb-28 bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-center gap-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[24px] md:text-[40px] font-[var(--font-display)] font-bold uppercase tracking-[0] leading-tight text-[#1E65ED]"
              >
                Projects
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="origin-left flex-1 h-[4px] bg-[oklch(0.82_0.01_250)] relative"
              >
                <motion.span
                  style={{ left: projectsIndicatorLeft, width: projectsIndicatorWidth }}
                  className="absolute top-0 h-full bg-[#1E65ED]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Professional Work */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {professionalProjects.map((project, index) => {
                const slug = toSlug(project.title);
                return (
                  <Link key={project.title} href={`/${slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.2, once: false }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl h-64 md:h-80 shadow-[0_18px_40px_rgba(30,101,237,0.08)]"
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/75" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={72}
                          height={24}
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 bg-[#1E65ED] text-white text-xs md:text-sm font-[var(--font-sans)] font-semibold px-4 py-2 rounded-tr-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {project.title}
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center text-sm sm:text-base text-[oklch(0.35_0_0)] font-[var(--font-sans)]"
          >
            <span>Check out more projects on my </span>
            <Link href="https://www.behance.net/prathameshingale" target="_blank" rel="noreferrer" className="text-[#1E65ED] underline-offset-4 hover:underline">
              Behance profile
            </Link>
            .
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="pt-20 pb-48 bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-center gap-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[24px] md:text-[40px] font-[var(--font-display)] font-bold uppercase tracking-[0] leading-tight text-[#1E65ED]"
              >
                Experience
            </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="origin-left flex-1 h-[4px] bg-[oklch(0.82_0.01_250)] relative"
              >
                <motion.span
                  style={{ left: experienceIndicatorLeft, width: experienceIndicatorWidth }}
                  className="absolute top-0 h-full bg-[#1E65ED]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Two-column experience list styled like reference */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-x-16 gap-y-20"
          >
            {/* Row 1 */}
            <motion.div variants={fadeInUp} className="space-y-2 text-left pb-8 border-b border-gray-200 md:border-b-0 md:pr-8">
              <h3 className="text-xl md:text-2xl font-[var(--font-sans)] font-semibold text-[oklch(0.2_0.03_250)]">Product Designer & Product Manager</h3>
              <div className="text-gray-500 font-medium font-[var(--font-sans)]">Vidyayatan Technologies</div>
              <div className="text-sm text-gray-400 font-[var(--font-sans)]">May 2024 - Present</div>
              <p className="text-base text-gray-700 leading-relaxed font-[var(--font-sans)] max-w-[60ch]">
                I have designed and managed digital platforms across agri-tech and ed-tech, crafting user flows,
                product structures, and UI screens. My work includes an LMS and Assessment Management system for
                Shri Saidas Classes and Vacademy Access, a comprehensive assessment platform for coaching
                institutes, schools, universities, and corporates.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-2 text-left pb-8 border-b border-gray-200 md:border-b-0 md:pl-8">
              <h3 className="text-xl md:text-2xl font-[var(--font-sans)] font-semibold text-[oklch(0.2_0.03_250)]">UI/UX Design Intern</h3>
              <div className="text-gray-500 font-medium font-[var(--font-sans)]">Technokeens</div>
              <div className="text-sm text-gray-400 font-[var(--font-sans)]">Feb 2024 - Apr 2024</div>
              <p className="text-base text-gray-700 leading-relaxed font-[var(--font-sans)] max-w-[60ch]">
                I redesigned the company&apos;s website and focused on designing the UI for a Doctor&apos;s Clinic Management App.
                I created user flows, wireframes, and high-fidelity screens to enhance appointment scheduling, patient
                records, and billing processes, ensuring a seamless experience for doctors and staff.
              </p>
            </motion.div>

            {/* Divider between rows */}
            <div className="hidden md:block md:col-span-2 h-px bg-gray-200" />

            {/* Row 2 */}
            <motion.div variants={fadeInUp} className="space-y-2 text-left md:pr-8">
              <h3 className="text-xl md:text-2xl font-[var(--font-sans)] font-semibold text-[oklch(0.2_0.03_250)]">Architect</h3>
              <div className="text-gray-500 font-medium font-[var(--font-sans)]">Pragrup, Environ Planners</div>
              <div className="text-sm text-gray-400 font-[var(--font-sans)]">Aug 2021 - Dec 2023</div>
              <p className="text-base text-gray-700 leading-relaxed font-[var(--font-sans)] max-w-[60ch]">
                I served as a junior architect at Pragrup, and Environ Planners. I contributed to various architectural
                and interior projects, gaining valuable experience in design execution and teamwork.
              </p>
              </motion.div>
            <div className="hidden md:block" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="py-8 md:py-10 mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 text-center">
              <motion.div variants={fadeInUp} className="py-6 md:py-0 md:border-r md:border-gray-200">
                <div className="text-4xl font-bold text-[#2563EB]">5</div>
                <div className="mt-2 text-base font-medium text-[#2563EB]">Products Designed</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="py-6 md:py-0 md:border-r md:border-gray-200">
                <div className="text-4xl font-bold text-[#2563EB]">6</div>
                <div className="mt-2 text-base font-medium text-[#2563EB]">Satisfied Clients</div>
          </motion.div>
              <motion.div variants={fadeInUp} className="py-6 md:py-0">
                <div className="text-4xl font-bold text-[#2563EB]">4</div>
                <div className="mt-2 text-base font-medium text-[#2563EB]">Client Websites</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools marquee - directly below experience */}
      <section className="bg-background leading-none overflow-hidden">
        {/* top row right->left */}
        <div className="relative marquee m-0 leading-none">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24"
            style={{
              background: "linear-gradient(90deg, rgba(248,249,251,1) 0%, rgba(248,249,251,0.2) 100%)"
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24"
            style={{
              background: "linear-gradient(270deg, rgba(248,249,251,1) 0%, rgba(248,249,251,0.2) 100%)"
            }}
          />
          <div className="marquee-track marquee-wide animate-marquee-left" aria-hidden="true">
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Figma</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Framer</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Cursor</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Plasmic</span>
            {/* duplicate for seamless loop */}
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Figma</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Framer</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Cursor</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Plasmic</span>
          </div>
        </div>
        {/* bottom row left->right */}
        <div className="relative marquee m-0 leading-none">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24"
            style={{
              background: "linear-gradient(90deg, rgba(248,249,251,1) 0%, rgba(248,249,251,0.2) 100%)"
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24"
            style={{
              background: "linear-gradient(270deg, rgba(248,249,251,1) 0%, rgba(248,249,251,0.2) 100%)"
            }}
          />
          <div className="marquee-track marquee-wide animate-marquee-right" aria-hidden="true">
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Figma</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Framer</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Cursor</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Plasmic</span>
            {/* duplicate */}
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Figma</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Framer</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Cursor</span>
            <span className="text-gray-300 text-3xl align-baseline">✦</span>
            <span className="px-10 text-[72px] md:text-[112px] font-[var(--font-sans)] font-bold uppercase tracking-[0] text-[#1E65ED]">Plasmic</span>
          </div>
        </div>
      </section>

      

      {/* Contact & Footer Section */}
      <section id="contact" className="py-48 bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl w-full px-4 sm:px-6">
          {/* Title + line */}
          <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-6">
              <h2 className="text-[24px] md:text-[40px] font-[var(--font-display)] font-bold uppercase tracking-[0] leading-tight text-[#1E65ED]">
                CONTACT
              </h2>
              <div className="flex-1 h-[4px] bg-[oklch(0.82_0.01_250)] relative">
                <span className="absolute right-0 top-0 h-full w-8 bg-[#1E65ED]" />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left content (unchanged text/content) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-[var(--font-serif)] text-[oklch(0.2_0.03_250)] mb-4">Get in Touch</h3>
                <p className="text-[oklch(0.35_0_0)] font-[var(--font-sans)] leading-[1.5] mb-6">
                  I&apos;m always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
                </p>
                <div className="space-y-4">
                  <a 
                    href="mailto:ingleprathmesh80@gmail.com" 
                    className="flex items-center gap-3 text-[#1E65ED] hover:text-[#1E65ED] transition-colors"
                  >
                    <Mail size={20} />
                    <span>ingleprathmesh80@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                      className="mt-2 bg-[#E5E5E5] placeholder-gray-500 text-[oklch(0.2_0.03_250)] border-0 focus:ring-0 focus:outline-none px-4 py-3"
                      style={{ borderRadius: "16px" }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                      className="mt-2 bg-[#E5E5E5] placeholder-gray-500 text-[oklch(0.2_0.03_250)] border-0 focus:ring-0 focus:outline-none px-4 py-3"
                      style={{ borderRadius: "16px" }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Say hello..." 
                    rows={6} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required 
                    className="mt-2 bg-[#E5E5E5] placeholder-gray-500 text-[oklch(0.2_0.03_250)] border-0 focus:ring-0 focus:outline-none px-4 py-4"
                    style={{ borderRadius: "16px" }}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="h-14 font-semibold bg-[#1768FF] hover:bg-[#1768FF]/90 text-white"
                  style={{ borderRadius: "18px", width: "100%", maxWidth: "320px", margin: "0 auto" }}
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </form>

              {message && (
                <div className={`mt-4 p-4 rounded-lg ${
                  message.includes("Thank you") 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {message}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer removed here; global footer renders in layout.tsx */}
    </main>
  );
}
