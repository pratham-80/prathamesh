export type Project = {
  id: number
  title: string
  category: "Product" | "Website"
  image: string
  behanceUrl: string
  client?: string
  industry?: string
  service?: string
  date?: string
  images?: string[]
}

export function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const projects: Project[] = [
  { id: 1, title: "Fashion Flip - UX case study", category: "Product", image: "/images/portfolio thumbnails/1. Fashion Flip UX Thumbnail.png", behanceUrl: "https://www.behance.net/gallery/191150939/Fashion-Flip-Part-1-UX-Case-study", industry: "Fashion", client: "Fashion Flip", service: "UX Case Study", date: "2024", images: ["/images/portfolio thumbnails/1. Fashion Flip UX Thumbnail.png"] },
  { id: 2, title: "Fashion Flip - UI case study", category: "Product", image: "/images/portfolio thumbnails/2.Fashion Flip UI Thumbnail.png", behanceUrl: "https://www.behance.net/gallery/191158155/Fashion-Flip-Part-2-UI-Case-study", industry: "Fashion", client: "Fashion Flip", service: "UI Case Study", date: "2024", images: ["/images/portfolio thumbnails/2.Fashion Flip UI Thumbnail.png"] },
  { id: 3, title: "Woof n wishers", category: "Product", image: "/images/portfolio thumbnails/4.Woof and Wiskers thumbnail.png", behanceUrl: "https://www.behance.net/gallery/201143853/Woof-N-Whiskers-UI-UX-Case-Study", industry: "Pet Care", client: "Woof n Whiskers", service: "UI/UX", date: "2024", images: ["/images/portfolio thumbnails/4. Woof and Wiskers thumbnail.png"] },
  { id: 4, title: "Grocery Guru", category: "Product", image: "/images/portfolio thumbnails/3A.Grocery Guru.png", behanceUrl: "https://www.behance.net/gallery/235020807/Grocery-Guru-An-Grocery-Management-App", industry: "Retail", client: "Grocery Guru", service: "Product Design", date: "2025", images: ["/images/portfolio thumbnails/grocery_guru_thumbnail.png"] },
  { id: 5, title: "Wildscape Photography", category: "Website", image: "/images/portfolio thumbnails/3. Wildscape Thumbnail.png", behanceUrl: "https://www.behance.net/gallery/194098871/WildScape-Photography-UI-UX-Case-Study", industry: "Photography", client: "Wildscape", service: "Website", date: "2024", images: ["/images/portfolio thumbnails/wildscape_hero_image.png"] },
  { id: 6, title: "Subsflow", category: "Product", image: "/images/portfolio thumbnails/5.Subsflow thumbnail.png", behanceUrl: "https://www.behance.net/gallery/198837071/SubsFlow-UI-UX-Case-Study", industry: "SaaS", client: "Subsflow", service: "Product", date: "2024" },
  { id: 7, title: "GraMin", category: "Website", image: "/images/portfolio thumbnails/6. Gramin thumbnail.png", behanceUrl: "https://www.behance.net/gallery/220204835/GraMin-Landing-Page-and-Dashboard", industry: "AgriTech", client: "GraMin", service: "Website", date: "2024" },
  { id: 8, title: "Onboarding screen challenge", category: "Product", image: "/images/portfolio thumbnails/7. Onboarding challenge.png", behanceUrl: "https://www.behance.net/gallery/191321625/Onboarding-Screens-UI-Challenge", industry: "UI", client: "Challenge", service: "UI", date: "2024" },
  { id: 9, title: "Shopwise website", category: "Website", image: "/images/portfolio thumbnails/8.Shopwise.png", behanceUrl: "https://www.behance.net/gallery/194058093/Shopwise-UI-UX-Case-Study", industry: "E-commerce", client: "Shopwise", service: "Website", date: "2024" },
  { id: 10, title: "Digicard", category: "Website", image: "/images/portfolio thumbnails/9.Digicard.png", behanceUrl: "https://www.behance.net/gallery/194807027/DigiCard-UI-Case-Study", industry: "Business", client: "DigiCard", service: "Website", date: "2024" },
  { id: 11, title: "Football club landing page", category: "Website", image: "/images/portfolio thumbnails/10.Football Club Landing Page.png", behanceUrl: "https://www.behance.net/gallery/191446077/Football-Club-Landing-Page-UI-Case-Study", industry: "Sports", client: "Football Club", service: "Landing Page", date: "2024" },
  { id: 12, title: "Architecture Thesis competition", category: "Website", image: "/images/portfolio thumbnails/11.Architecture thesis.png", behanceUrl: "https://www.behance.net/gallery/191970439/Architecture-Thesis-Competition-Page-UI-Challenge", industry: "Education", client: "Architecture", service: "Web Page", date: "2023" },
  { id: 13, title: "Website redesign challenge", category: "Website", image: "/images/portfolio thumbnails/12.Website redesign.png", behanceUrl: "https://www.behance.net/gallery/193969031/Website-Redesign-UI", industry: "UI", client: "Challenge", service: "Redesign", date: "2023" },
  // Professional projects shown on the home page
  { id: 101, title: "Vacademy", category: "Product", image: "/images/edtech platforms.png", behanceUrl: "#", industry: "EdTech", client: "Vacademy", service: "Product Design", date: "2024", images: ["/images/edtech platforms.png"] },
  { id: 102, title: "Satvaa", category: "Product", image: "/images/agricultural platforms.png", behanceUrl: "#", industry: "AgriTech", client: "Satvaa", service: "Product Design", date: "2024", images: ["/images/agricultural platforms.png"] },
  { id: 103, title: "Vidyayatan Website", category: "Website", image: "/images/portfolio thumbnails/vidyayatan_thumnail.png", behanceUrl: "#", industry: "Education", client: "Vidyayatan", service: "Website", date: "2024", images: ["/images/portfolio thumbnails/vidyayatan_thumnail.png"] },
  { id: 104, title: "Krazy Kreators Website", category: "Website", image: "/images/portfolio thumbnails/krazy_kreators.png", behanceUrl: "#", industry: "Agency", client: "Krazy Kreators", service: "Website", date: "2024", images: ["/images/portfolio thumbnails/krazy_kreators.png"] },
  { id: 105, title: "Fashion Flip", category: "Product", image: "/images/fashion platforms.png", behanceUrl: "#", industry: "Fashion", client: "Fashion Flip", service: "Product Design", date: "2024", images: ["/images/fashion platforms.png"] },
  { id: 106, title: "Grocery Guru", category: "Product", image: "/images/portfolio thumbnails/grocery_guru_thumbnail.png", behanceUrl: "#", industry: "Retail", client: "Grocery Guru", service: "Product Design", date: "2025", images: ["/images/portfolio thumbnails/grocery_guru_thumbnail.png"] },
  { id: 107, title: "Woof n Wiskers", category: "Product", image: "/images/portfolio thumbnails/4. Woof and Wiskers thumbnail.png", behanceUrl: "https://www.behance.net/gallery/201143853/Woof-N-Whiskers-UI-UX-Case-Study", industry: "Pet Care", client: "Woof n Wiskers", service: "UI/UX", date: "2024", images: ["/images/portfolio thumbnails/4. Woof and Wiskers thumbnail.png"] },
  { id: 108, title: "Wildscape", category: "Website", image: "/images/portfolio thumbnails/3. Wildscape Thumbnail.png", behanceUrl: "#", industry: "Photography", client: "Wildscape", service: "Website", date: "2024", images: ["/images/portfolio thumbnails/3. Wildscape Thumbnail.png"] },
];

export function getProjectBySlug(slug: string) {
  return projects.find(p => toSlug(p.title) === slug);
}


