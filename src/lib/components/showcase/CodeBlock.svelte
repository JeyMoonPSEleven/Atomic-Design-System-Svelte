<script lang="ts">
	import { Button } from '$lib/components/01-atoms';

	type Props = {
		code: string;
		language?: string;
		class?: string;
	};

	let { code, language = 'svelte', class: customClass }: Props = $props();

	let copied = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Error al copiar:', err);
		}
	}
</script>

<div class="relative {customClass}">
	<pre class="bg-surface-card border border-border-default rounded-lg p-4 overflow-x-auto text-sm font-mono text-text-default"><code>{code}</code></pre>
	<Button
		intent="ghost"
		size="sm"
		class="absolute top-2 right-2"
		onclick={copyToClipboard}
		aria-label="Copiar código"
	>
		{copied ? '✓ Copiado' : '📋 Copiar'}
	</Button>
</div>

