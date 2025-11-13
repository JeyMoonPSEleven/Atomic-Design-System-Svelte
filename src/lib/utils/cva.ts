import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';

// Helper para combinar clases con tailwind-merge
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Re-exportar para uso general
export { cva, type VariantProps, twMerge };

