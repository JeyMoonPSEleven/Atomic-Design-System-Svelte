<script lang="ts">
	import { Dashboard as DashboardTemplate } from '$lib/components/04-templates';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		sidebar?: Snippet;
		header?: Snippet;
		children: Snippet;
		footer?: Snippet;
	};

	let { class: customClass, sidebar, header, children, footer }: Props = $props();
</script>

<DashboardTemplate>
	{#snippet sidebar()}
		{#if sidebar}
			{@render sidebar()}
		{/if}
	{/snippet}

	{#snippet header()}
		{#if header}
			{@render header()}
		{/if}
	{/snippet}

	{#snippet content()}
		<div class={customClass}>
			{@render children()}
		</div>
	{/snippet}

	{#snippet footer()}
		{#if footer}
			{@render footer()}
		{/if}
	{/snippet}
</DashboardTemplate>

