<script lang="ts">
	import { Header, Footer } from '$lib/components/03-organisms';

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
		<main class="flex-1">
			{@render children()}
		</main>
		{#if sidebar}
			<aside class="w-64">
				{@render sidebar()}
			</aside>
		{/if}
	</div>
	{#if footer}
		<Footer>
			{#snippet children()}
				{@render footer()}
			{/snippet}
		</Footer>
	{/if}
</div>

