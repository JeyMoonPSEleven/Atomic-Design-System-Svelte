<script lang="ts">
	import { Menu } from '$lib/components/02-molecules';

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
		logo?: import('svelte').Snippet;
	};

	let { class: customClass, items, logo }: Props = $props();
</script>

<aside class="w-64 bg-surface-header border-r border-border-default p-4 {customClass}">
	{#if logo}
		<div class="mb-6">
			{@render logo()}
		</div>
	{/if}
	<Menu {items} />
</aside>

