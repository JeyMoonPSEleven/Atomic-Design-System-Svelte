# Prompt: Crear Componente Atomo

Actúa como un experto en Svelte 5 y Atomic Design.

## Tareas:
1. Crea un componente atomo en `src/lib/components/01-atoms/`
2. Usa Svelte 5 runes ($props, $state, $derived)
3. Define variantes con CVA en archivo separado
4. Usa tokens semánticos de Tailwind
5. Añade tipos TypeScript
6. Exporta en `index.ts`
7. Crea archivo de test

## Estructura requerida:
- Componente.svelte
- Componente.variants.ts (opcional, si usa CVA)
- Componente.test.ts
- Export en index.ts

## Ejemplo de uso:
```svelte
<NewComponent size="md" variant="primary">
  Contenido
</NewComponent>
```

## Reglas críticas:
- NUNCA usar `@apply` en bloques `<style>`
- SIEMPRE usar tokens semánticos (ej: `bg-primary`, `text-text-default`)
- Usar `$props()` con desestructuración y valores por defecto
- Aceptar prop `class` que se fusiona con `twMerge`
- Usar `{...rest}` para pasar `$$restProps` al elemento DOM raíz

