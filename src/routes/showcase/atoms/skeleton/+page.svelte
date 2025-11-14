<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Skeleton } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Text Small',
			component: () => {},
			code: '<Skeleton variant="text" size="sm" width="w-32" />'
		},
		{
			title: 'Text Medium',
			component: () => {},
			code: '<Skeleton variant="text" size="md" width="w-48" />'
		},
		{
			title: 'Text Large',
			component: () => {},
			code: '<Skeleton variant="text" size="lg" width="w-64" />'
		},
		{
			title: 'Circular',
			component: () => {},
			code: '<Skeleton variant="circular" size="lg" width="w-12" height="h-12" />'
		},
		{
			title: 'Rectangular',
			component: () => {},
			code: '<Skeleton variant="rectangular" size="md" width="w-32" height="h-20" />'
		},
		{
			title: 'Rounded',
			component: () => {},
			code: '<Skeleton variant="rounded" size="lg" width="w-48" height="h-24" />'
		}
	];

	const props = [
		{
			name: 'variant',
			type: "'text' | 'circular' | 'rectangular' | 'rounded'",
			default: "'rectangular'",
			required: false,
			description: 'Variante visual del skeleton'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			required: false,
			description: 'Tamaño del skeleton'
		},
		{
			name: 'width',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Ancho del skeleton (clase Tailwind o valor CSS)'
		},
		{
			name: 'height',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Alto del skeleton (clase Tailwind o valor CSS)'
		},
		{
			name: 'isLoading',
			type: 'boolean',
			default: 'true',
			required: false,
			description: 'Controla si el skeleton está visible'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: textSmallVariant },
		{ ...variants[1], component: textMediumVariant },
		{ ...variants[2], component: textLargeVariant },
		{ ...variants[3], component: circularVariant },
		{ ...variants[4], component: rectangularVariant },
		{ ...variants[5], component: roundedVariant }
	];

	const codeExample = `<script lang="ts">
  import { Skeleton } from '$lib/components/01-atoms';
<\/script>

<Skeleton variant="text" size="sm" width="w-32" />
<Skeleton variant="text" size="md" width="w-48" />
<Skeleton variant="text" size="lg" width="w-64" />

<Skeleton variant="circular" size="lg" width="w-12" height="h-12" />
<Skeleton variant="rectangular" size="md" width="w-32" height="h-20" />
<Skeleton variant="rounded" size="lg" width="w-48" height="h-24" />`;
</script>

{#snippet textSmallVariant()}
	<Skeleton variant="text" size="sm" width="w-32" />
{/snippet}

{#snippet textMediumVariant()}
	<Skeleton variant="text" size="md" width="w-48" />
{/snippet}

{#snippet textLargeVariant()}
	<Skeleton variant="text" size="lg" width="w-64" />
{/snippet}

{#snippet circularVariant()}
	<Skeleton variant="circular" size="lg" width="w-12" height="h-12" />
{/snippet}

{#snippet rectangularVariant()}
	<Skeleton variant="rectangular" size="md" width="w-32" height="h-20" />
{/snippet}

{#snippet roundedVariant()}
	<Skeleton variant="rounded" size="lg" width="w-48" height="h-24" />
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
			<VariantsGrid variants={variantsWithComponents} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Card con Skeleton</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
				<Skeleton variant="rectangular" width="w-full" height="h-48" />
				<Skeleton variant="text" size="md" width="w-3/4" class="mt-4" />
				<Skeleton variant="text" size="sm" width="w-full" class="mt-2" />
				<Skeleton variant="text" size="sm" width="w-5/6" class="mt-2" />
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Skeleton' }
		]}
	/>

	<ComponentShowcase
		name="Skeleton"
		category="Atoms"
		description="Componente de skeleton loader para mostrar estados de carga con diferentes variantes y tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

