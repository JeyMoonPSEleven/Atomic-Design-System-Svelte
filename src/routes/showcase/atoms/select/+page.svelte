<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Select } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';

	let selectValue1 = $state('');
	let selectValue2 = $state('');

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Select><option>Opción</option></Select>'
		},
		{
			title: 'Error',
			component: () => {},
			code: '<Select variant="error"><option>Opción</option></Select>'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Select size="sm"><option>Opción</option></Select>'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Select size="md"><option>Opción</option></Select>'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Select size="lg"><option>Opción</option></Select>'
		}
	];

	const props = [
		{
			name: 'variant',
			type: "'default' | 'error'",
			default: "'default'",
			required: false,
			description: 'Variante visual del select'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del select'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Opciones del select (elementos option)'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		},
		{
			name: '...rest',
			type: 'HTMLSelectAttributes',
			default: 'undefined',
			required: false,
			description: 'Todos los atributos HTML estándar de select'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: errorVariant },
		{ ...variants[2], component: smallVariant },
		{ ...variants[3], component: mediumVariant },
		{ ...variants[4], component: largeVariant }
	];

	const codeExample = `<script lang="ts">
  import { Select } from '$lib/components/01-atoms';
  
  let value = $state('');
<\/script>

<Select>
  <option value="">Selecciona una opción</option>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
</Select>

<Select variant="error">
  <option value="">Error</option>
</Select>

<Select size="sm">...</Select>
<Select size="md">...</Select>
<Select size="lg">...</Select>`;
</script>

{#snippet defaultOptions()}
	<option value="">Selecciona una opción</option>
	<option value="1">Opción 1</option>
	<option value="2">Opción 2</option>
{/snippet}

{#snippet defaultVariant()}
	<Select>{@render defaultOptions()}</Select>
{/snippet}

{#snippet errorOptions()}
	<option value="">Selecciona una opción</option>
	<option value="1">Opción 1</option>
{/snippet}

{#snippet errorVariant()}
	<Select variant="error">{@render errorOptions()}</Select>
{/snippet}

{#snippet smallOptions()}
	<option value="">Small</option>
	<option value="1">Opción</option>
{/snippet}

{#snippet smallVariant()}
	<Select size="sm">{@render smallOptions()}</Select>
{/snippet}

{#snippet mediumOptions()}
	<option value="">Medium</option>
	<option value="1">Opción</option>
{/snippet}

{#snippet mediumVariant()}
	<Select size="md">{@render mediumOptions()}</Select>
{/snippet}

{#snippet largeOptions()}
	<option value="">Large</option>
	<option value="1">Opción</option>
{/snippet}

{#snippet largeVariant()}
	<Select size="lg">{@render largeOptions()}</Select>
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
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
			<h4 class="font-semibold mb-3 text-text-default">Formulario de Selección</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
				<div>
					<Text class="mb-2 block">País</Text>
					{#snippet countryOptions()}
						<option value="">Selecciona un país</option>
						<option value="es">España</option>
						<option value="mx">México</option>
						<option value="ar">Argentina</option>
					{/snippet}
					<Select bind:value={selectValue1}>{@render countryOptions()}</Select>
				</div>
				<div>
					<Text class="mb-2 block">Ciudad</Text>
					{#snippet cityOptions()}
						<option value="">Selecciona una ciudad</option>
						<option value="madrid">Madrid</option>
						<option value="barcelona">Barcelona</option>
					{/snippet}
					<Select bind:value={selectValue2} variant={selectValue1 ? 'default' : 'error'}>{@render cityOptions()}</Select>
				</div>
				<Text class="text-sm text-text-muted">Seleccionado: {selectValue1 || 'Ninguno'}</Text>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Select' }
		]}
	/>

	<ComponentShowcase
		name="Select"
		category="Atoms"
		description="Componente de select con soporte para opciones, variantes y diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

