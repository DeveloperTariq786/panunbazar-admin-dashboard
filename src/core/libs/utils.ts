import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes efficiently without style conflicts.
 * clsx: Handles conditional classes (e.g., { 'bg-red-500': isActive })
 * twMerge: Ensures the last Tailwind class wins (e.g., 'p-4 p-2' becomes 'p-2')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}