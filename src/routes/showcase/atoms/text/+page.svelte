<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Text>Texto normal</Text>'
		},
		{
			title: 'Muted',
			component: () => {},
			code: '<Text variant="muted">Texto muted</Text>'
		},
		{
			title: 'Danger',
			component: () => {},
			code: '<Text variant="danger">Texto danger</Text>'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Text size="sm">Texto pequeño</Text>'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Text size="md">Texto medio</Text>'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Text size="lg">Texto grande</Text>'
		},
		{
			title: 'Bold',
			component: () => {},
			code: '<Text weight="bold">Texto en negrita</Text>'
		}
	];

	const props = [
		{
			name: 'variant',
			type: "'default' | 'muted' | 'danger'",
			default: "'default'",
			required: false,
			description: 'Variante visual del texto'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del texto'
		},
		{
			name: 'weight',
			type: "'normal' | 'medium' | 'semibold' | 'bold'",
			default: "'normal'",
			required: false,
			description: 'Peso de la fuente'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido del texto'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: mutedVariant },
		{ ...variants[2], component: dangerVariant },
		{ ...variants[3], component: smallVariant },
		{ ...variants[4], component: mediumVariant },
		{ ...variants[5], component: largeVariant },
		{ ...variants[6], component: boldVariant }
	];

	const codeExample = `<script lang="ts">
  import { Text } from '$lib/components/01-atoms';
<\/script>

<Text>Texto normal</Text>
<Text variant="muted">Texto muted</Text>
<Text variant="danger">Texto danger</Text>

<Text size="sm">Texto pequeño</Text>
<Text size="md">Texto medio</Text>
<Text size="lg">Texto grande</Text>

<Text weight="normal">Normal</Text>
<Text weight="medium">Medium</Text>
<Text weight="semibold">Semibold</Text>
<Text weight="bold">Bold</Text>`;
</script>

{#snippet defaultVariant()}
	<Text>Texto normal</Text>
{/snippet}

{#snippet mutedVariant()}
	<Text variant="muted">Texto muted</Text>
{/snippet}

{#snippet dangerVariant()}
	<Text variant="danger">Texto danger</Text>
{/snippet}

{#snippet smallVariant()}
	<Text size="sm">Texto pequeño</Text>
{/snippet}

{#snippet mediumVariant()}
	<Text size="md">Texto medio</Text>
{/snippet}

{#snippet largeVariant()}
	<Text size="lg">Texto grande</Text>
{/snippet}

{#snippet boldVariant()}
	<Text weight="bold">Texto en negrita</Text>
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
			<VariantsGrid variants={variantsWithComponents.slice(0, 3)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
			<VariantsGrid variants={variantsWithComponents.slice(3, 6)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Pesos</h3>
			<VariantsGrid variants={variantsWithComponents.slice(6)} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Tipografía en Contexto</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-2">
				<Text size="lg" weight="bold">Título de Sección</Text>
				<Text>Este es un párrafo normal con texto descriptivo.</Text>
				<Text variant="muted" size="sm">Texto secundario o de ayuda</Text>
				<Text variant="danger" size="sm">Mensaje de error importante</Text>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Text' }
		]}
	/>

	<ComponentShowcase
		name="Text"
		category="Atoms"
		description="Componente de texto con variantes, tamaños y pesos de fuente para diferentes contextos."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

