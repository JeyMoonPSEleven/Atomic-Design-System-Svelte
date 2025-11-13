<script lang="ts">
	import { Heading, Text, Link } from '$lib/components/01-atoms';
	import { Card } from '$lib/components/02-molecules';
</script>

<div class="max-w-4xl mx-auto">
	<Heading level="h1" class="mb-4">Sistema de Diseño - Documentación</Heading>
	<Text size="lg" class="mb-8 text-text-muted">
		Bienvenido al catálogo de componentes del sistema de diseño basado en Atomic Design.
	</Text>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
		<Card>
			{#snippet header()}
				<Heading level="h3">Átomos</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Componentes básicos e indivisibles. Los bloques de construcción fundamentales.
				</Text>
				<Link href="/docs/atoms" class="text-primary">Ver Átomos →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">Moléculas</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Composiciones simples de átomos que funcionan juntos como una unidad.
				</Text>
				<Link href="/docs/molecules" class="text-primary">Ver Moléculas →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">Organismos</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Componentes complejos formados por moléculas y/o átomos.
				</Text>
				<Link href="/docs/organisms" class="text-primary">Ver Organismos →</Link>
			{/snippet}
		</Card>
	</div>

	<section class="mt-12">
		<Heading level="h2" class="mb-4">Principios del Sistema</Heading>
		<ul class="list-disc list-inside space-y-2 text-text-default">
			<li>Atomic Design: Estructura jerárquica de componentes</li>
			<li>Svelte 5 Runes: Estado reactivo moderno</li>
			<li>Tailwind CSS v4: Estilos con tokens semánticos</li>
			<li>CVA: Variantes de componentes con class-variance-authority</li>
			<li>TypeScript: Tipado fuerte en todo el sistema</li>
		</ul>
	</section>
</div>

