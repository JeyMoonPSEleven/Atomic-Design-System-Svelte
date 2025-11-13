<script lang="ts">
	import { Button } from '$lib/components/01-atoms';

	type ToolbarAction = {
		label: string;
		icon?: import('svelte').Snippet;
		onclick?: () => void;
		intent?: 'primary' | 'secondary' | 'danger' | 'ghost';
	};

	type Props = {
		class?: string;
		title?: string;
		actions?: ToolbarAction[];
	};

	let { class: customClass, title, actions = [] }: Props = $props();
</script>

<div class="flex items-center justify-between border-b border-border-default p-4 {customClass}">
	{#if title}
		<h2 class="text-lg font-semibold text-text-default">{title}</h2>
	{/if}
	<div class="flex items-center gap-2">
		{#each actions as action}
			<Button intent={action.intent || 'secondary'} onclick={action.onclick}>
				{#if action.icon}
					<span class="mr-2">{@render action.icon()}</span>
				{/if}
				{action.label}
			</Button>
		{/each}
	</div>
</div>

