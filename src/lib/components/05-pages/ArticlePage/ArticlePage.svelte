<script lang="ts">
	import { ArticleLayout } from '$lib/components/04-templates';
	import { Heading, Text } from '$lib/components/01-atoms';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		title: string;
		author?: string;
		date?: string;
		children: Snippet;
		sidebar?: Snippet;
	};

	let { class: customClass, title, author, date, children, sidebar }: Props = $props();
</script>

<ArticleLayout>
	{#snippet header()}
		<header class="mb-8">
			<Heading level="h1" class="mb-4">{title}</Heading>
			{#if author || date}
				<div class="flex items-center gap-4 text-text-muted">
					{#if author}
						<Text size="sm">Por {author}</Text>
					{/if}
					{#if date}
						<Text size="sm">{date}</Text>
					{/if}
				</div>
			{/if}
		</header>
	{/snippet}

	{#snippet content()}
		<article class={customClass}>
			{@render children()}
		</article>
	{/snippet}

	{#snippet sidebar()}
		{#if sidebar}
			<aside>
				{@render sidebar()}
			</aside>
		{/if}
	{/snippet}
</ArticleLayout>

