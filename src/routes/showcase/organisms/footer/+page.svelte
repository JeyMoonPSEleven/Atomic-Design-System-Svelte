<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Footer } from '$lib/components/03-organisms';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Footer><Text>Contenido</Text></Footer>'
		}
	];

const props = [
		{
			name: 'children',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Contenido del footer'
		}
	];

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant }
	];

	const codeExample = `<script lang="ts">
  import { Footer } from '$lib/components/03-organisms';
  import { Text } from '$lib/components/01-atoms';
  
  {#snippet children()}
    <div class="text-center text-text-muted">
      <Text>© 2024 Atomic Design System</Text>
    </div>
  {/snippet}
<\/script>

<Footer>
  {@render children()}
</Footer>`;
</script>

{#snippet footerContent()}
		<div class="text-center text-text-muted">
			<Text>© 2024 Atomic Design System</Text>
		</div>
	{/snippet}

{#snippet defaultContent()}
		<div class="text-center text-text-muted">
			<Text>© 2024 Atomic Design System</Text>
		</div>
	{/snippet}

{#snippet defaultVariant()}
		<Footer>
			{@render defaultContent()}
		</Footer>
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
				<h4 class="font-semibold mb-3 text-text-default">Footer Completo</h4>
				<div class="border border-border-default rounded-lg bg-surface-card overflow-hidden">
					<Footer>
						{@render footerContent()}
					</Footer>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Footer' }
		]}
	/>

	<ComponentShowcase
		name="Footer"
		category="Organisms"
		description="Componente de pie de página con contenido personalizable."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>