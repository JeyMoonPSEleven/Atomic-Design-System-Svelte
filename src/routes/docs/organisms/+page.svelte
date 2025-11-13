<script lang="ts">
	import { Heading, Text, Link } from '$lib/components/01-atoms';
	import { Card } from '$lib/components/02-molecules';
</script>

<div class="max-w-6xl mx-auto">
	<Heading level="h1" class="mb-4">Organismos</Heading>
	<Text size="lg" class="mb-8 text-text-muted">
		Componentes complejos formados por moléculas y/o átomos.
	</Text>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<Card>
			{#snippet header()}
				<Heading level="h3">Header</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Encabezado de página con logo y navegación.
				</Text>
				<Link href="/docs/organisms/header" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">Footer</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Pie de página con enlaces y información.
				</Text>
				<Link href="/docs/organisms/footer" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">DataTable</Heading>
			{/snippet}
			{#snippet content()}
				<Text class="mb-4">
					Tabla de datos con paginación y filtros.
				</Text>
				<Link href="/docs/organisms/data-table" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>
	</div>
</div>

