<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Dashboard } from '$lib/components/03-organisms';
	import { Card } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Dashboard><Card>...</Card></Dashboard>'
		}
	];

const props = [
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Widgets del dashboard (normalmente Cards)'
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
		{ ...variants[0], component: defaultVariant }
	];

	const codeExample = `<script lang="ts">
  import { Dashboard } from '$lib/components/03-organisms';
  import { Card } from '$lib/components/02-molecules';
  import { Text } from '$lib/components/01-atoms';
  
  {#snippet widgets()}
    <Card>
      {#snippet children()}
        <Text>Widget 1</Text>
      {/snippet}
    </Card>
  {/snippet}
<\/script>

<Dashboard>
  {@render widgets()}
</Dashboard>`;
</script>

{#snippet widget1()}
	<Card>
		{#snippet children()}
			<Text>Widget 1</Text>
		{/snippet}
	</Card>
{/snippet}

{#snippet widget2()}
	<Card>
		{#snippet children()}
			<Text>Widget 2</Text>
		{/snippet}
	</Card>
{/snippet}

{#snippet widget3()}
	<Card>
		{#snippet children()}
			<Text>Widget 3</Text>
		{/snippet}
	</Card>
{/snippet}

{#snippet dashboardContent()}
	<Card>
		{#snippet children()}
			<Text>Widget 1</Text>
		{/snippet}
	</Card>
	<Card>
		{#snippet children()}
			<Text>Widget 2</Text>
		{/snippet}
	</Card>
	<Card>
		{#snippet children()}
			<Text>Widget 3</Text>
		{/snippet}
	</Card>
{/snippet}

{#snippet defaultVariant()}
		<Dashboard>
			{@render dashboardContent()}
		</Dashboard>
	{/snippet}

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
				<h4 class="font-semibold mb-3 text-text-default">Dashboard Completo</h4>
				<div class="max-w-4xl p-6 border border-border-default rounded-lg bg-surface-card">
					<Dashboard>
						{@render dashboardContent()}
					</Dashboard>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Dashboard' }
		]}
	/>

	<ComponentShowcase
		name="Dashboard"
		category="Organisms"
		description="Componente de dashboard con grid responsivo para organizar widgets (normalmente Cards)."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>