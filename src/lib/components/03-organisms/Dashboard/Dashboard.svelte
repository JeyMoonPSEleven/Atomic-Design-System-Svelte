<script lang="ts">
	import { Card } from '$lib/components/02-molecules';

	type Props = {
		class?: string;
		children: import('svelte').Snippet;
	};

	let { class: customClass, children }: Props = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 {customClass}">
	{@render children()}
</div>

