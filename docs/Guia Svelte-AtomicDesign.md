
Guía Arquitectónica para un Sistema de Diseño Profesional con Svelte, Tailwind v4 y Atomic Design


Parte I: El Fundamento del Sistema de Diseño: SvelteKit y Tailwind CSS v4

Esta sección establece el entorno de desarrollo base. Aborda la configuración inicial del proyecto SvelteKit y la instalación de Tailwind CSS, tomando una decisión estratégica clave sobre la versión de Tailwind que afectará a toda la arquitectura del sistema de diseño.

1.1. Introducción: La Decisión Estratégica (Tailwind v4)

La creación de un nuevo sistema de diseño en 2025 exige una elección fundamental en la base tecnológica. Aunque existen numerosas guías para integrar SvelteKit con Tailwind v3 1, la aparición de Tailwind v4 introduce un cambio de paradigma que se alinea perfectamente con el objetivo de construir un sistema basado en tokens.
Tailwind v4 introduce "muchos cambios rompedores" 5, siendo el más significativo una "nueva opción de configuración CSS-first".5 A diferencia de la v3, que define los tokens de diseño dentro de un archivo de configuración de JavaScript (tailwind.config.js) 6, la v4 permite que los tokens se definan directamente en un archivo CSS estándar utilizando la directiva @theme.8
Esta arquitectura CSS-first no es un simple cambio sintáctico; es una recalibración filosófica. Mueve la "fuente única de verdad" de la identidad visual (colores, espaciado, tipografía) desde un artefacto específico de la herramienta (un archivo .js) a un estándar web (un archivo .css). Para un proyecto cuyo objetivo principal es una "identidad visual completa" basada en tokens, este enfoque es inherentemente más limpio, más mantenible y más alineado con los estándares. Además, esta elección simplifica la pila de construcción, a menudo eliminando la necesidad de configuraciones explícitas de PostCSS.11
Por lo tanto, este informe prescribe el uso de Tailwind v4. Esta decisión informará todas las facetas subsiguientes del sistema, desde la definición de tokens hasta la implementación del modo oscuro.

1.2. Configuración del Proyecto SvelteKit

El primer paso es inicializar un proyecto SvelteKit, que proporcionará la estructura de archivos (src/lib para la biblioteca de componentes y src/routes para las páginas) que se adaptará perfectamente a la metodología de Atomic Design.12
Se recomienda utilizar el inicializador oficial de SvelteKit, sv, que guía interactivamente en la configuración de TypeScript, ESLint y Prettier.8

Bash


# Navegar al directorio del proyecto
mkdir mi-sistema-de-diseño
cd mi-sistema-de-diseño

# Inicializar el proyecto SvelteKit
npx sv create.


Durante la instalación, seleccione la plantilla "Skeleton project" (Proyecto esqueleto) y las opciones para TypeScript, ESLint y Prettier.

1.3. Instalación y Configuración de Tailwind v4

A continuación, se instalan las dependencias de Tailwind v4 y el plugin oficial @tailwindcss/vite, que gestiona la integración con el proceso de construcción de Vite de SvelteKit.1

Bash


npm install --save-dev tailwindcss @tailwindcss/vite


El siguiente paso es configurar SvelteKit para que utilice el plugin de Vite. Esto se hace modificando el archivo vite.config.ts en la raíz del proyecto para incluir tailwindcss() en el array de plugins.1
vite.config.ts

TypeScript


import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // Importar el plugin

export default defineConfig({
  plugins:,
});



1.4. El Archivo CSS Raíz (src/app.css)

Con Tailwind v4, el archivo CSS raíz (comúnmente src/app.css) se convierte en el corazón del sistema de diseño. Ya no es solo un punto de entrada para las capas de Tailwind, sino el manifiesto que define toda la identidad visual.
Cree este archivo e importe la base de Tailwind.
src/app.css

CSS


/* 1. Importar la base, componentes y utilidades de Tailwind v4 */
@import "tailwindcss";

/* 2. Definir la estrategia de modo oscuro (ver 1.6) */
@custom-variant dark (&:where(.dark,. dark *));

/* 3. Definir los tokens de diseño (ver Parte II) */
@theme {
  /*... Los tokens del sistema de diseño irán aquí... */
}

/* 4. Definir estilos base globales (opcional) */
@layer base {
  html {
    /*... Estilos base si son necesarios... */
  }
}



1.5. Configuración del Layout Raíz (src/routes/+layout.svelte)

Para que los estilos definidos en src/app.css se apliquen globalmente a toda la aplicación SvelteKit, debe ser importado en el layout raíz: src/routes/+layout.svelte. Este archivo envuelve cada página de la aplicación.
src/routes/+layout.svelte

Svelte


<script lang="ts">
  // Importar los estilos globales.
  import "../app.css";
  
  // Usando la sintaxis de Svelte 5 $props
  let { children } = $props();
</script>

{@render children()}



1.6. Implementación del Modo Oscuro (Estrategia de Clase)

Una decisión de identidad visual fundamental es cómo gestionar el modo oscuro. Por defecto, Tailwind utiliza la media query prefers-color-scheme 15, que responde a la configuración del sistema operativo. Sin embargo, para un sistema de diseño profesional que requiere un interruptor manual (toggle), se debe usar la "estrategia de clase".
Esta estrategia implica dos pasos:
Definir la Variante Personalizada: Como se añadió en el paso 1.4, se debe instruir a Tailwind para que active las variantes dark: cuando una clase .dark esté presente en el árbol HTML, en lugar de usar la media query.15 Esto se logra con @custom-variant en src/app.css.16
CSS
@import "tailwindcss";
@custom-variant dark (&:where(.dark,. dark *));


Activar el Modo Oscuro: El modo oscuro se activará y desactivará mediante JavaScript, añadiendo o eliminando la clase dark del elemento <html>.15
Establecer esta estrategia en la fundación (Parte I) es crucial. Permite que la arquitectura de tokens (Parte II) se diseñe desde el principio para soportar el modo oscuro, en lugar de adaptarlo como una ocurrencia tardía.

Parte II: Definiendo la Identidad Visual: Tokens de Diseño Centralizados

Esta sección es el núcleo intelectual del sistema de diseño. Traduce la "identidad visual" abstracta en un manifiesto de código concreto, mantenible y escalable, utilizando la arquitectura CSS-first de Tailwind v4.

2.1. El Paradigma de v4: @theme como Fuente Única de Verdad

