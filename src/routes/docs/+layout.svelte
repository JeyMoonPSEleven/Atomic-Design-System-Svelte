<script lang="ts">
	import { Link } from '$lib/components/01-atoms';
	import { Heading } from '$lib/components/01-atoms';

	let { children } = $props();
</script>

<div class="min-h-screen bg-surface-page">
	<nav class="border-b border-border-default bg-surface-card">
		<div class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<Heading level="h2" class="text-xl font-bold">
					<a href="/docs" class="text-text-default hover:text-primary">Sistema de Diseño</a>
				</Heading>
				<div class="flex gap-4">
					<Link href="/docs">Inicio</Link>
					<Link href="/docs/atoms">Átomos</Link>
					<Link href="/docs/molecules">Moléculas</Link>
					<Link href="/docs/organisms">Organismos</Link>
					<Link href="/showcase">Showcase</Link>
				</div>
			</div>
		</div>
	</nav>
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
</div>

