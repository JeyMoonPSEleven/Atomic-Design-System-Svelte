<script lang="ts">
	type MenuItem = {
		label: string;
		href?: string;
		onclick?: () => void;
		divider?: boolean;
		icon?: import('svelte').Snippet;
	};

	type Props = {
		class?: string;
		items: MenuItem[];
	};

	let { class: customClass, items }: Props = $props();
</script>

<nav class={customClass}>
	<ul class="space-y-1">
		{#each items as item}
			{#if item.divider}
				<li class="my-2 border-t border-border-default"></li>
			{:else if item.href}
				<li>
					<a
						href={item.href}
						class="flex items-center px-4 py-2 text-sm text-text-default hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
					>
						{#if item.icon}
							<span class="mr-3">{@render item.icon()}</span>
						{/if}
						{item.label}
					</a>
				</li>
			{:else}
				<li>
					<button
						class="flex w-full items-center px-4 py-2 text-left text-sm text-text-default hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
						onclick={item.onclick}
					>
						{#if item.icon}
							<span class="mr-3">{@render item.icon()}</span>
						{/if}
						{item.label}
					</button>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