En las arquitecturas de Tailwind v3, los tokens se definían en tailwind.config.js.6 Este enfoque acoplaba la identidad visual a la configuración de herramientas de JavaScript.
Tailwind v4 invierte esto con la directiva @theme.8 Al colocar los tokens de diseño dentro del bloque @theme en src/app.css, se logran dos cosas simultáneamente:
Generación de Variables CSS: Tailwind convierte cada token (ej. --color-primary: #...) en una variable CSS nativa (ej. var(--color-primary)) que puede ser utilizada en estilos personalizados.10
Generación de Clases de Utilidad: Tailwind también genera clases de utilidad correspondientes (ej. bg-primary, text-primary).
Este enfoque unificado 9 convierte el archivo app.css en la "fuente única de verdad" para la identidad visual.

2.2. Arquitectura de Tokens de Dos Niveles: La Clave de la Escalabilidad

Un sistema de diseño "profesional" nunca vincula un componente directamente a un valor literal (ej. bg-blue-500). Si la marca decide cambiar su azul principal, esto requeriría una búsqueda y reemplazo en toda la base de código, un proceso propenso a errores y costoso.
La solución arquitectónica, respaldada por la investigación de sistemas de diseño robustos, es un enfoque de múltiples niveles: "core tokens" (tokens de núcleo) y "semantic tokens" (tokens semánticos) 18, también conocidos como "system tokens" (tokens de sistema) y "dynamic values" (valores dinámicos).9 Los tokens semánticos se centran en el propósito o "rol" de un elemento (ej. action-background, surface, border, text).18
Este informe prescribe una arquitectura de dos niveles:
Nivel 1: Tokens de Sistema (Primitivos): Esta es la paleta completa de valores brutos e inmutables. Contiene todas las opciones de color, espaciado, tamaños de fuente, etc., aprobadas por el diseño. Nunca se deben modificar para temas.
Ejemplo: --color-blue-500: #3b82f6;, --spacing-4: 1rem;
Nivel 2: Tokens Semánticos (de Decisión o Rol): Estos son los tokens que la interfaz de usuario y los componentes realmente consumen. Asignan un rol semántico (ej. "el color primario") a un token de sistema (ej. "azul-500").
Ejemplo: --color-primary: var(--color-blue-500);
La ventaja de esta arquitectura es profunda: el theming (incluyendo el modo oscuro) se logra exclusivamente redefiniendo los tokens semánticos (Nivel 2) para que apunten a diferentes tokens de sistema (Nivel 1). Los componentes, que solo hacen referencia a los tokens semánticos (bg-primary), se actualizan automáticamente sin necesidad de cambios.

2.3. Implementación Práctica en src/app.css

A continuación se muestra una implementación de esta arquitectura de dos niveles dentro de src/app.css, integrando la estrategia de modo oscuro de la Parte I.

CSS


@import "tailwindcss";

/* 1. Definición de la variante Dark Mode (de Parte I) */
@custom-variant dark (&:where(.dark,. dark *));

/* 2. Definición del Sistema de Diseño (Tokens) */
@theme {
  /* ======================================================================== */
  /* Nivel 1: TOKENS DE SISTEMA (PRIMITIVOS)                                  */
  /* ======================================================================== */
  /* No tocar para temas. Esta es la paleta completa.                         */
  /* Basado en  */

  /* --- Colores Primitivos --- */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-300: #d1d5db;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-red-500: #ef4444;

  /* --- Espaciado Primitivo --- */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;

  /* --- Tipografía Primitiva --- */
  --font-family-sans: "Inter", "system-ui", sans-serif;
  --font-family-serif: "Georgia", serif;

  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* --- Radios de Borde --- */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;

  /* ======================================================================== */
  /* Nivel 2: TOKENS SEMÁNTICOS (DE DECISIÓN O ROL)                           */
  /* ======================================================================== */
  /* Estos son los tokens que consumen los componentes (ej. bg-primary).      */
  /* El tema 'light' (claro) se define aquí por defecto.                      */
  /* Basado en  */

  /* --- Colores Semánticos de Superficie --- */
  --color-surface-page: var(--color-white);
  --color-surface-card: var(--color-white);
  --color-surface-header: var(--color-gray-50);
  --color-surface-input: var(--color-white);

  /* --- Colores Semánticos de Texto --- */
  --color-text-default: var(--color-gray-800);
  --color-text-muted: var(--color-gray-700);
  --color-text-on-primary: var(--color-white);
  --color-text-on-danger: var(--color-white);
  --color-text-danger: var(--color-red-500);

  /* --- Colores Semánticos de Borde --- */
  --color-border-default: var(--color-gray-300);
  --color-border-muted: var(--color-gray-100);

  /* --- Colores Semánticos de Interacción (Acción) --- */
  --color-primary: var(--color-blue-500);
  --color-primary-hover: var(--color-blue-600);
  --color-danger: var(--color-red-500);
  
  /* --- Tokens Semánticos de Tipografía --- */
  --font-body: var(--font-family-sans);
  --font-heading: var(--font-family-sans);
  --font-size-body: var(--text-base);
  --font-size-h1: var(--text-3xl);
  --font-size-h2: var(--text-2xl);
  --font-weight-body: var(--font-weight-normal);
  --font-weight-heading: var(--font-weight-bold);
  
  /* --- Tokens Semánticos de Espaciado y Radio --- */
  --spacing-padding-card: var(--spacing-6);
  --spacing-margin-container: var(--spacing-8);
  --radius-button: var(--radius-md);
  --radius-card: var(--radius-lg);
}

/* ======================================================================== */
/* 4. REDEFINICIÓN DE TOKENS SEMÁNTICOS PARA DARK MODE                      */
/* ======================================================================== */
/* Aquí es donde ocurre la magia. Solo redefinimos los tokens de Nivel 2.  */
/* Basado en [15, 19] */
@layer base {
 .dark {
    /* --- Colores Semánticos de Superficie (Dark) --- */
    --color-surface-page: var(--color-gray-900);
    --color-surface-card: var(--color-gray-800);
    --color-surface-header: var(--color-gray-900);
    --color-surface-input: var(--color-gray-800);

    /* --- Colores Semánticos de Texto (Dark) --- */
    --color-text-default: var(--color-gray-100);
    --color-text-muted: var(--color-gray-300);
    --color-text-on-primary: var(--color-white);
    
    /* --- Colores Semánticos de Borde (Dark) --- */
    --color-border-default: var(--color-gray-700);
    --color-border-muted: var(--color-gray-800);
    
    /* Los colores de interacción pueden o no cambiar */
    --color-primary: var(--color-blue-500);
    --color-primary-hover: var(--color-blue-600);
  }
}



2.4. Sincronización desde Figma (Flujo de Trabajo Avanzado)

En un entorno de producción profesional, los tokens de diseño no se escriben manualmente en CSS. Se originan en una herramienta de diseño como Figma. El flujo de trabajo ideal, que este sistema está ahora preparado para soportar, es:
Diseño (Figma): Los diseñadores definen los tokens (Nivel 1 y Nivel 2) utilizando un plugin de tokens de diseño.
Exportación: Los tokens se exportan como tokens.json.21
Transformación (Style Dictionary): Una herramienta como Style Dictionary procesa este tokens.json.21
Generación: Se configura Style Dictionary para generar un archivo src/design-tokens.css que contiene únicamente el contenido del bloque @theme y las redefiniciones de .dark.
Importación: El src/app.css principal se simplifica para importar este archivo.
Este flujo automatiza la sincronización entre el diseño y el código 6, asegurando que la identidad visual se gestione desde una única fuente de verdad (Figma).

Parte III: Estructura del Proyecto: Implementación de Atomic Design en SvelteKit

Esta sección traduce la metodología teórica de Atomic Design 22 en una estructura de carpetas concreta y mantenible dentro de la arquitectura de SvelteKit.

3.1. La Carpeta $lib como Biblioteca de Componentes

SvelteKit define una convención de proyecto clara: la carpeta src/lib está destinada a albergar el código reutilizable de la aplicación, como componentes, utilidades y stores.12 SvelteKit facilita la importación desde esta carpeta mediante un alias mágico, $lib.12
Esta convención se alinea perfectamente con el objetivo de crear una biblioteca de componentes interna. La totalidad de nuestro sistema de Atomic Design residirá dentro de src/lib/components.

3.2. Estructura de Carpetas Prescriptiva

La metodología de Atomic Design 22 y la estructura de SvelteKit 12 no son competidoras, sino complementarias. El mapeo es directo y elegante:
Atomic Design (Teoría): Átomos, Moléculas, Organismos, Plantillas, Páginas.
SvelteKit (Implementación):
src/lib/components/01-atoms
src/lib/components/02-molecules
src/lib/components/03-organisms
src/lib/components/04-templates
src/routes/**/+page.svelte (Las "Páginas" de Atomic Design)
La estructura de carpetas resultante dentro de src/lib debe ser la siguiente, como se sugiere en múltiples implementaciones de Svelte 25:



src/
├── lib/
│   ├── components/
│   │   ├── 01-atoms/
│   │   │   ├── Button/
│   │   │   │   ├── Button.svelte
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.svelte
│   │   │   │   └── index.ts
│   │   │   └── index.ts  (Exporta todos los átomos)
│   │   ├── 02-molecules/
│   │   │   ├── SearchForm/
│   │   │   │   ├── SearchForm.svelte
│   │   │   │   └── index.ts
│   │   │   └── index.ts  (Exporta todas las moléculas)
│   │   ├── 03-organisms/
│   │   │   ├── Header/
│   │   │   │   ├── Header.svelte
│   │   │   │   └── index.ts
│   │   │   └── index.ts  (Exporta todos los organismos)
│   │   └── 04-templates/
│   │       ├── ArticleLayout/
│   │       │   ├── ArticleLayout.svelte
│   │       │   └── index.ts
│   │       └── index.ts  (Exporta todas las plantillas)
│   ├── utils/
│   │   └── cva.ts  (Helper de Variantes, ver Parte IV)
│   └──...
└── routes/
    └──... (Las "Páginas" que consumen la biblioteca de $lib)


Justificación de esta estructura:
Jerarquía: La numeración (01-, 02-,...) no es solo organizativa; impone la regla fundamental de Atomic Design: un componente solo debe importar componentes de un nivel inferior (ej. una Molécula puede importar Átomos, pero un Átomo nunca debe importar una Molécula).
Encapsulación: Cada componente (ej. Button) reside en su propia carpeta, que contiene el archivo .svelte y un index.ts para su exportación.
Páginas vs. Plantillas: Se mantiene una distinción clara. Las Plantillas (Templates) son componentes Svelte reutilizables y sin datos que definen un layout.22 Las Páginas (Pages) son las rutas de SvelteKit (+page.svelte) que importan una Plantilla y le inyectan datos reales.23

3.3. Gestión de Exportaciones (index.ts)

Para facilitar la importación y el uso de la biblioteca, cada carpeta de nivel atómico (ej. 01-atoms) debe tener un archivo index.ts que agrupe y re-exporte todos los componentes de ese nivel.26
src/lib/components/01-atoms/index.ts

TypeScript


import Button from './Button/Button.svelte';
import Input from './Input/Input.svelte';
//... otros átomos

export { Button, Input };


Esto permite a otros componentes importar de forma limpia:
import { Button, Input } from '$lib/components/01-atoms';
En lugar de rutas de archivo relativas desordenadas.

Parte IV: Creación de Componentes Escalables: De Átomos a Organismos

Esta es la sección de implementación central, donde se construye la biblioteca. Establece los patrones de Svelte y Tailwind que garantizan que los componentes sean flexibles, mantenibles y escalables.

4.1. El Patrón de Variantes: Por qué @apply Falla y CVA Gana

El requisito más común de un componente es que tenga variantes (ej. un botón primario, secundario o destructivo).30
El Antipatrón: @apply en <style>
El primer instinto de un desarrollador de Tailwind es usar la directiva @apply dentro del bloque <style> de un componente Svelte para crear estas variantes.7

Svelte


<script lang="ts">
  export let intent = 'primary';
</script>

<button class="btn" class:btn-primary={intent === 'primary'}>Clic</button>

<style lang="postcss">
 .btn {
    @apply p-4 rounded-lg;
  }
 .btn-primary {
    @apply bg-blue-500 text-white;
  }
</style>


El Problema Crítico: Este enfoque está fundamentalmente roto en un sistema de diseño componible. La investigación y los informes de la comunidad confirman que las clases aplicadas con @apply dentro del <style> de un componente no pueden ser sobreescritas de manera fiable por clases de utilidad pasadas como props.31
Por ejemplo, esto fallará:
<MiBoton intent="primary" class="bg-red-500" />
El bg-red-500 no sobreescribirá el bg-blue-500 aplicado por @apply debido a la especificidad de CSS y el orden de las capas. Tailwind no puede colocar los estilos de @apply de un componente Svelte en la capa correcta (@layer components).31 Esto rompe la personalización y viola el objetivo principal de un sistema de diseño.
La Solución Arquitectónica: CVA + tailwind-merge
La solución robusta es mover la lógica de las variantes de CSS a JavaScript/TypeScript. El patrón estándar de la industria para esto es la combinación de dos utilidades:
Class Variance Authority (CVA): Una biblioteca agnóstica al framework (class-variance-authority) que permite definir variantes de componentes como una función.35
tailwind-merge: Una utilidad que fusiona inteligentemente múltiples clases de Tailwind, resolviendo conflictos para que la última clase "gane" (ej. bg-blue-500 + bg-red-500 = bg-red-500).37
El Patrón CVA + tailwind-merge:
Este patrón, que se prescribirá para todos los Átomos y Moléculas, implica generar mediante programación el string de clases completo. Esto garantiza que las clases base, las clases de variantes y las clases de props personalizadas se fusionen en el orden correcto.

Característica
@apply en <style> (Antipatrón)
CVA + tailwind-merge (Patrón Prescrito)
tailwind-variants (Alternativa)
Permite Sobrescritura de Props
No (Fallo crítico) 31
Sí 37
Sí 39
Seguridad de Tipos (TS)
Nula
Excelente (con VariantProps) 40
Excelente 39
Mantenibilidad
Baja (CSS y JS desacoplados)
Alta (Variantes en un solo lugar)
Alta
Acoplamiento
Acoplado a PostCSS y @layer 34
Acoplado a JS (gestión de strings)
Acoplado a JS (gestión de strings)

Aunque tailwind-variants 39 es una alternativa válida, CVA es la utilidad central utilizada por bibliotecas populares como shadcn-svelte 41 y, por lo tanto, se alinea mejor con el ecosistema más amplio.

4.2. Implementación de Átomos (Ej. Button.svelte)

Primero, se crea un helper CVA en src/lib/utils/cva.ts para integrar CVA y tailwind-merge.38
src/lib/utils/cva.ts

TypeScript


import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

// Un helper que combina CVA y tailwind-merge
export function cnCva<T>(
  base: ClassValue,
  config: Parameters<typeof cva<T>>
) {
  const variants = cva(base, config);

  const component = (props: VariantProps<typeof variants> & { class?: ClassValue }) => {
    return twMerge(variants(props), props?.class);
  };

  return component;
}

// Re-exportar para uso general
export { cva, type VariantProps, twMerge };


Ahora, se implementa el Átomo Button.svelte usando este patrón. Este componente:
Define sus variantes usando cva.
Usa los Tokens Semánticos (ej. bg-primary) de la Parte II.
Exporta type Props para seguridad de tipos.
Usa $$restProps para pasar atributos HTML nativos (como disabled, type, etc.).42
Acepta una prop class que se fusiona con tailwind-merge.37
src/lib/components/01-atoms/Button/Button.svelte

Svelte


<script lang="ts">
  import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  // 1. Definir variantes de CVA
  const buttonVariants = cva(
    // Clases base (Tokens Semánticos)
    'inline-flex items-center justify-center rounded-button font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
    {
      variants: {
        intent: {
          primary:
            'bg-primary text-text-on-primary hover:bg-primary-hover',
          secondary:
            'bg-surface-card text-text-default border border-border-default hover:bg-gray-100 dark:hover:bg-gray-700',
          danger: 'bg-danger text-text-on-danger hover:bg-opacity-90',
          ghost: 'hover:bg-gray-100 dark:hover:bg-gray-700'
        },
        size: {
          sm: 'h-8 px-3 text-sm',
          md: 'h-10 px-4 text-base', // Usando token de sistema (text-base)
          lg: 'h-12 px-6 text-lg'
        }
      },
      defaultVariants: {
        intent: 'primary',
        size: 'md'
      }
    }
  );

  // 2. Definir tipos de props
  type Props = VariantProps<typeof buttonVariants> &
    HTMLButtonAttributes & {
      class?: string;
    };

  // 3. Obtener $props (Svelte 5 Runes)
  let { intent, size, class: customClass,...rest } = $props<Props>();
</script>

<button
  class={twMerge(buttonVariants({ intent, size }), customClass)}
  {...rest}
>
  {@render children()}
</button>



4.3. Implementación de Moléculas (Ej. SearchForm.svelte)

Las Moléculas son composiciones de Átomos.29 A medida que los componentes se vuelven más complejos, pasar todas las opciones de configuración a través de props (conocido como prop drilling) se vuelve insostenible y crea una API de componente frágil.42
El Patrón de Composición: slots > props
La solución en Svelte es la composición mediante slots.44 En lugar de que una Molécula (ej. Card) acepte title y description como props, debe exponer <slot name="header"> y <slot name="content">.46
Regla de Diseño: Los Átomos se configuran con props. Las Moléculas y Organismos se componen con slots.
src/lib/components/02-molecules/SearchForm/SearchForm.svelte

Svelte


<script lang="ts">
  import { Button } from '$lib/components/01-atoms';
  import { Input } from '$lib/components/01-atoms';
  
  let { class: customClass,...rest } = $props<{ class?: string }>();
</script>

<form class="flex items-center gap-2 {customClass}" {...rest}>
  <div class="flex-grow">
    {@render children()}
  </div>
  <div>
    <slot name="button">
      <Button type="submit">Buscar</Button>
    </slot>
  </div>
</form>




4.4. Implementación de Organismos (Ej. Header.svelte)

Los Organismos son secciones de interfaz complejas compuestas de Moléculas y Átomos.29 En este nivel, el prop drilling es un problema aún mayor.44 Si bien los slots siguen siendo la herramienta principal de composición, el estado compartido (ej. "el menú móvil está abierto") se gestiona mejor con la API de Contexto de Svelte (setContext, getContext).47
src/lib/components/03-organisms/Header/Header.svelte

Svelte


<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store'; // Para estado reactivo
  
  // Usando Svelte 5 Runes ($state)
  let isMobileMenuOpen = $state(false);
  
  // 1. Proveer estado al contexto
  // 'Symbol' asegura una clave de contexto única
  const CONTEXT_KEY = Symbol('HeaderContext');
  setContext(CONTEXT_KEY, {
    // Proporcionar una función para alternar el estado
    toggleMenu: () => (isMobileMenuOpen =!isMobileMenuOpen),
    // Proporcionar el estado reactivo
    isOpen: () => isMobileMenuOpen
  });

</script>

<header class="bg-surface-header border-b border-border-muted">
  <nav class="container mx-auto flex items-center justify-between p-4">
    <div class="flex-shrink-0">
      <slot name="logo" />
    </div>
    
    <div class="hidden md:block">
      <slot name="navigation" />
    </div>
    
    <div class="md:hidden">
      <slot name="mobile-menu-button" />
    </div>
  </nav>

  {#if isMobileMenuOpen}
    <div class="md:hidden border-t border-border-default">
      <slot name="mobile-navigation-panel" />
    </div>
  {/if}
</header>


Cualquier subcomponente (ej. un botón de hamburguesa en el slot mobile-menu-button) puede ahora acceder y controlar el estado de apertura usando getContext(CONTEXT_KEY), eliminando por completo la necesidad de pasar props o emitir eventos.

Parte V: Desarrollo Acelerado por IA: Configuración Experta de Cursor IDE

Cursor IDE es una herramienta "AI-first" 49 que puede aumentar drásticamente la productividad. Sin embargo, su Agente de IA 50 es inútil si genera código que viola la arquitectura del proyecto (ej. usando Svelte 4, rompiendo Atomic Design, o usando @apply).
Para que la IA trabaje para el sistema, debe ser alimentada con el contexto correcto. Esto se logra mediante una "tríada de contexto": el Framework (MCP), el Proyecto (.cursorrules) y la Tarea (@).

5.1. Capa 1: Configuración del Protocolo de Contexto de Modelo (MCP) de Svelte

El Protocolo de Contexto de Modelo (MCP) conecta Cursor a fuentes de datos externas en vivo, como la documentación.51 La comunidad de Svelte, en particular Stanislav Khromov, mantiene un servidor MCP alojado que proporciona a la IA la documentación más reciente de Svelte 5 y SvelteKit.52
Para conectar Cursor a este contexto de framework, cree un archivo en la raíz de su proyecto en .cursor/mcp.json:
.cursor/mcp.json

JSON


{
  "mcpServers": {
    "svelte-mcp": {
      "url": "https://svelte-llm.stanislav.garden/mcp/sse",
      "headers": {}
    }
  }
}


Fuente de configuración: 52
Con este archivo, la IA tendrá acceso a la documentación correcta y actualizada de Svelte 5.

5.2. Capa 2: Creación de un Archivo.cursorrules Definitivo

El archivo .cursorrules 55 es donde se definen las reglas específicas del proyecto. Es la pieza de contexto más importante para garantizar que la IA siga la arquitectura establecida.
Se proporciona un archivo .cursorrules integral a continuación. Este archivo consolida las mejores prácticas para Svelte 5 58 y SvelteKit+Tailwind 57, y añade reglas personalizadas para nuestra arquitectura de Atomic Design y CVA.
.cursorrules



---
description: Reglas para el Sistema de Diseño SvelteKit + Tailwind v4 + Atomic
globs: 
  - src/**/*.svelte
  - src/**/*.ts
---

# Principios Clave del Framework
- Usa Svelte 5 (Runes) para todo el código nuevo.
- Usa SvelteKit para el enrutamiento y la carga de datos.
- Todo el código debe usar TypeScript.
- Usa Tailwind CSS v4 para todos los estilos.

# Svelte 5 (Runes)
- Estado reactivo: `let count = $state(0);` 
- Valores derivados: `let doubled = $derived(count * 2);` 
- Props: `let { children } = $props();` 
- Props bidireccionales: `let { bindableProp = $bindable() } = $props();` 
- Efectos secundarios: `$effect(() => {... });` 

# Tailwind CSS (¡CRÍTICO!)
- **PROHIBICIÓN DE @APPLY:** NUNCA uses la directiva `@apply` dentro de los bloques `<style>` de los componentes Svelte. [59]
- **PREFERIR CLASES DE UTILIDAD:** Siempre usa clases de utilidad de Tailwind directamente en el marcado HTML. [59]
- **USAR TOKENS SEMÁNTICOS:** Para estilos, prefiere usar las clases de utilidad generadas por nuestros tokens semánticos (ej. `bg-primary`, `text-text-default`, `border-border-default`) definidos en `src/app.css`.
- **MODO OSCURO:** El modo oscuro se maneja ÚNICAMENTE a través de la redefinición de tokens semánticos en `src/app.css` bajo la clase `.dark`.

# Arquitectura de Componentes (Patrón CVA)
- **CVA:** Todos los Átomos y Moléculas que requieran variantes deben usar el patrón `CVA (class-variance-authority)` + `tailwind-merge`.
- **HELPER CVA:** Utiliza el helper `$lib/utils/cva.ts` para definir variantes.
- **PROPS:** Los componentes deben aceptar una prop `class` que se fusiona con `twMerge`.
- **ATRIBUTOS:** Los componentes deben usar `{...rest}` para pasar `$$restProps` al elemento DOM raíz.
- **COMPOSICIÓN:** Las Moléculas y Organismos deben preferir `slots` sobre `props` para la composición de contenido.[45]

# Estructura de Proyecto (Atomic Design)
- **ÁTOMOS:** `$lib/components/01-atoms` (Bloques de construcción básicos, ej. Button, Input) [25]
- **MOLÉCULAS:** `$lib/components/02-molecules` (Composiciones de Átomos, ej. SearchForm) [25]
- **ORGANISMOS:** `$lib/components/03-organisms` (Secciones de UI, ej. Header, Footer) [25]
- **PLANTILLAS:** `$lib/components/04-templates` (Estructuras de página, ej. ArticleLayout) 
- **PÁGINAS:** `src/routes/**/+page.svelte` (Instancias de Plantillas con datos reales) [13]
- **JERARQUÍA:** Los componentes solo pueden importar desde niveles atómicos inferiores (ej. Moléculas importan Átomos).

# Convenciones de Nombrado
- **Archivos de Componente:** `kebab-case` (ej. `Button.svelte`, `SearchForm.svelte`) 
- **Importaciones de Componente:** `PascalCase` (ej. `import SearchForm from...`) 
- **Variables y Funciones:** `camelCase` 



5.3. Flujo de Trabajo Práctico (Agente de Cursor)

Con esta tríada de contexto configurada, el Agente de Cursor se convierte en un asistente de ingeniería altamente calificado que conoce la arquitectura del proyecto.
Ejemplo de Prompt (Generación de Átomo):
"Usando las reglas del proyecto (.cursorrules) y la documentación (@svelte-mcp), crea un nuevo componente Átomo en src/lib/components/01-atoms/Avatar.svelte.
Requisitos:
Debe usar el patrón CVA + tailwind-merge desde $lib/utils/cva.ts.
Debe soportar una variante size (sm, md, lg) que controle h-, w- y text-.
Debe aceptar una prop src para la URL de la imagen.
Si src no se proporciona, debe mostrar un fallback con las iniciales (ej. 'JD').
Debe pasar {...rest} y fusionar la prop class.
Usar tokens semánticos (ej. bg-primary, text-text-on-primary) para el fallback."
Ejemplo de Prompt (Refactorización):
"Toma este componente (@src/lib/components/03-organisms/OldHeader.svelte) y refactorízalo para que siga las reglas de nuestro proyecto.
Tareas:
Actualiza todo el código de Svelte 4 (clases, export let) a Svelte 5 Runes ($state, $props).
Reemplaza cualquier uso de @apply con clases de utilidad directas de Tailwind.
Reemplaza cualquier color literal (ej. bg-blue-500) con el token semántico apropiado (ej. bg-primary)."
Este enfoque, donde la IA se ve obligada a seguir una arquitectura estricta, es la única forma de escalar el desarrollo asistido por IA en un entorno de sistema de diseño profesional.

Parte VI: Integración y Personalización de Bibliotecas de Terceros

Es poco realista construir todos los componentes (ej. un Date Picker complejo) desde cero. Un sistema de diseño profesional debe ser capaz de integrar bibliotecas de terceros 41 y aplicarles la identidad visual personalizada.
La integración no sigue un enfoque único. La estrategia depende enteramente de cómo la biblioteca de terceros gestiona sus propios estilos. La investigación revela tres filosofías de estilo distintas, lo que lleva a tres patrones de integración distintos.

6.1. Caso de Estudio 1: Personalización (Flowbite Svelte)

Filosofía de la Biblioteca: Flowbite Svelte está construido sobre Tailwind CSS y tokens de Tailwind.62 Crucialmente, utiliza tailwind-merge internamente para gestionar sus clases.37
Patrón de Integración: Personalización Directa
Análisis: Esta es la integración más sencilla. Dado que Flowbite ya espera clases de Tailwind y utiliza tailwind-merge, se pueden pasar clases de utilidad personalizadas (basadas en los tokens semánticos de la Parte II) directamente a través de la prop class. tailwind-merge gestionará la sobreescritura de los estilos por defecto de Flowbite.37
Implementación:

Svelte


<script lang="ts">
  import { Alert } from 'flowbite-svelte';
</script>

<Alert
  class="bg-primary text-text-on-primary border-none"
>
  ¡Alerta personalizada con nuestros tokens de diseño!
</Alert>

<Alert class="!bg-danger!text-text-on-danger">
  Alerta de peligro.
</Alert>



6.2. Caso de Estudio 2: Adopción y Adaptación (Skeleton UI)

Filosofía de la Biblioteca: Skeleton UI es un kit de herramientas completo que también utiliza Tailwind.63 Sin embargo, tiene su propio sistema de temas desacoplado, que se gestiona a través de un "Theme Generator" y se activa mediante un atributo data-theme.64
Patrón de Integración: Adopción y Adaptación
Análisis: La estrategia aquí no es sobreescribir las clases de Skeleton sobre la marcha. La estrategia es adoptar su sistema de temas. Se debe usar su "Theme Generator" para crear un tema personalizado que refleje los tokens de la Parte II.
Implementación:
Generar: Abrir el "Theme Generator" de Skeleton UI.64
Adaptar: Introducir manualmente los valores de los tokens de sistema (Primitivos) de la Parte II (ej. el valor hex de --color-primary, --color-surface-card, etc.) en los campos correspondientes del generador.
Exportar: Nombrar el tema (ej. mi-tema-personalizado) y copiar el código CSS generado.64
Registrar: Pegar el CSS exportado en un nuevo archivo, ej. src/mi-tema-skeleton.css.
Importar: Importar este tema en src/app.css: @import './mi-tema-skeleton.css';.
Activar: Aplicar el atributo data-theme al elemento <html> en src/app.html o gestionarlo mediante un store de Svelte.66
HTML
<html lang="en" data-theme="mi-tema-personalizado">
 ...
</html>


Este enfoque utiliza el mecanismo de temas previsto por Skeleton, pero lo alimenta con la identidad visual centralizada.

6.3. Caso de Estudio 3: Envoltura y Contención (Carbon Components Svelte)

Filosofía de la Biblioteca: Carbon es un sistema de diseño de IBM completo y maduro que no usa Tailwind.67 Es un ecosistema de estilos SCSS precompilados y variables CSS propias.67
Patrón de Integración: Envoltura y Contención
Análisis: Es imposible (y desaconsejable) intentar sobreescribir Carbon con utilidades de Tailwind. La biblioteca debe tratarse como una "caja negra". La única estrategia viable es sincronizar el estado del tema del sistema de diseño con el sistema de temas de Carbon.
Carbon permite el cambio de tema programático (ej. white, g10, g90, g100) estableciendo un atributo theme en el elemento <html>.67
Implementación:
Se crea un store de Svelte para gestionar el modo oscuro, y se usa un $effect de Svelte 5 para sincronizar ambos sistemas de temas (el nuestro y el de Carbon) simultáneamente.
src/lib/stores/theme.ts

TypeScript


import { writable } from 'svelte/store';

export const theme = writable<'light' | 'dark'>('light');

// Sincronizar el store con los dos sistemas de temas
$effect(() => {
  const currentTheme = $store(theme);
  
  if (currentTheme === 'dark') {
    // 1. Activar nuestro tema Tailwind v4
    document.documentElement.classList.add('dark');
    
    // 2. Activar el tema oscuro de Carbon (ej. 'g90') [69]
    document.documentElement.setAttribute('theme', 'g90');
  } else {
    // 1. Desactivar nuestro tema Tailwind v4
    document.documentElement.classList.remove('dark');
    
    // 2. Activar el tema claro de Carbon (ej. 'g10') [69]
    document.documentElement.setAttribute('theme', 'g10');
  }
});


De esta manera, un único interruptor de modo oscuro controla ambas bibliotecas, permitiéndoles coexistir en la misma página.

Parte VII: Visualización y Documentación: Construyendo el Catálogo con Histoire

El objetivo final es "mostrar todos los componentes... con todas las personalizaciones".70 Esto requiere una herramienta de catálogo de componentes.

7.1. Por qué Histoire y No Storybook: La Ventaja Nativa de Vite

Storybook es la herramienta madura y estándar de la industria.71 Sin embargo, para este stack tecnológico específico (SvelteKit + Vite), Histoire es la opción técnicamente superior.74
Justificación:
Nativo de Vite: Histoire está construido desde cero para Vite.77 Esto significa que reutiliza la configuración de vite.config.ts existente, incluyendo la configuración de Tailwind v4. No hay configuración duplicada.
Rendimiento: Disfruta del inicio instantáneo del servidor de desarrollo y del HMR (Hot Module Replacement) casi instantáneo de Vite.78
Idiomático: A diferencia de la sintaxis abstracta de Component Story Format (CSF) de Storybook, las historias de Histoire se escriben en archivos Svelte (.story.svelte).78 Esto es más natural e intuitivo para un desarrollador de Svelte.
La analogía es precisa: "Si Storybook es Jest (maduro pero tosco de usar), entonces Histoire es Vitest (nuevo, construido para Vite)".81

7.2. Instalación y Configuración de Histoire

La instalación es sencilla y se integra con las herramientas existentes.

Bash


npm install --save-dev histoire @histoire/plugin-svelte


A continuación, se crea un archivo histoire.config.ts para registrar el plugin de Svelte y configurar la integración con Tailwind.
histoire.config.ts

TypeScript


import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
  plugins:,
  
  // Configuración para que Histoire detecte los estilos de Tailwind
  setupFile: '/src/histoire.setup.ts',

  // Organizar el catálogo por Atomic Design
  tree: {
    groups: [
      { id: 'atoms', title: '01. Átomos' },
      { id: 'molecules', title: '02. Moléculas' },
      { id: 'organisms', title: '03. Organismos' },
      { id: 'templates', title: '04. Plantillas' },
    ],
  },
});


