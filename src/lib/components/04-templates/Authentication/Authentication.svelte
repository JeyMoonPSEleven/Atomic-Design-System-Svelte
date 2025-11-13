<script lang="ts">
	import { Card } from '$lib/components/02-molecules';
	import { Logo } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		children: import('svelte').Snippet;
		logo?: import('svelte').Snippet;
	};

	let { class: customClass, children, logo }: Props = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-surface-page p-4 {customClass}">
	<div class="w-full max-w-md">
		{#if logo}
			<div class="mb-8 text-center">
				{@render logo()}
			</div>
		{/if}
		<Card>
			{#snippet children()}
				{@render children()}
			{/snippet}
		</Card>
	</div>
</div>

