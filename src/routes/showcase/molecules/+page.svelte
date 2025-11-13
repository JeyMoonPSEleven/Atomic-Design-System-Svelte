<script lang="ts">
	import { Card, Breadcrumb } from '$lib/components/02-molecules';
	import { Heading, Text, Badge, Link } from '$lib/components/01-atoms';

	const components = [
		{ name: 'Accordion', href: '/showcase/molecules/accordion', description: 'Acordeón colapsable' },
		{ name: 'Alert', href: '/showcase/molecules/alert', description: 'Alerta o notificación' },
		{ name: 'Breadcrumb', href: '/showcase/molecules/breadcrumb', description: 'Navegación de migas de pan' },
		{ name: 'Card', href: '/showcase/molecules/card', description: 'Tarjeta con header, body y footer' },
		{ name: 'DatePicker', href: '/showcase/molecules/datepicker', description: 'Selector de fecha' },
		{ name: 'Dropdown', href: '/showcase/molecules/dropdown', description: 'Menú desplegable' },
		{ name: 'Field', href: '/showcase/molecules/field', description: 'Campo de formulario con label y error' },
		{ name: 'FileUpload', href: '/showcase/molecules/fileupload', description: 'Subida de archivos' },
		{ name: 'GroupButton', href: '/showcase/molecules/groupbutton', description: 'Grupo de botones' },
		{ name: 'Menu', href: '/showcase/molecules/menu', description: 'Menú de navegación' },
		{ name: 'Modal', href: '/showcase/molecules/modal', description: 'Ventana modal' },
		{ name: 'Pagination', href: '/showcase/molecules/pagination', description: 'Paginación' },
		{ name: 'Rating', href: '/showcase/molecules/rating', description: 'Calificación con estrellas' },
		{ name: 'SearchBar', href: '/showcase/molecules/searchbar', description: 'Barra de búsqueda' },
		{ name: 'SearchForm', href: '/showcase/molecules/searchform', description: 'Formulario de búsqueda' },
		{ name: 'Stepper', href: '/showcase/molecules/stepper', description: 'Indicador de pasos' },
		{ name: 'Tabs', href: '/showcase/molecules/tabs', description: 'Pestañas' },
		{ name: 'Timeline', href: '/showcase/molecules/timeline', description: 'Línea de tiempo' },
		{ name: 'Toast', href: '/showcase/molecules/toast', description: 'Notificación toast' },
		{ name: 'Tooltip', href: '/showcase/molecules/tooltip', description: 'Tooltip informativo' }
	];
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Moléculas' }
		]}
	/>

	<div>
		<Heading level="h1" class="mb-2">Moléculas</Heading>
		<Text variant="muted" class="mb-6">
			Composiciones de Átomos que forman componentes más complejos
		</Text>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each components as component}
			{#snippet componentCard()}
				<div class="flex items-center gap-2 mb-2">
					<Badge variant="secondary">Molécula</Badge>
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

