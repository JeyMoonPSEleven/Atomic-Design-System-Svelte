import { writable } from 'svelte/store';

export const theme = writable<'light' | 'dark'>('light');

// Función para alternar el tema
export function toggleTheme() {
	theme.update((current) => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		applyTheme(newTheme);
		return newTheme;
	});
}

// Función para aplicar el tema al DOM
export function applyTheme(themeValue: 'light' | 'dark') {
	if (typeof document !== 'undefined') {
		if (themeValue === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
}

// Sincronizar el store con el DOM cuando cambia
if (typeof document !== 'undefined') {
	theme.subscribe((currentTheme) => {
		applyTheme(currentTheme);
	});
}

