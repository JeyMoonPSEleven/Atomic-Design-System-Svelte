<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const logoVariants = cva('font-bold text-text-default', {
		variants: {
			size: {
				sm: 'text-lg',
				md: 'text-xl',
				lg: 'text-2xl',
				xl: 'text-3xl'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	type Props = VariantProps<typeof logoVariants> & {
		class?: string;
		children: import('svelte').Snippet;
	};

	let { size, class: customClass, children }: Props = $props();
</script>

<div class={twMerge(logoVariants({ size }), customClass)}>
	{@render children()}
</div>

