<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Header } from '$lib/components/03-organisms';
	import { Button, Link, Logo } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Header logo={logo} navigation={navigation} />'
		},
		{
			title: 'With Mobile Menu',
			component: () => {},
			code: '<Header logo={logo} navigation={navigation} mobileMenuButton={button} mobileNavigationPanel={panel} />'
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
		}
	];

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withMobileVariant }
	];

	const codeExample = `<script lang="ts">
  import { Header } from '$lib/components/03-organisms';
  import { Link } from '$lib/components/01-atoms';
  
  {#snippet logo()}
    <a href="/">Logo</a>
  {/snippet}

  {#snippet navigation()}
    <nav class="flex gap-4">
      <Link href="/">Inicio</Link>
      <Link href="/about">Acerca</Link>
    </nav>
  {/snippet}
<\/script>

<Header logo={logo} navigation={navigation} />`;
</script>

{#snippet mobileMenuButton()}
		<Button intent="ghost" size="sm">☰</Button>
	{/snippet}

{#snippet mobileNavigationPanel()}
		<div class="p-4 space-y-2">
			<Link href="/">Inicio</Link>
			<Link href="/showcase">Showcase</Link>
			<Link href="/docs">Docs</Link>
		</div>
	{/snippet}

{#snippet defaultLogo()}
		<a href="/" class="text-xl font-bold text-text-default">Logo</a>
	{/snippet}

{#snippet defaultNav()}
		<nav class="flex gap-4">
			<Link href="/">Inicio</Link>
			<Link href="/about">Acerca</Link>
		</nav>
	{/snippet}

{#snippet defaultVariant()}
		<Header logo={defaultLogo} navigation={defaultNav} />
	{/snippet}

{#snippet mobileLogo()}
		<a href="/" class="text-xl font-bold text-text-default">Logo</a>
	{/snippet}

{#snippet mobileNav()}
		<nav class="flex gap-4">
			<Link href="/">Inicio</Link>
			<Link href="/about">Acerca</Link>
		</nav>
	{/snippet}

{#snippet mobileButton()}
		<Button intent="ghost" size="sm">☰</Button>
	{/snippet}

{#snippet mobilePanel()}
		<div class="p-4 space-y-2">
			<Link href="/">Inicio</Link>
			<Link href="/about">Acerca</Link>
		</div>
	{/snippet}

{#snippet withMobileVariant()}
		<Header logo={mobileLogo} navigation={mobileNav} mobileMenuButton={mobileButton} mobileNavigationPanel={mobilePanel} />
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
				<h4 class="font-semibold mb-3 text-text-default">Header Completo</h4>
				<div class="border border-border-default rounded-lg bg-surface-card overflow-hidden">
					<Header logo={logo} navigation={navigation} mobileMenuButton={mobileMenuButton} mobileNavigationPanel={mobileNavigationPanel} />
				</div>
			</div>
		</div>
	{/snippet}

{#snippet logo()}
	<a href="/" class="text-xl font-bold text-text-default">Atomic Design</a>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Header' }
		]}
	/>

	<ComponentShowcase
		name="Header"
		category="Organisms"
		description="Componente de encabezado de página con logo, navegación y soporte para menú móvil."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>