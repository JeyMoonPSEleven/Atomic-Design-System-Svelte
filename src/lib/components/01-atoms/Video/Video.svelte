<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLVideoAttributes } from 'svelte/elements';

	const videoVariants = cva('rounded-lg', {
		variants: {
			rounded: {
				none: 'rounded-none',
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg',
				full: 'rounded-full'
			}
		},
		defaultVariants: {
			rounded: 'md'
		}
	});

	type Props = VariantProps<typeof videoVariants> &
		HTMLVideoAttributes & {
			class?: string;
		};

	let { rounded, class: customClass, ...rest }: Props = $props();
</script>

<video class={twMerge(videoVariants({ rounded }), customClass)} {...rest}></video>

