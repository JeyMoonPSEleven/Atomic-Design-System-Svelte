<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const tooltipVariants = cva(
		'absolute z-50 rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg',
		{
			variants: {
				position: {
					top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
					bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
					left: 'right-full mr-2 top-1/2 -translate-y-1/2',
					right: 'left-full ml-2 top-1/2 -translate-y-1/2'
				}
			},
			defaultVariants: {
				position: 'top'
			}
		}
	);

	type Props = VariantProps<typeof tooltipVariants> & {
		class?: string;
		text: string;
		children: import('svelte').Snippet;
	};

	let { position, class: customClass, text, children }: Props = $props();

	let show = $state(false);
</script>

<div
	class="relative inline-block"
	onmouseenter={() => (show = true)}
	onmouseleave={() => (show = false)}
>
	{@render children()}
	{#if show}
		<div class={twMerge(tooltipVariants({ position }), customClass)}>
			{text}
		</div>
	{/if}
</div>

