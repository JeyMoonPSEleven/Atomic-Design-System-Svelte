<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const spinnerVariants = cva('animate-spin rounded-full border-2 border-gray-300 border-t-primary', {
		variants: {
			size: {
				sm: 'h-4 w-4',
				md: 'h-6 w-6',
				lg: 'h-8 w-8',
				xl: 'h-12 w-12'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	type Props = VariantProps<typeof spinnerVariants> & {
		class?: string;
	};

	let { size, class: customClass }: Props = $props();
</script>

<div class={twMerge(spinnerVariants({ size }), customClass)} role="status" aria-label="Loading">
	<span class="sr-only">Loading...</span>
</div>

