<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Video } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Video src="url" controls />'
		},
		{
			title: 'Rounded None',
			component: () => {},
			code: '<Video rounded="none" src="url" controls />'
		},
		{
			title: 'Rounded Small',
			component: () => {},
			code: '<Video rounded="sm" src="url" controls />'
		},
		{
			title: 'Rounded Medium',
			component: () => {},
			code: '<Video rounded="md" src="url" controls />'
		},
		{
			title: 'Rounded Large',
			component: () => {},
			code: '<Video rounded="lg" src="url" controls />'
		},
		{
			title: 'With Poster',
			component: () => {},
			code: '<Video src="url" poster="url" controls />'
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
			description: 'URL del video'
		},
		{
			name: 'poster',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'URL de la imagen poster del video'
		},
		{
			name: 'controls',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Mostrar controles del video'
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
			type: 'HTMLVideoAttributes',
			default: 'undefined',
			required: false,
			description: 'Todos los atributos HTML estándar de video'
		}
	];

	{#snippet defaultVariant()}
		<Video
			src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			controls
			class="w-full max-w-xs"
		/>
	{/snippet}

	{#snippet roundedNoneVariant()}
		<Video
			rounded="none"
			src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			controls
			class="w-full max-w-xs"
		/>
	{/snippet}

	{#snippet roundedSmallVariant()}
		<Video
			rounded="sm"
			src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			controls
			class="w-full max-w-xs"
		/>
	{/snippet}

	{#snippet roundedMediumVariant()}
		<Video
			rounded="md"
			src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			controls
			class="w-full max-w-xs"
		/>
	{/snippet}

	{#snippet roundedLargeVariant()}
		<Video
			rounded="lg"
			src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			controls
			class="w-full max-w-xs"
		/>
	{/snippet}

	{#snippet withPosterVariant()}
		<Video
			src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
			controls
			class="w-full max-w-xs"
		/>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: roundedNoneVariant },
		{ ...variants[2], component: roundedSmallVariant },
		{ ...variants[3], component: roundedMediumVariant },
		{ ...variants[4], component: roundedLargeVariant },
		{ ...variants[5], component: withPosterVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Redondeo</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, 5)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Con Poster</h3>
				<VariantsGrid variants={variantsWithComponents.slice(5)} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Reproductor de Video</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<Video
						src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
						poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
						controls
						class="w-full rounded-lg"
					/>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Video } from '$lib/components/01-atoms';
</script>

<Video src="https://example.com/video.mp4" controls />

<Video rounded="none" src="..." controls />
<Video rounded="sm" src="..." controls />
<Video rounded="md" src="..." controls />
<Video rounded="lg" src="..." controls />

<Video src="..." poster="https://example.com/poster.jpg" controls />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Atoms', href: '/showcase/atoms' },
			{ label: 'Video' }
		]}
	/>

	<ComponentShowcase
		name="Video"
		category="Atoms"
		description="Componente de video con controles, soporte para poster y diferentes niveles de redondeo."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

