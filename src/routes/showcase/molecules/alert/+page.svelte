<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Alert } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Info',
			component: () => {},
			code: '<Alert variant="info" title="Información">Mensaje</Alert>'
		},
		{
			title: 'Success',
			component: () => {},
			code: '<Alert variant="success" title="Éxito">Mensaje</Alert>'
		},
		{
			title: 'Warning',
			component: () => {},
			code: '<Alert variant="warning" title="Advertencia">Mensaje</Alert>'
		},
		{
			title: 'Danger',
			component: () => {},
			code: '<Alert variant="danger" title="Error">Mensaje</Alert>'
		},
		{
			title: 'Without Title',
			component: () => {},
			code: '<Alert variant="info">Mensaje sin título</Alert>'
		}
	];

	const props = [
		{
			name: 'variant',
			type: "'info' | 'success' | 'warning' | 'danger'",
			default: "'info'",
			required: false,
			description: 'Variante visual del alert'
		},
		{
			name: 'title',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Título del alert'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido del alert'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet infoContent()}
		<Text>Este es un mensaje informativo.</Text>
	{/snippet}

	{#snippet infoVariant()}
		<Alert variant="info" title="Información">{@render infoContent()}</Alert>
	{/snippet}

	{#snippet successContent()}
		<Text>Operación completada exitosamente.</Text>
	{/snippet}

	{#snippet successVariant()}
		<Alert variant="success" title="Éxito">{@render successContent()}</Alert>
	{/snippet}

	{#snippet warningContent()}
		<Text>Ten cuidado con esta acción.</Text>
	{/snippet}

	{#snippet warningVariant()}
		<Alert variant="warning" title="Advertencia">{@render warningContent()}</Alert>
	{/snippet}

	{#snippet dangerContent()}
		<Text>Ha ocurrido un error.</Text>
	{/snippet}

	{#snippet dangerVariant()}
		<Alert variant="danger" title="Error">{@render dangerContent()}</Alert>
	{/snippet}

	{#snippet withoutTitleContent()}
		<Text>Mensaje sin título</Text>
	{/snippet}

	{#snippet withoutTitleVariant()}
		<Alert variant="info">{@render withoutTitleContent()}</Alert>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: infoVariant },
		{ ...variants[1], component: successVariant },
		{ ...variants[2], component: warningVariant },
		{ ...variants[3], component: dangerVariant },
		{ ...variants[4], component: withoutTitleVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Uso en Formulario</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					{#snippet formSuccess()}
						<Text>Tu formulario se ha enviado correctamente.</Text>
					{/snippet}
					<Alert variant="success" title="Éxito">{@render formSuccess()}</Alert>

					{#snippet formError()}
						<Text>Por favor, completa todos los campos requeridos.</Text>
					{/snippet}
					<Alert variant="danger" title="Error">{@render formError()}</Alert>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Alert } from '$lib/components/02-molecules';
  import { Text } from '$lib/components/01-atoms';
</script>

<Alert variant="info" title="Información">
  <Text>Este es un mensaje informativo.</Text>
</Alert>

<Alert variant="success" title="Éxito">
  <Text>Operación completada exitosamente.</Text>
</Alert>

<Alert variant="warning" title="Advertencia">
  <Text>Ten cuidado con esta acción.</Text>
</Alert>

<Alert variant="danger" title="Error">
  <Text>Ha ocurrido un error.</Text>
</Alert>`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Alert' }
		]}
	/>

	<ComponentShowcase
		name="Alert"
		category="Molecules"
		description="Componente de alerta para mostrar mensajes informativos, de éxito, advertencia o error."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

