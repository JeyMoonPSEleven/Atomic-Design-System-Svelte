<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLInputAttributes } from 'svelte/elements';

	const sliderVariants = cva(
		'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
		{
			variants: {
				size: {
					sm: 'h-1',
					md: 'h-2',
					lg: 'h-3'
				}
			},
			defaultVariants: {
				size: 'md'
			}
		}
	);

	type Props = VariantProps<typeof sliderVariants> &
		Omit<HTMLInputAttributes, 'type'> & {
			class?: string;
			value?: number;
		};

	let { size, class: customClass, value = $bindable(0), ...rest }: Props = $props();
</script>

<input
	type="range"
	class={twMerge(sliderVariants({ size }), customClass)}
	bind:value
	{...rest}
/>

