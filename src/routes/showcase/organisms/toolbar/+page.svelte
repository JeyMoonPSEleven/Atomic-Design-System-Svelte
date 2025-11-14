<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Toolbar } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const toolbarActions = [
		{ label: 'Nuevo', intent: 'primary' as const, onclick: () => console.log('Nuevo') },
		{ label: 'Editar', intent: 'secondary' as const, onclick: () => console.log('Editar') },
		{ label: 'Eliminar', intent: 'danger' as const, onclick: () => console.log('Eliminar') }
	];

const variants = [
		{
			title: 'With Title',
			component: () => {},
			code: '<Toolbar title="Herramientas" actions={actions} />'
		},
		{
			title: 'Actions Only',
			component: () => {},
			code: '<Toolbar actions={actions} />'
		}
	];

const props = [
		{
			name: 'title',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Título del toolbar'
		},
		{
			name: 'actions',
			type: 'ToolbarAction[]',
			default: '[]',
			required: false,
			description: 'Array de acciones con label, icon opcional, onclick e intent opcional'
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
		{ ...variants[0], component: withTitleVariant },
		{ ...variants[1], component: actionsOnlyVariant }
	];

	const codeExample = `<script lang="ts">
  import { Toolbar } from '$lib/components/03-organisms';
<\/script>

<Toolbar title="Herramientas" actions={[
  { label: 'Nuevo', intent: 'primary', onclick: () => console.log('Nuevo') },
  { label: 'Editar', intent: 'secondary', onclick: () => console.log('Editar') },
  { label: 'Eliminar', intent: 'danger', onclick: () => console.log('Eliminar') }
]} />

<Toolbar actions={[
  { label: 'Nuevo', intent: 'primary', onclick: () => console.log('Nuevo') },
  { label: 'Editar', intent: 'secondary', onclick: () => console.log('Editar') }
]} />`;
</script>

{#snippet withTitleVariant()}
	<Toolbar title="Herramientas" actions={toolbarActions} />
{/snippet}

{#snippet actionsOnlyVariant()}
	<Toolbar actions={toolbarActions} />
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
			<h4 class="font-semibold mb-3 text-text-default">Toolbar de Acciones</h4>
			<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
				<Toolbar title="Herramientas" actions={toolbarActions} />
			</div>
		</div>
	</div>
{/snippet}


<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Toolbar' }
		]}
	/>

	<ComponentShowcase
		name="Toolbar"
		category="Organisms"
		description="Componente de barra de herramientas con título opcional y acciones con diferentes intents."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>