<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Accordion } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const accordionItems = [
		{ title: 'Item 1', content: accordionContent1 },
		{ title: 'Item 2', content: accordionContent2 },
		{ title: 'Item 3', content: accordionContent3 }
	];

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Accordion items={items} />'
		},
		{
			title: 'Bordered',
			component: () => {},
			code: '<Accordion variant="bordered" items={items} />'
		},
		{
			title: 'Multiple',
			component: () => {},
			code: '<Accordion multiple items={items} />'
		}
	];

const props = [
		{
			name: 'items',
			type: 'AccordionItem[]',
			default: 'required',
			required: true,
			description: 'Array de objetos con title y content (Snippet)'
		},
		{
			name: 'variant',
			type: "'default' | 'bordered'",
			default: "'default'",
			required: false,
			description: 'Variante visual del acordeón'
		},
		{
			name: 'multiple',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Permitir múltiples items abiertos simultáneamente'
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
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: borderedVariant },
		{ ...variants[2], component: multipleVariant }
	];
</script>

{#snippet content1()}
    <Text>Contenido del acordeón 1</Text>
  {/snippet}

{#snippet content2()}
    <Text>Contenido del acordeón 2</Text>
  {/snippet}

{#snippet accordionContent1()}
	<Text>Contenido del acordeón 1</Text>
{/snippet}

{#snippet accordionContent2()}
	<Text>Contenido del acordeón 2</Text>
{/snippet}

{#snippet accordionContent3()}
	<Text>Contenido del acordeón 3</Text>
{/snippet}

{#snippet defaultContent1()}
	<Text>Contenido del acordeón 1</Text>
{/snippet}

{#snippet defaultContent2()}
	<Text>Contenido del acordeón 2</Text>
{/snippet}

{#snippet defaultVariant()}
	<Accordion items={[{ title: 'Item 1', content: defaultContent1 }, { title: 'Item 2', content: defaultContent2 }]} />
{/snippet}

{#snippet borderedContent1()}
	<Text>Contenido con borde</Text>
{/snippet}

{#snippet borderedContent2()}
	<Text>Segundo item con borde</Text>
{/snippet}

{#snippet borderedVariant()}
	<Accordion variant="bordered" items={[{ title: 'Item 1', content: borderedContent1 }, { title: 'Item 2', content: borderedContent2 }]} />
{/snippet}

{#snippet multipleContent1()}
	<Text>Primer item (múltiple)</Text>
{/snippet}

{#snippet multipleContent2()}
	<Text>Segundo item (múltiple)</Text>
{/snippet}

{#snippet multipleVariant()}
	<Accordion multiple items={[{ title: 'Item 1', content: multipleContent1 }, { title: 'Item 2', content: multipleContent2 }]} />
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
			<VariantsGrid variants={variantsWithComponents} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">FAQ</h4>
			<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
				{#snippet faq1()}
					<Text>Puedes usar el componente Accordion para crear secciones colapsables.</Text>
				{/snippet}
				{#snippet faq2()}
					<Text>Soporta múltiples variantes y permite abrir varios items a la vez.</Text>
				{/snippet}
				{#snippet faq3()}
					<Text>Ideal para FAQs, menús de navegación y contenido organizado.</Text>
				{/snippet}
				<Accordion items={[
					{ title: '¿Cómo funciona?', content: faq1 },
					{ title: '¿Qué características tiene?', content: faq2 },
					{ title: '¿Cuándo usarlo?', content: faq3 }
				]} />
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Accordion' }
		]}
	/>

	<ComponentShowcase
		name="Accordion"
		category="Molecules"
		description="Componente de acordeón para mostrar contenido colapsable con soporte para múltiples items abiertos."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>