<script lang="ts">
	import { Card, SearchBar } from "$lib/components/02-molecules";
	import { Heading, Text, Badge } from "$lib/components/01-atoms";
	import { Link } from "$lib/components/01-atoms";

	let searchQuery = $state("");

	const stats = [
		{
			label: "Átomos",
			count: 21,
			color: "red",
			icon: "🔴",
			href: "/showcase/atoms",
		},
		{
			label: "Moléculas",
			count: 20,
			color: "orange",
			icon: "🟠",
			href: "/showcase/molecules",
		},
		{
			label: "Organismos",
			count: 18,
			color: "green",
			icon: "🟢",
			href: "/showcase/organisms",
		},
		{
			label: "Templates",
			count: 11,
			color: "blue",
			icon: "🔵",
			href: "/showcase/templates",
		},
	];

	const totalComponents = stats.reduce((acc, s) => acc + s.count, 0);
</script>

<div class="max-w-6xl mx-auto space-y-12">
	<!-- Hero -->
	<section class="text-center py-12">
		<Heading level="h1" class="mb-4">Component Showcase</Heading>
		<Text size="lg" variant="muted" class="mb-8">
			Explora {totalComponents} componentes organizados en Atomic Design
		</Text>
		<div class="max-w-md mx-auto">
			<SearchBar
				bind:value={searchQuery}
				placeholder="Buscar componentes..."
			/>
		</div>
	</section>

	<!-- Stats Grid -->
	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{#each stats as stat}
			{#snippet statCard()}
				<div class="text-4xl font-bold text-primary mb-2">
					{stat.count}
				</div>
				<div class="text-text-muted">{stat.label}</div>
			{/snippet}
			<Card class="text-center" children={statCard} />
		{/each}
	</section>

	<!-- Quick Links -->
	<section>
		<Heading level="h2" class="mb-6">Categorías</Heading>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each stats as stat}
				{#snippet categoryHeader()}
					<div class="flex items-center gap-2 mb-4">
						<span class="text-2xl">{stat.icon}</span>
						<Heading level="h3">{stat.label}</Heading>
					</div>
				{/snippet}
				{#snippet categoryContent()}
					<Text variant="muted" class="mb-4">
						{#if stat.label === "Átomos"}
							Componentes básicos e indivisibles: Button, Input,
							Badge, etc.
						{:else if stat.label === "Moléculas"}
							Composiciones de Átomos: Card, Modal, Tabs, etc.
						{:else if stat.label === "Organismos"}
							Secciones complejas de UI: Header, Footer, Forms,
							etc.
						{:else}
							Estructuras de página completas: Landing, Dashboard,
							etc.
						{/if}
					</Text>
					<Link href={stat.href} class="text-primary font-medium">
						Ver {stat.label.toLowerCase()} →
					</Link>
				{/snippet}
				<Card header={categoryHeader} children={categoryContent} />
			{/each}
		</div>
	</section>

	<!-- Featured Components -->
	<section>
		<Heading level="h2" class="mb-6">Componentes Destacados</Heading>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#snippet buttonCard()}
				<div class="flex items-center gap-2 mb-2">
					<Badge variant="secondary">Átomo</Badge>
					<Heading level="h4">Button</Heading>
				</div>
				<Text variant="muted" class="mb-4 text-sm">
					Botón versátil con múltiples variantes y tamaños
				</Text>
				<Link
					href="/showcase/atoms/button"
					class="text-primary text-sm"
				>
					Ver componente →
				</Link>
			{/snippet}
			<Card children={buttonCard} />

			{#snippet cardCard()}
				<div class="flex items-center gap-2 mb-2">
					<Badge variant="secondary">Molécula</Badge>
					<Heading level="h4">Card</Heading>
				</div>
				<Text variant="muted" class="mb-4 text-sm">
					Tarjeta flexible con header, body y footer
				</Text>
				<Link
					href="/showcase/molecules/card"
					class="text-primary text-sm"
				>
					Ver componente →
				</Link>
			{/snippet}
			<Card children={cardCard} />

			{#snippet headerCard()}
				<div class="flex items-center gap-2 mb-2">
					<Badge variant="secondary">Organismo</Badge>
					<Heading level="h4">Header</Heading>
				</div>
				<Text variant="muted" class="mb-4 text-sm">
					Encabezado de página con navegación y logo
				</Text>
				<Link
					href="/showcase/organisms/header"
					class="text-primary text-sm"
				>
					Ver componente →
				</Link>
			{/snippet}
			<Card children={headerCard} />
		</div>
	</section>
</div>
