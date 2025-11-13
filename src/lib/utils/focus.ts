import { tick } from 'svelte';

/**
 * Hook para gestión de foco y accesibilidad
 * Útil para componentes que necesitan manejar el foco programáticamente
 */
export function useFocus() {
    let element = $state<HTMLElement | null>(null);

    async function focus() {
        await tick();
        element?.focus();
    }

    function blur() {
        element?.blur();
    }

    return {
        get ref() {
            return element;
        },
        set ref(el: HTMLElement | null) {
            element = el;
        },
        focus,
        blur
    };
}

/**
 * Utilidad para atrapar el foco dentro de un contenedor
 * Útil para modales, dropdowns, etc.
 */
export function trapFocus(container: HTMLElement) {
    const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTabKey(e: KeyboardEvent) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
            }
        }
    }

    container.addEventListener('keydown', handleTabKey);

    return {
        destroy() {
            container.removeEventListener('keydown', handleTabKey);
        }
    };
}

