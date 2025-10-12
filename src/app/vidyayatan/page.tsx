import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "../(site)/components/projects-data";
import Reveal from "../(site)/components/Reveal";

export default function VidyayatanPage() {
  const project = getProjectBySlug("vidyayatan-website");

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-center">Project not found.</p>
        <div className="text-center mt-6">
          <Link href="/#work" className="underline text-primary">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const caseStudies = [
    {
      title: "Website Case Study",
      image: "/images/portfolio thumbnails/vidyayatan_thumnail.png",
      href: project.behanceUrl || "#",
      alt: "Vidyayatan website case study cover image",
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
        <Reveal className="flex flex-col items-center gap-4">
          <Link
            href="/#work"
            className="self-start flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current">
              ←
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.24em]">Back</span>
          </Link>
          <h1 className="text-center text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <span
            aria-hidden
            className="mt-4 text-[30px] text-primary drop-shadow-[0_8px_20px_rgba(30,101,237,0.28)] dark:drop-shadow-[0_8px_20px_rgba(224,241,31,0.28)]"
          >
            ✦
          </span>
  </Reveal>

  <Reveal className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start">
          <div className="grid grid-cols-1 gap-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Focus Area
                </p>
                <p className="text-lg font-medium text-foreground">Photography Platform</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Project Type
                </p>
                <p className="text-lg font-medium text-foreground">Conceptual / Personal</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Skills Applied
                </p>
                <p className="text-lg font-medium text-foreground">
                  UX Research, Visual Design, Interaction Design
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Timeline
                </p>
                <p className="text-lg font-medium text-foreground">3 days</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Tools Used
                </p>
                <p className="text-lg font-medium text-foreground">
                  Figma, Photoshop
                </p>
              </div>
            </div>
          </div>
          <div className="text-base md:text-lg leading-8 text-foreground/80">
            <p>
              This project focused on designing a professional portfolio website for a nature photographer specializing
              in landscape, wildlife, and macro photography. The goal was to create a visually captivating digital platform
              that effectively showcased the photographer’s work while emphasizing expertise and artistic style.

              The website was designed with a strong focus on user experience and seamless navigation, ensuring that
              visitors could easily explore the photographer’s portfolio. By combining aesthetics with functionality, the
              project aimed to attract individual clients seeking photography services, art galleries, and potential licensing
              partners, thereby expanding the photographer’s professional reach and opportunities.
            </p>
          </div>
        </Reveal>

        <Reveal className="my-8">
          <div className="h-px w-full bg-border" />
          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-foreground">
            Deep Dive Into the Project
          </h3>
        </Reveal>

  <Reveal className="grid gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-md transition-transform hover:-translate-y-1 hover:shadow-2xl aspect-[4/3] bg-card card-dark-overlay"
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
        </Reveal>
      </div>
    </main>
  );
}

