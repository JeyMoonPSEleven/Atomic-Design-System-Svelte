<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Admin } from '$lib/components/04-templates';
	import { Link, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	{#snippet logo()}
		<a href="/" class="text-xl font-bold text-text-default">Admin</a>
	{/snippet}

	{#snippet navigation()}
		<nav class="flex gap-4">
			<Link href="/">Dashboard</Link>
			<Link href="/users">Usuarios</Link>
		</nav>
	{/snippet}

	{#snippet sidebarItems()}
		<Text>Sidebar items</Text>
	{/snippet}

	{#snippet content()}
		<Text>Contenido del admin</Text>
	{/snippet}

	{#snippet footer()}
		<Text>© 2024</Text>
	{/snippet}

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Admin logo={logo} navigation={navigation} sidebarItems={sidebar} children={content} footer={footer} />'
		}
	];

	const props = [
		{
			name: 'logo',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Logo del header/sidebar'
		},
		{
			name: 'navigation',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Navegación del header'
		},
		{
			name: 'sidebarItems',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Items del sidebar'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido principal'
		},
		{
			name: 'footer',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Contenido del footer'
		}
	];

	{#snippet exampleLogo()}
		<a href="/" class="text-xl font-bold text-text-default">Admin</a>
	{/snippet}

	{#snippet exampleNav()}
		<nav class="flex gap-4">
			<Link href="/">Dashboard</Link>
		</nav>
	{/snippet}

	{#snippet exampleSidebar()}
		<Text>Sidebar</Text>
	{/snippet}

	{#snippet exampleContent()}
		<Text>Contenido del admin</Text>
	{/snippet}

	{#snippet exampleFooter()}
		<Text>© 2024</Text>
	{/snippet}

	{#snippet defaultVariant()}
		<div class="border border-border-default rounded-lg overflow-hidden h-64">
			<Admin logo={exampleLogo} navigation={exampleNav} sidebarItems={exampleSidebar} children={exampleContent} footer={exampleFooter} />
		</div>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Ejemplo</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Layout de Administración</h4>
				<div class="border border-border-default rounded-lg overflow-hidden bg-surface-card h-96">
					<Admin logo={logo} navigation={navigation} sidebarItems={sidebarItems} children={content} footer={footer} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Admin } from '$lib/components/04-templates';
  import { Link, Text } from '$lib/components/01-atoms';
</script>

<Admin 
  logo={logo} 
  navigation={navigation} 
  sidebarItems={sidebar} 
  children={content} 
  footer={footer} 
/>`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates', href: '/showcase/templates' },
			{ label: 'Admin' }
		]}
	/>

	<ComponentShowcase
		name="Admin"
		category="Templates"
		description="Plantilla de layout para paneles de administración con sidebar, header y contenido principal."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

