<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Tabs } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	{#snippet tab1Content()}
		<div class="p-4">
			<Text>Contenido de la Tab 1</Text>
		</div>
	{/snippet}

	{#snippet tab2Content()}
		<div class="p-4">
			<Text>Contenido de la Tab 2</Text>
		</div>
	{/snippet}

	{#snippet tab3Content()}
		<div class="p-4">
			<Text>Contenido de la Tab 3</Text>
		</div>
	{/snippet}

	const tabsExample = [
		{ label: 'Tab 1', content: tab1Content },
		{ label: 'Tab 2', content: tab2Content },
		{ label: 'Tab 3', content: tab3Content }
	];

	const variants = [
		{
			title: 'Basic Tabs',
			component: () => {},
			code: '<Tabs tabs={tabsArray} />'
		},
		{
			title: 'With Default Tab',
			component: () => {},
			code: '<Tabs tabs={tabsArray} defaultTab={1} />'
		}
	];

	const props = [
		{
			name: 'tabs',
			type: 'TabItem[]',
			default: 'required',
			required: true,
			description: 'Array de objetos con label y content (Snippet)'
		},
		{
			name: 'defaultTab',
			type: 'number',
			default: '0',
			required: false,
			description: 'Índice de la tab activa por defecto'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet basicTabsContent1()}
		<div class="p-4">
			<Text>Contenido de la Tab 1</Text>
		</div>
	{/snippet}

	{#snippet basicTabsContent2()}
		<div class="p-4">
			<Text>Contenido de la Tab 2</Text>
		</div>
	{/snippet}

	{#snippet basicTabsVariant()}
		<Tabs tabs={[{ label: 'Tab 1', content: basicTabsContent1 }, { label: 'Tab 2', content: basicTabsContent2 }]} />
	{/snippet}

	{#snippet defaultTabContent1()}
		<div class="p-4">
			<Text>Primera tab</Text>
		</div>
	{/snippet}

	{#snippet defaultTabContent2()}
		<div class="p-4">
			<Text>Segunda tab (activa por defecto)</Text>
		</div>
	{/snippet}

	{#snippet defaultTabVariant()}
		<Tabs tabs={[{ label: 'Tab 1', content: defaultTabContent1 }, { label: 'Tab 2', content: defaultTabContent2 }]} defaultTab={1} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: basicTabsVariant },
		{ ...variants[1], component: defaultTabVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Ejemplos</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Tabs en Formulario</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
					{#snippet formTab1()}
						<div class="p-4 space-y-4">
							<Text>Información personal</Text>
						</div>
					{/snippet}
					{#snippet formTab2()}
						<div class="p-4 space-y-4">
							<Text>Configuración de cuenta</Text>
						</div>
					{/snippet}
					{#snippet formTab3()}
						<div class="p-4 space-y-4">
							<Text>Preferencias</Text>
						</div>
					{/snippet}
					<Tabs tabs={[
						{ label: 'Personal', content: formTab1 },
						{ label: 'Cuenta', content: formTab2 },
						{ label: 'Preferencias', content: formTab3 }
					]} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Tabs } from '$lib/components/02-molecules';
  import { Text } from '$lib/components/01-atoms';
  
  {#snippet tab1()}
    <div class="p-4">
      <Text>Contenido de la Tab 1</Text>
    </div>
  {/snippet}
  
  {#snippet tab2()}
    <div class="p-4">
      <Text>Contenido de la Tab 2</Text>
    </div>
  {/snippet}
</script>

<Tabs tabs={[
  { label: 'Tab 1', content: tab1 },
  { label: 'Tab 2', content: tab2 }
]} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Tabs' }
		]}
	/>

	<ComponentShowcase
		name="Tabs"
		category="Molecules"
		description="Componente de tabs para organizar contenido en pestañas con navegación entre ellas."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

