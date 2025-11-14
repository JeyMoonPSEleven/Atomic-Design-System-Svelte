<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Navigation } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const navItems = [
		{ label: 'Inicio', href: '/', active: true },
		{ label: 'Acerca', href: '/about' },
		{ label: 'Contacto', href: '/contact' }
	];

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Navigation items={items} />'
		}
	];

const props = [
		{
			name: 'items',
			type: 'NavItem[]',
			default: 'required',
			required: true,
			description: 'Array de items de navegación con label, href y active opcional'
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
  import { Navigation } from '$lib/components/03-organisms';
<\/script>

<Navigation items={[
  { label: 'Inicio', href: '/', active: true },
  { label: 'Acerca', href: '/about' },
  { label: 'Contacto', href: '/contact' }
]} />`;
</script>

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
				<h4 class="font-semibold mb-3 text-text-default">Navegación Principal</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<Navigation items={[
						{ label: 'Inicio', href: '/', active: true },
						{ label: 'Showcase', href: '/showcase' },
						{ label: 'Documentación', href: '/docs' }
					]} />
				</div>
			</div>
		</div>
	{/snippet}

{#snippet defaultVariant()}
	<Navigation items={navItems} />
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Navigation' }
		]}
	/>

	<ComponentShowcase
		name="Navigation"
		category="Organisms"
		description="Componente de navegación horizontal con items y soporte para estado activo."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>