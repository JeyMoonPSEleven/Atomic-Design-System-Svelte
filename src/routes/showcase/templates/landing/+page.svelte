<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Landing } from '$lib/components/04-templates';
	import { Hero } from '$lib/components/03-organisms';
	import { Link, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Landing logo={logo} navigation={navigation} children={content} footer={footer} />'
		},
		{
			title: 'With Hero',
			component: () => {},
			code: '<Landing logo={logo} navigation={navigation} hero={hero} children={content} footer={footer} />'
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
			name: 'hero',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Sección hero'
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

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withHeroVariant }
	];

	const codeExample = `<script lang="ts">
  import { Landing } from '$lib/components/04-templates';
  import { Hero } from '$lib/components/03-organisms';
  import { Link, Text } from '$lib/components/01-atoms';
  
  {#snippet logo()}
    <a href="/" class="text-xl font-bold text-text-default">Landing</a>
  {/snippet}

  {#snippet navigation()}
    <nav class="flex gap-4">
      <Link href="/">Inicio</Link>
      <Link href="/features">Características</Link>
    </nav>
  {/snippet}

  {#snippet hero()}
    <Hero title="Bienvenido" subtitle="Descripción" />
  {/snippet}

  {#snippet content()}
    <Text>Contenido de la landing</Text>
  {/snippet}

  {#snippet footer()}
    <Text>© 2024</Text>
  {/snippet}
<\/script>

<Landing 
  logo={logo} 
  navigation={navigation} 
  hero={hero} 
  children={content} 
  footer={footer} 
/>`;
</script>

{#snippet logo()}
	<a href="/" class="text-xl font-bold text-text-default">Landing</a>
{/snippet}

{#snippet navigation()}
	<nav class="flex gap-4">
		<Link href="/">Inicio</Link>
		<Link href="/features">Características</Link>
	</nav>
{/snippet}

{#snippet hero()}
	<Hero
		title="Bienvenido"
		subtitle="Descripción del hero"
		primaryAction={{ label: 'Comenzar', onclick: () => console.log('Comenzar') }}
	/>
{/snippet}

{#snippet content()}
	<Text>Contenido de la landing</Text>
{/snippet}

{#snippet footer()}
	<Text>© 2024</Text>
{/snippet}

{#snippet exampleLogo()}
	<a href="/" class="text-xl font-bold text-text-default">Landing</a>
{/snippet}

{#snippet exampleNav()}
	<nav class="flex gap-4">
		<Link href="/">Inicio</Link>
	</nav>
{/snippet}

{#snippet exampleContent()}
	<Text>Contenido de la landing</Text>
{/snippet}

{#snippet exampleFooter()}
	<Text>© 2024</Text>
{/snippet}

{#snippet defaultVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Landing logo={exampleLogo} navigation={exampleNav} children={exampleContent} footer={exampleFooter} />
	</div>
{/snippet}

{#snippet exampleHero()}
	<Hero title="Bienvenido" subtitle="Descripción" />
{/snippet}

{#snippet withHeroVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-96">
		<Landing logo={exampleLogo} navigation={exampleNav} hero={exampleHero} children={exampleContent} footer={exampleFooter} />
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
			<h4 class="font-semibold mb-3 text-text-default">Página de Landing</h4>
			<div class="border border-border-default rounded-lg overflow-hidden bg-surface-card h-96">
				<Landing logo={logo} navigation={navigation} hero={hero} children={content} footer={footer} />
			</div>
		</div>
	</div>
{/snippet}


<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates', href: '/showcase/templates' },
			{ label: 'Landing' }
		]}
	/>

	<ComponentShowcase
		name="Landing"
		category="Templates"
		description="Plantilla de layout para páginas de landing con header, hero opcional, contenido y footer."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>