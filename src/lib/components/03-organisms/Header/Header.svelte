<script lang="ts">
	import { setContext } from 'svelte';
	
	type Props = {
		logo?: import('svelte').Snippet;
		navigation?: import('svelte').Snippet;
		mobileMenuButton?: import('svelte').Snippet;
		mobileNavigationPanel?: import('svelte').Snippet;
	};
	
	let { logo, navigation, mobileMenuButton, mobileNavigationPanel }: Props = $props();
	
	// Usando Svelte 5 Runes ($state)
	let isMobileMenuOpen = $state(false);
	
	// 1. Proveer estado al contexto
	// 'Symbol' asegura una clave de contexto única
	const CONTEXT_KEY = Symbol('HeaderContext');
	setContext(CONTEXT_KEY, {
		// Proporcionar una función para alternar el estado
		toggleMenu: () => (isMobileMenuOpen = !isMobileMenuOpen),
		// Proporcionar el estado reactivo
		isOpen: () => isMobileMenuOpen
	});
</script>

<header class="bg-surface-header border-b border-border-muted">
	<nav class="container mx-auto flex items-center justify-between p-4">
		<div class="flex-shrink-0">
			{#if logo}
				{@render logo()}
			{/if}
		</div>
		
		<div class="hidden md:block">
			{#if navigation}
				{@render navigation()}
			{/if}
		</div>
		
		<div class="md:hidden">
			{#if mobileMenuButton}
				{@render mobileMenuButton()}
			{/if}
		</div>
	</nav>

	{#if isMobileMenuOpen}
		<div class="md:hidden border-t border-border-default">
			{#if mobileNavigationPanel}
				{@render mobileNavigationPanel()}
			{/if}
		</div>
	{/if}
</header>

