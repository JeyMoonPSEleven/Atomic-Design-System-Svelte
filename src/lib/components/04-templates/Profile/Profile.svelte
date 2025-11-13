<script lang="ts">
	import { Header, Footer } from '$lib/components/03-organisms';
	import { Card } from '$lib/components/02-molecules';

	type Props = {
		logo?: import('svelte').Snippet;
		navigation?: import('svelte').Snippet;
		sidebar?: import('svelte').Snippet;
		children: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
	};

	let { logo, navigation, sidebar, children, footer }: Props = $props();
</script>

<div class="flex min-h-screen flex-col bg-surface-page">
	{#if navigation}
		<Header logo={logo} navigation={navigation} />
	{/if}
	<div class="container mx-auto flex flex-1 gap-8 px-4 py-8">
		{#if sidebar}
			<aside class="w-64">
				{@render sidebar()}
			</aside>
		{/if}
		<main class="flex-1">
			{@render children()}
		</main>
	</div>
	{#if footer}
		<Footer>
			{#snippet children()}
				{@render footer()}
			{/snippet}
		</Footer>
	{/if}
</div>

