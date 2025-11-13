<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const swatchVariants = cva('rounded-md border border-border-default', {
		variants: {
			size: {
				sm: 'h-8 w-8',
				md: 'h-12 w-12',
				lg: 'h-16 w-16'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	type Props = VariantProps<typeof swatchVariants> & {
		class?: string;
		color?: string;
	};

	let { size, class: customClass, color = '#3b82f6' }: Props = $props();
</script>

<div
	class={twMerge(swatchVariants({ size }), customClass)}
	style="background-color: {color}"
	role="img"
	aria-label="Color swatch: {color}"
></div>

