<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Button } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Primary',
			component: () => {},
			code: '<Button intent="primary">Click me</Button>'
		},
		{
			title: 'Secondary',
			component: () => {},
			code: '<Button intent="secondary">Click me</Button>'
		},
		{
			title: 'Danger',
			component: () => {},
			code: '<Button intent="danger">Delete</Button>'
		},
		{
			title: 'Ghost',
			component: () => {},
			code: '<Button intent="ghost">Cancel</Button>'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Button size="sm">Small</Button>'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Button size="md">Medium</Button>'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Button size="lg">Large</Button>'
		},
		{
			title: 'Disabled',
			component: () => {},
			code: '<Button disabled>Disabled</Button>'
		}
	];

	const props = [
		{
			name: 'intent',
			type: "'primary' | 'secondary' | 'danger' | 'ghost'",
			default: "'primary'",
			required: false,
			description: 'Variante visual del botón'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del botón'
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Deshabilita el botón'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		},
		{
			name: 'icon',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Icono a mostrar en el botón'
		},
		{
			name: 'iconPosition',
			type: "'left' | 'right'",
			default: "'left'",
			required: false,
			description: 'Posición del icono'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: primaryVariant },
		{ ...variants[1], component: secondaryVariant },
		{ ...variants[2], component: dangerVariant },
		{ ...variants[3], component: ghostVariant },
		{ ...variants[4], component: smallVariant },
		{ ...variants[5], component: mediumVariant },
		{ ...variants[6], component: largeVariant },
		{ ...variants[7], component: disabledVariant }
	];

	const codeExample = `<script lang="ts">
  import { Button } from '$lib/components/01-atoms';
<\/script>

<Button intent="primary" size="md">
  Click me
</Button>

<Button intent="secondary" size="sm">
  Secondary
</Button>

<Button intent="danger" disabled>
  Delete
</Button>`;
</script>

{#snippet primaryVariant()}
	<Button intent="primary">Click me</Button>
{/snippet}

{#snippet secondaryVariant()}
	<Button intent="secondary">Click me</Button>
{/snippet}

{#snippet dangerVariant()}
	<Button intent="danger">Delete</Button>
{/snippet}

{#snippet ghostVariant()}
	<Button intent="ghost">Cancel</Button>
{/snippet}

{#snippet smallVariant()}
	<Button size="sm">Small</Button>
{/snippet}

{#snippet mediumVariant()}
	<Button size="md">Medium</Button>
{/snippet}

{#snippet largeVariant()}
	<Button size="lg">Large</Button>
{/snippet}

{#snippet disabledVariant()}
	<Button disabled>Disabled</Button>
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes de Intent</h3>
			<VariantsGrid variants={variantsWithComponents.slice(0, 4)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
			<VariantsGrid variants={variantsWithComponents.slice(4, 7)} />
		</section>

		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Estados</h3>
			<VariantsGrid variants={variantsWithComponents.slice(7)} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Formulario de Login</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
				<div class="space-y-4">
					<input
						type="email"
						placeholder="Email"
						class="w-full px-4 py-2 border border-border-default rounded bg-surface-page text-text-default"
					/>
					<input
						type="password"
						placeholder="Password"
						class="w-full px-4 py-2 border border-border-default rounded bg-surface-page text-text-default"
					/>
					<div class="flex gap-2">
						<Button intent="primary" class="flex-1">Iniciar sesión</Button>
						<Button intent="ghost">Cancelar</Button>
					</div>
				</div>
			</div>
		</div>

		<div>
			<h4 class="font-semibold mb-3 text-text-default">Acciones de Tabla</h4>
			<div class="p-6 border border-border-default rounded-lg bg-surface-card">
				<div class="flex gap-2">
					<Button intent="primary" size="sm">Editar</Button>
					<Button intent="secondary" size="sm">Ver</Button>
					<Button intent="danger" size="sm">Eliminar</Button>
				</div>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Button' }
		]}
	/>

	<ComponentShowcase
		name="Button"
		category="Atoms"
		description="Componente de botón versátil con múltiples variantes, tamaños y soporte para iconos."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

