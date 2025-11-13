<script lang="ts">
	import { Card, Tabs } from '$lib/components/02-molecules';
	import { Heading } from '$lib/components/01-atoms';

	type SettingsSection = {
		label: string;
		content: import('svelte').Snippet;
	};

	type Props = {
		class?: string;
		sections: SettingsSection[];
	};

	let { class: customClass, sections }: Props = $props();
</script>

<div class="max-w-4xl mx-auto {customClass}">
	<Heading level="h1" class="mb-6">Configuración</Heading>
	<Tabs tabs={sections.map((s) => ({ label: s.label, content: s.content }))} />
</div>