Se necesita un archivo de configuración (histoire.setup.ts) para importar los estilos globales app.css.
src/histoire.setup.ts

TypeScript


// Importar los estilos globales y tokens para que Histoire los use
import './app.css';



7.3. Flujo de Trabajo: Desarrollar Componentes Dentro de Histoire

Histoire no debe ser una ocurrencia tardía para la documentación. Debe ser el entorno de desarrollo (CDE) para construir los componentes.
Al ser nativo de Vite, el HMR es instantáneo.78 El flujo de trabajo profesional es:
Crear Button.svelte (inicialmente vacío).
Crear Button.story.svelte.
Ejecutar npm run story:dev.
Construir y probar Button.svelte dentro del lienzo de Histoire.
Esto fuerza al desarrollador a construir el componente en aislamiento y a definir todas sus variantes (<Hst.Variant>) y controles (<Hst.Checkbox>) desde el principio, garantizando una cobertura completa de casos de uso.77

7.4. Guía Práctica: Escritura de una Historia con Controles

A continuación se muestra la "historia" completa para el Button.svelte de la Parte IV. Este archivo .story.svelte documenta el componente y proporciona controles interactivos para probar sus variantes de CVA.
src/lib/components/01-atoms/Button/Button.story.svelte

Svelte


<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import { Button } from '$lib/components/01-atoms';

  // Prop necesaria para los componentes de Histoire [80]
  export let Hst: Hst;

  // Estado para los controles interactivos [77]
  let disabled = $state(false);
  let content = $state('Button Text');
  let customClass = $state('');
