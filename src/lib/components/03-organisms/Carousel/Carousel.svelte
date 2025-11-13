<script lang="ts">
	import { Button } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		items: import('svelte').Snippet[];
		autoplay?: boolean;
		interval?: number;
	};

	let { class: customClass, items, autoplay = false, interval = 3000 }: Props = $props();

	let currentIndex = $state(0);

	$effect(() => {
		if (!autoplay || items.length === 0) return;
		
		const timer = setInterval(() => {
			currentIndex = (currentIndex + 1) % items.length;
		}, interval);
		
		return () => clearInterval(timer);
	});
</script>

<div class="relative {customClass}">
	<div class="overflow-hidden">
		<div
			class="flex transition-transform duration-300"
			style="transform: translateX(-{currentIndex * 100}%)"
		>
			{#each items as item}
				<div class="min-w-full">
					{@render item()}
				</div>
			{/each}
		</div>
	</div>
	<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
		{#each items as _, index}
			<button
				class="h-2 w-2 rounded-full {
					index === currentIndex ? 'bg-primary' : 'bg-gray-300'
				}"
				onclick={() => (currentIndex = index)}
			></button>
		{/each}
	</div>
	{#if items.length > 1}
		<Button
			intent="ghost"
			size="sm"
			class="absolute left-4 top-1/2 -translate-y-1/2"
			onclick={() => (currentIndex = (currentIndex - 1 + items.length) % items.length)}
		>
			←
		</Button>
		<Button
			intent="ghost"
			size="sm"
			class="absolute right-4 top-1/2 -translate-y-1/2"
			onclick={() => (currentIndex = (currentIndex + 1) % items.length)}
		>
			→
		</Button>
	{/if}
</div>

