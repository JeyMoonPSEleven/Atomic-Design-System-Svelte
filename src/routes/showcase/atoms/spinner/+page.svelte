<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Spinner } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Small',
			component: () => {},
			code: '<Spinner size="sm" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Spinner size="md" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Spinner size="lg" />'
		},
		{
			title: 'XL',
			component: () => {},
			code: '<Spinner size="xl" />'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			required: false,
			description: 'Tamaño del spinner'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet smallVariant()}
		<Spinner size="sm" />
	{/snippet}

	{#snippet mediumVariant()}
		<Spinner size="md" />
	{/snippet}

	{#snippet largeVariant()}
		<Spinner size="lg" />
	{/snippet}

	{#snippet xlVariant()}
		<Spinner size="xl" />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: smallVariant },
		{ ...variants[1], component: mediumVariant },
		{ ...variants[2], component: largeVariant },
		{ ...variants[3], component: xlVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Estados de Carga</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<div class="flex items-center gap-3">
						<Spinner size="sm" />
						<span class="text-text-default">Cargando datos...</span>
					</div>
					<div class="flex items-center gap-3">
						<Spinner size="md" />
						<span class="text-text-default">Procesando...</span>
					</div>
					<div class="flex items-center justify-center py-8">
						<Spinner size="lg" />
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Spinner } from '$lib/components/01-atoms';
</script>

<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Spinner' }
		]}
	/>

	<ComponentShowcase
		name="Spinner"
		category="Atoms"
		description="Componente de spinner para indicar estados de carga con diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

