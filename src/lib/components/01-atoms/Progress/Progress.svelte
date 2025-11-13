<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const progressVariants = cva('w-full bg-gray-200 rounded-full overflow-hidden', {
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
	});

	type Props = VariantProps<typeof progressVariants> & {
		class?: string;
		value?: number;
		max?: number;
	};

	let { size, class: customClass, value = 0, max = 100 }: Props = $props();

	let percentage = $derived(Math.min(Math.max((value / max) * 100, 0), 100));
</script>

<div class={twMerge(progressVariants({ size }), customClass)}>
	<div
		class="h-full bg-primary transition-all duration-300"
		style="width: {percentage}%"
	></div>
</div>

