<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Rating } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

let ratingValue1 = $state(3);

let ratingValue2 = $state(0);

const variants = [
		{
			title: 'Default (5 stars)',
			component: () => {},
			code: '<Rating bind:value={value} />'
		},
		{
			title: 'Custom Max',
			component: () => {},
			code: '<Rating max={10} bind:value={value} />'
		},
		{
			title: 'Readonly',
			component: () => {},
			code: '<Rating value={4} readonly />'
		}
	];

const props = [
		{
			name: 'value',
			type: 'number',
			default: '0',
			required: false,
			description: 'Valor de la calificación (bindable)'
		},
		{
			name: 'max',
			type: 'number',
			default: '5',
			required: false,
			description: 'Valor máximo de la calificación'
		},
		{
			name: 'readonly',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Hace el rating de solo lectura'
		},
		{
			name: 'onchange',
			type: '(value: number) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando cambia la calificación'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

let value = $state(3);

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: customMaxVariant },
		{ ...variants[2], component: readonlyVariant }
	];

	const codeExample = `<script lang="ts">
  import { Rating } from '$lib/components/02-molecules';
  
  let value = $state(3);
<\/script>

<Rating bind:value={value} />
<Rating max={10} bind:value={value} />
<Rating value={4} readonly />`;
</script>

{#snippet customMaxVariant()}
		<Rating max={10} bind:value={ratingValue2} />
	{/snippet}

{#snippet readonlyVariant()}
		<Rating value={4} readonly />
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
				<h4 class="font-semibold mb-3 text-text-default">Calificación de Producto</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<div>
						<Text class="mb-2 block">Califica este producto</Text>
						<Rating bind:value={ratingValue1} onchange={(v) => console.log('Calificación:', v)} />
						<Text class="text-sm text-text-muted mt-2">Valor: {ratingValue1}</Text>
					</div>
					<div>
						<Text class="mb-2 block">Calificación promedio (solo lectura)</Text>
						<Rating value={4.5} readonly />
					</div>
				</div>
			</div>
		</div>
	{/snippet}

{#snippet defaultVariant()}
	<Rating bind:value={ratingValue1} />
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Rating' }
		]}
	/>

	<ComponentShowcase
		name="Rating"
		category="Molecules"
		description="Componente de calificación con estrellas, soporte para valores personalizados y modo de solo lectura."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>