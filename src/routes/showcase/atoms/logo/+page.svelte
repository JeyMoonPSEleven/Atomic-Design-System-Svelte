<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Logo } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Small',
			component: () => {},
			code: '<Logo size="sm">AD</Logo>'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Logo size="md">AD</Logo>'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Logo size="lg">AD</Logo>'
		},
		{
			title: 'XL',
			component: () => {},
			code: '<Logo size="xl">AD</Logo>'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			required: false,
			description: 'Tamaño del logo'
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
			description: 'Contenido del logo (texto o componente)'
		}
	];

	const variantsWithComponents = [
		{ ...variants[0], component: smallVariant },
		{ ...variants[1], component: mediumVariant },
		{ ...variants[2], component: largeVariant },
		{ ...variants[3], component: xlVariant }
	];

	const codeExample = `<script lang="ts">
  import { Logo } from '$lib/components/01-atoms';
<\/script>

<Logo size="sm">AD</Logo>
<Logo size="md">AD</Logo>
<Logo size="lg">AD</Logo>
<Logo size="xl">AD</Logo>`;
</script>

{#snippet smallVariant()}
	<Logo size="sm">AD</Logo>
{/snippet}

{#snippet mediumVariant()}
	<Logo size="md">AD</Logo>
{/snippet}

{#snippet largeVariant()}
	<Logo size="lg">AD</Logo>
{/snippet}

{#snippet xlVariant()}
	<Logo size="xl">AD</Logo>
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
			<h4 class="font-semibold mb-3 text-text-default">Uso en Header</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
				<div class="flex items-center gap-4">
					<Logo size="md">AD</Logo>
					<span class="text-text-default">Atomic Design System</span>
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
			{ label: 'Logo' }
		]}
	/>

	<ComponentShowcase
		name="Logo"
		category="Atoms"
		description="Componente de logo personalizable con diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

