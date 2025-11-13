<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Sidebar } from '$lib/components/03-organisms';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	{#snippet sidebarLogo()}
		<Text class="font-bold text-lg">Menú</Text>
	{/snippet}

	const sidebarItems = [
		{ label: 'Item 1', href: '#' },
		{ label: 'Item 2', href: '#' },
		{ label: 'Divider', divider: true },
		{ label: 'Item 3', href: '#' }
	];

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Sidebar items={items} />'
		},
		{
			title: 'With Logo',
			component: () => {},
			code: '<Sidebar logo={logo} items={items} />'
		}
	];

	const props = [
		{
			name: 'items',
			type: 'MenuItem[]',
			default: 'required',
			required: true,
			description: 'Array de items del sidebar'
		},
		{
			name: 'logo',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Logo del sidebar'
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
		<Sidebar items={sidebarItems} />
	{/snippet}

	{#snippet logoVariant()}
		<Sidebar logo={sidebarLogo} items={sidebarItems} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: logoVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Sidebar Completo</h4>
				<div class="border border-border-default rounded-lg max-w-xs bg-surface-card overflow-hidden">
					<Sidebar logo={sidebarLogo} items={sidebarItems} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Sidebar } from '$lib/components/03-organisms';
  import { Text } from '$lib/components/01-atoms';
  
  {#snippet logo()}
    <Text class="font-bold text-lg">Menú</Text>
  {/snippet}
</script>

<Sidebar items={[
  { label: 'Item 1', href: '#' },
  { label: 'Item 2', href: '#' },
  { label: 'Divider', divider: true },
  { label: 'Item 3', href: '#' }
]} />

<Sidebar logo={logo} items={items} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Sidebar' }
		]}
	/>

	<ComponentShowcase
		name="Sidebar"
		category="Organisms"
		description="Componente de barra lateral con menú de navegación y logo opcional."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

