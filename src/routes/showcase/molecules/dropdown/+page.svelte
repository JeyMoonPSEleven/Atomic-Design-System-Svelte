<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Dropdown } from '$lib/components/02-molecules';
	import { Button } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const dropdownItems = [
		{ label: 'Opción 1', href: '#' },
		{ label: 'Opción 2', onclick: () => console.log('Opción 2') },
		{ label: 'Divider', divider: true },
		{ label: 'Opción 3', href: '#' }
	];

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Dropdown trigger={trigger} items={items} />'
		},
		{
			title: 'Right Position',
			component: () => {},
			code: '<Dropdown position="right" trigger={trigger} items={items} />'
		}
	];

const props = [
		{
			name: 'trigger',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Elemento que activa el dropdown'
		},
		{
			name: 'items',
			type: 'DropdownItem[]',
			default: 'required',
			required: true,
			description: 'Array de items del dropdown'
		},
		{
			name: 'position',
			type: "'left' | 'right'",
			default: "'left'",
			required: false,
			description: 'Posición del dropdown'
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
		{ ...variants[1], component: rightVariant }
	];

	const codeExample = `<script lang="ts">
  import { Dropdown } from '$lib/components/02-molecules';
  import { Button } from '$lib/components/01-atoms';
  
  {#snippet trigger()}
    <Button>Menú Dropdown</Button>
  {/snippet}
<\/script>

<Dropdown trigger={trigger} items={[
  { label: 'Opción 1', href: '#' },
  { label: 'Opción 2', onclick: () => console.log('Opción 2') },
  { label: 'Divider', divider: true },
  { label: 'Opción 3', href: '#' }
]} />`;
</script>

{#snippet dropdownTrigger1()}
		<Button>Menú Dropdown</Button>
	{/snippet}

{#snippet dropdownTrigger2()}
		<Button intent="secondary">Opciones</Button>
	{/snippet}

{#snippet trigger1()}
		<Button>Menú Dropdown</Button>
	{/snippet}

{#snippet defaultVariant()}
		<Dropdown trigger={trigger1} items={dropdownItems} />
	{/snippet}

{#snippet trigger2()}
		<Button intent="secondary">Opciones</Button>
	{/snippet}

{#snippet rightVariant()}
		<Dropdown position="right" trigger={trigger2} items={dropdownItems} />
	{/snippet}

{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Posiciones</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Menú de Acciones</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					{#snippet actionsTrigger()}
						<Button>Acciones</Button>
					{/snippet}
					<Dropdown trigger={actionsTrigger} items={dropdownItems} />
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Dropdown' }
		]}
	/>

	<ComponentShowcase
		name="Dropdown"
		category="Molecules"
		description="Componente de menú desplegable con soporte para items con href, onclick y dividers."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>