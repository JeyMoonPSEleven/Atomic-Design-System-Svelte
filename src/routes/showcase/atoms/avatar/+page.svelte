<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Avatar } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'With Image',
			component: () => {},
			code: '<Avatar src="url" alt="Avatar" />'
		},
		{
			title: 'With Initials',
			component: () => {},
			code: '<Avatar initials="JD" />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Avatar size="sm" initials="JD" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Avatar size="md" initials="JD" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Avatar size="lg" initials="JD" />'
		},
		{
			title: 'XL',
			component: () => {},
			code: '<Avatar size="xl" initials="JD" />'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			required: false,
			description: 'Tamaño del avatar'
		},
		{
			name: 'src',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'URL de la imagen del avatar'
		},
		{
			name: 'alt',
			type: 'string',
			default: "'Avatar'",
			required: false,
			description: 'Texto alternativo para la imagen'
		},
		{
			name: 'initials',
			type: 'string',
			default: "'?'",
			required: false,
			description: 'Iniciales a mostrar si no hay imagen'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet withImageVariant()}
		<Avatar src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
	{/snippet}

	{#snippet withInitialsVariant()}
		<Avatar initials="JD" />
	{/snippet}

	{#snippet smallVariant()}
		<Avatar size="sm" initials="JD" />
	{/snippet}

	{#snippet mediumVariant()}
		<Avatar size="md" initials="JD" />
	{/snippet}

	{#snippet largeVariant()}
		<Avatar size="lg" initials="JD" />
	{/snippet}

	{#snippet xlVariant()}
		<Avatar size="xl" initials="JD" />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: withImageVariant },
		{ ...variants[1], component: withInitialsVariant },
		{ ...variants[2], component: smallVariant },
		{ ...variants[3], component: mediumVariant },
		{ ...variants[4], component: largeVariant },
		{ ...variants[5], component: xlVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tipos</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, 2)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents.slice(2)} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Lista de Usuarios</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<div class="space-y-3">
						<div class="flex items-center gap-3">
							<Avatar src="https://i.pravatar.cc/150?img=1" alt="Usuario 1" />
							<div>
								<div class="font-medium text-text-default">Juan Pérez</div>
								<div class="text-sm text-text-muted">juan@example.com</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Avatar initials="MP" />
							<div>
								<div class="font-medium text-text-default">María García</div>
								<div class="text-sm text-text-muted">maria@example.com</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</script>

<script>
	const codeExample = `<script lang="ts">
  import { Avatar } from '$lib/components/01-atoms';
</script>

<Avatar src="https://example.com/avatar.jpg" alt="Avatar" />
<Avatar initials="JD" />

<Avatar size="sm" initials="JD" />
<Avatar size="md" initials="JD" />
<Avatar size="lg" initials="JD" />
<Avatar size="xl" initials="JD" />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Avatar' }
		]}
	/>

	<ComponentShowcase
		name="Avatar"
		category="Atoms"
		description="Componente de avatar que muestra una imagen o iniciales con diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

