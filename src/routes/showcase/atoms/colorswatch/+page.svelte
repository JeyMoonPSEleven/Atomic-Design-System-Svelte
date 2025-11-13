<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { ColorSwatch, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Primary',
			component: () => {},
			code: '<ColorSwatch color="#3b82f6" />'
		},
		{
			title: 'Danger',
			component: () => {},
			code: '<ColorSwatch color="#ef4444" />'
		},
		{
			title: 'Success',
			component: () => {},
			code: '<ColorSwatch color="#10b981" />'
		},
		{
			title: 'Warning',
			component: () => {},
			code: '<ColorSwatch color="#f59e0b" />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<ColorSwatch size="sm" color="#3b82f6" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<ColorSwatch size="md" color="#3b82f6" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<ColorSwatch size="lg" color="#3b82f6" />'
		}
	];

	const props = [
		{
			name: 'color',
			type: 'string',
			default: "'#3b82f6'",
			required: false,
			description: 'Color hexadecimal del swatch'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del swatch'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet primaryVariant()}
		<ColorSwatch color="#3b82f6" />
	{/snippet}

	{#snippet dangerVariant()}
		<ColorSwatch color="#ef4444" />
	{/snippet}

	{#snippet successVariant()}
		<ColorSwatch color="#10b981" />
	{/snippet}

	{#snippet warningVariant()}
		<ColorSwatch color="#f59e0b" />
	{/snippet}

	{#snippet smallVariant()}
		<ColorSwatch size="sm" color="#3b82f6" />
	{/snippet}

	{#snippet mediumVariant()}
		<ColorSwatch size="md" color="#3b82f6" />
	{/snippet}

	{#snippet largeVariant()}
		<ColorSwatch size="lg" color="#3b82f6" />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: primaryVariant },
		{ ...variants[1], component: dangerVariant },
		{ ...variants[2], component: successVariant },
		{ ...variants[3], component: warningVariant },
		{ ...variants[4], component: smallVariant },
		{ ...variants[5], component: mediumVariant },
		{ ...variants[6], component: largeVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Colores</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, 4)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents.slice(4)} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Paleta de Colores</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<div class="flex gap-4 items-center">
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#3b82f6" />
							<Text class="text-xs">Primary</Text>
						</div>
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#ef4444" />
							<Text class="text-xs">Danger</Text>
						</div>
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#10b981" />
							<Text class="text-xs">Success</Text>
						</div>
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#f59e0b" />
							<Text class="text-xs">Warning</Text>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { ColorSwatch } from '$lib/components/01-atoms';
</script>

<ColorSwatch color="#3b82f6" />
<ColorSwatch color="#ef4444" />
<ColorSwatch color="#10b981" />
<ColorSwatch color="#f59e0b" />

<ColorSwatch size="sm" color="#3b82f6" />
<ColorSwatch size="md" color="#3b82f6" />
<ColorSwatch size="lg" color="#3b82f6" />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'ColorSwatch' }
		]}
	/>

	<ComponentShowcase
		name="ColorSwatch"
		category="Atoms"
		description="Componente para mostrar muestras de color con diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

