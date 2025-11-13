<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Divider, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Solid',
			component: () => {},
			code: '<Divider variant="solid" />'
		},
		{
			title: 'Dashed',
			component: () => {},
			code: '<Divider variant="dashed" />'
		},
		{
			title: 'Dotted',
			component: () => {},
			code: '<Divider variant="dotted" />'
		},
		{
			title: 'Small Spacing',
			component: () => {},
			code: '<Divider spacing="sm" />'
		},
		{
			title: 'Medium Spacing',
			component: () => {},
			code: '<Divider spacing="md" />'
		},
		{
			title: 'Large Spacing',
			component: () => {},
			code: '<Divider spacing="lg" />'
		}
	];

	const props = [
		{
			name: 'variant',
			type: "'solid' | 'dashed' | 'dotted'",
			default: "'solid'",
			required: false,
			description: 'Estilo del divisor'
		},
		{
			name: 'spacing',
			type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			required: false,
			description: 'Espaciado vertical del divisor'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	const codeExample = `<script lang="ts">
  import { Divider, Text } from '$lib/components/01-atoms';
</script>

<Text>Texto arriba</Text>
<Divider />
<Text>Texto abajo</Text>

<Divider variant="solid" />
<Divider variant="dashed" />
<Divider variant="dotted" />

<Divider spacing="sm" />
<Divider spacing="md" />
<Divider spacing="lg" />`;
</script>

{#snippet solidVariant()}
	<div class="w-full">
		<Text>Texto arriba</Text>
		<Divider variant="solid" />
		<Text>Texto abajo</Text>
	</div>
{/snippet}

{#snippet dashedVariant()}
	<div class="w-full">
		<Text>Texto arriba</Text>
		<Divider variant="dashed" />
		<Text>Texto abajo</Text>
	</div>
{/snippet}

{#snippet dottedVariant()}
	<div class="w-full">
		<Text>Texto arriba</Text>
		<Divider variant="dotted" />
		<Text>Texto abajo</Text>
	</div>
{/snippet}

{#snippet smallSpacingVariant()}
	<div class="w-full">
		<Text>Texto arriba</Text>
		<Divider spacing="sm" />
		<Text>Texto abajo</Text>
	</div>
{/snippet}

{#snippet mediumSpacingVariant()}
	<div class="w-full">
		<Text>Texto arriba</Text>
		<Divider spacing="md" />
		<Text>Texto abajo</Text>
	</div>
{/snippet}

{#snippet largeSpacingVariant()}
	<div class="w-full">
		<Text>Texto arriba</Text>
		<Divider spacing="lg" />
		<Text>Texto abajo</Text>
	</div>
{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: solidVariant },
		{ ...variants[1], component: dashedVariant },
		{ ...variants[2], component: dottedVariant },
		{ ...variants[3], component: smallSpacingVariant },
		{ ...variants[4], component: mediumSpacingVariant },
		{ ...variants[5], component: largeSpacingVariant }
	];
</script>

{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, 3)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Espaciado</h3>
				<VariantsGrid variants={variantsWithComponents.slice(3)} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Uso en Lista</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<Text>Item 1</Text>
					<Divider />
					<Text>Item 2</Text>
					<Divider variant="dashed" />
					<Text>Item 3</Text>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Divider' }
		]}
	/>

	<ComponentShowcase
		name="Divider"
		category="Atoms"
		description="Componente de divisor/separador visual con diferentes estilos y espaciados."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

