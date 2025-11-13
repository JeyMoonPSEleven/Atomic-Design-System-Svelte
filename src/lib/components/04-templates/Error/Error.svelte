<script lang="ts">
	import { Heading, Text, Button, Link } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		code?: number;
		title?: string;
		message?: string;
		action?: {
			label: string;
			href?: string;
			onclick?: () => void;
		};
	};

	let { class: customClass, code = 404, title, message, action }: Props = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-surface-page p-4 {customClass}">
	<div class="text-center">
		<Heading level="h1" class="text-9xl font-bold text-primary mb-4">{code}</Heading>
		{#if title}
			<Heading level="h2" class="mb-4">{title}</Heading>
		{/if}
		{#if message}
			<Text variant="muted" class="mb-8">{message}</Text>
		{/if}
		{#if action}
			{#if action.href}
				<Link href={action.href}>
					<Button intent="primary">{action.label}</Button>
				</Link>
			{:else}
				<Button intent="primary" onclick={action.onclick}>{action.label}</Button>
			{/if}
		{/if}
	</div>
</div>

