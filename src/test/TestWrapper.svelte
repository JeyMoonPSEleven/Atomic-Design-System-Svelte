<script lang="ts">
	import type { ComponentProps, Snippet } from 'svelte';
	
	type Props<T> = {
		component: new (...args: any[]) => T;
		componentProps?: ComponentProps<T>;
		children?: Snippet;
	};
	
	let { component: Component, componentProps = {}, children }: Props<any> = $props();
</script>

<svelte:component this={Component} {...componentProps}>
	{#if children}
		{@render children()}
	{/if}
</svelte:component>

