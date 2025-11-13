# Sistema de Diseño Atomic Design con SvelteKit

Un sistema de diseño profesional construido con **SvelteKit**, **Tailwind CSS v4** y la metodología **Atomic Design**.

## 🚀 Características

- ✅ **Svelte 5** con Runes (sintaxis moderna)
- ✅ **Tailwind CSS v4** con arquitectura CSS-first
- ✅ **Atomic Design** - Estructura de componentes escalable
- ✅ **Sistema de Tokens** - Dos niveles (Primitivos y Semánticos)
- ✅ **Modo Oscuro** - Implementado con estrategia de clase
- ✅ **CVA + tailwind-merge** - Patrón para variantes de componentes
- ✅ **MCP de Svelte** - Configuración para desarrollo asistido por IA

> **Nota:** Este proyecto NO utiliza Histoire ni herramientas de catálogo de componentes. Los componentes se prueban directamente en las páginas de la aplicación.

## 📁 Estructura del Proyecto

```
src/
├── lib/
│   ├── components/
│   │   ├── 01-atoms/          # Componentes básicos (Button, Input)
│   │   ├── 02-molecules/      # Composiciones de átomos (SearchForm)
│   │   ├── 03-organisms/      # Secciones complejas (Header, Footer)
│   │   └── 04-templates/      # Estructuras de página (ArticleLayout)
│   ├── utils/
│   │   └── cva.ts            # Helper para variantes de componentes
│   └── stores/
│       └── theme.ts          # Store para gestión de tema
├── routes/                    # Páginas de SvelteKit
└── app.css                   # Tokens de diseño y estilos globales
```

## 🎨 Sistema de Tokens

El sistema utiliza una arquitectura de dos niveles:

### Nivel 1: Tokens Primitivos
Valores brutos e inmutables (colores, espaciado, tipografía).

### Nivel 2: Tokens Semánticos
Tokens que consumen los componentes (ej. `bg-primary`, `text-text-default`).

El modo oscuro se implementa redefiniendo únicamente los tokens semánticos.

## 🛠️ Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build
```

## 📚 Uso de Componentes

### Átomos

```svelte
<script>
  import { Button, Input } from '$lib/components/01-atoms';
</script>

<Button intent="primary" size="md">Click me</Button>
<Input placeholder="Escribe algo..." variant="default" />
```

### Moléculas

```svelte
<script>
  import { SearchForm } from '$lib/components/02-molecules';
  import { Input } from '$lib/components/01-atoms';
</script>

<SearchForm>
  <Input type="search" placeholder="Buscar..." />
</SearchForm>
```

### Organismos

```svelte
<script>
  import { Header } from '$lib/components/03-organisms';
</script>

<Header>
  <svelte:fragment slot="logo">
    <a href="/">Logo</a>
  </svelte:fragment>
  <svelte:fragment slot="navigation">
    <nav>...</nav>
  </svelte:fragment>
</Header>
```

## 🎯 Principios de Diseño

1. **Nunca usar @apply** - Solo clases de utilidad de Tailwind
2. **Usar tokens semánticos** - Nunca valores literales de color
3. **CVA para variantes** - Todos los componentes con variantes usan CVA
4. **Composición con slots** - Moléculas y Organismos prefieren slots sobre props
5. **Jerarquía Atomic** - Los componentes solo importan de niveles inferiores

## 🔧 Configuración de Cursor IDE

El proyecto incluye configuración para desarrollo asistido por IA:

- **`.cursor/mcp.json`** - Conecta con la documentación oficial de Svelte
- **`.cursorrules`** - Reglas específicas del proyecto para la IA

## 📖 Documentación

Consulta la guía completa en `docs/Guia Svelte-AtomicDesign.md` para entender la arquitectura completa del sistema.

## 📝 Scripts Disponibles

- `pnpm dev` - Servidor de desarrollo
- `pnpm build` - Construir para producción
- `pnpm preview` - Previsualizar build de producción
- `pnpm check` - Verificar tipos con svelte-check

## 🎨 Modo Oscuro

El modo oscuro se gestiona mediante el store de tema:

```svelte
<script>
  import { toggleTheme, theme } from '$lib/stores/theme';
</script>

<button on:click={toggleTheme}>
  {$theme === 'dark' ? '☀️' : '🌙'}
</button>
```

## 📄 Licencia

MIT