</script>

<Hst.Story 
  title="01. Átomos/Button"
  group="atoms"
  icon="carbon:button"
>
  <svelte:fragment slot="controls">
    <Hst.Text title="Content" bind:value={content} />
    <Hst.Checkbox title="Disabled" bind:value={disabled} />
    <Hst.Text title="Custom Class" bind:value={customClass} />
  </svelte:fragment>

  <Hst.Variant title="Intents">
    <div class="flex items-center gap-4 p-4">
      <Button 
        intent="primary" 
        {disabled} 
        class={customClass}
      >
        {content} (Primary)
      </Button>
      <Button 
        intent="secondary" 
        {disabled} 
        class={customClass}
      >
        {content} (Secondary)
      </Button>
      <Button 
        intent="danger" 
        {disabled} 
        class={customClass}
      >
        {content} (Danger)
      </Button>
      <Button 
        intent="ghost" 
        {disabled} 
        class={customClass}
      >
        {content} (Ghost)
      </Button>
    </div>
  </Hst.Variant>
  
  <Hst.Variant title="Sizes">
    <div class="flex items-center gap-4 p-4">
      <Button size="sm" {disabled} class={customClass}>{content} (Small)</Button>
      <Button size="md" {disabled} class={customClass}>{content} (Medium)</Button>
      <Button size="lg" {disabled} class={customClass}>{content} (Large)</Button>
    </div>
  </Hst.Variant>
