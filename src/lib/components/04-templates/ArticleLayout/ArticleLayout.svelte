<script lang="ts">
	// Importa los organismos
	import { Header } from '$lib/components/03-organisms';
	import { Footer } from '$lib/components/03-organisms';
	
	type Props = {
		logo?: import('svelte').Snippet;
		navigation?: import('svelte').Snippet;
		mobileMenuButton?: import('svelte').Snippet;
		mobileNavigationPanel?: import('svelte').Snippet;
		heading?: import('svelte').Snippet;
		content?: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
	};
	
	let { logo, navigation, mobileMenuButton, mobileNavigationPanel, heading, content, footer }: Props = $props();
</script>

<div class="flex min-h-screen flex-col bg-surface-page text-text-default">
	
	<Header {logo} {navigation} mobileMenuButton={mobileMenuButton} mobileNavigationPanel={mobileNavigationPanel} />

	<main class="container mx-auto flex-grow px-4 py-8">
		<article class="prose dark:prose-invert max-w-none">
			{#if heading}
				{@render heading()}
			{/if}
			{#if content}
				{@render content()}
			{/if}
		</article>
	</main>
	
	<Footer>
		{#if footer}
			{@render footer()}
		{/if}
	</Footer>
</div>

