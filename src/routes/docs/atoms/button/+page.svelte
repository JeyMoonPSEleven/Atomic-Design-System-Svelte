<script lang="ts">
	import { Button, Heading, Text } from '$lib/components/01-atoms';
	import { Card } from '$lib/components/02-molecules';
</script>

<div class="max-w-4xl mx-auto">
	<Heading level="h1" class="mb-4">Button</Heading>
	<Text size="lg" class="mb-8 text-text-muted">
		Componente de botón con soporte para variantes, tamaños e iconos.
	</Text>

	<section class="mb-8">
		<Heading level="h2" class="mb-4">Variantes</Heading>
		<Card>
			{#snippet content()}
				<div class="flex flex-wrap gap-4">
					<Button intent="primary">Primary</Button>
					<Button intent="secondary">Secondary</Button>
					<Button intent="danger">Danger</Button>
					<Button intent="ghost">Ghost</Button>
				</div>
			{/snippet}
		</Card>
	</section>

	<section class="mb-8">
		<Heading level="h2" class="mb-4">Tamaños</Heading>
		<Card>
			{#snippet content()}
				<div class="flex flex-wrap items-center gap-4">
					<Button intent="primary" size="sm">Small</Button>
					<Button intent="primary" size="md">Medium</Button>
					<Button intent="primary" size="lg">Large</Button>
				</div>
			{/snippet}
		</Card>
	</section>

	<section class="mb-8">
		<Heading level="h2" class="mb-4">Con Iconos</Heading>
		<Card>
			{#snippet content()}
				<div class="flex flex-wrap gap-4">
					<Button intent="primary">
						{#snippet icon()}
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4"
								/>
							</svg>
						{/snippet}
						Con Icono Izquierda
					</Button>
					<Button intent="secondary" iconPosition="right">
						Con Icono Derecha
						{#snippet icon()}
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						{/snippet}
					</Button>
				</div>
			{/snippet}
		</Card>
	</section>

	<section class="mb-8">
		<Heading level="h2" class="mb-4">Uso</Heading>
		<Card>
			{#snippet content()}
				<pre class="bg-surface-tertiary p-4 rounded-md overflow-x-auto"><code>{`<Button intent="primary" size="md">
  Click me
</Button>

<Button intent="primary" iconPosition="left">
  {#snippet icon()}
    <Icon name="plus" />
  {/snippet}
  Con Icono
</Button>`}</code></pre>
			{/snippet}
		</Card>
	</section>
</div>

