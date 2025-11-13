<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Notifications } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const notifications = [
		{ id: '1', message: 'Notificación informativa', variant: 'info' as const },
		{ id: '2', message: 'Operación exitosa', variant: 'success' as const },
		{ id: '3', message: 'Advertencia importante', variant: 'warning' as const }
	];

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Notifications notifications={notifications} />'
		},
		{
			title: 'With Close Handler',
			component: () => {},
			code: '<Notifications notifications={notifications} onclose={(id) => ...} />'
		}
	];

	const props = [
		{
			name: 'notifications',
			type: 'Notification[]',
			default: 'required',
			required: true,
			description: 'Array de notificaciones con id, message y variant opcional'
		},
		{
			name: 'onclose',
			type: '(id: string) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando se cierra una notificación'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet defaultVariant()}
		<Notifications notifications={notifications} />
	{/snippet}

	{#snippet withCloseVariant()}
		<Notifications notifications={notifications} onclose={(id) => console.log('Cerrar:', id)} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withCloseVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Sistema de Notificaciones</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<Notifications notifications={notifications} onclose={(id) => console.log('Cerrar:', id)} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Notifications } from '$lib/components/03-organisms';
</script>

<Notifications notifications={[
  { id: '1', message: 'Notificación informativa', variant: 'info' },
  { id: '2', message: 'Operación exitosa', variant: 'success' },
  { id: '3', message: 'Advertencia importante', variant: 'warning' }
]} />

<Notifications notifications={notifications} onclose={(id) => console.log('Cerrar:', id)} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Notifications' }
		]}
	/>

	<ComponentShowcase
		name="Notifications"
		category="Organisms"
		description="Componente de sistema de notificaciones con múltiples variantes y soporte para cierre."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

