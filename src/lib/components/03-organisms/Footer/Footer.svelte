<script lang="ts">
	type Props = {
		children?: import('svelte').Snippet;
	};
	
	let { children }: Props = $props();
</script>

<footer class="bg-surface-header border-t border-border-muted py-8">
	<div class="container mx-auto px-4">
		{#if children}
			{@render children()}
		{/if}
	</div>
</footer>

