<script lang="ts">
	import { Header, Footer, Sidebar } from '$lib/components/03-organisms';

	type Props = {
		logo?: import('svelte').Snippet;
		navigation?: import('svelte').Snippet;
		sidebarItems?: import('svelte').Snippet;
		children: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
	};

	let { logo, navigation, sidebarItems, children, footer }: Props = $props();
</script>

<div class="flex min-h-screen bg-surface-page">
	{#if sidebarItems}
		<Sidebar items={[]} logo={logo} />
	{/if}
	<div class="flex-1 flex flex-col">
		{#if navigation}
			<Header logo={logo} navigation={navigation} />
		{/if}
		<main class="flex-1 p-6">
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
</div>

