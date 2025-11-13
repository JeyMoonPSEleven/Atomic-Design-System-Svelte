<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import { Button } from '$lib/components/01-atoms';

	const modalVariants = cva('relative bg-surface-card rounded-lg shadow-xl', {
		variants: {
			size: {
				sm: 'max-w-md',
				md: 'max-w-lg',
				lg: 'max-w-2xl',
				xl: 'max-w-4xl',
				full: 'max-w-full'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	type Props = VariantProps<typeof modalVariants> & {
		class?: string;
		open?: boolean;
		title?: string;
		children: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
		onclose?: () => void;
	};

	let { size, class: customClass, open = $bindable(false), title, children, footer, onclose }: Props = $props();
	
	function closeModal() {
		open = false;
		onclose?.();
	}
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
		onclick={closeModal}
		role="dialog"
		aria-modal="true"
	>
		<div
			class={twMerge(modalVariants({ size }), customClass)}
			onclick={(e) => e.stopPropagation()}
		>
			{#if title}
				<div class="flex items-center justify-between border-b border-border-default p-6">
					<h2 class="text-xl font-semibold text-text-default">{title}</h2>
					<Button intent="ghost" size="sm" onclick={closeModal}>
						×
					</Button>
				</div>
			{/if}
			<div class="p-6">
				{@render children()}
			</div>
			{#if footer}
				<div class="border-t border-border-default p-6">
					{@render footer()}
				</div>
			{/if}
		</div>
	</div>
{/if}

