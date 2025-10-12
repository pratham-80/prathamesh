"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize and persist theme
  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark" | null) : null;
    const preferred = stored ?? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    setTheme(preferred);
    document.documentElement.classList.toggle("dark", preferred === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch {}
  };
  
  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  // Update active section and scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (pathname === "/") {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return undefined;
  }, [pathname]);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-3 flex items-center justify-between gap-6">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image 
              src={theme === "dark" ? "/images/PI Logo Dark Theme.jpg" : "/images/PI Logo Light Theme High Resolution.jpg"}
              alt="PI Logo" 
              width={80} 
              height={80} 
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group"
            >
              <span
                className={cn(
                  "block px-5 py-2 text-sm font-sans leading-[1.5] transition-all duration-300",
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </span>
            </button>
          ))}

          {/* Animated theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-9 w-9 rounded-full flex items-center justify-center overflow-hidden transition-transform"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="moon"
                  initial={{ y: 12, opacity: 0, rotate: 30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -12, opacity: 0, rotate: -30 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-primary"
                >
                  <Moon size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ y: 12, opacity: 0, rotate: -30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -12, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-foreground"
                >
                  <Sun size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>


      </div>
    </nav>
  );
}

export default Navbar;




