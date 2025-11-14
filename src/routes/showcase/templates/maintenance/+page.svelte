<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Maintenance } from '$lib/components/04-templates';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Maintenance />'
		},
		{
			title: 'With Custom Message',
			component: () => {},
			code: '<Maintenance message="Mensaje personalizado" />'
		}
	];

const props = [
		{
			name: 'message',
			type: 'string',
			default: "'Estamos realizando mantenimiento. Volveremos pronto.'",
			required: false,
			description: 'Mensaje de mantenimiento'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withMessageVariant }
	];

	const codeExample = `<script lang="ts">
  import { Maintenance } from '$lib/components/04-templates';
<\/script>

<Maintenance />

<Maintenance message="Sitio en mantenimiento. Estaremos de vuelta pronto." />`;
</script>

{#snippet defaultVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Maintenance />
	</div>
{/snippet}

{#snippet withMessageVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Maintenance message="Sitio en mantenimiento. Estaremos de vuelta pronto." />
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
			<h4 class="font-semibold mb-3 text-text-default">Página de Mantenimiento</h4>
			<div class="border border-border-default rounded-lg overflow-hidden bg-surface-card h-96">
				<Maintenance message="Estamos realizando mejoras. Volveremos pronto." />
			</div>
		</div>
	</div>
{/snippet}


<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates', href: '/showcase/templates' },
			{ label: 'Maintenance' }
		]}
	/>

	<ComponentShowcase
		name="Maintenance"
		category="Templates"
		description="Plantilla de página de mantenimiento con mensaje personalizable."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>