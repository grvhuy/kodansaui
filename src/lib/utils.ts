import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getColorFromString(str: string) {
  const hash = Array.from(str).reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0)
  const r = (hash >> 16) & 255;
  const g = (hash >> 8) & 255;
  const b = (hash >> 4) & 255;
  return `rgba(${Math.abs(r)}, ${Math.abs(g)}, ${Math.abs(b)}, 0.7)`;
}