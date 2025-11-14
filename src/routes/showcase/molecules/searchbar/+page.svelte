<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { SearchBar } from '$lib/components/02-molecules';
	import { Breadcrumb } from '$lib/components/02-molecules';

let searchValue1 = $state('');

let searchValue2 = $state('');

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<SearchBar bind:value={value} />'
		},
		{
			title: 'With Placeholder',
			component: () => {},
			code: '<SearchBar placeholder="Buscar..." bind:value={value} />'
		},
		{
			title: 'With Submit Handler',
			component: () => {},
			code: '<SearchBar bind:value={value} onsubmit={(v) => console.log(v)} />'
		}
	];

const props = [
		{
			name: 'value',
			type: 'string',
			default: "''",
			required: false,
			description: 'Valor de búsqueda (bindable)'
		},
		{
			name: 'placeholder',
			type: 'string',
			default: "'Buscar...'",
			required: false,
			description: 'Texto placeholder del input'
		},
		{
			name: 'onsubmit',
			type: '(value: string) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando se envía la búsqueda'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

let value = $state('');

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withPlaceholderVariant },
		{ ...variants[2], component: withSubmitVariant }
	];

	const codeExample = `<script lang="ts">
  import { SearchBar } from '$lib/components/02-molecules';
  
  let value = $state('');
<\/script>

<SearchBar bind:value={value} />
<SearchBar placeholder="Buscar..." bind:value={value} />
<SearchBar bind:value={value} onsubmit={(v) => console.log('Búsqueda:', v)} />`;
</script>

{#snippet withPlaceholderVariant()}
		<SearchBar placeholder="Buscar componentes..." bind:value={searchValue2} />
	{/snippet}

{#snippet withSubmitVariant()}
		<SearchBar bind:value={searchValue1} onsubmit={(v) => console.log('Búsqueda:', v)} />
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
				<h4 class="font-semibold mb-3 text-text-default">Barra de Búsqueda</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<SearchBar
						placeholder="Buscar componentes..."
						bind:value={searchValue1}
						onsubmit={(v) => console.log('Búsqueda:', v)}
					/>
				</div>
			</div>
		</div>
	{/snippet}

{#snippet defaultVariant()}
	<SearchBar bind:value={searchValue1} />
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'SearchBar' }
		]}
	/>

	<ComponentShowcase
		name="SearchBar"
		category="Molecules"
		description="Componente de barra de búsqueda con input y botón, soporte para binding reactivo y callbacks."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>