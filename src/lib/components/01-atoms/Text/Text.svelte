<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const textVariants = cva('text-text-default', {
		variants: {
			variant: {
				default: 'text-text-default',
				muted: 'text-text-muted',
				danger: 'text-text-danger'
			},
			size: {
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg'
			},
			weight: {
				normal: 'font-normal',
				medium: 'font-medium',
				semibold: 'font-semibold',
				bold: 'font-bold'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
			weight: 'normal'
		}
	});

	type Props = VariantProps<typeof textVariants> & {
		class?: string;
		children: import('svelte').Snippet;
	};

	let { variant, size, weight, class: customClass, children }: Props = $props();
</script>

<p class={twMerge(textVariants({ variant, size, weight }), customClass)}>
	{@render children()}
</p>

