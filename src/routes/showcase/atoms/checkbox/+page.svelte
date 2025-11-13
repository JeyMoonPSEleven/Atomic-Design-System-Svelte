<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Checkbox } from '$lib/components/01-atoms';
	import { Breadcrumb, Text } from '$lib/components/02-molecules';
	import { Text as TextAtom } from '$lib/components/01-atoms';

	let checked1 = $state(false);
	let checked2 = $state(true);
	let checked3 = $state(false);

	const variants = [
		{
			title: 'Unchecked',
			component: () => {},
			code: '<Checkbox />'
		},
		{
			title: 'Checked',
			component: () => {},
			code: '<Checkbox checked={true} />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Checkbox size="sm" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Checkbox size="md" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Checkbox size="lg" />'
		},
		{
			title: 'With Binding',
			component: () => {},
			code: '<Checkbox bind:checked={value} />'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del checkbox'
		},
		{
			name: 'checked',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Estado del checkbox (bindable)'
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

	{#snippet uncheckedVariant()}
		<Checkbox />
	{/snippet}

	{#snippet checkedVariant()}
		<Checkbox checked={true} />
	{/snippet}

	{#snippet smallVariant()}
		<Checkbox size="sm" />
	{/snippet}

	{#snippet mediumVariant()}
		<Checkbox size="md" />
	{/snippet}

	{#snippet largeVariant()}
		<Checkbox size="lg" />
	{/snippet}

	{#snippet withBindingVariant()}
		<Checkbox bind:checked={checked1} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: uncheckedVariant },
		{ ...variants[1], component: checkedVariant },
		{ ...variants[2], component: smallVariant },
		{ ...variants[3], component: mediumVariant },
		{ ...variants[4], component: largeVariant },
		{ ...variants[5], component: withBindingVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Estados</h3>
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
				<h4 class="font-semibold mb-3 text-text-default">Lista de Tareas</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<div class="space-y-3">
						<label class="flex items-center gap-2">
							<Checkbox bind:checked={checked2} />
							<TextAtom>Tarea completada</TextAtom>
						</label>
						<label class="flex items-center gap-2">
							<Checkbox bind:checked={checked3} />
							<TextAtom>Tarea pendiente</TextAtom>
						</label>
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Checkbox } from '$lib/components/01-atoms';
  
  let checked = $state(false);
</script>

<Checkbox />
<Checkbox checked={true} />

<Checkbox size="sm" />
<Checkbox size="md" />
<Checkbox size="lg" />

<Checkbox bind:checked={checked} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Checkbox' }
		]}
	/>

	<ComponentShowcase
		name="Checkbox"
		category="Atoms"
		description="Componente de checkbox con soporte para binding reactivo y diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

