<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const headingVariants = cva('font-heading font-weight-heading text-text-default', {
		variants: {
			level: {
				h1: 'text-3xl',
				h2: 'text-2xl',
				h3: 'text-xl',
				h4: 'text-lg',
				h5: 'text-base',
				h6: 'text-sm'
			}
		},
		defaultVariants: {
			level: 'h1'
		}
	});

	type Props = VariantProps<typeof headingVariants> & {
		class?: string;
		children: import('svelte').Snippet;
	};

	let { level, class: customClass, children }: Props = $props();
</script>

<svelte:element
	this={level}
	class={twMerge(headingVariants({ level }), customClass)}
>
	{@render children()}
</svelte:element>

