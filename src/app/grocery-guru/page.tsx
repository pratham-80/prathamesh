import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "../(site)/components/projects-data";

export default function GroceryGuruPage() {
  const project = getProjectBySlug("grocery-guru");

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-center">Project not found.</p>
        <div className="text-center mt-6">
          <Link href="/#work" className="underline text-[#1E65ED]">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const caseStudies = [
    {
      title: "Product Case Study",
      image: "/images/portfolio thumbnails/3A.Grocery Guru.png",
      href: project.behanceUrl,
      alt: "Grocery Guru case study cover image",
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/#work"
            className="self-start flex items-center gap-2 text-[oklch(0.4_0_0)] hover:text-[#1E65ED] transition-colors"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current">
              ←
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.24em]">Back</span>
          </Link>
          <h1 className="text-center text-4xl md:text-6xl font-[var(--font-serif)] font-bold tracking-tight text-[oklch(0.18_0_0)]">
            {project.title}
          </h1>
          <span
            aria-hidden
            className="mt-4 text-[30px] text-[#1E65ED] drop-shadow-[0_8px_20px_rgba(30,101,237,0.28)]"
          >
            ✦
          </span>
        </div>

        <section className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start">
          <div className="grid grid-cols-1 gap-8 text-[oklch(0.45_0_0)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-[oklch(0.7_0_0)] uppercase">
                  Focus Area
                </p>
                <p className="text-lg font-medium text-[oklch(0.23_0_0)]">Retail & eCommerce</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-[oklch(0.7_0_0)] uppercase">
                  Project Type
                </p>
                <p className="text-lg font-medium text-[oklch(0.23_0_0)]">Conceptual / Personal</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-[oklch(0.7_0_0)] uppercase">
                  Skills Applied
                </p>
                <p className="text-lg font-medium text-[oklch(0.23_0_0)]">
                  UX Research, Information Architecture, UI Design
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-[oklch(0.7_0_0)] uppercase">
                  Timeline
                </p>
                <p className="text-lg font-medium text-[oklch(0.23_0_0)]">4 days</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-[oklch(0.7_0_0)] uppercase">
                  Tools Used
                </p>
                <p className="text-lg font-medium text-[oklch(0.23_0_0)]">
                  Figma, Photoshop
                </p>
              </div>
            </div>
          </div>
          <div className="text-base md:text-lg leading-8 text-[oklch(0.28_0_0)]">
            <p>
              This project focuses on designing a mobile application that helps users efficiently manage their kitchen stock, groceries, and perishable items. Triggered by the lifestyle changes during Covid-19 lockdowns, when more people began cooking at home, the app addresses common challenges such as forgetting what items are available, over-purchasing, and food spoilage.

              The app will track vegetables, fridge items, and groceries while providing reminders and suggestions to minimize waste. The primary target audience includes home cooks (20–50 years old), busy professionals, health-conscious individuals, and families who aim to optimize their grocery shopping, meal planning, and kitchen organization.
            </p>
          </div>
        </section>

        <div className="my-8">
          <div className="h-px w-full bg-[oklch(0.9_0_0)]" />
          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[oklch(0.2_0_0)]">
            Deep Dive Into the Project
          </h3>
        </div>

        <section className="grid gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-md transition-transform hover:-translate-y-1 hover:shadow-2xl aspect-[4/3] bg-white"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="absolute inset-0 object-cover"
                priority
              />
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

