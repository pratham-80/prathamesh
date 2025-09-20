"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const projects = [
  { 
    id: 1, 
    title: "Fashion Flip - UX case study", 
    category: "Product", 
    image: "/images/portfolio thumbnails/1. Fashion Flip UX Thumbnail.png",
    behanceUrl: "https://www.behance.net/gallery/191150939/Fashion-Flip-Part-1-UX-Case-study"
  },
  { 
    id: 2, 
    title: "Fashion Flip - UI case study", 
    category: "Product", 
    image: "/images/portfolio thumbnails/2.Fashion Flip UI Thumbnail.png",
    behanceUrl: "https://www.behance.net/gallery/191158155/Fashion-Flip-Part-2-UI-Case-study"
  },
  { 
    id: 3, 
    title: "Woof n wishers", 
    category: "Product", 
    image: "/images/portfolio thumbnails/4.Woof and Wiskers thumbnail.png",
    behanceUrl: "https://www.behance.net/gallery/201143853/Woof-N-Whiskers-UI-UX-Case-Study"
  },
  { 
    id: 4, 
    title: "Grocery Guru", 
    category: "Product", 
    image: "/images/portfolio thumbnails/3A.Grocery Guru.png",
    behanceUrl: "https://www.behance.net/gallery/235020807/Grocery-Guru-An-Grocery-Management-App"
  },
  { 
    id: 5, 
    title: "Wildscape Photography", 
    category: "Website", 
    image: "/images/portfolio thumbnails/3. Wildscape Thumbnail.png",
    behanceUrl: "https://www.behance.net/gallery/194098871/WildScape-Photography-UI-UX-Case-Study"
  },
  { 
    id: 6, 
    title: "Subsflow", 
    category: "Product", 
    image: "/images/portfolio thumbnails/5.Subsflow thumbnail.png",
    behanceUrl: "https://www.behance.net/gallery/198837071/SubsFlow-UI-UX-Case-Study"
  },
  { 
    id: 7, 
    title: "GraMin", 
    category: "Website", 
    image: "/images/portfolio thumbnails/6. Gramin thumbnail.png",
    behanceUrl: "https://www.behance.net/gallery/220204835/GraMin-Landing-Page-and-Dashboard"
  },
  { 
    id: 8, 
    title: "Onboarding screen challenge", 
    category: "Product", 
    image: "/images/portfolio thumbnails/7. Onboarding challenge.png",
    behanceUrl: "https://www.behance.net/gallery/191321625/Onboarding-Screens-UI-Challenge"
  },
  { 
    id: 9, 
    title: "Shopwise website", 
    category: "Website", 
    image: "/images/portfolio thumbnails/8.Shopwise.png",
    behanceUrl: "https://www.behance.net/gallery/194058093/Shopwise-UI-UX-Case-Study"
  },
  { 
    id: 10, 
    title: "Digicard", 
    category: "Website",
    image: "/images/portfolio thumbnails/9.Digicard.png",
    behanceUrl: "https://www.behance.net/gallery/194807027/DigiCard-UI-Case-Study"
  },
  { 
    id: 11, 
    title: "Football club landing page", 
    category: "Website", 
    image: "/images/portfolio thumbnails/10.Football Club Landing Page.png",
    behanceUrl: "https://www.behance.net/gallery/191446077/Football-Club-Landing-Page-UI-Case-Study"
  },
  { 
    id: 12, 
    title: "Architecture Thesis competition", 
    category: "Website", 
    image: "/images/portfolio thumbnails/11.Architecture thesis.png",
    behanceUrl: "https://www.behance.net/gallery/191970439/Architecture-Thesis-Competition-Page-UI-Challenge"
  },
  { 
    id: 13, 
    title: "Website redesign challenge", 
    category: "Website", 
    image: "/images/portfolio thumbnails/12.Website redesign.png",
    behanceUrl: "https://www.behance.net/gallery/193969031/Website-Redesign-UI"
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-[var(--font-serif)] leading-[1.2] mb-8 text-center">
        Portfolio
      </h1>
      
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-6 py-2 rounded-full font-[var(--font-sans)] font-medium leading-[1.5] transition-all duration-300 ${
            activeFilter === "All"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("Product")}
          className={`px-6 py-2 rounded-full font-[var(--font-sans)] font-medium leading-[1.5] transition-all duration-300 ${
            activeFilter === "Product"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Product
        </button>
        <button
          onClick={() => setActiveFilter("Website")}
          className={`px-6 py-2 rounded-full font-[var(--font-sans)] font-medium leading-[1.5] transition-all duration-300 ${
            activeFilter === "Website"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Website
        </button>
      </div>
      
      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer h-full flex flex-col">
              <CardContent className="flex flex-col flex-1 space-y-4 p-6">
                <div className="aspect-[4/3] relative overflow-hidden rounded-md group-hover:scale-105 transition-transform duration-300">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="text-xl font-[var(--font-sans)] font-semibold leading-[1.2] group-hover:text-orange-500 transition-colors duration-300 flex-1">
                  {project.title}
                </div>
                <div className="flex justify-start">
                  <span className={`px-3 py-1 rounded-full text-xs font-[var(--font-sans)] font-medium leading-[1.5] ${
                    project.category === "Product" 
                      ? "bg-amber-100 text-amber-700" 
                      : "bg-teal-100 text-teal-700"
                  }`}>
                    {project.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}


