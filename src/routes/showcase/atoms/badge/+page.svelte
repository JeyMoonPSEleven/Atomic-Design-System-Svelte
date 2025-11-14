<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from "$lib/components/showcase";
	import { Badge } from "$lib/components/01-atoms";
	import { Breadcrumb } from "$lib/components/02-molecules";

	const variants = [
		{
			title: "Default",
			component: () => {},
			code: "<Badge>Default</Badge>",
		},
		{
			title: "Secondary",
			component: () => {},
			code: '<Badge variant="secondary">Secondary</Badge>',
		},
		{
			title: "Success",
			component: () => {},
			code: '<Badge variant="success">Success</Badge>',
		},
		{
			title: "Warning",
			component: () => {},
			code: '<Badge variant="warning">Warning</Badge>',
		},
		{
			title: "Danger",
			component: () => {},
			code: '<Badge variant="danger">Danger</Badge>',
		},
		{
			title: "Small",
			component: () => {},
			code: '<Badge size="sm">Small</Badge>',
		},
		{
			title: "Medium",
			component: () => {},
			code: '<Badge size="md">Medium</Badge>',
		},
		{
			title: "Large",
			component: () => {},
			code: '<Badge size="lg">Large</Badge>',
		},
	];

	const props = [
		{
			name: "variant",
			type: "'default' | 'secondary' | 'success' | 'warning' | 'danger'",
			default: "'default'",
			required: false,
			description: "Variante visual del badge",
		},
		{
			name: "size",
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: "Tamaño del badge",
		},
		{
			name: "class",
			type: "string",
			default: "undefined",
			required: false,
			description: "Clases CSS adicionales",
		},
		{
			name: "children",
			type: "Snippet",
			default: "required",
			required: true,
			description: "Contenido del badge",
		},
	];

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: secondaryVariant },
		{ ...variants[2], component: successVariant },
		{ ...variants[3], component: warningVariant },
		{ ...variants[4], component: dangerVariant },
		{ ...variants[5], component: smallVariant },
		{ ...variants[6], component: mediumVariant },
		{ ...variants[7], component: largeVariant },
	];

	const codeExample = `<script lang="ts">
  import { Badge } from '$lib/components/01-atoms';
<\/script>

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>

<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`;
</script>

{#snippet defaultVariant()}
	<Badge>Default</Badge>
{/snippet}

{#snippet secondaryVariant()}
	<Badge variant="secondary">Secondary</Badge>
{/snippet}

{#snippet successVariant()}
	<Badge variant="success">Success</Badge>
{/snippet}

{#snippet warningVariant()}
	<Badge variant="warning">Warning</Badge>
{/snippet}

{#snippet dangerVariant()}
	<Badge variant="danger">Danger</Badge>
{/snippet}

{#snippet smallVariant()}
	<Badge size="sm">Small</Badge>
{/snippet}

{#snippet mediumVariant()}
	<Badge size="md">Medium</Badge>
{/snippet}

{#snippet largeVariant()}
	<Badge size="lg">Large</Badge>
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">
				Variantes
			</h3>
			<VariantsGrid variants={variantsWithComponents.slice(0, 5)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">
				Tamaños
			</h3>
			<VariantsGrid variants={variantsWithComponents.slice(5)} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Uso en Lista</h4>
			<div
				class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card"
			>
				<div class="space-y-2">
					<div class="flex items-center justify-between">
						<span class="text-text-default">Tarea completada</span>
						<Badge variant="success">Completado</Badge>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-text-default">Tarea pendiente</span>
						<Badge variant="warning">Pendiente</Badge>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-text-default">Tarea urgente</span>
						<Badge variant="danger">Urgente</Badge>
					</div>
				</div>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: "Showcase", href: "/showcase" },
			{ label: "Atoms", href: "/showcase/atoms" },
			{ label: "Badge" },
		]}
	/>

	<ComponentShowcase
		name="Badge"
		category="Atoms"
		description="Componente de badge para mostrar etiquetas, estados o categorías con múltiples variantes visuales."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>
