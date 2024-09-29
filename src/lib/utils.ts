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



export function toPastel(colorName: string) {

  const colorNamesToRgb: Record<string, number[]> = {
    blue: [0, 0, 255],
    red: [255, 0, 0],
    green: [0, 128, 0],
    yellow: [255, 255, 0],  
    pink: [255, 192, 203],   
    lime: [0, 255, 0], 
  };

  const rgb = colorNamesToRgb[colorName]; 

  if (!rgb) {
    return null
  }

  const pastelRgb = rgb.map((channel: number) => Math.round((channel + 255) / 2));

  return `rgba(${pastelRgb[0]}, ${pastelRgb[1]}, ${pastelRgb[2]}, 1)`;
}

