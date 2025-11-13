<script lang="ts">
	import { Button } from '$lib/components/01-atoms';
	import { Field } from '$lib/components/02-molecules';

	type Props = {
		class?: string;
		children: import('svelte').Snippet;
		onsubmit?: (e: SubmitEvent) => void;
	};

	let { class: customClass, children, onsubmit }: Props = $props();
</script>

<form class="space-y-6 {customClass}" onsubmit={onsubmit}>
	{@render children()}
</form>

