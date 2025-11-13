<script lang="ts">
	import { Tabs } from '$lib/components/02-molecules';
	import { Badge, Heading, Text } from '$lib/components/01-atoms';
	import PropsTable from './PropsTable.svelte';
	import CodeBlock from './CodeBlock.svelte';

	type Props = {
		name: string;
		category: 'Atoms' | 'Molecules' | 'Organisms' | 'Templates';
		description: string;
		preview: import('svelte').Snippet;
		code?: string;
		props?: Array<{
			name: string;
			type: string;
			default?: string;
			required?: boolean;
			description: string;
		}>;
		examples?: import('svelte').Snippet;
		class?: string;
	};

	let {
		name,
		category,
		description,
		preview,
		code = '',
		props = [],
		examples,
		class: customClass
	}: Props = $props();

	{#snippet previewTab()}
		{@render preview()}
	{/snippet}

	{#snippet codeTab()}
		{#if code}
			<CodeBlock {code} />
		{:else}
			<Text variant="muted">No hay código disponible para este componente.</Text>
		{/if}
	{/snippet}

	{#snippet propsTab()}
		{#if props.length > 0}
			<PropsTable {props} />
		{:else}
			<Text variant="muted">Este componente no tiene props documentadas.</Text>
		{/if}
	{/snippet}

	{#snippet examplesTab()}
		{#if examples}
			{@render examples()}
		{:else}
			<Text variant="muted">No hay ejemplos disponibles para este componente.</Text>
		{/if}
	{/snippet}

	const tabs = $derived([
		{ label: 'Preview', content: previewTab },
		...(code ? [{ label: 'Code', content: codeTab }] : []),
		...(props.length > 0 ? [{ label: 'Props', content: propsTab }] : []),
		...(examples ? [{ label: 'Examples', content: examplesTab }] : [])
	]);
</script>

<div class="space-y-6 {customClass}">
	<!-- Header -->
	<div class="border-b border-border-default pb-4">
		<div class="flex items-center gap-2 mb-2">
			<Badge variant="secondary">{category}</Badge>
			<Heading level="h1">{name}</Heading>
		</div>
		<Text variant="muted">{description}</Text>
	</div>

	<!-- Tabs -->
	<Tabs {tabs} />
</div>

