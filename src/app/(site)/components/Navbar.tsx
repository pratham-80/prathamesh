"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLargeUp, setIsLargeUp] = useState(false);

  // Initialize and persist theme
  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark" | null) : null;
    const preferred = stored ?? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    setTheme(preferred);
    document.documentElement.classList.toggle("dark", preferred === "dark");
    // Determine initial viewport breakpoint
    if (typeof window !== "undefined") {
      const mq = window.matchMedia('(min-width: 1024px)');
      setIsLargeUp(mq.matches);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch {}
  };
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  
  // Allow background to remain scrollable even when menu is open (no scroll lock)

  // Track viewport changes to toggle mobile controls visibility
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent) => setIsLargeUp(e.matches);
    // Set initial
    setIsLargeUp(mq.matches);
    // Listen
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, []);
  
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
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
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
        {/* Tablet/Mobile actions: theme toggle + hamburger */}
        {!isLargeUp && (
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-9 w-9 rounded-full flex items-center justify-center overflow-hidden transition-transform"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="moon-sm"
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
                  key="sun-sm"
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

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="h-9 w-9 rounded-full flex items-center justify-center"
          >
            <Menu size={22} className="text-foreground" />
          </button>
        </div>
        )}

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

        {/* Mobile/Tablet full-width solid menu (background remains scrollable) */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Transparent overlay; center a solid card for readability. Background can still scroll. */}
              <motion.aside
                className="fixed inset-0 z-[70] pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="pointer-events-auto mx-2 sm:mx-4 mt-3">
                  <div className="w-full max-w-[640px] mx-auto rounded-2xl bg-card border border-border shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
                      <span className="text-sm font-medium text-muted-foreground">Menu</span>
                      <button
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        className="h-9 w-9 rounded-full flex items-center justify-center"
                      >
                        <X size={22} className="text-foreground" />
                      </button>
                    </div>
                    <nav className="p-4">
                      <ul className="space-y-2">
                        {navItems.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => { scrollToSection(item.id); setMobileOpen(false); }}
                              className={cn(
                                "w-full text-left px-4 py-4 rounded-lg text-lg tracking-wide transition-colors",
                                activeSection === item.id ? "text-primary bg-secondary" : "text-foreground hover:bg-muted"
                              )}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;




