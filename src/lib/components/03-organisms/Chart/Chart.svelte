<script lang="ts">
	type Props = {
		class?: string;
		type?: 'bar' | 'line' | 'pie';
		data: { label: string; value: number }[];
	};

	let { class: customClass, type = 'bar', data }: Props = $props();

	let maxValue = $derived(Math.max(...data.map((d) => d.value), 1));
</script>

<div class="bg-surface-card rounded-lg border border-border-default p-4 {customClass}">
	{#if type === 'bar'}
		<div class="flex items-end justify-between gap-2 h-48">
			{#each data as item}
				<div class="flex-1 flex flex-col items-center">
					<div
						class="w-full bg-primary rounded-t transition-all"
						style="height: {(item.value / maxValue) * 100}%"
					></div>
					<span class="mt-2 text-xs text-text-muted">{item.label}</span>
				</div>
			{/each}
		</div>
	{:else if type === 'line'}
		<div class="h-48 flex items-end">
			<svg class="w-full h-full" viewBox="0 0 400 200">
				{#each data as item, index}
					{@const x = (index / (data.length - 1 || 1)) * 400}
					{@const y = 200 - (item.value / maxValue) * 200}
					<circle cx={x} cy={y} r="4" fill="var(--color-primary)" />
					{#if index > 0}
						{@const prevX = ((index - 1) / (data.length - 1 || 1)) * 400}
						{@const prevY = 200 - (data[index - 1].value / maxValue) * 200}
						<line
							x1={prevX}
							y1={prevY}
							x2={x}
							y2={y}
							stroke="var(--color-primary)"
							stroke-width="2"
						/>
					{/if}
				{/each}
			</svg>
		</div>
	{:else}
		<div class="text-center text-text-muted">Pie chart placeholder</div>
	{/if}
</div>

