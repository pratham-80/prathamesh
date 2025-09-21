import dynamic from "next/dynamic";

// Lazy load the portfolio grid component
const LazyPortfolioGrid = dynamic(() => import("../(site)/components/LazyPortfolioGrid"), {
  loading: () => (
    <div className="space-y-8">
      {/* Loading skeleton for filter buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <div className="h-10 w-16 bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="h-10 w-20 bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="h-10 w-20 bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
      
      {/* Loading skeleton for project grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm">
            <div className="aspect-[4/3] bg-gray-200 animate-pulse rounded-t-lg"></div>
            <div className="p-6 space-y-3">
              <div className="h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 w-16 bg-gray-200 animate-pulse rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  ssr: true
});

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-[var(--font-serif)] leading-[1.2] mb-8 text-center">
        Portfolio
      </h1>
      
      <LazyPortfolioGrid />
    </main>
  );
}


