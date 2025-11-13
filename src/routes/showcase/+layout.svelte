<script lang="ts">
	import { SearchBar } from '$lib/components/02-molecules';
	import { Button, Heading } from '$lib/components/01-atoms';
	import { toggleTheme, theme } from '$lib/stores/theme';
	import ComponentSidebar from './ComponentSidebar.svelte';

	let { children } = $props();
	let searchQuery = $state('');
	let sidebarOpen = $state(true);
</script>

<div class="flex min-h-screen bg-surface-page">
	<!-- Sidebar -->
	<aside
		class="w-64 border-r border-border-default bg-surface-card transition-transform duration-300 {sidebarOpen
			? 'translate-x-0'
			: '-translate-x-full'} fixed md:sticky md:translate-x-0 top-0 h-screen overflow-y-auto z-40"
	>
		<div class="p-4 space-y-4">
			<div class="flex items-center justify-between">
				<Heading level="h2" class="text-lg font-bold text-text-default">
					Componentes
				</Heading>
				<button
					class="md:hidden p-1 hover:bg-surface-tertiary rounded"
					onclick={() => (sidebarOpen = false)}
					aria-label="Cerrar sidebar"
				>
					✕
				</button>
			</div>
			<SearchBar bind:value={searchQuery} placeholder="Buscar..." />
			<ComponentSidebar {searchQuery} />
		</div>
	</aside>

	<!-- Overlay para móvil -->
	{#if sidebarOpen}
		<div
			class="fixed inset-0 bg-black/50 z-30 md:hidden"
			role="button"
			tabindex="0"
			onclick={() => (sidebarOpen = false)}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					sidebarOpen = false;
				}
			}}
			aria-label="Cerrar sidebar"
		></div>
	{/if}

	<!-- Contenido principal -->
	<main class="flex-1 min-w-0">
		<!-- Header -->
		<header class="sticky top-0 z-20 bg-surface-card border-b border-border-default p-4">
			<div class="flex items-center justify-between">
				<button
					class="md:hidden p-2 hover:bg-surface-tertiary rounded"
					onclick={() => (sidebarOpen = true)}
					aria-label="Abrir sidebar"
				>
					☰
				</button>
				<div class="flex-1"></div>
				<Button intent="ghost" size="sm" onclick={toggleTheme}>
					{$theme === 'dark' ? '☀️' : '🌙'}
				</Button>
			</div>
		</header>

		<!-- Contenido -->
		<div class="p-6 md:p-8">
			{@render children()}
		</div>
	</main>
</div>

