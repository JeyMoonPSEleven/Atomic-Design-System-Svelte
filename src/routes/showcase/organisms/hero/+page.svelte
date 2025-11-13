<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Hero } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Hero title="Título" subtitle="Subtítulo" />'
		},
		{
			title: 'With Actions',
			component: () => {},
			code: '<Hero title="Título" primaryAction={{label: "Acción"}} />'
		}
	];

	const props = [
		{
			name: 'title',
			type: 'string',
			default: 'required',
			required: true,
			description: 'Título del hero'
		},
		{
			name: 'subtitle',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Subtítulo del hero'
		},
		{
			name: 'primaryAction',
			type: '{label: string, href?: string, onclick?: () => void}',
			default: 'undefined',
			required: false,
			description: 'Acción principal'
		},
		{
			name: 'secondaryAction',
			type: '{label: string, href?: string, onclick?: () => void}',
			default: 'undefined',
			required: false,
			description: 'Acción secundaria'
		},
		{
			name: 'background',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Fondo personalizado del hero'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	const codeExample = `<script lang="ts">
  import { Hero } from '$lib/components/03-organisms';
</script>

<Hero title="Título Hero" subtitle="Descripción" />

<Hero
  title="Título Hero"
  subtitle="Descripción"
  primaryAction={{ label: 'Acción Principal', onclick: () => {} }}
  secondaryAction={{ label: 'Acción Secundaria', onclick: () => {} }}
/>`;
</script>

{#snippet defaultVariant()}
	<Hero title="Título Hero" subtitle="Descripción del hero section" />
{/snippet}

{#snippet withActionsVariant()}
	<Hero
		title="Título Hero"
		subtitle="Descripción del hero section con llamada a la acción."
		primaryAction={{ label: 'Acción Principal', onclick: () => console.log('Principal') }}
		secondaryAction={{ label: 'Acción Secundaria', onclick: () => console.log('Secundaria') }}
	/>
{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withActionsVariant }
	];
</script>

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
				<h4 class="font-semibold mb-3 text-text-default">Hero Section</h4>
				<div class="border border-border-default rounded-lg bg-surface-card overflow-hidden">
					<Hero
						title="Bienvenido a Atomic Design"
						subtitle="Un sistema de diseño completo para SvelteKit"
						primaryAction={{ label: 'Comenzar', onclick: () => console.log('Comenzar') }}
						secondaryAction={{ label: 'Ver más', onclick: () => console.log('Ver más') }}
					/>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Hero' }
		]}
	/>

	<ComponentShowcase
		name="Hero"
		category="Organisms"
		description="Componente de sección hero con título, subtítulo y acciones principales y secundarias."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

