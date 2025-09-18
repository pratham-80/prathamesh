import Hero from "./(site)/components/Hero";

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
            <div className="aspect-[4/3] bg-gradient-to-br from-[oklch(0.68_0.19_35)]/10 to-[oklch(0.2_0.03_250)]/10 rounded-lg flex items-center justify-center">
              <span className="text-[oklch(0.35_0_0)] text-sm">Edtech Project Image</span>
            </div>
            
            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] text-[oklch(0.2_0.03_250)]">
                Learning Platforms
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-7">
                I've designed comprehensive learning experiences for Vacademy, Code Circle, SSDC, and The 7Cs. 
                These platforms focus on creating intuitive user journeys that make complex educational content 
                accessible and engaging for learners of all levels.
              </p>
            </div>
          </div>

          {/* Bottom Row - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text */}
            <div className="space-y-4 md:order-1 order-2">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] text-[oklch(0.2_0.03_250)]">
                Agricultural Solutions
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-7">
                Working with Satvaa and Maroi Boerdery BK, I've created digital solutions that bridge the gap 
                between traditional farming practices and modern technology, helping farmers optimize their 
                operations and increase productivity.
              </p>
            </div>
            
            {/* Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-[oklch(0.2_0.03_250)]/10 to-[oklch(0.68_0.19_35)]/10 rounded-lg flex items-center justify-center md:order-2 order-1">
              <span className="text-[oklch(0.35_0_0)] text-sm">Agritech Project Image</span>
            </div>
          </div>

          {/* Third Row - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-[oklch(0.68_0.19_35)]/10 to-[oklch(0.2_0.03_250)]/10 rounded-lg flex items-center justify-center">
              <span className="text-[oklch(0.35_0_0)] text-sm">Fashion Project Image</span>
            </div>
            
            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] text-[oklch(0.2_0.03_250)]">
                Fashion Platforms
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-7">
                I've designed engaging digital experiences for Krazy Kreators and Fashion Flip, creating 
                platforms that showcase fashion products with intuitive browsing, seamless shopping experiences, 
                and visually appealing layouts that capture the essence of each brand.
              </p>
            </div>
          </div>

          {/* Fourth Row - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-4 md:order-1 order-2">
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] text-[oklch(0.2_0.03_250)]">
                Responsive Websites
              </h3>
              <p className="text-[oklch(0.35_0_0)] leading-7">
                I've created responsive websites for Vidyayatan Technologies, Nexus, Krazy Kreators, and more. 
                These projects focus on delivering seamless user experiences across all devices, with clean 
                designs and optimized performance for modern web standards.
              </p>
            </div>
            
            {/* Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-[oklch(0.2_0.03_250)]/10 to-[oklch(0.68_0.19_35)]/10 rounded-lg flex items-center justify-center md:order-2 order-1">
              <span className="text-[oklch(0.35_0_0)] text-sm">Responsive Website Image</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
