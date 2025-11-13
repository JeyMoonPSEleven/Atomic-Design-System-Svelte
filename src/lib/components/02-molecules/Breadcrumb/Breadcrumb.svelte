<script lang="ts">
	import { Link } from '$lib/components/01-atoms';

	type BreadcrumbItem = {
		label: string;
		href?: string;
	};

	type Props = {
		class?: string;
		items: BreadcrumbItem[];
	};

	let { class: customClass, items }: Props = $props();
</script>

<nav class="flex items-center space-x-2 {customClass}" aria-label="Breadcrumb">
	<ol class="flex items-center space-x-2">
		{#each items as item, index}
			<li class="flex items-center">
				{#if item.href && index < items.length - 1}
					<Link href={item.href} variant="muted">{item.label}</Link>
				{:else}
					<span class="text-text-muted" aria-current={index === items.length - 1 ? 'page' : undefined}>
						{item.label}
					</span>
				{/if}
				{#if index < items.length - 1}
					<span class="mx-2 text-text-muted">/</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

