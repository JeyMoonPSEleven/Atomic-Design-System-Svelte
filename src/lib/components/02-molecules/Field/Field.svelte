<script lang="ts">
	import { Text } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		label?: string;
		error?: string;
		help?: string;
		required?: boolean;
		id?: string;
		children: import('svelte').Snippet;
	};

	let { class: customClass, label, error, help, required, id, children }: Props = $props();
	
	const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="space-y-2 {customClass}">
	{#if label}
		<label for={fieldId} class="block text-sm font-medium text-text-default">
			{label}
			{#if required}
				<span class="text-text-danger">*</span>
			{/if}
		</label>
	{/if}
	<div>
		{@render children()}
	</div>
	{#if error}
		<Text variant="danger" size="sm">{error}</Text>
	{/if}
	{#if help && !error}
		<Text variant="muted" size="sm">{help}</Text>
	{/if}
</div>

