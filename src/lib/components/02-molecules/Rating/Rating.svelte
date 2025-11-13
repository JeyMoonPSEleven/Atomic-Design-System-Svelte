<script lang="ts">
	type Props = {
		class?: string;
		value?: number;
		max?: number;
		readonly?: boolean;
		onchange?: (value: number) => void;
	};

	let { class: customClass, value = 0, max = 5, readonly = false, onchange }: Props = $props();
</script>

<div class="flex items-center space-x-1 {customClass}">
	{#each Array(max) as _, i}
		<button
			class="text-yellow-400 hover:text-yellow-500 disabled:cursor-not-allowed"
			disabled={readonly}
			onclick={() => {
				if (!readonly) {
					value = i + 1;
					onchange?.(value);
				}
			}}
		>
			{#if i < value}
				★
			{:else}
				☆
			{/if}
		</button>
	{/each}
</div>

