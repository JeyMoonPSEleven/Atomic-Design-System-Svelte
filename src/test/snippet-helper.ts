/**
 * Helper para crear snippets válidos en tests
 * En Svelte 5, los snippets son funciones especiales que retornan fragmentos
 */
import type { Snippet } from 'svelte';

export function createTextSnippet(text: string): Snippet {
	// Crear un snippet que renderiza texto
	// En el contexto de testing, esto será manejado por Testing Library
	return (() => {
		// Retornar una función que cuando se ejecute creará el contenido
		const fragment = document.createDocumentFragment();
		const textNode = document.createTextNode(text);
		fragment.appendChild(textNode);
		return fragment;
	}) as unknown as Snippet;
}

