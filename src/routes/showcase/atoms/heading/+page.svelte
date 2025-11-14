<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Heading } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'H1',
			component: () => {},
			code: '<Heading level="h1">Título</Heading>'
		},
		{
			title: 'H2',
			component: () => {},
			code: '<Heading level="h2">Título</Heading>'
		},
		{
			title: 'H3',
			component: () => {},
			code: '<Heading level="h3">Título</Heading>'
		},
		{
			title: 'H4',
			component: () => {},
			code: '<Heading level="h4">Título</Heading>'
		},
		{
			title: 'H5',
			component: () => {},
			code: '<Heading level="h5">Título</Heading>'
		},
		{
			title: 'H6',
			component: () => {},
			code: '<Heading level="h6">Título</Heading>'
		}
	];

	const props = [
		{
			name: 'level',
			type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
			default: "'h1'",
			required: false,
			description: 'Nivel del encabezado'
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
			description: 'Contenido del encabezado'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: h1Variant },
		{ ...variants[1], component: h2Variant },
		{ ...variants[2], component: h3Variant },
		{ ...variants[3], component: h4Variant },
		{ ...variants[4], component: h5Variant },
		{ ...variants[5], component: h6Variant }
	];

	const codeExample = `<script lang="ts">
  import { Heading } from '$lib/components/01-atoms';
<\/script>

<Heading level="h1">Título Principal</Heading>
<Heading level="h2">Sección</Heading>
<Heading level="h3">Subsección</Heading>
<Heading level="h4">Apartado</Heading>
<Heading level="h5">Subapartado</Heading>
<Heading level="h6">Detalle</Heading>`;
</script>

{#snippet h1Variant()}
	<Heading level="h1">Título H1</Heading>
{/snippet}

{#snippet h2Variant()}
	<Heading level="h2">Título H2</Heading>
{/snippet}

{#snippet h3Variant()}
	<Heading level="h3">Título H3</Heading>
{/snippet}

{#snippet h4Variant()}
	<Heading level="h4">Título H4</Heading>
{/snippet}

{#snippet h5Variant()}
	<Heading level="h5">Título H5</Heading>
{/snippet}

{#snippet h6Variant()}
	<Heading level="h6">Título H6</Heading>
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Niveles</h3>
			<VariantsGrid variants={variantsWithComponents} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Estructura de Documento</h4>
			<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
				<Heading level="h1">Título Principal</Heading>
				<Heading level="h2">Sección Principal</Heading>
				<Heading level="h3">Subsección</Heading>
				<Heading level="h4">Apartado</Heading>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Heading' }
		]}
	/>

	<ComponentShowcase
		name="Heading"
		category="Atoms"
		description="Componente de encabezado con diferentes niveles (h1-h6) para estructurar contenido."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

