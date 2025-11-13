<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Input } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	let inputValue1 = $state('');
	let inputValue2 = $state('');
	let inputValue3 = $state('');

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Input placeholder="Escribe algo..." />'
		},
		{
			title: 'Error',
			component: () => {},
			code: '<Input variant="error" placeholder="Campo con error" />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Input size="sm" placeholder="Small" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Input size="md" placeholder="Medium" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Input size="lg" placeholder="Large" />'
		},
		{
			title: 'With Value',
			component: () => {},
			code: '<Input bindValue={value} placeholder="Con valor" />'
		}
	];

	const props = [
		{
			name: 'variant',
			type: "'default' | 'error'",
			default: "'default'",
			required: false,
			description: 'Variante visual del input'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del input'
		},
		{
			name: 'value',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Valor del input (no reactivo)'
		},
		{
			name: 'bindValue',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Valor del input (reactivo con binding)'
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
			type: 'HTMLInputAttributes',
			default: 'undefined',
			required: false,
			description: 'Todos los atributos HTML estándar de input'
		}
	];

	const codeExample = `<script lang="ts">
  import { Input } from '$lib/components/01-atoms';
  
  let value = $state('');
</script>

<Input placeholder="Escribe algo..." />

<Input variant="error" placeholder="Error" />

<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />

<Input bindValue={value} placeholder="Con binding" />`;
</script>

{#snippet defaultVariant()}
	<Input placeholder="Escribe algo..." />
{/snippet}

{#snippet errorVariant()}
	<Input variant="error" placeholder="Campo con error" />
{/snippet}

{#snippet smallVariant()}
	<Input size="sm" placeholder="Small" />
{/snippet}

{#snippet mediumVariant()}
	<Input size="md" placeholder="Medium" />
{/snippet}

{#snippet largeVariant()}
	<Input size="lg" placeholder="Large" />
{/snippet}

{#snippet withValueVariant()}
	<Input bindValue={inputValue1} placeholder="Con valor" />
{/snippet}

<script>
	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: errorVariant },
		{ ...variants[2], component: smallVariant },
		{ ...variants[3], component: mediumVariant },
		{ ...variants[4], component: largeVariant },
		{ ...variants[5], component: withValueVariant }
	];
</script>

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
			<VariantsGrid variants={variantsWithComponents.slice(0, 2)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
			<VariantsGrid variants={variantsWithComponents.slice(2, 5)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Con Binding</h3>
			<VariantsGrid variants={variantsWithComponents.slice(5)} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Formulario de Contacto</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
				<div class="space-y-4">
					<Input bindValue={inputValue2} placeholder="Nombre" />
					<Input bindValue={inputValue3} type="email" placeholder="Email" />
					<Input variant="error" placeholder="Campo requerido" />
				</div>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Input' }
		]}
	/>

	<ComponentShowcase
		name="Input"
		category="Atoms"
		description="Campo de entrada de texto con variantes, tamaños y soporte para binding reactivo."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

