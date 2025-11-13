<script lang="ts">
	import { Table } from '../Table';
	import { Pagination } from '$lib/components/02-molecules';

	type Props = {
		class?: string;
		headers: string[];
		rows: (string | import('svelte').Snippet)[][];
		currentPage?: number;
		totalPages?: number;
		onpagechange?: (page: number) => void;
	};

	let { class: customClass, headers, rows, currentPage = 1, totalPages = 1, onpagechange }: Props = $props();
</script>

<div class={customClass}>
	<Table {headers} {rows} />
	{#if totalPages > 1}
		<div class="mt-4">
			<Pagination {currentPage} {totalPages} {onpagechange} />
		</div>
	{/if}
</div>