</Hst.Story>



7.5. Documentación de la Jerarquía Atómica

Histoire también puede renderizar páginas de Markdown.82 Se pueden crear archivos como src/lib/components/01-atoms/index.story.md para escribir documentación de formato largo sobre los principios de los Átomos, que aparecerán junto a los componentes en el catálogo.

Parte VIII: Ensamblaje Final: De Plantillas a Páginas

Esta sección final cierra el círculo, mostrando cómo la biblioteca de componentes ($lib) se utiliza para construir la aplicación real dentro de la estructura de rutas (src/routes) de SvelteKit.

8.1. De Componentes a Layouts: La Plantilla (Template)

Las Plantillas (Templates) son el nivel de Atomic Design que define la estructura de una página, pero sin contenido real.22 Son componentes Svelte normales que componen organismos.
src/lib/components/04-templates/ArticleLayout.svelte

Svelte


<script lang="ts">
  // Importa los organismos
  import { Header } from '$lib/components/03-organisms';
  import { Footer } from '$lib/components/03-organisms';
  import { Logo } from '$lib/components/01-atoms'; // Ejemplo de átomo
</script>

<div class="flex min-h-screen flex-col bg-surface-page text-text-default">
  
  <Header>
    <svelte:fragment slot="logo">
      <a href="/">
        <Logo />
      </a>
    </svelte:fragment>
    </Header>

  <main class="container mx-auto flex-grow px-4 py-8">
    <article class="prose dark:prose-invert max-w-none">
      <slot name="heading" />
      <slot name="content" />
    </article>
  </main>
  
  <Footer>
    </Footer>
