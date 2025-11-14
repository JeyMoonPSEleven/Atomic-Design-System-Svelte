<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Card } from '$lib/components/02-molecules';
	import { Button, Heading, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Basic',
			component: () => {},
			code: '<Card>Contenido básico</Card>'
		},
		{
			title: 'With Header',
			component: () => {},
			code: '<Card header={headerSnippet}>Contenido</Card>'
		},
		{
			title: 'With Footer',
			component: () => {},
			code: '<Card footer={footerSnippet}>Contenido</Card>'
		},
		{
			title: 'Small Padding',
			component: () => {},
			code: '<Card padding="sm">Contenido</Card>'
		},
		{
			title: 'Medium Padding',
			component: () => {},
			code: '<Card padding="md">Contenido</Card>'
		},
		{
			title: 'Large Padding',
			component: () => {},
			code: '<Card padding="lg">Contenido</Card>'
		}
	];

const props = [
		{
			name: 'padding',
			type: "'none' | 'sm' | 'md' | 'lg'",
			default: "'md'",
			required: false,
			description: 'Tamaño del padding interno'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		},
		{
			name: 'header',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Contenido del header de la tarjeta'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido principal de la tarjeta'
		},
		{
			name: 'footer',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Contenido del footer de la tarjeta'
		}
	];

const variantsWithComponents = [
		{ ...variants[0], component: basicVariant },
		{ ...variants[1], component: withHeaderVariant },
		{ ...variants[2], component: withFooterVariant },
		{ ...variants[3], component: smallPaddingVariant },
		{ ...variants[4], component: mediumPaddingVariant },
		{ ...variants[5], component: largePaddingVariant }
	];

	const codeExample = `<script lang="ts">
  import { Card } from '$lib/components/02-molecules';
  import { Button, Heading, Text } from '$lib/components/01-atoms';
  
  {#snippet header()}
    <Heading level="h3">Título</Heading>
  {/snippet}

  {#snippet content()}
    <Text>Contenido de la tarjeta</Text>
  {/snippet}

  {#snippet footer()}
    <Button size="sm">Acción</Button>
  {/snippet}
<\/script>

<Card header={header} children={content} footer={footer} />`;
</script>

{#snippet basicContent()}
		<Text>Contenido básico de la tarjeta</Text>
	{/snippet}

{#snippet headerContent()}
		<Heading level="h3">Título de la Tarjeta</Heading>
	{/snippet}

{#snippet withHeaderContent()}
		<Text>Contenido con header</Text>
	{/snippet}

{#snippet footerContent()}
		<Button size="sm">Acción</Button>
	{/snippet}

{#snippet withFooterContent()}
		<Text>Contenido con footer</Text>
	{/snippet}

{#snippet basicVariant()}
		<Card children={basicContent} />
	{/snippet}

{#snippet withHeaderVariant()}
		<Card header={headerContent} children={withHeaderContent} />
	{/snippet}

{#snippet withFooterVariant()}
		<Card footer={footerContent} children={withFooterContent} />
	{/snippet}

{#snippet smallPaddingContent()}
		<Text>Padding pequeño</Text>
	{/snippet}

{#snippet smallPaddingVariant()}
		<Card padding="sm" children={smallPaddingContent} />
	{/snippet}

{#snippet mediumPaddingContent()}
		<Text>Padding medio (default)</Text>
	{/snippet}

{#snippet mediumPaddingVariant()}
		<Card padding="md" children={mediumPaddingContent} />
	{/snippet}

{#snippet largePaddingContent()}
		<Text>Padding grande</Text>
	{/snippet}

{#snippet largePaddingVariant()}
		<Card padding="lg" children={largePaddingContent} />
	{/snippet}

{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Estructura</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, 3)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Padding</h3>
				<VariantsGrid variants={variantsWithComponents.slice(3)} />
			</section>
		</div>
	{/snippet}

{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Tarjeta de Producto</h4>
				<div class="max-w-sm">
					{#snippet productHeader()}
						<Heading level="h3">Producto</Heading>
					{/snippet}

					{#snippet productContent()}
						<Text class="mb-4">Descripción del producto con información detallada.</Text>
					{/snippet}

					{#snippet productFooter()}
						<div class="flex gap-2">
							<Button intent="primary" size="sm">Comprar</Button>
							<Button intent="secondary" size="sm">Ver más</Button>
						</div>
					{/snippet}

					<Card header={productHeader} children={productContent} footer={productFooter} />
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Card' }
		]}
	/>

	<ComponentShowcase
		name="Card"
		category="Molecules"
		description="Componente de tarjeta flexible con soporte para header, body y footer, con diferentes tamaños de padding."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>