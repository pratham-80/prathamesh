import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* First fold - About section with full height */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="mx-auto max-w-5xl px-6 w-full">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Image on the left */}
            <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
              <div className="w-full max-w-sm">
                <Image 
                  src="/images/profile.png" 
                  alt="Prathamesh Ingale" 
                  width={400} 
                  height={400} 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            
            {/* Text content on the right */}
            <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-[var(--font-serif)]">
                About
              </h1>
      <p className="text-[17px] leading-8 text-[oklch(0.25_0_0)]">
                I&apos;m Prathamesh Ingale, a product designer who loves creating minimal, bold, and user-centered experiences.
                I believe design should be intuitive, accessible, and solve real problems for people.
      </p>
      <p className="text-[17px] leading-8 text-[oklch(0.25_0_0)]">
                With a focus on user research and iterative design, I help teams build products that users love.
                When I&apos;m not designing, you&apos;ll find me exploring new design tools or sketching ideas in my notebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Style & Outside of Work Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-16">
              {/* Working Style Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-[var(--font-serif)] mb-8">
                  Working Style
                </h2>
                <div className="space-y-4 text-[17px] leading-8 text-[oklch(0.25_0_0)]">
                  <p>
                    My journey began in architecture, where I learned to balance form and function. 
                    This foundation naturally led me to product design, where I apply the same principles to digital experiences.
                  </p>
                  <p>
                    I approach every project with a problem-solving mindset, building digital products from scratch. 
                    My experience spans across SaaS platforms, agriculture-tech, ERP tools, and mapping applications.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild className="px-8 py-3">
                    <Link href="#" target="_blank">
                      View Resume
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Outside of Work Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-[var(--font-serif)] mb-8">
                  Outside of Work
                </h2>
                <div className="space-y-4 text-[17px] leading-8 text-[oklch(0.25_0_0)]">
                  <p>
                    When I&apos;m not designing, you&apos;ll find me on night walks through the city, enjoying ice cream 
                    and traveling to new places, camera in hand.
                  </p>
                  <p>
                    I believe in quality time with close friends and have a quirky habit of collecting design inspirations 
                    from everyday life – I see design everywhere.
                  </p>
                </div>
                
                {/* Lifestyle Images Placeholder */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="aspect-square bg-gradient-to-br from-[oklch(0.68_0.19_35)]/20 to-[oklch(0.2_0.03_250)]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[oklch(0.35_0_0)] text-sm">Travel Shot</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-[oklch(0.2_0.03_250)]/20 to-[oklch(0.68_0.19_35)]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[oklch(0.35_0_0)] text-sm">Hobby Photo</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-[oklch(0.68_0.19_35)]/20 to-[oklch(0.2_0.03_250)]/20 rounded-lg flex items-center justify-center md:col-span-1 col-span-2">
                    <span className="text-[oklch(0.35_0_0)] text-sm">Fun Moment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Key Skills */}
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-[var(--font-serif)] mb-4 text-[oklch(0.25_0_0)]">
                  Key Skills
                </h3>
                <ul className="space-y-3">
                  {[
                    "Product Design",
                    "UX/UI",
                    "Information Architecture", 
                    "System Design",
                    "Design Thinking",
                    "Visual Design",
                    "Responsive Design"
                  ].map((skill) => (
                    <li key={skill} className="flex items-center text-[oklch(0.35_0_0)]">
                      <div className="w-2 h-2 bg-[oklch(0.25_0_0)] rounded-full mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-[var(--font-serif)] mb-4 text-[oklch(0.25_0_0)]">
                  Tools
                </h3>
                <ul className="space-y-3">
                  {[
                    "Figma",
                    "FigJam", 
                    "Cursor AI",
                    "Framer",
                    "Plasmic",
                    "Adobe XD",
                    "Canva",
                    "Notion"
                  ].map((tool) => (
                    <li key={tool} className="flex items-center text-[oklch(0.35_0_0)]">
                      <div className="w-2 h-2 bg-[oklch(0.25_0_0)] rounded-full mr-3 flex-shrink-0"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



