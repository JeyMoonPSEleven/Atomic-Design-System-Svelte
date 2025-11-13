<script lang="ts">
	import { Heading, Text, Link, Button } from '$lib/components/01-atoms';
	import { Card } from '$lib/components/02-molecules';
</script>

<div class="max-w-6xl mx-auto">
	<Heading level="h1" class="mb-4">Átomos</Heading>
	<Text size="lg" class="mb-8 text-text-muted">
		Componentes básicos e indivisibles del sistema de diseño.
	</Text>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<Card>
			{#snippet header()}
				<Heading level="h3">Button</Heading>
			{/snippet}
			{#snippet content()}
				<div class="mb-4 space-y-2">
					<Button intent="primary" size="sm">Primary Small</Button>
					<Button intent="secondary" size="md">Secondary</Button>
					<Button intent="danger" size="lg">Danger Large</Button>
				</div>
				<Link href="/docs/atoms/button" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">Input</Heading>
			{/snippet}
			{#snippet content()}
				<div class="mb-4">
					<input
						type="text"
						placeholder="Ejemplo de input"
						class="w-full px-4 py-2 border border-border-default rounded-md"
					/>
				</div>
				<Link href="/docs/atoms/input" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>

		<Card>
			{#snippet header()}
				<Heading level="h3">Heading</Heading>
			{/snippet}
			{#snippet content()}
				<div class="mb-4 space-y-2">
					<Heading level="h1" size="xl">Heading 1</Heading>
					<Heading level="h2" size="lg">Heading 2</Heading>
					<Heading level="h3" size="md">Heading 3</Heading>
				</div>
				<Link href="/docs/atoms/heading" class="text-primary">Ver documentación →</Link>
			{/snippet}
		</Card>
	</div>
</div>

