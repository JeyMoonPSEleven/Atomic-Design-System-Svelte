<script lang="ts">
	import { Card, Breadcrumb } from '$lib/components/02-molecules';
	import { Heading, Text, Badge, Link } from '$lib/components/01-atoms';

	const components = [
		{ name: 'Admin', href: '/showcase/templates/admin', description: 'Layout de administración' },
		{ name: 'ArticleLayout', href: '/showcase/templates/articlelayout', description: 'Layout para artículos' },
		{ name: 'Authentication', href: '/showcase/templates/authentication', description: 'Layout de autenticación' },
		{ name: 'Blog', href: '/showcase/templates/blog', description: 'Layout de blog' },
		{ name: 'Dashboard', href: '/showcase/templates/dashboard', description: 'Layout de dashboard' },
		{ name: 'Documentation', href: '/showcase/templates/documentation', description: 'Layout de documentación' },
		{ name: 'Error', href: '/showcase/templates/error', description: 'Página de error' },
		{ name: 'Landing', href: '/showcase/templates/landing', description: 'Layout de landing page' },
		{ name: 'Maintenance', href: '/showcase/templates/maintenance', description: 'Página de mantenimiento' },
		{ name: 'Profile', href: '/showcase/templates/profile', description: 'Layout de perfil' },
		{ name: 'Settings', href: '/showcase/templates/settings', description: 'Layout de configuración' }
	];
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates' }
		]}
	/>

	<div>
		<Heading level="h1" class="mb-2">Templates</Heading>
		<Text variant="muted" class="mb-6">
			Estructuras de página completas que combinan Organismos, Moléculas y Átomos
		</Text>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each components as component}
			{#snippet componentCard()}
				<div class="flex items-center gap-2 mb-2">
					<Badge variant="secondary">Template</Badge>
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

