<script lang="ts">
	import { Card, Breadcrumb } from '$lib/components/02-molecules';
	import { Heading, Text, Badge, Link } from '$lib/components/01-atoms';

	const components = [
		{ name: 'Button', href: '/showcase/atoms/button', description: 'Botón versátil con múltiples variantes' },
		{ name: 'Input', href: '/showcase/atoms/input', description: 'Campo de entrada de texto' },
		{ name: 'Checkbox', href: '/showcase/atoms/checkbox', description: 'Casilla de verificación' },
		{ name: 'Radio', href: '/showcase/atoms/radio', description: 'Botón de opción' },
		{ name: 'Select', href: '/showcase/atoms/select', description: 'Selector desplegable' },
		{ name: 'Slider', href: '/showcase/atoms/slider', description: 'Control deslizante' },
		{ name: 'Switch', href: '/showcase/atoms/switch', description: 'Interruptor de encendido/apagado' },
		{ name: 'Avatar', href: '/showcase/atoms/avatar', description: 'Avatar de usuario' },
		{ name: 'Badge', href: '/showcase/atoms/badge', description: 'Etiqueta o insignia' },
		{ name: 'ColorSwatch', href: '/showcase/atoms/colorswatch', description: 'Muestra de color' },
		{ name: 'Divider', href: '/showcase/atoms/divider', description: 'Separador visual' },
		{ name: 'Heading', href: '/showcase/atoms/heading', description: 'Encabezado de texto' },
		{ name: 'Icon', href: '/showcase/atoms/icon', description: 'Icono' },
		{ name: 'Image', href: '/showcase/atoms/image', description: 'Imagen' },
		{ name: 'Link', href: '/showcase/atoms/link', description: 'Enlace' },
		{ name: 'Logo', href: '/showcase/atoms/logo', description: 'Logo' },
		{ name: 'Progress', href: '/showcase/atoms/progress', description: 'Barra de progreso' },
		{ name: 'Skeleton', href: '/showcase/atoms/skeleton', description: 'Placeholder de carga' },
		{ name: 'Spinner', href: '/showcase/atoms/spinner', description: 'Indicador de carga' },
		{ name: 'Text', href: '/showcase/atoms/text', description: 'Texto' },
		{ name: 'Video', href: '/showcase/atoms/video', description: 'Reproductor de video' }
	];
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Átomos' }
		]}
	/>

	<div>
		<Heading level="h1" class="mb-2">Átomos</Heading>
		<Text variant="muted" class="mb-6">
			Componentes básicos e indivisibles que forman la base del sistema de diseño
		</Text>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each components as component}
			{#snippet componentCard()}
				<div class="flex items-center gap-2 mb-2">
					<Badge variant="secondary">Átomo</Badge>
					<Heading level="h4">{component.name}</Heading>
				</div>
				<Text variant="muted" class="mb-4 text-sm">
					{component.description}
				</Text>
				<Link href={component.href} class="text-primary text-sm">
					Ver componente →
				</Link>
			{/snippet}
			<Card children={componentCard} />
		{/each}
	</div>
</div>

