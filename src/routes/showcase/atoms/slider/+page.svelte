<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Slider } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';

	let sliderValue1 = $state(50);
	let sliderValue2 = $state(25);
	let sliderValue3 = $state(75);

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Slider bind:value={value} />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Slider size="sm" bind:value={value} />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Slider size="md" bind:value={value} />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Slider size="lg" bind:value={value} />'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del slider'
		},
		{
			name: 'value',
			type: 'number',
			default: '0',
			required: false,
			description: 'Valor del slider (bindable)'
		},
		{
			name: 'min',
			type: 'number',
			default: '0',
			required: false,
			description: 'Valor mínimo'
		},
		{
			name: 'max',
			type: 'number',
			default: '100',
			required: false,
			description: 'Valor máximo'
		},
		{
			name: 'step',
			type: 'number',
			default: '1',
			required: false,
			description: 'Incremento del valor'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet defaultVariant()}
		<Slider bind:value={sliderValue1} min={0} max={100} />
	{/snippet}

	{#snippet smallVariant()}
		<Slider size="sm" bind:value={sliderValue2} min={0} max={100} />
	{/snippet}

	{#snippet mediumVariant()}
		<Slider size="md" bind:value={sliderValue1} min={0} max={100} />
	{/snippet}

	{#snippet largeVariant()}
		<Slider size="lg" bind:value={sliderValue3} min={0} max={100} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: smallVariant },
		{ ...variants[2], component: mediumVariant },
		{ ...variants[3], component: largeVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Control de Volumen</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<div>
						<div class="flex justify-between mb-2">
							<Text class="text-sm">Volumen</Text>
							<Text class="text-sm text-text-muted">{sliderValue1}%</Text>
						</div>
						<Slider bind:value={sliderValue1} min={0} max={100} />
					</div>
					<div>
						<div class="flex justify-between mb-2">
							<Text class="text-sm">Brillo</Text>
							<Text class="text-sm text-text-muted">{sliderValue2}%</Text>
						</div>
						<Slider bind:value={sliderValue2} min={0} max={100} />
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Slider } from '$lib/components/01-atoms';
  
  let value = $state(50);
</script>

<Slider bind:value={value} min={0} max={100} />

<Slider size="sm" bind:value={value} />
<Slider size="md" bind:value={value} />
<Slider size="lg" bind:value={value} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Slider' }
		]}
	/>

	<ComponentShowcase
		name="Slider"
		category="Atoms"
		description="Componente de slider para seleccionar valores numéricos en un rango con diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

