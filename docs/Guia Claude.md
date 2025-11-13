Después de analizar tu repositorio, tengo recomendaciones concretas para mejorar el showcase de componentes. Aquí está mi análisis:

## 🎯 Problemas Actuales del Showcase

1. **Una sola página larga y abrumadora** - Difícil de navegar
2. **Sin código copiable** - Los usuarios no pueden ver cómo usar los componentes
3. **Sin navegación contextual** - No hay sidebar o índice
4. **Sin búsqueda** - Imposible encontrar componentes rápido
5. **Sin variantes visuales claras** - Difícil comparar estados
6. **Sin props/API documentation** - No se documenta qué propiedades acepta cada componente
7. **Sin ejemplos interactivos** - Los usuarios no pueden jugar con las props
8. **Sin modo de código/vista** - No se puede alternar entre ver el resultado y el código

## ✨ Propuestas de Mejora

### 1. **Estructura de Navegación Mejorada**

```
/showcase
  ├── Sidebar con categorías colapsables
  │   ├── 🔴 Atoms (25)
  │   ├── 🟠 Molecules (20)
  │   ├── 🟢 Organisms (18)
  │   └── 🔵 Templates (11)
  ├── Barra de búsqueda con filtros
  └── Contenido principal con tabs
```

### 2. **Layout de Componente Individual**

Cada componente debería tener:

```svelte
<ComponentShowcase>
  <!-- Header -->
  <ComponentHeader 
    name="Button" 
    category="Atoms"
    description="Botón con variantes..."
  />
  
  <!-- Tabs -->
  <Tabs>
    <Tab label="Preview">
      <!-- Variantes interactivas -->
    </Tab>
    <Tab label="Code">
      <!-- Código copiable -->
    </Tab>
    <Tab label="Props">
      <!-- Tabla de propiedades -->
    </Tab>
    <Tab label="Examples">
      <!-- Casos de uso reales -->
    </Tab>
  </Tabs>
</ComponentShowcase>
```

### 3. **Visualización de Variantes en Grid**

```svelte
<VariantsGrid>
  <VariantCard title="Primary">
    <Button intent="primary">Click me</Button>
    <CopyCodeButton code={`<Button intent="primary">Click me</Button>`} />
  </VariantCard>
  
  <VariantCard title="Secondary">
    <Button intent="secondary">Click me</Button>
    <CopyCodeButton code={`<Button intent="secondary">Click me</Button>`} />
  </VariantCard>
</VariantsGrid>
```

## 📋 Instrucciones para el Agente de CursorAhora te doy un **resumen ejecutivo** de las mejoras clave:

## 🎯 Principales Problemas Identificados

1. **Navegación**: Todo en una página larga sin sidebar ni búsqueda
2. **Código no copiable**: No hay manera fácil de copiar ejemplos
3. **Props sin documentar**: No se muestra qué propiedades acepta cada componente
4. **Sin comparación visual**: Difícil comparar variantes lado a lado
5. **Sin ejemplos de uso**: No hay casos de uso reales

## ✨ Solución Propuesta (3 Mejoras Clave)

### 1. **Layout con Sidebar** 
```
┌──────────┬─────────────────┐
│ Sidebar  │   Contenido     │
│ ├─ 🔴 Át │   Component     │
│ │  ├ But │   ├ Preview     │
│ │  └ Inp │   ├ Code        │
│ ├─ 🟠 Mol│   └ Props       │
│ └─ 🟢 Org│                 │
└──────────┴─────────────────┘
```

