#!/usr/bin/env node

/**
 * Script helper para generar páginas de showcase
 * Analiza componentes y genera páginas de forma semi-automatizada
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Mapeo de componentes a información básica
const componentInfo = {
	// Atoms
	'Input': {
		description: 'Campo de entrada de texto con variantes, tamaños y soporte para binding reactivo.',
		variants: ['default', 'error'],
		sizes: ['sm', 'md', 'lg']
	},
	'Checkbox': {
		description: 'Componente de checkbox con soporte para binding reactivo y diferentes tamaños.',
		sizes: ['sm', 'md', 'lg']
	},
	'Radio': {
		description: 'Componente de radio button con soporte para grupos y diferentes tamaños.',
		sizes: ['sm', 'md', 'lg']
	},
	'Select': {
		description: 'Componente de select con soporte para opciones y diferentes tamaños.',
		sizes: ['sm', 'md', 'lg']
	},
	'Slider': {
		description: 'Componente de slider para seleccionar valores numéricos en un rango.',
	},
	'Switch': {
		description: 'Componente de switch/toggle con soporte para binding reactivo.',
		sizes: ['sm', 'md', 'lg']
	},
	'Avatar': {
		description: 'Componente de avatar que muestra una imagen o iniciales con diferentes tamaños.',
		sizes: ['sm', 'md', 'lg', 'xl']
	},
	'Badge': {
		description: 'Componente de badge para mostrar etiquetas, estados o categorías con múltiples variantes visuales.',
		variants: ['default', 'secondary', 'success', 'warning', 'danger'],
		sizes: ['sm', 'md', 'lg']
	},
	'ColorSwatch': {
		description: 'Componente para mostrar muestras de color con diferentes tamaños.',
		sizes: ['sm', 'md', 'lg']
	},
	'Divider': {
		description: 'Componente de divisor/separador visual.',
	},
	'Heading': {
		description: 'Componente de encabezado con diferentes niveles (h1-h6).',
		levels: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
	},
	'Icon': {
		description: 'Componente de icono con diferentes tamaños.',
		sizes: ['sm', 'md', 'lg']
	},
	'Image': {
		description: 'Componente de imagen con soporte para lazy loading y diferentes tamaños.',
	},
	'Link': {
		description: 'Componente de enlace con diferentes variantes.',
		variants: ['default', 'muted', 'danger']
	},
	'Logo': {
		description: 'Componente de logo personalizable.',
	},
	'Progress': {
		description: 'Componente de barra de progreso con diferentes tamaños.',
		sizes: ['sm', 'md', 'lg']
	},
	'Skeleton': {
		description: 'Componente de skeleton loader para estados de carga.',
	},
	'Spinner': {
		description: 'Componente de spinner para indicar carga.',
		sizes: ['sm', 'md', 'lg']
	},
	'Text': {
		description: 'Componente de texto con variantes, tamaños y pesos.',
		variants: ['default', 'muted', 'danger'],
		sizes: ['sm', 'md', 'lg'],
		weights: ['normal', 'medium', 'semibold', 'bold']
	},
	'Video': {
		description: 'Componente de video con controles y soporte para poster.',
	},
	// Molecules
	'Accordion': {
		description: 'Componente de acordeón para mostrar contenido colapsable.',
	},
	'Alert': {
		description: 'Componente de alerta para mostrar mensajes informativos, de éxito, advertencia o error.',
		variants: ['info', 'success', 'warning', 'danger']
	},
	'Breadcrumb': {
		description: 'Componente de breadcrumb para navegación jerárquica.',
	},
	'Card': {
		description: 'Componente de tarjeta flexible con soporte para header, body y footer, con diferentes tamaños de padding.',
		padding: ['none', 'sm', 'md', 'lg']
	},
	'DatePicker': {
		description: 'Componente de selector de fecha.',
	},
	'Dropdown': {
		description: 'Componente de menú desplegable.',
	},
	'Field': {
		description: 'Componente de campo de formulario con label y mensaje de error.',
	},
	'FileUpload': {
		description: 'Componente para subir archivos.',
	},
	'GroupButton': {
		description: 'Componente de grupo de botones para selección múltiple.',
	},
	'Menu': {
		description: 'Componente de menú con items y acciones.',
	},
	'Modal': {
		description: 'Componente de modal/diálogo con diferentes tamaños, soporte para título y footer, y cierre automático al hacer clic fuera.',
		sizes: ['sm', 'md', 'lg', 'xl', 'full']
	},
	'Pagination': {
		description: 'Componente de paginación para navegar entre páginas.',
	},
	'Rating': {
		description: 'Componente de calificación con estrellas.',
	},
	'SearchBar': {
		description: 'Componente de barra de búsqueda con input y botón.',
	},
	'SearchForm': {
		description: 'Componente de formulario de búsqueda.',
	},
	'Stepper': {
		description: 'Componente de stepper para procesos multi-paso.',
	},
	'Tabs': {
		description: 'Componente de tabs para organizar contenido en pestañas.',
	},
	'Timeline': {
		description: 'Componente de línea de tiempo para mostrar eventos cronológicos.',
	},
	'Toast': {
		description: 'Componente de toast para notificaciones temporales.',
		variants: ['info', 'success', 'warning', 'error']
	},
	'Tooltip': {
		description: 'Componente de tooltip para mostrar información adicional.',
	}
};

function toKebabCase(str) {
	return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

function generateShowcasePage(componentName, category, info) {
	const kebabName = toKebabCase(componentName);
	const categoryPath = category.toLowerCase();
	
	const template = `<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { ${componentName} } from '$lib/components/${category === 'Atoms' ? '01-atoms' : category === 'Molecules' ? '02-molecules' : category === 'Organisms' ? '03-organisms' : '04-templates'}';
	import { Breadcrumb } from '$lib/components/02-molecules';
	${info.variants || info.sizes || info.levels ? `import { Text } from '$lib/components/01-atoms';` : ''}

	const variants = [
		${generateVariants(componentName, info)}
	];

	const props = [
		${generateProps(componentName, info)}
	];

	${generateSnippets(componentName, info)}

	const variantsWithComponents = [
		${generateVariantsWithComponents(componentName, info)}
	];

	{#snippet preview()}
		<div class="space-y-8">
			${generatePreviewSections(componentName, info)}
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Ejemplo de Uso</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					${generateExample(componentName, info)}
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = \`${generateCodeExample(componentName, info)}\`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: '${category}', href: '/showcase/${categoryPath}' },
			{ label: '${componentName}' }
		]}
	/>

	<ComponentShowcase
		name="${componentName}"
		category="${category}"
		description="${info.description || `Componente ${componentName.toLowerCase()}.`}"
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>
`;

	return template;
}

function generateVariants(componentName, info) {
	const variants = [];
	
	if (info.variants) {
		info.variants.forEach(variant => {
			variants.push(`{
			title: '${variant.charAt(0).toUpperCase() + variant.slice(1)}',
			component: () => {},
			code: '<${componentName} variant="${variant}">${componentName === 'Badge' || componentName === 'Text' ? 'Texto' : ''}</${componentName}>'
		}`);
		});
	}
	
	if (info.sizes) {
		info.sizes.forEach(size => {
			variants.push(`{
			title: '${size.toUpperCase()}',
			component: () => {},
			code: '<${componentName} size="${size}">${componentName === 'Badge' || componentName === 'Text' ? 'Texto' : ''}</${componentName}>'
		}`);
		});
	}
	
	if (info.levels) {
		info.levels.forEach(level => {
			variants.push(`{
			title: '${level.toUpperCase()}',
			component: () => {},
			code: '<${componentName} level="${level}">Título</${componentName}>'
		}`);
		});
	}
	
	return variants.join(',\n\t\t');
}

function generateProps(componentName, info) {
	// Props básicas comunes
	const props = [
		`{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}`
	];
	
	if (info.variants) {
		props.unshift(`{
			name: 'variant',
			type: "'${info.variants.join("' | '")}'",
			default: "'${info.variants[0]}'",
			required: false,
			description: 'Variante visual del componente'
		}`);
	}
	
	if (info.sizes) {
		props.unshift(`{
			name: 'size',
			type: "'${info.sizes.join("' | '")}'",
			default: "'${info.sizes[Math.floor(info.sizes.length / 2)] || info.sizes[0]}'",
			required: false,
			description: 'Tamaño del componente'
		}`);
	}
	
	return props.join(',\n\t\t');
}

function generateSnippets(componentName, info) {
	// Esta función se completaría leyendo el componente real
	return '// Snippets generados automáticamente';
}

function generateVariantsWithComponents(componentName, info) {
	// Esta función se completaría generando los snippets reales
	return '// Variants with components';
}

function generatePreviewSections(componentName, info) {
	if (info.variants && info.sizes) {
		return `<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, ${info.variants.length})} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents.slice(${info.variants.length})} />
			</section>`;
	} else if (info.variants) {
		return `<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>`;
	} else if (info.sizes) {
		return `<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>`;
	}
	return '<VariantsGrid variants={variantsWithComponents} />';
}

function generateExample(componentName, info) {
	return `<${componentName}${info.variants ? ` variant="${info.variants[0]}"` : ''}${info.sizes ? ` size="${info.sizes[0]}"` : ''}>${componentName === 'Badge' || componentName === 'Text' ? 'Ejemplo' : ''}</${componentName}>`;
}

function generateCodeExample(componentName, info) {
	return `<script lang="ts">
  import { ${componentName} } from '$lib/components/...';
</script>

<${componentName}${info.variants ? ` variant="${info.variants[0]}"` : ''}${info.sizes ? ` size="${info.sizes[0]}"` : ''} />`;
}

// Función principal
export function generatePage(componentName, category) {
	const info = componentInfo[componentName] || { description: `Componente ${componentName.toLowerCase()}.` };
	const pageContent = generateShowcasePage(componentName, category, info);
	
	const kebabName = toKebabCase(componentName);
	const categoryPath = category.toLowerCase();
	const filePath = join(__dirname, `../src/routes/showcase/${categoryPath}/${kebabName}/+page.svelte`);
	
	writeFileSync(filePath, pageContent, 'utf-8');
	console.log(`✅ Generada página para ${componentName}`);
}

