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
              <h1 className="text-4xl md:text-5xl font-[var(--font-serif)] leading-[1.2]">
                About
              </h1>
      <p className="text-[17px] leading-[1.5] text-[oklch(0.25_0_0)] font-[var(--font-sans)] font-normal">
                I&apos;m Prathamesh Ingale, a product designer who loves creating minimal, bold, and user-centered experiences.
                I believe design should be intuitive, accessible, and solve real problems for people.
      </p>
      <p className="text-[17px] leading-[1.5] text-[oklch(0.25_0_0)] font-[var(--font-sans)] font-normal">
                With a focus on user research and iterative design, I help teams build products that users love.
                When I&apos;m not designing, you&apos;ll find me exploring new design tools or sketching ideas in my notebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl font-[var(--font-serif)] leading-[1.2] mb-12 text-center">
            Work experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Experience timeline */}
            <div className="space-y-6">
              {/* Current Experience - Vidyayatan Technologies */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200">
                      <Image 
                        src="/images/vidyayatan logo.png" 
                        alt="Vidyayatan Technologies" 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[oklch(0.5_0_0)] mb-1">May 2024 - Present • Bhopal</div>
                      <h3 className="text-xl font-semibold text-[oklch(0.25_0_0)] mb-1 font-[var(--font-sans)] font-semibold">Product Designer, Product Manager</h3>
                      <p className="text-[oklch(0.4_0_0)] font-medium mb-2 font-[var(--font-sans)] font-medium">Vidyayatan Technologies</p>
                      <p className="text-[oklch(0.35_0_0)] leading-[1.5] font-[var(--font-sans)] font-normal">
                        I have designed and managed digital platforms across agri-tech and ed-tech, crafting user flows, product structures, and UI screens. My work includes an LMS and Assessment Management system for Shri Saidas Classes and Vacademy Access, a comprehensive assessment platform for coaching institutes, schools, universities, and corporates. I lead cross-functional teams to deliver user-centered solutions that enhance learning experiences and operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Experience - Technokeens */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200">
                      <Image 
                        src="/images/technokeens logo.png" 
                        alt="Technokeens" 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[oklch(0.5_0_0)] mb-1">Feb 2024 - Apr 2024 • Nashik</div>
                      <h3 className="text-xl font-semibold text-[oklch(0.25_0_0)] mb-1 font-[var(--font-sans)] font-semibold">UI/UX Design Intern</h3>
                      <p className="text-[oklch(0.4_0_0)] font-medium mb-2 font-[var(--font-sans)] font-medium">Technokeens</p>
                      <p className="text-[oklch(0.35_0_0)] leading-[1.5] font-[var(--font-sans)] font-normal">
                        I redesigned the company&apos;s website and focused on designing the UI for a Doctor&apos;s Clinic Management App. I created user flows, wireframes, and high-fidelity screens to enhance appointment scheduling, patient records, and billing processes, ensuring a seamless experience for doctors and staff. This role helped me develop strong skills in user research, prototyping, and collaborating with development teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Experience - Pragrup */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200">
                      <Image 
                        src="/images/pragrup logo.png" 
                        alt="Pragrup, Environ Planners" 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-[oklch(0.5_0_0)] mb-1">Aug 2021 - Dec 2023 • Bengaluru, Nashik</div>
                      <h3 className="text-xl font-semibold text-[oklch(0.25_0_0)] mb-1 font-[var(--font-sans)] font-semibold">Jr. Architect</h3>
                      <p className="text-[oklch(0.4_0_0)] font-medium mb-2 font-[var(--font-sans)] font-medium">Pragrup, Environ Planners</p>
                      <p className="text-[oklch(0.35_0_0)] leading-[1.5] font-[var(--font-sans)] font-normal">
                        I served as a junior architect at Pragrup, and Environ Planners. I contributed to various architectural and interior projects, gaining valuable experience in design execution and teamwork. This foundational experience in architecture provided me with strong spatial thinking skills, attention to detail, and the ability to balance form and function - principles that I now apply to digital product design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                <h2 className="text-3xl md:text-4xl font-[var(--font-serif)] leading-[1.2] mb-8">
                  Working Style
                </h2>
                <div className="space-y-4 text-[17px] leading-[1.5] text-[oklch(0.25_0_0)] font-[var(--font-sans)] font-normal">
                  <p>
                    My journey began in architecture, where I learned to balance form and function. 
                    This foundation naturally led me to product design, where I apply the same principles to digital experiences.
                  </p>
                  <p>
                    I approach every project with a problem-solving mindset, building digital products from scratch. 
                    My experience spans across SaaS platforms, agriculture-tech, ERP tools, and mapping applications.
                  </p>
                </div>
              </div>

              {/* Outside of Work Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-[var(--font-serif)] leading-[1.2] mb-8">
                  Outside of Work
                </h2>
                <div className="space-y-4 text-[17px] leading-[1.5] text-[oklch(0.25_0_0)] font-[var(--font-sans)] font-normal">
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
                <h3 className="text-xl font-[var(--font-serif)] leading-[1.2] mb-4 text-[oklch(0.25_0_0)]">
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
                    <li key={skill} className="flex items-center text-[oklch(0.35_0_0)] font-[var(--font-sans)] font-normal leading-[1.5]">
                      <div className="w-2 h-2 bg-[oklch(0.25_0_0)] rounded-full mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-[var(--font-serif)] leading-[1.2] mb-4 text-[oklch(0.25_0_0)]">
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
                    <li key={tool} className="flex items-center text-[oklch(0.35_0_0)] font-[var(--font-sans)] font-normal leading-[1.5]">
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



