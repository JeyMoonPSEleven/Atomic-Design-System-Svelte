# Prompt: Crear Componente Molécula

Actúa como un experto en Svelte 5 y Atomic Design.

## Tareas:
1. Crea un componente molécula en `src/lib/components/02-molecules/`
2. Solo puede importar de `01-atoms`
3. Usa Svelte 5 runes ($props, $state, $derived)
4. Define variantes con CVA si es necesario
5. Prefiere slots sobre props para composición de contenido
6. Usa tokens semánticos de Tailwind
7. Añade tipos TypeScript
8. Exporta en `index.ts`

## Estructura requerida:
- Componente.svelte
- Componente.variants.ts (opcional, si usa CVA)
- Componente.test.ts
- Export en index.ts

## Ejemplo de uso:
```svelte
<NewMolecule variant="primary">
  {#snippet header()}
    <Heading>Título</Heading>
  {/snippet}
  {#snippet content()}
    <Text>Contenido</Text>
  {/snippet}
</NewMolecule>
```

## Reglas críticas:
- NUNCA importar de niveles superiores (organismos, templates)
- Preferir slots (Snippet) sobre props para contenido flexible
- Usar tokens semánticos, nunca valores literales
- Aceptar prop `class` que se fusiona con `twMerge`

