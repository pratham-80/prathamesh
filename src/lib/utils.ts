import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const brand = {
  accent: "text-[#1E65ED]",
  serif: "font-[var(--font-serif)]",
  sans: "font-[var(--font-sans)]",
}
