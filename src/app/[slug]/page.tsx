import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects, toSlug } from "../(site)/components/projects-data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map(p => ({ slug: toSlug(p.title) }));
}

export default function ProjectPage({ params }: Props) {
  // Fashion flip is handled by dedicated page
  if (params.slug === "fashion-flip") {
    return null;
  }
  if (params.slug === "grocery-guru") {
    return null;
  }
  if (params.slug === "woof-n-wiskers" || params.slug === "woof-n-wishers") {
    return null;
  }
  if (params.slug === "wildscape") {
    return null;
  }
  if (params.slug === "vidyayatan-website") {
    return null;
  }

  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-center">Project not found.</p>
        <div className="text-center mt-6">
          <Link href="/#work" className="underline text-[#1E65ED]">Back to projects</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-4xl md:text-6xl font-[var(--font-serif)] font-bold tracking-tight text-[oklch(0.18_0_0)]">{project.title}</h1>
          <Link href="/#work" className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E65ED]">Back to projects</Link>
        </div>

        <section className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start">
          <div className="grid gap-6 text-[oklch(0.4_0_0)]">
            {project.industry && (
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[oklch(0.65_0_0)]">Industry</p>
                <p className="text-lg font-semibold text-[oklch(0.25_0_0)]">{project.industry}</p>
              </div>
            )}
            {project.client && (
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[oklch(0.65_0_0)]">Client</p>
                <p className="text-lg font-semibold text-[oklch(0.25_0_0)]">{project.client}</p>
              </div>
            )}
            {project.service && (
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[oklch(0.65_0_0)]">Service</p>
                <p className="text-lg font-semibold text-[oklch(0.25_0_0)]">{project.service}</p>
              </div>
            )}
            {project.date && (
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[oklch(0.65_0_0)]">Date</p>
                <p className="text-lg font-semibold text-[oklch(0.25_0_0)]">{project.date}</p>
              </div>
            )}
          </div>
          <div className="text-base md:text-lg leading-8 text-[oklch(0.28_0_0)] max-w-prose">
            <p>
              This case study highlights the goals, design process, and outcomes for {project.title}. It presents
              decisive explorations, design iterations, and final visuals while maintaining clarity and focus on value
              delivered to stakeholders.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          {(project.images?.length ? project.images : [project.image]).map((src, idx) => (
            <div key={idx} className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-white">
              <Image src={src} alt={`${project.title} image ${idx+1}`} fill className="object-cover" />
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}


