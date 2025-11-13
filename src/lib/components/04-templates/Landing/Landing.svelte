<script lang="ts">
	import { Header, Footer, Hero } from '$lib/components/03-organisms';

	type Props = {
		logo?: import('svelte').Snippet;
		navigation?: import('svelte').Snippet;
		hero?: import('svelte').Snippet;
		children: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
	};

	let { logo, navigation, hero, children, footer }: Props = $props();
</script>

<div class="flex min-h-screen flex-col bg-surface-page">
	{#if navigation}
		<Header logo={logo} navigation={navigation} />
	{/if}
	{#if hero}
		{@render hero()}
	{/if}
	<main class="flex-1">
		{@render children()}
	</main>
	{#if footer}
		<Footer>
			{#snippet children()}
				{@render footer()}
			{/snippet}
		</Footer>
	{/if}
</div>

