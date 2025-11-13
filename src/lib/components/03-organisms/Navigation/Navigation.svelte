<script lang="ts">
	import { Link } from '$lib/components/01-atoms';

	type NavItem = {
		label: string;
		href: string;
		active?: boolean;
	};

	type Props = {
		class?: string;
		items: NavItem[];
	};

	let { class: customClass, items }: Props = $props();
</script>

<nav class={customClass}>
	<ul class="flex space-x-4">
		{#each items as item}
			<li>
				<a
					href={item.href}
					class="px-3 py-2 text-sm font-medium {
						item.active
							? 'text-primary border-b-2 border-primary'
							: 'text-text-muted hover:text-text-default'
					}"
				>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