</div>



8.2. De Layouts a Rutas: La Página (Page)

Las Páginas (Pages) son la manifestación final del Atomic Design.22 En SvelteKit, estas son las rutas +page.svelte dentro de src/routes.13 Una Página importa una Plantilla y le inyecta datos reales, que normalmente provienen de una función +page.server.ts (load).
src/routes/blog/[slug]/+page.svelte

Svelte


<script lang="ts">
  import ArticleLayout from '$lib/components/04-templates/ArticleLayout.svelte';
  
  // 'data' es inyectado por SvelteKit desde +page.server.ts
  export let data; 
</script>

<ArticleLayout>
  <svelte:fragment slot="heading">
    <h1 class="text-3xl font-bold text-text-default">
      {data.post.title}
    </h1>
    <p class="text-text-muted">Publicado el {data.post.date}</p>
  </svelte:fragment>
  
  <svelte:fragment slot="content">
    {@html data.post.content}
  </svelte:fragment>
</ArticleLayout>


Este ensamblaje final demuestra el poder de la metodología: la Página no sabe nada de Átomos u Organismos, solo de la Plantilla. La Plantilla no sabe nada de datos, solo de Organismos. Y los Átomos no saben nada de contexto, solo de sus propias variantes.

Parte IX: Conclusión: Mantenimiento y Evolución del Sistema de Diseño

El resultado de esta arquitectura es un sistema de diseño desacoplado, mantenible y profesional, construido sobre estándares web modernos.

