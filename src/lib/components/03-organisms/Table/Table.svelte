<script lang="ts">
	type Props = {
		class?: string;
		headers: string[];
		rows: (string | import('svelte').Snippet)[][];
	};

	let { class: customClass, headers, rows }: Props = $props();
</script>

<div class="overflow-x-auto {customClass}">
	<table class="min-w-full divide-y divide-border-default">
		<thead class="bg-surface-header">
			<tr>
				{#each headers as header}
					<th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted">
						{header}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody class="bg-surface-card divide-y divide-border-default">
			{#each rows as row}
				<tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
					{#each row as cell, colIndex}
						<td class="px-6 py-4 whitespace-nowrap text-sm text-text-default">
							{#if typeof cell === 'string'}
								{cell}
							{:else}
								{@render cell()}
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

