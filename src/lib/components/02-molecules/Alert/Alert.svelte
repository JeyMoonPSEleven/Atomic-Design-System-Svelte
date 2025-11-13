<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import { Badge } from '$lib/components/01-atoms';

	const alertVariants = cva('rounded-lg border p-4', {
		variants: {
			variant: {
				info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-200',
				success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900 dark:border-green-700 dark:text-green-200',
				warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-200',
				danger: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900 dark:border-red-700 dark:text-red-200'
			}
		},
		defaultVariants: {
			variant: 'info'
		}
	});

	type Props = VariantProps<typeof alertVariants> & {
		class?: string;
		title?: string;
		children: import('svelte').Snippet;
	};

	let { variant, class: customClass, title, children }: Props = $props();
</script>

<div class={twMerge(alertVariants({ variant }), customClass)} role="alert">
	{#if title}
		<div class="mb-2 font-semibold">{title}</div>
	{/if}
	<div>
		{@render children()}
	</div>
</div>

