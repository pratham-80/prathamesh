import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const brand = {
  accent: "text-[oklch(0.68_0.19_35)]",
  serif: "font-[var(--font-serif)]",
  sans: "font-[var(--font-sans)]",
}
