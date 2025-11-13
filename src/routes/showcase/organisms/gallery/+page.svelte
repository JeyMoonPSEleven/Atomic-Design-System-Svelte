<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Gallery } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const galleryItems = [
		{
			src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300',
			alt: 'Imagen 1',
			caption: 'Imagen 1'
		},
		{
			src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300',
			alt: 'Imagen 2',
			caption: 'Imagen 2'
		},
		{
			src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300',
			alt: 'Imagen 3',
			caption: 'Imagen 3'
		}
	];

	const variants = [
		{
			title: '2 Columns',
			component: () => {},
			code: '<Gallery columns={2} items={items} />'
		},
		{
			title: '3 Columns',
			component: () => {},
			code: '<Gallery columns={3} items={items} />'
		},
		{
			title: '4 Columns',
			component: () => {},
			code: '<Gallery columns={4} items={items} />'
		}
	];

	const props = [
		{
			name: 'items',
			type: 'GalleryItem[]',
			default: 'required',
			required: true,
			description: 'Array de items con src, alt y caption opcional'
		},
		{
			name: 'columns',
			type: '1 | 2 | 3 | 4',
			default: '3',
			required: false,
			description: 'Número de columnas de la galería'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet twoColumnsVariant()}
		<Gallery columns={2} items={galleryItems} />
	{/snippet}

	{#snippet threeColumnsVariant()}
		<Gallery columns={3} items={galleryItems} />
	{/snippet}

	{#snippet fourColumnsVariant()}
		<Gallery columns={4} items={galleryItems} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: twoColumnsVariant },
		{ ...variants[1], component: threeColumnsVariant },
		{ ...variants[2], component: fourColumnsVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Columnas</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Galería de Imágenes</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
					<Gallery columns={3} items={galleryItems} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Gallery } from '$lib/components/03-organisms';
</script>

<Gallery columns={3} items={[
  { src: 'image1.jpg', alt: 'Imagen 1', caption: 'Imagen 1' },
  { src: 'image2.jpg', alt: 'Imagen 2', caption: 'Imagen 2' },
  { src: 'image3.jpg', alt: 'Imagen 3', caption: 'Imagen 3' }
]} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Gallery' }
		]}
	/>

	<ComponentShowcase
		name="Gallery"
		category="Organisms"
		description="Componente de galería de imágenes con grid configurable y soporte para captions."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

