<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { DataTable } from '$lib/components/03-organisms';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	let currentPage = $state(1);

	const dataTableHeaders = ['Nombre', 'Email', 'Rol'];
	const dataTableRows = [
		['Juan', 'juan@example.com', 'Admin'],
		['María', 'maria@example.com', 'Usuario'],
		['Pedro', 'pedro@example.com', 'Usuario'],
		['Ana', 'ana@example.com', 'Admin']
	];

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<DataTable headers={headers} rows={rows} />'
		},
		{
			title: 'With Pagination',
			component: () => {},
			code: '<DataTable headers={headers} rows={rows} currentPage={page} totalPages={10} onpagechange={...} />'
		}
	];

	const props = [
		{
			name: 'headers',
			type: 'string[]',
			default: 'required',
			required: true,
			description: 'Array de nombres de columnas'
		},
		{
			name: 'rows',
			type: '(string | Snippet)[][]',
			default: 'required',
			required: true,
			description: 'Array de filas'
		},
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

	{#snippet defaultVariant()}
		<DataTable headers={dataTableHeaders} rows={dataTableRows.slice(0, 2)} />
	{/snippet}

	{#snippet withPaginationVariant()}
		<DataTable
			headers={dataTableHeaders}
			rows={dataTableRows}
			currentPage={currentPage}
			totalPages={2}
			onpagechange={(p) => currentPage = p}
		/>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withPaginationVariant }
	];

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
				<h4 class="font-semibold mb-3 text-text-default">Tabla con Paginación</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
					<DataTable
						headers={dataTableHeaders}
						rows={dataTableRows}
						currentPage={currentPage}
						totalPages={2}
						onpagechange={(p) => currentPage = p}
					/>
					<Text class="text-sm text-text-muted mt-2">Página actual: {currentPage}</Text>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { DataTable } from '$lib/components/03-organisms';
  
  let currentPage = $state(1);
</script>

<DataTable headers={['Nombre', 'Email', 'Rol']} rows={[
  ['Juan', 'juan@example.com', 'Admin'],
  ['María', 'maria@example.com', 'Usuario']
]} />

<DataTable 
  headers={headers} 
  rows={rows} 
  currentPage={currentPage} 
  totalPages={10} 
  onpagechange={(page) => currentPage = page} 
/>`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'DataTable' }
		]}
	/>

	<ComponentShowcase
		name="DataTable"
		category="Organisms"
		description="Componente de tabla de datos con paginación integrada."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

