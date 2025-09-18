"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const link = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        className={cn(
          "text-sm md:text-base px-3 py-2 transition-colors",
          active ? "text-[oklch(0.68_0.19_35)]" : "text-[oklch(0.25_0_0)] hover:text-[oklch(0.68_0.19_35)]"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full py-6 bg-[oklch(0.98_0.002_50_/_0.8)] backdrop-blur-md border-b border-[oklch(0.98_0.002_50_/_0.2)]">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
        {/* Avatar Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src="/images/avatar.png" 
              alt="Prathamesh Ingale" 
              width={48} 
              height={48} 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {link("/about", "About")}
          {link("/portfolio", "Portfolio")}
          {link("/contact", "Contact")}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 space-y-2 bg-white border-t border-gray-100">
          {link("/about", "About")}
          {link("/portfolio", "Portfolio")}
          {link("/contact", "Contact")}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



