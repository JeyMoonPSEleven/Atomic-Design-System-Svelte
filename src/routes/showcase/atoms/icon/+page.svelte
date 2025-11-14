<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Icon } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Small',
			component: () => {},
			code: '<Icon name="heart" size="sm" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Icon name="star" size="md" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Icon name="user" size="lg" />'
		},
		{
			title: 'XL',
			component: () => {},
			code: '<Icon name="user" size="xl" />'
		}
	];

	const props = [
		{
			name: 'name',
			type: 'IconName',
			default: 'undefined',
			required: false,
			description: 'Nombre del icono a mostrar'
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			required: false,
			description: 'Tamaño del icono'
		},
		{
			name: 'component',
			type: 'ComponentType',
			default: 'undefined',
			required: false,
			description: 'Componente de icono personalizado (sobreescribe name)'
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
		{ ...variants[0], component: smallVariant },
		{ ...variants[1], component: mediumVariant },
		{ ...variants[2], component: largeVariant },
		{ ...variants[3], component: xlVariant }
	];

	const codeExample = `<script lang="ts">
  import { Icon } from '$lib/components/01-atoms';
<\/script>

<Icon name="heart" size="sm" />
<Icon name="star" size="md" />
<Icon name="user" size="lg" />
<Icon name="user" size="xl" />`;
</script>

{#snippet smallVariant()}
	<Icon name="heart" size="sm" />
{/snippet}

{#snippet mediumVariant()}
	<Icon name="star" size="md" />
{/snippet}

{#snippet largeVariant()}
	<Icon name="user" size="lg" />
{/snippet}

{#snippet xlVariant()}
	<Icon name="user" size="xl" />
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
			<VariantsGrid variants={variantsWithComponents} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">Iconos en Botones</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
				<div class="flex gap-4">
					<Icon name="heart" size="sm" />
					<Icon name="star" size="md" />
					<Icon name="user" size="lg" />
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
			{ label: 'Icon' }
		]}
	/>

	<ComponentShowcase
		name="Icon"
		category="Atoms"
		description="Componente de icono con diferentes tamaños. Soporta iconos por nombre o componentes personalizados."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

