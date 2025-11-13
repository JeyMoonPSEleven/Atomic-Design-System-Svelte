<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import { Button } from '$lib/components/01-atoms';

	const dropdownVariants = cva('absolute z-50 mt-2 w-56 rounded-md bg-surface-card shadow-lg border border-border-default', {
		variants: {
			position: {
				left: 'left-0',
				right: 'right-0'
			}
		},
		defaultVariants: {
			position: 'left'
		}
	});

	type DropdownItem = {
		label: string;
		href?: string;
		onclick?: () => void;
		divider?: boolean;
	};

	type Props = VariantProps<typeof dropdownVariants> & {
		class?: string;
		trigger: import('svelte').Snippet;
		items: DropdownItem[];
	};

	let { position, class: customClass, trigger, items }: Props = $props();

	let isOpen = $state(false);
	let dropdownRef: HTMLDivElement;

	$effect(() => {
		if (!isOpen) return;
		const handleClick = (e: MouseEvent) => {
			if (dropdownRef && !dropdownRef.contains(e.target as Node)) {
				isOpen = false;
			}
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
</script>

<div class="relative inline-block" bind:this={dropdownRef}>
	<button
		class="inline-flex items-center"
		onclick={() => (isOpen = !isOpen)}
	>
		{@render trigger()}
	</button>
	{#if isOpen}
		<div class={twMerge(dropdownVariants({ position }), customClass)}>
			<div class="py-1">
				{#each items as item}
					{#if item.divider}
						<div class="my-1 border-t border-border-default"></div>
					{:else if item.href}
						<a
							href={item.href}
							class="block px-4 py-2 text-sm text-text-default hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							{item.label}
						</a>
					{:else}
						<button
							class="block w-full px-4 py-2 text-left text-sm text-text-default hover:bg-gray-100 dark:hover:bg-gray-700"
							onclick={() => {
								item.onclick?.();
								isOpen = false;
							}}
						>
							{item.label}
						</button>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>

