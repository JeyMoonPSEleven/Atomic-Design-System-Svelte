<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Progress } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: '25%',
			component: () => {},
			code: '<Progress value={25} />'
		},
		{
			title: '50%',
			component: () => {},
			code: '<Progress value={50} />'
		},
		{
			title: '75%',
			component: () => {},
			code: '<Progress value={75} />'
		},
		{
			title: '100%',
			component: () => {},
			code: '<Progress value={100} />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Progress size="sm" value={50} />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Progress size="md" value={50} />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Progress size="lg" value={50} />'
		}
	];

	const props = [
		{
			name: 'value',
			type: 'number',
			default: '0',
			required: false,
			description: 'Valor del progreso (0-100)'
		},
		{
			name: 'max',
			type: 'number',
			default: '100',
			required: false,
			description: 'Valor máximo del progreso'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño de la barra de progreso'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: progress25 },
		{ ...variants[1], component: progress50 },
		{ ...variants[2], component: progress75 },
		{ ...variants[3], component: progress100 },
		{ ...variants[4], component: smallVariant },
		{ ...variants[5], component: mediumVariant },
		{ ...variants[6], component: largeVariant }
	];

	const codeExample = `<script lang="ts">
  import { Progress } from '$lib/components/01-atoms';
<\/script>

<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />

<Progress size="sm" value={50} />
<Progress size="md" value={50} />
<Progress size="lg" value={50} />`;
</script>

{#snippet progress25()}
	<Progress value={25} />
{/snippet}

{#snippet progress50()}
	<Progress value={50} />
{/snippet}

{#snippet progress75()}
	<Progress value={75} />
{/snippet}

{#snippet progress100()}
	<Progress value={100} />
{/snippet}

{#snippet smallVariant()}
	<Progress size="sm" value={50} />
{/snippet}

{#snippet mediumVariant()}
	<Progress size="md" value={50} />
{/snippet}

{#snippet largeVariant()}
	<Progress size="lg" value={50} />
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Valores</h3>
			<VariantsGrid variants={variantsWithComponents.slice(0, 4)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
			<VariantsGrid variants={variantsWithComponents.slice(4)} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Progreso de Carga</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
				<div>
					<div class="flex justify-between mb-1">
						<span class="text-sm text-text-default">Descargando...</span>
						<span class="text-sm text-text-muted">65%</span>
					</div>
					<Progress value={65} />
				</div>
				<div>
					<div class="flex justify-between mb-1">
						<span class="text-sm text-text-default">Procesando...</span>
						<span class="text-sm text-text-muted">30%</span>
					</div>
					<Progress value={30} />
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
			{ label: 'Progress' }
		]}
	/>

	<ComponentShowcase
		name="Progress"
		category="Atoms"
		description="Componente de barra de progreso con diferentes tamaños y valores."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

