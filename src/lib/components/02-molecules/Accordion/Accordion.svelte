<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const accordionVariants = cva('border-b border-border-default', {
		variants: {
			variant: {
				default: '',
				bordered: 'border border-border-default rounded-md mb-2'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	type AccordionItem = {
		title: string;
		content: import('svelte').Snippet;
	};

	type Props = VariantProps<typeof accordionVariants> & {
		class?: string;
		items: AccordionItem[];
		multiple?: boolean;
	};

	let { variant, class: customClass, items, multiple = false }: Props = $props();

	let openItems = $state<Set<number>>(new Set());
</script>

<div class={twMerge(accordionVariants({ variant }), customClass)}>
	{#each items as item, index}
		<div class="border-b border-border-default last:border-b-0">
			<button
				class="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800"
				onclick={() => {
					if (openItems.has(index)) {
						openItems.delete(index);
					} else {
						if (!multiple) {
							openItems.clear();
						}
						openItems.add(index);
					}
					openItems = new Set(openItems);
				}}
			>
				<span class="font-medium text-text-default">{item.title}</span>
				<span class="text-text-muted">{openItems.has(index) ? '−' : '+'}</span>
			</button>
			{#if openItems.has(index)}
				<div class="p-4 pt-0 text-text-muted">
					{@render item.content()}
				</div>
			{/if}
		</div>
	{/each}
</div>

