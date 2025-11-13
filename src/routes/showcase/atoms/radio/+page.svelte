<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Radio } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';

	let radioGroup = $state('');
	let radioGroup2 = $state('');

	const variants = [
		{
			title: 'Unselected',
			component: () => {},
			code: '<Radio group={group} value="option1" />'
		},
		{
			title: 'Selected',
			component: () => {},
			code: '<Radio group={group} value="option1" />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Radio size="sm" group={group} value="option1" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Radio size="md" group={group} value="option1" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Radio size="lg" group={group} value="option1" />'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del radio button'
		},
		{
			name: 'group',
			type: 'string',
			default: "''",
			required: false,
			description: 'Grupo del radio (bindable)'
		},
		{
			name: 'value',
			type: 'string',
			default: 'undefined',
			required: true,
			description: 'Valor del radio button'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet unselectedVariant()}
		<Radio group={radioGroup} value="option1" />
	{/snippet}

	{#snippet selectedVariant()}
		<Radio group={radioGroup} value="option2" />
	{/snippet}

	{#snippet smallVariant()}
		<Radio size="sm" group={radioGroup2} value="option1" />
	{/snippet}

	{#snippet mediumVariant()}
		<Radio size="md" group={radioGroup2} value="option2" />
	{/snippet}

	{#snippet largeVariant()}
		<Radio size="lg" group={radioGroup2} value="option3" />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: unselectedVariant },
		{ ...variants[1], component: selectedVariant },
		{ ...variants[2], component: smallVariant },
		{ ...variants[3], component: mediumVariant },
		{ ...variants[4], component: largeVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Estados</h3>
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
				<h4 class="font-semibold mb-3 text-text-default">Selección de Opción</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<div class="space-y-2">
						<label class="flex items-center gap-2">
							<Radio group={radioGroup} value="opcion1" />
							<Text>Opción 1</Text>
						</label>
						<label class="flex items-center gap-2">
							<Radio group={radioGroup} value="opcion2" />
							<Text>Opción 2</Text>
						</label>
						<label class="flex items-center gap-2">
							<Radio group={radioGroup} value="opcion3" />
							<Text>Opción 3</Text>
						</label>
						<Text class="text-sm text-text-muted mt-2">Seleccionado: {radioGroup || 'Ninguno'}</Text>
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Radio } from '$lib/components/01-atoms';
  
  let group = $state('');
</script>

<Radio group={group} value="option1" />
<Radio group={group} value="option2" />

<Radio size="sm" group={group} value="option1" />
<Radio size="md" group={group} value="option2" />
<Radio size="lg" group={group} value="option3" />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Radio' }
		]}
	/>

	<ComponentShowcase
		name="Radio"
		category="Atoms"
		description="Componente de radio button con soporte para grupos y diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

