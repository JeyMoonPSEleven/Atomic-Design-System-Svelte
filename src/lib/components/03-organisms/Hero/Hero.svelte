<script lang="ts">
	import { Button, Heading, Text } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		title: string;
		subtitle?: string;
		primaryAction?: {
			label: string;
			href?: string;
			onclick?: () => void;
		};
		secondaryAction?: {
			label: string;
			href?: string;
			onclick?: () => void;
		};
		background?: import('svelte').Snippet;
	};

	let { class: customClass, title, subtitle, primaryAction, secondaryAction, background }: Props = $props();
</script>

<section class="relative py-16 px-4 {customClass}">
	{#if background}
		<div class="absolute inset-0 z-0">
			{@render background()}
		</div>
	{/if}
	<div class="relative z-10 container mx-auto text-center">
		<Heading level="h1" class="mb-4">{title}</Heading>
		{#if subtitle}
			<Text size="lg" class="mb-8 max-w-2xl mx-auto">{subtitle}</Text>
		{/if}
		<div class="flex items-center justify-center gap-4">
			{#if primaryAction}
				{#if primaryAction.href}
					<a href={primaryAction.href}>
						<Button intent="primary" size="lg">{primaryAction.label}</Button>
					</a>
				{:else}
					<Button intent="primary" size="lg" onclick={primaryAction.onclick}>
						{primaryAction.label}
					</Button>
				{/if}
			{/if}
			{#if secondaryAction}
				{#if secondaryAction.href}
					<a href={secondaryAction.href}>
						<Button intent="secondary" size="lg">{secondaryAction.label}</Button>
					</a>
				{:else}
					<Button intent="secondary" size="lg" onclick={secondaryAction.onclick}>
						{secondaryAction.label}
					</Button>
				{/if}
			{/if}
		</div>
	</div>
</section>