### 2. **VariantsGrid** - Componentes en tarjetas con código
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Primary  │ │Secondary │ │  Danger  │
│ [Button] │ │ [Button] │ │ [Button] │
│ <code> 📋│ │ <code> 📋│ │ <code> 📋│
└──────────┘ └──────────┘ └──────────┘
```

### 3. **PropsTable** - Documentación clara de API
```
| Prop    | Type      | Default   | Description        |
|---------|-----------|-----------|-------------------|
| intent  | string    | 'primary' | Variante visual   |
| size    | string    | 'md'      | Tamaño del botón  |
```

## 🚀 Plan de Acción para el Agente

He creado un documento completo con:
- ✅ Código de ejemplo para cada componente nuevo
- ✅ Estructura de archivos clara
- ✅ Orden de implementación (5 días)
- ✅ Referencia visual ASCII art
- ✅ Checklist de tareas

**Próximos pasos sugeridos**:
1. Implementar el layout con sidebar primero
2. Crear 2-3 componentes de showcase (VariantsGrid, PropsTable)
3. Refactorizar Button como ejemplo piloto
4. Replicar el patrón en 5-10 componentes clave
5. Pulir diseño y UX

¿Quieres que profundice en alguna parte específica o que cree componentes adicionales de ejemplo?

# 🎨 Guía de Mejoras para el Showcase de Componentes

## 🎯 Objetivos
Transformar el showcase actual en una biblioteca de componentes profesional, fácil de navegar y con documentación clara.

---

## 📐 FASE 1: Estructura y Navegación

### 1.1 Crear Layout con Sidebar
**Ubicación**: `src/routes/showcase/+layout.svelte`

```svelte
<script>
  import { SearchBar } from '$lib/components/02-molecules';
  import ComponentSidebar from './ComponentSidebar.svelte';
  
  let searchQuery = $state('');
  let { children } = $props();
</script>

<div class="flex min-h-screen bg-surface-page">
  <!-- Sidebar fijo -->
  <aside class="w-64 border-r border-border-default sticky top-0 h-screen overflow-y-auto">
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Componentes</h1>
      <SearchBar bind:value={searchQuery} placeholder="Buscar..." />
      <ComponentSidebar {searchQuery} />
    </div>
  </aside>
  
  <!-- Contenido principal -->
  <main class="flex-1 p-8">
    {@render children()}
  </main>
</div>
```

**Características**:
- ✅ Sidebar fijo con scroll independiente
- ✅ Búsqueda de componentes
- ✅ Categorías colapsables
- ✅ Contador de componentes por categoría

### 1.2 Crear ComponentSidebar.svelte
**Ubicación**: `src/routes/showcase/ComponentSidebar.svelte`

```svelte
<script>
  let { searchQuery = '' } = $props();
  
  const categories = [
    {
      name: 'Átomos',
      icon: '🔴',
      items: [
        { name: 'Button', href: '/showcase/atoms/button' },
        { name: 'Input', href: '/showcase/atoms/input' },
        // ... más átomos
      ]
    },
    {
      name: 'Moléculas',
      icon: '🟠',
      items: [
        { name: 'Card', href: '/showcase/molecules/card' },
        // ... más moléculas
      ]
    }
  ];
  
  let openCategories = $state(new Set(['Átomos']));
</script>

