<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import { Button } from '$lib/components/01-atoms';

	const toastVariants = cva('rounded-lg border p-4 shadow-lg', {
		variants: {
			variant: {
				success: 'bg-green-50 border-green-200 text-green-800',
				error: 'bg-red-50 border-red-200 text-red-800',
				warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
				info: 'bg-blue-50 border-blue-200 text-blue-800'
			}
		},
		defaultVariants: {
			variant: 'info'
		}
	});

	type Props = VariantProps<typeof toastVariants> & {
		class?: string;
		message: string;
		onclose?: () => void;
	};

	let { variant, class: customClass, message, onclose }: Props = $props();
</script>

<div class={twMerge(toastVariants({ variant }), customClass)} role="alert">
	<div class="flex items-center justify-between">
		<span>{message}</span>
		{#if onclose}
			<Button intent="ghost" size="sm" onclick={onclose}>×</Button>
		{/if}
	</div>
</div>

