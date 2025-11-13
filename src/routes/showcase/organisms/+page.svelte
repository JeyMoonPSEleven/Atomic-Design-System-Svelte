<script lang="ts">
	import { Card, Breadcrumb } from '$lib/components/02-molecules';
	import { Heading, Text, Badge, Link } from '$lib/components/01-atoms';

	const components = [
		{ name: 'Calendar', href: '/showcase/organisms/calendar', description: 'Calendario interactivo' },
		{ name: 'Carousel', href: '/showcase/organisms/carousel', description: 'Carrusel de imágenes' },
		{ name: 'Chart', href: '/showcase/organisms/chart', description: 'Gráficos y visualizaciones' },
		{ name: 'Dashboard', href: '/showcase/organisms/dashboard', description: 'Dashboard con widgets' },
		{ name: 'DataTable', href: '/showcase/organisms/datatable', description: 'Tabla de datos con paginación' },
		{ name: 'Filters', href: '/showcase/organisms/filters', description: 'Sistema de filtros' },
		{ name: 'Footer', href: '/showcase/organisms/footer', description: 'Pie de página' },
		{ name: 'Form', href: '/showcase/organisms/form', description: 'Formulario completo' },
		{ name: 'Gallery', href: '/showcase/organisms/gallery', description: 'Galería de imágenes' },
		{ name: 'Header', href: '/showcase/organisms/header', description: 'Encabezado de página' },
		{ name: 'Hero', href: '/showcase/organisms/hero', description: 'Sección hero' },
		{ name: 'Navigation', href: '/showcase/organisms/navigation', description: 'Navegación principal' },
		{ name: 'Notifications', href: '/showcase/organisms/notifications', description: 'Sistema de notificaciones' },
		{ name: 'Settings', href: '/showcase/organisms/settings', description: 'Panel de configuración' },
		{ name: 'Sidebar', href: '/showcase/organisms/sidebar', description: 'Barra lateral' },
		{ name: 'Table', href: '/showcase/organisms/table', description: 'Tabla de datos' },
		{ name: 'Toolbar', href: '/showcase/organisms/toolbar', description: 'Barra de herramientas' },
		{ name: 'UserProfile', href: '/showcase/organisms/userprofile', description: 'Perfil de usuario' }
	];
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organismos' }
		]}
	/>

	<div>
		<Heading level="h1" class="mb-2">Organismos</Heading>
		<Text variant="muted" class="mb-6">
			Secciones complejas de UI que combinan Moléculas y Átomos
		</Text>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each components as component}
			{#snippet componentCard()}
				<div class="flex items-center gap-2 mb-2">
					<Badge variant="secondary">Organismo</Badge>
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