<nav class="space-y-2">
  {#each categories as category}
    <div>
      <button 
        class="flex items-center justify-between w-full p-2 hover:bg-surface-tertiary rounded"
        onclick={() => {
          if (openCategories.has(category.name)) {
            openCategories.delete(category.name);
          } else {
            openCategories.add(category.name);
          }
          openCategories = new Set(openCategories);
        }}
      >
        <span class="flex items-center gap-2">
          <span>{category.icon}</span>
          <span class="font-medium">{category.name}</span>
        </span>
        <span class="text-xs text-text-muted">{category.items.length}</span>
      </button>
      
      {#if openCategories.has(category.name)}
        <ul class="ml-4 mt-1 space-y-1">
          {#each category.items as item}
            <li>
              <a 
                href={item.href}
                class="block p-2 text-sm hover:bg-surface-tertiary rounded"
              >
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</nav>
```

---

## 🎨 FASE 2: Componentes de Visualización

### 2.1 Crear ComponentShowcase.svelte
**Ubicación**: `src/lib/components/showcase/ComponentShowcase.svelte`

```svelte
<script>
  import { Tabs } from '$lib/components/02-molecules';
  import { Badge, Heading, Text } from '$lib/components/01-atoms';
  
  type Props = {
    name: string;
    category: 'Atoms' | 'Molecules' | 'Organisms' | 'Templates';
    description: string;
    preview: import('svelte').Snippet;
    code?: string;
    props?: Array<{name: string, type: string, default?: string, description: string}>;
    examples?: import('svelte').Snippet;
  };
  
  let { name, category, description, preview, code, props, examples } = $props();
</script>

<div class="space-y-6">
  <!-- Header -->
  <div class="border-b border-border-default pb-4">
    <div class="flex items-center gap-2 mb-2">
      <Badge variant="secondary">{category}</Badge>
      <Heading level="h1">{name}</Heading>
    </div>
    <Text variant="muted">{description}</Text>
  </div>
  
  <!-- Tabs -->
  <Tabs tabs={[
    { 
      label: 'Preview', 
      content: () => ({}) // snippet con preview
    },
    { 
      label: 'Code', 
      content: () => ({}) // snippet con código
    },
    { 
      label: 'Props', 
      content: () => ({}) // snippet con tabla de props
    }
  ]} />
</div>
```

### 2.2 Crear VariantsGrid.svelte
**Ubicación**: `src/lib/components/showcase/VariantsGrid.svelte`

```svelte
<script>
  type Variant = {
    title: string;
    component: import('svelte').Snippet;
    code: string;
  };
  
  type Props = {
    variants: Variant[];
  };
  
  let { variants } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each variants as variant}
    <div class="border border-border-default rounded-lg p-4 space-y-3">
      <!-- Título -->
      <div class="font-medium text-sm text-text-muted">{variant.title}</div>
      
      <!-- Preview -->
      <div class="flex items-center justify-center p-6 bg-surface-tertiary rounded">
        {@render variant.component()}
      </div>
      
      <!-- Código -->
      <div class="relative">
        <pre class="text-xs bg-surface-card p-3 rounded overflow-x-auto"><code>{variant.code}</code></pre>
        <button 
          class="absolute top-2 right-2 p-1 hover:bg-surface-tertiary rounded"
          onclick={() => navigator.clipboard.writeText(variant.code)}
        >
          📋
        </button>
      </div>
    </div>
  {/each}
</div>
```

### 2.3 Crear PropsTable.svelte
**Ubicación**: `src/lib/components/showcase/PropsTable.svelte`

```svelte
<script>
  type Prop = {
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    description: string;
  };
  
  type Props = {
    props: Prop[];
  };
  
  let { props } = $props();
</script>

<div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-border-default">
    <thead>
      <tr class="bg-surface-header">
        <th class="px-4 py-2 text-left text-xs font-medium uppercase">Prop</th>
        <th class="px-4 py-2 text-left text-xs font-medium uppercase">Tipo</th>
        <th class="px-4 py-2 text-left text-xs font-medium uppercase">Default</th>
        <th class="px-4 py-2 text-left text-xs font-medium uppercase">Descripción</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border-default">
      {#each props as prop}
        <tr>
          <td class="px-4 py-2 font-mono text-sm">
            {prop.name}
            {#if prop.required}
              <span class="text-danger">*</span>
            {/if}
          </td>
          <td class="px-4 py-2 font-mono text-xs text-text-muted">{prop.type}</td>
          <td class="px-4 py-2 font-mono text-xs">{prop.default || '-'}</td>
          <td class="px-4 py-2 text-sm">{prop.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
```

---

## 🎪 FASE 3: Ejemplo de Página de Componente

### 3.1 Actualizar /showcase/atoms/button/+page.svelte

```svelte
<script>
  import ComponentShowcase from '$lib/components/showcase/ComponentShowcase.svelte';
  import VariantsGrid from '$lib/components/showcase/VariantsGrid.svelte';
  import PropsTable from '$lib/components/showcase/PropsTable.svelte';
  import { Button } from '$lib/components/01-atoms';
  
  const variants = [
    {
      title: 'Primary',
      component: () => {},
      code: '<Button intent="primary">Click me</Button>'
    },
    {
      title: 'Secondary',
      component: () => {},
      code: '<Button intent="secondary">Click me</Button>'
    },
    {
      title: 'Danger',
      component: () => {},
      code: '<Button intent="danger">Delete</Button>'
    },
    {
      title: 'Ghost',
      component: () => {},
      code: '<Button intent="ghost">Cancel</Button>'
    },
    {
      title: 'Small',
      component: () => {},
      code: '<Button size="sm">Small</Button>'
    },
    {
      title: 'Large',
      component: () => {},
      code: '<Button size="lg">Large</Button>'
    }
  ];
  
  const props = [
    {
      name: 'intent',
      type: "'primary' | 'secondary' | 'danger' | 'ghost'",
      default: "'primary'",
      description: 'Variante visual del botón'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'Tamaño del botón'
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Deshabilita el botón'
    }
  ];
</script>

<ComponentShowcase
  name="Button"
  category="Atoms"
  description="Componente de botón versátil con múltiples variantes, tamaños y soporte para iconos."
>
  {#snippet preview()}
    <div class="space-y-8">
      <section>
        <h3 class="text-lg font-semibold mb-4">Variantes de Intent</h3>
        <VariantsGrid variants={variants.slice(0, 4)} />
      </section>
      
      <section>
        <h3 class="text-lg font-semibold mb-4">Tamaños</h3>
        <VariantsGrid variants={variants.slice(4)} />
      </section>
    </div>
  {/snippet}
  
  {#snippet propsDoc()}
    <PropsTable {props} />
  {/snippet}
  
  {#snippet examples()}
    <div class="space-y-6">
      <div>
        <h4 class="font-semibold mb-3">Formulario de Login</h4>
        <div class="max-w-md p-6 border border-border-default rounded-lg">
          <div class="space-y-4">
            <input type="email" placeholder="Email" class="w-full px-4 py-2 border rounded" />
            <input type="password" placeholder="Password" class="w-full px-4 py-2 border rounded" />
            <div class="flex gap-2">
              <Button intent="primary" class="flex-1">Iniciar sesión</Button>
              <Button intent="ghost">Cancelar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</ComponentShowcase>
```

---

## 🎯 FASE 4: Mejoras de UX

### 4.1 Agregar Modo Oscuro Toggle en Header
```svelte
<header class="sticky top-0 z-10 bg-surface-card border-b border-border-default p-4">
  <div class="flex items-center justify-between">
    <h1>Component Showcase</h1>
    <Button intent="ghost" onclick={toggleTheme}>
      {$theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  </div>
</header>
```

### 4.2 Agregar Copy to Clipboard
Todos los bloques de código deben tener un botón de copiar:
```svelte
<button onclick={() => navigator.clipboard.writeText(code)}>
  📋 Copy
</button>
```

### 4.3 Agregar Breadcrumbs
```svelte
<Breadcrumb items={[
  { label: 'Showcase', href: '/showcase' },
  { label: 'Atoms', href: '/showcase/atoms' },
  { label: 'Button' }
]} />
```

---

## 📊 FASE 5: Página de Inicio del Showcase

### 5.1 Crear /showcase/+page.svelte (Landing)

```svelte
<script>
  import { Card, SearchBar } from '$lib/components/02-molecules';
  import { Heading, Text, Badge } from '$lib/components/01-atoms';
  
  let searchQuery = $state('');
  
  const stats = [
    { label: 'Átomos', count: 25, color: 'red' },
    { label: 'Moléculas', count: 20, color: 'orange' },
    { label: 'Organismos', count: 18, color: 'green' },
    { label: 'Templates', count: 11, color: 'blue' }
  ];
</script>

<div class="max-w-6xl mx-auto space-y-12">
  <!-- Hero -->
  <section class="text-center py-12">
    <Heading level="h1" class="mb-4">Component Showcase</Heading>
    <Text size="lg" class="mb-8">
      Explora {stats.reduce((acc, s) => acc + s.count, 0)} componentes organizados en Atomic Design
    </Text>
    <div class="max-w-md mx-auto">
      <SearchBar bind:value={searchQuery} placeholder="Buscar componentes..." />
    </div>
  </section>
  
  <!-- Stats Grid -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each stats as stat}
      <Card class="text-center">
        <div class="text-4xl font-bold text-primary">{stat.count}</div>
        <div class="text-text-muted mt-2">{stat.label}</div>
      </Card>
    {/each}
  </section>
  
  <!-- Quick Links -->
  <section>
    <Heading level="h2" class="mb-6">Categorías</Heading>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        {#snippet header()}
          <div class="flex items-center gap-2">
            <span>🔴</span>
            <Heading level="h3">Átomos</Heading>
          </div>
        {/snippet}
        {#snippet children()}
          <Text class="mb-4">
            Componentes básicos e indivisibles: Button, Input, Badge, etc.
          </Text>
          <a href="/showcase/atoms" class="text-primary">
            Ver átomos →
          </a>
        {/snippet}
      </Card>
      
      <!-- Repetir para otras categorías -->
    </div>
  </section>
</div>
```

---

## ✅ Checklist de Implementación

### Estructura
- [ ] Crear `src/routes/showcase/+layout.svelte` con sidebar
- [ ] Crear `ComponentSidebar.svelte`
- [ ] Actualizar páginas de categorías (atoms, molecules, organisms)

### Componentes de Showcase
- [ ] Crear `ComponentShowcase.svelte`
- [ ] Crear `VariantsGrid.svelte`
- [ ] Crear `PropsTable.svelte`
- [ ] Crear `CodeBlock.svelte` con copy button

### Páginas de Componentes Individuales
- [ ] Refactorizar `/showcase/atoms/button/+page.svelte`
- [ ] Aplicar el mismo patrón a otros 5-10 componentes clave
- [ ] Documentar props de cada componente

### UX Improvements
- [ ] Agregar búsqueda funcional
- [ ] Agregar navegación con teclado (⌘K)
- [ ] Agregar copy to clipboard en todos los códigos
- [ ] Agregar breadcrumbs
- [ ] Agregar links de navegación prev/next

### Documentación
- [ ] Agregar ejemplos de uso real para cada componente
- [ ] Agregar notas de accesibilidad
- [ ] Agregar mejores prácticas

---

## 🎨 Referencia Visual

El showcase debería parecerse a:

```
┌─────────────────────────────────────────────────────────┐
│  [🏠 Logo]               [🔍 Search]        [🌙 Theme] │
├─────────────┬───────────────────────────────────────────┤
│             │                                           │
│  [Search]   │  Button                    [Atoms]       │
│             │  ─────────────────────────────────       │
│  🔴 Átomos  │  Componente de botón versátil...        │
│  ▼          │                                           │
│  • Button   │  [Preview] [Code] [Props] [Examples]    │
│  • Input    │                                           │
│  • Badge    │  Variantes de Intent                     │
│             │  ┌──────┐ ┌──────┐ ┌──────┐             │
│  🟠 Mols    │  │ Prim │ │ Sec  │ │ Dang │             │
│  ▶          │  └──────┘ └──────┘ └──────┘             │
│             │  <code>              [📋]                │
│             │                                           │
│             │  Tamaños                                  │
│             │  ┌──────┐ ┌──────┐                       │
│             │  │ Sm   │ │ Lg   │                       │
│             │  └──────┘ └──────┘                       │
│             │                                           │
└─────────────┴───────────────────────────────────────────┘
```

---

## 🚀 Orden de Implementación Recomendado

1. **Día 1**: Crear estructura base (layout con sidebar)
2. **Día 2**: Crear componentes de showcase (VariantsGrid, PropsTable)
3. **Día 3**: Refactorizar 5 componentes clave (Button, Input, Card, Modal, Table)
4. **Día 4**: Agregar búsqueda y navegación mejorada
5. **Día 5**: Pulir diseño y agregar animaciones

---

## 💡 Tips Adicionales

- **Inspiración**: Revisa [shadcn/ui](https://ui.shadcn.com), [Ant Design](https://ant.design), [Chakra UI](https://chakra-ui.com)
- **Colores**: Usa badges de colores para diferenciar categorías
- **Animaciones**: Agrega transiciones suaves al cambiar entre tabs
- **Mobile**: Asegúrate que el sidebar sea colapsable en móvil
- **Performance**: Lazy load componentes pesados