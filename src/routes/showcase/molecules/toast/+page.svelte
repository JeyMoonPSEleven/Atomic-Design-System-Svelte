<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Toast } from '$lib/components/02-molecules';
	import { Breadcrumb } from '$lib/components/02-molecules';

	let toastVisible = $state(false);

	const variants = [
		{
			title: 'Success',
			component: () => {},
			code: '<Toast message="Éxito" variant="success" />'
		},
		{
			title: 'Error',
			component: () => {},
			code: '<Toast message="Error" variant="error" />'
		},
		{
			title: 'Warning',
			component: () => {},
			code: '<Toast message="Advertencia" variant="warning" />'
		},
		{
			title: 'Info',
			component: () => {},
			code: '<Toast message="Información" variant="info" />'
		},
		{
			title: 'With Close',
			component: () => {},
			code: '<Toast message="Mensaje" onclose={() => ...} />'
		}
	];

	const props = [
		{
			name: 'message',
			type: 'string',
			default: 'required',
			required: true,
			description: 'Mensaje del toast'
		},
		{
			name: 'variant',
			type: "'success' | 'error' | 'warning' | 'info'",
			default: "'info'",
			required: false,
			description: 'Variante visual del toast'
		},
		{
			name: 'onclose',
			type: '() => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando se cierra el toast'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet successVariant()}
		<Toast message="Toast de éxito" variant="success" />
	{/snippet}

	{#snippet errorVariant()}
		<Toast message="Toast de error" variant="error" />
	{/snippet}

	{#snippet warningVariant()}
		<Toast message="Toast de advertencia" variant="warning" />
	{/snippet}

	{#snippet infoVariant()}
		<Toast message="Toast informativo" variant="info" />
	{/snippet}

	{#snippet withCloseVariant()}
		<Toast message="Este es un mensaje toast" onclose={() => toastVisible = false} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: successVariant },
		{ ...variants[1], component: errorVariant },
		{ ...variants[2], component: warningVariant },
		{ ...variants[3], component: infoVariant },
		{ ...variants[4], component: withCloseVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Notificaciones</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-2">
					<Toast message="Operación completada exitosamente" variant="success" />
					<Toast message="Ha ocurrido un error" variant="error" />
					<Toast message="Ten cuidado con esta acción" variant="warning" />
					<Toast message="Información importante" variant="info" />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Toast } from '$lib/components/02-molecules';
</script>

<Toast message="Toast de éxito" variant="success" />
<Toast message="Toast de error" variant="error" />
<Toast message="Toast de advertencia" variant="warning" />
<Toast message="Toast informativo" variant="info" />

<Toast message="Mensaje" onclose={() => console.log('Cerrado')} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Toast' }
		]}
	/>

	<ComponentShowcase
		name="Toast"
		category="Molecules"
		description="Componente de toast para notificaciones temporales con múltiples variantes y soporte para cierre."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

