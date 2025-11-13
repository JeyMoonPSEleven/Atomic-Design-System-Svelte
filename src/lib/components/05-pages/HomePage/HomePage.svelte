<script lang="ts">
	import Hero from '$lib/components/03-organisms/Hero/Hero.svelte';
	import { Landing } from '$lib/components/04-templates';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		heroTitle?: string;
		heroSubtitle?: string;
		children?: Snippet;
	};

	let { class: customClass, heroTitle, heroSubtitle, children }: Props = $props();
</script>

<Landing>
	{#snippet logo()}
		<!-- Logo placeholder -->
	{/snippet}

	{#snippet navigation()}
		<!-- Navigation placeholder -->
	{/snippet}

	{#snippet hero()}
		{#if heroTitle}
			<Hero
				title={heroTitle}
				subtitle={heroSubtitle}
				primaryAction={{
					label: 'Comenzar',
					href: '/docs'
				}}
				secondaryAction={{
					label: 'Ver más',
					href: '/showcase'
				}}
			/>
		{/if}
	{/snippet}

	{#snippet children()}
		{#if children}
			{@render children()}
		{/if}
	{/snippet}

	{#snippet footer()}
		<!-- Footer content -->
	{/snippet}
</Landing>

