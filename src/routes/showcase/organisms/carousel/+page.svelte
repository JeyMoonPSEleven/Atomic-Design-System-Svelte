<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Carousel } from '$lib/components/03-organisms';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	{#snippet carouselItem1()}
		<div class="h-64 bg-primary flex items-center justify-center text-text-on-primary">
			<Text size="lg">Slide 1</Text>
		</div>
	{/snippet}

	{#snippet carouselItem2()}
		<div class="h-64 bg-danger flex items-center justify-center text-text-on-danger">
			<Text size="lg">Slide 2</Text>
		</div>
	{/snippet}

	{#snippet carouselItem3()}
		<div class="h-64 bg-primary flex items-center justify-center text-text-on-primary">
			<Text size="lg">Slide 3</Text>
		</div>
	{/snippet}

	const carouselItems = [carouselItem1, carouselItem2, carouselItem3];

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Carousel items={items} />'
		},
		{
			title: 'With Autoplay',
			component: () => {},
			code: '<Carousel items={items} autoplay interval={3000} />'
		}
	];

	const props = [
		{
			name: 'items',
			type: 'Snippet[]',
			default: 'required',
			required: true,
			description: 'Array de snippets para cada slide'
		},
		{
			name: 'autoplay',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Activar reproducción automática'
		},
		{
			name: 'interval',
			type: 'number',
			default: '3000',
			required: false,
			description: 'Intervalo en milisegundos para autoplay'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet slide1()}
		<div class="h-48 bg-primary flex items-center justify-center text-text-on-primary rounded-lg">
			<Text size="lg">Slide 1</Text>
		</div>
	{/snippet}

	{#snippet slide2()}
		<div class="h-48 bg-danger flex items-center justify-center text-text-on-danger rounded-lg">
			<Text size="lg">Slide 2</Text>
		</div>
	{/snippet}

	{#snippet defaultVariant()}
		<Carousel items={[slide1, slide2]} />
	{/snippet}

	{#snippet autoplaySlide1()}
		<div class="h-48 bg-primary flex items-center justify-center text-text-on-primary rounded-lg">
			<Text size="lg">Slide 1</Text>
		</div>
	{/snippet}

	{#snippet autoplaySlide2()}
		<div class="h-48 bg-danger flex items-center justify-center text-text-on-danger rounded-lg">
			<Text size="lg">Slide 2</Text>
		</div>
	{/snippet}

	{#snippet autoplayVariant()}
		<Carousel items={[autoplaySlide1, autoplaySlide2]} autoplay interval={3000} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: autoplayVariant }
	];

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
				<h4 class="font-semibold mb-3 text-text-default">Carrusel de Imágenes</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
					<Carousel items={carouselItems} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Carousel } from '$lib/components/03-organisms';
  import { Text } from '$lib/components/01-atoms';
  
  {#snippet slide1()}
    <div class="h-64 bg-primary">
      <Text>Slide 1</Text>
    </div>
  {/snippet}
  
  {#snippet slide2()}
    <div class="h-64 bg-danger">
      <Text>Slide 2</Text>
    </div>
  {/snippet}
</script>

<Carousel items={[slide1, slide2]} />
<Carousel items={[slide1, slide2]} autoplay interval={3000} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Carousel' }
		]}
	/>

	<ComponentShowcase
		name="Carousel"
		category="Organisms"
		description="Componente de carrusel para mostrar slides con navegación y soporte para autoplay."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

