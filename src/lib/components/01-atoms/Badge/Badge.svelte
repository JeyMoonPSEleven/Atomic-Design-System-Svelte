<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const badgeVariants = cva(
		'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
		{
			variants: {
				variant: {
					default: 'bg-primary text-text-on-primary',
					secondary: 'bg-gray-100 text-text-default dark:bg-gray-700',
					success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
					warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
					danger: 'bg-danger text-text-on-danger'
				},
				size: {
					sm: 'px-2 py-0.5 text-xs',
					md: 'px-2.5 py-0.5 text-xs',
					lg: 'px-3 py-1 text-sm'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'md'
			}
		}
	);

	type Props = VariantProps<typeof badgeVariants> & {
		class?: string;
		children: import('svelte').Snippet;
	};

	let { variant, size, class: customClass, children }: Props = $props();
</script>

<span class={twMerge(badgeVariants({ variant, size }), customClass)}>
	{@render children()}
</span>

