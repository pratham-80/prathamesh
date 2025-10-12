import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const brand = {
  accent: "text-primary",
  serif: "font-serif",
  sans: "font-sans",
}
