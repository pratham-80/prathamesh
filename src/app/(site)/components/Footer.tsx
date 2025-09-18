import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[oklch(0.9_0_0)]">
      <div className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between text-sm text-[oklch(0.35_0_0)]">
        <p>© {new Date().getFullYear()} Prathamesh Ingale</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/prathamesh-ingale/" target="_blank" rel="noreferrer" className="hover:text-[oklch(0.68_0.19_35)] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://www.behance.net/prathameshingale" target="_blank" rel="noreferrer" className="hover:text-[oklch(0.68_0.19_35)] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h5.458c-.105-1.547-1.077-2.219-2.477-2.219-1.807 0-2.89 1.107-2.981 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/i.prathammm/" target="_blank" rel="noreferrer" className="hover:text-[oklch(0.68_0.19_35)] transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}



