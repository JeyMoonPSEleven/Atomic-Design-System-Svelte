<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Tooltip } from '$lib/components/02-molecules';
	import { Button } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Top',
			component: () => {},
			code: '<Tooltip text="Tooltip" position="top"><Button>Hover</Button></Tooltip>'
		},
		{
			title: 'Bottom',
			component: () => {},
			code: '<Tooltip text="Tooltip" position="bottom"><Button>Hover</Button></Tooltip>'
		},
		{
			title: 'Left',
			component: () => {},
			code: '<Tooltip text="Tooltip" position="left"><Button>Hover</Button></Tooltip>'
		},
		{
			title: 'Right',
			component: () => {},
			code: '<Tooltip text="Tooltip" position="right"><Button>Hover</Button></Tooltip>'
		}
	];

const props = [
		{
			name: 'text',
			type: 'string',
			default: 'required',
			required: true,
			description: 'Texto del tooltip'
		},
		{
			name: 'position',
			type: "'top' | 'bottom' | 'left' | 'right'",
			default: "'top'",
			required: false,
			description: 'Posición del tooltip'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Elemento que activa el tooltip'
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
		{ ...variants[0], component: topVariant },
		{ ...variants[1], component: bottomVariant },
		{ ...variants[2], component: leftVariant },
		{ ...variants[3], component: rightVariant }
	];

	const codeExample = `<script lang="ts">
  import { Tooltip } from '$lib/components/02-molecules';
  import { Button } from '$lib/components/01-atoms';
<\/script>

<Tooltip text="Tooltip arriba" position="top">
  <Button>Hover</Button>
</Tooltip>

<Tooltip text="Tooltip abajo" position="bottom">
  <Button>Hover</Button>
</Tooltip>

<Tooltip text="Tooltip izquierda" position="left">
  <Button>Hover</Button>
</Tooltip>

<Tooltip text="Tooltip derecha" position="right">
  <Button>Hover</Button>
</Tooltip>`;
</script>

{#snippet topButton()}
		<Button>Pasa el mouse aquí</Button>
	{/snippet}

{#snippet topVariant()}
		<Tooltip text="Este es un tooltip" position="top">
			{@render topButton()}
		</Tooltip>
	{/snippet}

{#snippet bottomButton()}
		<Button>Pasa el mouse aquí</Button>
	{/snippet}

{#snippet bottomVariant()}
		<Tooltip text="Tooltip abajo" position="bottom">
			{@render bottomButton()}
		</Tooltip>
	{/snippet}

{#snippet leftButton()}
		<Button>Pasa el mouse aquí</Button>
	{/snippet}

{#snippet leftVariant()}
		<Tooltip text="Tooltip izquierda" position="left">
			{@render leftButton()}
		</Tooltip>
	{/snippet}

{#snippet rightButton()}
		<Button>Pasa el mouse aquí</Button>
	{/snippet}

{#snippet rightVariant()}
		<Tooltip text="Tooltip derecha" position="right">
			{@render rightButton()}
		</Tooltip>
	{/snippet}

{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Posiciones</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Tooltips en Botones</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<div class="flex gap-4">
						<Tooltip text="Este es un tooltip">
							<Button>Pasa el mouse aquí</Button>
						</Tooltip>
						<Tooltip text="Información adicional" position="bottom">
							<Button intent="secondary">Más información</Button>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Tooltip' }
		]}
	/>

	<ComponentShowcase
		name="Tooltip"
		category="Molecules"
		description="Componente de tooltip para mostrar información adicional al pasar el mouse, con diferentes posiciones."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>