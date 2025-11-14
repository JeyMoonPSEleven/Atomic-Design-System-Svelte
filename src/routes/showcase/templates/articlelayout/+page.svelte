<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { ArticleLayout } from '$lib/components/04-templates';
	import { Header, Footer } from '$lib/components/03-organisms';
	import { Link, Heading, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<ArticleLayout logo={logo} navigation={navigation} heading={heading} content={content} footer={footer} />'
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
			name: 'mobileMenuButton',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Botón del menú móvil'
		},
		{
			name: 'mobileNavigationPanel',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Panel de navegación móvil'
		},
		{
			name: 'heading',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Encabezado del artículo'
		},
		{
			name: 'content',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Contenido del artículo'
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
		{ ...variants[0], component: defaultVariant }
	];

	const codeExample = `<script lang="ts">
  import { ArticleLayout } from '$lib/components/04-templates';
  import { Link, Heading, Text } from '$lib/components/01-atoms';
  
  {#snippet logo()}
    <a href="/" class="text-xl font-bold text-text-default">Logo</a>
  {/snippet}

  {#snippet navigation()}
    <nav class="flex gap-4">
      <Link href="/">Inicio</Link>
      <Link href="/about">Acerca</Link>
    </nav>
  {/snippet}

  {#snippet heading()}
    <Heading level="h1">Título del Artículo</Heading>
  {/snippet}

  {#snippet content()}
    <Text>Contenido del artículo...</Text>
  {/snippet}

  {#snippet footer()}
    <Text>© 2024</Text>
  {/snippet}
<\/script>

<ArticleLayout 
  logo={logo} 
  navigation={navigation} 
  heading={heading} 
  content={content} 
  footer={footer} 
/>`;
</script>

{#snippet logo()}
	<a href="/" class="text-xl font-bold text-text-default">Logo</a>
{/snippet}

{#snippet navigation()}
	<nav class="flex gap-4">
		<Link href="/">Inicio</Link>
		<Link href="/about">Acerca</Link>
	</nav>
{/snippet}

{#snippet heading()}
	<Heading level="h1">Título del Artículo</Heading>
{/snippet}

{#snippet content()}
	<Text>Contenido del artículo...</Text>
{/snippet}

{#snippet footer()}
	<Text>© 2024</Text>
{/snippet}

{#snippet exampleLogo()}
	<a href="/" class="text-xl font-bold text-text-default">Atomic Design</a>
{/snippet}

{#snippet exampleNav()}
	<nav class="flex gap-4">
		<Link href="/">Inicio</Link>
		<Link href="/showcase">Showcase</Link>
	</nav>
{/snippet}

{#snippet exampleHeading()}
	<Heading level="h1">Título del Artículo</Heading>
{/snippet}

{#snippet exampleContent()}
	<Text>Este es el contenido del artículo...</Text>
{/snippet}

{#snippet exampleFooter()}
	<Text>© 2024 Atomic Design System</Text>
{/snippet}

{#snippet defaultVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden">
		<ArticleLayout logo={exampleLogo} navigation={exampleNav} heading={exampleHeading} content={exampleContent} footer={exampleFooter} />
	</div>
{/snippet}

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
			<h4 class="font-semibold mb-3 text-text-default">Layout de Artículo</h4>
			<div class="border border-border-default rounded-lg overflow-hidden bg-surface-card">
				<ArticleLayout logo={logo} navigation={navigation} heading={heading} content={content} footer={footer} />
			</div>
		</div>
	</div>
{/snippet}


<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates', href: '/showcase/templates' },
			{ label: 'ArticleLayout' }
		]}
	/>

	<ComponentShowcase
		name="ArticleLayout"
		category="Templates"
		description="Plantilla de layout para artículos con header, contenido y footer."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>