9.1. Resumen del Flujo de Trabajo Unificado

El flujo de trabajo de desarrollo completo, desde el diseño hasta la producción, sigue un ciclo de vida claro:
Diseño (Figma): Los diseñadores definen y actualizan los Tokens de Diseño (Primitivos y Semánticos).
Sincronización (Style Dictionary): Los tokens se exportan (tokens.json) y se transforman en src/app.css, actualizando el bloque @theme (Parte II).
Desarrollo (Histoire): Los desarrolladores ejecutan npm run story:dev y construyen/actualizan Átomos y Moléculas en aislamiento. Escriben historias (.story.svelte) que prueban las variantes del componente (Parte VII).
IA (Cursor): El Agente de IA, guiado por mcp.json y .cursorrules, se utiliza para generar boilerplate de componentes, refactorizar a Svelte 5 y escribir pruebas, todo mientras se adhiere al patrón CVA y la arquitectura Atomic (Parte V).
Integración: Se integran componentes de terceros (ej. Date Picker) utilizando el patrón de integración apropiado (Personalización, Adopción o Envoltura) (Parte VI).
Ensamblaje (SvelteKit): Los Organismos y Plantillas se actualizan en $lib para reflejar los nuevos componentes (Parte IV).
Aplicación (src/routes): Las Páginas (+page.svelte) consumen las Plantillas, conectando el sistema de diseño con los datos de la aplicación (Parte VIII).

9.2. Gobernanza y Evolución

