<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Pagination } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

let currentPage1 = $state(1);

let currentPage2 = $state(5);

const variants = [
		{
			title: 'Small Set',
			component: () => {},
			code: '<Pagination currentPage={1} totalPages={5} onpagechange={(p) => ...} />'
		},
		{
			title: 'Large Set',
			component: () => {},
			code: '<Pagination currentPage={5} totalPages={10} onpagechange={(p) => ...} />'
		}
	];

const props = [
		{
			name: 'currentPage',
			type: 'number',
			default: '1',
			required: false,
			description: 'Página actual'
		},
		{
			name: 'totalPages',
			type: 'number',
			default: '1',
			required: false,
			description: 'Total de páginas'
		},
		{
			name: 'onpagechange',
			type: '(page: number) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando cambia la página'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

let currentPage = $state(1);

const variantsWithComponents = [
		{ ...variants[0], component: smallSetVariant },
		{ ...variants[1], component: largeSetVariant }
	];

	const codeExample = `<script lang="ts">
  import { Pagination } from '$lib/components/02-molecules';
  
  let currentPage = $state(1);
<\/script>

<Pagination 
  currentPage={currentPage} 
  totalPages={10} 
  onpagechange={(page) => currentPage = page} 
/>`;
</script>

{#snippet largeSetVariant()}
		<Pagination currentPage={currentPage2} totalPages={10} onpagechange={(p) => currentPage2 = p} />
	{/snippet}

{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Ejemplos</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Navegación de Páginas</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<Pagination currentPage={currentPage1} totalPages={10} onpagechange={(p) => currentPage1 = p} />
					<Text class="text-sm text-text-muted">Página actual: {currentPage1}</Text>
				</div>
			</div>
		</div>
	{/snippet}

{#snippet smallSetVariant()}
	<Pagination currentPage={currentPage1} totalPages={5} onpagechange={(p) => currentPage1 = p} />
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Pagination' }
		]}
	/>

	<ComponentShowcase
		name="Pagination"
		category="Molecules"
		description="Componente de paginación para navegar entre páginas con botones de anterior/siguiente."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>