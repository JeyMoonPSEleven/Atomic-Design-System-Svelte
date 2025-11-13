<script lang="ts">
	import { Heading, Text } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		message?: string;
	};

	let { class: customClass, message = 'Estamos realizando mantenimiento. Volveremos pronto.' }: Props = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-surface-page p-4 {customClass}">
	<div class="text-center">
		<Heading level="h1" class="mb-4">En Mantenimiento</Heading>
		<Text variant="muted" size="lg">{message}</Text>
	</div>
</div>

