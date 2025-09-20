import Hero from "./(site)/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Hero />
      </section>

      {/* Project Showcase Section - Z Pattern */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Top Row - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <Link href="/portfolio" className="aspect-[4/3] relative overflow-hidden rounded-lg group cursor-pointer block">
              <Image 
                src="/images/edtech platforms.png" 
                alt="Edtech Platforms" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                <span className="text-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium text-lg transform scale-95 group-hover:scale-100">
                  View Portfolio
                </span>
              </div>
            </Link>
            
            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] leading-[1.2] text-[oklch(0.2_0.03_250)]">
                Learning Platforms
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-[1.5] font-[var(--font-sans)] font-normal">
                I&apos;ve designed comprehensive learning experiences for Vacademy, Code Circle, SSDC, and The 7Cs. 
                These platforms focus on creating intuitive user journeys that make complex educational content 
                accessible and engaging for learners of all levels.
              </p>
            </div>
          </div>

          {/* Bottom Row - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text */}
            <div className="space-y-4 md:order-1 order-2">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] leading-[1.2] text-[oklch(0.2_0.03_250)]">
                Agricultural Solutions
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-[1.5] font-[var(--font-sans)] font-normal">
                Working with Satvaa and Maroi Boerdery BK, I&apos;ve created digital solutions that bridge the gap 
                between traditional farming practices and modern technology, helping farmers optimize their 
                operations and increase productivity.
              </p>
            </div>
            
            {/* Image */}
            <Link href="/portfolio" className="aspect-[4/3] relative overflow-hidden rounded-lg md:order-2 order-1 group cursor-pointer block">
              <Image 
                src="/images/agricultural platforms.png" 
                alt="Agricultural Platforms" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                <span className="text-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium text-lg transform scale-95 group-hover:scale-100">
                  View Portfolio
                </span>
              </div>
            </Link>
          </div>

          {/* Third Row - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <Link href="/portfolio" className="aspect-[4/3] relative overflow-hidden rounded-lg group cursor-pointer block">
              <Image 
                src="/images/fashion platforms.png" 
                alt="Fashion Platforms" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                <span className="text-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium text-lg transform scale-95 group-hover:scale-100">
                  View Portfolio
                </span>
              </div>
            </Link>
            
            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] leading-[1.2] text-[oklch(0.2_0.03_250)]">
                Fashion Platforms
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-[1.5] font-[var(--font-sans)] font-normal">
                I&apos;ve designed engaging digital experiences for Krazy Kreators and Fashion Flip, creating 
                platforms that showcase fashion products with intuitive browsing, seamless shopping experiences, 
                and visually appealing layouts that capture the essence of each brand.
              </p>
            </div>
          </div>

          {/* Fourth Row - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-4 md:order-1 order-2">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] leading-[1.2] text-[oklch(0.2_0.03_250)]">
                Responsive Websites
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-[1.5] font-[var(--font-sans)] font-normal">
                I&apos;ve created responsive websites for Vidyayatan Technologies, Nexus, Krazy Kreators, and more. 
                These projects focus on delivering seamless user experiences across all devices, with clean 
                designs and optimized performance for modern web standards.
              </p>
            </div>
            
            {/* Image */}
            <Link href="/portfolio" className="aspect-[4/3] relative overflow-hidden rounded-lg md:order-2 order-1 group cursor-pointer block">
              <Image 
                src="/images/responsive websites.png" 
                alt="Responsive Websites" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                <span className="text-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium text-lg transform scale-95 group-hover:scale-100">
                  View Portfolio
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
