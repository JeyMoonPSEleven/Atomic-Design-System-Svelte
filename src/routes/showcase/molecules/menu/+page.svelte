<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Menu } from '$lib/components/02-molecules';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const menuItems = [
		{ label: 'Item 1', href: '#' },
		{ label: 'Item 2', onclick: () => console.log('Item 2') },
		{ label: 'Divider', divider: true },
		{ label: 'Item 3', href: '#' }
	];

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Menu items={items} />'
		},
		{
			title: 'With Icons',
			component: () => {},
			code: '<Menu items={itemsWithIcons} />'
		}
	];

	const props = [
		{
			name: 'items',
			type: 'MenuItem[]',
			default: 'required',
			required: true,
			description: 'Array de items del menú'
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
		<Menu items={menuItems} />
	{/snippet}

	{#snippet icon1()}
		<span>📝</span>
	{/snippet}

	{#snippet icon2()}
		<span>🗑️</span>
	{/snippet}

	{#snippet withIconsVariant()}
		<Menu items={[
			{ label: 'Editar', href: '#', icon: icon1 },
			{ label: 'Eliminar', onclick: () => console.log('Eliminar'), icon: icon2 }
		]} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withIconsVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Menú de Navegación</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<Menu items={[
						{ label: 'Inicio', href: '/' },
						{ label: 'Acerca', href: '/about' },
						{ label: 'Divider', divider: true },
						{ label: 'Configuración', onclick: () => console.log('Configuración') },
						{ label: 'Cerrar sesión', onclick: () => console.log('Cerrar sesión') }
					]} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Menu } from '$lib/components/02-molecules';
</script>

<Menu items={[
  { label: 'Item 1', href: '#' },
  { label: 'Item 2', onclick: () => console.log('Item 2') },
  { label: 'Divider', divider: true },
  { label: 'Item 3', href: '#' }
]} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Menu' }
		]}
	/>

	<ComponentShowcase
		name="Menu"
		category="Molecules"
		description="Componente de menú con items, soporte para href, onclick, dividers e iconos."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

