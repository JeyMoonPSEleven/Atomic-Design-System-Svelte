<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Chart } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const chartData = [
		{ label: 'Ene', value: 20 },
		{ label: 'Feb', value: 35 },
		{ label: 'Mar', value: 15 },
		{ label: 'Abr', value: 40 }
	];

	const variants = [
		{
			title: 'Bar Chart',
			component: () => {},
			code: '<Chart type="bar" data={data} />'
		},
		{
			title: 'Line Chart',
			component: () => {},
			code: '<Chart type="line" data={data} />'
		}
	];

	const props = [
		{
			name: 'type',
			type: "'bar' | 'line' | 'pie'",
			default: "'bar'",
			required: false,
			description: 'Tipo de gráfico'
		},
		{
			name: 'data',
			type: '{label: string, value: number}[]',
			default: 'required',
			required: true,
			description: 'Array de datos con label y value'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet barVariant()}
		<Chart type="bar" data={chartData} />
	{/snippet}

	{#snippet lineVariant()}
		<Chart type="line" data={chartData} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: barVariant },
		{ ...variants[1], component: lineVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tipos de Gráfico</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Dashboard de Gráficos</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<Chart type="bar" data={chartData} />
					<Chart type="line" data={chartData} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Chart } from '$lib/components/03-organisms';
</script>

<Chart type="bar" data={[
  { label: 'Ene', value: 20 },
  { label: 'Feb', value: 35 },
  { label: 'Mar', value: 15 }
]} />

<Chart type="line" data={data} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Chart' }
		]}
	/>

	<ComponentShowcase
		name="Chart"
		category="Organisms"
		description="Componente de gráfico con soporte para barras, líneas y pastel."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

