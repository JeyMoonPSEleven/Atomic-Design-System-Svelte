<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	const selectVariants = cva(
		'w-full rounded-md border bg-surface-input px-3 py-2 text-text-default focus:outline-none focus:ring-2 focus:ring-primary',
		{
			variants: {
				variant: {
					default: 'border-border-default',
					error: 'border-danger focus:ring-danger'
				},
				size: {
					sm: 'h-8 text-sm',
					md: 'h-10 text-base',
					lg: 'h-12 text-lg'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'md'
			}
		}
	);

	type Props = VariantProps<typeof selectVariants> &
		HTMLSelectAttributes & {
			class?: string;
			children?: import('svelte').Snippet;
		};

	let { variant, size, class: customClass, children, ...rest }: Props = $props();
</script>

<select
	class={twMerge(selectVariants({ variant, size }), customClass)}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</select>

