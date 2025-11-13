<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const cardVariants = cva('bg-surface-card rounded-card border border-border-default', {
		variants: {
			padding: {
				none: 'p-0',
				sm: 'p-4',
				md: 'p-6',
				lg: 'p-8'
			}
		},
		defaultVariants: {
			padding: 'md'
		}
	});

	type Props = VariantProps<typeof cardVariants> & {
		class?: string;
		header?: import('svelte').Snippet;
		children: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
	};

	let { padding, class: customClass, header, children, footer }: Props = $props();
</script>

<div class={twMerge(cardVariants({ padding }), customClass)}>
	{#if header}
		<div class="mb-4 border-b border-border-default pb-4">
			{@render header()}
		</div>
	{/if}
	<div>
		{@render children()}
	</div>
	{#if footer}
		<div class="mt-4 border-t border-border-default pt-4">
			{@render footer()}
		</div>
	{/if}
</div>

