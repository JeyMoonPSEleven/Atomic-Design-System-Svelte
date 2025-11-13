<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	const linkVariants = cva('text-primary hover:text-primary-hover underline-offset-4 hover:underline', {
		variants: {
			variant: {
				default: 'text-primary',
				muted: 'text-text-muted hover:text-text-default',
				danger: 'text-text-danger hover:text-danger'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	type Props = VariantProps<typeof linkVariants> &
		HTMLAnchorAttributes & {
			class?: string;
			children: import('svelte').Snippet;
		};

	let { variant, class: customClass, children, ...rest }: Props = $props();
</script>

<a class={twMerge(linkVariants({ variant }), customClass)} {...rest}>
	{@render children()}
</a>

