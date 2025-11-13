<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Image } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Image src="url" alt="Imagen" />'
		},
		{
			title: 'Rounded None',
			component: () => {},
			code: '<Image rounded="none" src="url" alt="Imagen" />'
		},
		{
			title: 'Rounded Small',
			component: () => {},
			code: '<Image rounded="sm" src="url" alt="Imagen" />'
		},
		{
			title: 'Rounded Medium',
			component: () => {},
			code: '<Image rounded="md" src="url" alt="Imagen" />'
		},
		{
			title: 'Rounded Large',
			component: () => {},
			code: '<Image rounded="lg" src="url" alt="Imagen" />'
		},
		{
			title: 'Rounded Full',
			component: () => {},
			code: '<Image rounded="full" src="url" alt="Imagen" />'
		}
	];

	const props = [
		{
			name: 'rounded',
			type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
			default: "'md'",
			required: false,
			description: 'Nivel de redondeo de las esquinas'
		},
		{
			name: 'src',
			type: 'string',
			default: 'required',
			required: true,
			description: 'URL de la imagen'
		},
		{
			name: 'alt',
			type: 'string',
			default: 'required',
			required: true,
			description: 'Texto alternativo de la imagen'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		},
		{
			name: '...rest',
			type: 'HTMLImgAttributes',
			default: 'undefined',
			required: false,
			description: 'Todos los atributos HTML estándar de img'
		}
	];

	{#snippet defaultVariant()}
		<Image
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200"
			alt="Paisaje"
		/>
	{/snippet}

	{#snippet roundedNoneVariant()}
		<Image
			rounded="none"
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200"
			alt="Paisaje"
		/>
	{/snippet}

	{#snippet roundedSmallVariant()}
		<Image
			rounded="sm"
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200"
			alt="Paisaje"
		/>
	{/snippet}

	{#snippet roundedMediumVariant()}
		<Image
			rounded="md"
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200"
			alt="Paisaje"
		/>
	{/snippet}

	{#snippet roundedLargeVariant()}
		<Image
			rounded="lg"
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200"
			alt="Paisaje"
		/>
	{/snippet}

	{#snippet roundedFullVariant()}
		<Image
			rounded="full"
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200"
			alt="Paisaje"
		/>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: roundedNoneVariant },
		{ ...variants[2], component: roundedSmallVariant },
		{ ...variants[3], component: roundedMediumVariant },
		{ ...variants[4], component: roundedLargeVariant },
		{ ...variants[5], component: roundedFullVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Redondeo</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Galería de Imágenes</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<Image
						src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
						alt="Paisaje"
						class="rounded-lg w-full"
					/>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Image } from '$lib/components/01-atoms';
</script>

<Image src="https://example.com/image.jpg" alt="Descripción" />

<Image rounded="none" src="..." alt="..." />
<Image rounded="sm" src="..." alt="..." />
<Image rounded="md" src="..." alt="..." />
<Image rounded="lg" src="..." alt="..." />
<Image rounded="full" src="..." alt="..." />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Image' }
		]}
	/>

	<ComponentShowcase
		name="Image"
		category="Atoms"
		description="Componente de imagen con soporte para diferentes niveles de redondeo y atributos HTML estándar."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

