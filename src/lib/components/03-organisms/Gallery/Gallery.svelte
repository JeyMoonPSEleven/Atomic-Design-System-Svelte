<script lang="ts">
	import { Image } from '$lib/components/01-atoms';

	type GalleryItem = {
		src: string;
		alt: string;
		caption?: string;
	};

	type Props = {
		class?: string;
		items: GalleryItem[];
		columns?: 1 | 2 | 3 | 4;
	};

	let { class: customClass, items, columns = 3 }: Props = $props();

	let gridCols = $derived({
		1: 'grid-cols-1',
		2: 'grid-cols-2',
		3: 'grid-cols-3',
		4: 'grid-cols-4'
	}[columns]);
</script>

<div class="grid gap-4 {gridCols} {customClass}">
	{#each items as item}
		<figure class="overflow-hidden rounded-lg">
			<Image src={item.src} alt={item.alt} rounded="lg" />
			{#if item.caption}
				<figcaption class="mt-2 text-sm text-text-muted text-center">{item.caption}</figcaption>
			{/if}
		</figure>
	{/each}
</div>

