<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Settings } from '$lib/components/03-organisms';
	import { Card, Tabs } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	{#snippet settingsGeneral()}
		<Card>
			{#snippet children()}
				<Text>Configuración general</Text>
			{/snippet}
		</Card>
	{/snippet}

	{#snippet settingsAccount()}
		<Card>
			{#snippet children()}
				<Text>Configuración de cuenta</Text>
			{/snippet}
		</Card>
	{/snippet}

	const settingsSections = [
		{ label: 'General', content: settingsGeneral },
		{ label: 'Cuenta', content: settingsAccount }
	];

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Settings sections={sections} />'
		}
	];

	const props = [
		{
			name: 'sections',
			type: 'SettingsSection[]',
			default: 'required',
			required: true,
			description: 'Array de secciones con label y content (Snippet)'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet generalContent()}
		<Card>
			{#snippet children()}
				<Text>Configuración general</Text>
			{/snippet}
		</Card>
	{/snippet}

	{#snippet accountContent()}
		<Card>
			{#snippet children()}
				<Text>Configuración de cuenta</Text>
			{/snippet}
		</Card>
	{/snippet}

	{#snippet defaultVariant()}
		<Settings sections={[
			{ label: 'General', content: generalContent },
			{ label: 'Cuenta', content: accountContent }
		]} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Ejemplo</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Panel de Configuración</h4>
				<div class="max-w-4xl p-6 border border-border-default rounded-lg bg-surface-card">
					<Settings sections={settingsSections} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Settings } from '$lib/components/03-organisms';
  import { Card } from '$lib/components/02-molecules';
  import { Text } from '$lib/components/01-atoms';
  
  {#snippet general()}
    <Card>
      {#snippet children()}
        <Text>Configuración general</Text>
      {/snippet}
    </Card>
  {/snippet}
</script>

<Settings sections={[
  { label: 'General', content: general },
  { label: 'Cuenta', content: account }
]} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Settings' }
		]}
	/>

	<ComponentShowcase
		name="Settings"
		category="Organisms"
		description="Componente de panel de configuración con secciones organizadas en tabs."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

