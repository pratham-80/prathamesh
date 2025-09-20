import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-6xl md:text-8xl tracking-tight font-[var(--font-sans)] font-semibold text-[oklch(0.2_0.03_250)] lowercase leading-[1.2]">
        hey there!
      </h1>
      
      <div className="flex justify-center">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-[oklch(0.68_0.19_35)]"
        >
          <path 
            d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
            fill="currentColor"
          />
        </svg>
      </div>
      
      <p className="text-xl md:text-2xl text-balance text-center font-[var(--font-sans)] text-[oklch(0.25_0_0)] leading-[1.5] font-normal">
        I&apos;m Prathamesh Ingale, a Product Designer passionate about creating meaningful digital experiences.
      </p>
      
      <div className="flex items-center justify-center gap-3 pt-2">
        <Button asChild variant="secondary" className="px-6">
          <Link href="/about">About Me</Link>
        </Button>
        <Button asChild className="px-6">
          <Link href="/portfolio">View Portfolio</Link>
        </Button>
      </div>
    </section>
  );
}


