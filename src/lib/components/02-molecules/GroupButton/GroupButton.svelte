<script lang="ts">
	import { Button } from '$lib/components/01-atoms';

	type ButtonItem = {
		label: string;
		value: string;
	};

	type Props = {
		class?: string;
		buttons: ButtonItem[];
		value?: string;
		onchange?: (value: string) => void;
	};

	let { class: customClass, buttons, value = $bindable(''), onchange }: Props = $props();
</script>

<div class="inline-flex rounded-md shadow-sm {customClass}" role="group">
	{#each buttons as button, index}
		<Button
			intent={value === button.value ? 'primary' : 'secondary'}
			size="md"
			class={
				index === 0
					? 'rounded-r-none'
					: index === buttons.length - 1
						? 'rounded-l-none border-l-0'
						: 'rounded-none border-l-0'
			}
			onclick={() => {
				value = button.value;
				onchange?.(value);
			}}
		>
			{button.label}
		</Button>
	{/each}
</div>

