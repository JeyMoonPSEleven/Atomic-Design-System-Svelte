<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from "$lib/components/showcase";
	import { Error } from "$lib/components/04-templates";
	import { Breadcrumb } from "$lib/components/02-molecules";

	const variants = [
		{
			title: "404 Error",
			component: () => {},
			code: '<Error code={404} title="No encontrado" message="La página no existe" />',
		},
		{
			title: "500 Error",
			component: () => {},
			code: '<Error code={500} title="Error del servidor" message="Algo salió mal" />',
		},
		{
			title: "With Action",
			component: () => {},
			code: '<Error code={404} action={{label: "Volver", href: "/"}} />',
		},
	];

	const props = [
		{
			name: "code",
			type: "number",
			default: "404",
			required: false,
			description: "Código de error HTTP",
		},
		{
			name: "title",
			type: "string",
			default: "undefined",
			required: false,
			description: "Título del error",
		},
		{
			name: "message",
			type: "string",
			default: "undefined",
			required: false,
			description: "Mensaje descriptivo del error",
		},
		{
			name: "action",
			type: "{label: string, href?: string, onclick?: () => void}",
			default: "undefined",
			required: false,
			description: "Acción para el usuario (botón de volver, etc.)",
		},
		{
			name: "class",
			type: "string",
			default: "undefined",
			required: false,
			description: "Clases CSS adicionales",
		},
	];

	const variantsWithComponents = [
		{ ...variants[0], component: error404Variant },
		{ ...variants[1], component: error500Variant },
		{ ...variants[2], component: withActionVariant },
	];

	const codeExample = `<script lang="ts">
  import { Error } from '$lib/components/04-templates';
<\/script>

<Error code={404} title="No encontrado" message="La página no existe" />

<Error code={500} title="Error del servidor" message="Algo salió mal" />

<Error 
  code={404} 
  title="No encontrado" 
  action={{ label: 'Volver', href: '/' }} 
/>`;
</script>

{#snippet error404Variant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Error
			code={404}
			title="No encontrado"
			message="La página que buscas no existe"
		/>
	</div>
{/snippet}

{#snippet error500Variant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Error
			code={500}
			title="Error del servidor"
			message="Algo salió mal en el servidor"
		/>
	</div>
{/snippet}

{#snippet withActionVariant()}
	<div class="border border-border-default rounded-lg overflow-hidden h-64">
		<Error
			code={404}
			title="No encontrado"
			action={{ label: "Volver al inicio", href: "/" }}
		/>
	</div>
{/snippet}

{#snippet preview()}
	<div class="space-y-8">
		<section>
			<h3 class="text-lg font-semibold mb-4 text-text-default">
				Variantes
			</h3>
			<VariantsGrid variants={variantsWithComponents} />
		</section>
	</div>
{/snippet}

{#snippet examples()}
	<div class="space-y-6">
		<div>
			<h4 class="font-semibold mb-3 text-text-default">
				Página de Error
			</h4>
			<div
				class="border border-border-default rounded-lg overflow-hidden bg-surface-card h-96"
			>
				<Error
					code={404}
					title="Página no encontrada"
					message="La página que buscas no existe o ha sido movida"
					action={{ label: "Volver al inicio", href: "/" }}
				/>
			</div>
		</div>
	</div>
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: "Showcase", href: "/showcase" },
			{ label: "Templates", href: "/showcase/templates" },
			{ label: "Error" },
		]}
	/>

	<ComponentShowcase
		name="Error"
		category="Templates"
		description="Plantilla de página de error con código HTTP, título, mensaje y acción opcional."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>
