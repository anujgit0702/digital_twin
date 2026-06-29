// Shared utility functions used across the portfolio

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges Tailwind classes safely, resolving conflicts (e.g. p-2 + p-4 → p-4)
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

// Formats a year string or "Present" for display
export const formatDate = (date: string): string => date;
