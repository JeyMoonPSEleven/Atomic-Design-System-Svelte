<script lang="ts">
	import { Button } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		accept?: string;
		multiple?: boolean;
		onchange?: (files: FileList | null) => void;
	};

	let { class: customClass, accept, multiple = false, onchange }: Props = $props();

	let fileInput: HTMLInputElement;
	let fileName = $state<string>('');
</script>

<div class="flex items-center gap-2 {customClass}">
	<input
		bind:this={fileInput}
		type="file"
		class="hidden"
		{accept}
		{multiple}
		onchange={(e) => {
			const files = (e.target as HTMLInputElement).files;
			fileName = files?.[0]?.name || '';
			onchange?.(files);
		}}
	/>
	<Button intent="secondary" onclick={() => fileInput?.click()}>
		Seleccionar archivo
	</Button>
	{#if fileName}
		<span class="text-sm text-text-muted">{fileName}</span>
	{/if}
</div>

