<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Profile } from '$lib/components/04-templates';
	import { Link, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	{#snippet logo()}
		<a href="/" class="text-xl font-bold text-text-default">Profile</a>
	{/snippet}

	{#snippet navigation()}
		<nav class="flex gap-4">
			<Link href="/">Inicio</Link>
		</nav>
	{/snippet}

	{#snippet sidebar()}
		<Text>Sidebar del perfil</Text>
	{/snippet}

	{#snippet content()}
		<Text>Contenido del perfil</Text>
	{/snippet}

	{#snippet footer()}
		<Text>© 2024</Text>
	{/snippet}

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Profile logo={logo} navigation={navigation} children={content} footer={footer} />'
		},
		{
			title: 'With Sidebar',
			component: () => {},
			code: '<Profile logo={logo} navigation={navigation} sidebar={sidebar} children={content} footer={footer} />'
		}
	];

	const props = [
		{
			name: 'logo',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Logo del header'
		},
		{
			name: 'navigation',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Navegación del header'
		},
		{
			name: 'sidebar',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Sidebar del perfil'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido del perfil'
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
		<a href="/" class="text-xl font-bold text-text-default">Profile</a>
	{/snippet}

	{#snippet exampleNav()}
		<nav class="flex gap-4">
			<Link href="/">Inicio</Link>
		</nav>
	{/snippet}

	{#snippet exampleContent()}
		<Text>Contenido del perfil</Text>
	{/snippet}

	{#snippet exampleFooter()}
		<Text>© 2024</Text>
	{/snippet}

	{#snippet defaultVariant()}
		<div class="border border-border-default rounded-lg overflow-hidden h-64">
			<Profile logo={exampleLogo} navigation={exampleNav} children={exampleContent} footer={exampleFooter} />
		</div>
	{/snippet}

	{#snippet exampleSidebar()}
		<Text>Sidebar</Text>
	{/snippet}

	{#snippet withSidebarVariant()}
		<div class="border border-border-default rounded-lg overflow-hidden h-64">
			<Profile logo={exampleLogo} navigation={exampleNav} sidebar={exampleSidebar} children={exampleContent} footer={exampleFooter} />
		</div>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withSidebarVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Layout de Perfil</h4>
				<div class="border border-border-default rounded-lg overflow-hidden bg-surface-card h-96">
					<Profile logo={logo} navigation={navigation} sidebar={sidebar} children={content} footer={footer} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Profile } from '$lib/components/04-templates';
  import { Link, Text } from '$lib/components/01-atoms';
</script>

<Profile 
  logo={logo} 
  navigation={navigation} 
  sidebar={sidebar} 
  children={content} 
  footer={footer} 
/>`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates', href: '/showcase/templates' },
			{ label: 'Profile' }
		]}
	/>

	<ComponentShowcase
		name="Profile"
		category="Templates"
		description="Plantilla de layout para páginas de perfil con header, sidebar opcional, contenido y footer."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

