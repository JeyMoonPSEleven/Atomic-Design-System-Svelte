<script lang="ts">
	import { Heading, Text, Link } from '$lib/components/01-atoms';
	import { Card } from '$lib/components/02-molecules';
</script>

<div class="max-w-6xl mx-auto">
	<Heading level="h1" class="mb-4">Moléculas</Heading>
	<Text size="lg" class="mb-8 text-text-muted">
		Composiciones simples de átomos que funcionan juntos como una unidad.
	</Text>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<Card>
			{#snippet header()}
				<Heading level="h3">Card</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Contenedor con header, content y footer opcionales.
				</Text>
				<Link href="/docs/molecules/card" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">SearchForm</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Formulario de búsqueda con input y botón integrados.
				</Text>
				<Link href="/docs/molecules/search-form" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">Modal</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Ventana modal con overlay y gestión de foco.
				</Text>
				<Link href="/docs/molecules/modal" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>
	</div>
</div>

