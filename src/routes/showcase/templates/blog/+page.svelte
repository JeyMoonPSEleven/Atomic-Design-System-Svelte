<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Blog } from '$lib/components/04-templates';
	import { Link, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Blog logo={logo} navigation={navigation} children={content} footer={footer} />'
		},
		{
			title: 'With Sidebar',
			component: () => {},
			code: '<Blog logo={logo} navigation={navigation} sidebar={sidebar} children={content} footer={footer} />'
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
			description: 'Sidebar del blog'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido principal del blog'
		},
		{
			name: 'footer',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Contenido del footer'
		}
	];

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withSidebarVariant }
	];

	const codeExample = `<script lang="ts">
  import { Blog } from '$lib/components/04-templates';
  import { Link, Text } from '$lib/components/01-atoms';
  
  {#snippet logo()}
    <a href="/" class="text-xl font-bold text-text-default">Blog</a>
  {/snippet}

  {#snippet navigation()}
    <nav class="flex gap-4">
      <Link href="/">Inicio</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  {/snippet}

  {#snippet sidebar()}
    <Text>Sidebar del blog</Text>
  {/snippet}

  {#snippet content()}
    <Text>Contenido del blog</Text>
  {/snippet}

  {#snippet footer()}
    <Text>© 2024</Text>
  {/snippet}
<\/script>

<Blog 
  logo={logo} 
  navigation={navigation} 
  sidebar={sidebar} 
  children={content} 
  footer={footer} 
/>`;
</script>

{#snippet logo()}
	<a href="/" class="text-xl font-bold text-text-default">Blog</a>
{/snippet}

{#snippet navigation()}
	<nav class="flex gap-4">
		<Link href="/">Inicio</Link>
		<Link href="/posts">Posts</Link>
	</nav>
{/snippet}

{#snippet sidebar()}
	<Text>Sidebar del blog</Text>
{/snippet}

{#snippet content()}
	<Text>Contenido del blog</Text>
{/snippet}

{#snippet footer()}
	<Text>© 2024</Text>
{/snippet}

{#snippet exampleLogo()}
	<a href="/" class="text-xl font-bold text-text-default">Blog</a>
{/snippet}

{#snippet exampleNav()}
	<nav class="flex gap-4">
		<Link href="/">Inicio</Link>
	</nav>
{/snippet}

{#snippet exampleContent()}
	<Text>Contenido del blog</Text>
{/snippet}

{#snippet exampleFooter()}
	<Text>© 2024</Text>
{/snippet}

{#snippet defaultVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Blog logo={exampleLogo} navigation={exampleNav} children={exampleContent} footer={exampleFooter} />
	</div>
{/snippet}

{#snippet exampleSidebar()}
	<Text>Sidebar</Text>
{/snippet}

{#snippet withSidebarVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Blog logo={exampleLogo} navigation={exampleNav} sidebar={exampleSidebar} children={exampleContent} footer={exampleFooter} />
	</div>
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
			<h4 class="font-semibold mb-3 text-text-default">Layout de Blog</h4>
			<div class="border border-border-default rounded-lg overflow-hidden bg-surface-card h-96">
				<Blog logo={logo} navigation={navigation} sidebar={sidebar} children={content} footer={footer} />
			</div>
		</div>
	</div>
{/snippet}


<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates', href: '/showcase/templates' },
			{ label: 'Blog' }
		]}
	/>

	<ComponentShowcase
		name="Blog"
		category="Templates"
		description="Plantilla de layout para blogs con header, contenido principal, sidebar opcional y footer."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>