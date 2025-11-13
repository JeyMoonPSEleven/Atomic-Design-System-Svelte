<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLInputAttributes } from 'svelte/elements';

	const checkboxVariants = cva(
		'h-4 w-4 rounded border-border-default text-primary focus:ring-2 focus:ring-primary',
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

	type Props = VariantProps<typeof checkboxVariants> &
		Omit<HTMLInputAttributes, 'type' | 'checked'> & {
			class?: string;
			checked?: boolean;
		};

	let { size, class: customClass, checked = $bindable(false), ...rest }: Props = $props();
</script>

<input
	type="checkbox"
	class={twMerge(checkboxVariants({ size }), customClass)}
	bind:checked
	{...rest}
/>

