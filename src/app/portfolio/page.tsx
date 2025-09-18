import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  { id: 1, title: "E-commerce Mobile App", category: "Product Design", image: "/images/sample-1.jpg" },
  { id: 2, title: "SaaS Dashboard", category: "UX/UI Design", image: "/images/sample-2.jpg" },
  { id: 3, title: "Healthcare Platform", category: "Product Design", image: "/images/sample-3.jpg" },
  { id: 4, title: "Fintech Mobile App", category: "UX Design", image: "/images/sample-1.jpg" },
  { id: 5, title: "Design System", category: "Design System", image: "/images/sample-2.jpg" },
  { id: 6, title: "Social Media App", category: "Product Design", image: "/images/sample-3.jpg" },
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-[var(--font-serif)] mb-8 text-center">
        Portfolio
      </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.id} href="#">
            <Card className="hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="text-base text-[oklch(0.35_0_0)]">{p.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div className="text-xl font-medium">{p.title}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}


