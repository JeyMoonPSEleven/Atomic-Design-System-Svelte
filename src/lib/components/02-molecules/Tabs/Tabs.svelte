<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const tabVariants = cva(
		'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
		{
			variants: {
				active: {
					true: 'border-primary text-primary',
					false: 'border-transparent text-text-muted hover:text-text-default hover:border-gray-300'
				}
			},
			defaultVariants: {
				active: false
			}
		}
	);

	type TabItem = {
		label: string;
		content: import('svelte').Snippet;
	};

	type Props = VariantProps<typeof tabVariants> & {
		class?: string;
		tabs: TabItem[];
		defaultTab?: number;
	};

	let { class: customClass, tabs, defaultTab = 0 }: Props = $props();

	let activeTab = $state(defaultTab);
</script>

<div class={customClass}>
	<div class="border-b border-border-default">
		<nav class="-mb-px flex space-x-8" aria-label="Tabs">
			{#each tabs as tab, index}
				<button
					class={twMerge(tabVariants({ active: activeTab === index }))}
					onclick={() => (activeTab = index)}
				>
					{tab.label}
				</button>
			{/each}
		</nav>
	</div>
	<div class="mt-4">
		{@render tabs[activeTab].content()}
	</div>
</div>