Este sistema de diseño no es un proyecto único, sino un producto vivo. Su mantenimiento a largo plazo depende de la gobernanza:
Propiedad de los Tokens: Los Tokens Semánticos (Nivel 2) son propiedad conjunta del Diseño y la Ingeniería. Los cambios deben ser aprobados por ambas partes.
Contribuciones: Las adiciones a la biblioteca de $lib (nuevos Átomos o Moléculas) deben pasar por un proceso de revisión que confirme el cumplimiento del patrón CVA, la cobertura de Histoire y la adherencia a los tokens semánticos.
Versionado: La biblioteca en $lib debe ser versionada (semánticamente) para que los equipos que consumen la aplicación puedan optar por actualizaciones de componentes de forma controlada.
Siguiendo esta guía arquitectónica, se puede construir una identidad visual completa que es robusta, escalable y un placer de mantener y evolucionar, aprovechando lo mejor de Svelte, la arquitectura de Tailwind v4 y el desarrollo asistido por IA.
Works cited
Install Tailwind CSS with SvelteKit, accessed on November 13, 2025, https://tailwindcss.com/docs/guides/sveltekit
What's the correct way of setting up Tailwind with SvelteKit in 2022? : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/vlce5m/whats_the_correct_way_of_setting_up_tailwind_with/
The Best Frontend — SvelteKit + Tailwind + Cloudflare - Medium, accessed on November 13, 2025, https://medium.com/full-stack-engineer/the-best-frontend-sveltekit-tailwind-cloudflare-d1778a1a69f5
Tailwind CSS + Svelte: Utility-First Styling at Scale - DEV Community, accessed on November 13, 2025, https://dev.to/a1guy/tailwind-css-svelte-utility-first-styling-at-scale-acb
How to Install Tailwind CSS and Implement Figma Design Tokens in Optimizely CMS?, accessed on November 13, 2025, https://stackoverflow.com/questions/79516555/how-to-install-tailwind-css-and-implement-figma-design-tokens-in-optimizely-cms
Integrating Design Tokens with Tailwind CSS - Nicola Lazzari, accessed on November 13, 2025, https://portfolio.nicolabs.co.uk/integrating-design-tokens-with-tailwind-css/
How to use Tailwind.css with SvelteKit - Johnny Magrippis, accessed on November 13, 2025, https://magrippis.com/blog/2021/how-to-use-tailwind-with-sveltekit
Setting Up Tailwind CSS v4 in SvelteKit: The Vite Plugin Way (A Guide Based on Real Issues) - DEV Community, accessed on November 13, 2025, https://dev.to/fedor-pasynkov/setting-up-tailwind-css-v4-in-sveltekit-the-vite-plugin-way-a-guide-based-on-real-issues-380n
Exploring Typesafe design tokens in Tailwind 4 - DEV Community, accessed on November 13, 2025, https://dev.to/wearethreebears/exploring-typesafe-design-tokens-in-tailwind-4-372d
Theme variables - Core concepts - Tailwind CSS, accessed on November 13, 2025, https://tailwindcss.com/docs/theme
[SCRIPT] Set up a new SvelteKit project with TailwindCSS v4 and shadcn-svelte@next #1764 - GitHub, accessed on November 13, 2025, https://github.com/huntabyte/shadcn-svelte/discussions/1764
Project structure • SvelteKit Docs, accessed on November 13, 2025, https://svelte.dev/docs/kit/project-structure
Getting Started with SvelteKit: Setup, Project Structure & First App - DEV Community, accessed on November 13, 2025, https://dev.to/a1guy/getting-started-with-sveltekit-setup-project-structure-first-app-2jea
Installing Tailwind CSS with Vite, accessed on November 13, 2025, https://tailwindcss.com/docs
Dark mode - Core concepts - Tailwind CSS, accessed on November 13, 2025, https://tailwindcss.com/docs/dark-mode
Svelte Dark mode - Flowbite, accessed on November 13, 2025, https://flowbite-svelte.com/docs/components/darkmode
Persistent Theme Switch (Dark mode) with Svelte (SvelteKit) & Tailwind - DEV Community, accessed on November 13, 2025, https://dev.to/willkre/persistent-theme-switch-dark-mode-with-svelte-sveltekit-tailwind-1b9g
Using tokens in tailwind : r/DesignSystems - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/DesignSystems/comments/1cne2is/using_tokens_in_tailwind/
How to Build a Design Token System for Tailwind That Scales Forever | by Hex Shift, accessed on November 13, 2025, https://hexshift.medium.com/how-to-build-a-design-token-system-for-tailwind-that-scales-forever-84c4c0873e6d
How to Synchronize Design Tokens Across Teams Using Tailwind | by Hex Shift | Oct, 2025, accessed on November 13, 2025, https://hexshift.medium.com/how-to-synchronize-design-tokens-across-teams-using-tailwind-265c623c4439
Bringing Your Figma Design System to Nextjs/Tailwind using Style Dictionary - XTIVIA, accessed on November 13, 2025, https://www.xtivia.com/blog/bringing-your-figma-design-system-to-tailwind-using-style-dictionary/
Atomic Design Methodology, accessed on November 13, 2025, https://atomicdesign.bradfrost.com/chapter-2/
Atomic Design for Developers: Better Component Composition and Organization, accessed on November 13, 2025, https://benjaminwfox.com/blog/tech/atomic-design-for-developers
How to transform your idea into a project. Day two: Svelte components - Medium, accessed on November 13, 2025, https://medium.com/@zhamdi/how-to-transform-your-idea-into-a-project-day-two-svelte-components-4dc53ec30e5c
Project Structure - Practice, Learn, Succeed! - LangX, accessed on November 13, 2025, https://langx.io/project-structure
Svelte project structure : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/1ahzlek/svelte_project_structure/
README files to learn and implement atomic design methodology for components-based frontend codebases - GitHub, accessed on November 13, 2025, https://github.com/okasi/atomic-design
Boilerplate Astro + Svelte, accessed on November 13, 2025, https://astro.build/themes/details/boilerplate-astro-svelte/
Project Structure - SvelteKit Static Blog Template - Ellenfoot Yard, accessed on November 13, 2025, https://www.ellenfootyard.uk/project-structure
Best practices to create component with variant? : r/tailwindcss - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/tailwindcss/comments/vwbndh/best_practices_to_create_component_with_variant/
how to use tailwinds @apply with @layer directive from a Svelte component · tailwindlabs tailwindcss · Discussion #5509 - GitHub, accessed on November 13, 2025, https://github.com/tailwindlabs/tailwindcss/discussions/5509
How to use tailwinds @apply directive from a Svelte component and being able to override it : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/pjmd07/how_to_use_tailwinds_apply_directive_from_a/
How do I override component styles? · tailwindlabs tailwindcss · Discussion #6375 - GitHub, accessed on November 13, 2025, https://github.com/tailwindlabs/tailwindcss/discussions/6375
how to use tailwinds @apply with @layer directive from a Svelte component - Stack Overflow, accessed on November 13, 2025, https://stackoverflow.com/questions/69059757/how-to-use-tailwinds-apply-with-layer-directive-from-a-svelte-component
Svelte | cva - Class Variance Authority, accessed on November 13, 2025, https://cva.style/docs/examples/svelte
Class Variance Authority | Building Design Systems in Storybook ..., accessed on November 13, 2025, https://stevekinney.com/courses/storybook/class-variance-authority
Customization- Flowbite Svelte - Flowbite, accessed on November 13, 2025, https://flowbite-svelte.com/docs/pages/customization
Installation | cva - Class Variance Authority, accessed on November 13, 2025, https://cva.style/docs/getting-started/installation
Composing components – Tailwind Variants, accessed on November 13, 2025, https://www.tailwind-variants.org/docs/composing-components
TypeScript | cva - Class Variance Authority, accessed on November 13, 2025, https://cva.style/docs/getting-started/typescript
A curated list of awesome Svelte resources - GitHub, accessed on November 13, 2025, https://github.com/TheComputerM/awesome-svelte
Best way to handle Svelte component props - Stack Overflow, accessed on November 13, 2025, https://stackoverflow.com/questions/72296342/best-way-to-handle-svelte-component-props
Use tailwind within atomic design methodology - DEV Community, accessed on November 13, 2025, https://dev.to/zhangzewei/use-tailwind-within-atomic-design-methodology-1bi8
How to avoid prop drilling in Atomic design? - Stack Overflow, accessed on November 13, 2025, https://stackoverflow.com/questions/70924019/how-to-avoid-prop-drilling-in-atomic-design
Everything you need to know about Svelte Slots, accessed on November 13, 2025, https://fullstacksveltekit.com/blog/svelte-slots
• Svelte Docs, accessed on November 13, 2025, https://svelte.dev/docs/svelte/legacy-slots
Design Patterns for Building Reusable Svelte Components | Render Blog, accessed on November 13, 2025, https://render.com/blog/svelte-design-patterns
Componentizing our Svelte app - Learn web development | MDN, accessed on November 13, 2025, https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_components
Features · Cursor, accessed on November 13, 2025, https://cursor.com/features
SvelteKit with Cursor AI | Chris Ellis, accessed on November 13, 2025, https://www.chrisellis.dev/articles/sveltekit-with-cursor-ai
Model Context Protocol (MCP) | Cursor Docs, accessed on November 13, 2025, https://cursor.com/docs/context/mcp
Svelte MCP setup w/ Cursor : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/1j7twp0/svelte_mcp_setup_w_cursor/
svelte-llm - Svelte 5 and SvelteKit Developer documentation in an LLM-ready format, accessed on November 13, 2025, https://svelte-llm.stanislav.garden/
How and why I built an MCP server for Svelte : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/1n967s0/how_and_why_i_built_an_mcp_server_for_svelte/
Rules for TailwindCSS - Cursor Directory, accessed on November 13, 2025, https://cursor.directory/rules/tailwindcss
Cursor AI: 5 Advanced Features You're Not Using - Builder.io, accessed on November 13, 2025, https://www.builder.io/blog/cursor-advanced-features
PatrickJS/awesome-cursorrules: Configuration files that enhance Cursor AI editor experience with custom rules and behaviors - GitHub, accessed on November 13, 2025, https://github.com/PatrickJS/awesome-cursorrules
Svelte 5 and SvelteKit Development Guide rule by MMBytes, accessed on November 13, 2025, https://cursor.directory/svelte5-sveltekit-development-guide
SvelteKit Tailwind Cursor Rules rule by Ethan Fox - Cursor Directory, accessed on November 13, 2025, https://cursor.directory/sveltekit-tailwind-cursor-rules
Best 15 Svelte UI Components & Libraries for Enterprise-Grade Apps - DEV Community, accessed on November 13, 2025, https://dev.to/olga_tash/best-15-svelte-ui-components-libraries-for-enterprise-grade-apps-23gc
Top 10 Svelte UI Libraries in 2025 - WeAreDevelopers, accessed on November 13, 2025, https://www.wearedevelopers.com/en/magazine/250/top-svelte-ui-libraries
Flowbite Svelte - UI Component Library, accessed on November 13, 2025, https://flowbite-svelte.com/
Theme Generator - Skeleton — UI Toolkit for Svelte + Tailwind, accessed on November 13, 2025, https://v1.skeleton.dev/docs/generator
Themes · Skeleton, accessed on November 13, 2025, https://www.skeleton.dev/docs/design/themes
UI Toolkit for Svelte + Tailwind - Skeleton, accessed on November 13, 2025, https://experimental-skeleton-monorepo-skeleton.vercel.app/docs/get-started
How do I use different themes with Skeleton UI : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/15p6t4w/how_do_i_use_different_themes_with_skeleton_ui/
carbon-design-system/carbon-components-svelte: Svelte ... - GitHub, accessed on November 13, 2025, https://github.com/carbon-design-system/carbon-components-svelte
v1.0.0 Roadmap · carbon-design-system carbon-components-svelte · Discussion #1614 - GitHub, accessed on November 13, 2025, https://github.com/carbon-design-system/carbon-components-svelte/discussions/1614
Carbon Components Svelte, accessed on November 13, 2025, https://svelte.carbondesignsystem.com/
Docs • Svelte, accessed on November 13, 2025, https://svelte.dev/docs
Storybook for Svelte & Vite, accessed on November 13, 2025, https://storybook.js.org/docs/get-started/frameworks/svelte-vite
Storybook adoption guide: Overview, examples, and alternatives - LogRocket Blog, accessed on November 13, 2025, https://blog.logrocket.com/storybook-js-adoption-guide/
I'm so tired of people hating Svelte 5. You don't hate it, what you hate is working with complicated codebases : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im_so_tired_of_people_hating_svelte_5_you_dont/
Histoire | Histoire, accessed on November 13, 2025, https://histoire.dev/
histoire-dev/histoire: Fast and beautiful interactive component playgrounds, powered by Vite - GitHub, accessed on November 13, 2025, https://github.com/histoire-dev/histoire
Improve component stories with Histoire - LogRocket Blog, accessed on November 13, 2025, https://blog.logrocket.com/histoire-component-stories/
story.to.design now supports Histoire, accessed on November 13, 2025, https://story.to.design/blog/histoire-to-figma-support
Why Histoire | Histoire, accessed on November 13, 2025, https://histoire.dev/guide/
Interactive Component Stories Using Histoire | by GOLDTECH - Medium, accessed on November 13, 2025, https://medium.com/@chukwudigolden99/interactive-component-stories-using-histoire-8f92275e8d41
How to write stories? - Histoire, accessed on November 13, 2025, https://histoire.dev/guide/svelte3/stories
Histoire - A new way to write stories with svelte support : r/sveltejs - Reddit, accessed on November 13, 2025, https://www.reddit.com/r/sveltejs/comments/wn7rva/histoire_a_new_way_to_write_stories_with_svelte/
Documentation | Histoire, accessed on November 13, 2025, https://histoire.dev/guide/vue3/docs
