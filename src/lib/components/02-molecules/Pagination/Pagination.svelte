<script lang="ts">
	import { Button } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		currentPage?: number;
		totalPages?: number;
		onpagechange?: (page: number) => void;
	};

	let { class: customClass, currentPage = 1, totalPages = 1, onpagechange }: Props = $props();

	let pages = $derived(Array.from({ length: totalPages }, (_, i) => i + 1));
	let visiblePages = $derived(pages.slice(
		Math.max(0, currentPage - 2),
		Math.min(totalPages, currentPage + 3)
	));
</script>

<nav class="flex items-center justify-center space-x-2 {customClass}" aria-label="Pagination">
	<Button
		intent="ghost"
		size="sm"
		disabled={currentPage === 1}
		onclick={() => onpagechange?.(currentPage - 1)}
	>
		←
	</Button>
	{#each visiblePages as page}
		<Button
			intent={currentPage === page ? 'primary' : 'ghost'}
			size="sm"
			onclick={() => onpagechange?.(page)}
		>
			{page}
		</Button>
	{/each}
	<Button
		intent="ghost"
		size="sm"
		disabled={currentPage === totalPages}
		onclick={() => onpagechange?.(currentPage + 1)}
	>
		→
	</Button>
</nav>

