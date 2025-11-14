<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Link } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Link href="/">Link interno</Link>'
		},
		{
			title: 'Muted',
			component: () => {},
			code: '<Link variant="muted" href="/">Link muted</Link>'
		},
		{
			title: 'Danger',
			component: () => {},
			code: '<Link variant="danger" href="/">Link danger</Link>'
		},
		{
			title: 'External',
			component: () => {},
			code: '<Link href="https://example.com" target="_blank">Link externo</Link>'
		}
	];

	const props = [
		{
			name: 'variant',
			type: "'default' | 'muted' | 'danger'",
			default: "'default'",
			required: false,
			description: 'Variante visual del link'
		},
		{
			name: 'href',
			type: 'string',
			default: 'required',
			required: true,
			description: 'URL del enlace'
		},
		{
			name: 'target',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Target del enlace (ej: "_blank")'
		},
		{
			name: 'rel',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Rel del enlace (ej: "noopener noreferrer")'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido del link'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: mutedVariant },
		{ ...variants[2], component: dangerVariant },
		{ ...variants[3], component: externalVariant }
	];

	const codeExample = `<script lang="ts">
  import { Link } from '$lib/components/01-atoms';
<\/script>

<Link href="/">Link interno</Link>
<Link variant="muted" href="/">Link muted</Link>
<Link variant="danger" href="/">Link danger</Link>

<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link externo
</Link>`;
</script>

{#snippet defaultVariant()}
	<Link href="/">Link interno</Link>
{/snippet}

{#snippet mutedVariant()}
	<Link variant="muted" href="/">Link muted</Link>
{/snippet}

{#snippet dangerVariant()}
	<Link variant="danger" href="/">Link danger</Link>
{/snippet}

{#snippet externalVariant()}
	<Link href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Link externo</Link>
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
			<h4 class="font-semibold mb-3 text-text-default">Navegación</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-2">
				<Link href="/">Inicio</Link>
				<br />
				<Link href="/showcase">Showcase</Link>
				<br />
				<Link variant="muted" href="/docs">Documentación</Link>
				<br />
				<Link href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
					Svelte (externo)
				</Link>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Link' }
		]}
	/>

	<ComponentShowcase
		name="Link"
		category="Atoms"
		description="Componente de enlace con diferentes variantes visuales y soporte para enlaces internos y externos."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

