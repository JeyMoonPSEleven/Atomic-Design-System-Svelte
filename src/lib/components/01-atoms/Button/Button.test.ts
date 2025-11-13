import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from './Button.svelte';
import type { Snippet } from 'svelte';

// Helper para crear snippets en tests
// En Svelte 5, los snippets son funciones especiales
function createTextSnippet(text: string): Snippet {
	// Crear un snippet que cuando se renderice muestre el texto
	// Testing Library manejará el renderizado
	return (() => {
		const fragment = document.createDocumentFragment();
		const textNode = document.createTextNode(text);
		fragment.appendChild(textNode);
		return fragment;
	}) as unknown as Snippet;
}

describe('Button', () => {
	it('renders button element', () => {
		// Nota: Los snippets de Svelte 5 son difíciles de mockear en tests
		// Verificamos que el componente se renderiza correctamente
		const { container } = render(Button, {
			props: {
				intent: 'primary',
				size: 'md',
				children: createTextSnippet('Click me')
			}
		});
		const button = container.querySelector('button');
		expect(button).toBeInTheDocument();
		expect(button?.tagName).toBe('BUTTON');
	});

	it('applies correct variant classes', () => {
		const { container } = render(Button, {
			props: {
				intent: 'primary',
				size: 'md',
				children: createTextSnippet('Primary')
			}
		});
		const button = container.querySelector('button');
		expect(button?.className).toContain('bg-primary');
		expect(button?.className).toContain('text-text-on-primary');
	});

	it('applies correct size classes', () => {
		const { container } = render(Button, {
			props: {
				size: 'lg',
				intent: 'primary',
				children: createTextSnippet('Large')
			}
		});
		const button = container.querySelector('button');
		expect(button?.className).toContain('h-12');
		expect(button?.className).toContain('px-6');
	});

	it('handles disabled state', () => {
		const { container } = render(Button, {
			props: {
				disabled: true,
				intent: 'primary',
				children: createTextSnippet('Disabled')
			}
		});
		const button = container.querySelector('button');
		expect(button?.hasAttribute('disabled')).toBe(true);
	});
});

