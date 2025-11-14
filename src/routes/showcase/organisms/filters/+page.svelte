<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Filters } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const filterFields = [
		{ label: 'Nombre', type: 'text' as const },
		{
			label: 'Categoría',
			type: 'select' as const,
			options: [
				{ label: 'Todas', value: '' },
				{ label: 'Categoría 1', value: 'cat1' },
				{ label: 'Categoría 2', value: 'cat2' }
			]
		},
		{ label: 'Fecha', type: 'date' as const }
	];

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Filters fields={fields} />'
		},
		{
			title: 'With Handlers',
			component: () => {},
			code: '<Filters fields={fields} onchange={...} onreset={...} />'
		}
	];

const props = [
		{
			name: 'fields',
			type: 'FilterField[]',
			default: 'required',
			required: true,
			description: 'Array de campos de filtro con label, type y options opcional'
		},
		{
			name: 'onchange',
			type: '(filters: Record<string, string>) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando cambian los filtros'
		},
		{
			name: 'onreset',
			type: '() => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando se resetean los filtros'
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
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withHandlersVariant }
	];

	const codeExample = `<script lang="ts">
  import { Filters } from '$lib/components/03-organisms';
<\/script>

<Filters fields={[
  { label: 'Nombre', type: 'text' },
  {
    label: 'Categoría',
    type: 'select',
    options: [
      { label: 'Todas', value: '' },
      { label: 'Categoría 1', value: 'cat1' }
    ]
  },
  { label: 'Fecha', type: 'date' }
]} onchange={(filters) => console.log(filters)} onreset={() => {}} />`;
</script>

{#snippet withHandlersVariant()}
		<Filters
			fields={filterFields}
			onchange={(filters) => console.log('Filtros:', filters)}
			onreset={() => console.log('Reset')}
		/>
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
				<h4 class="font-semibold mb-3 text-text-default">Filtros de Búsqueda</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
					<Filters
						fields={filterFields}
						onchange={(filters) => console.log('Filtros:', filters)}
						onreset={() => console.log('Reset')}
					/>
				</div>
			</div>
		</div>
	{/snippet}

{#snippet defaultVariant()}
	<Filters fields={filterFields} />
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Filters' }
		]}
	/>

	<ComponentShowcase
		name="Filters"
		category="Organisms"
		description="Componente de filtros con múltiples tipos de campos (text, select, date) y botones de aplicar/resetear."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>