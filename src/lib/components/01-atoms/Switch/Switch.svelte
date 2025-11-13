<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLInputAttributes } from 'svelte/elements';

	const switchVariants = cva(
		'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
		{
			variants: {
				checked: {
					true: 'bg-primary',
					false: 'bg-gray-300'
				},
				size: {
					sm: 'h-5 w-9',
					md: 'h-6 w-11',
					lg: 'h-7 w-13'
				}
			},
			defaultVariants: {
				checked: false,
				size: 'md'
			}
		}
	);

	const thumbVariants = cva(
		'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
		{
			variants: {
				checked: {
					true: 'translate-x-6',
					false: 'translate-x-1'
				},
				size: {
					sm: 'h-3 w-3',
					md: 'h-4 w-4',
					lg: 'h-5 w-5'
				}
			},
			defaultVariants: {
				checked: false,
				size: 'md'
			}
		}
	);

	type Props = VariantProps<typeof switchVariants> &
		Omit<HTMLInputAttributes, 'type' | 'checked'> & {
			class?: string;
			checked?: boolean;
		};

	let { size, class: customClass, checked = $bindable(false), ...rest }: Props = $props();
</script>

<label class="relative inline-flex cursor-pointer items-center">
	<input
		type="checkbox"
		class="sr-only"
		bind:checked
		{...rest}
	/>
	<div class={twMerge(switchVariants({ checked, size }), customClass)}>
		<span class={twMerge(thumbVariants({ checked, size }))}></span>
	</div>
</label>

