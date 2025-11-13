<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLInputAttributes } from 'svelte/elements';

	const radioVariants = cva(
		'h-4 w-4 border-border-default text-primary focus:ring-2 focus:ring-primary',
		{
			variants: {
				size: {
					sm: 'h-3 w-3',
					md: 'h-4 w-4',
					lg: 'h-5 w-5'
				}
			},
			defaultVariants: {
				size: 'md'
			}
		}
	);

	type Props = VariantProps<typeof radioVariants> &
		Omit<HTMLInputAttributes, 'type' | 'checked'> & {
			class?: string;
			group?: string;
			value?: string;
		};

	let { size, class: customClass, group = $bindable(''), value, ...rest }: Props = $props();
</script>

<input
	type="radio"
	class={twMerge(radioVariants({ size }), customClass)}
	bind:group
	{value}
	{...rest}
/>

