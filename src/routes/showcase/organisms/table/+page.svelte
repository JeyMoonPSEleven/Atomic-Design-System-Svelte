<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Table } from '$lib/components/03-organisms';
	import { Button } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const tableHeaders = ['Nombre', 'Email', 'Rol'];

const tableRows = [
		['Juan', 'juan@example.com', 'Admin'],
		['María', 'maria@example.com', 'Usuario']
	];

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Table headers={headers} rows={rows} />'
		},
		{
			title: 'With Snippets',
			component: () => {},
			code: '<Table headers={headers} rows={rowsWithSnippets} />'
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
			description: 'Array de filas, cada fila es un array de celdas (string o Snippet)'
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
		{ ...variants[1], component: withSnippetsVariant }
	];

	const codeExample = `<script lang="ts">
  import { Table } from '$lib/components/03-organisms';
  import { Button } from '$lib/components/01-atoms';
  
  {#snippet actionButton()}
    <Button size="sm">Editar</Button>
  {/snippet}
<\/script>

<Table headers={['Nombre', 'Email', 'Rol']} rows={[
  ['Juan', 'juan@example.com', 'Admin'],
  ['María', 'maria@example.com', 'Usuario']
]} />

<Table headers={['Nombre', 'Email', 'Acciones']} rows={[
  ['Juan', 'juan@example.com', actionButton],
  ['María', 'maria@example.com', actionButton]
]} />`;
</script>

{#snippet actionButton()}
	<Button size="sm">Editar</Button>
{/snippet}

{#snippet defaultVariant()}
	<Table headers={tableHeaders} rows={tableRows} />
{/snippet}

{#snippet withSnippetsVariant()}
	<Table headers={['Nombre', 'Email', 'Acciones']} rows={[
		['Juan', 'juan@example.com', actionButton],
		['María', 'maria@example.com', actionButton]
	]} />
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
			<h4 class="font-semibold mb-3 text-text-default">Tabla de Usuarios</h4>
			<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
				<Table headers={['Nombre', 'Email', 'Rol']} rows={[
					['Juan', 'juan@example.com', 'Admin'],
					['María', 'maria@example.com', 'Usuario'],
					['Pedro', 'pedro@example.com', 'Usuario']
				]} />
			</div>
		</div>
	</div>
{/snippet}


<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Table' }
		]}
	/>

	<ComponentShowcase
		name="Table"
		category="Organisms"
		description="Componente de tabla con headers y rows, soporte para celdas con texto o snippets."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>