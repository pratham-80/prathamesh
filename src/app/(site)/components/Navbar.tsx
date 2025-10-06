"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const router = useRouter();
  const pathname = usePathname();
  
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
    setIsMenuOpen(false);
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
      className="fixed top-0 inset-x-0 z-50 bg-[#F8F9FB]"
    >
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-3 flex items-center justify-between gap-6">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image 
              src="/images/PI Logo Light Theme High Resolution.jpg" 
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
                  "block px-5 py-2 text-sm font-[var(--font-sans)] leading-[1.5] transition-all duration-300",
                  activeSection === item.id 
                    ? "text-[#1E65ED]" 
                    : "text-[oklch(0.25_0_0)] hover:text-[#1E65ED]"
                )}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden pr-1">
          <button
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-[oklch(0.25_0_0)] transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-[oklch(0.25_0_0)] transition-all duration-300",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-[oklch(0.25_0_0)] transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto max-w-6xl w-full px-6 py-4 space-y-2 bg-[#F8F9FB]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group w-full text-left"
            >
              <span
                className={cn(
                  "block w-full px-5 py-3 font-[var(--font-sans)] transition-all duration-300",
                  activeSection === item.id 
                    ? "text-[#1E65ED]" 
                    : "text-[oklch(0.25_0_0)] hover:text-[#1E65ED]"
                )}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




