<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { SearchForm } from '$lib/components/02-molecules';
	import { Input, Button } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<SearchForm><Input type="search" /></SearchForm>'
		},
		{
			title: 'With Custom Button',
			component: () => {},
			code: '<SearchForm button={customButton}><Input type="search" /></SearchForm>'
		}
	];

const props = [
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Input de búsqueda'
		},
		{
			name: 'button',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Botón personalizado (por defecto usa "Buscar")'
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
			type: 'HTMLFormAttributes',
			default: 'undefined',
			required: false,
			description: 'Todos los atributos HTML estándar de form'
		}
	];

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withCustomButtonVariant }
	];

	const codeExample = `<script lang="ts">
  import { SearchForm } from '$lib/components/02-molecules';
  import { Input, Button } from '$lib/components/01-atoms';
  
  {#snippet customButton()}
    <Button intent="primary">Buscar</Button>
  {/snippet}
<\/script>

<SearchForm>
  <Input type="search" placeholder="Buscar..." />
</SearchForm>

<SearchForm button={customButton}>
  <Input type="search" placeholder="Buscar..." />
</SearchForm>`;
</script>

{#snippet defaultInput()}
		<Input type="search" placeholder="Buscar componentes..." />
	{/snippet}

{#snippet defaultVariant()}
		<SearchForm>
			{@render defaultInput()}
		</SearchForm>
	{/snippet}

{#snippet customInput()}
		<Input type="search" placeholder="Buscar..." />
	{/snippet}

{#snippet customButton()}
		<Button intent="primary" size="sm">🔍</Button>
	{/snippet}

{#snippet withCustomButtonVariant()}
		<SearchForm button={customButton}>
			{@render customInput()}
		</SearchForm>
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
				<h4 class="font-semibold mb-3 text-text-default">Formulario de Búsqueda</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
					<SearchForm onsubmit={(e) => {
						e.preventDefault();
						console.log('Búsqueda enviada');
					}}>
						<Input type="search" placeholder="Buscar componentes..." />
					</SearchForm>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'SearchForm' }
		]}
	/>

	<ComponentShowcase
		name="SearchForm"
		category="Molecules"
		description="Componente de formulario de búsqueda con input y botón, soporte para botón personalizado."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>