<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Switch } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';

	let switch1 = $state(false);
	let switch2 = $state(true);
	let switch3 = $state(false);

	const variants = [
		{
			title: 'Unchecked',
			component: () => {},
			code: '<Switch />'
		},
		{
			title: 'Checked',
			component: () => {},
			code: '<Switch checked={true} />'
		},
		{
			title: 'Small',
			component: () => {},
			code: '<Switch size="sm" />'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Switch size="md" />'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Switch size="lg" />'
		},
		{
			title: 'With Binding',
			component: () => {},
			code: '<Switch bind:checked={value} />'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del switch'
		},
		{
			name: 'checked',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Estado del switch (bindable)'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet uncheckedVariant()}
		<Switch />
	{/snippet}

	{#snippet checkedVariant()}
		<Switch checked={true} />
	{/snippet}

	{#snippet smallVariant()}
		<Switch size="sm" />
	{/snippet}

	{#snippet mediumVariant()}
		<Switch size="md" />
	{/snippet}

	{#snippet largeVariant()}
		<Switch size="lg" />
	{/snippet}

	{#snippet withBindingVariant()}
		<Switch bind:checked={switch1} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: uncheckedVariant },
		{ ...variants[1], component: checkedVariant },
		{ ...variants[2], component: smallVariant },
		{ ...variants[3], component: mediumVariant },
		{ ...variants[4], component: largeVariant },
		{ ...variants[5], component: withBindingVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Estados</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, 2)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents.slice(2, 5)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Con Binding</h3>
				<VariantsGrid variants={variantsWithComponents.slice(5)} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Configuración de Notificaciones</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<Text>Notificaciones por email</Text>
							<Switch bind:checked={switch2} />
						</div>
						<div class="flex items-center justify-between">
							<Text>Notificaciones push</Text>
							<Switch bind:checked={switch3} />
						</div>
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Switch } from '$lib/components/01-atoms';
  
  let checked = $state(false);
</script>

<Switch />
<Switch checked={true} />

<Switch size="sm" />
<Switch size="md" />
<Switch size="lg" />

<Switch bind:checked={checked} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Switch' }
		]}
	/>

	<ComponentShowcase
		name="Switch"
		category="Atoms"
		description="Componente de switch/toggle con soporte para binding reactivo y diferentes tamaños."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

