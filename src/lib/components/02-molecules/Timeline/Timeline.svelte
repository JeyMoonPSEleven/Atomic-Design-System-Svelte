<script lang="ts">
	type TimelineItem = {
		title: string;
		description?: string;
		date?: string;
	};

	type Props = {
		class?: string;
		items: TimelineItem[];
	};

	let { class: customClass, items }: Props = $props();
</script>

<div class="relative {customClass}">
	{#each items as item, index}
		<div class="relative flex pb-8 last:pb-0">
			<div class="flex flex-col items-center">
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-text-on-primary">
					{index + 1}
				</div>
				{#if index < items.length - 1}
					<div class="absolute top-8 h-full w-0.5 bg-border-default"></div>
				{/if}
			</div>
			<div class="ml-4 flex-1">
				<div class="font-semibold text-text-default">{item.title}</div>
				{#if item.description}
					<div class="mt-1 text-sm text-text-muted">{item.description}</div>
				{/if}
				{#if item.date}
					<div class="mt-1 text-xs text-text-muted">{item.date}</div>
				{/if}
			</div>
		</div>
	{/each}
</div>

