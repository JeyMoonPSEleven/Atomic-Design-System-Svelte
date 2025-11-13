<script lang="ts">
	import CodeBlock from './CodeBlock.svelte';

	type Variant = {
		title: string;
		component: import('svelte').Snippet;
		code: string;
	};

	type Props = {
		variants: Variant[];
		class?: string;
	};

	let { variants, class: customClass }: Props = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 {customClass}">
	{#each variants as variant}
		<div class="border border-border-default rounded-lg p-4 space-y-3 bg-surface-card">
			<!-- Título -->
			<div class="font-medium text-sm text-text-muted">{variant.title}</div>

			<!-- Preview -->
			<div class="flex items-center justify-center p-6 bg-surface-tertiary rounded min-h-[80px]">
				{@render variant.component()}
			</div>

			<!-- Código -->
			<CodeBlock code={variant.code} />
		</div>
	{/each}
</div>

