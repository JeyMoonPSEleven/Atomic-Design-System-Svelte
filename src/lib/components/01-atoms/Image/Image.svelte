<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLImgAttributes } from 'svelte/elements';

	const imageVariants = cva('object-cover', {
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

	type Props = VariantProps<typeof imageVariants> &
		HTMLImgAttributes & {
			class?: string;
		};

	let { rounded, class: customClass, ...rest }: Props = $props();
</script>

<img class={twMerge(imageVariants({ rounded }), customClass)} {...rest} />

