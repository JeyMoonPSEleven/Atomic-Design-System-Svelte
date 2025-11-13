<script lang="ts">
	import { Button } from '$lib/components/01-atoms';
	import { Input } from '$lib/components/01-atoms';
	
	type Props = {
		class?: string;
		children: import('svelte').Snippet;
		button?: import('svelte').Snippet;
	};
	
	let { class: customClass, children, button, ...rest }: Props = $props();
</script>

<form class="flex items-center gap-2 {customClass}" {...rest}>
	<div class="flex-grow">
		{@render children()}
	</div>
	<div>
		{#if button}
			{@render button()}
		{:else}
			<Button type="submit">Buscar</Button>
		{/if}
	</div>
</form>

